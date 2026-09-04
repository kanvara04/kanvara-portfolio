import { profile } from "../data/site.js";
import {
  ArrowIcon,
  DownloadIcon,
  LinkedInIcon,
  MailIcon,
} from "../components/icons.jsx";

function ContactCard({
  href,
  title,
  value,
  external = false,
  download = false,
  icon,
  featured = false,
}) {
  const CardTag = href ? "a" : "div";

  return (
    <CardTag
      href={href}
      target={external && href ? "_blank" : undefined}
      rel={external && href ? "noopener noreferrer" : undefined}
      download={download && href ? profile.cvFilename : undefined}
      className={`group interactive-card flex items-center gap-5 rounded-2xl border p-6 ${
        featured
          ? "border-accent bg-accent text-accentInk shadow-soft"
          : "border-line bg-surface text-ink"
      } ${href ? "cursor-pointer" : ""}`}
    >
      <span
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border ${
          featured
            ? "border-accentInk/15 bg-accentInk/10 text-accentInk"
            : "border-line bg-soft text-ink"
        }`}
      >
        {icon}
      </span>

      <span className="min-w-0 flex-1">
        <span
          className={`block text-xs font-semibold uppercase tracking-[0.16em] ${
            featured ? "text-accentInk/60" : "text-muted"
          }`}
        >
          {title}
        </span>
        <span
          className={`mt-1 block truncate text-base font-semibold ${
            featured ? "text-accentInk" : "text-ink"
          }`}
        >
          {value}
        </span>
      </span>

      {href && (
        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          {download ? <DownloadIcon className="h-5 w-5" /> : <ArrowIcon />}
        </span>
      )}
    </CardTag>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-canvas text-ink">
      <div className="page-shell py-20 sm:py-24 lg:py-32">
        <div className="grid gap-10 border-t border-line pt-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              05 / Contact
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Let&apos;s create something useful.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-muted">
              สามารถติดต่อเกี่ยวกับโอกาสฝึกงาน การร่วมพัฒนาโปรเจกต์ หรือสอบถามรายละเอียดเพิ่มเติมได้ผ่านช่องทางด้านข้าง
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ContactCard
              href={profile.cv}
              title="Curriculum Vitae"
              value="Download CV (PDF)"
              icon={<DownloadIcon />}
              download
              featured
            />
            <ContactCard
              href={`mailto:${profile.email}`}
              title="Email"
              value={profile.email}
              icon={<MailIcon />}
            />
            <ContactCard
              href={profile.linkedin}
              title="LinkedIn"
              value={profile.linkedinLabel}
              icon={<LinkedInIcon />}
              external
            />
            <ContactCard
              title="Location"
              value={profile.location}
              icon={<span className="text-sm font-bold">TH</span>}
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-line bg-surface px-6 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>Available for internship opportunities and project collaboration.</span>
          <a
            href={profile.cv}
            download={profile.cvFilename}
            className="inline-flex items-center gap-2 font-semibold text-ink transition-opacity hover:opacity-60"
          >
            Download CV
            <DownloadIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
