import { jsPDF } from "jspdf";
import { company, experience, insights, practiceAreas, team } from "./data";

const navy = "#0B1726";
const ivory = "#F7F6F2";
const gold = "#B79A5B";

function heading(pdf: jsPDF, eyebrow: string, title: string, dark = false) {
  pdf.setTextColor(dark ? ivory : navy);
  pdf.setFont("times", "normal");
  pdf.setFontSize(8);
  pdf.text(eyebrow.toUpperCase(), 22, 25);
  pdf.setDrawColor(gold);
  pdf.line(22, 30, 42, 30);
  pdf.setFont("times", "bold");
  pdf.setFontSize(29);
  pdf.text(title, 22, 53, { maxWidth: 166 });
}

function footer(pdf: jsPDF, page: number, dark = false) {
  pdf.setTextColor(dark ? "#C9CDD2" : "#68717B");
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(7);
  pdf.text(company.name, 22, 282);
  pdf.text(String(page).padStart(2, "0"), 188, 282, { align: "right" });
}

function page(pdf: jsPDF, number: number, title: string, eyebrow: string, dark = false) {
  if (number > 1) pdf.addPage();
  pdf.setFillColor(dark ? navy : ivory);
  pdf.rect(0, 0, 210, 297, "F");
  heading(pdf, eyebrow, title, dark);
  footer(pdf, number, dark);
}

function body(pdf: jsPDF, text: string, y: number, dark = false, width = 150) {
  pdf.setTextColor(dark ? "#E2E5E8" : "#3E4751");
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);
  pdf.setLineHeightFactor(1.55);
  pdf.text(text, 22, y, { maxWidth: width });
}

async function fetchImage(url: string) {
  try {
    const blob = await (await fetch(url)).blob();
    return await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

export async function createCompanyProfile() {
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const portrait = await fetchImage(team[0].image);

  page(pdf, 1, "Strategic Legal Counsel\nFor Complex Matters.", "Company Profile · 2025", true);
  pdf.setTextColor(gold);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(12);
  pdf.text(company.name, 22, 93);
  body(pdf, "Jakarta, Indonesia", 109, true);
  if (portrait) pdf.addImage(portrait, "JPEG", 108, 123, 80, 112);

  page(pdf, 2, "About Our Firm", "01 · Introduction");
  body(pdf, `${company.name} is an independent Indonesian law firm built for consequential matters. We combine rigorous legal analysis, commercial understanding, and attentive service to help clients move forward with clarity.`, 80);
  body(pdf, "Since 2010, we have advised founders, institutions, leading companies, and families through change, growth, and dispute.", 126);

  page(pdf, 3, "Experience.\nIntegrity.\nStrategic Thinking.", "02 · Our Philosophy", true);
  body(pdf, "Our work is guided by sound judgment, intellectual honesty, and an unwavering commitment to each client’s objectives.", 116, true);

  page(pdf, 4, "Why Clients Choose Us", "03 · Our Difference");
  ["Strategic Approach", "Deep Legal Expertise", "Client-Centered Counsel", "Integrity & Confidentiality"].forEach((item, i) => {
    pdf.setTextColor(navy);
    pdf.setFont("times", "bold");
    pdf.setFontSize(18);
    pdf.text(`0${i + 1}  ${item}`, 22, 88 + i * 35);
  });

  page(pdf, 5, "Practice Areas", "04 · Capabilities", true);
  practiceAreas.slice(0, 4).forEach((item, i) => body(pdf, `${item[0]}   ${item[1]}`, 92 + i * 30, true));
  page(pdf, 6, "Practice Areas", "04 · Capabilities");
  practiceAreas.slice(4).forEach((item, i) => body(pdf, `${item[0]}   ${item[1]}`, 92 + i * 30));

  page(pdf, 7, "A Disciplined Path\nTo Resolution", "05 · Our Approach", true);
  ["Consult", "Analyze", "Strategize", "Execute"].forEach((item, i) => body(pdf, `${i + 1}  —  ${item}`, 108 + i * 27, true));

  page(pdf, 8, "Our Team", "06 · People");
  team.forEach((member, i) => {
    pdf.setTextColor(navy);
    pdf.setFont("times", "bold");
    pdf.setFontSize(17);
    pdf.text(member.name, 22, 91 + i * 48);
    body(pdf, `${member.role} · ${member.area}`, 101 + i * 48);
  });

  page(pdf, 9, "Selected Experience", "07 · Representative Matters", true);
  experience.forEach((matter, i) => {
    pdf.setTextColor(gold);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8);
    pdf.text(matter.type.toUpperCase(), 22, 88 + i * 56);
    body(pdf, matter.title, 101 + i * 56, true);
  });

  page(pdf, 10, "Industries & Clients", "08 · Perspective");
  ["Corporate", "Financial Services", "Property", "Technology", "Private Clients"].forEach((item, i) =>
    body(pdf, item, 86 + i * 28),
  );

  page(pdf, 11, "Legal Insights", "09 · Thinking", true);
  insights.forEach((article, i) => {
    pdf.setTextColor(gold);
    pdf.setFontSize(8);
    pdf.text(`${article.category} · ${article.date}`, 22, 88 + i * 52);
    body(pdf, article.title, 100 + i * 52, true);
  });

  page(pdf, 12, "Start A Conversation", "10 · Contact");
  body(pdf, `${company.address}\n\n${company.phone}\n${company.email}\n${company.website}\nWhatsApp: ${company.phone}`, 89);

  page(pdf, 13, "Trusted Counsel.\nStrategic Solutions.", "ARUNA & PARTNERS", true);
  body(pdf, "Book a consultation with our team.", 117, true);
  return pdf;
}
