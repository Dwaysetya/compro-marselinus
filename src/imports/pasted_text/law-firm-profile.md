Buatkan website Company Profile untuk sebuah Law Firm menggunakan **Next.js terbaru dengan App Router + TypeScript + Tailwind CSS + Motion/Framer Motion**.

Website harus memiliki desain **modern, minimalis, premium, elegan, profesional, dan terpercaya**, dengan nuansa seperti international law firm modern.

## TECH STACK

* Next.js terbaru
* React
* TypeScript
* Tailwind CSS
* Motion / Framer Motion
* Lucide React
* next/image
* next/font
* jsPDF atau library PDF generation yang sesuai
* html2canvas jika diperlukan untuk membuat PDF dari layout presentation

Gunakan Server Components secara default dan Client Components hanya ketika diperlukan.

---

# WEBSITE STRUCTURE

Buat halaman:

* `/` — Home
* `/about` — About Firm
* `/practice-areas` — Practice Areas
* `/team` — Our Team
* `/experience` — Experience
* `/insights` — Legal Insights
* `/contact` — Contact

Gunakan reusable components.

Struktur:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── home/
│   ├── about/
│   ├── practice-areas/
│   ├── team/
│   ├── insights/
│   ├── contact/
│   └── ui/
├── data/
├── lib/
└── public/
    ├── images/
    └── logo/
