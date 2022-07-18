# companies-directory-app

## Description

Companies Directory App is Full Stack web application to manage a directory of companies. It allows users to register a company, query all companies, update a company or delete it. The application Back-End was built using Node.js, with Express.js for the server logic, and MySQL along with Sequelize to setup the SQL Database. For the Front-End, the main used was React.js, along with Bootstrap and React-Bootstrap packages. The language of the current Graphical User Interface is Spanish.

## User Story

- As a User
- I want to be able to register a company with information like name, date of constitution, company type and comments, also being able to update such information or delete a complete company record if needed
- So that I can keep track of all the companies that get my attention, to make business with or to purchase from them. 

## BDD

GIVEN a companies directory website
WHEN I load the homepage
THEN I am presented with a Header with the application name, a Footer with the developer contacts 
and a Main section with an Add Company button, a table of registered companies, displaying each company's name, date of contitution, type and Edit and Eliminate buttons
if there are no companies saved in the database, a heading displays: "Without companies..."
WHEN I click on the Add Company button
THEN I am presented with a modal to enter a company's name, date of constitution, type and comments, this modal has an Add button to submit the information
WHEN I click on the Add button, with all the required fields
THEN the company is saved into the database, a success message is displayed and the homepage table is updated,
however, if I forget to fill in the name, date of constitution or type, the company is not saved and a message is displayed asking me to fill in the required information.
Also, if I enter a future date I get a message asking me to select a valid date (today or before).
WHEN I click on the Edit button
THEN I am presented with a modal with all the fields already filled with the selected company
WHEN I modify the information on any field and click the Modify button in the modal
THEN the company information is updated in the database, a success message is displayed and the homepage table is updated
WHEN I click on the Eliminate button
THEN I am presented with a modal displaying the message "Are you sure you want to delete the company?", and Accept and Cancel buttons
WHEN I click on the Accept button
THEN the company record is deleted from the database, a message displays "The company has been deleted" and the homepage table is updated


## [Deployed Application](https://jvma-companies-directory-app.herokuapp.com/)

This is the link to the deployed application: https://jvma-companies-directory-app.herokuapp.com/

## Technologies Used

* JavaScript
* HTML
* CSS
* Node.js
* Express.js
* MySQL
* Sequelize
* React.js
* React-Icons
* Bootstrap
* React Bootstrap
* Heroku
* Git
* GitHub

## Contact Information

* GitHub Profile: [josevidmal](https://github.com/josevidmal)
* email: josevidmal@gmail.com

## License

[The MIT License](https://www.mit.edu/~amini/LICENSE.md)

Copyright 2022 Jose Vidal

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.