interface IInterfaceOne{
    name: string;
    age: number;
    develop(): void;
}

interface IInterfaceTwo{
    designation: string;
    department: string;
}

class TypeScriptClass implements IInterfaceOne, IInterfaceTwo {
    name: string;
    age: number;
    designation: string;
    department: string;
    constructor(name: string, age: number, designation: string, department: string) {
        this.name = name;
        this.age = age;
        this.designation = designation;
        this.department = department;
    }
    develop(): void {
        console.log(`${this.name} is developing software as a ${this.designation} in the ${this.department} department.`);
    }
}

export default TypeScriptClass;