```

---

# DESIGN

Gunakan color palette:

Primary Navy:
#0B1726

Dark Navy:
#101C2C

Background:
#F7F6F2

White:
#FFFFFF

Text:
#171717

Muted:
#6B7280

Accent Gold:
#B79A5B

Gold hanya sebagai accent kecil.

Gunakan typography:

Heading:
Cormorant Garamond / DM Serif Display

Body:
Inter / Manrope

Website harus menggunakan banyak whitespace dan editorial layout.

Jangan membuat website terlalu ramai.

Hindari:

* excessive gold
* excessive gradient
* excessive shadow
* glassmorphism berlebihan
* bouncing animation
* flashing animation
* random particles
* animasi yang terlalu cepat
* desain seperti website lawyer tahun lama

---

# HOME

## HERO

Buat hero premium dengan layout asymmetric.

Eyebrow:

"EST. 2010 — JAKARTA"

Heading:

"Strategic Legal Counsel
For Complex Matters."

Description:

"Trusted legal counsel for individuals, businesses, and institutions."

CTA:

"Book a Consultation"

Secondary CTA:

"Explore Our Expertise"

Gunakan professional lawyer / law office photography.

Animation:

* fade-up
* text reveal
* image reveal
* subtle parallax

Animasi harus smooth dan elegant.

---

# TRUST SECTION

Tampilkan:

15+
Years Experience

250+
Cases Handled

120+
Corporate Clients

98%
Client Satisfaction

Gunakan subtle counter animation.

---

# ABOUT

Section:

"01 — ABOUT OUR FIRM"

Heading:

"Experience.
Integrity.
Strategic Thinking."

Tampilkan:

* company overview
* history
* philosophy
* values

Gunakan editorial layout dengan image + text.

---

# PRACTICE AREAS

Section:

"02 — PRACTICE AREAS"

Tampilkan:

01 Corporate & Commercial Law
02 Litigation & Dispute Resolution
03 Employment Law
04 Intellectual Property
05 Banking & Finance
06 Property & Real Estate
07 Criminal Law
08 Family & Inheritance Law

Gunakan large editorial list.

Hover effect harus subtle.

---

# EXPERIENCE

Section:

"03 — SELECTED EXPERIENCE"

Tampilkan:

* Corporate Restructuring
* M&A Advisory
* Commercial Dispute
* Regulatory Compliance

Gunakan large horizontal layout.

---

# TEAM

Section:

"04 — OUR TEAM"

Tampilkan:

* Lawyer portrait
* Name
* Position
* Practice Area
* Short biography

Hover animation subtle.

---

# INSIGHTS

Section:

"05 — LEGAL INSIGHTS"

Tampilkan artikel:

* category
* date
* title
* excerpt
* Read Article

Buat dynamic route:

`/insights/[slug]`

Gunakan `generateMetadata()` untuk SEO.

---

# CONTACT

Buat CTA:

"Let's Discuss Your Legal Needs."

Button:

"Schedule a Consultation"

Contact form:

* Full Name
* Email
* Phone
* Legal Matter
* Message

---

# PDF COMPANY PROFILE

INI ADALAH FITUR PENTING.

Website harus memiliki **Company Profile PDF Presentation** yang dapat di-download langsung oleh visitor.

Tambahkan button pada Navbar dan Hero:

"Download Company Profile"

Button tersebut harus benar-benar menghasilkan atau mengunduh file PDF.

Jangan hanya membuat tombol dummy.

---

# PDF DESIGN

PDF harus memiliki design yang konsisten dengan website.

Ukuran:

A4 Portrait

Format:

PDF

Target:

10–15 halaman.

Gunakan:

* Navy
* Ivory
* White
* Subtle Gold accent
* Typography yang sama dengan website
* Logo
* Professional photography
* Editorial layout

PDF harus terlihat seperti **corporate presentation / law firm profile**, bukan sekadar hasil screenshot website.

---

# PDF CONTENT

Buat PDF dengan struktur:

PAGE 01
Cover

[LAW FIRM NAME]

"Strategic Legal Counsel
For Complex Matters."

Jakarta, Indonesia

---

PAGE 02
About Our Firm

Company overview.

---

PAGE 03
Our Philosophy

Experience
Integrity
Strategic Thinking

---

PAGE 04
Why Choose Us

Strategic Approach
Deep Legal Expertise
Client-Centered Counsel
Integrity & Confidentiality

---

PAGE 05
Practice Areas

Corporate & Commercial Law
Litigation & Dispute Resolution
Employment Law
Intellectual Property

---

PAGE 06
Practice Areas

Banking & Finance
Property & Real Estate
Criminal Law
Family & Inheritance Law

---

PAGE 07
Our Approach

Consult
Analyze
Strategize
Execute

---

PAGE 08
Our Team

Lawyer profiles.

---

PAGE 09
Selected Experience

Representative matters / experience.

---

PAGE 10
Industries / Clients

Corporate
Financial
Property
Technology
Individuals

---

PAGE 11
Legal Insights

Featured articles.

---

PAGE 12
Contact

Office address
Phone
Email
Website
WhatsApp

---

PAGE 13
Closing

"Trusted Counsel.
Strategic Solutions."

"Book a Consultation"

---

# PDF GENERATION

Implement PDF generation properly.

Prefer generating the PDF from a dedicated React PDF presentation component rather than simply taking screenshots of the webpage.

Create:

```text
src/
├── components/
│   └── pdf/
│       ├── CompanyProfilePDF.tsx
│       ├── PDFCover.tsx
│       ├── PDFAbout.tsx
│       ├── PDFPracticeAreas.tsx
│       ├── PDFTeam.tsx
│       ├── PDFExperience.tsx
│       └── PDFContact.tsx
```

Keep PDF presentation components separate from website components so the layout can be optimized specifically for A4.

The website and PDF must share the same:

* colors
* typography
* logo
* content
* visual identity

But the PDF should have its own optimized A4 layout.

---

# DOWNLOAD FUNCTION

Create a working download function.

Example behavior:

User clicks:

"Download Company Profile"

↓

Generate PDF

↓

Download:

`[law-firm-name]-company-profile.pdf`

The downloaded PDF must:

* have correct A4 dimensions
* contain all pages
* contain images
* contain logo
* have readable typography
* have no cut-off content
* have no overlapping elements
* have proper page breaks
* work on desktop and mobile

Show a loading state:

"Preparing Company Profile..."

Then:

"Download PDF"

If generation fails, show an appropriate error message.

---

# OPTIONAL PDF PREVIEW

Also create:

"View Company Profile"

This opens a PDF preview in a new browser tab or modal.

Buttons:

[View Company Profile]

[Download PDF]

Both must work properly.

---

# PDF DATA

Do not hardcode content directly inside every component.

Create centralized data:

```text
src/data/company.ts
src/data/team.ts
src/data/practiceAreas.ts
src/data/experience.ts
src/data/insights.ts
```

Example:

```ts
export const company = {
  name: "Law Firm Name",
  tagline: "Strategic Legal Counsel",
  address: "Jakarta, Indonesia",
  email: "hello@lawfirm.com",
  phone: "+62..."
}
```

The website and PDF should use the same data source.

Therefore, if the company name or address changes, it should automatically update in both website and PDF.

---

# SEO

Implement Next.js Metadata API.

Homepage:

Title:
"[LAW FIRM NAME] — Strategic Legal Counsel"

Description:
"Trusted legal counsel and strategic representation for individuals, businesses, and institutions."

Add:

* Open Graph
* Twitter metadata
* favicon
* sitemap
* robots.txt

---

# RESPONSIVE

Website must be responsive:

Desktop
Tablet
Mobile

PDF must always remain A4 regardless of screen size.

---

# PERFORMANCE

Optimize:

* next/image
* next/font
* lazy loading
* Server Components
* minimal client-side JavaScript
* animation performance

Do not make the entire website `"use client"`.

---

# FINAL REQUIREMENT

The final result must feel like:

International Law Firm
+
Premium Editorial Design
+
Modern Corporate Website

The website and PDF must look like one complete professional brand system.

The most important feature is that **"Download Company Profile" must actually generate/download a usable PDF**, not be a placeholder button.

Make the implementation production-ready and ensure there are no broken links, missing routes, console errors, or dummy download functionality.
