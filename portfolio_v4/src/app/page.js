import Link from "next/link";

export default function Home() {
  return (
    <>
     <h1>Welcome to Home Page</h1>
     <h2>
            <Link href="/api">Go to Hello API Route</Link>
        </h2>
    
    </>
  );
}
