"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const whatsapp = "https://wa.me/5513997867273";
const instagram = "https://www.instagram.com/ze_airton?igsh=ZzJ6YnlzcTA3cWpj";
const maps = "https://www.google.com/maps/search/?api=1&query=Alameda+Arm%C3%AAnio+Mendes%2C+66%2C+Santos%2C+SP";

const specialties = [
  ["care", "Medicina Fetal", "Avaliação especializada da gestação, inclusive em situações de alto risco, em integração com o obstetra."],
  ["ultrasound", "Ultrassonografia Obstétrica", "Acompanhamento criterioso do desenvolvimento fetal e das condições maternas ao longo da gestação."],
  ["baby", "Ultrassom Morfológico", "Estudo detalhado da anatomia fetal nos períodos indicados do primeiro e do segundo trimestre."],
  ["wave", "Ultrassonografia com Doppler", "Análise dos fluxos sanguíneos maternos e fetais para avaliar circulação e bem-estar fetal."],
  ["echo", "Ecocardiografia Fetal", "Avaliação especializada do coração fetal, realizada conforme indicação médica."],
  ["heart", "Perfil Biofísico Fetal", "Análise de parâmetros ultrassonográficos relacionados à vitalidade e ao bem-estar do bebê."],
  ["measure", "Avaliação do Colo Uterino", "Exame que auxilia a avaliação do risco obstétrico em situações específicas."],
];

const faq = [
  ["Quais exames realiza?", "Medicina Fetal, ultrassonografia obstétrica e com Doppler, morfológico, ecocardiografia fetal, perfil biofísico fetal e avaliação do colo uterino."],
  ["Quando fazer o morfológico?", "O exame é indicado em períodos específicos do primeiro e do segundo trimestre. Confirme o momento ideal com o obstetra ou no agendamento."],
  ["Preciso de encaminhamento?", "Isso pode variar conforme o exame e o contexto clínico. A equipe orienta pelo WhatsApp."],
  ["Onde o Dr. José Airton atende?", "O Dr. José Airton realiza seus atendimentos particulares na Clínica Liferty, localizada no Edifício Praiamar Corporate, em Aparecida, Santos/SP. A Liferty é o local do atendimento; a consulta e os exames apresentados neste site são realizados pelo próprio Dr. Airton."],
  ["O atendimento é particular?", "Sim. O atendimento do Dr. José Airton na Clínica Liferty é particular. Consulte valores, horários, preparo e documentos necessários diretamente pelo WhatsApp."],
  ["Quanto tempo dura o exame?", "O tempo varia conforme o exame, a posição do bebê e as necessidades da avaliação."],
  ["Como agendar?", "Fale com a equipe pelo WhatsApp para consultar horários, preparo e documentos necessários."],
];

const technologyImages = [
  ["/images/tecnologia-8d-01.png", "Imagem tridimensional de ultrassonografia fetal"],
  ["/images/tecnologia-8d-02.png", "Imagem 8D do rosto do bebê gerada a partir do ultrassom"],
  ["/images/tecnologia-8d-03.png", "Visualização aprimorada do bebê a partir da imagem de ultrassom"],
  ["/images/tecnologia-8d-04.png", "Imagem detalhada do bebê gerada com tecnologia de visualização 8D"],
];

const clinicImages = [
  ["/images/liferty-01-recepcao.png", "Recepção do Edifício Praiamar Corporate"],
  ["/images/liferty-02-fachada.png", "Fachada do Edifício Praiamar Corporate em Santos"],
  ["/images/liferty-03-consultorio.png", "Consultório da Clínica Liferty com vista para Santos"],
  ["/images/liferty-04-apoio.png", "Ambiente de apoio da Clínica Liferty"],
  ["/images/liferty-05-sala-exame.png", "Sala de atendimento da Clínica Liferty"],
];

const aboutImages = [
  ["/images/sobre-dr-airton-ultrassom-2026.png", "Dr. José Airton operando o equipamento de ultrassonografia em ambiente clínico"],
  ["/images/sobre-dr-airton-palestra.png", "Dr. José Airton durante palestra médica, diante das bandeiras de São Paulo e do Brasil"],
  ["/images/sobre-dr-airton-historia.png", "Dr. José Airton ao lado de um casal durante atendimento em sua trajetória profissional"],
  ["/images/sobre-dr-airton-com-casal-2026.png", "Dr. José Airton ao lado de um casal após o atendimento"],
];

