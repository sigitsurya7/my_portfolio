import { SectionCard } from "../components/section-card";

const projects = [
  {
    title: "Kwala Finance",
    description: "Aplikasi pencatatan keuangan berbasis Android",
    stack: "React Native & Expo Go + Sqlite (FE)",
  },
  {
    title: "Kwala Space",
    description: "Aplikasi pelacak suasana hati (mood tracker) berbasis Android",
    stack: "React Native & Expo Go + Sqlite (FE)",
  },
  {
    title: "Reblood",
    description: "Aplikasi donor darah berbasis website dan Android",
    stack: "React.js + API (FE)",
  },
  {
    title: "AHIS",
    description: "Aplikasi informasi rumah sakit",
    stack: "CodeIgniter 3 (Fullstack)",
  },
  {
    title: "Koala School",
    description: "Aplikasi sekolah berbasis website dan Android dengan integrasi IoT",
    stack: "PHP, React.js, Tailwind CSS, IoT",
  },
  {
    title: "Slip Gaji",
    description: "Aplikasi untuk membuat slip gaji berupa pdf yang akan di kirim melalui whatsapp",
    stack: "React.js, Tailwind CSS, NodeJs",
  },
] as const;

export default function WorkPage() {
  return (
    <SectionCard
      accent="top-right"
      backgroundClass="bg-[var(--color-work)]"
      title="Proyek"
      lead="Beberapa proyek yang saya kerjakan dengan fokus pada fungsionalitas, kehandalan, dan pengalaman pengguna."
    >
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex h-full flex-col gap-4 rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[8px_8px_0_0_var(--color-shadow)] transition-transform duration-150 ease-out hover:-translate-x-1.5 hover:-translate-y-1.5"
          >
            <span className="inline-flex w-max items-center gap-2 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-highlight)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              ⚡️ Sorotan
            </span>
            <h3 className="text-2xl font-semibold leading-tight">{project.title}</h3>
            <p className="text-sm leading-relaxed text-[var(--color-body)]">{project.description}</p>
            <div className="mt-auto flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground)]">
              <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-tag)] px-3 py-1">{project.stack}</span>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}
