import { SectionCard } from "../components/section-card";

const traits = [
  "Sistem Pemrograman",
  "Clean Code",
  "Problem Solving",
  "Kolaborasi Tim",
] as const;

const programmerExtras = [
  {
    title: "Sumber Inspirasi",
    value: "Dokumentasi open source, komunitas developer, forum teknologi",
  },
  {
    title: "Eksperimen Saat Ini",
    value: "Membangun microservice sederhana dengan Node.js & Docker",
  },
] as const;

export default function AboutPage() {
  return (
    <SectionCard
      accent="top-left"
      backgroundClass="bg-[var(--color-about)]"
      title="Tentang"
      lead="Seorang programmer yang fokus pada pengembangan aplikasi fungsional, efisien, dan mudah digunakan."
    >
      <div className="mt-6 space-y-6 text-base leading-relaxed text-[var(--color-body)] sm:text-lg">
        <p>
          Selama beberapa tahun terakhir saya banyak mengerjakan berbagai proyek, mulai dari
          aplikasi web hingga mobile. Fokus saya ada pada membangun solusi digital dengan kode
          yang bersih, arsitektur yang jelas, serta pengalaman pengguna yang nyaman.
        </p>
        <p>
          Di luar pekerjaan utama, saya senang mengulik teknologi baru, menulis kode eksperimen,
          serta berkontribusi di komunitas developer. Saya percaya belajar berkelanjutan dan berbagi
          pengetahuan adalah bagian penting dari perjalanan seorang programmer.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {traits.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 shadow-[6px_6px_0_0_var(--color-shadow)]"
          >
            <span className="text-2xl">✶</span>
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {programmerExtras.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-card)] px-4 py-5 shadow-[6px_6px_0_0_var(--color-shadow)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-caption)]">{item.title}</p>
            <p className="mt-2 text-base font-semibold text-[var(--color-foreground)]">{item.value}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
