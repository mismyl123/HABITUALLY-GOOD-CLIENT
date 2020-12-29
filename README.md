# HABITUALLY-GOOD-CLIENT

Live Demo:
https://habitually-good-client.vercel.app/
https://habitually-good-client-61dmv8ahv.vercel.app/

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

<img width="978" alt="FRONTPAGE" src="https://user-images.githubusercontent.com/65927092/102105832-dd139380-3dfd-11eb-86fe-8cb3d6149d98.png">

<img width="843" alt="FRONTPAGE-BOTTOM" src="https://user-images.githubusercontent.com/65927092/102105979-08967e00-3dfe-11eb-97f5-21a8fc720c9c.png">
API Endpoints
POST /signup

<img width="856" alt="REGISTER" src="https://user-images.githubusercontent.com/65927092/102105391-5959a700-3dfd-11eb-8f0d-e94cdf6876a2.png">



Create a new user

POST /login

Log in to the application
GET /habits and GET /rewards
<img width="856" alt="LOGIN" src="https://user-images.githubusercontent.com/65927092/102105698-b5243000-3dfd-11eb-9e16-b71b1f66df65.png">


Display habits and rewards


POST /habits

Create new habits


POST /habits

Create new habits

<img width="850" alt="ADDNEWHABIT" src="https://user-images.githubusercontent.com/65927092/102106203-472c3880-3dfe-11eb-9111-61a8c0dfc782.png">


PUT /habits/:id and PUT /rewards/:id

Edit existing habit
DELETE /habits/:id and DELETE /rewards/:id

Delete an existing habit or reward

