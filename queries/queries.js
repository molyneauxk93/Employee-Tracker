// Import and require mysql2/promise
const mysql = require('mysql2/promise');


//function to view all departments 
allDepartments = async () => {

    //create db connection
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '4613749J', database: 'employee_db' });

    //run select query and console table results
    const results = await db.query('SELECT id, dpt_name AS Department FROM department');

    await console.table([...results[0]]);


}

//function to view  all roles 
allRoles = async () => {

    //create db connection
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '4613749J', database: 'employee_db' });

    //run select query and console table results
    const results = await db.query('SELECT role.id, title, dpt_name AS department, salary FROM department INNER JOIN role ON department.id = role.department_id');

    await console.table([...results[0]]);
}

//function to view all employees 
allEmployees = async () => {

    //create db connection
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '4613749J', database: 'employee_db' });

    //run select query and console table results 
    const results = await db.query('SELECT * FROM employee');

    await console.table([...results[0]]);
}



module.exports = {
    allDepartments,
    allRoles,
    allEmployees,
};