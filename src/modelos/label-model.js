export class LabelModel {
  htmlFor = '';
  texto = '';
  type = '';
  id = '';
  data = '';

  constructor(htmlFor, texto, type, id, data){
    this.htmlFor = htmlFor;
    this.texto = texto;
    this.type = type;
    this.id = id;
    this.data = data;
  }
}