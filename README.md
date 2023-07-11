# KC_Webapp
Webapp for Keycloak server (client and identity provider)

This build allows for basic authentication and token refresh flows, with a login-required private page that reads users' names from access token. The webapp checks for keycloak (kc) login/sso-session on refresh, and initializes kc instance to run frontend components.
Detailed info and setup is stated in the keycloak documentation, for step-by-step process to build the app.

Webapp code is contained in folder webapp/src. ReactJS is used for app frontend and TailwindCSS for site styling. 

App.js and Nav.js contain the webapp structure, header and styling. Webpages consist of public pages ('pages/homepage.js' and 'pages/publicpage.js'); and the private page (pages/privatepage.js) which requires user login to read.

ReactKeycloakProvider (wrapped in Nav.js) is used to connect the webapp to kc client server, with Keycloak.js containing kc client parameters. This is crucial to authenticate and send requests to kc oidc endpoints.

Once JS codes are complete, create the webapp build file (webapp/build) and run it to deploy the webapp. Ensure that the nginx proxy is configured and running first to expose the webapp to the AWS EC2 internet port.
