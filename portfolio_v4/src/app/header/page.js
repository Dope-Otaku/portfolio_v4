import Link from 'next/link'

const header = () => {
  return (
    <div>
        <nav className="flex gap-4">
          <Link href="/">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Contact</Link>
        </nav>
    </div>
  )
}

export default header