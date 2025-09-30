"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// Import ikon untuk Timeline
import { MdWork, MdSchool } from "react-icons/md"; 
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPhp, 
} from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


// Komponen Kustom (Diasumsikan sudah ada)
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import DotGrid from "./components/DotGrid/DotGrid";
import CircularText from "./components/CircularText/CircularText";
import BlurText from "./components/BlurText/BlurText";
import LogoLoop from "./components/LogoLoop/LogoLoop";
import SplitText from "./components/SplitText/SplitText";
import ElectricBorder from "./components/ElectricBorder/ElectricBorder"; 
import LaserFlow from "./components/LaserFlow/LaserFlow";


// =========================================================
//                  DEKLARASI TIPE DATA
// =========================================================

// Tipe data untuk properti 'icon' di experienceData
type IconType = "work" | "education"; 

// Interface untuk struktur data pengalaman
interface ExperienceItem {
    date: string;
    icon: IconType;
    title: string;
    subtitle: string;
    description: string;
}

// =========================================================
//                  DATA (Mencakup Pekerjaan dan Pendidikan)
// =========================================================

// Data Logo Teknologi
const techLogos = [
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Data Projek
const myProjects = [
  {
    title: "Gamifikasi",
    description: "Aplikasi Gamifikasi interaktif untuk meningkatkan engagement pengguna.",
    image: "/project1.png",
    link: "https://github.com/username/project-repo-1",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Website Company Profile",
    description:
      "Website modern dan responsif untuk profil perusahaan teknologi, dibuat dengan Next.js.",
    image: "/project2.png",
    link: "https://github.com/username/project-repo-2",
    tags: ["Next.js", "React", "Framer Motion"],
  },
  {
    title: "Aplikasi Blog Pribadi",
    description:
      "Blog pribadi yang dibuat dengan Next.js dan Tailwind CSS, mengambil data dari file Markdown.",
    image: "/project3.png",
    link: "https://github.com/username/project-repo-3",
    tags: ["Next.js", "Markdown", "Tailwind CSS"],
  },
];

// Data Timeline (Pekerjaan dan Pendidikan LENGKAP)
const fullTimelineData: ExperienceItem[] = [
    {
      date: "Juli 2023 - Sekarang",
      icon: "work",
      title: "Full-Stack Developer",
      subtitle: "PT Contoh Solusi Digital",
      description: "Mengembangkan dan memelihara aplikasi web menggunakan Next.js, TypeScript, dan PostgreSQL. Bertanggung jawab atas integrasi API dan desain basis data.",
    },
    {
      date: "Agustus 2020 - Juni 2023",
      icon: "work",
      title: "Software Engineer Junior",
      subtitle: "Start-up Inovasi Teknologi",
      description: "Membangun fitur frontend menggunakan React dan Redux. Berkontribusi pada peningkatan performa aplikasi hingga 40%.",
    },
    {
      date: "2021 - 2025",
      icon: "education",
      title: "S1 Sistem Informasi",
      subtitle: "Universitas Ichsan Gorontalo Utara",
      description: "Lulus dengan predikat cum laude. Fokus pada rekayasa perangkat lunak dan kecerdasan buatan.",
    },

    // DATA BARU: SMA
    {
        date: "2018 - 2021",
        icon: "education",
        title: "SMK (Teknik Instalasi Tenaga Listrik)",
        subtitle: "SMK NEGERI 3 GORONTALO",
        description: "Aktif di klub robotika dan berhasil meraih juara 3 kompetisi tingkat provinsi.",
    },
    // DATA BARU: SMP
    {
        date: "2010 - 2013",
        icon: "education",
        title: "SMP",
        subtitle: "SMP KRISTEN MAESA",
        description: "Mulai tertarik pada dunia teknologi dan pemrograman dasar melalui ekstrakurikuler komputer.",
    },
    // DATA BARU: SD
    {
        date: "2004 - 2010",
        icon: "education",
        title: "SD",
        subtitle: "SDN 76 KOTA TENGAH",
        description: "Dasar pendidikan formal.",
    },
];

// Fungsi utilitas untuk mendapatkan ikon
const getTimelineIcon = (iconType: IconType) => {
    if (iconType === "work") {
        return <MdWork />;
    }
    return <MdSchool />;
};

export default function Home() {
  const myEmail = "metyutupamahu84@gmail.com";
  
  // FILTER DATA: Hanya ambil item dengan icon "education"
  const educationData = fullTimelineData.filter(item => item.icon === "education");


  return (
    <main className="bg-slate-900 text-slate-200">
      {/* ===== Header (Navbar) ===== */}
      <header className="bg-slate-900/80 backdrop-blur-sm text-slate-200 p-4 sticky top-0 z-50 shadow-lg shadow-cyan-500/10">
        <div className="container mx-auto flex justify-between items-center px-4">
          <SplitText
            text="Portofolio"
            className="text-2xl font-semibold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Tentang Saya
            </a>
            <a
              href="#experience"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Pendidikan
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Projek
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Kontak
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      {/* ---------------------------------------------------- */}

      {/* ===== Hero Section (DotGrid + SplashCursor + Content) ===== */}
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden bg-slate-900"
      >
        {/* Layer 1: Dot Grid Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <DotGrid
            dotSize={2}
            gap={25}
            baseColor="#1f2937"
            activeColor="#06b6d4"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* Layer 2: Splash Cursor */}
        <SplashCursor />

        {/* Layer 3: Content (Profile Card, Text, Social Icons) */}
        <div className="container mx-auto px-4 text-center relative z-10 w-full">
          {/* Wrapper untuk Profile Card & Circular Text (relative, di tengah) */}
          <div className="flex justify-center relative mx-auto w-fit">
            {/* Circular Text (Sembunyi di Mobile, Posisi Absolut di Desktop) */}
            <div className="hidden md:block absolute -top-10 md:right-[-100px] z-20">
              <CircularText
                text="REACT*BITS*COMPONENTS*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </div>

            {/* Profile Card */}
            <ProfileCard
              name="Stephanus S. Tupamahu"
              title="Software Engineer"
              handle="mtdeveloper"
              status="Ready"
              contactText="Contact Me"
              avatarUrl="/Desain_tanpa_judul__2_-removebg-preview.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                window.location.href = `mailto:${myEmail}?subject=Peluang%20Kerja%20untuk%20Stephanus`;
              }}
            />
          </div>
          {/* Akhir Wrapper */}

          {/* Teks Animasi Blur */}
          <div className="mt-8 flex justify-center">
            <BlurText
              text="I'm Ready For Job"
              delay={150}
              animateBy="words" 
              direction="top"
              className="text-4xl md:text-6xl font-extrabold text-slate-100"
            />
          </div>

          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Mobile Developer",
              2000,
              "Full-Stack Developer",
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-xl md:text-3xl text-cyan-400 font-semibold mt-4" 
            repeat={Infinity}
          />

          <p className="text-lg text-slate-400 max-w-3xl mx-auto mt-6">
            Hi, I'm a passionate web developer who loves turning ideas into
            real-world digital products. I enjoy designing and coding modern,
            responsive, and functional applications that solve problems and
            create value for people. For me, every project is an opportunity to
            learn, grow, and make a difference.
          </p>
          {/* Link Sosial dan Email */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://github.com/Metyu5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/stephanus-saputra-tupamahu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href={`mailto:${myEmail}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}

      {/* ===== Bagian Tentang Saya & Skills ===== */}
      <section id="about" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-slate-300 leading-relaxed">
              <p className="mb-4">
                As a passionate web developer with a strong focus on the
                JavaScript ecosystem, especially React and Next.js, I take pride
                in turning complex concepts into elegant, intuitive
                applications.
              </p>
              <p>
                With experience across both frontend and backend development, I
                am confident in delivering complete, scalable solutions. I am
                driven by curiosity, continuous learning, and a commitment to
                finding the most effective ways to solve problems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ---------------------------------------------------- */}

      {/* ===== Bagian Pendidikan (Education - Vertical Timeline) ===== */}
      <section id="experience" className="py-24 bg-slate-900">
          <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4">
                  Riwayat Pendidikan
              </h2>
              <div className="w-24 h-1 bg-cyan-500 mx-auto mb-16"></div>

              <VerticalTimeline lineColor={"#06b6d4"}> {/* Warna cyan */}
                  {/* MENGGUNAKAN DATA YANG SUDAH DIFILTER (hanya 'education') */}
                  {educationData.map((item, index) => (
                      <VerticalTimelineElement
                          key={index}
                          className="vertical-timeline-element--education"
                          // Styling agar sesuai dengan tema gelap
                          contentStyle={{ background: "#1f2937", color: "#e2e8f0", boxShadow: "0 3px 0 #06b6d4" }} 
                          contentArrowStyle={{ borderRight: "7px solid #1f2937" }} 
                          date={item.date}
                          iconStyle={{ background: "#06b6d4", color: "#fff" }} 
                          icon={getTimelineIcon(item.icon)}
                      >
                          <h3 className="vertical-timeline-element-title text-2xl font-semibold text-slate-100">
                              {item.title}
                          </h3>
                          <h4 className="vertical-timeline-element-subtitle text-lg text-cyan-400 mt-1">
                              {item.subtitle}
                          </h4>
                          <p className="text-slate-300 mt-2">{item.description}</p>
                      </VerticalTimelineElement>
                  ))}
                  {/* Element penutup timeline (opsional) */}
                  <VerticalTimelineElement
                      iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                      icon={<MdSchool />}
                  />
              </VerticalTimeline>
          </div>
      </section>

      {/* ---------------------------------------------------- */}
      
      <h1 className="text-4xl mb-10 text-center font-semibold">Keahlian</h1>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#00d3f3"
        ariaLabel="Technology partners"
      />
      
      {/* ===== Bagian Projek (Projects) - Menggunakan ElectricBorder ===== */}
      <section id="projects" className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Projek Pilihan
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-16"></div>
          {/* Responsif Grid: 1 kolom di ponsel, 2 di tablet, 3 di desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjects.map((project, index) => (
              // Bungkus setiap kartu proyek dengan ElectricBorder
              <ElectricBorder
                key={index}
                color="#06b6d4" // Warna Cyan
                speed={0.5} 
                chaos={0.6} 
                thickness={2} 
                style={{ borderRadius: 8, overflow: 'hidden' }} 
                className="group transform transition-all duration-300 hover:!scale-[1.02] cursor-pointer" 
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full bg-gray-800/50" // Kontainer internal
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-slate-100">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold bg-cyan-900/50 text-cyan-300 py-1 px-3 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </ElectricBorder>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}

      {/* ===== Bagian Kontak (Contact) ===== */}
      <section id="contact" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Mari Terhubung</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru.
            Jangan ragu untuk menghubungi saya!
          </p>
          <a
            href={`mailto:${myEmail}`}
            className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
          >
            Hubungi Saya
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------- */}

      {/* ===== Bagian Footer ===== */}
      <footer className="bg-slate-900 text-center py-8 border-t border-slate-800">
        <p className="text-slate-500">
          &copy; {new Date().getFullYear()} Stephanus S. Tupamahu. Dibuat dengan
          ❤️ menggunakan Next.js.
        </p>
      </footer>
    </main>
  );
}