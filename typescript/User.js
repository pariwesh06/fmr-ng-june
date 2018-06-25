var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(fname) {
        this.fname = fname;
    }
    User.prototype.walk = function () {
        console.log(this.fname + ' is walking');
        this.run();
    };
    User.prototype.run = function () {
        console.log(this.fname + ' is running');
    };
    return User;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fname) {
        return _super.call(this, fname) || this;
    }
    return Employee;
}(User));
var u1 = new User('Ram');
u1.walk();
// u1.run();
var e1 = new Employee('SHyam');
e1.walk();
