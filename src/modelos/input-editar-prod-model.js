export class InputProdModel {
  nombre = null;
  type = null;
  disabled = false;

  constructor(nombre, type, disabled){
    this.nombre = nombre;
    this.type = type;
    this.disabled = disabled;
  }
}