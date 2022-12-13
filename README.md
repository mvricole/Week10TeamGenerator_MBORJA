# Team/Employee Generator Challenge


![JS](https://img.shields.io/badge/JavaScript-59%25-yellow)
![CSS](https://img.shields.io/badge/CSS-10%25-blue) 

Team Generator that uses Inquirer and Node.js to store team data and render them on a webpage. Jest also allows for unit testing. 

## Overview
As an employer, it may be beneficial to find ways to efficiently put together my team's data. Accessing a team's contact information makes it easier to coordinate communication throughout a project. This application uses Inquirer and Node.JS to create an employee/project team summary that includes their ID, email, phone number and gitHub username.


## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Before You Start
Before you begin using the application, please make sure you have a compatible version of Inquirer installed. This ensures the prompts work as needed. 

In your terminal, please input:

```
npm i inquirer@8.24
```

## Sample Image

![image](https://user-images.githubusercontent.com/108310424/207259930-3bb2df12-90c7-4616-95ca-f14e13f1c710.png)

## Demo



## Challenges
This project was challenging and requried a lot of different components compared to previous projects. Since we were working with JEST unit tests, that added an additional level of syntax I needed to research and learn. 

I encountered a few issues when initially trying to get the cards to render the correct data. Presently, I am working on developing how to get the webpage to autopopulate after submitting employee information. I have to open it from Visual Studio Code or use LiveServer to ensure it is working. It is still a work in progress!

## Contributions 

Marian Nicole Borja 2022
