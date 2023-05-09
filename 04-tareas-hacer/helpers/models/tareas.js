const Tarea = require("./tarea");

class Tareas {
  _listado = {};
  constructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  get listadoArr() {
    const listado = [];

    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    }); //esto me regresa un arreglo de todas las llaves

    return listado;
  } //Getters es como una propiedad dentro de nuestra clase

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, indice) => {
      const i = `${indice + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn
        ? "Completada".green.bgWhite
        : "Pendiente".red.bgWhite;
      console.log(`${i} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas = true) {
    let contador = 0;

    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEn } = tarea;
      const estado = completadoEn
        ? "Completada".green.bgWhite
        : "Pendiente".red.bgWhite;

      if (completadas) {
        if (completadoEn) {
          contador += 1;
          console.log(`${(contador + ". ").green} ${desc} :: ${completadoEn}`);
        }
      } else {
        if (!completadoEn) {
          contador += 1;
          console.log(`${(contador + ". ").red} ${desc} :: ${completadoEn}`);
        }
      }

      contador === 0 ? console.log("No hay tareas".red) : null;
    });
  }
}

module.exports = Tareas;
