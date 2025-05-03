provider "aws" {
  region = "us-west-2"
}

# Generate SSH Key Pair on the Fly
resource "tls_private_key" "deployer_key" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

# Key Pair for SSH Access
resource "aws_key_pair" "deployer_key" {
  key_name   = "deployer-key"
  public_key = tls_private_key.deployer_key.public_key_openssh
}

# Security Group for EC2 Instance
resource "aws_security_group" "ec2_security_group" {
  name        = "pinterest-clone-sg"
  description = "Allow HTTP and SSH traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Allow SSH from anywhere (restrict in production)
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Allow HTTP traffic
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# EC2 Instance
resource "aws_instance" "pinterest_clone_instance" {
  ami           = "ami-0c02fb55956c7d316" # Amazon Linux 2 AMI (update to your region)
  instance_type = "t2.micro"
  key_name      = aws_key_pair.deployer_key.key_name
  security_groups = [
    aws_security_group.ec2_security_group.name
  ]

  tags = {
    Name = "pinterest-clone-instance"
  }

  # User data to install Node.js and PM2
  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              curl -sL https://rpm.nodesource.com/setup_18.x | bash -
              yum install -y nodejs git
              npm install -g pm2
              EOF
}

# Output the public IP of the EC2 instance
output "ec2_public_ip" {
  value = aws_instance.pinterest_clone_instance.public_ip
}

# Output the Private Key for SSH Access
output "private_key" {
  value     = tls_private_key.deployer_key.private_key_pem
  sensitive = true
}