import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={175} priority />
        </Link>
        <Link href="/sign-in">
          <button className="btn btn-outline btn-primary hover:!text-white">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
}
