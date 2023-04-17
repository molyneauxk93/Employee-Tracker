INSERT INTO department (dpt_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");


INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Josh", "Molyneaux", 2, null),
       ("Lisette", "Williams", 5, 3),
       ("Lucia", "Molyneaux", 4, null), 
       ("Ted", "Thomas", 3, 1),
       ("Rob", "Jones", 7, 6),
       ("Timmy", "Turner",6, null),
       ("Opal", "Mineral", 1, 3);
