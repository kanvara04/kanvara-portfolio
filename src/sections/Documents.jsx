import { documents } from "../data/site.js";
import { SectionHeader } from "../components/shared.jsx";

export default function Documents({ onOpenDocument }) {
  return (
    <section id="documents" className="scroll-mt-16 bg-canvas">
      <div className="page-shell py-20 sm:py-24 lg:py-28">
        <SectionHeader
          number="03"
          eyebrow="Continuous Learning"
          title="Certifications"
        />

        <div className="mt-12">
          {documents.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {documents.map((doc) => {
                const clickable = Boolean(doc.file);
                return (
                  <div
                    key={doc.id}
                    className="flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                  >
                    {doc.image && (
                      <div className="mb-6 flex h-[200px] items-center justify-center overflow-hidden rounded-xl border border-line bg-canvas p-4">
                        <img
                          src={doc.image}
                          alt={doc.title}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    )}

                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      {doc.number || "01"} · {doc.organization || "Certification"}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold leading-snug text-ink">
                      {doc.title}
                    </h3>

                    <div className="mt-auto pt-6">
                      <div className="space-y-1 text-sm text-muted">
                        {doc.issued && <p>Issued {doc.issued}</p>}
                        {doc.validUntil && <p>Valid until {doc.validUntil}</p>}
                        {doc.courseHours && <p>{doc.courseHours} completed</p>}
                      </div>

                      <div className="mt-5 border-t border-line pt-5">
                        <button
                          type="button"
                          disabled={!clickable}
                          onClick={() => clickable && onOpenDocument(doc.id)}
                          className={`group flex w-full items-center justify-between text-sm font-semibold transition-colors ${
                            clickable
                              ? "text-ink hover:text-charcoal"
                              : "cursor-not-allowed text-muted/60"
                          }`}
                        >
                          <span>{clickable ? "View certificate" : "Coming soon"}</span>
                          {clickable && (
                            <span className="text-lg leading-none transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                              ↗
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-line bg-surface p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal">
                Ready for future updates
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                ยังไม่มีข้อมูลใบรับรองหรือเอกสารที่ระบุไว้ จึงเว้นพื้นที่ส่วนนี้ไว้ก่อน
                เมื่อมีไฟล์ PDF พร้อมแล้ว สามารถเพิ่มรายการได้ที่ documents ใน
                src/data/site.js
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
