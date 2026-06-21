import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { SiGmail, SiWhatsapp, SiInstagram } from 'react-icons/si';
import { motion } from 'framer-motion';
import ScrollVelocity from './ScrollVelocity';
import './index.css';

const experiencesData = [
  { text: "Divisi Branding Media Lembaga Pers Mahasiswa Poros 2025-2026", role: "Kepala Divisi" },
  { text: "Lembaga Pers Mahasiswa Poros 2022-2026", role: "Anggota dan Jurnalis" },
  { text: "Lembaga Media Pimpinan Daerah Ikatan Pelajar Muhammadiyah Bantul 2025-2026", role: "Direktur Lembaga" },
  { text: "Bidang Kajian Dakwah (KDI) Islam Pimpinan Cabang Ikatan Pelajar Muhammadiyah Kapanewon Bantul 2024-2026", role: "Anggota Bidang" },
  { text: "Program Penguatan Kapasitas Organisasi Mahasiswa (PPKO) Teknologi Pangan 2024", role: "Anggota Divisi Digital and Technology" },
  { text: "Pengurus Unit Kegiatan Mahasiswa Taekwondo 2023-2025", role: "Atlet dan Anggota Pengurus Perlengkapan" },
  { text: "Pelatihan Jurnalistik Tingkat Dasar 2023 Pers Mahasiswa", role: "Koordinator Media" },
  { text: "Pelatihan Jurnalistik Tingkat Dasar 2024 Pers Mahasiswa", role: "Koordinator Media" },
  { text: "Pelatihan Jurnalistik Tingkat Lanjut 2025 Pers Mahasiswa", role: "Koordinator Media" },
  { text: "Event Muhammadiyah Student Creative Competition 9 (MSCC) 2025", role: "Panitia Divisi Media" },
  { text: "Event Forum Ta'aruf dan Orientasi Siswa (FORTASI) Se- Bantul 2025", role: "Panitia Divisi Media" },
  { text: "Event Prabusena 2025", role: "Panitia Divisi Media" },
  { text: "Event Taruna Melati 2 (TM) 2025", role: "Panitia Divisi Media" },
  { text: "Event Two Thousand Show (TTS) 2025", role: "Panitia Divisi Acara" },
  { text: "Event Bazar Buku Poros 2025", role: "Koordinator Media" },
  { text: "Event Festival Karakter Berdaya 2 (FESRAYA) 2025", role: "Koordinator Divisi Acara" },
  { text: "Event Bazar Buku Poros 2026", role: "Koordinator Media" },
  { text: "Event Poros Festival 2025", role: "Koordinator Media" },
  { text: "Magang PT. Bluebird Yogyakarta 2025", role: "Human Resource Development dan Content Creation" },
  { text: "Nalar Creative", role: "Owner" }
];

// Smooth easing curve
const smoothEase = [0.25, 0.1, 0.25, 1];

// --- Animation Variants ---

// Fade in from below (default)
const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: (delay = 0) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.8, ease: smoothEase, delay }
  })
};

// Fade in from left
const fadeLeft = {
  hidden: { opacity: 0, x: -80, filter: 'blur(6px)' },
  visible: (delay = 0) => ({
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { duration: 0.85, ease: smoothEase, delay }
  })
};

// Fade in from right
const fadeRight = {
  hidden: { opacity: 0, x: 80, filter: 'blur(6px)' },
  visible: (delay = 0) => ({
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { duration: 0.85, ease: smoothEase, delay }
  })
};

// Scale up from center
const scaleUp = {
  hidden: { opacity: 0, scale: 0.85, filter: 'blur(10px)' },
  visible: (delay = 0) => ({
    opacity: 1, scale: 1, filter: 'blur(0px)',
    transition: { duration: 0.9, ease: smoothEase, delay }
  })
};

// Stagger container
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Child item for stagger
const staggerChild = {
  hidden: { opacity: 0, y: 35, filter: 'blur(6px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.7, ease: smoothEase }
  }
};

// Child from left for stagger
const staggerChildLeft = {
  hidden: { opacity: 0, x: -50, filter: 'blur(4px)' },
  visible: {
    opacity: 1, x: 0, filter: 'blur(0px)',
    transition: { duration: 0.7, ease: smoothEase }
  }
};

// Child scale for stagger
const staggerChildScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, ease: smoothEase }
  }
};

// Spring hover config
const springHover = { type: 'spring', stiffness: 400, damping: 20 };


