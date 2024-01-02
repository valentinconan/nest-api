# nest-api

## Main purpose
This project is an example of a quick-start project developed with nest, exposing a rest API

## Technical details
The rest api is exposed using `nest`

Two dockers are generated:
- one based on the official `node` image
- one based on the official `apline` image and embedding a native version of the node application, build with `pkg`

## How to build
An utility script `build.sh` allows to build project and docker images

## How to test it ?
### Get state
States endpoints :
- base : `curl  http://localhost:3000/health`
- readiness : `curl  http://localhost:3000/health/readiness` returns only http 200 code if everything is correct
- liveness : `curl  http://localhost:3000/health/liveness` returns only http 200 code if everything is correct
- probeness : `curl  http://localhost:3000/health/probeness`  returns only http 200 code if everything is correct

User endpoint : 
- user/all : curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMoxNTE2MjM5MDIyfQ.5mhBHqs5_DTLdINd9p5m7ZJ6XD0Xc55kIaCRY5r6HRA" http://localhost:3000/user/all
- user/create : curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.5mhBHqs5_DTLdINd9p5m7ZJ6XD0Xc55kIaCRY5r6HRA" -H "Content-Type: application/json" --data '{"id":2,"name":"doe"}' http://localhost:3000/user
