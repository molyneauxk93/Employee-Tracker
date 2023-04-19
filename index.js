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
    } else if(data.choice === 'Update employee'){
        updateEmployee();
    }

}

init();