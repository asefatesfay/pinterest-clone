package main

import (
	"net/http"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	chiadapter "github.com/awslabs/aws-lambda-go-api-proxy/chi"
	"github.com/go-chi/chi/v5"
)

var chiLambda *chiadapter.ChiLambda

func init() {
	r := chi.NewRouter()

	// Define routes
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello from Go-chi!"))
	})

	r.Get("/api", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Welcome to the API-1!"))
	})

	// Wrap chi router with AWS Lambda adapter
	chiLambda = chiadapter.New(r)
}

func handler(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return chiLambda.Proxy(req)
}

func main() {
	lambda.Start(handler)
}
