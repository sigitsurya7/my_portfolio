import Image from "next/image";
import Link from "next/link";
import { SectionCard } from "../components/section-card";

const programmerFacts = [
  { title: "Bahasa Favorit", value: "TypeScript + PHP" },
  { title: "Keahlian Utama", value: "Clean Code & Scalable Apps" },
  { title: "Sedang Belajar", value: "Cloud & DevOps" },
  { title: "Motivasi Akhir Pekan", value: "Ngulik Project Open Source" },
] as const;

export default function HomePage() {
  return (
    <SectionCard
      accent="bottom-left"
      backgroundClass="bg-[var(--color-home)]"
      title="Beranda"
      lead="Membangun pengalaman digital yang handal, efisien, dan mudah digunakan."
    >
      <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-stretch">
        <div className="flex flex-1 flex-col gap-6">
          <p className="max-w-3xl text-base leading-relaxed text-[var(--color-body)] sm:text-lg">
            Setiap proyek saya kerjakan dengan fokus pada arsitektur yang jelas, kode yang bersih,
            dan hasil yang fungsional. Dari perencanaan hingga produk siap pakai, saya menghubungkan
            strategi, desain, dan rekayasa perangkat lunak untuk menghasilkan solusi digital yang
            bernilai.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-border)] bg-[var(--color-highlight)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] shadow-[6px_6px_0_0_var(--color-shadow)] transition-transform duration-150 ease-out hover:-translate-x-1 hover:-translate-y-1"
            >
              Lihat Proyek ↗
            </Link>
            <a
              href="mailto:hello@zeedesign.studio"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] shadow-[6px_6px_0_0_var(--color-shadow)] transition-transform duration-150 ease-out hover:-translate-x-1 hover:-translate-y-1"
            >
              Ayo Berkolaborasi
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {programmerFacts.map((fact) => (
              <div
                key={fact.title}
                className="rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-card)] px-4 py-5 shadow-[6px_6px_0_0_var(--color-shadow)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-caption)]">
                  {fact.title}
                </p>
                <p className="mt-2 text-lg font-semibold">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
        <ProfileCard />
      </div>
    </SectionCard>
  );
}

function ProfileCard() {
  return (
    <div className="relative flex flex-1 justify-center lg:max-w-sm pb-10">
      <div className="relative w-full max-w-sm">
        <div className="absolute -top-10 -left-4 inline-flex items-center gap-2 rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-accent-blue)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] shadow-[6px_6px_0_0_var(--color-shadow)]">
          Programmer
        </div>
        <div className="absolute -bottom-18 right-2 inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-home)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] shadow-[6px_6px_0_0_var(--color-shadow)] max-[360px]:right-[-10px] max-[360px]:px-3">
          <span className="text-base">●</span>
          Tersedia untuk freelance
        </div>
        <div className="relative ml-4 sm:ml-6">
          <div
            aria-hidden
            className="absolute -top-3 -left-3 hidden h-full w-full sm:block"
          />
          <div className="relative rounded-[36px] border-4 border-[var(--color-border)] bg-[var(--color-accent-pink)] p-4 shadow-[12px_12px_0_0_var(--color-shadow)] sm:p-5">
            <div className="rounded-[28px] border-4 border-[var(--color-border)] bg-[var(--color-card)] p-3 sm:p-4">
              <Image
                src="/profile.jpeg"
                alt="Foto Profil"
                width={320}
                height={360}
                priority
                className="h-auto w-full max-w-[260px] sm:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
