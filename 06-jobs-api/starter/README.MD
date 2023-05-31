#### Setup

```bash
npm install && npm start
```

#### Database Connection

1. Import connect.js
2. Invoke in start()
3. Setup .env in the root
4. Add MONGO_URI with correct value

#### Routers

- auth.js
- jobs.js

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```

#### Register User

- Validate - name, email, password - with Mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Token
- Send Response with Token

#### Login User

- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- If correct, generate Token
- Send Response with Token

#### Mongoose Errors

- Validation Errors
- Duplicate (Email)
- Cast Error

#### Security

- helmet
- cors
- xss-clean
- express-rate-limit

Swagger UI

```yaml
/jobs/{id}:
  parameters:
    - in: path
      name: id
      schema:
        type: string
      required: true
      description: the job id
```


## Web Attacks and their Prevention

### Attacks 

#### XSS - Cross site Scripting attack
- It allows the attacker to inject client side scripting which enters in to the web page

- Preventation - 
- web application firewall (WAF) - filter malicious and proper normal code.
- configure and set the rules of WAF to prevent XSS

#### DDoS - Distributed Denial of service attack
The malious user tries to make a machine or n/w resource unavailable to user.

- prevention - 
1. Reduce attack surface area - We want to ensure that we do not expose our application or resources to ports, protocols or applications from where they do not expect any communication
2. Plan for scale - wo key considerations for mitigating large scale volumetric DDoS attacks are bandwidth (or transit) capacity and server capacity to absorb and mitigate attacks.
3. Know what is normal and abnormal traffic - The traffic as our host can handle without affecting availabiltiy.
4. Deply Firewalls for Sophisticated Application attacks
5. 
load balancer, redis, etc ..
A reliable and well reviewed DDoS protection tool for the best defence.