export class InputProdModel {
  nombre = null;
  type = null;
  disabled = false;
  value = null;

  constructor(nombre, type, disabled, value){
    this.nombre = nombre;
    this.type = type;
    this.disabled = disabled;
    this.value = value;
  }
}