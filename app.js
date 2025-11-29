"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 12;
function ram() {
    console.log("jay shree ram");
}
// There are 2 types of datatypes in TS i.e Primitive and reaference
//ARRAR
let arr = [1, 2, 3, "ram"];
let arr1 = [1, 2, 3];
// let arr1: number[] = [1,2,3,"ram"]; wrong
// TUPLE
let arr2 = [1, "ram"];
// let arr3 : [number,string] = ["ram",1] wrong
//enumeration
var Userrole;
(function (Userrole) {
    Userrole["ADMIN"] = "admin";
    Userrole["GUEST"] = "guest";
    Userrole["SUPERADMIN"] = "superadmin";
})(Userrole || (Userrole = {}));
var Statuscode;
(function (Statuscode) {
    Statuscode[Statuscode["SUCCESS"] = 200] = "SUCCESS";
    Statuscode[Statuscode["NOTFOUND"] = 404] = "NOTFOUND";
    Statuscode[Statuscode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
})(Statuscode || (Statuscode = {}));
//Usage
Userrole.ADMIN;
Userrole.GUEST;
Userrole.SUPERADMIN;
// Any, Unknown, Never, Void, Null, Undefined
let x = 10;
x = "ram";
x = true;
let y;
y = 12;
// y="ram"  wrong
let z;
z = 12;
z = "ram";
z = true;
function test() {
    console.log("this is a test function");
}
function test2() {
    return 12;
}
let a3;
a3 = ["ram"];
a3 = [null];
// function demo(): never{
//     console.log("this is demo function");
// }
// demo();
// console.log(a);
//# sourceMappingURL=app.js.map