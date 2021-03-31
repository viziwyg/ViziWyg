export class Dashboard {

  public id: number;
  public uid: string;

  public title: string;
  public created: number;
  public version: number;

  constructor() {
    this.version = this.version === undefined ? 0 : this.version;
  }
}
