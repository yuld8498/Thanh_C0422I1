class Staff {
    constructor(Fullname, Email) {
        this.Fullname = Fullname;
        this.Email = Email;
        this.setFullname = function (Value) {
            return this.Fullname = Value;
        };
        this.getFullname = function () {
            return this.Fullname;
        };
        this.setEmail = function (Value) {
            return this.Email = Value;
        };
        this.getEmail = function () {
            return this.Email;
        };
        this.toString = function () {
            return `Fullname: ${this.Fullname}<br>Email: ${this.Email}<br>`;
        };
    };
};
let david = new Staff("David", "david@gmail.com");
david.setFullname("David Do");
david.setEmail("david.do@gmail.com");
document.write(david.toString());
const staffs = [
    david,
    new Staff("Thanh", "Thanh@gmail.com"),
    new Staff("Vu", "Vu@gmail.com"),
    new Staff("Phap", "Phap@gmail.com"),
];
for (let i = 0; i < staffs.length; i++) {
    document.write(staffs[i].toString());
};