# HABITUALLY-GOOD-CLIENT

Live Demo:
https://habitually-good-client.vercel.app/

Server Repo here: https://github.com/mismyl123/habitually-good-server

Habitually Good: Plan for you
#Overview

Habitually Good is an full-stack application where users can create an account, log in, and access an interactive planner that allows you to create new habits to be your best self and most productive! Users can add new habits, edit existing habits, and remove existing habits. You can assign points for each habit dependint on it's priority for you.. Once you receive 500 points, you will level up!!

Language: Javascript
Technologies Used: Node.js, Express, PostgresQL, jQuery, HTML/CSS

#Registration 

1. User enters valid email & password => user dashboard
2. User enters valid email but no password => error message about must provide password
3. User enters valid password but no email => error message about must provide email
4. User enters simple password => error message about password too simple
5. User enters an email that is already taken  => message that email is already taken

#Log In      

1. User enters valid email & password => user dashboard
2. User enters invalid password => error message about incorrect username or password
3. User enter invalid email => error message about incorrect username or password

Dashboard       

1. User clicks anywhere on habit item => habit expands to show additional information
2. User clicks on edit icon of expanded habit item => redirect to edit habit form
3. User clicks on delete icon of expanded habit item => redirect to delete habit form
4. User clicks on add habit in nav => redirect to add habit form
5. User clicks on log out => logs out, redirects to landing page

Landing Page

1. User clicks on Register => redirect to registration form
2. User clicks on Log In => pop up log in form
3. User clicks on demo => redirect to demo dashboard

API Endpoints
POST /signup
https://raw.github.com/mismyl123/habitually-good-client/screenshots/REGISTER.png




Create a new user

POST /login


Log in to the application
GET /habits and GET /rewards


Display habits and rewards


POST /habits

Create new habits


POST /habits

Create new habits


PUT /habits/:id and PUT /rewards/:id

Edit existing habit
DELETE /habits/:id and DELETE /rewards/:id

Delete an existing habit or reward

