import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <Link href="/"><a>Home</a></Link>
      {` | `}
      {/* <Link href="/portfolios"><a>Portolios</a></Link>
      {` | `} */}
      <Link href="/blogs"><a>Blogs</a></Link>
      {` | `}
      <Link href="/about"><a>About</a></Link>
      {` | `}
      <Link href="/cv"><a>CV</a></Link>
    </nav>
  );
}

export default Header;