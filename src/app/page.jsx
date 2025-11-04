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

  const laptops = [
    {
      judul: "Laptop 14\" Ultrabook Ringkas",
      deskripsi: "Bobot <1.3kg, baterai tahan lama; cocok untuk kerja mobile & meeting.",
      harga: 11250000,
      stock: 18,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Laptop 15\" Produktivitas",
      deskripsi: "Layar 15.6\" FHD, keyboard nyaman, ideal untuk spreadsheet & multitasking.",
      harga: 9750000,
      stock: 24,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Laptop 13\" 2-in-1 Touch",
      deskripsi: "Layar sentuh lipat 360°, stylus-ready; pas untuk catatan & presentasi.",
      harga: 13250000,
      stock: 14,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Laptop 16\" Kreator QHD",
      deskripsi: "Panel QHD akurat warna, CPU kencang; rendering & editing lancar.",
      harga: 18750000,
      stock: 9,
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Laptop Gaming 15\" RTX",
      deskripsi: "GPU RTX, refresh rate 144Hz; kerja siang, gaming malam tetap oke.",
      harga: 20500000,
      stock: 7,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Laptop 14\" Bisnis",
      deskripsi: "Chassis kokoh, port lengkap (HDMI/Type-C), privasi & keamanan siap.",
      harga: 12500000,
      stock: 16,
      image: "https://images.unsplash.com/photo-1452457750107-cd084dce177d?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Laptop 15\" Entry Hemat",
      deskripsi: "SSD cepat, cocok untuk kerja harian: dokumen, email, browser.",
      harga: 7250000,
      stock: 28,
      image: "https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Laptop 13\" Chromebook",
      deskripsi: "Boot cepat, aman, ideal POS/kiosk & kolaborasi berbasis web.",
      harga: 4950000,
      stock: 20,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1477&auto=format&fit=crop"
    }
  ];

  const meja = [
    {
      judul: "Meja Kerja 120cm Minimalis",
      deskripsi: "Top MDF + rangka besi, kabel rapi, cocok untuk setup 1 monitor.",
      harga: 1250000,
      stock: 18,
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Meja L-Shape 140×120",
      deskripsi: "Area luas untuk multitasking; sudut L efisien untuk pojok ruangan.",
      harga: 2850000,
      stock: 10,
      image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Standing Desk Elektrik",
      deskripsi: "Naik-turun otomatis, preset tinggi, kerja lebih ergonomis.",
      harga: 3950000,
      stock: 7,
      image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Meja Kompak 100cm",
      deskripsi: "Jejak kecil untuk ruang terbatas; rak kecil untuk dokumen.",
      harga: 950000,
      stock: 22,
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Meja Executive Kayu Solid",
      deskripsi: "Finishing walnut, laci kunci, tampilan premium untuk ruang kerja.",
      harga: 4750000,
      stock: 5,
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Meja Lipat Serbaguna",
      deskripsi: "Ringan & mudah disimpan; cocok untuk event/kelas dadakan.",
      harga: 650000,
      stock: 30,
      image: "https://images.unsplash.com/photo-1582582621959-c25e60a1f335?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Meja Rapat 6–8 Orang",
      deskripsi: "Permukaan luas, ducting kabel tengah untuk konferensi rapi.",
      harga: 3200000,
      stock: 6,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Meja Sudut Modular",
      deskripsi: "Modul kiri/kanan bisa ditukar; ideal untuk dual monitor.",
      harga: 1750000,
      stock: 12,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1477&auto=format&fit=crop"
    }
  ];


  const kursi = [
    {
      judul: "Kursi Ergonomis Mesh",
      deskripsi: "Sandaran mesh, lumbar support, armrest 3D; nyaman dipakai lama.",
      harga: 1450000,
      stock: 20,
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Kursi Executive Leather",
      deskripsi: "Bantalan tebal, tilt lock, tampilan profesional untuk kantor.",
      harga: 2350000,
      stock: 8,
      image: "https://images.unsplash.com/photo-1555041469-8699ae1f6c1b?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Task Chair Basic",
      deskripsi: "Tinggi hidrolik, roda halus; pas untuk workstation harian.",
      harga: 650000,
      stock: 35,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Bangku Stool Bar",
      deskripsi: "Ringkas tanpa sandaran; cocok untuk area pantry/collab.",
      harga: 350000,
      stock: 28,
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Kursi Gaming Support",
      deskripsi: "Headrest + lumbar pillow, recline; kerja & gaming nyaman.",
      harga: 1950000,
      stock: 11,
      image: "https://images.unsplash.com/photo-1591405351634-c0d7b94a3f9a?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Kursi Tamu/Visitor",
      deskripsi: "Rangka metal kokoh, bantalan empuk; cocok untuk ruang tamu kantor.",
      harga: 520000,
      stock: 26,
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Kursi Drafting Tinggi",
      deskripsi: "Footring, cocok untuk meja tinggi/standing desk, penyesuaian mudah.",
      harga: 1150000,
      stock: 9,
      image: "https://images.unsplash.com/photo-1555041469-0f0b31a1a3d5?q=80&w=1477&auto=format&fit=crop"
    },
    {
      judul: "Kursi Rapat Stackable",
      deskripsi: "Ringan, bisa ditumpuk; efisien untuk ruang meeting & event.",
      harga: 480000,
      stock: 40,
      image: "https://images.unsplash.com/photo-1525695230005-efd074980869?q=80&w=1477&auto=format&fit=crop"
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

      <section className="produk-laptop ps-25 pt-10 pe-25" id="produk-monitor">
        <h2 className="text-3xl font-bold pb-5">Produk Laptop</h2>
        <MonitorRow monitors={laptops} />
      </section>

      <section className="produk-laptop ps-25 pt-10 pe-25" id="produk-monitor">
        <h2 className="text-3xl font-bold pb-5">Produk Meja</h2>
        <MonitorRow monitors={meja} />
      </section>

      <section className="produk-laptop ps-25 pt-10 pe-25" id="produk-monitor">
        <h2 className="text-3xl font-bold pb-5">Produk Kursi</h2>
        <MonitorRow monitors={kursi} />
      </section>
      <br />
    </>
  );
}
