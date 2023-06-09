require("colors");

const mostrarMenu = () => {
  return new Promise((resolve, reject) => {
    console.log(`${"1.".green} Crear Tareas`);
    console.log(`${"2.".green} Listar Tareas`);
    console.log(`${"3.".green} Listar Tareas Completadas`);
    console.log(`${"4.".green} Listar Tareas Pendientes`);
    console.log(`${"5.".green} Completar Tareas`);
    console.log(`${"6.".green} Borrar Tarea`);
    console.log(`${"0.".green} Salir \n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opción: ".bgRed.bold, (opt) => {
      readline.close();
      console.log(opt);
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve, reject) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(
      `\nPresione ${"ENTER".green} para continuar: \n`,
      (opt) => {
        readline.close();
        resolve();
      }
    );
  });
};
module.exports = {
  mostrarMenu,
  pause,
};
