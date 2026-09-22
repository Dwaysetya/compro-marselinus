import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Clock3,
  Download,
  FileCheck2,
  Landmark,
  Menu,
  MessageCircle,
  Scale,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";
import { company, insights, practiceAreas, team } from "./data";
import { createCompanyProfile } from "./pdf";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

const heroPortrait = "/images/hero-lawyer.jpg";

const advantages = [
  { icon: Clock3, title: "Respons Cepat", text: "Respons awal maksimal 30 menit dan pembaruan perkara secara berkala." },
  { icon: ShieldCheck, title: "Privasi Terjamin", text: "Informasi dan dokumen Anda dilindungi dengan standar kerahasiaan tinggi." },
  { icon: FileCheck2, title: "Biaya Transparan", text: "Ruang lingkup dan estimasi biaya disepakati sejak awal tanpa biaya tersembunyi." },
  { icon: Scale, title: "Strategi Terukur", text: "Setiap langkah disusun berdasarkan analisis hukum dan tujuan terbaik klien." },
];

const serviceIcons = [BriefcaseBusiness, Scale, UsersRound, Landmark, FileCheck2, ShieldCheck, BriefcaseBusiness, UsersRound];

const process = [
  ["Konsultasi Awal", "Kami mendengarkan perkara, memahami konteks, dan memetakan kebutuhan hukum Anda."],
  ["Analisis Mendalam", "Tim memeriksa fakta, dokumen, risiko, serta dasar hukum yang relevan."],
  ["Strategi & Penawaran", "Anda menerima opsi strategi, ruang lingkup kerja, timeline, dan biaya yang jelas."],
  ["Pendampingan", "Kami menjalankan strategi dan mewakili kepentingan Anda hingga perkara selesai."],
];

