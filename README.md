
# Blogger: Neighborhood Blog Site

This project demonstrates a blogging application constructed in MEAN

Completed for Code Louisville's Spring 2017 session

## Web site features
- Tracking of bloggers and their postings
- All CRUD operations demonstrated

## Points of interest
- Responsive to large, medium and small media
- Small initial database can be re-seeded
- MongoDB authentication demonstrated

## Packages and frameworks
- MongoDB 3.4.2, Mongoose 4.8.2
- Express 4.14.1
- Angular 1.6.1
- Node.js 6.9.4
- Zurb Foundation

## To see it in action:
- Install the application and its runtime environment
    - Install Node.js
    - Install and prepare MongoDB
        - MongoDB can serve from "localhost" or from another network address
        - Determine where your MongoDB datastore will reside
        - Set up MongoDB administration user and database, if needed
        - Set up the application user and database
        - Set up CLI scripts to assist server and client shell startup
        - For prepared examples, refer to ./notes/MongoDB-notes.txt
        - Refer to the MongoDB documentation for installation advice
    - Download the application into a preferred folder
        - Use Git clone, or download and unpack the ZIP file
    - Retrieve npm modules and libraries
        - Issue the command "npm install" in the application folder
- Start the application
    - Start the MongoDB server
        - MongoDB can be run in its own command window, or as a background service
        - To demonstrate MongoDB authentication, use the --auth startup option 
        - Configure "mongoUsesAuth" in ./server/config.js to agree with the authentication option
        - MongoDB authentication is not required to run the application
    - Start a MongoDB client shell, if desired
    - Start the Blogger application
        - Open a command-line window in the application root
        - Issue "node index -c mongoip -u username -p password -r seed"
            - "mongoip" is the network address of your MongoDB server, most likely "localhost"
            - If MongoDB requires authentication, application startup will require a username and password
            - Use (optionally) "-r empty" or "-r seed" to reset the database
            - Use "node index --help" to see all options.
    - Start a web browser and point it to "localhost:8080/Home"
- Application highlights
    - Errors and route requests are logged to the Node.js console
    - "npm build" target can be used to rebuild the minimized Angular app after alterations
    - The AngularJS library is unminimized to allow for clearer error reporting

## Comments are welcome! Send to: Calvin Miracle, cbmira01@gmail.com
