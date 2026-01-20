import Link from 'next/link'

const header = () => {
  return (
    <div>
        <nav className="flex flex-row gap-4 bg-black-400 p-15 text-white fixed top-0 w-full">
          <h2 className='size-14 grow-1'>LOCAL/46°48'2.952"N</h2>
          
          <div className='closeButton size-14 grow bg-white-500 border-1px solid-white rounded-full h-10 w-10 flex flex-rounded items-center '> {/* still pending the circle effect */}
            <Link href="/">X</Link>
          </div>

          <div className='contactMe size-14 flex-none'>
            <Link href="/contact">CONTACT NOW</Link>
          </div>

          <ul className='flex flex-col mt-20 p-10 justify-center items-center left-0 w-full h-screen'>
            <li className=''><Link href="/about">ABOUT</Link></li>
            <li className=''><Link href="/blog">BLOG</Link></li>
            <li className=''><Link href="/projects">PROJECTS</Link></li>
          </ul>
          {/* <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link> */}
        </nav>
    </div>
  )
}

export default header