const faqs = [
  ["Apakah konsultasi awal dikenakan biaya?", "Konsultasi singkat pertama tidak dikenakan biaya. Setelah memahami kebutuhan Anda, kami akan menjelaskan ruang lingkup dan estimasi biaya secara transparan."],
  ["Apakah saya harus selalu hadir di pengadilan?", "Tidak selalu. Dengan surat kuasa yang tepat, pengacara dapat mewakili Anda pada sebagian besar tahapan proses hukum."],
  ["Bagaimana kerahasiaan perkara saya dijaga?", "Seluruh informasi, percakapan, dan dokumen klien diperlakukan secara rahasia sesuai kode etik advokat dan prosedur internal firma."],
  ["Berapa lama proses penanganan perkara?", "Durasi bergantung pada jenis dan kompleksitas perkara. Kami memberikan estimasi timeline sejak awal dan pembaruan rutin selama proses berlangsung."],
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#beranda" className={`logo ${inverse ? "inverse" : ""}`}>
      <span>AP</span>
      <div><strong>ARUNA & PARTNERS</strong><small>ATTORNEYS AT LAW</small></div>
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pdfState, setPdfState] = useState<"idle" | "loading" | "error">("idle");
  const [faqOpen, setFaqOpen] = useState(0);

  async function handlePdf(preview = false) {
    setPdfState("loading");
    try {
      const pdf = await createCompanyProfile();
      if (preview) window.open(pdf.output("bloburl").toString(), "_blank", "noopener,noreferrer");
      else pdf.save("aruna-partners-company-profile.pdf");
      setPdfState("idle");
    } catch {
      setPdfState("error");
    }
  }

  return (
    <main>
      <div className="topbar">
        <span>Konsultasi hukum profesional di Jakarta</span>
        <span>{company.phone} · {company.email}</span>
      </div>
      <header>
        <Logo />
        <nav className={menuOpen ? "open" : ""}>
          {[
            ["Beranda", "#beranda"], ["Tentang", "#tentang"], ["Jasa Hukum", "#layanan"],
            ["Keunggulan", "#keunggulan"], ["Proses", "#proses"], ["Artikel", "#artikel"],
          ].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a href="#kontak" className="nav-cta">Konsultasi Sekarang <ArrowRight size={15} /></a>
        </nav>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="beranda" className="hero-modern">
        <div className="hero-content">
          <motion.div {...reveal} className="pill"><span /> LAW FIRM PROFESIONAL JAKARTA</motion.div>
          <motion.h1 {...reveal} transition={{ ...reveal.transition, delay: 0.06 }}>
            Solusi hukum yang <em>jelas.</em><br />Strategi yang <em>tepat.</em>
          </motion.h1>
          <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}>
            Kami mendampingi individu dan perusahaan menghadapi perkara hukum dengan pendekatan personal, transparan, dan berorientasi pada hasil.
          </motion.p>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.18 }} className="hero-buttons">
            <a href="#kontak" className="primary-button"><MessageCircle size={18} /> Konsultasi Gratis</a>
            <a href="#layanan" className="secondary-button">Lihat Jasa Hukum <ArrowRight size={17} /></a>
          </motion.div>
          <motion.div {...reveal} className="hero-proof">
            <div className="avatars">{team.map((person) => <img key={person.name} src={person.image} alt="" />)}<span>+9</span></div>
            <p><strong>Dipercaya 120+ klien</strong><br />Perusahaan dan individu</p>
          </motion.div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-bg"><span className="shape shape-one" /><span className="shape shape-two" /></div>
          <img src={heroPortrait} alt="Lawyer profesional Aruna & Partners" />
          <div className="floating-card card-rating"><strong>15+</strong><span>Tahun pengalaman</span></div>
          <div className="floating-card card-success"><span className="check"><Check size={14} /></span><div><strong>98% Success Rate</strong><small>Kasus terselesaikan</small></div></div>
        </motion.div>
      </section>

      <section className="trust-strip">
        <p>Komitmen kami untuk setiap klien</p>
        {["Profesional", "Transparan", "Terpercaya", "Kerahasiaan"].map((item) => <span key={item}><Check size={14} /> {item}</span>)}
      </section>

      <section id="tentang" className="about-modern section-modern">
        <motion.div {...reveal} className="about-image">
          <img src="/images/legal-documents.jpg" alt="Dokumen hukum di atas meja kerja" />
          <div><strong>250+</strong><span>Perkara telah kami tangani</span></div>
        </motion.div>
        <motion.div {...reveal} className="about-content">
          <p className="overline">TENTANG ARUNA & PARTNERS</p>
          <h2>Partner hukum untuk keputusan yang <em>menentukan.</em></h2>
          <p className="lead">Aruna & Partners adalah firma hukum modern yang memadukan keahlian hukum mendalam dengan pemahaman bisnis dan pendekatan yang manusiawi.</p>
          <p>Kami percaya setiap perkara membutuhkan perhatian yang personal. Karena itu, partner kami terlibat langsung sejak konsultasi pertama hingga penyelesaian.</p>
          <div className="signature"><span>AA</span><div><strong>Adrian Aruna</strong><small>Managing Partner</small></div></div>
        </motion.div>
      </section>

      <section id="keunggulan" className="advantage-section section-modern">
        <motion.div {...reveal} className="section-intro centered">
          <p className="overline">MENGAPA MEMILIH KAMI</p>
          <h2>Pendampingan hukum yang<br /><em>memberi ketenangan.</em></h2>
          <p>Standar layanan modern untuk memastikan Anda selalu memahami posisi dan langkah selanjutnya.</p>
        </motion.div>
        <div className="advantage-grid">
          {advantages.map((item) => (
            <motion.article {...reveal} key={item.title}>
              <span className="icon-box"><item.icon /></span><h3>{item.title}</h3><p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="layanan" className="services section-modern">
        <motion.div {...reveal} className="section-intro split">
          <div><p className="overline">JASA HUKUM KAMI</p><h2>Keahlian menyeluruh untuk <em>setiap kebutuhan.</em></h2></div>
          <p>Solusi strategis untuk perkara personal, bisnis, maupun institusi—ditangani langsung oleh advokat berpengalaman.</p>
        </motion.div>
        <div className="service-grid">
          {practiceAreas.map(([number, title], i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.a {...reveal} href="#kontak" key={title}>
                <span className="service-number">{number}</span><Icon /><h3>{title}</h3>
                <p>Konsultasi, analisis, strategi, dan pendampingan menyeluruh sesuai kebutuhan perkara Anda.</p>
                <span className="service-link">Pelajari lebih lanjut <ArrowRight size={15} /></span>
              </motion.a>
            );
          })}
        </div>
      </section>

      <section className="results">
        <div className="results-copy">
          <motion.p {...reveal} className="overline light">REKAM JEJAK KAMI</motion.p>
          <motion.h2 {...reveal}>Pengalaman yang memberi Anda <em>keunggulan.</em></motion.h2>
          <motion.p {...reveal}>Kami mengukur keberhasilan bukan hanya dari perkara yang selesai, tetapi dari rasa aman dan kepastian yang diterima klien.</motion.p>
          <button onClick={() => handlePdf()}><Download size={17} />{pdfState === "loading" ? "Menyiapkan Company Profile..." : "Download Company Profile"}</button>
          {pdfState === "error" && <small>Gagal membuat PDF. Silakan coba kembali.</small>}
        </div>
        <div className="result-numbers">
          {[["15+", "Tahun pengalaman"], ["250+", "Perkara ditangani"], ["120+", "Klien korporasi"], ["98%", "Kepuasan klien"]].map(([n, l]) => <motion.div {...reveal} key={l}><strong>{n}</strong><span>{l}</span></motion.div>)}
        </div>
      </section>

      <section id="proses" className="process-section section-modern">
        <motion.div {...reveal} className="section-intro centered">
          <p className="overline">CARA KAMI BEKERJA</p><h2>Proses yang sederhana.<br /><em>Arah yang jelas.</em></h2>
        </motion.div>
        <div className="process-line">
          {process.map(([title, text], i) => (
            <motion.article {...reveal} key={title}>
              <div className="process-number">0{i + 1}</div><h3>{title}</h3><p>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="testimonial">
        <motion.div {...reveal}>
          <span className="quote">“</span>
          <blockquote>Tim Aruna & Partners tidak hanya memahami hukum, tetapi juga memahami kekhawatiran kami. Setiap langkah dijelaskan dengan jernih dan ditangani secara profesional.</blockquote>
          <p><strong>Direktur Utama</strong><br />Perusahaan Teknologi Nasional</p>
        </motion.div>
      </section>

      <section id="artikel" className="articles section-modern">
        <motion.div {...reveal} className="section-intro split">
          <div><p className="overline">WAWASAN HUKUM</p><h2>Perspektif untuk dunia yang <em>terus berubah.</em></h2></div>
          <a href="#kontak">Lihat semua artikel <ArrowRight size={16} /></a>
        </motion.div>
        <div className="article-grid">
          {insights.map((article, i) => (
            <motion.a {...reveal} href="#kontak" key={article.title}>
              <div className={`article-visual visual-${i + 1}`}><span>{article.category}</span></div>
              <small>{article.date}</small><h3>{article.title}</h3><span className="read-link">Baca artikel <ArrowRight size={15} /></span>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="faq section-modern">
        <motion.div {...reveal}><p className="overline">PERTANYAAN UMUM</p><h2>Informasi yang perlu <em>Anda ketahui.</em></h2><p>Belum menemukan jawaban? Hubungi tim kami untuk konsultasi awal.</p><a href="#kontak">Hubungi Kami <ArrowRight size={15} /></a></motion.div>
        <div className="faq-list">
          {faqs.map(([question, answer], i) => (
            <motion.div {...reveal} key={question} className={faqOpen === i ? "faq-open" : ""}>
              <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}><span>{question}</span><ChevronDown /></button>
              <p>{answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="kontak" className="contact-modern">
        <div>
          <p className="overline light">MULAI KONSULTASI</p>
          <h2>Masalah hukum tidak harus Anda hadapi <em>sendirian.</em></h2>
          <p>Ceritakan kebutuhan Anda. Tim kami siap membantu menentukan langkah pertama yang paling tepat.</p>
        </div>
        <div className="contact-card">
          <MessageCircle />
          <h3>Konsultasi awal gratis</h3><p>Hubungi kami melalui WhatsApp untuk respons lebih cepat.</p>
          <a href={`https://wa.me/${company.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">Chat via WhatsApp <ArrowRight size={16} /></a>
          <span>atau email ke <strong>{company.email}</strong></span>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div><Logo inverse /><p>Firma hukum modern untuk individu, perusahaan, dan institusi yang membutuhkan kepastian.</p></div>
          <div><strong>Navigasi</strong><a href="#tentang">Tentang Kami</a><a href="#layanan">Jasa Hukum</a><a href="#proses">Proses</a><a href="#artikel">Artikel</a></div>
          <div><strong>Hubungi Kami</strong><p>{company.address}</p><p>{company.phone}<br />{company.email}</p></div>
          <div><strong>Company Profile</strong><p>Kenali firma, tim, dan pengalaman kami lebih lanjut.</p><button onClick={() => handlePdf(true)}>Lihat Profile <ArrowRight size={14} /></button></div>
        </div>
        <div className="footer-bottom"><span>© 2025 {company.name}. All rights reserved.</span><a href="#beranda">Kembali ke atas ↑</a></div>
      </footer>
    </main>
  );
}
