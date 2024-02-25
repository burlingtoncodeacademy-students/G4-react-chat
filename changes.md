Rooms comp rendered twice - removed a jsx line
Rearranged the order of endpoints in routers->rooms.js, added comments
Aligned error message format for endpoints in routers->rooms.js
Updated Rooms component jsx to show room id when room button is clicked (demaceo)
Debugged 'update room' endpoint from /update/:id to just /:id
Changed naming convention in Rooms->index.js to Room.js
Created css file for styling Rooms component (demaceo)
Updated wireframe/design and added .png file to project folder
Updated user schema- made addedUsers into an array so more can be added
Changed Rooms.js component name to RoomsList.js for clarity on what it is for
Declutter - removed setUpTest.js unnecessary file 
Updated comments throughout files
Updated Room.js component to try and fetch messages better (switched around useEffect)


*Steps to take:
- disable any Auth/token stuff that gets in way (I believe this is done)
- change index/landing page to login endpoint so that homepage is login (switch condition to render the Auth component on landing page?) (I believe this is done now)
  - after room messaging functionality is set up, then can work on authenticating users
- update room names (in db? unsure)
- Branching: maybe one for getting messages to show, and another for handling user login info? Or styling?
- handle message input from RoomsList component
  1. pass a function that allows the Room component to update the state of the RoomsList component w/ the new message
  2. may need to create function 'handleSendMessage' or similar in RoomsList that updates the messages for that current room. Example:
  const handleSendMessage = (message) => {
  // Update the messages for the current room
  // This function should add the message to the state variable for the selected room
  // For example, you can create a copy of the rooms, update the messages for the current room, and then setRooms with the updated array.
};
  3. 


Demaceo's advice:
 // Approach:
  /* 
  1. pretend you are a user visiting this site for the first time
  2. go through the website from start to finish 
  3. and fill in the functionality gaps 

  register user: 
  - once a user has registered, we can create/set the localStorage authToken key to a value. - if that key exists, then that means the user has already signed in and/or registered 
  so if they were to refresh the browser, the browser will not redirect them to the Login page but instead the Rooms

  login: 
  - user inputs email and password
  - functionality: check to see if that email and password exists in the database
  - if true, go to Rooms page.

  Exit:
  - upon exit, clear forms (upon render, clear form fields)
  */

  




