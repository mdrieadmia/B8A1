const multiplyValue = (value, multiplier) => {
    if (!multiplier && multiplier !== 0) {
        return value * 2;
    }
    return value * multiplier;
};
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean" && value === true) {
        return "Active";
    }
    else {
        return "Inactive";
    }
};
const formatCoordinate = (location) => {
    return `Location: ${location[2]} (${location[0]}, ${location[1]})`;
};
const concatenateArrays = (...arrays) => {
    return arrays.flat();
};
const getPopularCourses = (course, minStudents) => {
    let popularCourses = [];
    for (let x = 0; x < course.length; x++) {
        if (course[x].students >= minStudents && course[x].isPublished == true) {
            popularCourses.push(course[x]);
        }
    }
    return popularCourses;
};
const pluckValues = (items, key) => {
    let data = [];
    for (let x = 0; x < items.length; x++) {
        let newData = items[x][key];
        data.push(newData);
    }
    return data;
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return (`Employee: ${this.name}, Base Salary: ${this.baseSalary}`);
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return (`Manager of ${this.department}: ${this.name}`);
    }
}
export {};
