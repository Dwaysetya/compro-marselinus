import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Download,
  FileCheck2,
  Landmark,
  Menu,
  MessageCircle,
  Scale,
  ShieldCheck,
  UsersRound,
  X,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Music,
  Flag,
  Lightbulb,
  HeartHandshake,
  Quote
} from "lucide-react";

// Social Media Brand Icons
const IconWhatsapp = ({ size = 18, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.031 21.365a9.3 9.3 0 0 1-4.73-1.284l-.338-.2-3.518.922.94-3.428-.22-.35A9.27 9.27 0 0 1 2.7 12.012c0-5.138 4.183-9.32 9.33-9.32 2.49 0 4.832.97 6.593 2.732a9.277 9.277 0 0 1 2.72 6.587c0 5.139-4.183 9.322-9.33 9.322l.018.032h.001zm-4.996-2.181a7.485 7.485 0 0 0 5.013 1.91h.003c4.14 0 7.51-3.37 7.512-7.512A7.465 7.465 0 0 0 17.41 6.273a7.464 7.464 0 0 0-5.38-2.181c-4.14 0-7.51 3.37-7.512 7.511a7.47 7.47 0 0 0 1.139 3.978l.613.974-1.127 4.116 4.213-1.106.94.558c.002.002.001.002.001.002h.001v.058zM16.14 14c-.227-.114-1.343-.663-1.55-.74-.21-.076-.36-.114-.51.114-.15.228-.59.74-.72.89-.13.153-.27.172-.49.058-.23-.114-.96-.353-1.83-1.132-.67-.6-1.13-1.34-1.26-1.57-.13-.228-.01-.352.1-.466.1-.1.22-.228.34-.342.11-.114.15-.228.23-.342.08-.114.04-.228 0-.342-.04-.114-.51-1.23-.7-1.686-.18-.445-.37-.384-.51-.392h-.43c-.15 0-.39.057-.59.285-.2.228-.76.74-.76 1.808 0 1.066.78 2.096.89 2.246.1.153 1.54 2.348 3.72 3.29.52.226 1.05.394 1.5.503.52.128 1 .11 1.38.067.42-.047 1.34-.548 1.53-1.077.19-.53.19-.982.13-1.077-.05-.096-.21-.153-.43-.267z"/>
  </svg>
);
const IconInstagram = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const IconFacebook = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const IconTiktok = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.61-.6 3.16-1.7 4.29-1.11 1.13-2.65 1.74-4.22 1.74-1.57 0-3.1-.61-4.22-1.74-1.1-1.13-1.7-2.68-1.7-4.29 0-1.61.6-3.16 1.7-4.29 1.12-1.13 2.65-1.74 4.22-1.74h.01v4.06c-.5-.03-.99.12-1.41.4-.41.28-.73.68-.89 1.15-.16.46-.18.97-.04 1.44.13.48.42.9.82 1.18.41.28.91.43 1.42.42.5 0 1-.16 1.4-.44.41-.28.71-.69.87-1.17.15-.47.16-.97.02-1.44V.02z" />
  </svg>
);

