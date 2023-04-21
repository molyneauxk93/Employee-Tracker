SELECT T1.id, T1.first_name, T1.last_name, role.title, department.dpt_name, role.salary, CONCAT(T2.first_name, " ", T2.last_name) AS Manager
FROM department
INNER JOIN role
ON role.department_id = department.id
INNER JOIN employee T1
ON  role.id = T1.role_id
LEFT JOIN employee T2
ON T1.manager_id = T2.id
ORDER BY T1.id ASC