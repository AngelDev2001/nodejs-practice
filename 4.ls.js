const fs = require("node:fs");

fs.readdir(".", (err, file) =>{
    if(err){
        console.error("Error al leer el directorio: ", err)
        return;
    }

    file.forEach((file) =>   {
        console.log(file)
    })
})