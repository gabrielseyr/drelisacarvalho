import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Award,
  Building2,
  MessageCircle,
  Ear,
  Heart,
  Lock,
  Baby,
  HeartPulse,
  Stethoscope,
  CalendarCheck,
  CircleDot,
  Users,
  Activity,
  Video,
  MapPin,
  Clock,
  Menu,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import logoFull from "@/assets/logo-full.png";
import draElisa from "@/assets/dra-elisa.jpg";
import c1 from "@/assets/consultorio-1.jpg";
import c2 from "@/assets/consultorio-2.jpg";
import c3 from "@/assets/consultorio-3.jpg";
import c4 from "@/assets/consultorio-4.jpg";
import c5 from "@/assets/consultorio-5.jpg";
import c6 from "@/assets/consultorio-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WA_MAIN = "https://wa.me/552141417099";
const WA_TELE = "https://wa.me/5521995640833";

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "atendimento", label: "Atendimento" },
  { id: "duvidas", label: "Dúvidas" },
  { id: "contato", label: "Contato" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in-section");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("fade-in-visible");
            io.unobserve(e.target);


          }
        }
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

function Header({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-cream/85 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a href="#inicio" className="flex items-center">
          <img src={logoFull} alt="Dra. Elisa Carvalho — Obstetra e Ginecologista" className="h-11 w-auto object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`text-sm transition-colors ${
                active === n.id
                  ? "text-terracotta"
                  : "text-foreground/70 hover:text-terracotta"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={WA_MAIN}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-forest px-4 py-2 text-sm text-cream hover:bg-forest/90 transition-colors"
        >
          Agendar consulta
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-forest"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-cream">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`text-sm py-1 ${
                  active === n.id ? "text-terracotta" : "text-foreground/80"
                }`}
              >
                {n.label}
              </a>
            ))}
            <a
              href={WA_MAIN}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-forest px-4 py-2 text-sm text-cream"
            >
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WA_MAIN}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] shadow-lg shadow-black/20 flex items-center justify-center hover:scale-105 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden>
        <path d="M19.11 17.28c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.63-.92-2.23-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.5 3.72 1.44 5.33L5 27l5.8-1.52a10.66 10.66 0 0 0 5.22 1.33h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.14-7.57a10.62 10.62 0 0 0-7.57-3.21zm0 19.55h-.01a8.88 8.88 0 0 1-4.52-1.24l-.32-.19-3.44.9.92-3.36-.21-.34a8.87 8.87 0 0 1-1.36-4.72c0-4.9 4-8.9 8.9-8.9 2.38 0 4.61.93 6.29 2.61a8.83 8.83 0 0 1 2.6 6.29c0 4.9-4 8.9-8.85 8.9z" />
      </svg>
    </a>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">


      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl fade-in-section">
          <span className="inline-block text-xs tracking-[0.2em] text-terracotta mb-6">
            BARRA DA TIJUCA · RIO DE JANEIRO
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-forest leading-[1.05]">
            Cuidando de você em cada fase da vida
          </h1>
          <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed">
            Acompanhamento obstétrico e ginecológico pensado para você se sentir
            ouvida, respeitada e em segurança desde o primeiro encontro.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WA_MAIN}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-forest px-6 py-3 text-sm text-cream hover:bg-forest/90 transition-colors"
            >
              Agendar consulta presencial
            </a>
            <a
              href="#sobre"
              className="rounded-full border border-forest/40 px-6 py-3 text-sm text-forest hover:bg-forest/5 transition-colors"
            >
              Conhecer a Dra. Elisa Carvalho
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-cream-dark/40">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center fade-in-section">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl text-forest">Sobre a Dra. Elisa</h2>
          <p className="mt-6 text-foreground/80 leading-relaxed">
            Acredito que toda paciente merece sair de uma consulta com a certeza
            de que foi ouvida e cuidada de verdade. Ao longo da minha trajetória,
            venho construindo um atendimento próximo, claro e humano — onde cada
            etapa e cada exame são explicados com atenção, sem pressa e sem
            julgamentos, e todas as decisões são tomadas de forma compartilhada.
            Meu compromisso é caminhar ao seu lado em cada momento, do início ao
            fim.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Dra. Elisa Carvalho — Obstetra e Ginecologista - CRM RJ 1213172 |
            RQE 59538
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-forest/10" aria-hidden />
            <img
              src={draElisa}
              alt="Dra. Elisa Carvalho"
              className="relative h-72 w-72 md:h-96 md:w-96 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Formacao() {
  const items = [
    {
      icon: GraduationCap,
      title: "Graduação",
      text: "Universidade Federal do Estado do Rio de Janeiro (UNIRIO)",
    },
    {
      icon: Award,
      title: "Residência médica",
      text: "Ginecologia e Obstetrícia — Hospital Federal de Ipanema / Hospital Universitário Gaffrée e Guinle",
    },
    {
      icon: Building2,
      title: "Atuação hospitalar",
      text: "Obstetra na Maternidade Escola da UFRJ (Laranjeiras) e na Maternidade Maria Amélia Buarque de Hollanda (Centro)",
    },
  ];
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 fade-in-section">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-forest">Formação e experiência</h2>
          <p className="mt-3 text-muted-foreground">
            Uma trajetória construída com cuidado técnico e humano.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl bg-card border border-border/60 p-6 flex gap-4 hover:shadow-md transition-shadow"
            >
              <div className="h-11 w-11 rounded-full bg-forest/10 text-forest flex items-center justify-center shrink-0">
                <it.icon size={22} />
              </div>
              <div>
                <h3 className="font-serif text-xl text-forest">{it.title}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Diferenciais() {
  const items = [
    {
      icon: MessageCircle,
      title: "Informação",
      text: "Cada etapa é explicada com clareza, para que a paciente compreenda os objetivos desde um exame até os próximos passos do seu acompanhamento. Acredito na informação como peça fundamental para que a paciente possa participar ativamente de todas as decisões e ser protagonista da sua história comigo.",
    },
    {
      icon: Ear,
      title: "Escuta ativa",
      text: "Suas dores e dúvidas são ouvidas com atenção total, sem pressa e sem julgamentos.",
    },
    {
      icon: Heart,
      title: "Acompanhamento",
      text: "Antes, durante e depois da consulta — se surgir uma dúvida ou uma urgência, você tem com quem falar.",
    },
    {
      icon: Lock,
      title: "Sigilo profissional",
      text: "Tudo o que é dito na consulta, fica na consulta. Você pode falar de tudo com segurança e sem medo.",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-cream-dark/40">
      <div className="mx-auto max-w-6xl px-6 fade-in-section">
        <h2 className="text-3xl md:text-4xl text-forest text-center max-w-xl mx-auto">
          Cuidando de você em cada etapa
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl bg-card border border-border/60 p-6 hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center">
                <it.icon size={20} />
              </div>
              <h3 className="mt-4 font-serif text-xl text-forest">{it.title}</h3>
              <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AreasAtuacao() {
  const areas = [
    { icon: Baby, label: "Consulta pré-concepcional e pré-natal" },
    { icon: HeartPulse, label: "Parto humanizado" },
    { icon: Stethoscope, label: "Consulta e acompanhamento da saúde ginecológica" },
    { icon: CalendarCheck, label: "Tratamento de queixas vulvares e vaginais" },
    { icon: CircleDot, label: "Inserção e retirada de DIU" },
    { icon: Users, label: "Planejamento familiar e reprodutivo" },
    { icon: Activity, label: "Tratamento de SOMP (antiga SOP)" },
    { icon: Video, label: "Acompanhamento na menopausa e perimenopausa" },
  ];
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 fade-in-section">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-forest">Áreas de atuação</h2>
          <p className="mt-3 text-muted-foreground">
            Cuidado completo em ginecologia e obstetrícia, em cada fase da sua vida.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map((a) => (
            <div
              key={a.label}
              className="rounded-xl border border-border/60 bg-card p-5 flex flex-col items-center text-center gap-3 hover:border-terracotta/40 hover:-translate-y-0.5 transition-all"
            >
              <div className="h-11 w-11 rounded-full bg-forest/10 text-forest flex items-center justify-center">
                <a.icon size={22} />
              </div>
              <span className="text-sm text-foreground/85">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Jornada() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Primeiro contato",
      text: "Você entra em contato pelo WhatsApp para tirar dúvidas iniciais sobre marcação de consulta presencial ou online.",
    },
    {
      icon: Stethoscope,
      title: "Consulta",
      text: "Um espaço de escuta, sem pressa, para entender sua queixa ou acompanhar sua gestação.",
    },
    {
      icon: Heart,
      title: "Acompanhamento contínuo",
      text: "Você segue com suporte para dúvidas e próximos passos, sempre que precisar.",
    },
  ];
  return (
    <section className="py-20 md:py-28 bg-cream-dark/40">
      <div className="mx-auto max-w-6xl px-6 fade-in-section">
        <h2 className="text-3xl md:text-4xl text-forest text-center max-w-2xl mx-auto">
          Como é o seu cuidado, em cada etapa
        </h2>
        <div className="relative mt-14 grid md:grid-cols-3 gap-10 md:gap-6">
          <div
            className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-forest/25"
            aria-hidden
          />
          {steps.map((s, i) => (
            <div key={s.title} className="relative flex flex-col items-center text-center">
              <div className="relative h-12 w-12 rounded-full bg-forest text-cream flex items-center justify-center font-serif text-lg">
                {i + 1}
              </div>
              <div className="mt-4 flex items-center gap-2 text-terracotta">
                <s.icon size={18} />
                <h3 className="font-serif text-xl text-forest">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-foreground/75 max-w-xs leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParaQuem() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center fade-in-section">
        <h2 className="text-3xl md:text-4xl text-forest">
          Um cuidado pensado para cada momento da sua jornada
        </h2>
        <p className="mt-6 text-foreground/75 leading-relaxed">
          Se você está vivendo a expectativa de uma gestação, ou busca um
          acompanhamento ginecológico onde se sinta verdadeiramente ouvida — este
          é um espaço para você. Aqui, cada etapa é explicada com calma, e cada
          pergunta encontra espaço para ser feita sem receio.
        </p>
      </div>
    </section>
  );
}

function Atendimento() {
  return (
    <section id="atendimento" className="py-20 md:py-28 bg-cream-dark/40">
      <div className="mx-auto max-w-6xl px-6 fade-in-section">
        <h2 className="text-3xl md:text-4xl text-forest text-center">
          Como funciona o atendimento
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-card border border-border/60 p-8 flex flex-col">
            <Stethoscope className="text-forest" size={26} />
            <h3 className="mt-4 font-serif text-2xl text-forest">Consulta presencial</h3>
            <p className="mt-3 text-foreground/75 leading-relaxed flex-1">
              No espaço do Consultório Eva, na Barra da Tijuca. Para acompanhamento
              completo, exames e conversas mais longas.
            </p>
            <a
              href={WA_MAIN}
              target="_blank"
              rel="noreferrer"
              className="mt-6 self-start rounded-full bg-forest px-5 py-2.5 text-sm text-cream hover:bg-forest/90 transition-colors"
            >
              Agendar presencial
            </a>
          </div>
          <div className="rounded-2xl bg-card border border-border/60 p-8 flex flex-col">
            <Video className="text-forest" size={26} />
            <h3 className="mt-4 font-serif text-2xl text-forest">Teleconsulta</h3>
            <p className="mt-3 text-foreground/75 leading-relaxed flex-1">
              Para uma primeira conversa, esclarecimento de dúvidas ou orientações
              — do conforto da sua casa.
            </p>
            <a
              href={WA_TELE}
              target="_blank"
              rel="noreferrer"
              className="mt-6 self-start rounded-full bg-forest px-5 py-2.5 text-sm text-cream hover:bg-forest/90 transition-colors"
            >
              Agendar teleconsulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Com que frequência devo ir ao ginecologista/obstetra?",
      a: "De forma geral, uma consulta anual é recomendada para acompanhamento ginecológico preventivo. Durante a gestação, o intervalo é definido de forma individual, de acordo com o risco gestacional. Na primeira consulta, definimos juntas o que faz mais sentido para o seu momento.",
    },
    {
      q: "A consulta é dolorosa?",
      a: "O exame ginecológico pode causar um leve desconforto, mas não deve ser doloroso. Se em algum momento você sentir dor, me avise — o ritmo da consulta se adapta a você.",
    },
    {
      q: "Posso levar acompanhante?",
      a: "Sim, você pode levar um acompanhante de sua confiança em todas as consultas, se isso te deixar mais à vontade. Inclusive, incentivo a presença da parceria nas consultas de pré-natal para que todas as dúvidas do casal sobre a gestação possam ser elucidadas.",
    },
    {
      q: "Como funciona o agendamento?",
      a: "Você pode agendar diretamente pelo WhatsApp do consultório ou pelo número profissional da Dra. Elisa. Também é possível marcar uma primeira conversa por teleconsulta para tirar dúvidas antes da consulta presencial.",
    },
    {
      q: "O consultório atende convênio?",
      a: "O atendimento na Barra da Tijuca é particular. Consultas pelo convênio são realizadas em uma unidade separada, em Copacabana. Você pode tirar suas dúvidas pelo WhatsApp da Dra. Elisa, porém a marcação de consulta nessa modalidade deverá ser feita diretamente pela paciente no site da clínica.",
    },
  ];
  return (
    <section id="duvidas" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 fade-in-section">
        <h2 className="text-3xl md:text-4xl text-forest text-center">Dúvidas frequentes</h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i${i}`} className="border-border/70">
              <AccordionTrigger className="text-left font-serif text-lg text-forest hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/75 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="py-20 md:py-24 bg-forest">
      <div className="mx-auto max-w-3xl px-6 text-center fade-in-section">
        <h2 className="text-3xl md:text-4xl text-cream">
          Vamos cuidar de você em cada etapa?
        </h2>
        <p className="mt-5 text-cream/85 leading-relaxed">
          Agende sua consulta e comece um acompanhamento pensado para o seu
          momento — com escuta, clareza e cuidado real.
        </p>
        <a
          href={WA_MAIN}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-cream px-7 py-3.5 text-sm text-forest hover:bg-cream/90 transition-colors"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

function Contato() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const photos = [c1, c2, c3, c4, c5, c6];

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="contato" className="py-20 md:py-28 bg-cream-dark/40">
      <div className="mx-auto max-w-6xl px-6 fade-in-section">
        <h2 className="text-3xl md:text-4xl text-forest text-center">Venha nos conhecer</h2>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {photos.map((src, i) => (
                  <CarouselItem key={i}>
                    <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
                      <img
                        src={src}
                        alt={`Consultório ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-forest/30 text-forest" />
              <CarouselNext className="border-forest/30 text-forest" />
            </Carousel>
            <div className="mt-4 flex justify-center gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  aria-label={`Ir para foto ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    current === i ? "w-6 bg-forest" : "w-2 bg-forest/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex gap-3">
              <MapPin className="text-terracotta shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-serif text-xl text-forest">Endereço</h3>
                <p className="mt-1 text-foreground/80 leading-relaxed">
                  Avenida João Cabral de Mello Neto, 850, Sala 303
                  <br />
                  Barra da Tijuca, Rio de Janeiro — RJ
                  <br />
                  CEP 22775-057
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Clock className="text-terracotta shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-serif text-xl text-forest">Horários</h3>
                <ul className="mt-1 text-foreground/80 space-y-1">
                  <li>Terça e sexta: 13h às 18h</li>
                  <li>Quarta: 8h às 18h</li>
                  <li>Sábado: 8h às 12h</li>
                  <li className="text-muted-foreground">
                    Segunda, quinta e domingo: fechado
                  </li>
                </ul>
              </div>
            </div>

            <a
              href={WA_MAIN}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 text-sm text-cream hover:bg-forest/90 transition-colors"
            >
              Falar no WhatsApp
            </a>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border/60">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps?q=Avenida+Jo%C3%A3o+Cabral+de+Mello+Neto+850+Barra+da+Tijuca+Rio+de+Janeiro&output=embed"
                className="w-full h-64"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <img src={logoFull} alt="Dra. Elisa Carvalho — Obstetra e Ginecologista" className="h-9 w-auto object-contain" />
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Dra. Elisa Carvalho — Obstetra e Ginecologista — CRM RJ 1213172 · RQE 59538
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  const active = useActiveSection();
  return (
    <div className="min-h-screen bg-background">
      <Header active={active} />
      <main>
        <Hero />
        <Sobre />
        <Formacao />
        <Diferenciais />
        <AreasAtuacao />
        <Jornada />
        <ParaQuem />
        <Atendimento />
        <FAQ />
        <CTAFinal />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
