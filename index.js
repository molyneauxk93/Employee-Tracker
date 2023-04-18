const inquirer = require('inquirer');

//importing generateMArkdown javascript file 
const { allDepartments, allRoles, allEmployees, addDepartment, addNewRole, addNewEmployee } = require('./queries/query.js');


const question = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: ['View all Departments', 'View all roles', 'View all employees', 'Add Department', 'Add role', 'Add employee', 'Update employee']
    },
];

async function init() {

    const data = await inquirer.prompt(question);

    if(data.choice === 'View all Departments') {
        allDepartments();   
    } else if (data.choice === 'View all roles') {
        allRoles();
    } else if (data.choice === 'View all employees') {
        allEmployees();
    } else if (data.choice === 'Add Department') {
        addDepartment();
    } else if(data.choice  === 'Add role') {
        addNewRole();
    } else if (data.choice === 'Add employee'){
        addNewEmployee();
    }

}

init();