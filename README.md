# my-telegram-bot

// Install our dependencies

npm install --save express axios body-parser


- express : our app server

- axios: http client. A promise-based HTTP client for making requests to other servers. It's the opposite of Express — Express receives requests, Axios sends them. Cleaner than the built-in fetch or http module, with automatic JSON handling, interceptors, and better error handling.

- body-parser : help parse the response body received from each client request. Middleware that parses the body of incoming requests (like JSON or form data) so you can read it in req.body. When a client sends data (e.g., a POST request with JSON), the raw data arrives as a stream of bytes. Body-parser converts it into a usable JavaScript object.

