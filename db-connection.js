let mysql = require('mysql');

//IMPORTANT
// Please tilin execute the following line in ur workbench
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// otherwise, this code wont work

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"

});

con.connect((error)=>{
    if (error) throw error;
    console.log("Conectado a la bd")
});