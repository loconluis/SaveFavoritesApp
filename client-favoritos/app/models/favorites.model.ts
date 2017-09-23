// definiendo un modelo como una clase POO
// La estructura de los datos que se van a guardar en mongo
export class Favorite {
  constructor(
    public _id: string,
    public title: string,
    public description: string,
    public url: string) {

  }
};
