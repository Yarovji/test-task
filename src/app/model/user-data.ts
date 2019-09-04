export class User {
  name: string;
  constructor(fields: { name: string }) {
    Object.assign(this, fields);
  }
}
