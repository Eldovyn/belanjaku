import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <>
      <nav class="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabindex="-1"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Produk Monitor</a></li>
              <li><a>Produk Laptop</a></li>
              <li><a>Produk Meja</a></li>
              <li><a>Produk Kursi</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">Belanjaku</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a>Produk Monitor</a></li>
            <li><a>Produk Laptop</a></li>
            <li><a>Produk Meja</a></li>
            <li><a>Produk Kursi</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-full w-10 h-10" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
      <section
        className="banner w-full min-h-dvh
             bg-[url('/banner/background-banner.jpg')]
             bg-cover bg-center bg-no-repeat
             flex flex-col items-center justify-center gap-2"
      >
        <h1 className="text-white text-7xl font-bold">Belanjaku</h1>
        <h1 className="text-white text-7xl font-bold">Koleksi</h1>
        <h1 className="text-white text-7xl font-bold">Perlengkapan Kantor</h1>

        <div className="flex items-center justify-center text-white font-semibold gap-5">
          <p>Monitor</p>
          <p>•</p>
          <p>Laptop</p>
          <p>•</p>
          <p>Meja</p>
          <p>•</p>
          <p>Kursi</p>
        </div>
      </section>
    </>
  );
}
