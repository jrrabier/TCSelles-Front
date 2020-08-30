export class User {

  firstname: String;
  lastname: String;
  email: String;
  password: String;
  avatar: String;
  rank: String;
  address: String;
  postalcode: String;
  city: String;
  birthdate: Date;
  mobile: String;
  sex: String;

  constructor(element) {
    this.firstname = element ? element.firstname : "";
    this.lastname = element ? element.lastname : "";
    this.email = element ? element.email : "";
    this.password = element ? element.password : "";
    this.avatar = element.avatar == '' ? undefined : element.avatar;
    this.rank = element ? element.rank : "";
    this.address = element ? element.address : "";
    this.postalcode = element ? element.postalcode : "";
    this.city = element ? element.city : "";
    this.birthdate = element ? element.birthdate : Date();
    this.mobile = element ? element.mobile : "";
    this.sex = element ? element.sex : "";
  }
}