function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    ultrasound: <><path d="M5 4h14v11H5z"/><path d="M8 19h8M12 15v4M8 8c2-2 6-2 8 0M9.5 11c1.4-1.4 3.6-1.4 5 0"/></>,
    baby: <><path d="M9 8a3 3 0 1 1 5.4 1.8"/><path d="M16 6c2.5 1 4 3.2 4 6a8 8 0 1 1-8-8"/><path d="M9 15c2 1.3 4 1.3 6 0"/></>,
    wave: <><path d="M3 12h3l2-5 3 10 3-8 2 3h5"/></>,
    echo: <><path d="M20.8 5.7a5.4 5.4 0 0 0-7.6 0L12 6.9l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 22l8.8-8.7a5.4 5.4 0 0 0 0-7.6Z"/><path d="M7.5 12h2l1-2.5 1.5 5 1-2.5h3.5"/></>,
    heart: <path d="M20.8 5.7a5.4 5.4 0 0 0-7.6 0L12 6.9l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 22l8.8-8.7a5.4 5.4 0 0 0 0-7.6Z"/>,
    measure: <><path d="M4 7h16v10H4z"/><path d="M8 7v4m4-4v2m4-2v4"/></>,
    care: <><path d="M12 21s-7-3.8-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 6.2-7 10-7 10Z"/><path d="M8.5 13h2l1-2.5 1.5 5 1-2.5h2"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor"/></>,
    whatsapp: <><path d="M20.5 3.6A11.7 11.7 0 0 0 2.1 17.7L.5 23.5l5.9-1.6A11.7 11.7 0 1 0 20.5 3.6Z"/><path d="M8 7.2c.3-.3.6-.3.8 0l1.2 2.7c.1.3 0 .5-.2.7l-.8.9c-.2.2 0 .5.1.7 1.1 1.9 2.6 3.3 4.6 4.2.3.1.5.1.7-.1l1-1.2c.2-.2.5-.3.7-.1l2.5 1.2c.3.1.4.4.3.7-.3 1.5-1.7 2.6-3.2 2.6-1.7 0-4.3-1.2-6.6-3.3-2.8-2.6-4.4-5.8-4-7.4.3-1 .9-1.4 1.4-1.6.4-.1 1.1-.2 1.5 0Z"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function SocialIcon({ name }: { name: "whatsapp" | "instagram" }) {
  if (name === "instagram") {
    return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r=".8" fill="currentColor" stroke="none"/></svg>;
  }
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12.04 2a9.84 9.84 0 0 0-8.52 14.76L2 22l5.38-1.41A9.92 9.92 0 1 0 12.04 2Zm0 17.9a8.05 8.05 0 0 1-4.1-1.12l-.3-.18-3.19.84.85-3.1-.2-.32a8.04 8.04 0 1 1 6.94 3.88Zm4.41-6.03c-.24-.12-1.43-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2a7.28 7.28 0 0 1-1.34-1.67c-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.75-1.79-.19-.48-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z"/></svg>;
}

