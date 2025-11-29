
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