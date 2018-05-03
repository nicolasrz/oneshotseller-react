# One Shot Seller React

A quick project, which create e-commerce application without any registration of clients.

## Description

I have never found a project where we can sell products without registration.

Need everytime to create an account to buy something. 

So I tried this.

An application using Java and Angularjs/React for a quick e-shop, using Stripe for payments.

### Prerequisites
```
Nodejs / npm

Have a Stripe account and api keys.
```

## Development
```
git clone https://github.com/nicolasrz/oneshotseller-react
cd oneshotseller-react
npm install
npm start
```

## Deployment
```
git clone https://github.com/nicolasrz/oneshotseller-react
cd oneshotseller-react
npm install http-server -g
npm install
npm run-script build
http-server -p 80
```

## Deployment with HTTPS
```
git clone https://github.com/nicolasrz/oneshotseller-react
cd oneshotseller-react
npm install http-server -g
npm install
npm run-script build
rm build/static/js *.map
rm build/static/css *.map
http-server -p 443 -S -C /etc/letsencrypt/live/mydomain.com/cert.pem -K /etc/letsencrypt/live/mydomain.com/privkey.pem

```

## NB
Do not commit your Stripe api keys !
## Authors

* **Nicolas RUIZ**
