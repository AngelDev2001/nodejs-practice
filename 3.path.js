const path = require("node:path")

// barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join("content", "subfolder", "test.txt")
console.log(filePath)

// obtengo el nombre del fichero mas la extension
const base = path.basename("/tmp/midu-secret-files/password.txt")
console.log(base)

// obtengo el nombre del fichero
const filename = path.basename("/tmp/midu-secret-files/password.txt", ".txt")
console.log(filename)

const extension = path.extname("image.jpg")
console.log(extension)
