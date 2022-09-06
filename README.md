# deploy-react-docker

Example of how to migrate a React + Express app hosted on a single Heroku Dyno to a different hosting service using Docker multi-stage build.
  
  The idea with this style of deployment is to set your Express app up to serve the static React app AND handle API endpoints. When Heroku was free this
was a really nice trick to get everything hosted in one place.   

This example shows the same effect can be achieved by using a Docker multistage build then deploying your Docker container
to a different free service instead.  

Test it out by deploying this to Heroku then deploying to some service that does docker images. Try Digitial Ocean? ¯\\_(ツ)_/¯  

Article I wrote about this:  
https://medium.com/@aaronnnnn/heroku-isnt-free-anymore-how-else-can-i-deploy-my-react-node-app-b6ba3afb67ba
