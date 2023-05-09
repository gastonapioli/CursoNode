const inquirer = require("inquirer");

require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: `${"1.".bgYellow.blue} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2.".bgYellow.blue} Listar tarea`,
      },
      {
        value: "3",
        name: `${"3.".bgYellow.blue} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".bgYellow.blue} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".bgYellow.blue} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6.".bgYellow.blue} Borrar tarea`,
      },
      {
        value: "0",
        name: `${"0.".bgYellow.blue} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===============================".green);
  console.log("|||| Seleccione una opción ||||".blue);
  console.log("===============================\n".green);

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `\nPresione ${"ENTER".green} para continuar: \n`,
    },
  ];
  await inquirer.prompt(question);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
};
