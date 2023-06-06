# Final Thoughts
Here are some of our final thoughts about the tools we used during the project. 

## Helium
It works, but it's not great. Many times the web console was unavailable. We even got a 404 error trying to access the maing page once. Sending the data also has a weird snippet of code in the libraries that sometimes makes the feather comepletely crash. It basically asserts that the mode isn't ```None```, but there's no real need for it. 

## Cold starts
Both the GPS and the Helium network take forever to pick up after being off for more than 2 minutes. The GPS once took so long we thought we'd broken it, and the Helium connection once took about 30 minutes. The interesting thing is that once it's connected it works perfectly in all the areas where it refused to connect before. 