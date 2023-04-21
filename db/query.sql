-- SELECT employee.id, employee.first_name, employee.last_name, role.title, department.dpt_name, role.salary
-- FROM department
-- INNER JOIN role
-- ON role.department_id = department.id
-- INNER JOIN employee
-- ON  role.id = employee.role_id
-- ORDER BY employee.id ASC


SELECT CONCAT(T2.first_name, " ", T2.last_name) AS Manager
FROM employee T1
LEFT JOIN employee T2
ON T1.manager_id = T2.id

