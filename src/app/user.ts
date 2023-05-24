export class User {
    constructor(private _name : string, private _firstName : string, private _age : number, private _quote : string, private _photo : string) {}

    get name() {
        return this._name;
    }

    get firstName() {
        return this._firstName;
    }

    get age() {
        return this._age;
    }

    set quote(quote : string) {
        this._quote = quote;
    }
    get quote() {
        return this._quote;
    }

    get photo() {
        return this._photo;
    }
}