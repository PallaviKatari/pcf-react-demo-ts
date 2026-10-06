// .NET API
interface Person {
  name: string;
  age: number;
  isEmployed: boolean;
  hobbies: string[];
  designation?: string; // Optional property
}

function SampleFunction(name: string): string {
  return `Hello ${name}`;
}

function Datatypes() {
  const name: string = "John Doe";
  const age: number = 30;
  const isEmployed: boolean = true;
  const hobbies: string[] = ["Reading", "Traveling", "Cooking"];

  const person: Person = {
    name: name,
    age: age,
    isEmployed: isEmployed,
    hobbies: hobbies,
    designation: "Software Engineer", // Optional property can be included
  };

  const greeting: string = SampleFunction(name);

  const department:[number, string] = [101, "Engineering"]; // Tuple
  console.log(`Department ID: ${department[0]}, Department Name: ${department[1]}`);

  //department=["Marketing",102]; // Reassigning the tuple

  return (
    <>
      <h2>Functions</h2>
      <h3>{greeting}</h3>
      <hr />
      <h4>Variables</h4>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Employed: {isEmployed ? "Yes" : "No"}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <h2>Interface</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Employed: {person.isEmployed ? "Yes" : "No"}</p>
      <p>Hobbies: {person.hobbies.join(", ")}</p>
    </>
  );
}

export default Datatypes;
