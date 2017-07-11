"# CD_SocketIO_EpicButtonGame" 
Troy Center troycenter1@gmail.com July 11, 2017
Coding Dojo Assignement for MEAN stack, Socket IO Fundamentals, "Epic Button Game"

<img src="http://s3.amazonaws.com/General_V88/boomyeah/company_209/chapter_2505/handouts/chapter2505_3023_epic-button-game.png" alt="Coding Dojo Assignment Image">

<h3>Assignment: Epic Button Game</h3>
For this assignment, build the app described in the mockup below using Express and sockets.  Your app should serve only a single view, index.ejs.  Any time the epic button is pushed, the count should update on every user who is connected via sockets.  This should happen in real time.  If a user clicks the reset button, the count should reset to 0 for every user as well!

Think about the events the client will need to listen for and the events the server must listen for.  Map out the emitters and listeners you will need before you start coding.  Use a variable on the server to keep track of how many times the button has been clicked.  