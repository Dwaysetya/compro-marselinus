import { jsPDF } from "jspdf";
import { company, experience, practiceAreas, teamGroups, visiMisiNilai } from "./data";

const navy = "#0a1121";
const ivory = "#f7f9fc";
const gold = "#c5a059";

// Helper to asynchronously add an image from a URL
async function addImageFromUrl(pdf: jsPDF, url: string, x: number, y: number, w: number, h: number, format = "JPEG") {
  return new Promise<void>((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        pdf.addImage(img, format, x, y, w, h);
      } catch (e) {
        console.error("Failed to add image to PDF:", e);
      }
      resolve();
    };
    img.onerror = () => {
      console.error("Failed to load image for PDF:", url);
      resolve();
    };
    img.src = url;
  });
}

function slideHeading(pdf: jsPDF, eyebrow: string, title: string, dark = false, align: "left" | "center" = "left", subtitle?: string) {
  pdf.setTextColor(dark ? ivory : navy);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(10);
  
  let x = align === "center" ? 148.5 : 25;
  let lineX1 = align === "center" ? 148.5 - 15 : 25;
  let lineX2 = align === "center" ? 148.5 + 15 : 55;
  
  pdf.text(eyebrow.toUpperCase(), x, 25, { align: align });
  pdf.setDrawColor(gold);
  pdf.setLineWidth(1.5);
  pdf.line(lineX1, 32, lineX2, 32);
  
  pdf.setFont("times", "bold");
  pdf.setFontSize(38);
  pdf.text(title, x, 55, { maxWidth: 247, align: align });
  
  if (subtitle) {
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(14);
    pdf.setTextColor(gold);
    let subY = title.includes("\n") ? 75 : 65;
    pdf.text(subtitle, x, subY, { align: align });
  }
}

function slideFooter(pdf: jsPDF, page: number, dark = false) {
  pdf.setTextColor(dark ? "#8894A8" : "#68717B");
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(8);
  pdf.text(company.name.toUpperCase(), 25, 195);
  pdf.setFont("helvetica", "normal");
  pdf.text(String(page).padStart(2, "0"), 272, 195, { align: "right" });
  
  // Decorative bottom line
  pdf.setDrawColor(gold);
  pdf.setLineWidth(0.4);
  pdf.line(25, 198, 272, 198);
}

function newSlide(pdf: jsPDF, number: number, title: string, eyebrow: string, dark = false, align: "left" | "center" = "left") {
  if (number > 1) pdf.addPage();
  pdf.setFillColor(dark ? navy : ivory);
  pdf.rect(0, 0, 297, 210, "F");
  if (title) slideHeading(pdf, eyebrow, title, dark, align);
  slideFooter(pdf, number, dark);
}

function slideBody(pdf: jsPDF, text: string, x: number, y: number, width = 150, dark = false, size = 12) {
  pdf.setTextColor(dark ? "#E2E5E8" : "#3E4751");
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(size);
  pdf.setLineHeightFactor(1.7);
  pdf.text(text, x, y, { maxWidth: width });
}

