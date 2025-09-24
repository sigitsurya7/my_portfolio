"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

const navItems = [
  { label: "Beranda", href: "/home", note: "Semangat" },
  { label: "Karya", href: "/work", note: "Musium Seni" },
  { label: "Tentang", href: "/about", note: "Kenali Saya" },
  { label: "Pengalaman", href: "/experience", note: "Linimasa" },
] as const;

const focusAreas = [
  "Pengembangan Frontend",
  "Pengembangan Backend",
  "Pengembangan Aplikasi Mobile",
  "Integrasi API",
  "Pengujian dan Pemeliharaan",
] as const;

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("zee-theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme === "dark" ? "dark" : "light");
    window.localStorage.setItem("zee-theme", theme);
  }, [theme]);

  const activeItem = useMemo(
    () => navItems.find((item) => pathname.startsWith(item.href)),
    [pathname],
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const date = new Date();

  const mobileNavBase =
    "flex items-center justify-between rounded-2xl border-2 border-[var(--color-border)] px-4 py-3 text-base font-semibold uppercase tracking-[0.22em] shadow-[6px_6px_0_0_var(--color-shadow)] transition-transform duration-150 ease-out";
  const mobileNavActive = "bg-[var(--color-card)]";
  const mobileNavInactive =
    "bg-[var(--color-tag)] hover:-translate-x-1 hover:-translate-y-1";

  const sidebarNavBase =
    "flex items-center justify-between rounded-2xl border-2 border-[var(--color-border)] px-4 py-3 text-left text-base font-semibold uppercase tracking-[0.2em] transition-transform duration-150 ease-out";
  const sidebarNavActive = "bg-[var(--color-home)] shadow-[8px_8px_0_0_var(--color-shadow)]";
  const sidebarNavInactive =
    "bg-[var(--color-tag)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-shadow)]";

  return (
    <div className="relative min-h-svh overflow-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">
      <BackgroundDoodles />
      <div className="relative mx-auto flex min-h-svh w-full flex-col gap-6 px-4 pb-12 pt-5 sm:px-6 md:gap-8 lg:flex-row lg:px-10 xl:px-16">
        <header className="flex items-center justify-between rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 shadow-[6px_6px_0_0_var(--color-shadow)] sm:px-5 lg:hidden">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em]">Sigit Surya Aji Brata</p>
            <p className="text-sm font-medium">Web dan Mobile developer</p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggleButton theme={theme} onToggle={toggleTheme} variant="compact" />
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-highlight)] text-lg font-bold shadow-[4px_4px_0_0_var(--color-shadow)]"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </header>

        {isMenuOpen ? (
          <nav
            id="mobile-menu"
            className="fixed inset-3 z-50 flex flex-col gap-4 rounded-3xl border-4 border-[var(--color-border)] bg-[var(--color-highlight)] p-6 shadow-[16px_16px_0_0_var(--color-shadow)] lg:hidden"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">Navigate</p>
                <p className="text-lg font-semibold">Choose your vibe</p>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-card)] text-base font-bold shadow-[4px_4px_0_0_var(--color-shadow)]"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                const classes = [
                  mobileNavBase,
                  isActive ? mobileNavActive : mobileNavInactive,
                ].join(" ");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={classes}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-medium">{item.note}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        ) : null}

        <aside className="hidden w-full max-w-sm flex-shrink-0 flex-col gap-8 rounded-3xl border-4 border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[12px_12px_0_0_var(--color-shadow)] lg:sticky lg:top-10 lg:flex lg:h-fit">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-highlight)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
              Sigit Surya Aji Brata
            </span>
            <h1 className="text-3xl font-bold leading-tight sm:text-[34px]">
              Web dan Mobile developer
            </h1>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">
              Saya seorang programmer yang membangun solusi digital efisien, aman, dan scalable.
            </p>
          </div>

          <nav className="grid gap-3">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              const classes = [
                sidebarNavBase,
                isActive ? sidebarNavActive : sidebarNavInactive,
              ].join(" ");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={classes}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-medium">{item.note}</span>
                </Link>
              );
            })}
          </nav>

          <div className="rounded-2xl border-2 border-[var(--color-border)] bg-[var(--color-accent-blue)] p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-foreground)]">Focus</p>
            <ul className="mt-3 space-y-2 text-sm font-medium text-[var(--color-foreground)]">
              {focusAreas.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-2 shadow-[4px_4px_0_0_var(--color-shadow)]"
                >
                  <span className="text-lg">✹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="relative flex w-full flex-1 flex-col gap-6 pb-4 sm:gap-7 lg:gap-8">
          <div className="flex justify-between">
            <span className="inline-flex w-max rotate-[-2deg] items-center gap-2 self-start rounded-full border-2 border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] shadow-[6px_6px_0_0_var(--color-shadow)]">
              {activeItem ? "Sekarang anda di " + activeItem.label : "Explore"}
            </span>

            <div className="hidden lg:block">
              <ThemeToggleButton theme={theme} onToggle={toggleTheme} variant="compact" className="w-max" />
            </div>
          </div>
          <div className="flex-1">{children}</div>
          <footer className="mt-8 rounded-3xl border-4 border-[var(--color-border)] bg-[var(--color-highlight)] p-6 text-center shadow-[12px_12px_0_0_var(--color-shadow)]">
            <p className="text-lg font-semibold">Tersedia untuk kolaborasi baru di {date.getFullYear()}</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">Mari kita ciptakan sesuatu yang berani dan luar biasa bersama-sama.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

function BackgroundDoodles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 left-10 h-64 w-64 rotate-12 rounded-[45%] border-4 border-[var(--color-border)] bg-[var(--color-doodle-yellow)] opacity-70 blur-sm" />
      <div className="absolute bottom-[-80px] right-[-40px] h-72 w-72 rotate-[-8deg] rounded-[50%] border-4 border-[var(--color-border)] bg-[var(--color-doodle-pink)] opacity-70 blur-sm" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-12 border-4 border-[var(--color-border)] bg-[var(--color-doodle-blue)] opacity-60" />
    </div>
  );
}

function ThemeToggleButton({
  theme,
  onToggle,
  variant = "default",
  className,
}: {
  theme: Theme;
  onToggle: () => void;
  variant?: "default" | "compact";
  className?: string;
}) {
  const isDark = theme === "dark";
  const icon = isDark ? "🌙" : "☀️";
  const text = isDark ? "Dark" : "Light";
  const base =
    "inline-flex items-center rounded-xl border-2 border-[var(--color-border)] bg-[var(--color-card)] text-xs font-semibold uppercase tracking-[0.28em] shadow-[4px_4px_0_0_var(--color-shadow)] transition-transform duration-150 ease-out hover:-translate-x-1 hover:-translate-y-1";
  const size = variant === "compact" ? "px-3 py-2 gap-1.5" : "px-4 py-2 gap-2";
  const parts = [base, size];
  if (className) {
    parts.push(className);
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={parts.join(" ")}
    >
      <span aria-hidden className="text-base leading-none">
        {icon}
      </span>
      {variant === "compact" ? (
        <span className="sr-only">{text} mode</span>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}
