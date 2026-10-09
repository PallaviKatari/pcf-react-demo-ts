
import { useAxios } from "use-axios-client";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function UseAxiosDemo() {
  const { data, error, loading, refetch } = useAxios<Post[]>({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Data:", data);
  console.log("Refetch:", refetch);

  if (loading) {
    return <><p>Loading posts...</p><button onClick={() => refetch()}>Retry Request</button></>;
    
  }

  if (error) {
    console.error("Request failed:", error);

    return (
      <div>
        <p>Error: {error.message}</p>
        <button onClick={() => refetch()}>Retry Request</button>
      </div>
    );
  }

  if (!data) {
    return (
      <div>
        <p>No data received.</p>
        <button onClick={() => refetch()}>Retry Request</button>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{marginTop:100}}>useAxios Demo</h1>
      <p>Total posts: {data.length}</p>

      <button onClick={() => refetch()}>Refresh Posts</button>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseAxiosDemo;
