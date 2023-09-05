Pure node vs express js:


1. Simplified Routing: 
In express js, defining a route is straightforward ex: app.get() or app.post()

whereas In Pure Node.js Implementing routing from scratch involves parsing URLs, handling HTTP methods, and matching routes manually. It can become complex as the application grows.

2.	Middleware: 

Middlewares are the functionalities or components that are present in the req response cycle serves multiple purposes like authentication, logging and may other functionalities and we can use libraries like passport for authentication, logging, record session simply in app.use() as part of req, res cycle. 
But in pure node js, we have to write middlewares from scratch making code less modular and harder to maintain.

3. Community and Ecosystem:

 Example: The Express.js ecosystem offers numerous third-party middleware and extensions. You can quickly add features like passport a widely used library for authentication. 
In Pure Node.js: Finding and integrating these middleware can be time-consuming and requires more effort.

4. Error handling: 

        Express offers built in error handling middleware function acts as central error handling middleware function, so any error on any http method can pass on to the central one and provide common response.
        where as in pure nodejs, we have explicity define and write sepearete error handling middle ware function for each route makes code  less modular and hareder to maintain.

5. Template Engines: 
	
express js simplifies html rendering by using template engines like ejs or pug. whereas in pure node js rendering a html for dynamic pages requires more verbose and cumbersome


