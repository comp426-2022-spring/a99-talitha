## Endpoints Behavior Documentation



### Using React

We ran into some issues involving React and our Webpack version/polyfills that we could not overcome--we ended up integrating the functionality of these endpoints within the actual page as a workaround, but these are some of our planned endpoints/functionality that we had brainstormed earlier on before realizing it was not possible for our current project structure. 


### /app/



#### Request


http://localhost:3000



#### Response



Displays the login page with a ability to autheticate the user's email and password, and a link to 'Sign up Here' for an ability for the user to sign up




### /app/login



#### Request



http://localhost:3000/login


Authenticate the email and password entered by the user and make sure it exists in the database



#### Response



If the username and password exists in the database, the pathname will change to "/dashboard".
The data will be pulled from the pollen API for the current date of successful login.


If the login is unsuccessful, an error message will be returned.



### /app/signup



#### Request



http://localhost:3000/signup



#### Response


If user clicks the 'Sign up Here' option on the login page, they are taken to a page with the "/signup" pathname.
The signup page collects name, location, email, password from the user and logs them into the database.

A popup error message is returned if the email already exists in the database, or if the location does not exist in the Pollen API.




### /app/dashboard/ (GET)



#### Request



http://localhost:3000/dashboard



#### Response


This page displays the name the user inputted in the login or signup page, and a bar chart and descriptions of the pollen levels based on the location the user inputted, and the date the user accesses this dashboard page. The information in the chart and description are taken from the pollen API Ambee.

This page also displays buttons to change the user's location and to sign out. If the user clicks the 'Sign Out' button, they will be redirected to the original login page and the database will show that they signed out.


### /app/account/



#### Request


http://localhost:3000/account


#### Response


If the user clicks the 'Change Location' button on the dashboard page, then the pathname is changed to '/account' and the user is taken to a page where they can update their personal location in the database. If the location is in the Pollen API database, it will update it in the database for the user and send the message "We have recieved your update". The new location name will also show up on this page. If it is invalid, it will return an error saying "Invalid location", and the user's location will remain the same.

The user can click the 'Back to Dashboard' button to view the chart and information for the updated location.

The user can also click the 'Delete Account' button on this page and it will remove the user and related information from the database. It will display a message that says "Your account has been deleted" and take the user back to the original login page.


