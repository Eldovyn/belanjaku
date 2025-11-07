import requests

URL_API = "http://localhost:3000/api/product"
TOKEN_ADMIN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MGRhZWU0MTA4NTFjNTVmYzQ1Y2I4NyJ9.IW9UK_l2EC1NZUz1M28g18cV3OkNOePRAdpoXc_IOYc"

headers = {"Authorization": f"Bearer {TOKEN_ADMIN}", "Content-Type": "application/json"}

products = [
    # 10 Laptop (harga ≤ 500000)
    {
        "title": "Laptop Pro 15″",
        "description": "Laptop high-end untuk profesional, 15 inci, prosesor terbaru.",
        "imageUrl": "https://images.unsplash.com/photo-1555617117-08bce3086172",
        "price": 500000,
        "productType": "laptop",
    },
    {
        "title": "Laptop Ultrabook 13″",
        "description": "Ringan dan ultra-portabel, cocok untuk mobile developer.",
        "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        "price": 450000,
        "productType": "laptop",
    },
    {
        "title": "Laptop Gaming 17″",
        "description": "Laptop gaming 17 inci dengan GPU high-end untuk developer yang juga gamer.",
        "imageUrl": "https://images.unsplash.com/photo-1539884537273-7acdcc3d06a9",
        "price": 490000,
        "productType": "laptop",
    },
    {
        "title": "Laptop Business 14″",
        "description": "Laptop bisnis 14 inci dengan keamanan tambahan dan konektivitas lengkap.",
        "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "price": 400000,
        "productType": "laptop",
    },
    {
        "title": "Laptop Hybrid 2-in-1 13″",
        "description": "Laptop convertible 2-in-1, layar sentuh dan stylus support.",
        "imageUrl": "https://images.unsplash.com/photo-1498050108023-0f9c1dcf8b11",
        "price": 380000,
        "productType": "laptop",
    },
    {
        "title": "Laptop Creator 16″",
        "description": "Laptop untuk kreator konten, layar besar 16 inci dengan kalibrasi warna profesional.",
        "imageUrl": "https://images.unsplash.com/photo-1561154464-2a2a1e1d7d94",
        "price": 470000,
        "productType": "laptop",
    },
    {
        "title": "Laptop Student 15″",
        "description": "Laptop dengan harga terjangkau, cocok untuk pelajar dan mahasiswa.",
        "imageUrl": "https://images.unsplash.com/photo-1517430816045-d1d1fbd2b1d1",
        "price": 300000,
        "productType": "laptop",
    },
    {
        "title": "Laptop Ultraportable 11″",
        "description": "Laptop super ringan 11 inci, ideal untuk travel dan remote working.",
        "imageUrl": "https://images.unsplash.com/photo-1527430253228-e93688616381",
        "price": 320000,
        "productType": "laptop",
    },
    {
        "title": "Laptop Workstation 15″",
        "description": "Laptop workstation dengan GPU dan CPU kelas workstation untuk tugas berat.",
        "imageUrl": "https://images.unsplash.com/photo-1586281380397-16c6d1d3d7b3",
        "price": 500000,
        "productType": "laptop",
    },
    {
        "title": "Laptop Refurbished Certified 15″",
        "description": "Laptop refurbished bersertifikasi dengan garansi, performa tinggi di harga lebih rendah.",
        "imageUrl": "https://images.unsplash.com/photo-1580657013410-1d18d7c8c4a2",
        "price": 250000,
        "productType": "laptop",
    },
    # 10 Monitor (harga ≤ 500000)
    {
        "title": "Monitor 27″ QHD",
        "description": "Monitor 27 inci dengan resolusi QHD, ideal untuk multitasking.",
        "imageUrl": "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
        "price": 420000,
        "productType": "monitor",
    },
    {
        "title": "Monitor UltraWide 34″",
        "description": "Monitor ultra-wide 34 inci untuk pengalaman kerja yang immersive.",
        "imageUrl": "https://images.unsplash.com/photo-1516507246022-80d0277d8179",
        "price": 480000,
        "productType": "monitor",
    },
    {
        "title": "Monitor 24″ Full HD",
        "description": "Monitor 24 inci Full HD, solusi hemat untuk setup kantor atau home office.",
        "imageUrl": "https://images.unsplash.com/photo-1527430253228-somethingMonitor",
        "price": 180000,
        "productType": "monitor",
    },
    {
        "title": "Monitor Gaming 32″ 144Hz",
        "description": "Monitor gaming 32 inci dengan refresh rate 144Hz dan time-response rendah.",
        "imageUrl": "https://images.unsplash.com/photo-1586281380397-somethingMonitor",
        "price": 500000,
        "productType": "monitor",
    },
    {
        "title": "Monitor 27″ 4K HDR",
        "description": "Monitor profesional 27 inci dengan resolusi 4K dan dukungan HDR.",
        "imageUrl": "https://images.unsplash.com/photo-1580657013410-somethingMonitor",
        "price": 470000,
        "productType": "monitor",
    },
    {
        "title": "Monitor Curved 34″ QHD",
        "description": "Monitor curved 34 inci dengan resolusi QHD untuk pengalaman sinematik.",
        "imageUrl": "https://images.unsplash.com/photo-1561154464-somethingMonitor",
        "price": 490000,
        "productType": "monitor",
    },
    {
        "title": "Monitor Portable 15.6″ USB-C",
        "description": "Monitor 15.6 inci yang portable, koneksi USB-C, cocok untuk travel setup.",
        "imageUrl": "https://images.unsplash.com/photo-1517430816045-somethingMonitor",
        "price": 220000,
        "productType": "monitor",
    },
    {
        "title": "Monitor HDMI-KVM 27″",
        "description": "Monitor 27 inci dengan fitur KVM switch untuk pengguna banyak komputer.",
        "imageUrl": "https://images.unsplash.com/photo-1527430253228-somethingMonitor2",
        "price": 360000,
        "productType": "monitor",
    },
    {
        "title": "Monitor Budget 22″",
        "description": "Monitor 22 inci budget-friendly untuk kebutuhan dasar.",
        "imageUrl": "https://images.unsplash.com/photo-1586281380397-somethingMonitor2",
        "price": 150000,
        "productType": "monitor",
    },
    {
        "title": "Monitor Professional Color 32″",
        "description": "Monitor 32 inci dengan color gamut tinggi (AdobeRGB), untuk desainer grafis.",
        "imageUrl": "https://images.unsplash.com/photo-1580657013410-somethingMonitor2",
        "price": 490000,
        "productType": "monitor",
    },
    # 10 Meja (harga ≤ 500000)
    {
        "title": "Meja Kerja Kayu Solid",
        "description": "Meja kerja dari kayu solid dengan desain minimalis untuk home-office.",
        "imageUrl": "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "price": 350000,
        "productType": "meja",
    },
    {
        "title": "Meja Standing Adjustable",
        "description": "Meja standing adjustable untuk berdiri dan duduk bergantian.",
        "imageUrl": "https://images.unsplash.com/photo-1581276879432-15a5d8a39a7b",
        "price": 480000,
        "productType": "meja",
    },
    {
        "title": "Meja Minimalis Putih",
        "description": "Meja dengan desain minimalis warna putih, cocok untuk interior modern.",
        "imageUrl": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
        "price": 300000,
        "productType": "meja",
    },
    {
        "title": "Meja Komputer L Shape",
        "description": "Meja komputer berbentuk L untuk memaksimalkan ruang pojok.",
        "imageUrl": "https://images.unsplash.com/photo-1598300055003-cd8caab7a8af",
        "price": 470000,
        "productType": "meja",
    },
    {
        "title": "Meja Industri Besi & Kayu",
        "description": "Meja dengan kombinasi rangka besi dan alas kayu, gaya industrial.",
        "imageUrl": "https://images.unsplash.com/photo-1481277542470-somethingDesk",
        "price": 420000,
        "productType": "meja",
    },
    {
        "title": "Meja Lipat Portable",
        "description": "Meja lipat portable untuk membuat setup fleksibel di ruang kecil.",
        "imageUrl": "https://images.unsplash.com/photo-1498050108023-somethingDesk",
        "price": 200000,
        "productType": "meja",
    },
    {
        "title": "Meja Gaming RGB",
        "description": "Meja gaming dengan fitur RGB lighting dan penataan kabel terintegrasi.",
        "imageUrl": "https://images.unsplash.com/photo-1527430253228-somethingDesk2",
        "price": 490000,
        "productType": "meja",
    },
    {
        "title": "Meja Kantor Ergonomis",
        "description": "Meja kantor ergonomis dengan pengaturan ketinggian dan manajemen kabel.",
        "imageUrl": "https://images.unsplash.com/photo-1586281380397-somethingDesk2",
        "price": 460000,
        "productType": "meja",
    },
    {
        "title": "Meja Belajar Anak",
        "description": "Meja belajar dengan desain ramah anak dan ruang penyimpanan tambahan.",
        "imageUrl": "https://images.unsplash.com/photo-1580657013410-somethingDesk2",
        "price": 230000,
        "productType": "meja",
    },
    {
        "title": "Meja Tambahan untuk Laptop",
        "description": "Meja kecil tambahan khusus untuk laptop, ideal untuk ruang tamu atau kamar.",
        "imageUrl": "https://images.unsplash.com/photo-1561154464-somethingDesk2",
        "price": 180000,
        "productType": "meja",
    },
    # 10 Kursi (harga ≤ 500000)
    {
        "title": "Kursi Ergonomis Premium",
        "description": "Kursi ergonomis dengan sandaran kepala dan dukungan lumbar.",
        "imageUrl": "https://images.unsplash.com/photo-1586105251261-72a756497a01",
        "price": 490000,
        "productType": "kursi",
    },
    {
        "title": "Kursi Gaming RGB",
        "description": "Kursi gaming dengan aksen RGB dan sandaran yang bisa dibaringkan.",
        "imageUrl": "https://images.unsplash.com/photo-1598300055003-cd8caab7a8af",
        "price": 350000,
        "productType": "kursi",
    },
    {
        "title": "Kursi Kantor Minimalis",
        "description": "Kursi kantor dengan desain minimalis dan bantalan nyaman.",
        "imageUrl": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
        "price": 250000,
        "productType": "kursi",
    },
    {
        "title": "Kursi Putar Swivel High-Back",
        "description": "Kursi dengan fitur swivel dan high-back untuk kenyamanan jangka panjang.",
        "imageUrl": "https://images.unsplash.com/photo-1481277542470-somethingChair",
        "price": 370000,
        "productType": "kursi",
    },
    {
        "title": "Kursi Belajar Anak",
        "description": "Kursi belajar ukuran anak dengan sandaran ergonomis dan warna cerah.",
        "imageUrl": "https://images.unsplash.com/photo-1498050108023-somethingChair",
        "price": 180000,
        "productType": "kursi",
    },
    {
        "title": "Kursi Lipat Portable",
        "description": "Kursi lipat yang mudah disimpan, ideal untuk ruang tamu ataupun ekstra bangku.",
        "imageUrl": "https://images.unsplash.com/photo-1527430253228-somethingChair2",
        "price": 120000,
        "productType": "kursi",
    },
    {
        "title": "Kursi Kulit Executive",
        "description": "Kursi kulit untuk eksekutif, desain elegan dan nyaman.",
        "imageUrl": "https://images.unsplash.com/photo-1586281380397-somethingChair2",
        "price": 499000,
        "productType": "kursi",
    },
    {
        "title": "Kursi Gaming Bucket Seat",
        "description": "Kursi gaming bucket seat dengan rangka logam dan bantal tambahan.",
        "imageUrl": "https://images.unsplash.com/photo-1580657013410-somethingChair2",
        "price": 330000,
        "productType": "kursi",
    },
    {
        "title": "Kursi Kantor Mesh",
        "description": "Kursi kantor dengan sandaran jaring (mesh) dan bantalan udara.",
        "imageUrl": "https://images.unsplash.com/photo-1561154464-somethingChair2",
        "price": 270000,
        "productType": "kursi",
    },
    {
        "title": "Kursi Outdoor Teras",
        "description": "Kursi outdoor yang bisa juga digunakan sebagai kursi kerja casual di balkon/teras.",
        "imageUrl": "https://images.unsplash.com/photo-1517430816045-somethingChair2",
        "price": 150000,
        "productType": "kursi",
    },
]

for product in products:
    response = requests.post(URL_API, headers=headers, json=product)
    print(f"Sent product \"{product['title']}\" => status {response.status_code}")
    try:
        print("Response:", response.json())
    except Exception:
        print("No JSON response body.")
