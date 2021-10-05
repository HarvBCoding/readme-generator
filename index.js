// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const userQuestions = () => {
    return inquirer.prompt([
        {
            // prompt to create title
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            // description section
            type: 'input',
            name: 'decription',
            message: 'Provide a description of the project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please give a description of the project!');
                    return false;
                }
            }
        },
        {
            // installation instructions section
            type: 'input',
            name: 'installInstructions',
            message: 'What are the necessary steps to install your project? (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions!');
                    return false;
                }
            }
        },
        {
            // instructions for use section
            type: 'input',
            name: 'useInstructions',
            message: 'Please provide instructions for how to use the project. (Required)',
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for use!');
                    return false;
                }
            }
        },
        {
            // confirm that user would like other developers to contribue to project
            type: 'confirm',
            name: 'contributionConfirm',
            message: 'Would you like to add instructions for other developers to contribute to your project code?',
            default: false
        },
        {
            // if the user answered yes to the previous question ask for instructions for contribution section
            type: 'input',
            name: 'contribution',
            message: 'Please provide instructions for how you would like other developers to contribute to your project.',
            when: ({ contributionConfirm }) => {
                if (contributionConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            // confirm user has tests or examples to provide to user for reference
            type: 'confirm',
            name: 'confirmTests',
            message: 'Do you have any tests or examples to provide for functionality comparison?',
            default: false
        },
        {
            // if the user has tests and examples provide them for the tests section
            type: 'input',
            name: 'tests',
            message: 'Please provide the tests or examples you would like to share with the user.',
            when: ({ confirmTests }) => {
                if (confirmTests) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            // ask user for github username for questions section
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',
            validate: userName => {
                if (userName) {
                    return true;
                } else {
                    console.log('Please enter your username!')
                    return false;
                }
            }
        },
        {
            // ask user for email address for questions section
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of open source licensing do you have?',
            choices: ['No license', 'A MIT license', 'The GNU GPLv3']
        }
    ]).then(readMeData => {
        return readMeData;
    })
}

// mock data
const mockData = {
    title: 'run-buddy',
    description:'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
    installInstructions: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque.',
    useInstructions: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum.',
    contributionConfirm: true,
    contribution: 'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque.',
    confirmTests: true,
    github: 'lernantino',
    email: 'someone@somewhere.com',
    license: []
};

generateMarkdown(mockData);
// userQuestions()
    // .then(readMeData => {
        // console.log(readMeData);
        // generateMarkdown(readMeData);

    // })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync('./README.txt', data)
};

writeToFile('README.text', mockData);

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
