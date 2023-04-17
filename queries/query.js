// Import and require mysql2
const mysql = require('mysql2/promise');

// const index = require('../index.js');

allDepartments = async () => {

    //create db connection
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '4613749J', database: 'employee_db' });

    const results = await db.query('SELECT id, dpt_name AS Department FROM department');

    await console.table([...results[0]]);

    // return index.init;
}

allRoles = async () => {

    //create db connection
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '4613749J', database: 'employee_db' });

    const results = await db.query('SELECT * FROM role');

    await console.table([...results[0]]);
}

allEmployees = async () => {

    //create db connection
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '4613749J', database: 'employee_db' });

    const results = await db.query('SELECT * FROM employee');

    await console.table([...results[0]]);
}

addDepartment = async (data) => {

    const sql = `INSERT INTO department (dpt_name) VALUES (?)`;
    const params = [data.dpt_name];

    //create db connection
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '4613749J', database: 'employee_db' });

    await db.query(sql, params);

    await console.log(`Added ${data.dpt_name} to the database`);
}

addNewRole = async (data) => {

    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;

    //create db connection
    const db = await mysql.createConnection({ host: 'localhost', user: 'root', password: '4613749J', database: 'employee_db' });

    const department_id = await db.query(`SELECT id FROM department WHERE dpt_name = ?`, data.role_dpt);

    let dpt_result = JSON.stringify(department_id[0]);

    foundId = dpt_result.split(/[{":}]/);

    const params = await [data.new_role, data.role_salary, foundId[4]];

    await db.query(sql, params);

    await console.log(`Added ${data.new_role} to the database`);
}

addNewEmployee = async (data) => { 
    
}

module.exports = {
    allDepartments,
    allRoles,
    allEmployees,
    addDepartment,
    addNewRole,
};