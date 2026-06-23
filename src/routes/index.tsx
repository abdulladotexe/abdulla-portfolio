import { createFileRoute } from "@tanstack/react-router";
import {
  Home as HomeIcon,
  FileText,
  Github,
  Linkedin,
  Twitter,
  Sun,
  ExternalLink,
  Mail,
  Calendar,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdulla — CSE Student & Developer" },
      {
        name: "description",
        content:
          "B.Tech CSE student at Amity University Bengaluru. Building web, AI, and embedded projects with JavaScript, C++, and Arduino.",
      },
      { property: "og:title", content: "Abdulla — CSE Student & Developer" },
      {
        property: "og:description",
        content:
          "B.Tech CSE student building web, AI, and embedded projects.",
      },
    ],
  }),
  component: Index,
});

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C++",
  "Python",
  "Node.js",
  "Tailwind CSS",
  "DSA",
  "Git / GitHub",
  "Arduino",
  "ESP32",
  "OpenCV",
];

const projects = [
  {
    name: "The Saviour",
    year: "2025",
    description:
      "A smart emergency response platform that cuts down response time and helps save lives. Enables quick accident reporting, shares the victim's real-time location, and alerts nearby hospitals and ambulances. Coordinates with traffic authorities to clear routes in advance so patients reach medical help as fast as possible.",
    tags: ["Google AI Studio", "Vibe Code", "Web"],
    source: "https://github.com/abdulladotexe/The_Saviours",
    website: "https://the-saviours.vercel.app/",
    gradient: "from-rose-200 via-red-200 to-orange-200",
  },
  {
    name: "Smart Inventory Management (RFID)",
    year: "2025",
    description:
      "An intelligent laboratory inventory solution combining RFID authentication, fingerprint verification, camera-based component recognition, and automated tracking to reduce component loss and streamline inventory management in electronics labs.",
    tags: [
      "ESP32",
      "Arduino UNO",
      "RFID",
      "Fingerprint",
      "Python",
      "OpenCV",
    ],
    source:
      "https://github.com/abdulladotexe/Smart-inventory-management-and-tracking-system-using-RFID",
    website:
      "https://drive.google.com/file/d/1PMtkif-VmU6Dj70rg6xsS_MEQpR1zsb_/view?usp=drivesdk",
    gradient: "from-sky-200 via-cyan-200 to-emerald-200",
  },
  {
    name: "WebLaser — Presentation Laser Pointer",
    year: "2025",
    description:
      "A Chrome extension that transforms the normal page cursor into an ultra-smooth, realistic presentation laser pointer with a trailing glow — perfect for demos, talks, and screen recordings.",
    tags: ["React", "TypeScript", "JavaScript", "CSS", "Chrome Extension"],
    source: "https://github.com/abdulladotexe/WebLaser",
    website:
      "https://chromewebstore.google.com/detail/gbdgdibkneciajlhbcmnamhpakgdciae?utm_source=item-share-cb",
    gradient: "from-indigo-200 via-purple-200 to-pink-200",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-neutral-900 px-2.5 py-1 text-xs font-medium text-white">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
      {children}
    </h2>
  );
}

function ExperienceRow({
  logo,
  title,
  role,
  date,
  href,
}: {
  logo: string;
  title: string;
  role: string;
  date: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-lg py-3 transition-colors hover:bg-neutral-50"
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
        style={{ background: logo }}
      >
        {title.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-semibold text-neutral-900">{title}</h3>
          <span className="shrink-0 text-sm text-neutral-500">{date}</span>
        </div>
        <p className="text-sm text-neutral-600">{role}</p>
      </div>
    </a>
  );
}

function Dock() {
  const items = [
    { icon: HomeIcon, label: "Home", href: "#top" },
    { icon: FileText, label: "Projects", href: "#projects" },
    { icon: Github, label: "GitHub", href: "https://github.com/abdulladotexe" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdulla-%E2%80%8E-0ba73b381/",
    },
    { icon: Twitter, label: "X", href: "https://x.com/abdullaships" },
  ];
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-md">
        {items.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-all hover:bg-neutral-100 hover:text-neutral-900 hover:scale-110"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <div className="mx-1 h-6 w-px bg-neutral-200" />
        <button
          aria-label="Toggle theme"
          className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-all hover:bg-neutral-100 hover:text-neutral-900"
        >
          <Sun className="h-5 w-5" />
        </button>
      </nav>
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-white text-neutral-900">
      <main className="mx-auto max-w-2xl px-6 pt-20 pb-40">
        {/* Hero */}
        <section className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-5xl font-bold tracking-tight leading-[1.05]">
              hi, abdulla here
            </h1>
            <p className="mt-4 text-base text-neutral-600">
              cse student & developer — building web, ai, and embedded
              projects. sharing on{" "}
              <a
                href="https://x.com/abdullaships"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-neutral-900"
              >
                X
              </a>
            </p>
          </div>
          <img
            src={portrait}
            alt="Abdulla"
            width={1024}
            height={1024}
            className="h-24 w-24 shrink-0 rounded-full object-cover ring-1 ring-neutral-200"
          />
        </section>

        {/* About */}
        <section className="mt-16">
          <SectionTitle>About</SectionTitle>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-600">
            <p>
              I'm a B.Tech Computer Science student at Amity University
              Bengaluru with a hands-on interest across the stack — from
              JavaScript and TypeScript on the web to C++, Python, and DSA on
              the fundamentals side.
            </p>
            <p>
              I like building things that solve real problems: emergency
              response platforms, smart lab inventory systems with RFID and
              computer vision, and small browser tools that make daily work
              nicer. Always exploring how AI and hardware can come together in
              useful ways.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mt-16">
          <SectionTitle>Education</SectionTitle>
          <div className="mt-4">
            <ExperienceRow
              logo="radial-gradient(circle at 30% 30%, #818cf8, #3730a3)"
              title="Amity University Bengaluru"
              role="B.Tech in Computer Science and Engineering"
              date="2025 - 2029"
              href="https://www.amity.edu/bengaluru/"
            />
          </div>
        </section>

        {/* Skills */}
        <section className="mt-16">
          <SectionTitle>Skills</SectionTitle>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-24 text-center">
          <span className="inline-flex items-center rounded-md bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
            My Projects
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight">
            Check out my latest work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-neutral-600">
            A mix of web, AI, and embedded systems — built solo and through
            hackathons. Here are a few of my favorites.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-md"
              >
                <a
                  href={p.website ?? p.source}
                  target="_blank"
                  rel="noreferrer"
                  className={`block aspect-[16/10] bg-gradient-to-br ${p.gradient}`}
                  aria-label={p.name}
                />
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <span className="shrink-0 text-sm text-neutral-500">
                      {p.year}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    {p.website && (
                      <a
                        href={p.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-neutral-800"
                      >
                        Live <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50"
                    >
                      Source <Github className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center">
          <span className="inline-flex items-center rounded-md bg-neutral-900 px-3 py-1 text-xs font-medium text-white">
            Get in touch
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight">
            Have an idea? Let's build it.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-neutral-600">
            Open to internships, freelance work, hackathon teams, and
            interesting collabs. If you've got an idea you want shipped, drop
            me a message.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:abdullaships@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              <Mail className="h-4 w-4" />
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/abdulla-%E2%80%8E-0ba73b381/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </a>
          </div>
          <p className="mt-6 text-xs text-neutral-400">
            <Calendar className="mr-1 inline h-3 w-3" />
            Based in Bengaluru · Available 2025 - 2029
          </p>
        </section>
      </main>

      <Dock />
    </div>
  );
}
