# NodeJs



## Thread or Event Loop:
In thread, something called the event loop is generated.
The role of this loop is to schedule which operations out only thread should be performing at any given point.
**Step1:**
Every thing scheduled with setTimeout() and setInterval() will be executed here.
**Step2:**
Pending OS tasks are executed, checks for the callbacks that are ready to be called
**Step3:**
Pause the execution and wait for new events to occur
**Step4:**
Checks if function related to pending timers related to setimmediate() function are ready to be called.
**Step5:**
Manage the close events

The program process - 
- The program intializes
- Requires all the modules
- Register the call backs
- Start the event loop
- When the event pool encounters a heavy task it pushes the task to the thread pool and the thread pool consist of 4 thread.



NodeJS uses an Event Driven Architecture

## RESTFUL API
- works on the **client and server** - This constraint operates on the concept that the client and the server should be sepearte from each other and allowed to evolve individually
- **Stateless** - Server is stateless - meaning that calls can made independently of one another, and each call contains all of the data necessary to complete itself successfully. example - **Next Page** - The client has to remember the current state/page to go to the next page not the server.
- **Use Logical Resources**
- **Resource Bases URL** - The API URL must use resource based URL.
example - GET /user insead of /getalluser
- **HTTP Methods** - 
- **Send data in JSON form**  







## MongoDb errors handled and removed customAPI error from error handler

## Cast error
Evaluating the syntax of the data searched in the MongoDB