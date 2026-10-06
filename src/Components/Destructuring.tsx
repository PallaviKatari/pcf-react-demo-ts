//Destructuring - props,state,arrays,objects
interface user{
    name:string;
    age:number;
    designation:string;
    department:string;
}

function Destructuring(){
    const users:user={
        name:"John Doe",
        age:30,
        designation:"Software Engineer",
        department:"Engineering"
    };

    const { name, age, designation, department } = users;
    
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Designation: {designation}</p>
            <p>Department: {department}</p>
        </>
    )
}

export default Destructuring;