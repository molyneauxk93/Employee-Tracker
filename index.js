const inquirer = require('inquirer');

//importing generateMArkdown javascript file 
const { allDepartments, allRoles, allEmployees, addDepartment, addNewRole } = require('./queries/query.js');

const question = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: ['View all Departments', 'View all roles', 'View all employees', 'Add Department', 'Add role', 'Add employee', 'Update employee']
    },
    {
        type: 'input',
        message: 'What is the name of the department?',
        name: 'dpt_name',
        when: (answer) => answer.choice === 'Add Department'
    },
    {
        type: 'input',
        message: 'What is the name of the role?',
        name: 'new_role',
        when: (answer) => answer.choice === 'Add role'
    },
    {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'role_salary',
        when: (answer) => answer.choice === 'Add role'
    },
    {
        type: 'input',
        message: 'Which department does the role belong to?',
        name: 'role_dpt',
        when: (answer) => answer.choice === 'Add role'
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
    } else if (data.dpt_name) {
        addDepartment(data);
    } else if(data.role_dpt) {
        addNewRole(data);
    }

}

init();

// module.exports = init;