import Link from "next/link";

export default async function page() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts') // it's a free api endpoint
    const posts = await data.json()
    // const posts = [
    //     { id: 1, title: "First Post", body: "This is the first post." },
    //     { id: 2, title: "Second Post", body: "This is the second post." },
    // ];
  return (
    <>
        <h1>Welcome to blogs</h1>
        {posts.map((post)=>{
            return <div key={post.id}>
                <Link href={`/blog/${post.id}`}>
                    <h1>{post.title}</h1>
                </Link>
                <p>{post.body}</p>
            </div>;
        })}
    
    </>
    
  );
}