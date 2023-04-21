// .env file use 
require('dotenv').config();

//use inquirer
const inquirer = require('inquirer');

//importing functions from queries and insert queries js files 
const { allDepartments, allRoles, allEmployees } = require('./queries/queries.js');

const { addDepartment, addNewRole, addNewEmployee } = require('./queries/insertqueries.js');

const { updateEmployee } = require('./queries/updatequeries.js');


const question = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: ['View all Departments', 'View all roles', 'View all employees', 'Add Department', 'Add role', 'Add employee', 'Update employee', 'Quit']
    },
];

async function init() {

    const data = await inquirer.prompt(question);

    switch(data.choice) {
        case 'View all Departments':
            allDepartments();
            break;

        case 'View all roles':
            allRoles();
            break;

        case 'View all employees':
            allEmployees();
            break;

        case 'Add Department':
            addDepartment();
            break;

        case 'Add role':
            addNewRole();
            break;

        case 'Add employee':
            addNewEmployee();
            break;

        case 'Update employee':
            updateEmployee();
            break;

        case 'Quit':
            process.exit();

    }

}

init();