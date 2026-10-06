// ConditionalRendering - ? :

function ConditionalRendering() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      designation: "Software Engineer",
      department: "Engineering",
      isActive: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      designation: "Product Manager",
      department: "Product",
      isActive: false,
    },
    {
      id: 3,
      name: "Mike Johnson",
      age: 35,
      designation: "UX Designer",
      department: "Design",
      isActive: false,
    },
  ];

  const activeUsers = users.filter((user) => user.isActive);
  //const inActiveUsers = users.filter((user)=>!user.isActive);

  return (
    <>
      <h2>Active Users</h2>
      {activeUsers.length > 0 ? (
        <ul>
          {activeUsers.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No active users found.</p>
      )}
    </>
  );
}

export default ConditionalRendering;
