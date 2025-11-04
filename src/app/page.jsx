import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

const formatIDR = n => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

function MonitorCard({ item }) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md w-100">
      <div className="relative aspect-video overflow-hidden">
        <Image src={item.image} alt={item.judul} width={400} height={400} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-full border bg-white/80 px-2.5 py-0.5 text-xs font-medium backdrop-blur">
          Stok: {item.stock}
        </span>
      </div>
      <div className="space-y-3 p-4">
        <h3 className="text-lg font-semibold leading-snug">{item.judul}</h3>
        <p className="line-clamp-2 text-sm text-gray-600 min-h-10">{item.deskripsi}</p>
        <div className="flex items-center justify-between pt-1">
          <div className="text-base font-bold">{formatIDR(item.harga)}</div>
          <button className="rounded-xl border px-3 py-2 text-sm font-medium transition hover:bg-gray-50 active:scale-[0.99]">
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}

function MonitorRow({ monitors }) {
  return (
    <ScrollArea className="w-full pb-5">
      <div className="grid grid-flow-col auto-cols-[minmax(18rem,1fr)] gap-5 w-max pr-4">
        {monitors.map((m, i) => (
          <MonitorCard key={i} item={m} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default function Home() {
  const monitors = [
    {
      judul: "Monitor 27\" IPS 144Hz",
      deskripsi: "Panel IPS 27 inci, refresh rate 144Hz, cocok untuk kerja & gaming.",
      harga: 3250000,
      stock: 12,
      image: "https://plus.unsplash.com/premium_photo-1681816189679-fa02d1acd1de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1477"
    },
    {
      judul: "Monitor 24\" FHD Bezel Tipis",
      deskripsi: "Resolusi 1080p, desain bezel tipis, ideal untuk kantor minimalis.",
      harga: 1850000,
      stock: 25,
      image: "https://plus.unsplash.com/premium_photo-1681816189679-fa02d1acd1de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1477"
    },
    {
      judul: "Monitor 27\" QHD",
      deskripsi: "Resolusi 2560×1440 dengan reproduksi warna akurat untuk desain.",
      harga: 4100000,
      stock: 10,
      image: "https://plus.unsplash.com/premium_photo-1681816189679-fa02d1acd1de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1477"
    },
    {
      judul: "Ultrawide 34\" Curved",
      deskripsi: "Rasio 21:9, layar melengkung untuk multitasking yang lebih lega.",
      harga: 7200000,
      stock: 6,
      image: "https://plus.unsplash.com/premium_photo-1681816189679-fa02d1acd1de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1477"
    },
    {
      judul: "Monitor 27\" 4K",
      deskripsi: "Detail tajam 4K untuk konten dan produktivitas tingkat lanjut.",
      harga: 5250000,
      stock: 9,
      image: "https://plus.unsplash.com/premium_photo-1681816189679-fa02d1acd1de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1477"
    },
    {
      judul: "Ultrawide 34\" Productivity",
      deskripsi: "Layar lebar untuk spreadsheet & timeline editing lebih nyaman.",
      harga: 6750000,
      stock: 7,
      image: "https://plus.unsplash.com/premium_photo-1681816189679-fa02d1acd1de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1477"
    },
    {
      judul: "Monitor 24\" Kerja Harian",
      deskripsi: "Setup ringkas, hemat ruang; pas untuk workstation kantor.",
      harga: 1650000,
      stock: 30,
      image: "https://plus.unsplash.com/premium_photo-1681816189679-fa02d1acd1de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1477"
    },
    {
      judul: "Monitor 27\" Kreator",
      deskripsi: "Keseimbangan warna dan kontras yang baik untuk kreator konten.",
      harga: 4550000,
      stock: 11,
      image: "https://plus.unsplash.com/premium_photo-1681816189679-fa02d1acd1de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1477"
    }
  ];

  return (
    <>
      <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Link href="#produk-monitor">Produk Monitor</Link></li>
              <li><a>Produk Laptop</a></li>
              <li><a>Produk Meja</a></li>
              <li><a>Produk Kursi</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Belanjaku</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="#produk-monitor">Produk Monitor</Link></li>
            <li><a>Produk Laptop</a></li>
            <li><a>Produk Meja</a></li>
            <li><a>Produk Kursi</a></li>
          </ul>
        </div>
        <div className="navbar-end">
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

      <section className="produk-monitor ps-25 pt-10 pe-25" id="produk-monitor">
        <h2 className="text-3xl font-bold pb-5">Produk Monitor</h2>
        <MonitorRow monitors={monitors} />
      </section>
    </>
  );
}
