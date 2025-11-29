"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUserInfo(user) {
    return `Name: ${user.name}, Age: ${user.age}, Role: ${user.role}`;
}

getUserInfo({ name: "Ram", age: 30, role: "admin" });

function getAdminInfo(admin) {
    return `Name: ${admin.name}, Age: ${admin.age}, Role: ${admin.role}, Admin: ${admin.admin}`;
}
//# sourceMappingURL=Interfaces.js.map