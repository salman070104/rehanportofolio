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


function App() {
  // Animasi reveal saat scroll
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  return (
    <div className="landing-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowX: 'hidden', boxSizing: 'border-box' }}>
      
      {/* Gambar 1 */}
      <motion.section 
        className="section-image"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        style={{ width: '100%', maxWidth: '1920px', display: 'flex', justifyContent: 'center', position: 'relative' }}
      >
        <img src="/background/halaman1.png" alt="Halaman 1" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
        
        {/* Navbar Transparan dengan Teks Putih di Tengah Bawah Foto */}
        <div style={{ position: 'absolute', bottom: '5%', left: 0, right: 0, padding: '10px 2%', display: 'flex', justifyContent: 'center', gap: 'clamp(10px, 2vw, 30px)', zIndex: 50, flexWrap: 'wrap' }}>
          {['Sosial Media Project', 'Desain Grafis', 'Fotografer', 'Vidiografer'].map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
              whileHover={{ scale: 1.1, color: '#00C4CC' }}
              style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: 'clamp(0.6rem, 1.5vw, 0.9rem)', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '0 2px 10px rgba(0,0,0,0.8)', textAlign: 'center' }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        {/* Floating Icons di sekitar foto halaman 1 */}
        {/* Pr */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, -5, 5, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
          style={{ position: 'absolute', top: '15%', left: '15%', width: 'clamp(40px, 6vw, 70px)', height: 'clamp(40px, 6vw, 70px)', backgroundColor: '#000020', border: '2px solid #9999FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#9999FF', fontWeight: 'bold', fontSize: 'clamp(1rem, 2vw, 1.8rem)', boxShadow: '0 0 15px #9999FF', zIndex: 5, boxSizing: 'border-box' }}>Pr</motion.div>
        
        {/* Lr */}
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, 5, -5, 0] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} 
          style={{ position: 'absolute', top: '50%', left: '8%', width: 'clamp(40px, 6vw, 70px)', height: 'clamp(40px, 6vw, 70px)', backgroundColor: '#001a20', border: '2px solid #31A8FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#31A8FF', fontWeight: 'bold', fontSize: 'clamp(1rem, 2vw, 1.8rem)', boxShadow: '0 0 15px #31A8FF', zIndex: 5, boxSizing: 'border-box' }}>Lr</motion.div>

        {/* Ae */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }} 
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }} 
          style={{ position: 'absolute', top: '25%', right: '15%', width: 'clamp(40px, 6vw, 70px)', height: 'clamp(40px, 6vw, 70px)', backgroundColor: '#1a0033', border: '2px solid #D699FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#D699FF', fontWeight: 'bold', fontSize: 'clamp(1rem, 2vw, 1.8rem)', boxShadow: '0 0 15px #D699FF', zIndex: 5, boxSizing: 'border-box' }}>Ae</motion.div>

        {/* Alight Motion */}
        <motion.img src="/a.png"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 5, 0] }} 
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }} 
          style={{ position: 'absolute', bottom: '20%', left: '20%', width: 'clamp(40px, 6vw, 70px)', height: 'clamp(40px, 6vw, 70px)', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 0 15px #99FF33', zIndex: 5, boxSizing: 'border-box' }} />

        {/* Canva */}
        <motion.img src="/canva.png"
          animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }} 
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.8 }} 
          style={{ position: 'absolute', top: '60%', right: '10%', width: 'clamp(40px, 6vw, 70px)', height: 'clamp(40px, 6vw, 70px)', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 0 15px #00C4CC', zIndex: 5, boxSizing: 'border-box' }} />

        {/* CapCut */}
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, -5, 5, 0] }} 
          transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.2 }} 
          style={{ position: 'absolute', bottom: '25%', right: '25%', width: 'clamp(40px, 6vw, 70px)', height: 'clamp(40px, 6vw, 70px)', borderRadius: '12px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', boxShadow: '0 0 15px #ffffff', zIndex: 5, boxSizing: 'border-box' }}>
          <motion.img src="/Capcut logo png.png" style={{ width: '135%', height: '135%', objectFit: 'contain' }} />
        </motion.div>

        {/* Gradient shadow menyatu ke teks */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 'clamp(50px, 15vw, 200px)', background: 'linear-gradient(to bottom, transparent, #000)', pointerEvents: 'none' }}></div>
      </motion.section>

      {/* Marquee Separator (Menggunakan ScrollVelocity dari React Bits) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
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


      {/* Gambar 2 -> Diganti menjadi Layout About Me persis seperti referensi */}
      <motion.section 
        className="section-aboutme"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        style={{ 
          width: '100%', 
          maxWidth: '1920px', 
          minHeight: '100vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#151718', // Dark background
          overflow: 'hidden',
          fontFamily: 'sans-serif',
          color: '#fff',
          padding: '100px 5% 20px 5%',
          boxSizing: 'border-box'
        }}
      >
        {/* Latar Belakang Grid & Glow */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          backgroundPosition: 'center center',
          zIndex: 1,
          opacity: 0.8
        }}></div>
        {/* Glow Biru Atas */}
        <div style={{ position: 'absolute', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(100,200,255,0.15) 0%, rgba(0,0,0,0) 70%)', top: '-30%', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}></div>

        {/* Gradient shadow dari teks atas */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'clamp(50px, 15vw, 200px)', background: 'linear-gradient(to bottom, #000, transparent)', pointerEvents: 'none', zIndex: 5 }}></div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', maxWidth: '1400px', gap: '50px', paddingBottom: '100px', boxSizing: 'border-box'
          }}>
          {/* Kolom Kiri: Teks */}
          <div style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Header Nama */}
            <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, lineHeight: '0.9', margin: 0, textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Impact, Anton, sans-serif' }}>
                RAYHAN <br /> FIQRI HAIKAL
              </h1>
              <h3 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: 700, margin: 0, fontStyle: 'italic', color: '#e0e0e0' }}>
                SOCIAL MEDIA CREATIVE
              </h3>
            </motion.div>

            {/* About Me */}
            <motion.div variants={fadeInUp}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, margin: '0 0 10px 0', fontFamily: 'Impact, Anton, sans-serif', textTransform: 'uppercase' }}>ABOUT ME</h2>
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

            {/* Education */}
            <motion.div variants={fadeInUp}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, margin: '0 0 5px 0', fontFamily: 'Impact, Anton, sans-serif', textTransform: 'uppercase' }}>EDUCATION</h2>
              <p style={{ fontSize: '1rem', color: '#eee', margin: '0 0 5px 0' }}>S1 - Ilmu Komunikasi Universitas Ahmad Dahlan</p>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#fff', margin: 0 }}>GPA: 3.89/ 4.00</p>
            </motion.div>

            {/* Dua Kolom Bawah: Software & Contact */}
            <motion.div variants={fadeInUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
              {/* Software */}
              <div style={{ flex: '1 1 200px' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, margin: '0 0 15px 0', fontFamily: 'Impact, Anton, sans-serif', textTransform: 'uppercase' }}>SOFTWARE</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <motion.div whileHover={{ scale: 1.2, rotate: -5, boxShadow: '0 0 15px #9999FF', zIndex: 10 }} transition={{ type: 'spring', stiffness: 300 }} style={{ width: '55px', height: '55px', backgroundColor: '#000020', border: '2px solid #9999FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#9999FF', fontWeight: 'bold', fontSize: '1.4rem', cursor: 'pointer', boxSizing: 'border-box' }}>Pr</motion.div>
                    <motion.div whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 15px #31A8FF', zIndex: 10 }} transition={{ type: 'spring', stiffness: 300 }} style={{ width: '55px', height: '55px', backgroundColor: '#001a20', border: '2px solid #31A8FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#31A8FF', fontWeight: 'bold', fontSize: '1.4rem', cursor: 'pointer', boxSizing: 'border-box' }}>Lr</motion.div>
                    <motion.img src="/a.png" alt="Alight Motion" whileHover={{ scale: 1.2, rotate: -5, boxShadow: '0 0 15px #99FF33', zIndex: 10 }} transition={{ type: 'spring', stiffness: 300 }} style={{ width: '55px', height: '55px', borderRadius: '12px', cursor: 'pointer', objectFit: 'cover', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                    <motion.div whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 15px #D699FF', zIndex: 10 }} transition={{ type: 'spring', stiffness: 300 }} style={{ width: '55px', height: '55px', backgroundColor: '#1a0033', border: '2px solid #D699FF', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#D699FF', fontWeight: 'bold', fontSize: '1.4rem', cursor: 'pointer', boxSizing: 'border-box' }}>Ae</motion.div>
                    <motion.img src="/canva.png" alt="Canva" whileHover={{ scale: 1.2, rotate: -5, boxShadow: '0 0 15px #00C4CC', zIndex: 10 }} transition={{ type: 'spring', stiffness: 300 }} style={{ width: '55px', height: '55px', borderRadius: '12px', cursor: 'pointer', objectFit: 'cover', boxSizing: 'border-box' }} />
                    <motion.div whileHover={{ scale: 1.2, rotate: 5, boxShadow: '0 0 15px #ffffff', zIndex: 10 }} transition={{ type: 'spring', stiffness: 300 }} style={{ width: '55px', height: '55px', borderRadius: '12px', cursor: 'pointer', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', boxSizing: 'border-box' }}>
                      <motion.img src="/Capcut logo png.png" alt="CapCut" style={{ width: '135%', height: '135%', objectFit: 'contain' }} />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div style={{ flex: '1 1 250px' }}>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, margin: '0 0 15px 0', fontFamily: 'Impact, Anton, sans-serif', textTransform: 'uppercase' }}>CONTACT</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <motion.a 
                    whileHover={{ x: 5, color: '#EA4335' }}
                    href="mailto:rayfqihaikal0404@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', cursor: 'pointer' }}
                  >
                    <SiGmail size={24} color="#EA4335" /> <span style={{ fontSize: '0.95rem' }}>rayfqihaikal0404@gmail.com</span>
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ x: 5, color: '#25D366' }}
                    href="https://wa.me/6285291503532" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', cursor: 'pointer' }}
                  >
                    <SiWhatsapp size={24} color="#25D366" /> <span style={{ fontSize: '0.95rem' }}>+6285291503532</span>
                  </motion.a>

                  <motion.a 
                    whileHover={{ x: 5, color: '#E1306C' }}
                    href="https://instagram.com/iitsrey04" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#fff', cursor: 'pointer' }}
                  >
                    <SiInstagram size={24} color="#E1306C" /> <span style={{ fontSize: '0.95rem' }}>@iitsrey04</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Kolom Kanan: Foto */}
          <motion.div variants={fadeInUp} style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', position: 'relative', minHeight: '500px' }}>
             {/* Lingkaran Glow Biru di belakang foto */}
             <div style={{ position: 'absolute', width: '80%', paddingBottom: '80%', background: 'radial-gradient(circle, rgba(0,200,255,1) 0%, rgba(0,200,255,0.4) 50%, rgba(0,0,0,0) 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, borderRadius: '50%' }}></div>
             <img src="/lemen.png" alt="Rayhan Fiqri Haikal" style={{ 
               position: 'relative', 
               zIndex: 2, 
               width: '100%', 
               maxWidth: '500px', 
               height: 'auto', 
               filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
               WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
               maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
             }} />
          </motion.div>

        </motion.div>

        {/* Gradient shadow menyatu ke bagian 3 */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 'clamp(50px, 15vw, 200px)', background: 'linear-gradient(to bottom, transparent, #000)', pointerEvents: 'none', zIndex: 5 }}></div>
      </motion.section>

      {/* Jeda hitam kecil agar transisinya benar-benar mulus */}
      <div style={{ width: '100%', height: '20px', backgroundColor: '#000' }}></div>

      {/* Section 3: Portfolio / Selected Works */}
      <motion.section 
        className="section-portfolio"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
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
        {/* Latar Belakang Garis Grid & Cahaya Warna-warni (Mirip Gambar Asli) */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center',
          zIndex: 1,
          opacity: 0.5
        }}></div>
        {/* Glow Biru Kiri Atas */}
        <div style={{ position: 'absolute', width: '80vw', height: '80vw', background: 'radial-gradient(circle at top left, rgba(0,200,255,0.15) 0%, rgba(0,0,0,0) 50%)', top: 0, left: 0, zIndex: 1, pointerEvents: 'none' }}></div>
        {/* Glow Kuning Kanan Bawah */}
        <div style={{ position: 'absolute', width: '80vw', height: '80vw', background: 'radial-gradient(circle at bottom right, rgba(255,200,0,0.15) 0%, rgba(0,0,0,0) 50%)', bottom: 0, right: 0, zIndex: 1, pointerEvents: 'none' }}></div>

        {/* Gradient shadow dari hitam (Section 2) ke Section 3 */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'clamp(50px, 15vw, 200px)', background: 'linear-gradient(to bottom, #000, transparent)', pointerEvents: 'none', zIndex: 5 }}></div>

        {/* Header Section */}
        <div style={{ zIndex: 10, textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, margin: 0, fontFamily: 'Impact, Anton, sans-serif', textTransform: 'uppercase', letterSpacing: '2px', color: '#fff', textShadow: '0 0 20px rgba(0,200,255,0.5)' }}>
            EXPERIENCE
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#888', marginTop: '10px' }}>
            Perjalanan karier dan pengalaman profesional saya.
          </p>
        </div>

        {/* Experience List Layout */}
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
            return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ 
                scale: 1.02, 
                x: 10, 
                backgroundColor: 'rgba(255,255,255,0.05)',
                boxShadow: `0px 0px 20px ${accentColor}40`,
                transition: { delay: 0, type: 'spring', stiffness: 300 }
              }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '15px 20px',
                borderRadius: '12px',
                borderLeft: `4px solid ${accentColor}`,
                background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                backdropFilter: 'blur(10px)',
                color: '#ddd'
              }}
            >
              <div style={{ marginRight: '15px', color: accentColor, fontSize: '1.2rem', marginTop: '2px', textShadow: `0 0 10px ${accentColor}` }}>•</div>
              <div style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                {exp.text} sebagai <span style={{ fontWeight: 'bold', color: accentColor }}>{exp.role}</span>
              </div>
            </motion.div>
          )})}
        </div>

      </motion.section>

      {/* Bagian Keempat: Social Media Project */}
      <motion.section 
        id="sosial-media-project"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
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
        {/* Gradient shadow dari hitam (Section 3) ke Section 4 untuk blending */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'clamp(100px, 20vw, 300px)', background: 'linear-gradient(to bottom, #0a0a0a, transparent)', pointerEvents: 'none', zIndex: 5 }}></div>

        {/* Background Glows (Lebih Terang) */}
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
          
          {/* Kolom Kiri: Gambar HP dengan animasi goyang */}
          <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center' }}>
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
          </div>

          {/* Kolom Kanan: Teks */}
          <div style={{ flex: '1 1 500px', padding: '20px' }}>
            <h2 style={{ 
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
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: '#ccc', 
              margin: 0,
              maxWidth: '600px'
            }}>
              Social media bukan cuma soal upload konten, tapi gimana caranya bikin audience relate dan engaged. Di beberapa project yang saya kerjakan, saya terlibat mulai dari ide konten, produksi foto/video, editing, sampai ngatur strategi biar performa akun lebih maksimal. Fokus saya adalah membuat konten yang estetik, komunikatif, dan punya value buat <span className="typing-effect-9" style={{ color: '#00ffd1' }}>audience.</span>
            </p>
          </div>

        </div>
      </motion.section>

    </div>
  );
}

export default App;
