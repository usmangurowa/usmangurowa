import type { CSSProperties } from "react";
import type { Job, LedgerItem } from "@/data/profile";

function Figure({ start, end }: { start: string; end?: string }) {
  return (
    <span className="row-figure">
      {start}
      {end ? <span className="to">{end}</span> : null}
    </span>
  );
}

export function WorkLedger({ jobs }: { jobs: readonly Job[] }) {
  return (
    <ul className="ledger">
      {jobs.map((job, i) => (
        <li key={job.company + job.start} className="row job" style={{ "--i": i } as CSSProperties}>
          <span className="row-name">
            <span>
              <span className="ink">{job.role}</span>,{" "}
              {job.href ? (
                <a href={job.href} target="_blank" rel="noopener">
                  {job.company}
                </a>
              ) : (
                job.company
              )}
            </span>
          </span>
          <span className="leader" aria-hidden="true" />
          <Figure start={job.start} end={job.end} />
          <span className="note">{job.note}</span>
          {job.tree ? (
            <ul className="tree">
              {job.tree.map((t) => (
                <li key={t.name}>
                  <b>{t.name}</b> {t.blurb}
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function Ledger({ items }: { items: readonly LedgerItem[] }) {
  return (
    <ul className="ledger">
      {items.map((it, i) => (
        <li
          key={it.name + it.start}
          className={it.note ? "row job" : "row"}
          style={{ "--i": i } as CSSProperties}
        >
          <span className="row-name">
            <span>
              <span className="ink">{it.name}</span>
              {it.detail ? (
                <>
                  ,{" "}
                  {it.href ? (
                    <a href={it.href} target="_blank" rel="noopener">
                      {it.detail}
                    </a>
                  ) : (
                    it.detail
                  )}
                </>
              ) : null}
            </span>
          </span>
          <span className="leader" aria-hidden="true" />
          <Figure start={it.start} end={it.end} />
          {it.note ? <span className="note">{it.note}</span> : null}
        </li>
      ))}
    </ul>
  );
}
