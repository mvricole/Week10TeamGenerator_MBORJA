// Import and connect your team members information/libraries
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

// This tells the code to render the team page when user input is complete. Also states where the code for the team page is coming from.
const render = require('./src/page-template.js');

const teamMembers = [];
const idArray = [];

// Begin message on terminal. 
console.log(
  '\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n'
);

// This hard codes out the inquirer package. Prompts user with questions that will be saved and rendered on your team page. 
function appMenu() {
  function createManager() {
    console.log('Please build your team 👥');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the team manager's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            // Requires user to input a name of at least one letter. Will not continue if false.
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the team manager's id?",
          validate: (answer) => {
            // REGEX code checks for an appropriate answer that consists of a digit starting with 1. If user inputs 0, it will prompt them to correct it. 
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return 'Please enter a positive number greater than zero.';
          },
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the team manager's email?",
          validate: (answer) => {
            // REGEX code here checks for appropriately formatted email string. Must include an @ to denote an email, also accounts for user, servicer, and domain name by checking for a .
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            // If user inputs an email that fails to match the REGEX statement above, it will prompt the user to try again and enter a valid address.
            return 'Invald email. Please enter a valid email address.';
          },
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is the team manager's office number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              return true;
            }
            return 'Please enter a positive number (must be greater than zero).';
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      });
  }

  // This is a continuation of the Inquirer package. This function allows the user to create another employee card. 
  function createTeam() {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'memberChoice',
          message: 'Which type of team member would you like to add?',
          choices: [
            'Engineer',
            'Intern',
            'Team is complete. No new members needed.',
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is your engineer's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'engineerId',
          message: "What is your engineer's id?",
          // Validation code here. This checks previous input to see if there is a duplicate. If duplicate ID number is found, user cannot move forward and must input a valid ID.
          // In professional setting, this prevents duplicate employees and ID numbers. Ensures unique ID for all employees. 
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idArray.includes(answer)) {
                return 'This ID is already taken. Please submit a different ID.';
              } else {
                return true;
              }
            }
            return 'Please enter a positive number (must be greater than zero).';
          },
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is your engineer's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          },
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "What is your engineer's GitHub username?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "What is your intern's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type: 'input',
          name: 'internId',
          message: "What is your intern's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/);
            if (pass) {
              if (idArray.includes(answer)) {
                return 'This ID is already taken. Please submit a different ID.';
              } else {
                return true;
              }
            }
            return 'Please enter a positive number (must be greater than zero).';
          },
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "What is your intern's email?",
          validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          },
        },
        {
          type: 'input',
          name: 'internSchool',
          message: "What is your intern's school?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
  }

  function buildTeam() {
// IF Statement below prompts application to create a new directory if one does not previous exist. 
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }

  createManager();
}

appMenu();
