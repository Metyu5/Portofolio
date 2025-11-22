"use client";

import Image from "next/image";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
import Link from "next/link";

type IconType = "work" | "education";

// Interface untuk struktur data pengalaman
interface ExperienceItem {
  date: string;
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
}

// Data Logo Teknologi
const techLogos = [
  { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Data Projek dengan gambar
const myProjects = [
  {
    title: "WebGami",
    description:
      "Aplikasi Gamifikasi interaktif untuk meningkatkan engagement pengguna.",
    image: "/webgami/game1.png",
    link: "https://github.com/Metyu5/WebGami",
    tags: ["Pasher.Js", "PHP", "Tailwind CSS", "JavaScript", "MySQL"],
  },
  {
    title: "SiBudidayaKakap",
    description:
      "Website modern dan responsif untuk profil perusahaan teknologi, dibuat dengan Next.js.",
    image:
      "/webgami/sibudidaya.png",
    link: "https://github.com/username/project-repo-2",
    tags: ["PHP", "Tailwind CSS", "MySQL"],
  },
  {
    title: "Sipenkes",
    description:
      "Blog pribadi yang dibuat dengan Next.js dan Tailwind CSS, mengambil data dari file Markdown.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop&q=80",
    link: "https://github.com/username/project-repo-3",
    tags: ["Next.js", "Markdown", "Tailwind CSS"],
  },
  {
    title: "Sistem Pakar",
    description:
      "proyek Sistem Pakar Diagnosa Penyakit Betta Fish berbasis android, menggunakan Backward Chaining & Certainty Factor untuk menentukan kemungkinan penyakit berdasarkan gejala yang dipilih..",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop&q=80",
    link: "https://github.com/Metyu5/sispak-android",
    tags: ["Java", "PHP", "MySQL"],
  },
];

// Data Timeline (Pekerjaan dan Pendidikan LENGKAP)
const fullTimelineData: ExperienceItem[] = [
  {
    date: "Juli 2023 - Sekarang",
    icon: "work",
    title: "Full-Stack Developer",
    subtitle: "PT Contoh Solusi Digital",
    description:
      "Mengembangkan dan memelihara aplikasi web menggunakan Next.js, TypeScript, dan PostgreSQL. Bertanggung jawab atas integrasi API dan desain basis data.",
  },
  {
    date: "Agustus 2020 - Juni 2023",
    icon: "work",
    title: "Software Engineer Junior",
    subtitle: "Start-up Inovasi Teknologi",
    description:
      "Membangun fitur frontend menggunakan React dan Redux. Berkontribusi pada peningkatan performa aplikasi hingga 40%.",
  },
  {
    date: "2021 - 2025",
    icon: "education",
    title: "S1 Sistem Informasi",
    subtitle: "Universitas Ichsan Gorontalo Utara",
    description:
      "Lulusan Sistem Informasi dengan keahlian di bidang pengembangan aplikasi, manajemen data, dan penerapan teknologi cerdas.",
  },

  // DATA BARU: SMA
  {
    date: "2018 - 2021",
    icon: "education",
    title: "SMK (Teknik Instalasi Tenaga Listrik)",
    subtitle: "SMK NEGERI 3 GORONTALO",
    description:
      "Menempuh pendidikan di bidang Teknik Instalasi Tenaga Listrik di SMK Negeri 3 Gorontalo.",
  },
  // DATA BARU: SMP
  {
    date: "2010 - 2013",
    icon: "education",
    title: "SMP",
    subtitle: "SMP KRISTEN MAESA",
    description:
      "Menempuh pendidikan di SMP KRISTEN MAESA",
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
  const [isOpen, setIsOpen] = useState(false);
  // FILTER DATA: Hanya ambil item dengan icon "education"
  const educationData = fullTimelineData.filter(
    (item) => item.icon === "education"
  );

  return (
    <main className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-slate-200">
      {/* ===== Header (Navbar) ===== */}
      <header className="backdrop-blur-md text-slate-200 p-4 sticky top-0 z-50 border-b border-blue-500/10">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo dengan SplitText */}
          <div className="text-2xl font-bold">
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
          </div>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#experience"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Pendidikan
            </Link>
            <Link
              href="#certificates"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Sertifikat
            </Link>
            <Link
              href="#projects"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Projek
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Kontak
            </Link>
            <Link
              href="/Resume.pdf"
              target="_blank"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              CV 
            </Link>
          </nav>

          {/* Tombol Hamburger (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-blue-400 focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {" "}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:hidden backdrop-blur-lg border-t border-blue-500/20 overflow-hidden"
            >
              {" "}
              <nav className="flex flex-col items-center space-y-4 py-6 text-lg font-medium">
                {" "}
                <Link
                  onClick={() => setIsOpen(false)}
                  href="#experience"
                  className="hover:text-blue-400 transition-colors"
                >
                  Pendidikan
                </Link>{" "}
                <Link
                  onClick={() => setIsOpen(false)}
                  href="#certificates"
                  className="hover:text-blue-400 transition-colors"
                >
                  Sertifikat
                </Link>{" "}
                <Link
                  onClick={() => setIsOpen(false)}
                  href="#projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Projek
                </Link>{" "}
                <Link
                  onClick={() => setIsOpen(false)}
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Kontak
                </Link>{" "}
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/resume.pdf"
                  target="_blank"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-2 px-6 rounded-full transition-all shadow-lg shadow-blue-500/30"
                >
                  {" "}
                  Resume{" "}
                </Link>{" "}
              </nav>{" "}
            </motion.div>
          )}{" "}
        </AnimatePresence>
      </header>
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <DotGrid
            dotSize={2}
            gap={25}
            baseColor="#0f172a"
            activeColor="#3b82f6"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* Gradient Orbs untuk efek visual */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

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
              title="Fullstack Developer"
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
              className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text"
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
            <Link
              href="https://github.com/Metyu5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaGithub size={30} />
            </Link>
            <Link
              href="https://linkedin.com/in/stephanus-saputra-tupamahu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              href={`mailto:${myEmail}`}
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <FaEnvelope size={30} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}

      {/* ===== Bagian Pendidikan (Education - Vertical Timeline) ===== */}
      <section
        id="experience"
        className="py-24 bg-slate-950/50 backdrop-blur-sm relative"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Riwayat Pendidikan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-16"></div>

          <VerticalTimeline lineColor={"#3b82f6"}>
            {educationData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--education"
                contentStyle={{
                  background:
                    "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                  color: "#e2e8f0",
                  boxShadow:
                    "0 3px 0 #3b82f6, 0 0 20px rgba(59, 130, 246, 0.3)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "12px",
                }}
                contentArrowStyle={{ borderRight: "7px solid #1e293b" }}
                date={item.date}
                iconStyle={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                }}
                icon={getTimelineIcon(item.icon)}
              >
                <h3 className="vertical-timeline-element-title text-2xl font-semibold text-slate-100">
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-lg text-blue-400 mt-1">
                  {item.subtitle}
                </h4>
                <p className="text-slate-300 mt-2">{item.description}</p>
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              iconStyle={{
                background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                color: "#fff",
              }}
              icon={<MdSchool />}
            />
          </VerticalTimeline>
        </div>
      </section>

      {/* ---------------------------------------------------- */}

      <section className="py-16 bg-gradient-to-b from-slate-950/50 to-slate-950 relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl mb-10 text-center font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Keahlian
          </h1>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#3b82f6"
            ariaLabel="Technology partners"
          />
        </div>
      </section>

      {/* ===== Bagian Sertifikat (Certificates) ===== */}
      <section
        id="certificates"
        className="py-24 bg-slate-950/80 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sertifikat & Pencapaian
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Bukti dedikasi dan komitmen saya dalam pengembangan diri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "JUNIOR REMOTE PILOT",
                issuer:
                  "FEDERASI AERO SPORT INDONESIA UNMANNED AERIAL VEHICLE-DRONE",
                date: "2025",
                image: "/sertifikat/pilotremote.png",
                description:
                  "Has Successfully Completed Junior Remote Pilot Aeronautical Knowledge Course For Small Unmanned Aircraft Systems (sUAS) in the field of Airsport, Educational, and Recreational",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "DASAR-DASAR CYBER SECURITY",
                issuer: "Coding Studio",
                date: "2025",
                image: "/sertifikat/codingstudio.png",
                description:
                  "Complete an online course on cybersecurity fundamentals, covering information security principles, types of cyber threats, network protection, and best practices in maintaining digital security.",
                color: "from-cyan-500 to-blue-600",
              },
              {
                title: "FUNDAMENTAL JAVA PROGRAMMING",
                issuer: "Coding Studio",
                date: "2025",
                image: "/sertifikat/javaprogramming.png",
                description:
                  "Successfully complete the Fundamental Java Programming course, covering core Java concepts such as OOP, data types, control structures, and basic algorithm implementations.",
                color: "from-blue-600 to-cyan-400",
              },

              {
                title: "APLIKASI KOMPUTER",
                issuer: "Is NUN",
                date: "2021",
                image: "/sertifikat/sertifikat-komputer.jpeg",
                description:
                  "Computer Completion Certificate from the IS NUN Vocational Education and Training Institute. I learned basic computer skills, including mastery of Microsoft Office (Word, Excel, PowerPoint) to support my work productivity.",
                color: "from-cyan-400 to-blue-500",
              },

              {
                title: "Kampus Mengajar Angkatan 5",
                issuer: "Kampus Merdeka",
                date: "2023",
                image: "/sertifikat/kampusmengajar.jpeg",
                description:
                  "Certificate of participation as a teaching volunteer in the Kampus Mengajar Batch 5 Program (February – June 2023), organized by Kampus Merdeka, Ministry of Education, Culture, Research, and Technology of the Republic of Indonesia. Signed by Drs. Gugup Kismono, M.B.A., Ph.D., Head of the Kampus Merdeka Implementation Unit.",
                color: "from-cyan-600 to-blue-400",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="group relative"
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

                {/* Card content */}
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-blue-900/30 group-hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  {/* Certificate Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

                    {/* Badge overlay */}
                    <div
                      className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg backdrop-blur-sm`}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  {/* Certificate info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-cyan-400 font-medium">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">
                        {cert.date}
                      </span>
                    </div>

                    <p className="text-sm text-slate-400 mb-4 flex-grow">
                      {cert.description}
                    </p>

                    {/* Verification badge */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-slate-500">
                        Terverifikasi
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          ></motion.div>
        </div>
      </section>

      {/* ===== Bagian Projek (Projects) - Menggunakan ElectricBorder ===== */}
      <section id="projects" className="py-24 bg-slate-950 relative">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Projek Pilihan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjects.map((project, index) => (
              <ElectricBorder
                key={index}
                color="#3b82f6"
                speed={0.5}
                chaos={0.6}
                thickness={2}
                style={{ borderRadius: 12, overflow: "hidden" }}
                className="group transform transition-all duration-300 hover:!scale-[1.03] cursor-pointer"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-sm"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-all shadow-lg shadow-blue-500/50">
                        Lihat Detail
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold bg-blue-900/50 text-blue-300 py-1 px-3 rounded-full border border-blue-700/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </ElectricBorder>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}

      {/* ===== Bagian Kontak (Contact) ===== */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-slate-950 to-blue-950/30 relative"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mari Terhubung
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru.
            Jangan ragu untuk menghubungi saya!
          </p>
          <Link
            href={`mailto:${myEmail}`}
            className="inline-block bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/40 hover:shadow-blue-500/60"
          >
            Hubungi Saya
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------- */}

      {/* ===== Bagian Footer ===== */}
      <footer className="bg-slate-950 text-center py-8 border-t border-blue-900/20">
        <p className="text-slate-500">
          &copy; {new Date().getFullYear()} Stephanus S. Tupamahu. Dibuat dengan
          ❤️ menggunakan Next.js.
        </p>
      </footer>
    </main>
  );
}
