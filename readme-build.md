
pop-movies-app

An app that displays details of popular movies

STEP 1 Create project in angular with command:

    ng new pop-movies-app

STEP 2 Create components: movie-details and movies

    ng g c movie-details ng g c movies

STEP 3 ng generate service movies --module=app

STEP 4 install bootstrap and add the file paths to the styles and scripts array in file .angular-cli.json:

    npm install bootstrap@3 jquery --save

    "styles": [ "styles.css", "../node_modules/bootstrap/dist/css/bootstrap.min.css" ],

    "scripts": [ "../node_modules/jquery/dist/jquery.min.js", "../node_modules/bootstrap/dist/js/bootstrap.min.js" ],

*Also install angular-ui bootstrap with the command:

    npm install angular-ui-bootstrap