function App() {
  return (
    <div className="landing-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowX: 'hidden', boxSizing: 'border-box' }}>
      
      {/* ==================== SECTION 1: Hero ==================== */}
      <motion.section 
        className="section-image"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ width: '100%', maxWidth: '1920px', display: 'flex', justifyContent: 'center', position: 'relative' }}
      >
        {/* Hero Image */}
        <motion.img 
          src="/background/halaman1.png" 
          alt="Halaman 1" 
          variants={scaleUp}
          custom={0}
          style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
        />
        
        {/* Navbar */}
        <motion.div 
          variants={fadeUp}
          custom={0.4}
          style={{ position: 'absolute', bottom: '5%', left: 0, right: 0, padding: '10px 2%', display: 'flex', justifyContent: 'center', gap: 'clamp(10px, 2vw, 30px)', zIndex: 50, flexWrap: 'wrap' }}
        >
          {['Sosial Media Project', 'Desain Grafis', 'Fotografer', 'Vidiografer'].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: smoothEase }}
              whileHover={{ scale: 1.15, color: '#00C4CC', transition: springHover }}
              style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: 'clamp(0.6rem, 1.5vw, 0.9rem)', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 2px 10px rgba(0,0,0,0.8)', textAlign: 'center' }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
        
        {/* Floating Icons */}
        {/* Pr */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -20, 0], rotate: [0, -5, 5, 0] }}
          transition={{ opacity: { delay: 0.3, duration: 0.6 }, scale: { delay: 0.3, duration: 0.6, type: 'spring', stiffness: 200 }, y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.9 }, rotate: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.9 } }}
          style={{ position: 'absolute', top: '15%', left: '15%', width: 'clamp(40px, 6vw, 70px)', height: 'clamp(40px, 6vw, 70px)', backgroundColor: '#000020', border: '2px solid #9999FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#9999FF', fontWeight: 'bold', fontSize: 'clamp(1rem, 2vw, 1.8rem)', boxShadow: '0 0 15px #9999FF', zIndex: 5, boxSizing: 'border-box' }}>Pr</motion.div>
        
        {/* Lr */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, 15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ opacity: { delay: 0.5, duration: 0.6 }, scale: { delay: 0.5, duration: 0.6, type: 'spring', stiffness: 200 }, y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.1 }, rotate: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.1 } }}
          style={{ position: 'absolute', top: '50%', left: '8%', width: 'clamp(40px, 6vw, 70px)', height: 'clamp(40px, 6vw, 70px)', backgroundColor: '#001a20', border: '2px solid #31A8FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#31A8FF', fontWeight: 'bold', fontSize: 'clamp(1rem, 2vw, 1.8rem)', boxShadow: '0 0 15px #31A8FF', zIndex: 5, boxSizing: 'border-box' }}>Lr</motion.div>

        {/* Ae */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ opacity: { delay: 0.7, duration: 0.6 }, scale: { delay: 0.7, duration: 0.6, type: 'spring', stiffness: 200 }, y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.3 }, rotate: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.3 } }}
          style={{ position: 'absolute', top: '25%', right: '15%', width: 'clamp(40px, 6vw, 70px)', height: 'clamp(40px, 6vw, 70px)', backgroundColor: '#1a0033', border: '2px solid #D699FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#D699FF', fontWeight: 'bold', fontSize: 'clamp(1rem, 2vw, 1.8rem)', boxShadow: '0 0 15px #D699FF', zIndex: 5, boxSizing: 'border-box' }}>Ae</motion.div>

        {/* Alight Motion */}
        <motion.img src="/a.png"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, 20, 0], rotate: [0, -5, 5, 0] }}
          transition={{ opacity: { delay: 0.9, duration: 0.6 }, scale: { delay: 0.9, duration: 0.6, type: 'spring', stiffness: 200 }, y: { repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }, rotate: { repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 } }}
          style={{ position: 'absolute', bottom: '20%', left: '20%', width: 'clamp(40px, 6vw, 70px)', height: 'clamp(40px, 6vw, 70px)', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 0 15px #99FF33', zIndex: 5, boxSizing: 'border-box' }} />

        {/* Canva */}
        <motion.img src="/canva.png"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
          transition={{ opacity: { delay: 1.1, duration: 0.6 }, scale: { delay: 1.1, duration: 0.6, type: 'spring', stiffness: 200 }, y: { repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.7 }, rotate: { repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1.7 } }}
          style={{ position: 'absolute', top: '60%', right: '10%', width: 'clamp(40px, 6vw, 70px)', height: 'clamp(40px, 6vw, 70px)', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 0 15px #00C4CC', zIndex: 5, boxSizing: 'border-box' }} />

        {/* CapCut */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, 15, 0], rotate: [0, -5, 5, 0] }}
          transition={{ opacity: { delay: 1.3, duration: 0.6 }, scale: { delay: 1.3, duration: 0.6, type: 'spring', stiffness: 200 }, y: { repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.9 }, rotate: { repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.9 } }}
          style={{ position: 'absolute', bottom: '25%', right: '25%', width: 'clamp(40px, 6vw, 70px)', height: 'clamp(40px, 6vw, 70px)', borderRadius: '12px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', boxShadow: '0 0 15px #ffffff', zIndex: 5, boxSizing: 'border-box' }}>
          <img src="/Capcut logo png.png" style={{ width: '135%', height: '135%', objectFit: 'contain' }} />
        </motion.div>

        {/* Gradient shadow */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 'clamp(50px, 15vw, 200px)', background: 'linear-gradient(to bottom, transparent, #000)', pointerEvents: 'none' }}></div>
      </motion.section>

      {/* ==================== MARQUEE SEPARATOR ==================== */}
      <motion.div 
        initial={{ opacity: 0, scaleX: 0.8 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, ease: smoothEase }}
        viewport={{ once: true, amount: 0.3 }}
        style={{
          width: '100%',
          maxWidth: '1920px',
          backgroundColor: '#000',
          padding: '20px 0',
          position: 'relative',
          zIndex: 10,
          marginTop: '-5px',
          marginBottom: '-5px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ScrollVelocity baseVelocity={0.8} velocityMultiplier={3}>
            <span style={{ 
              fontSize: 'clamp(1.5rem, 6vw, 4.5rem)', 
              fontWeight: 900, 
              letterSpacing: '-2px', 
              textTransform: 'uppercase',
              color: '#fff',
              marginRight: '20px'
            }}>
              SOSIAL MEDIA SPESIALIST / DESAIN GRAFIS / FOTOGRAFER / VIDIOGRAFER / 
            </span>
        </ScrollVelocity>
        <ScrollVelocity baseVelocity={-0.8} velocityMultiplier={3}>
            <span style={{ 
              fontSize: 'clamp(1.5rem, 6vw, 4.5rem)', 
              fontWeight: 900, 
              letterSpacing: '-2px', 
              textTransform: 'uppercase',
              color: '#fff',
              marginRight: '20px'
            }}>
              SOSIAL MEDIA SPESIALIST / DESAIN GRAFIS / FOTOGRAFER / VIDIOGRAFER / 
            </span>
        </ScrollVelocity>
      </motion.div>


      {/* ==================== SECTION 2: About Me ==================== */}
      <section 
        className="section-aboutme"
        style={{ 
          width: '100%', 
          maxWidth: '1920px', 
          minHeight: '100vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#151718',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
          color: '#fff',
          padding: '100px 5% 20px 5%',
          boxSizing: 'border-box'
        }}
      >
        {/* Background Grid & Glow */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: 'center center',
          zIndex: 1,
          opacity: 0.8
        }}></div>
        <div style={{ position: 'absolute', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(100,200,255,0.15) 0%, rgba(0,0,0,0) 70%)', top: '-30%', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}></div>

        {/* Top gradient */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'clamp(50px, 15vw, 200px)', background: 'linear-gradient(to bottom, #000, transparent)', pointerEvents: 'none', zIndex: 5 }}></div>

        <div style={{
          position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', maxWidth: '1400px', gap: '50px', paddingBottom: '100px', boxSizing: 'border-box'
        }}>
          {/* Left Column: Text */}
          <div style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Name Header — slide from left */}
            <motion.div 
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}
              style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, lineHeight: '0.9', margin: 0, textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Impact, Anton, sans-serif' }}>
                RAYHAN <br /> FIQRI HAIKAL
              </h1>
              <motion.h3 
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2}
                style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: 700, margin: 0, fontStyle: 'italic', color: '#e0e0e0' }}
              >
                SOCIAL MEDIA CREATIVE
              </motion.h3>
            </motion.div>

            {/* About Me — fade up with blur */}
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.15}
            >
              <motion.h2 
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.1}
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, margin: '0 0 10px 0', fontFamily: 'Impact, Anton, sans-serif', textTransform: 'uppercase' }}
              >ABOUT ME</motion.h2>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#ccc', margin: 0, textAlign: 'justify' }}>
                Halo! Saya Rey, lulusan Program Studi Ilmu Komunikasi dari Universitas Ahmad Dahlan
                dengan ketertarikan yang kuat di bidang kreatif, khususnya social media management,
                branding, dan content creation. Saya memiliki pengalaman dalam mengelola berbagai
                akun media sosial organisasi maupun event, serta didukung oleh kemampuan di
                bidang fotografi dan videografi untuk menghasilkan konten yang menarik dan relevan.
                Selama menempuh pendidikan, saya juga mendalami strategi marketing dan
                branding, yang kemudian saya implementasikan melalui pendirian Nalar Creative,
                sebuah creative agency yang saya bangun sebagai wadah pengembangan ide dan
                kreativitas. Pengalaman tersebut membentuk pemahaman saya dalam mengubah
                konsep menjadi karya yang tidak hanya memiliki nilai estetika, tetapi juga mampu
                memberikan dampak serta membangun keterhubungan yang kuat dengan <span className="typing-effect">audiens.</span>
              </p>
            </motion.div>

            {/* Education — slide from left */}
            <motion.div 
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={0.1}
            >
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, margin: '0 0 5px 0', fontFamily: 'Impact, Anton, sans-serif', textTransform: 'uppercase' }}>EDUCATION</h2>
              <motion.p 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2}
                style={{ fontSize: '1rem', color: '#eee', margin: '0 0 5px 0' }}
              >S1 - Ilmu Komunikasi Universitas Ahmad Dahlan</motion.p>
              <motion.p 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.35}
                style={{ fontSize: '1rem', fontWeight: 'bold', color: '#fff', margin: 0 }}
              >GPA: 3.89/ 4.00</motion.p>
            </motion.div>

            {/* Software & Contact — stagger container */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}
            >
              {/* Software */}
              <motion.div variants={staggerChild} style={{ flex: '1 1 200px' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, margin: '0 0 15px 0', fontFamily: 'Impact, Anton, sans-serif', textTransform: 'uppercase' }}>SOFTWARE</h2>
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <motion.div variants={staggerChildScale} whileHover={{ scale: 1.2, rotate: -5, boxShadow: '0 0 25px #9999FF', zIndex: 10 }} transition={springHover} style={{ width: '55px', height: '55px', backgroundColor: '#000020', border: '2px solid #9999FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#9999FF', fontWeight: 'bold', fontSize: '1.4rem', cursor: 'pointer', boxSizing: 'border-box' }}>Pr</motion.div>
                    <motion.div variants={staggerChildScale} whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 25px #31A8FF', zIndex: 10 }} transition={springHover} style={{ width: '55px', height: '55px', backgroundColor: '#001a20', border: '2px solid #31A8FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#31A8FF', fontWeight: 'bold', fontSize: '1.4rem', cursor: 'pointer', boxSizing: 'border-box' }}>Lr</motion.div>
                    <motion.img variants={staggerChildScale} src="/a.png" alt="Alight Motion" whileHover={{ scale: 1.2, rotate: -5, boxShadow: '0 0 25px #99FF33', zIndex: 10 }} transition={springHover} style={{ width: '55px', height: '55px', borderRadius: '12px', cursor: 'pointer', objectFit: 'cover', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                    <motion.div variants={staggerChildScale} whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 25px #D699FF', zIndex: 10 }} transition={springHover} style={{ width: '55px', height: '55px', backgroundColor: '#1a0033', border: '2px solid #D699FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#D699FF', fontWeight: 'bold', fontSize: '1.4rem', cursor: 'pointer', boxSizing: 'border-box' }}>Ae</motion.div>
                    <motion.img variants={staggerChildScale} src="/canva.png" alt="Canva" whileHover={{ scale: 1.2, rotate: -5, boxShadow: '0 0 25px #00C4CC', zIndex: 10 }} transition={springHover} style={{ width: '55px', height: '55px', borderRadius: '12px', cursor: 'pointer', objectFit: 'cover', boxSizing: 'border-box' }} />
                    <motion.div variants={staggerChildScale} whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 25px #ffffff', zIndex: 10 }} transition={springHover} style={{ width: '55px', height: '55px', borderRadius: '12px', cursor: 'pointer', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', boxSizing: 'border-box' }}>
                      <img src="/Capcut logo png.png" alt="CapCut" style={{ width: '135%', height: '135%', objectFit: 'contain' }} />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact */}
              <motion.div variants={staggerChild} style={{ flex: '1 1 250px' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, margin: '0 0 15px 0', fontFamily: 'Impact, Anton, sans-serif', textTransform: 'uppercase' }}>CONTACT</h2>
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <motion.a 
                    variants={staggerChildLeft}
                    whileHover={{ x: 8, color: '#EA4335', transition: springHover }}
                    href="mailto:rayfqihaikal0404@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', cursor: 'pointer' }}
                  >
                    <SiGmail size={24} color="#EA4335" /> <span style={{ fontSize: '0.95rem' }}>rayfqihaikal0404@gmail.com</span>
                  </motion.a>
                  
                  <motion.a 
                    variants={staggerChildLeft}
                    whileHover={{ x: 8, color: '#25D366', transition: springHover }}
                    href="https://wa.me/6285291503532" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', cursor: 'pointer' }}
                  >
                    <SiWhatsapp size={24} color="#25D366" /> <span style={{ fontSize: '0.95rem' }}>+6285291503532</span>
                  </motion.a>

                  <motion.a 
                    variants={staggerChildLeft}
                    whileHover={{ x: 8, color: '#E1306C', transition: springHover }}
                    href="https://instagram.com/iitsrey04" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', cursor: 'pointer' }}
                  >
                    <SiInstagram size={24} color="#E1306C" /> <span style={{ fontSize: '0.95rem' }}>@iitsrey04</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Photo — scale up from right */}
          <motion.div 
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.3}
            style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', minHeight: '500px' }}
          >
             {/* Blue glow circle */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: smoothEase, delay: 0.4 }}
               style={{ position: 'absolute', width: '80%', paddingBottom: '80%', background: 'radial-gradient(circle, rgba(0,200,255,1) 0%, rgba(0,200,255,0.4) 50%, rgba(0,0,0,0) 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, borderRadius: '50%' }}
             ></motion.div>
             <motion.img 
               src="/lemen.png" 
               alt="Rayhan Fiqri Haikal" 
               initial={{ opacity: 0, y: 80, scale: 0.9 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: smoothEase, delay: 0.5 }}
               style={{ 
                position: 'relative', 
                zIndex: 2, 
                width: '100%', 
                maxWidth: '500px', 
                height: 'auto', 
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
              }} 
             />
          </motion.div>

        </div>

        {/* Bottom gradient */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 'clamp(50px, 15vw, 200px)', background: 'linear-gradient(to bottom, transparent, #000)', pointerEvents: 'none', zIndex: 5 }}></div>
      </section>

      {/* Black spacer */}
      <div style={{ width: '100%', height: '20px', backgroundColor: '#000' }}></div>

      {/* ==================== SECTION 3: Experience ==================== */}
      <section 
        className="section-portfolio"
        style={{ 
          width: '100%', 
          maxWidth: '1920px', 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#0a0a0a',
          padding: '20px 5% 100px 5%',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Grid background */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center',
          zIndex: 1,
          opacity: 0.5
        }}></div>
        <div style={{ position: 'absolute', width: '80vw', height: '80vw', background: 'radial-gradient(circle at top left, rgba(0,200,255,0.15) 0%, rgba(0,0,0,0) 50%)', top: 0, left: 0, zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', width: '80vw', height: '80vw', background: 'radial-gradient(circle at bottom right, rgba(255,200,0,0.15) 0%, rgba(0,0,0,0) 50%)', bottom: 0, right: 0, zIndex: 1, pointerEvents: 'none' }}></div>

        {/* Top gradient blend */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'clamp(50px, 15vw, 200px)', background: 'linear-gradient(to bottom, #000, transparent)', pointerEvents: 'none', zIndex: 5 }}></div>

        {/* Header */}
        <motion.div 
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
          style={{ zIndex: 10, textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, margin: 0, fontFamily: 'Impact, Anton, sans-serif', textTransform: 'uppercase', letterSpacing: '2px', color: '#fff', textShadow: '0 0 20px rgba(0,200,255,0.5)' }}>
            EXPERIENCE
          </h2>
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            style={{ fontSize: '1.1rem', color: '#888', marginTop: '10px' }}
          >
            Perjalanan karier dan pengalaman profesional saya.
          </motion.p>
        </motion.div>

        {/* Experience List */}
        <div style={{
          width: '100%',
          maxWidth: '1400px',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '20px',
          padding: '20px'
        }}>
          {experiencesData.map((exp, index) => {
            const colors = ['#00C4CC', '#FF9A00', '#8A2BE2', '#FF3366', '#99FF33', '#31A8FF'];
            const accentColor = colors[index % colors.length];
            const isLeft = index % 2 === 0;
            return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.6, ease: smoothEase }}
              whileHover={{ 
                scale: 1.03, 
                x: 12, 
                backgroundColor: 'rgba(255,255,255,0.06)',
                boxShadow: `0px 0px 30px ${accentColor}50`,
                borderLeftColor: accentColor,
                transition: { delay: 0, ...springHover }
              }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '15px 20px',
                borderRadius: '12px',
                borderLeft: `4px solid ${accentColor}`,
                background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                backdropFilter: 'blur(10px)',
                color: '#ddd',
                cursor: 'default'
              }}
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 + 0.3, type: 'spring', stiffness: 500 }}
                style={{ marginRight: '15px', color: accentColor, fontSize: '1.2rem', marginTop: '2px', textShadow: `0 0 10px ${accentColor}` }}
              >•</motion.div>
              <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                {exp.text} sebagai <span style={{ fontWeight: 'bold', color: accentColor }}>{exp.role}</span>
              </div>
            </motion.div>
          )})}
        </div>

      </section>

      {/* ==================== SECTION 4: Social Media Project ==================== */}
      <section 
        id="sosial-media-project"
        style={{ 
          width: '100%', 
          minHeight: '100vh', 
          backgroundColor: '#0a1622', 
          display: 'flex', 
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px 5%',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Top gradient blend */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'clamp(100px, 20vw, 300px)', background: 'linear-gradient(to bottom, #0a0a0a, transparent)', pointerEvents: 'none', zIndex: 5 }}></div>

        {/* Background Glows */}
        <div style={{ position: 'absolute', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(255,138,0,0.5) 0%, rgba(255,138,0,0.1) 40%, rgba(0,0,0,0) 70%)', top: '10%', left: '-10%', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(255,0,160,0.5) 0%, rgba(255,0,160,0.1) 40%, rgba(0,0,0,0) 70%)', top: '-10%', right: '-10%', zIndex: 1, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(0,255,209,0.4) 0%, rgba(0,255,209,0.1) 40%, rgba(0,0,0,0) 70%)', bottom: '-20%', right: '10%', zIndex: 1, pointerEvents: 'none' }}></div>

        {/* Layout Container */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '1400px',
          gap: '40px',
          zIndex: 10,
          alignItems: 'center'
        }}>
          
          {/* Left Column: Phone image — slide from left */}
          <motion.div 
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center' }}
          >
            <motion.img 
              src="/hp.png" 
              alt="Social Media Projects" 
              animate={{ 
                y: [0, -15, 0], 
                rotate: [0, -2, 2, 0] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6, 
                ease: "easeInOut" 
              }}
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                height: 'auto', 
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.6))' 
              }} 
            />
          </motion.div>

          {/* Right Column: Text — slide from right with stagger */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ flex: '1 1 500px', padding: '20px' }}
          >
            <motion.h2 
              variants={staggerChild}
              style={{ 
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', 
                fontWeight: 900, 
                margin: '0 0 20px 0', 
                fontFamily: 'Impact, Anton, sans-serif', 
                textTransform: 'uppercase', 
                lineHeight: '0.9',
                color: '#fff',
                textShadow: '0 0 20px rgba(255,255,255,0.2)'
              }}>
              SOCIAL MEDIA<br/>PROJECT
            </motion.h2>
            <motion.p 
              variants={staggerChild}
              style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#ccc', 
                margin: 0,
                maxWidth: '600px'
              }}>
              Social media bukan cuma soal upload konten, tapi gimana caranya bikin audience relate dan engaged. Di beberapa project yang saya kerjakan, saya terlibat mulai dari ide konten, produksi foto/video, editing, sampai ngatur strategi biar performa akun lebih maksimal. Fokus saya adalah membuat konten yang estetik, komunikatif, dan punya value buat <span className="typing-effect-9" style={{ color: '#00ffd1' }}>audience.</span>
            </motion.p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default App;
