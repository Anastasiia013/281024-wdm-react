class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.name} ${this.lastName}`
    }
}

export default User;