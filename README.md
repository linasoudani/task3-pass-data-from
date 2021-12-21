# Task3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.




1) Create an addDetails component and in the template create a User Details Reactive form with input 
fields First Name, Last Name, Email, Password, Confirm Password, Company Name, Date of Joining (All 
the dates exceeding current date must be disabled) and Role Description.
Apply following validation to the input fields: 

 All the fields are required (*).

 First name and last name should not exceed 25 characters.

 Password and confirm password fields must match while typing in the fields.

 Email must be a valid email address.

Error message must be prompt when the user enters an invalid input.

2) Create viewDetails component and pass the data from user details form of addDetails component to 
this component and show all the details in table.

Use angular built-in date pipe to transform the date of joining in the format (Thursday, December 16, 
2021).
Build a Custom Pipe to limit the role description’s length to 50 characters only and display an ellipsis at 
the end of the string. Role description should have read more/read less text functionality as well.
Pass the data between above components using following approaches:

Task 03: Pass data from parent component to child component.

Task 04: Pass data from child component to parent component.

Task 05: Pass data between unrelated components (Includes routing).


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
