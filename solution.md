To install necessary packages enter ### `npm install`

In order to run enter ### `npm start`

To change the port the code is run on, change the PORT value in the .env file

In future this code could be modified to enable the user to set the namespace 
(and see the current count on that namespace)

If the user wants richer reports we could display graphs showing them the count over time
(that would require we store our own history of the count and how it changes over time)

Right now we assume that the user is aware that the count can come from multiple sources 
and we aren't doing any authentication of the users that hit the count endpoint