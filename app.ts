var a = 12;

function ram(){
    console.log("jay shree ram")
}

// There are 2 types of datatypes in TS i.e Primitive and reaference

//ARRAR
let arr =[1,2,3,"ram"];

let arr1: number[] = [1,2,3];
// let arr1: number[] = [1,2,3,"ram"]; wrong

// TUPLE

let arr2 : [number,string] = [1,"ram"]
// let arr3 : [number,string] = ["ram",1] wrong

//enumeration

enum Userrole  {
     ADMIN = "admin",
     GUEST = "guest",
     SUPERADMIN = "superadmin"
}

enum Statuscode {
    SUCCESS = 200,
    NOTFOUND = 404,
    UNAUTHORIZED = 401
}

//Usage
Userrole.ADMIN
Userrole.GUEST
Userrole.SUPERADMIN 


// Any, Unknown, Never, Void, Null, Undefined

let x: any = 10;
x = "ram"
x = true    

let y: number ;
y=12;
// y="ram"  wrong

let z: unknown;
z=12;
z="ram"
z=true      

function test(): void {
    console.log("this is a test function");
}

function test2(): number {
    return 12;
}

let a3 : [string | null];

a3 = ["ram"];
a3 = [null];    

// function demo(): never{
//     console.log("this is demo function");
// }

// demo();
// console.log(a);