const IconYoutube = ({ size = 20, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
import { company, practiceAreas, services, teamGroups, experience, faqs, visiMisiNilai, logoImage, directorBio } from "./data";
import { createCompanyProfile } from "./pdf";
import GridBackground from "./components/GridBackground";

const reveal = {
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const serviceIcons = [BriefcaseBusiness, Scale, UsersRound, Landmark, FileCheck2, ShieldCheck];
const misiIcons = [ShieldCheck, Flag, Scale, BriefcaseBusiness, Lightbulb, HeartHandshake];

// React Bits Style - Aurora Background
const AuroraBackground = () => (
  <div className="aurora-bg">
    <motion.div
      className="aurora-blob aurora-blob-1"
      animate={{
        x: [0, 50, -20, 0],
        y: [0, -30, 40, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="aurora-blob aurora-blob-2"
      animate={{
        x: [0, -40, 30, 0],
        y: [0, 50, -20, 0],
        scale: [1, 1.2, 0.8, 1],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);


function Logo({ inverse = false }: { inverse?: boolean }) {
  const parts = company.name.split("&");
  return (
    <a href="#beranda" className={`logo ${inverse ? "inverse" : ""}`}>
      <img src={logoImage} alt={company.name} style={{ height: "45px", objectFit: "contain" }} />
      <div style={{ marginLeft: "8px" }}>
        <strong>
          {parts.length > 1 ? (
            <>
              {parts[0]}<span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, margin: "0 2px" }}>&</span>{parts[1]}
            </>
          ) : (
            company.name
          )}
        </strong>
        <small>{company.tagline}</small>
      </div>
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentGalleryIdx, setCurrentGalleryIdx] = useState(0);
  const [pdfState, setPdfState] = useState<"idle" | "loading" | "error">("idle");
  const [faqOpen, setFaqOpen] = useState(0);

  const galleryImages = [
    "/images/giat1.jpg",
    "/images/giat2.png",
    "/images/giat3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGalleryIdx((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  async function handlePdf(preview = false) {
    setPdfState("loading");
    try {
      const pdf = await createCompanyProfile();
      if (preview) window.open(pdf.output("bloburl").toString(), "_blank", "noopener,noreferrer");
      else pdf.save("marselinus-edwin-company-profile.pdf");
      setPdfState("idle");
    } catch {
      setPdfState("error");
    }
  }

  return (
    <main>
      <GridBackground />
      <div className="topbar">
        <span>{company.tagline}</span>
        <span style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <span style={{ display: "flex", gap: "6px", alignItems: "center" }}><Phone size={12}/> {company.phone}</span>
          <span style={{ display: "flex", gap: "6px", alignItems: "center" }}><Mail size={12}/> {company.email}</span>
        </span>
      </div>
      <header>
        <Logo />
        <nav className={menuOpen ? "open" : ""}>
          {[
            ["Beranda", "#beranda"], ["Tentang Kami", "#tentang"], ["Nilai Kami", "#nilai"], ["Jasa Hukum", "#layanan"],
            ["Tim Kami", "#tim"], ["Portofolio", "#portofolio"]
          ].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a href="#kontak" className="nav-cta">Konsultasi Sekarang <ArrowRight size={15} /></a>
        </nav>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="beranda" className="hero-modern">
        <div className="hero-content">
          <motion.div {...reveal} className="pill"><span /> HUKUM PROFESIONAL JAKARTA</motion.div>
          <motion.h1 {...reveal} transition={{ ...reveal.transition, delay: 0.06 }}>
            Solusi hukum yang <em>strategis</em> dan berintegritas.
          </motion.h1>
          <motion.p {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}>
            {company.description}
          </motion.p>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.18 }} className="hero-buttons">
            <a href="#kontak" className="primary-button"><MessageCircle size={18} /> Konsultasi Gratis</a>
            <a href="#layanan" className="secondary-button">Lihat Jasa Hukum <ArrowRight size={17} /></a>
          </motion.div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-bg"><span className="shape shape-one" /><span className="shape shape-two" /></div>
          <img src="/images/marselinus.jpeg" alt="Marselinus Edwin Hardhian" onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop"} />
        </motion.div>
      </section>

      <section id="tentang" className="about-modern section-modern">
        <motion.div {...reveal} className="about-image">
          <img src="/images/giat.jpg" alt="Dokumen hukum" onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"} />
          <div><strong>100+</strong><span>Perkara telah kami tangani</span></div>
        </motion.div>
        <motion.div {...reveal} className="about-content">
          <p className="overline">TENTANG KAMI</p>
          <h2>Berdiri teguh pada hukum, bertindak <em>profesional.</em></h2>
          <p className="lead">{company.description}</p>
          <p>Dengan dukungan Direktur, Wakil Direktur, Senior Partners, Partners, dan Support Tim, kami membangun pendekatan hukum yang mengutamakan ketelitian dalam memahami persoalan, keberanian dalam menghadapi tantangan, serta ketegasan dalam memperjuangkan kepentingan hukum klien.</p>
          <p>Kami percaya bahwa setiap persoalan hukum membutuhkan lebih dari sekadar pemahaman terhadap peraturan. Diperlukan strategi, keberanian, integritas, dan ketepatan dalam mengambil langkah hukum.</p>
        </motion.div>
      </section>

      {/* Kepemimpinan & Advokasi Publik */}
      <section id="kepemimpinan" className="advocacy-section section-modern">
        <div className="advocacy-container">
          <motion.div {...reveal} className="advocacy-image">
            <div className="portrait-wrapper">
              <img src="/images/ustad.jpeg" alt={directorBio.name} />
              <div className="portrait-badge">
                <ShieldCheck size={20} />
                <span>ARUKKI</span>
              </div>
            </div>
          </motion.div>
          <motion.div {...reveal} className="advocacy-content">
            <p className="overline">KEPEMIMPINAN & ADVOKASI PUBLIK</p>
            <h2>{directorBio.name}</h2>
            <h3 className="advocacy-subtitle">{directorBio.title}</h3>
            <div className="advocacy-text">
              {directorBio.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="nilai" className="advantage-section section-modern">
        <div className="bg-text-marquee">
          <div className="bg-text-track">
            JUSTICE • INTEGRITY • COURAGE • PROFESSIONALISM • LAW • LITIGATION • JUSTICE • INTEGRITY • COURAGE • PROFESSIONALISM • LAW • LITIGATION • 
          </div>
        </div>

        <motion.div {...reveal} className="section-intro centered" style={{ marginBottom: "20px" }}>
          <p className="overline">VISI, MISI & NILAI FIRMA</p>
          <h2>Keadilan, Integritas, dan<br /><em>Keberanian.</em></h2>
        </motion.div>
        
        <motion.div {...reveal} className="vision-showcase">
          <Quote className="vision-bg-icon" />
          <p className="vision-text">"{visiMisiNilai.visi}"</p>
          <span className="vision-label">— Visi Marselinus Edwin & Co. Law Office</span>
        </motion.div>
        
        <div className="advantage-grid misi-grid">
          {visiMisiNilai.misi.map((item, i) => {
             const Icon = misiIcons[i] || Target;
             return (
               <motion.article {...reveal} key={i}>
                 <span className="icon-box"><Icon /></span>
                 <h3>{item.title}</h3>
                 <p>{item.desc}</p>
               </motion.article>
             );
          })}
        </div>

        <div className="core-values-wrapper">
          <motion.div {...reveal} className="section-intro centered" style={{ marginBottom: "40px" }}>
            <p className="overline">PRINSIP KERJA KAMI</p>
            <h2>Nilai Utama <em>Firma.</em></h2>
          </motion.div>
          <div className="core-values-grid">
            {visiMisiNilai.nilai.map((n, i) => (
              <motion.div {...reveal} transition={{ delay: i * 0.1 }} className="value-card" key={n.title}>
                <div className="value-number">0{i + 1}</div>
                <div className="value-content">
                  <h4>{n.title}</h4>
                  <p>{n.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="layanan" className="services section-modern">
        <motion.div {...reveal} className="section-intro split">
          <div><p className="overline">PRAKTIK & LAYANAN</p><h2>Keahlian menyeluruh untuk <em>setiap kebutuhan.</em></h2></div>
          <p>Layanan hukum meliputi {services.slice(0,4).join(", ")} dan berbagai keahlian lainnya.</p>
        </motion.div>
        <div className="service-grid nested-services">
          {practiceAreas.map((area, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <motion.div {...reveal} className="service-card" key={area.category}>
                <span className="service-number">0{i+1}</span>
                <Icon />
                <h3>{area.category}</h3>
                <ul>
                  {area.items.map(item => <li key={item}><Check size={14}/> {item}</li>)}
                </ul>
              </motion.div>
            );
          })}
        </div>
        
        <div className="services-marquee-container">
          <div className="services-marquee">
            {[...services, ...services].map((service, i) => (
              <div key={i} className="marquee-item">
                <ShieldCheck size={14} /> <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Gallery Carousel */}
      <section id="galeri" className="gallery-section">
        <div className="gallery-carousel">
          {galleryImages.map((src, idx) => (
            <div 
              key={idx} 
              className={`gallery-slide ${idx === currentGalleryIdx ? 'active' : ''}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
          <div className="carousel-overlay"></div>
          <motion.div {...reveal} className="gallery-content">
            <p className="overline" style={{ color: "var(--accent)" }}>GALERI FIRMA</p>
            <h2>Atmosfer <em>Profesionalisme.</em></h2>
            <p>Dedikasi dan integritas kami tercermin dalam setiap aspek pelayanan hukum yang kami berikan.</p>
            <div className="carousel-indicators">
              {galleryImages.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`indicator ${idx === currentGalleryIdx ? 'active' : ''}`}
                  onClick={() => setCurrentGalleryIdx(idx)}
                  aria-label={`View slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="tim" className="team-section section-modern">
         <AuroraBackground />
         <motion.div {...reveal} className="section-intro centered">
          <p className="overline">PROFIL TIM</p>
          <h2>Tim advokat yang siap<br /><em>berdiri di pihak Anda.</em></h2>
        </motion.div>
        
        <div className="org-chart">
          {(() => {
            const leadership = teamGroups.find(g => g.category === "Leadership")?.members || [];
            const direktur = leadership.find(m => m.role === "Direktur");
            const wadirs = leadership.filter(m => m.role !== "Direktur");
            const seniorPartners = teamGroups.find(g => g.category === "Senior Partners")?.members || [];
            const partners = teamGroups.find(g => g.category === "Partners")?.members || [];
            const supportTim = teamGroups.find(g => g.category === "Support Tim")?.members || [];

            return (
              <>
                {/* LEVEL 1: DIREKTUR */}
                <div className="org-level">
                  <motion.div {...reveal} className="org-node director">
                    {direktur?.image ? (
                      <img src={direktur.image} alt={direktur.name} className="avatar-image" />
                    ) : (
                      <div className="avatar-placeholder">{direktur?.name.charAt(0)}</div>
                    )}
                    <h4>{direktur?.name}</h4>
                    <span className="role-badge"><BriefcaseBusiness size={12}/> {direktur?.role}</span>
                  </motion.div>
                </div>

                {/* CONNECTOR */}
                <motion.div {...reveal} className="org-connector split-connector"></motion.div>

                {/* LEVEL 2: WADIR */}
                <div className="org-level split-level">
                  {wadirs.map((w, i) => (
                    <motion.div {...reveal} transition={{ delay: i * 0.1 }} className="org-node wadir" key={w.name}>
                      {w.image ? (
                        <img src={w.image} alt={w.name} className="avatar-image" />
                      ) : (
                        <div className="avatar-placeholder">{w.name.charAt(0)}</div>
                      )}
                      <h4>{w.name}</h4>
                      <span className="role-badge"><BriefcaseBusiness size={12}/> {w.role}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div {...reveal} className="org-connector" style={{ marginTop: "30px" }}></motion.div>

                {/* LEVEL 3: SENIOR PARTNERS */}
                <div className="org-group">
                  <motion.h3 {...reveal} className="org-group-title">Senior Partners</motion.h3>
                  <div className="org-level grid-level">
                    {seniorPartners.map((p, i) => (
                      <motion.div {...reveal} transition={{ delay: i * 0.05 }} className="org-node" key={p.name}>
                        {p.image ? (
                          <img src={p.image} alt={p.name} className="avatar-image" />
                        ) : (
                          <div className="avatar-placeholder">{p.name.charAt(0)}</div>
                        )}
                        <h4>{p.name}</h4>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* LEVEL 4: PARTNERS */}
                <div className="org-group">
                  <motion.h3 {...reveal} className="org-group-title">Partners</motion.h3>
                  <div className="org-level grid-level">
                    {partners.map((p, i) => (
                      <motion.div {...reveal} transition={{ delay: i * 0.05 }} className="org-node" key={p.name}>
                        {p.image ? (
                          <img src={p.image} alt={p.name} className="avatar-image" />
                        ) : (
                          <div className="avatar-placeholder">{p.name.charAt(0)}</div>
                        )}
                        <h4>{p.name}</h4>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* LEVEL 5: SUPPORT TEAM */}
                <div className="org-group">
                  <motion.h3 {...reveal} className="org-group-title">Support Tim</motion.h3>
                  <div className="org-level grid-level">
                    {supportTim.map((p, i) => (
                      <motion.div {...reveal} transition={{ delay: i * 0.05 }} className="org-node support-node" key={p.name}>
                        {p.image ? (
                          <img src={p.image} alt={p.name} className="avatar-image small" />
                        ) : (
                          <div className="avatar-placeholder small">{p.name.charAt(0)}</div>
                        )}
                        <h4>{p.name}</h4>
                        <span className="role-badge"><BriefcaseBusiness size={10}/> {p.role}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      <section id="portofolio" className="results">
        <div className="results-copy">
          <motion.p {...reveal} className="overline light">PENGALAMAN & PORTOFOLIO</motion.p>
          <motion.h2 {...reveal}>Pengalaman yang memberi Anda <em>keunggulan strategis.</em></motion.h2>
          <motion.p {...reveal}>Berbagai perkara litigasi dan non-litigasi telah kami selesaikan dengan menjunjung tinggi kepentingan klien.</motion.p>
          <button onClick={() => handlePdf()}><Download size={17} />{pdfState === "loading" ? "Menyiapkan Company Profile..." : "Download Company Profile"}</button>
          {pdfState === "error" && <small>Gagal membuat PDF. Silakan coba kembali.</small>}
        </div>
        <div className="portfolio-list">
          {experience.map((exp, i) => (
            <motion.div {...reveal} key={i} className="portfolio-item">
              <Award className="portfolio-icon" />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <h4>{exp.title}</h4>
                <small>{exp.type} • {exp.detail}</small>
                {/* @ts-ignore */}
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "10px", fontSize: "12px", color: "var(--primary)", fontWeight: 700, padding: "5px 12px", background: "#fdfbf7", border: "1px solid #f2e9d0", borderRadius: "4px" }}>
                    Baca Berita <ArrowRight size={12} />
                  </a>
                )}
              </div>
            </motion.div>
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
          <h3>Konsultasi awal</h3><p>Hubungi kami melalui WhatsApp untuk respons lebih cepat.</p>
          <a href={`https://wa.me/${company.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">Chat via WhatsApp <ArrowRight size={16} /></a>
          <span>atau email ke <strong>{company.email}</strong></span>
        </div>
      </section>

      <footer className="footer-modern">
        <div className="footer-main">
          {/* Kolom 1: Profil & Kontak Utama */}
          <div className="footer-col-1">
            <Logo />
            <p>{company.description}</p>
            
            <div className="footer-contact-item">
              <div className="footer-icon-wrapper"><MapPin size={18} /></div>
              <div>
                <strong>LOKASI KANTOR</strong>
                <span>{company.address}</span>
              </div>
            </div>
            
            <div className="footer-contact-item">
              <div className="footer-icon-wrapper"><Phone size={18} /></div>
              <div>
                <strong>KONTAK RESMI</strong>
                <span>{company.phone}<br/>{company.email}</span>
              </div>
            </div>

            <div className="footer-social-row">
              <a href={`https://wa.me/${company.phone.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><IconWhatsapp /></a>
              <a href={company.socials.instagram.startsWith("http") ? company.socials.instagram : `https://instagram.com/${company.socials.instagram.replace("@","")}`} target="_blank" rel="noreferrer" aria-label="Instagram"><IconInstagram size={16} /></a>
              <a href={company.socials.facebook.startsWith("http") ? company.socials.facebook : `https://facebook.com/${company.socials.facebook.replace("@","")}`} target="_blank" rel="noreferrer" aria-label="Facebook"><IconFacebook size={16} /></a>
              <a href={company.socials.tiktok.startsWith("http") ? company.socials.tiktok : `https://tiktok.com/${company.socials.tiktok.replace("@","")}`} target="_blank" rel="noreferrer" aria-label="TikTok"><IconTiktok size={16} /></a>
              <a href={company.socials.youtube.startsWith("http") ? company.socials.youtube : `https://youtube.com/${company.socials.youtube.replace("@","")}`} target="_blank" rel="noreferrer" aria-label="YouTube"><IconYoutube size={16} /></a>
            </div>
          </div>

          {/* Kolom 2: Navigasi */}
          <div className="footer-col-2">
            <strong>NAVIGASI</strong>
            <ul className="footer-nav-list">
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#tentang">Tentang Kami</a></li>
              <li><a href="#layanan">Jasa Hukum</a></li>
              <li><a href="#tim">Tim Pengacara</a></li>
              <li><a href="#portofolio">Portofolio & Pengalaman</a></li>
            </ul>
          </div>

          {/* Kolom 3: Maps */}
          <div className="footer-col-3">
            <strong>TEMUKAN KAMI</strong>
            <div className="map-container">
              <iframe 
                src={`https://maps.google.com/maps?q=${encodeURIComponent("Jl. Yado 6 No.C1, Gandaria Utara")}&t=&z=15&ie=UTF8&iwloc=&output=embed`} 
                width="100%" 
                height="220" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Google Maps Lokasi Kantor"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 {company.name}. All rights reserved.</span><a href="#beranda">Kembali ke atas ↑</a></div>
        </footer>
    </main>
  );
}
