export default function page() {
    const posts = [
        { id: 1, title: "First Post", body: "This is the first post." },
        { id: 2, title: "Second Post", body: "This is the second post." },
    ];
  return (
    <>
        <h1>Welcome to blogs</h1>
        {posts.map((post)=>{
            return <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>;
        })}
    
    </>
    
  );
}