export async function createCompanyProfile() {
  const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  let slideNum = 1;

  // ----------------------------------------------------
  // Slide 1: Cover
  // ----------------------------------------------------
  newSlide(pdf, slideNum++, "", "", true);
  
  // Navy background
  pdf.setFillColor(navy);
  pdf.rect(0, 0, 297, 210, "F");
  
  // Cover Photo Asymmetrical
  await addImageFromUrl(pdf, "/images/marselinus.jpeg", 148.5, 0, 148.5, 210, "JPEG");
  
  // Gradient/Fade overlay effect using simple rect
  pdf.setFillColor(gold);
  pdf.rect(147.5, 0, 2, 210, "F"); // Divider
  
  pdf.setTextColor(gold);
  pdf.setFont("times", "bold");
  pdf.setFontSize(50);
  pdf.text("Hukum\nProfesional,\nStrategis, dan\nBerintegritas.", 25, 70, { maxWidth: 120 });
  
  pdf.setTextColor("#ffffff");
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(14);
  pdf.text(company.name.toUpperCase(), 25, 140);
  pdf.setDrawColor(gold);
  pdf.setLineWidth(1);
  pdf.line(25, 147, 85, 147);
  pdf.setFontSize(11);
  pdf.text("COMPANY PROFILE 2026", 25, 158);
  pdf.text("Jakarta, Indonesia", 25, 166);

  // ----------------------------------------------------
  // Slide 2: About
  // ----------------------------------------------------
  newSlide(pdf, slideNum++, "Tentang Kantor Kami", "01 · Pengantar");
  pdf.setTextColor(gold);
  pdf.setFont("times", "italic");
  pdf.setFontSize(22);
  pdf.text("Mendobrak batasan, membela kepentingan Anda.", 25, 80);
  
  slideBody(pdf, company.description, 25, 100, 120);
  slideBody(pdf, "Dengan dukungan Direktur, Wakil Direktur, Senior Partners, Partners, dan Support Tim, kami membangun pendekatan hukum yang mengutamakan ketelitian dalam memahami persoalan, keberanian dalam menghadapi tantangan, serta ketegasan dalam memperjuangkan kepentingan klien.", 25, 130, 120);
  
  // Image Box
  pdf.setFillColor(navy);
  pdf.rect(155, 45, 122, 130, "F");
  await addImageFromUrl(pdf, "/images/giat1.jpg", 156, 46, 120, 128, "JPEG");

  // ----------------------------------------------------
  // Slide 3: Vision
  // ----------------------------------------------------
  newSlide(pdf, slideNum++, "Keadilan,\nIntegritas,\ndan Keberanian.", "02 · Visi & Nilai", true);
  slideBody(pdf, "Visi Firma:", 25, 100, 150, true, 14);
  
  pdf.setFont("times", "italic");
  pdf.setFontSize(18);
  pdf.setTextColor(gold);
  pdf.text(`"${visiMisiNilai.visi}"`, 25, 115, { maxWidth: 130 });
  
  // Image Box
  pdf.setDrawColor(gold);
  pdf.setLineWidth(1.5);
  pdf.rect(170, 45, 102, 130);
  await addImageFromUrl(pdf, "/images/giat2.png", 172, 47, 98, 126, "PNG");

  // ----------------------------------------------------
  // Slide 4: Core Values
  // ----------------------------------------------------
  newSlide(pdf, slideNum++, "Nilai Utama Firma", "03 · Prinsip");
  visiMisiNilai.nilai.forEach((item, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 25 + col * 85;
    const y = 90 + row * 45;
    
    // Icon Square
    pdf.setFillColor(navy);
    pdf.rect(x, y - 8, 8, 8, "F");
    
    pdf.setTextColor(navy);
    pdf.setFont("times", "bold");
    pdf.setFontSize(16);
    pdf.text(item.title, x + 15, y);
    
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.setTextColor("#5a667e");
    pdf.text(item.desc, x, y + 10, { maxWidth: 75 });
  });

  // ----------------------------------------------------
  // Slide 5: Services (1/2)
  // ----------------------------------------------------
  newSlide(pdf, slideNum++, "Praktik & Layanan Hukum", "04 · Layanan", true);
  practiceAreas.slice(0, 2).forEach((area, i) => {
    pdf.setTextColor(gold);
    pdf.setFont("times", "bold");
    pdf.setFontSize(22);
    pdf.text(area.category, 25 + (i * 130), 90);
    
    pdf.setDrawColor(gold);
    pdf.setLineWidth(0.5);
    pdf.line(25 + (i * 130), 95, 80 + (i * 130), 95);
    
    area.items.forEach((item, j) => {
      // Custom bullet
      pdf.setFillColor(ivory);
      pdf.rect(25 + (i * 130), 105.5 + (j * 12) - 3, 3, 3, "F");
      slideBody(pdf, item, 33 + (i * 130), 105 + (j * 12), 110, true, 13);
    });
  });

  // ----------------------------------------------------
  // Slide 6: Services (2/2)
  // ----------------------------------------------------
  newSlide(pdf, slideNum++, "Praktik & Layanan Hukum", "04 · Layanan");
  practiceAreas.slice(2).forEach((area, i) => {
    pdf.setTextColor(navy);
    pdf.setFont("times", "bold");
    pdf.setFontSize(22);
    pdf.text(area.category, 25 + (i * 130), 90);
    
    pdf.setDrawColor(navy);
    pdf.setLineWidth(0.5);
    pdf.line(25 + (i * 130), 95, 80 + (i * 130), 95);
    
    area.items.forEach((item, j) => {
      pdf.setFillColor(gold);
      pdf.rect(25 + (i * 130), 105.5 + (j * 12) - 3, 3, 3, "F");
      slideBody(pdf, item, 33 + (i * 130), 105 + (j * 12), 110, false, 13);
    });
  });

  // ----------------------------------------------------
  // Slide 7: Team Portfolio
  // ----------------------------------------------------
  // We'll collect all members to display them in chunks of 4
  const allMembers = teamGroups.flatMap(g => g.members);
  
  for (let c = 0; c < allMembers.length; c += 4) {
    const chunk = allMembers.slice(c, c + 4);
    newSlide(pdf, slideNum++, "Orang-Orang Kami", "05 · Profil Tim", false, "center");
    
    let startX = 25;
    let startY = 85;
    
    for (let i = 0; i < chunk.length; i++) {
      const p = chunk[i];
      // Draw image box
      pdf.setFillColor(navy);
      pdf.rect(startX + (i * 62), startY, 56, 56, "F");
      if (p.image) {
        await addImageFromUrl(pdf, p.image, startX + (i * 62) + 1, startY + 1, 54, 54, p.image.toLowerCase().endsWith("png") ? "PNG" : "JPEG");
      }
      
      pdf.setTextColor(navy);
      pdf.setFont("times", "bold");
      pdf.setFontSize(14);
      pdf.text(p.name, startX + (i * 62) + 28, startY + 65, { align: "center", maxWidth: 54 });
      
      pdf.setTextColor(gold);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(10);
      let roleY = startY + (p.name.length > 20 ? 73 : 69);
      pdf.text(p.role.toUpperCase(), startX + (i * 62) + 28, roleY, { align: "center" });
    }
  }

  // ----------------------------------------------------
  // Slide: Portfolio / Track Record
  // ----------------------------------------------------
  newSlide(pdf, slideNum++, "Pengalaman & Portofolio", "06 · Rekam Jejak", true);
  experience.forEach((matter, i) => {
    pdf.setFillColor(gold);
    pdf.rect(25, 90 + i * 45, 3, 26, "F");
    
    pdf.setTextColor(gold);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    pdf.text(matter.type.toUpperCase(), 35, 95 + i * 45);
    
    slideBody(pdf, matter.title, 35, 105 + i * 45, 230, true, 14);
    
    pdf.setTextColor("#8894A8");
    pdf.setFontSize(11);
    pdf.text(matter.detail, 35, 118 + i * 45);
  });

  // ----------------------------------------------------
  // Slide: Contact / Back Cover
  // ----------------------------------------------------
  newSlide(pdf, slideNum++, company.name, "07 · Kontak", false, "center");
  pdf.setTextColor(gold);
  pdf.setFont("times", "italic");
  pdf.setFontSize(22);
  pdf.text("Jadwalkan konsultasi dengan tim kami.", 148.5, 80, { align: "center" });
  
  pdf.setTextColor(navy);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(13);
  pdf.text("ALAMAT KANTOR", 148.5, 105, { align: "center" });
  
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(12);
  pdf.text(company.address, 148.5, 115, { align: "center", maxWidth: 180 });
  
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(13);
  pdf.text("HUBUNGI KAMI", 148.5, 135, { align: "center" });
  
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(12);
  pdf.text(`Telepon: ${company.phone}   |   Email: ${company.email}`, 148.5, 145, { align: "center" });
  
  // Big logo/icon abstraction
  pdf.setDrawColor(gold);
  pdf.setLineWidth(2);
  pdf.rect(148.5 - 20, 160, 40, 25);
  pdf.setFont("times", "bold");
  pdf.setFontSize(16);
  pdf.setTextColor(navy);
  pdf.text(company.shortName, 148.5, 175, { align: "center" });

  return pdf;
}
