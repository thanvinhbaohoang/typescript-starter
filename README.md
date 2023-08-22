
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Testing with Postman
Open up Postman 

### To test main: 

GET request localhost:3000
> Return "Hello World!"

### To Test Products API:

> Get All Products: GET localhost:3000/products
> Get Product by ID: GET localhost:3000/products/:id
>

 ```javascript
Create Product: 
POST localhost:3000/products/
  {
    title: "title",
    description: "description",
    status: "TODO"
  }
```


> Delete Product by ID: DELETE localhost:3000/products/:id


## Test
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
