import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drjoseairton.com.br"),
  title: "Dr. José Airton | Medicina Fetal e Ultrassonografia em Santos",
  description: "Dr. José Airton, especialista em Medicina Fetal e Ultrassonografia. Atendimento particular realizado pelo próprio médico na Clínica Liferty, em Santos/SP.",
  alternates: { canonical: "/" },
  openGraph: { title: "Dr. José Airton | Medicina Fetal e Ultrassonografia em Santos", description: "Atendimento médico particular realizado pelo Dr. José Airton na Clínica Liferty, em Santos/SP.", type: "website", locale: "pt_BR", url: "/", images: [{ url: "/images/dr-jose-airton-ultrassom.png", width: 1200, height: 630, alt: "Dr. José Airton em ambiente de ultrassonografia" }] },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Physician", "@id": "https://www.drjoseairton.com.br/#physician", name: "Dr. José Airton Oliveira Lima", description: "Médico com título de especialista em Ginecologia e Obstetrícia e área de atuação em Medicina Fetal, com experiência em ultrassonografia desde 2001. Realiza atendimento particular na Clínica Liferty, em Santos.", medicalSpecialty: ["Obstetric", "MaternalFetalMedicine"], paymentAccepted: "Particular", identifier: [{ "@type": "PropertyValue", name: "CRM/SP", value: "95.496" }, { "@type": "PropertyValue", name: "RQE Medicina Fetal", value: "295562" }], telephone: "+55 13 99786-7273", sameAs: ["https://www.instagram.com/ze_airton"], address: { "@type": "PostalAddress", streetAddress: "Alameda Armênio Mendes, 66, Edifício Praiamar Corporate", addressLocality: "Santos", addressRegion: "SP", postalCode: "11035-260", addressCountry: "BR" } },
    { "@type": ["MedicalClinic", "LocalBusiness", "Organization"], "@id": "https://www.drjoseairton.com.br/#clinic", name: "Clínica Liferty", address: { "@type": "PostalAddress", streetAddress: "Alameda Armênio Mendes, 66, Edifício Praiamar Corporate", addressLocality: "Santos", addressRegion: "SP", postalCode: "11035-260", addressCountry: "BR" } },
    { "@type": "WebSite", "@id": "https://www.drjoseairton.com.br/#website", name: "Dr. José Airton", inLanguage: "pt-BR", url: "https://www.drjoseairton.com.br/" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></head><body>{children}</body></html>;
}
