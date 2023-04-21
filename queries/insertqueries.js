// Import and require mysql2/promise
const mysql = require('mysql2/promise');

const inquirer = require('inquirer');

//function to add a new department 
addDepartment = async () => {

    const questions = [
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'dpt_name',
        },
    ];

    //prompt questions 
    const data = await inquirer.prompt(questions);

    //sql query and params 
    const sql = `INSERT INTO department (dpt_name) VALUES (?)`;
    const params = [data.dpt_name];

    //create db connection
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '4613749J', database: 'employee_db' });

    //runs INSERT query on database amd logs success message to console 
    await db.query(sql, params);

    await console.log(`Added ${data.dpt_name} to the database`);
}

//function to add a new role 
addNewRole = async () => {

    //create db connection
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '4613749J', database: 'employee_db' });

    //gets is and department name from department tableand then converts json to appropriate format using .map()
    const results = await db.query('SELECT id, dpt_name FROM department');
    
    const list_dpts = await results[0].map(({ id, dpt_name }) => ({ name: dpt_name, value: id }));


    const questions = [
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'new_role',
        },
        {
            type: 'input',
            message: 'What is the salary of the role?',
            name: 'role_salary',
        },
        {
            type: 'list',
            message: 'Which department does the role belong to?',
            name: 'role_dpt',
            choices: list_dpts,
        },
    ]

    //prompt questions 
    const data = await inquirer.prompt(questions);

    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;

    //Converting department id from user's choice to string 
    const user_choice = data.role_dpt.toString();

    const params = await [data.new_role, data.role_salary, user_choice];

    //runs INSERT query and logs success message to console 
    await db.query(sql, params);

    await console.log(`Added ${data.new_role} to the database`);
}

//function to add a new employee 
addNewEmployee = async () => {

    //create db connection
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '4613749J', database: 'employee_db' });

    //get list of roles and converts json to appropriate format using .map()
    const role_results = await db.query('SELECT id, title FROM role');
    
    const list_roles = await role_results[0].map(({ id, title }) => ({ name: title, value: id }));

    //get list of managers written in name value format to be called in choices inquirer prompt
    const list_managers = [{ name: "Josh Molyneaux", value: '1' }, { name: "Lucia Molyneaux", value: '3' }, { name: "Timmy Turner", value: '6' },];

    await console.log(list_managers);

    const questions = [
        {
            type: 'input',
            message: 'What is the employees first name?',
            name: 'first_name',
        },
        {
            type: 'input',
            message: 'What is the employees last name?',
            name: 'last_name',
        },
        {
            type: 'list',
            message: 'What is the employees role?',
            name: 'employee_role',
            choices: list_roles,
        },
        {
            type: 'list',
            message: 'Who is the employees manager?',
            name: 'manager_name',
            choices: list_managers,
        },
    ]

    //Begin question prompt for add employee selection
    const data = await inquirer.prompt(questions);

    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;

    const params = [data.first_name, data.last_name, data.employee_role, data.manager_name.toString()];

    //runs INSERT query and then logs success message to console 
    await db.query(sql, params);

    await console.log(`Added ${data.first_name} ${data.last_name} to the database`);

}


module.exports = {
    addDepartment,
    addNewRole,
    addNewEmployee,
};