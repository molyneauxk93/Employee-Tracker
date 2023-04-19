// Import and require mysql2/promise
const mysql = require('mysql2/promise');

const inquirer = require('inquirer');

updateEmployee = async () => {

    //create db connection
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '4613749J', database: 'employee_db' });

    //get list of roles and converts json to appropriate format using .map()
    const role_results = await db.query('SELECT id, title FROM role');
    
    const list_roles = await role_results[0].map(({ id, title }) => ({ name: title, value: id }));

    //get list of managers written in name value format to be called in choices inquirer prompt
    const employees_list = await db.query('SELECT id, CONCAT(first_name, " ", last_name) AS e_name FROM employee');

    const list_employees = await employees_list[0].map(({ id, e_name }) => ({ name: e_name, value: id }));

    const questions = [
        {
            type: 'list',
            message: 'Which employees role do you want to update?',
            name: 'employee_list',
            choices: list_employees,
        },
        {
            type: 'list',
            message: 'Which role do you want to assign the selected employee?',
            name: 'role_name',
            choices: list_roles,
        },
    ]

    //Begin question prompt for add employee selection
    const data = await inquirer.prompt(questions);

    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;

    console.log(data.list_employees, data.list_roles)

    const params = [data.role_name.toString(), data.employee_list.toString()];

    //runs INSERT query and then logs success message to console 
    await db.query(sql, params);

    await console.log(`Updated employees role`);

}

module.exports = {
    updateEmployee,
}