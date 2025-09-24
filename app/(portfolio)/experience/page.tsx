import { SectionCard } from "../components/section-card";

const experience = [
  {
    role: "Programmer",
    company: "PT. Rahim",
    period: "2023 — present",
    summary:
      "Pembuatan dan pengembangan aplikasi rumah sakit.",
  },
  {
    role: "UI/UX Designer",
    company: "Koala Creative",
    period: "2019 — 2022",
    summary:
      "Pembuatan UI / UX untuk aplikasi yang dikerjakan pada proyek.",
  },
  {
    role: "Visual Designer",
    company: "Royal Sport",
    period: "2019 — 2022",
    summary:
      "Menciptakan identitas brand, layout editorial berani, dan prototipe antarmuka taktil untuk berbagai klien kreatif.",
  },
  {
    role: "Guru",
    company: "SMK Gelora Bekasi",
    period: "2018 — 2021",
    summary:
      "Menjadi guru dibidang Teknik Komputer Jaringan",
  },
] as const;

export default function ExperiencePage() {
  return (
    <SectionCard
      accent="bottom-right"
      backgroundClass="bg-[#E2EDFF]"
      title="Pengalaman"
      lead="Linimasa tim dan produk yang membentuk perjalanan karier saya."
    >
      <div className="mt-6 space-y-4">
        {experience.map((item) => (
          <article
            key={[item.role, item.company].join("-")}
            className="rounded-2xl border-2 border-black bg-white p-5 shadow-[6px_6px_0_0_#1B1B1B]"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <h3 className="text-xl font-semibold">
                {item.role}{" "}
                <span className="text-base font-normal text-[#424242]">· {item.company}</span>
              </h3>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1B1B1B]">{item.period}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#2A2A2A]">{item.summary}</p>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}
