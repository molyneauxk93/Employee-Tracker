SELECT employee.id, employee.first_name, employee.last_name, role.title, department.dpt_name, role.salary, employee.first_name
FROM department
INNER JOIN role
ON department.id = role.department_id
INNER JOIN employee
ON role.id = employee.role_id;

