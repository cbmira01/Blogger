
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
- Mongo, Mongoose
- Express
- Angular
- Node-js
- Styled with Zurb Foundation

## To see it in action:
- Install the application and its runtime environment
    - Install Node-js
    - Install MongoDB
        - MongoDB can be installed on your workstation to serve from "localhost"
        - MongoDB can also be installed on another machine in your local network
        - Refer to the MongoDB website for installation advice
    - Prepare MongoDB
        - Set up MongoDB administration, if needed
        - Set up the project database
        - For prepared examples, refer to ./notes/MongoDB-notes.txt
    - Retrieve this Github project into a preferred folder
    - Open a CLI in the project folder and issue the command "npm install"
- Start the application
    - Start MongoDB server
        - To demonstrate authenticating mode, use the --auth option
        - The application will work fine without database authentication
    - Start MongoDB client shell, if desired
    - Start the application: "node index -c MongoDB-ip -u username -p password -r"
        - MongoDB-ip is the network address of your MongoDB instance, likely "localhost"
        - Use dummy username and password if your MongoDB instance does not authenticate
        - The -r option, if present, will re-seed the the project database from scratch
    - Start a web browser and point it to "localhost:8080/Home"
- Application highlights
    - Errors and route requests are logged to the Node-js console
    - "npm build" target can be used to rebuild the minimized Angular app after alterations
    - The Angular library is unminimized to allow for clearer error reporting

## Comments are welcome! Send to: Calvin Miracle, cbmira01@gmail.com
