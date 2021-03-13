package main

import (
	"log"
	"net/http"
)

func main() {
	router := NewRouter(AllRoutes())
	log.Fatal(http.ListenAndServe(":80", router))
}