function Logo() {
  return <a className="brand" href="#inicio" aria-label="Dr. José Airton — início"><span><strong>Dr. José Airton</strong><small>Medicina Fetal · Ultrassonografia</small></span></a>;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const links = [["Início", "inicio"], ["Sobre", "sobre"], ["Especialidades", "especialidades"], ["Clínica", "clinica"], ["Dúvidas Frequentes", "duvidas"], ["Contato", "contato"]];
  return <header className={`site-header${scrolled ? " scrolled" : ""}`}>
    <div className="header-inner">
      <Logo />
      <nav aria-label="Navegação principal">{links.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
      <a className="button nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Agendar Consulta</a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}><span/><span/></button>
    </div>
    <nav className={`mobile-menu${open ? " open" : ""}`} id="mobile-menu" aria-label="Navegação móvel">{links.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}<a href={whatsapp} target="_blank" rel="noreferrer">Agendar Consulta</a></nav>
  </header>;
}

function SectionTitle({ kicker, title, text, light = false }: { kicker: string; title: string; text?: string; light?: boolean }) {
  return <div className={`section-title${light ? " light" : ""}`}><span className="eyebrow">{kicker}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function AboutCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % aboutImages.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const select = (index: number) => {
    setActive((index + aboutImages.length) % aboutImages.length);
    setPaused(true);
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) select(active + (distance < 0 ? 1 : -1));
    touchStart.current = null;
  };

  return <div className="about-carousel" aria-roledescription="carrossel" aria-label="Trajetória do Dr. José Airton" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="about-carousel-stage" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={onTouchEnd}>
      {aboutImages.map(([src, alt], index) => <div className={`about-carousel-slide${index === active ? " active" : ""}`} aria-hidden={index !== active} key={src}><Image src={src} alt={alt} fill sizes="(max-width: 760px) 94vw, 48vw"/></div>)}
      <button className="carousel-arrow prev" type="button" onClick={() => select(active - 1)} aria-label="Ver foto anterior">‹</button>
      <button className="carousel-arrow next" type="button" onClick={() => select(active + 1)} aria-label="Ver próxima foto">›</button>
      <span className="carousel-counter" aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(aboutImages.length).padStart(2, "0")}</span>
    </div>
    <div className="about-carousel-dots" aria-label="Selecionar foto">{aboutImages.map(([, alt], index) => <button key={alt} type="button" className={index === active ? "active" : ""} onClick={() => select(index)} aria-label={`Ver foto ${index + 1}`} aria-current={index === active ? "true" : undefined}/>)}</div>
  </div>;
}

function TechnologyCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % technologyImages.length), 4500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const select = (index: number) => {
    setActive(index);
    setPaused(true);
  };

  return <div className="technology-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carrossel" aria-label="Imagens de tecnologia 8D">
    <div className="carousel-stage">
      {technologyImages.map(([src, alt], index) => <div className={`carousel-slide${index === active ? " active" : ""}`} aria-hidden={index !== active} key={src}><Image src={src} alt={alt} fill sizes="(max-width: 760px) 92vw, 46vw"/></div>)}
      <button className="carousel-arrow prev" type="button" onClick={() => select((active - 1 + technologyImages.length) % technologyImages.length)} aria-label="Ver imagem anterior">‹</button>
      <button className="carousel-arrow next" type="button" onClick={() => select((active + 1) % technologyImages.length)} aria-label="Ver próxima imagem">›</button>
      <span className="carousel-counter" aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(technologyImages.length).padStart(2, "0")}</span>
    </div>
    <div className="carousel-dots" aria-label="Selecionar imagem">{technologyImages.map(([, alt], index) => <button key={alt} type="button" className={index === active ? "active" : ""} onClick={() => select(index)} aria-label={`Ver imagem ${index + 1}`} aria-current={index === active ? "true" : undefined}/>)}</div>
  </div>;
}

function ClinicCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % clinicImages.length), 4800);
    return () => window.clearInterval(timer);
  }, [paused]);

  const select = (index: number) => {
    setActive((index + clinicImages.length) % clinicImages.length);
    setPaused(true);
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) select(active + (distance < 0 ? 1 : -1));
    touchStart.current = null;
  };

  return <div className="clinic-carousel" aria-roledescription="carrossel" aria-label="Ambientes da Clínica Liferty" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="clinic-carousel-stage" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={onTouchEnd}>
      {clinicImages.map(([src, alt], index) => <div className={`clinic-carousel-slide${index === active ? " active" : ""}`} aria-hidden={index !== active} key={src}><Image src={src} alt={alt} fill sizes="(max-width: 760px) 100vw, 50vw"/></div>)}
      <button className="carousel-arrow prev" type="button" onClick={() => select(active - 1)} aria-label="Ver ambiente anterior">‹</button>
      <button className="carousel-arrow next" type="button" onClick={() => select(active + 1)} aria-label="Ver próximo ambiente">›</button>
      <span className="carousel-counter" aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(clinicImages.length).padStart(2, "0")}</span>
    </div>
    <div className="clinic-carousel-dots" aria-label="Selecionar ambiente">{clinicImages.map(([, alt], index) => <button key={alt} type="button" className={index === active ? "active" : ""} onClick={() => select(index)} aria-label={`Ver imagem ${index + 1}: ${alt}`} aria-current={index === active ? "true" : undefined}/>)}</div>
  </div>;
}

function SpecialtiesCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % specialties.length), 4200);
    return () => window.clearInterval(timer);
  }, [paused]);

  const select = (index: number) => {
    setActive((index + specialties.length) % specialties.length);
    setPaused(true);
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) select(active + (distance < 0 ? 1 : -1));
    touchStart.current = null;
  };

  return <div className="specialty-carousel" aria-roledescription="carrossel" aria-label="Especialidades médicas" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="specialty-viewport" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={onTouchEnd}>
      <div className="specialty-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {specialties.map(([icon,title,text], index) => <article className="specialty-card specialty-slide" key={title} aria-hidden={index !== active}><span className="icon-wrap"><Icon name={icon}/></span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </div>
    <div className="specialty-controls">
      <button type="button" onClick={() => select(active - 1)} aria-label="Especialidade anterior">‹</button>
      <div className="specialty-dots" aria-label="Selecionar especialidade">{specialties.map(([, title], index) => <button key={title} type="button" className={index === active ? "active" : ""} onClick={() => select(index)} aria-label={`Ver ${title}`} aria-current={index === active ? "true" : undefined}/>)}</div>
      <button type="button" onClick={() => select(active + 1)} aria-label="Próxima especialidade">›</button>
    </div>
    <p className="swipe-hint">Deslize para ver as especialidades</p>
  </div>;
}

