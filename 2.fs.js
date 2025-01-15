const fs = require("node:fs/promises");

// const stats = fs.statSync("./archivo.txt")
//
// console.log(
//     stats.isFile(), // Si es un fichero
//     stats.isDirectory(), // Si es un directorio
//     stats.isSymbolicLink(), // Si es un enlace simbolico
//     stats.size, // tamanio en bytes
// )

// console.log("Leyendo el primer archivo...")
// const text = fs.readFileSync("./archivo.txt", "utf8")
//
// console.log(text)
//
// console.log("Hacer cosas mientras lee el archivo")
//
// console.log("Leyendo el segundo archivo...")
// const secondText = fs.readFileSync("./archivo2.txt", "utf8")
// console.log(secondText)

// console.log("Leyendo el primer archivo...")
// fs.readFile("./archivo.txt", "utf8", (err, text) => {
//     console.log(text)
// })
//
// console.log("Hacer cosas mientras lee el archivo")
//
// console.log("Leyendo el segundo archivo...")
// fs.readFile("./archivo2.txt", "utf8", (err, text) => {
// console.log(text)
// })

// const {promisify} = require("node:util")
//
// const readFilePromise = promisify(fs.readFile)
//
// console.log("Leyendo el primer archivo...")
// readFilePromise("./archivo.txt", "utf8")
//
// console.log("Hacer cosas mientras lee el archivo")
//
// console.log("Leyendo el segundo archivo...")
// readFilePromise("./archivo2.txt", "utf8")

// (async () => {
//     console.log("Leyendo el primer archivo...")
//     const text = await fs.readFile("./archivo.txt", "utf8")
//     console.log("Primer archivo: ",text)
//
//     console.log("Hacer cosas mientras lee el archivo")
//
//     console.log("Leyendo el segundo archivo...")
//     const secondText = await fs.readFile("./archivo2.txt", "utf8")
//     console.log("Segundo archivo: ",secondText)
// })()

Promise.all([readFile("./archivo.txt", "utf8"), readFile("./archivo2.txt", "utf8")]).then(([text, secondText]) => {
    console.log("Primer archivo: ",text)
    console.log("Segundo archivo: ",secondText)
})