import { profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";
import type { IconType } from "react-icons";
import {
  FaAws,
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaJsSquare,
  FaLaptopCode,
  FaPython,
  FaReact,
  FaTasks,
  FaTools,
  FaWindows,
} from "react-icons/fa";

export default function Home() {
  const stackIcons: Record<string, IconType> = {
    python: FaPython,
    java: FaJava,
    javascript: FaJsSquare,
    typescript: FaCode,
    csharp: FaCode,
    cplusplus: FaCode,
    react: FaReact,
    next: FaLaptopCode,
    lambda: FaAws,
    dynamodb: FaDatabase,
    mui: FaTools,
    git: FaGitAlt,
    vscode: FaLaptopCode,
    agile: FaTasks,
    microsoft: FaWindows,
  };

  const navItems = [
    { label: "Home", href: "#top" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="site-shell">
      <div className="background-grain" aria-hidden />
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-6 md:px-10 md:pb-24">
        <nav className="sticky top-4 z-30 mb-12 rounded-full border border-[--line] bg-[--surface]/90 px-3 py-2 backdrop-blur supports-[backdrop-filter]:bg-[--surface-soft]/70">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="brand-mark">
              YH
            </a>
            <div className="flex items-center gap-2">
              <ul className="flex flex-wrap items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-[--muted] md:gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-full px-3 py-1.5 transition hover:bg-[--surface] hover:text-[--ink] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              </ul>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        <header
          id="top"
          className="grid gap-10 border-b border-[--line] pb-16 motion-rise md:grid-cols-[1.2fr_0.8fr]"
        >
          <div className="space-y-6">
            <p className="eyebrow eyebrow-blue">
              {profile.location} - {profile.availability}
            </p>
            <h1 className="balance text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[--ink]">
              {profile.name}
            </h1>
            <p className="max-w-2xl text-[clamp(1.1rem,2.2vw,1.5rem)] font-medium text-[--ink-soft]">
              {profile.headline}
            </p>
            <p className="max-w-2xl text-base text-[--muted] md:text-lg">{profile.subheadline}</p>
            <p className="max-w-[65ch] text-base text-[--muted] md:text-lg">{profile.intro}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                {profile.heroCtaLabel}
              </a>
              <a href="#projects" className="button-secondary">
                {profile.projectsCtaLabel}
              </a>
            </div>

            <ul className="flex flex-wrap gap-2">
              {profile.focusAreas.map((focus) => (
                <li key={focus} className="chip">
                  {focus}
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative grid min-h-72 place-items-center rounded-3xl border border-[--line] bg-[--surface] p-6 md:min-h-96">
            <div className="tech-grid absolute inset-0 rounded-3xl" aria-hidden />
            <div className="relative z-10 mx-auto w-full max-w-[18rem] rounded-2xl border border-dashed border-[--line-strong] bg-[--surface-soft] p-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[--muted]">
                Portrait Placeholder
              </p>
              <p className="mt-4 text-lg font-medium text-[--ink-soft]">
                {profile.photoPlaceholderLabel}
              </p>
              <p className="mt-2 text-sm text-[--muted]">
                Drop your image into this block when ready.
              </p>
            </div>
          </aside>
        </header>

        <section className="section-wrap motion-rise" id="projects">
          <div className="section-heading">
            <p className="eyebrow eyebrow-violet">Featured Work</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[--ink] md:text-4xl">
              Projects that show engineering judgment.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {profile.projects.map((project) => (
              <article key={project.name} className="project-card">
                <p className="eyebrow eyebrow-violet">{project.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[--ink]">{project.name}</h3>
                <p className="mt-1 text-sm font-medium text-[--ink-soft]">{project.role}</p>
                <ul className="mt-5 space-y-2 text-sm text-[--muted]">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[--accent]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-[--ink-soft]">
                  <span className="font-semibold text-[--ink]">Tech:</span> {project.tech.join(", ")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-wrap motion-rise">
          <div className="section-heading">
            <p className="eyebrow eyebrow-emerald">Experience</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[--ink] md:text-4xl">
              Work grounded in outcomes and reliability.
            </h2>
          </div>

          <div className="space-y-5">
            {profile.experience.map((item) => (
              <article
                key={`${item.organization}-${item.role}`}
                className="rounded-2xl border border-[--line] bg-[--surface] p-5 md:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-[--ink]">{item.role}</h3>
                    <p className="text-sm font-medium text-[--ink-soft]">{item.organization}</p>
                  </div>
                  <div className="text-right text-xs font-medium uppercase tracking-[0.12em] text-[--muted]">
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                  </div>
                </div>
                {item.impact ? (
                  <p className="mt-3 text-sm font-medium text-[--ink-soft]">{item.impact}</p>
                ) : null}
                <ul className="mt-4 grid gap-2 text-sm text-[--muted]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[--accent]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-wrap motion-rise">
          <div className="section-heading">
            <p className="eyebrow eyebrow-orange">Capabilities</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[--ink] md:text-4xl">
              Technical stack and communities.
            </h2>
          </div>

          <article className="stack-showcase">
            <div className="mb-5">
              <p className="eyebrow eyebrow-emerald">Technical Stack</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[--ink]">
                Tools I actually build with
              </h3>
              <p className="mt-3 max-w-[70ch] text-[--muted]">
                These are the tools that show up consistently across coursework, shipped projects,
                and technical interests.
              </p>
            </div>

            <ul className="stack-grid">
              {profile.stackShowcase.map((item) => {
                const Icon = stackIcons[item.icon];

                return (
                  <li key={item.name} className={`stack-tile stack-tile-${item.tone}`}>
                    <span className={`stack-icon stack-icon-${item.tone}`}>
                      {Icon ? <Icon aria-hidden className="h-5 w-5" /> : null}
                    </span>
                    <div>
                      <p className="text-xl font-semibold text-[--ink]">{item.name}</p>
                      <p className="mt-1 text-sm text-[--muted]">{item.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-[--line] bg-[--surface] p-5">
              <h3 className="text-lg font-semibold text-[--ink]">Languages</h3>
              <p className="mt-3 text-sm text-[--muted]">{profile.skills.languages.join(", ")}</p>
            </article>
            <article className="rounded-2xl border border-[--line] bg-[--surface] p-5">
              <h3 className="text-lg font-semibold text-[--ink]">Frameworks</h3>
              <p className="mt-3 text-sm text-[--muted]">{profile.skills.frameworks.join(", ")}</p>
            </article>
            <article className="rounded-2xl border border-[--line] bg-[--surface] p-5">
              <h3 className="text-lg font-semibold text-[--ink]">Tools</h3>
              <p className="mt-3 text-sm text-[--muted]">{profile.skills.tools.join(", ")}</p>
            </article>
          </div>

          <article className="rounded-2xl border border-[--line] bg-[--surface] p-6">
            <h3 className="text-lg font-semibold text-[--ink]">Leadership and Involvement</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {profile.leadership.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[--line] bg-[--surface-soft] px-4 py-2 text-sm text-[--muted]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section
          id="contact"
          className="mt-16 rounded-3xl border border-[--line] bg-[--surface] px-6 py-10 md:mt-20 md:px-10"
        >
          <p className="eyebrow eyebrow-blue">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[--ink] md:text-4xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-4 max-w-[60ch] text-base text-[--muted]">
            I care about building software that performs well, reads clearly, and creates measurable
            user impact. If your team values those things, I would love to connect.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a href={`mailto:${profile.email}`} className="button-primary">
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="button-secondary">
              GitHub
            </a>
            <a href={`tel:${profile.phone}`} className="button-secondary">
              {profile.phone}
            </a>
          </div>
        </section>

        <footer className="pt-8 text-sm text-[--muted]">
          Built with Next.js - updated April 2026.
        </footer>
      </div>
    </main>
  );
}
