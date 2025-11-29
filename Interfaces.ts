
interface User {
    name: string;
    age: number;
    role: string; 
    gender?: string; // optional property
}

function getUserInfo(user: User): string {
    return `Name: ${user.name}, Age: ${user.age}, Role: ${user.role}`;
}

getUserInfo({ name: "Ram", age: 30, role: "admin" });

interface Admin extends User {
    admin : string;
}

function getAdminInfo(admin: Admin): string {
    return `Name: ${admin.name}, Age: ${admin.age}, Role: ${admin.role}, Admin: ${admin.admin}`;
}