import Link from "next/link"
const Navbar = () => {
    return (
        <nav className="w-full h-[10vh] Navbg flex justify-between items-center px-28 border-2 font-sans">
            <div className="flex gap-3">
                <img className="rounded" src="/logo.png" alt="Logo" width={38} height={47} />
                <p className="text-custom-blue font-extrabold text-3xl mt-2 italic">
                    TheBox
                </p>

            </div>
            <div className="flex gap-10 text-lg">
                <Link className='' href={"/"}>
                    Home
                </Link>
                <Link className="" href={"/about"}>
                    About Us
                </Link>
                <Link className="" href={"/projects"}>
                    Projects
                </Link>
                <Link className="" href={"/services"}>
                    Services
                </Link>
                <Link className="text-custom-orange" href={"/contact"}>
                    Contact Us
                </Link>

            </div>
        </nav>
    )
}

export default Navbar
