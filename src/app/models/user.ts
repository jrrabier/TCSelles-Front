export class User {

  private mail: String;
  private psw: String;
  private lastname: String;
  private firstname: String;
  private birthdate: Date;
  private phone: String;
  private avatar: String;
  private address: String;
  private postalcode: String;
  private city: String;
  private licence_nb: String;
  private role: String;
  private created_at: Date;
  private updated_at: Date;
  private team_id: Number;
  private sex_id: String;
  private club_id: Number;
  private lvl_id: Number;

	constructor($mail: String, $psw: String, $lastname: String, $firstname: String, $birthdate: Date, $phone: String, $avatar: String, $address: String, $postalcode: String, $city: String, $licence_nb: String, $role: String, $created_at: Date, $updated_at: Date, $team_id: Number, $sex_id: String, $club_id: Number, $lvl_id: Number) {
		this.mail = $mail;
		this.psw = $psw;
		this.lastname = $lastname;
		this.firstname = $firstname;
		this.birthdate = $birthdate;
		this.phone = $phone;
		this.avatar = $avatar;
		this.address = $address;
		this.postalcode = $postalcode;
		this.city = $city;
		this.licence_nb = $licence_nb;
		this.role = $role;
		this.created_at = $created_at;
		this.updated_at = $updated_at;
		this.team_id = $team_id;
		this.sex_id = $sex_id;
		this.club_id = $club_id;
		this.lvl_id = $lvl_id;
  }

    /**
     * Getter $mail
     * @return {String}
     */
	public get $mail(): String {
		return this.mail;
	}

    /**
     * Setter $mail
     * @param {String} value
     */
	public set $mail(value: String) {
		this.mail = value;
	}

    /**
     * Getter $psw
     * @return {String}
     */
	public get $psw(): String {
		return this.psw;
	}

    /**
     * Setter $psw
     * @param {String} value
     */
	public set $psw(value: String) {
		this.psw = value;
	}

    /**
     * Getter $lastname
     * @return {String}
     */
	public get $lastname(): String {
		return this.lastname;
	}

    /**
     * Setter $lastname
     * @param {String} value
     */
	public set $lastname(value: String) {
		this.lastname = value;
	}

    /**
     * Getter $firstname
     * @return {String}
     */
	public get $firstname(): String {
		return this.firstname;
	}

    /**
     * Setter $firstname
     * @param {String} value
     */
	public set $firstname(value: String) {
		this.firstname = value;
	}

    /**
     * Getter $birthdate
     * @return {Date}
     */
	public get $birthdate(): Date {
		return this.birthdate;
	}

    /**
     * Setter $birthdate
     * @param {Date} value
     */
	public set $birthdate(value: Date) {
		this.birthdate = value;
	}

    /**
     * Getter $phone
     * @return {String}
     */
	public get $phone(): String {
		return this.phone;
	}

    /**
     * Setter $phone
     * @param {String} value
     */
	public set $phone(value: String) {
		this.phone = value;
	}

    /**
     * Getter $avatar
     * @return {String}
     */
	public get $avatar(): String {
		return this.avatar;
	}

    /**
     * Setter $avatar
     * @param {String} value
     */
	public set $avatar(value: String) {
		this.avatar = value;
	}

    /**
     * Getter $address
     * @return {String}
     */
	public get $address(): String {
		return this.address;
	}

    /**
     * Setter $address
     * @param {String} value
     */
	public set $address(value: String) {
		this.address = value;
	}

    /**
     * Getter $postalcode
     * @return {String}
     */
	public get $postalcode(): String {
		return this.postalcode;
	}

    /**
     * Setter $postalcode
     * @param {String} value
     */
	public set $postalcode(value: String) {
		this.postalcode = value;
	}

    /**
     * Getter $city
     * @return {String}
     */
	public get $city(): String {
		return this.city;
	}

    /**
     * Setter $city
     * @param {String} value
     */
	public set $city(value: String) {
		this.city = value;
	}

    /**
     * Getter $licence_nb
     * @return {String}
     */
	public get $licence_nb(): String {
		return this.licence_nb;
	}

    /**
     * Setter $licence_nb
     * @param {String} value
     */
	public set $licence_nb(value: String) {
		this.licence_nb = value;
	}

    /**
     * Getter $role
     * @return {String}
     */
	public get $role(): String {
		return this.role;
	}

    /**
     * Setter $role
     * @param {String} value
     */
	public set $role(value: String) {
		this.role = value;
	}

    /**
     * Getter $created_at
     * @return {Date}
     */
	public get $created_at(): Date {
		return this.created_at;
	}

    /**
     * Setter $created_at
     * @param {Date} value
     */
	public set $created_at(value: Date) {
		this.created_at = value;
	}

    /**
     * Getter $updated_at
     * @return {Date}
     */
	public get $updated_at(): Date {
		return this.updated_at;
	}

    /**
     * Setter $updated_at
     * @param {Date} value
     */
	public set $updated_at(value: Date) {
		this.updated_at = value;
	}

    /**
     * Getter $team_id
     * @return {Number}
     */
	public get $team_id(): Number {
		return this.team_id;
	}

    /**
     * Setter $team_id
     * @param {Number} value
     */
	public set $team_id(value: Number) {
		this.team_id = value;
	}

    /**
     * Getter $sex_id
     * @return {String}
     */
	public get $sex_id(): String {
		return this.sex_id;
	}

    /**
     * Setter $sex_id
     * @param {String} value
     */
	public set $sex_id(value: String) {
		this.sex_id = value;
	}

    /**
     * Getter $club_id
     * @return {Number}
     */
	public get $club_id(): Number {
		return this.club_id;
	}

    /**
     * Setter $club_id
     * @param {Number} value
     */
	public set $club_id(value: Number) {
		this.club_id = value;
	}

    /**
     * Getter $lvl_id
     * @return {Number}
     */
	public get $lvl_id(): Number {
		return this.lvl_id;
	}

    /**
     * Setter $lvl_id
     * @param {Number} value
     */
	public set $lvl_id(value: Number) {
		this.lvl_id = value;
	}

}


