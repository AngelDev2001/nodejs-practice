 // argumentos de entrada
 console.log(process.argv)

 // controlar el proceso y su salida => si es 0 = todo bien y si es 1 = hubo error
 process.exit(1)

 // podemos controlar eventos del proceso
 process.on("exit", () => {
 //     limpiar los recursos
 })

 // current working directory
 console.log(process.cwd())