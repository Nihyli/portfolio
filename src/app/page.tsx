import Image from "next/image";
import { profile } from "@/data/profile";
import { PortraitTilt } from "@/components/portrait-tilt";
import { ThemeToggle } from "@/components/theme-toggle";
import type { IconType } from "react-icons";
import {
  FaAws,
  FaCode,
  FaJava,
  FaJsSquare,
  FaLaptopCode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

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
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "News", href: "#news" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const nameParts = profile.name.split(/\s+/).filter(Boolean);
  const firstName = nameParts[0] ?? profile.name;
  const firstNameUpper = firstName.toUpperCase();
  const lastNameUpper = nameParts.slice(1).join(" ").toUpperCase();
  const { terminal } = profile;

  const techBuckets = [
    { label: "Languages", sublabel: "Typed // systems", items: profile.skills.languages },
    { label: "Frameworks", sublabel: "Ship // web", items: profile.skills.frameworks },
    {
      label: "Cloud & more",
      sublabel: "Runtime // edge",
      items:
        profile.skills.tools.length > 0
          ? profile.skills.tools
          : ["AWS Lambda", "PostgreSQL", "Prisma", "REST APIs"],
    },
  ];

  return (
    <main className="site-shell site-shell--terminal">
      <div className="background-grain" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-4 md:px-8 md:pt-6">
        <nav className="sticky top-0 z-50 -mx-4 mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-[--line] bg-[color-mix(in_oklch,var(--background)_92%,transparent)] px-4 py-4 backdrop-blur-md md:-mx-8 md:mb-14 md:px-8 md:py-5">
          <a
            href="#top"
            className="font-[family-name:var(--font-geist-mono)] text-[11px] font-bold uppercase tracking-[0.28em] text-[--foreground] transition hover:text-[--accent]"
          >
            {firstNameUpper}
          </a>
          <div className="flex flex-wrap items-center gap-3 md:gap-6">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[--muted] transition hover:text-[--accent] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center border-l border-[--line] pl-3 md:pl-5">
              <ThemeToggle />
            </div>
          </div>
        </nav>

        <header
          id="top"
          className="motion-rise grid gap-12 border-b border-[--line] pb-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-10 md:pb-24"
        >
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="inline-flex max-w-full flex-wrap items-center gap-3">
              <span className="terminal-protocol text-[--accent]">●</span>
              <span className="terminal-protocol">{profile.heroStatusLabel}</span>
              <span className="terminal-protocol text-[--line-strong]">//</span>
              <span className="terminal-protocol">{profile.location.toUpperCase()}</span>
            </div>

            <div>
              <p className="text-base font-medium text-[--foreground-soft] md:text-lg">{profile.heroGreeting}</p>
              <p className="terminal-protocol mt-3 text-[--muted]">I&apos;m</p>
              <h1 className="terminal-hero-name mt-1 font-[family-name:var(--font-bricolage)] leading-[0.92] text-[--foreground]">
                <span className="text-[--accent]">&lt;</span>
                {firstNameUpper}
                {lastNameUpper ? (
                  <>
                    <br />
                    <span>{lastNameUpper}</span>
                    <span className="text-[--accent]"> /&gt;</span>
                  </>
                ) : (
                  <span className="text-[--accent]"> /&gt;</span>
                )}
              </h1>
              <p className="mt-4 max-w-xl font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.16em] text-[--foreground-soft]">
                {profile.headline}
              </p>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-[--muted] md:text-lg">
              {profile.subheadline}
            </p>
            <p className="max-w-[65ch] text-sm leading-relaxed text-[--muted] md:text-base">
              {profile.intro}
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={profile.resumePath} target="_blank" rel="noreferrer" className="button-primary">
                {profile.heroCtaLabel}
              </a>
              <a href="#projects" className="button-secondary">
                {profile.projectsCtaLabel}
              </a>
            </div>

            <ul className="flex flex-wrap gap-2">
              {profile.focusAreas.map((focus) => (
                <li
                  key={focus}
                  className="border border-[--line] bg-[--surface-soft] px-3 py-1.5 font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.14em] text-[--foreground-soft]"
                >
                  {focus}
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-2 pt-1">
              {profile.hashTags.map((tag) => (
                <li
                  key={tag}
                  className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium tracking-wide text-[--accent]"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <a
              href="#about"
              className="group mt-4 inline-flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.28em] text-[--muted] transition hover:text-[--accent]"
            >
              Keep scrolling
              <span aria-hidden className="inline-block transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>

          <aside className="relative flex min-h-72 items-center justify-center md:min-h-[28rem]">
            <div className="tech-grid absolute inset-0 rounded-2xl opacity-40 md:rounded-3xl" aria-hidden />
            {profile.portraitSrc ? (
              <PortraitTilt
                src={profile.portraitSrc}
                alt={`${profile.name}, professional portrait`}
                sizes="(max-width: 768px) 90vw, 320px"
                priority
              />
            ) : (
              <div className="relative z-10 w-full max-w-[20rem] rounded-2xl border border-dashed border-[--line-strong] bg-[--surface-soft] p-8 text-center">
                <p className="terminal-protocol">{profile.photoPlaceholderLabel}</p>
              </div>
            )}
          </aside>
        </header>

        <section id="about" className="section-wrap motion-rise scroll-mt-28">
          <p className="code-brace-line">about () {"{"}</p>
          <div className="code-section-body">
            <div className="mb-12 md:mb-16">
              <h2 className="font-[family-name:var(--font-bricolage)] text-4xl font-bold uppercase tracking-tighter text-[--foreground] md:text-6xl">
                About
                <span className="text-[--accent]"> me</span>
              </h2>
              <p className="terminal-protocol mt-6 max-w-2xl">{terminal.aboutProtocol}</p>
            </div>

            <div
              id="education"
              className="mt-14 scroll-mt-28 border border-[--line] bg-[color-mix(in_oklch,var(--surface-soft)_90%,var(--accent)_10%)] p-6 md:p-8"
            >
              <h3 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold uppercase tracking-tight text-[--foreground]">
                Education
              </h3>
              <p className="terminal-protocol mt-2">Academic record // coursework</p>
              <ol className="mt-8 space-y-8">
                {profile.education.map((line, index) => (
                  <li
                    key={line}
                    className="border-b border-[--line] pb-8 last:border-b-0 last:pb-0"
                  >
                    <span className="font-[family-name:var(--font-geist-mono)] text-[10px] font-bold uppercase tracking-[0.24em] text-[--accent]">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <p className="mt-3 text-sm leading-relaxed text-[--foreground-soft] md:text-base">
                      {line}
                    </p>
                  </li>
                ))}
              </ol>
            </div>


          </div>
          <p className="code-brace-line">{"}"}</p>
        </section>

        <section id="experience" className="section-wrap motion-rise">
          <div className="mb-10 md:mb-12">
            <p className="terminal-protocol text-[--accent]">Experience</p>
            <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-4xl font-bold uppercase tracking-tighter text-[--foreground] md:text-5xl">
              Work history
            </h2>
            <p className="terminal-protocol mt-4 max-w-xl">Roles // Impact // Locations</p>
          </div>

          <p className="code-brace-line">experience () {"{"}</p>
          <div className="code-section-body">
            <div className="space-y-6 border-t border-[--line] pt-10">
              {profile.experience.map((item) => (
                <article
                  key={`${item.organization}-${item.role}`}
                  className="border border-[--line] bg-[--surface] p-5 md:p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-[family-name:var(--font-bricolage)] text-xl font-semibold text-[--foreground]">
                        {item.role}
                      </h3>
                      <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.14em] text-[--foreground-soft]">
                        {item.organization}
                      </p>
                    </div>
                    <div className="text-right font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[--muted]">
                      <p>{item.period}</p>
                      <p className="mt-1">{item.location}</p>
                    </div>
                  </div>
                  {item.impact ? (
                    <p className="mt-3 text-sm font-medium text-[--foreground-soft]">{item.impact}</p>
                  ) : null}
                  <ul className="mt-4 grid gap-2 text-sm text-[--muted]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[--accent]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <p className="code-brace-line">{"}"}</p>
        </section>

        <section id="news" className="section-wrap motion-rise">
          <div className="mb-10 md:mb-12">
            <p className="terminal-protocol text-[--accent]">Signals</p>
            <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-4xl font-bold uppercase tracking-tighter text-[--foreground] md:text-5xl">
              In the news
            </h2>
            <p className="terminal-protocol mt-4 max-w-xl">Media // Mentions // Public record</p>
          </div>

          <ul className="grid gap-6 md:grid-cols-2">
            {profile.news.map((item) => (
              <li key={item.url}>
                <article className="flex h-full flex-col overflow-hidden border border-[--line] bg-[--surface]">
                  <div className="relative aspect-[4/3] w-full shrink-0 bg-[--surface-soft]">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[--muted]">
                      {item.source} · {item.date}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-bricolage)] text-lg font-semibold leading-snug text-[--foreground] md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[--muted]">{item.summary}</p>
                    <p className="mt-5">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-[family-name:var(--font-geist-mono)] text-xs font-semibold uppercase tracking-[0.12em] text-[--accent] transition hover:underline"
                      >
                        {item.linkLabel}
                        <FiArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-wrap motion-rise" id="projects">
          <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="terminal-protocol text-[--accent]">Active projects</p>
              <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-4xl font-bold uppercase tracking-tighter text-[--foreground] md:text-5xl">
                Selected work
              </h2>
            </div>
            <p className="max-w-xs text-right font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-[--muted] md:text-left">
              {profile.projectsTagline}
            </p>
          </div>

          <p className="terminal-protocol mb-6 border-b border-[--line] pb-4">{terminal.systemLogLine}</p>

          <p className="code-brace-line">projects () {"{"}</p>
          <div className="code-section-body">
            <div className="grid gap-6 md:grid-cols-2">
              {profile.projects.map((project) => (
                <article key={project.name} className="project-card flex h-full flex-col">
                  <div className="min-h-0 flex-1">
                    <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.2em] text-[--accent]">
                      {project.period}
                    </p>
                    <h3 className="mt-4 font-[family-name:var(--font-bricolage)] text-2xl font-bold uppercase tracking-tight text-[--foreground] md:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.14em] text-[--foreground-soft]">
                      {project.role}
                    </p>
                    {project.repoUrl || project.proposalUrl ? (
                      <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.14em]">
                        {project.repoUrl ? (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[--accent] underline-offset-2 transition hover:underline"
                          >
                            Source code
                            <FiArrowUpRight className="h-3 w-3" aria-hidden />
                          </a>
                        ) : null}
                        {project.repoUrl && project.proposalUrl ? (
                          <span className="text-[--muted]" aria-hidden>
                            ·
                          </span>
                        ) : null}
                        {project.proposalUrl ? (
                          <a
                            href={project.proposalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[--accent] underline-offset-2 transition hover:underline"
                          >
                            {project.proposalLabel ?? "Write-up"}
                            <FiArrowUpRight className="h-3 w-3" aria-hidden />
                          </a>
                        ) : null}
                      </p>
                    ) : null}
                    <ul className="mt-5 mb-8 space-y-2 text-sm text-[--muted]">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[--accent]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto border-t border-[--line] pt-7">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="border border-[--line] bg-[--surface-soft] px-2 py-1 font-[family-name:var(--font-geist-mono)] text-[9px] font-semibold uppercase tracking-[0.12em] text-[--foreground-soft]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <p className="code-brace-line">{"}"}</p>
        </section>

        <section id="skills" className="section-wrap motion-rise">
          <div className="mb-10 md:mb-12">
            <p className="terminal-protocol text-[--accent]">{terminal.techStackEyebrow}</p>
            <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-4xl font-bold uppercase tracking-tighter text-[--foreground] md:text-5xl">
              {terminal.techStackTitle}
            </h2>
            <p className="terminal-protocol mt-4 max-w-xl">{terminal.techStackSub}</p>
            <p className="terminal-protocol mt-2 text-[--accent]">{terminal.operationalRegistry}</p>
            <p className="mt-6 max-w-2xl text-base text-[--muted]">{terminal.techIntro}</p>
          </div>

          <p className="code-brace-line">skills () {"{"}</p>
          <div className="code-section-body">
          <div className="border-t border-[--line] pt-10">
            <article className="stack-showcase">
              <p className="terminal-protocol text-[--accent]">Deep stack</p>
              <h3 className="mt-3 font-[family-name:var(--font-bricolage)] text-2xl font-bold uppercase tracking-tight text-[--foreground]">
                Tools I build with
              </h3>
              <ul className="stack-grid mt-8">
                {profile.stackShowcase.map((item) => {
                  const Icon = stackIcons[item.icon];
                  return (
                    <li key={item.name} className={`stack-tile stack-tile-${item.tone}`}>
                      <span className={`stack-icon stack-icon-${item.tone}`}>
                        {Icon ? <Icon aria-hidden className="h-5 w-5" /> : null}
                      </span>
                      <div>
                        <p className="font-[family-name:var(--font-bricolage)] text-lg font-semibold text-[--foreground]">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-[--muted]">{item.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          </div>

          <div className="mb-10 mt-10 grid gap-4 md:grid-cols-3">
            {techBuckets.map((bucket) => (
              <div key={bucket.label} className="border border-[--line] bg-[--surface] p-6">
                <p className="font-[family-name:var(--font-bricolage)] text-lg font-semibold uppercase tracking-tight text-[--foreground]">
                  {bucket.label}
                </p>
                <p className="terminal-protocol mt-2 text-[10px]">{bucket.sublabel}</p>
                <ul className="mt-5 space-y-2 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.12em] text-[--foreground-soft]">
                  {bucket.items.map((item) => (
                    <li key={item} className="border-b border-[--line] py-2 last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <article className="mt-10 border border-[--line] bg-[--surface] p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-bricolage)] text-lg font-semibold uppercase tracking-tight text-[--foreground]">
              Leadership & involvement
            </h3>
            <div className="mt-6 space-y-6">
              {profile.leadership.map((item) => (
                <div
                  key={`${item.organization}-${item.role}`}
                  className="border border-[--line] bg-[--surface-soft] p-4 md:p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 gap-y-1">
                    <div>
                      <p className="font-[family-name:var(--font-bricolage)] text-base font-semibold text-[--foreground]">
                        {item.organization}
                      </p>
                      <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.12em] text-[--foreground-soft]">
                        {item.role}
                        {item.location ? (
                          <>
                            <span className="text-[--line-strong]" aria-hidden>
                              {" "}
                              ·{" "}
                            </span>
                            {item.location}
                          </>
                        ) : null}
                      </p>
                    </div>
                    <p className="text-right font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.14em] text-[--muted]">
                      {item.period}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-[--muted]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[--accent]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="terminal-protocol mt-8 text-[--accent]">Also involved</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {profile.leadershipOther.map((label) => (
                <li
                  key={label}
                  className="border border-[--line] bg-[--surface-soft] px-3 py-2 font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.12em] text-[--foreground-soft]"
                >
                  {label}
                </li>
              ))}
            </ul>
          </article>
          </div>
          <p className="code-brace-line">{"}"}</p>
        </section>

        <section
          id="contact"
          className="relative mt-16 mb-12 overflow-hidden border border-[--line] bg-[--surface] px-5 py-12 md:mt-20 md:mb-16 md:px-10 md:py-14"
        >
          <div
            className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-[family-name:var(--font-bricolage)] text-[clamp(4rem,26vw,14rem)] font-bold leading-none text-[--foreground] opacity-[0.07]"
            aria-hidden
          >
            {profile.contactWatermark}
          </div>

          <p className="code-brace-line relative z-[1]">contact () {"{"}</p>
          <div className="code-section-body relative z-[1]">
            <p className="terminal-protocol text-[--accent]">{terminal.contactChapter}</p>
            <h2 className="mt-4 font-[family-name:var(--font-bricolage)] text-4xl font-bold uppercase tracking-tighter text-[--foreground] md:text-6xl">
              {profile.name.replace(/\s+/g, " ").toUpperCase()}
            </h2>
            <p className="terminal-protocol mt-4">{terminal.contactSubtitle}</p>
            <p className="mt-6 max-w-[60ch] text-base text-[--muted]">{profile.intro}</p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-[--foreground] transition-colors hover:text-[--accent] md:text-2xl"
            >
              {profile.email}
              <FiArrowUpRight
                aria-hidden
                className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="social-orbit"
                aria-label="GitHub profile"
              >
                <FiGithub className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-orbit"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin className="h-5 w-5" aria-hidden />
              </a>
              <a href={`mailto:${profile.email}`} className="social-orbit" aria-label="Send email">
                <FiMail className="h-5 w-5" aria-hidden />
              </a>
              <a href={`tel:${profile.phone}`} className="social-orbit" aria-label="Call phone number">
                <FiPhone className="h-5 w-5" aria-hidden />
              </a>
            </div>

            <div className="mt-8">
              <a href={profile.resumePath} target="_blank" rel="noreferrer" className="button-primary">
                {profile.heroCtaLabel}
              </a>
            </div>
          </div>
          <p className="code-brace-line relative z-[1] mt-4">{"}"}</p>
        </section>

        <footer className="flex flex-col gap-5 border-t border-[--line] pt-10 font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.24em] text-[--muted] md:flex-row md:flex-wrap md:items-center md:justify-between">
          <span>Lincoln, NE // USA</span>
          <span className="text-[--foreground-soft]">
            © {new Date().getFullYear()} {profile.name.replace(/\s+/g, "_")}
          </span>
          <p className="max-w-[52ch] text-[9px] font-normal normal-case leading-relaxed tracking-normal text-[--muted]">
            {profile.footerBuildLine}
          </p>
          <div className="flex flex-col gap-2 normal-case md:items-end">
            <span className="text-[9px] font-normal tracking-normal text-[--muted]">
              Layout and rhythm influenced by
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[9px] font-normal tracking-normal">
              <a
                className="text-[--muted] underline-offset-2 hover:text-[--accent] hover:underline"
                href="https://portfolio-site-git-main-akash-kumar5s-projects.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Akash Kumar
              </a>
              <span aria-hidden className="text-[--line-strong]">
                ·
              </span>
              <a
                className="text-[--muted] underline-offset-2 hover:text-[--accent] hover:underline"
                href="https://younes-megaache.com/"
                target="_blank"
                rel="noreferrer"
              >
                Younes Megaache
              </a>
              <span aria-hidden className="text-[--line-strong]">
                ·
              </span>
              <a
                className="text-[--muted] underline-offset-2 hover:text-[--accent] hover:underline"
                href="https://priya180975.github.io/portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                Priya Nayak
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
