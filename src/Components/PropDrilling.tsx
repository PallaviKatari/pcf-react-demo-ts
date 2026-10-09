// Prop Drilling - passing data from Parent - nested components

export default function Parent() {
  const name = "John Doe";
  return (
    <>
      <h3>Parent - {name}</h3>
      <Child name={name} />
    </>
  );
}

function Child({ name }) {
  return (
    <>
      <h3>Child - {name}</h3>
      <GrandChild name={name} />
    </>
  );
}

function GrandChild({ name }) {
  return (
    <>
      <h3>GrandChild - {name}</h3>
    </>
  );
}
