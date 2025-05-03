provider "aws" {
  region = "us-west-2"
}

# Key Pair for SSH Access
resource "aws_key_pair" "deployer_key" {
  key_name   = "deployer-key"
  public_key = file("~/.ssh/id_rsa.pub") # Path to your public SSH key
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

  # User data to install Docker
  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install docker -y
              service docker start
              usermod -aG docker ec2-user
              EOF
}

# Output the public IP of the EC2 instance
output "ec2_public_ip" {
  value = aws_instance.pinterest_clone_instance.public_ip
}