const Tarea = require("./tarea");

class Tareas {
  _listado = {};
  constructor() {
    this._listado = {};
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
}

module.exports = Tareas;
