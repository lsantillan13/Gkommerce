import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header(){

return(
  <header className="container font-light">

    <ul className="p-5">

      <li className="grid grid-cols-12">

      <span className="col-span-1 col-start-2 flex">

        <input type="search" placeholder="Buscar" className="border border-x-0 border-b-neutral-300 focus:outline-none"/>
        <a href="/" className="p-2 bg-zinc-500 hover:bg-zinc-700 text-white"> <FontAwesomeIcon icon={faMagnifyingGlass}/></a>

      </span>

          <a href="/" className="text-3xl col-span-3 col-start-5 ml-20">
            <i className="not-italic text-3xl font-black text-zinc-700">  GEEK-  </i>
            <i className="not-italic text-3xl font-normal">  ommerce </i>
          </a>

          <a href="/account/register" className="p-2 col-span-1 col-start-8 hover:font-semibold" >Registrarse</a>
          <a href="/account/login" className="p-2 col-span-1 col-start-9 hover:font-semibold">Iniciar Sesión</a>
          <i className="not-italic h-fit w-fit p-3 col-span-1 col-start-10 hover:cursor-pointer text-zinc-500 hover:text-zinc-700 text-sm hover:text-base hover:p-2.5">
            <FontAwesomeIcon icon={faCartShopping}/>
          </i>
          <div className="text-zinc-100 p-1 col-span-1 col-start-11 relative right-24 w-fit hover:font-semibold">
            <p className=" w-7 rounded-full relative top-1 bg-zinc-600 text-center flex justify-center">  10 </p>
          </div>
      </li>

    </ul>

    <nav className="container text-center ">
      <ul className="bg-zinc-800 text-xl p-5">
        <li>
          <a className="text-regular text-neutral-200  hover:bg-zinc-600 hover:border p-4 px-5" href="#">Home</a>
          <a className="text-regular text-neutral-200  hover:bg-zinc-600 hover:border p-4 px-5" href="#">Products</a>
          <a className="text-regular text-neutral-200  hover:bg-zinc-600 hover:border p-4 px-5" href="#">Setup</a>
          <a className="text-regular text-neutral-200  hover:bg-zinc-600 hover:border p-4 px-5" href="#">Gaming</a>
          <a className="text-regular text-neutral-200  hover:bg-zinc-600 hover:border p-4 px-5" href="#">Software</a>
        </li>
      </ul>
    </nav>

  </header>
)
};