function Home() {
  return <>
    <Header/>
    <main>
      <section className="hero" id="inicio">
        <div className="hero-content">
          <span className="eyebrow">Atendimento particular · Clínica Liferty · Santos/SP</span>
          <h1>Mais de 25 Anos Dedicados à Medicina Fetal, com Precisão e Cuidado.</h1>
          <p><strong>Consultas e exames realizados pessoalmente pelo Dr. José Airton</strong>, em atendimento particular na Clínica Liferty.</p>
          <div className="hero-actions"><a className="button gold" href={whatsapp} target="_blank" rel="noreferrer">Agendar Consulta</a></div>
        </div>
        <div className="hero-photo"><Image src="/images/dr-jose-airton-retrato.png" alt="Retrato profissional do Dr. José Airton em ambiente de ultrassonografia" fill priority sizes="(max-width: 800px) 100vw, 48vw"/></div>
        <div className="hero-proof" aria-label="Experiência profissional"><div><strong>25+</strong><span>anos de experiência</span></div><div><strong>200.000+</strong><span>atendimentos</span></div><div><strong>2001</strong><span>início da trajetória</span></div><div><strong>Santos</strong><span>SP</span></div></div>
      </section>

      <section className="section about" id="sobre">
        <AboutCarousel/>
        <div className="about-copy"><SectionTitle kicker="Sobre o médico" title="Experiência, Responsabilidade e Cuidado"/><p><strong>Especialista em Ginecologia e Obstetrícia pela FEBRASGO/AMB</strong>, com atuação em <strong>Medicina Fetal e diagnóstico por imagem desde 2001</strong>. Já realizou <strong>mais de 200 mil atendimentos</strong>, acompanhando gestações de baixo e alto risco.</p><p><strong>Coordenador do Serviço de Medicina Fetal do Grupo Multi Imagem</strong> e pós-graduado em Ecocardiografia Fetal, une precisão técnica, escuta atenta e comunicação clara em cada atendimento particular realizado na Clínica Liferty.</p><div className="credential-grid" aria-label="Formação e registros profissionais"><span><small>Registro profissional</small><strong>CRM/SP 95.496</strong></span><span><small>Medicina Fetal</small><strong>RQE 295562</strong></span><span><small>Título de especialista</small><strong>FEBRASGO / AMB</strong></span><span><small>Formação complementar</small><strong>Ecocardiografia Fetal</strong></span></div></div>
      </section>

      <section className="specialties" id="especialidades"><div className="section"><SectionTitle kicker="Especialidades" title="Cuidado Especializado em Cada Fase da Gestação" text="Avaliações conduzidas com experiência, critério e atenção individualizada."/><div className="specialty-grid">{specialties.map(([icon,title,text]) => <article className="specialty-card" key={title}><span className="icon-wrap"><Icon name={icon}/></span><h3>{title}</h3><p>{text}</p></article>)}</div><SpecialtiesCarousel/></div></section>

      <section className="clinic" id="clinica">
        <ClinicCarousel/>
        <div className="clinic-copy"><SectionTitle kicker="Local de atendimento" title="Dr. José Airton na Clínica Liferty" light/><p>A Clínica Liferty é o local onde o Dr. José Airton realiza seus <strong>atendimentos particulares</strong>. No Praiamar Corporate, em Santos, o espaço oferece <strong>privacidade, conforto e tecnologia</strong> para as consultas e os exames conduzidos pelo próprio médico.</p><div className="feature-grid"><span>✓ Atendimento particular</span><span>✓ Realizado pelo Dr. Airton</span><span>✓ Ambiente acolhedor</span><span>✓ Tecnologia avançada</span></div><a className="button gold" href={maps} target="_blank" rel="noreferrer"><Icon name="pin"/> Como chegar</a></div>
      </section>

      <section className="technology" id="tecnologia">
        <div className="section technology-grid">
          <div className="technology-copy">
            <SectionTitle kicker="Tecnologia e precisão" title="Cada Detalhe Importa"/>
            <p><strong>Equipamentos avançados</strong> apoiam uma avaliação cuidadosa, precisa e atenta aos mínimos detalhes.</p>
            <p>As <strong>imagens em 8D</strong> aprimoram a visualização do bebê e complementam a experiência da família, sem substituir a avaliação médica.</p>
            <div className="technology-points"><span><Icon name="ultrasound"/> Tecnologia avançada</span><span><Icon name="care"/> Avaliação minuciosa</span><span><Icon name="baby"/> Imagens em 8D</span></div>
          </div>
          <TechnologyCarousel/>
        </div>
      </section>

      <section className="section faq" id="duvidas"><SectionTitle kicker="Dúvidas frequentes" title="Respostas Rápidas para o Seu Atendimento"/><div className="faq-list">{faq.map(([q,a], i) => <details key={q} open={i === 0}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>

      <section className="contact" id="contato"><div className="section contact-grid"><div className="contact-copy"><SectionTitle kicker="Atendimento particular" title="Agende com o Dr. José Airton" light/><p>Consulte horários e receba as orientações necessárias pelo WhatsApp. O <strong>atendimento é realizado pelo Dr. José Airton</strong> nas instalações da Clínica Liferty.</p><address><strong>Local do atendimento: Clínica Liferty</strong><br/>Alameda Armênio Mendes, 66<br/>Praiamar Corporate · Aparecida · Santos/SP<br/><br/><a href={whatsapp} target="_blank" rel="noreferrer">(13) 99786-7273</a></address><div className="contact-actions"><a className="button gold" href={whatsapp} target="_blank" rel="noreferrer"><SocialIcon name="whatsapp"/> WhatsApp</a><a className="button outline-light" href={instagram} target="_blank" rel="noreferrer"><SocialIcon name="instagram"/> Instagram</a><a className="text-map" href={maps} target="_blank" rel="noreferrer"><Icon name="pin"/> Abrir localização</a></div></div><div className="map"><iframe title="Mapa da Clínica Liferty em Santos" src="https://www.google.com/maps?q=Alameda%20Arm%C3%AAnio%20Mendes%2C%2066%2C%20Santos%2C%20SP&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></div></section>
    </main>
    <Footer/>
    <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Agendar consulta pelo WhatsApp"><SocialIcon name="whatsapp"/></a>
  </>;
}

function Footer() {
  return <footer><div className="footer-grid"><div className="footer-intro"><Logo/><p>Atendimento médico particular em Medicina Fetal e Ultrassonografia, realizado pelo Dr. José Airton na Clínica Liferty.</p><p className="footer-registration">CRM/SP 95.496 · RQE 295562</p></div><div><h3>Links rápidos</h3><a href="#sobre">Sobre</a><a href="#especialidades">Especialidades</a><a href="#clinica">Local de atendimento</a><a href="#duvidas">Dúvidas Frequentes</a></div><div><h3>Contato</h3><a href={whatsapp} target="_blank" rel="noreferrer">(13) 99786-7273</a><a href={instagram} target="_blank" rel="noreferrer">@ze_airton</a><a href={maps} target="_blank" rel="noreferrer">Abrir no Google Maps</a></div><div><h3>Local de atendimento</h3><p>Clínica Liferty<br/>Alameda Armênio Mendes, 66<br/>Praiamar Corporate · Aparecida<br/>Santos/SP</p></div></div><div className="footer-bottom"><span>© 2026 Dr. José Airton. Todos os direitos reservados.</span><span>Atendimento particular realizado pelo Dr. José Airton</span></div></footer>;
}

export function SitePage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/><Home/></>;
}
