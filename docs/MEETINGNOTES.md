# Meeting Notes

## March 24
### Pre Meeting Work
Brainstorming topics for web apps 
* Ruth: Covid app 
* Nila: Activity tracker
* Kadhir: Mental health dashboard 
* Jayden: Water drinking app / maybe calories
* Ian: Pollen tracker 
### Meeting Notes
* First meeting, we were all pitching our ideas to one another
* Eventually settled on Pollen Tracker to help users combat seasonal allergies 
    * Inspired by the insane amount of pollen that day 
* Rough Idea
    * Users can change locations
    * Rate their daily symptoms 
    * See the count for each type of pollen
    * See the data for 5 day forecast 
    *Not sure where to get this data from 
### Action Items
* Everyone start thinking about what framework to use 
* Find an API that could get us pollen data, preferably for free

## March 29
### Pre Meeting Work
* Options for Pollen Data: https://www.getambee.com/
    * Free for 15 days 
    * Gets the latest, history, and forecast (only one day though) 
    * Only 100 API calls per day 
* Another option: https://www.breezometer.com/products/pollen-api?utm_term=pollen%20api&utm_campaign=PPC%20Air%20Pollution&utm_source=adwords&utm_medium=ppc&hsa_acc=5247073082&hsa_cam=15055361939&hsa_grp=130159347262&hsa_ad=580336277435&hsa_src=g&hsa_tgt=kwd-357645955588&hsa_kw=pollen%20api&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw9qiTBhBbEiwAp-GE0ZOZpVNb9_F0wQzm4J1jiAR2cEvs7WuPBvXLNqTrNidEZQFMaXoIvBoC2_4QAvD_BwE
    * 14 day trial 
    * Documentation not that great 
    * Might be harder to implement
    * Has good data about symptoms, but is it necessary? 
### Meeting Notes
* Discussion on what API we should use
* Eventually settled on AMBEE because of the data it provided and easier integration with our project
* Settling on team roles:
    * Ian - Frontend + backend connection
    * Ruth - backend 
    * Jayden - front end + design 
    * Nila - front end + design 
    * Kadhir - database + documentation
### Action Items
* Look at frameworks
    * Node.js maybe? 
    * Possibly react? 
* Ian will make a base for us to build off of 
* Kadhir will research databases 
    * MongoDB
    * SQL 
    * Firebase / Firestore 
### Content to look at
https://www.youtube.com/watch?v=08UTom-2T0M (handles login and database setup)
https://www.youtube.com/watch?v=DG-fLXb1EdI (error messages and secure routes)
https://www.youtube.com/watch?v=qXXknB5bePU&t=48s 

## April 5
### Pre Meeting Work
* Ended up switching to react because it was a learning opportunity 
    * Something that would be useful for the future 
* Had to restart though, but the new template has been pushed
* Settled on Firebase / Firestore because it was most practical 
    * Helps with authentication 
### Meeting Notes
* Went over some design images 
* Talked about the database and what it should include
    * Should include the location 
    * The user 
        * Firebase gives people a unique user ID which we could use to have as their document number 
    * How to log the actions?
        * Maybe timestamps? 
    * Make way for people to log symptoms? 
        * Might be too complicated, prioritize basic functionality first
### Action Items
* Ian - pass data through the pages 
* Ruth - look at .env files and making it so we can push to github without sharing tokens 
* Jayden - design styling for all the pages 
* Nila - start designing components, such as forms and graphs 
* Kadhir - implement the database, log users 
### Content to look at
https://firebase.google.com/docs/firestore/manage-data/add-data
https://firebase.google.com/docs/auth/web/password-auth
https://create-react-app.dev/docs/adding-custom-environment-variables/

## April 28
### Pre Meeting Work
* Basic website is up and running 
* Needs to be redesigned 
* Firebase and API call is working 
* Logs are working
### Meeting Notes
* Walk through of each others code 
* Chances to ask questions/understand other areas 
* Fixed the issues some were facing running the program with firebase
### Action Items
* Need to tackle documentation 
* Planning notes need to be put into md files
* Film demo