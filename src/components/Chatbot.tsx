import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { IoClose, IoSend } from "react-icons/io5";
import { TbMessageChatbot, TbArrowsMaximize, TbArrowsMinimize } from "react-icons/tb";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  id: number;
  from: "bot" | "user";
  text: string;
  quickReplies?: string[];
  link?: { label: string; path: string };
  timestamp: Date;
}

type ResponseEntry = {
  keywords: string[];
  response: string;
  quickReplies?: string[];
  link?: { label: string; path: string };
};

// ─── Smart Message Renderer ──────────────────────────────────────────────────
// Plain number markers — longest first so "10." is matched before "1."
const NUMBER_EMOJIS = ["10.", "1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9."];

// Normalise a line: convert emoji numbers OR "1. " / "1) " style to plain "N. " format
const EMOJI_TO_NUM: [string, number][] = [
  ["🔟", 10], ["1️⃣", 1], ["2️⃣", 2], ["3️⃣", 3], ["4️⃣", 4],
  ["5️⃣", 5], ["6️⃣", 6], ["7️⃣", 7], ["8️⃣", 8], ["9️⃣", 9],
];
function normalizeLine(line: string): string {
  const trimmed = line.trimStart();
  for (const [em, num] of EMOJI_TO_NUM) {
    if (trimmed.startsWith(em)) {
      return num + ". " + trimmed.slice(em.length).trim();
    }
  }
  const m = line.match(/^(\s*)(\d+)[.)\s]\s*(.*)$/);
  if (m) {
    const num = parseInt(m[2], 10);
    if (num >= 1 && num <= 15) return num + ". " + m[3];
  }
  return line;
}

// ─── Project → Google Maps URL lookup ──────────────────────────────────────────
const PROJECT_MAP_LINKS: Record<string, string> = {
  // Residential
  "shilp residency":    "https://www.google.com/maps/search/?api=1&query=Shilp+Residency+Gota+Ahmedabad",
  "northsky":           "https://www.google.com/maps/search/?api=1&query=Northsky+GIFT+City+SEZ+Gandhinagar",
  "shilp celestial":    "https://www.google.com/maps/search/?api=1&query=Shilp+Celestial+Vaishnodevi+Circle+Ahmedabad",
  "skyline":            "https://www.google.com/maps/search/?api=1&query=Skyline+Adani+Shantigram+Ahmedabad",
  "shilp paradise":     "https://www.google.com/maps/search/?api=1&query=Shilp+Paradise+Sindhu+Bhavan+Road+Ahmedabad",
  "shilp serene":       "https://www.google.com/maps/search/?api=1&query=Shilp+Serene+Shilaj+Ahmedabad",
  "revanta":            "https://www.google.com/maps/search/?api=1&query=Revanta+Shela+Ahmedabad",
  // Commercial
  "centrica":           "https://www.google.com/maps/search/?api=1&query=Shilp+Centrica+GIFT+City+Gandhinagar",
  "business gateway":   "https://www.google.com/maps/search/?api=1&query=Business+Gateway+Vaishnodevi+Circle+Ahmedabad",
  "twin tower":         "https://www.google.com/maps/search/?api=1&query=Shilp+Twin+Tower+GIFT+City+SEZ+Gandhinagar",
  "shilp sacred":       "https://www.google.com/maps/search/?api=1&query=Shilp+Sacred+Iskon+Ambli+Ahmedabad",
  "shilp one":          "https://www.google.com/maps/search/?api=1&query=Shilp+One+Shilaj+Circle+Ahmedabad",
  // Industrial / Plots
  "industrial park":    "https://www.google.com/maps/search/?api=1&query=Industrial+Park+Charodi+Ahmedabad",
  "shilp olives":       "https://www.google.com/maps/search/?api=1&query=Shilp+Olives+Sanand+Nalsarovar+Road+Ahmedabad",
  // Head Office
  "head office":        "https://www.google.com/maps/search/?api=1&query=Shilp+House+Rajpath+Rangoli+Road+Bodakdev+Ahmedabad",
};

function getProjectMapUrl(title: string): string | null {
  const key = title.toLowerCase().trim();
  for (const [k, url] of Object.entries(PROJECT_MAP_LINKS)) {
    if (key.includes(k)) return url;
  }
  return null;
}

// ─── URL & Map Link Renderer ──────────────────────────────────────────────────
function getMapLabel(url: string): string {
  try {
    const q = new URL(url).searchParams.get("query") ?? "";
    // Return human-readable label from query param
    return q.replace(/\+/g, " ").trim() || "View on Map";
  } catch {
    return "View on Map";
  }
}

function renderTextWithLinks(text: string): React.ReactNode {
  // Match http/https URLs
  const URL_REGEX = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(URL_REGEX);

  return (
    <>
      {parts.map((part, idx) => {
        if (URL_REGEX.test(part)) {
          URL_REGEX.lastIndex = 0; // reset regex state
          const isMap = part.includes("google.com/maps");
          const label = isMap ? getMapLabel(part) : part;
          return isMap ? (
            <a
              key={idx}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                background: "#0a0a0a",
                color: "#fff",
                fontSize: "11px",
                fontWeight: 600,
                padding: "5px 12px 5px 9px",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.01em",
                margin: "3px 2px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.22)",
                border: "1px solid rgba(255,255,255,0.07)",
                verticalAlign: "middle",
                lineHeight: 1.3,
                transition: "opacity 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              <span style={{ fontSize: "13px" }}>📍</span> {label} <span style={{ fontSize: "10px", opacity: 0.5 }}>↗</span>
            </a>
          ) : (
            <a
              key={idx}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f97316", textDecoration: "underline", wordBreak: "break-all" }}
            >
              {part}
            </a>
          );
        }
        // Plain text — preserve newlines
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </>
  );
}

function renderBotText(text: string): React.ReactNode {
  // Strip markdown bold (**text**) and headers (## text)
  const cleaned = text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/^#{1,3}\s+/gm, "");

  const lines = cleaned.split("\n").map(normalizeLine);

  // Detect if this message has project rows (lines starting with number emojis)
  const hasCards = lines.some(l => NUMBER_EMOJIS.some(n => l.trimStart().startsWith(n)));

  if (!hasCards) {
    return <span className="whitespace-pre-wrap">{renderTextWithLinks(cleaned)}</span>;
  }

  // Parse into segments: header text, then project table rows
  type TableRow = {
    num: string;
    title: string;
    location: string;
    specs: { label: string; price?: string }[];
    possession: string;
    ready: boolean;
  };

  type Segment =
    | { type: "text"; content: string }
    | { type: "table"; rows: TableRow[] };

  const segments: Segment[] = [];
  let currentText: string[] = [];
  let currentTableRows: TableRow[] = [];

  function flushText() {
    const t = currentText.join("\n").trim();
    if (t) segments.push({ type: "text", content: t });
    currentText = [];
  }
  function flushTable() {
    if (currentTableRows.length > 0) {
      segments.push({ type: "table", rows: [...currentTableRows] });
      currentTableRows = [];
    }
  }

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const matchedNum = NUMBER_EMOJIS.find(n => line.trimStart().startsWith(n));

    if (matchedNum) {
      flushText();

      // Strip any inline URLs from the raw line before parsing
      const rawPart = line.replace(matchedNum, "").replace(/https?:\/\/[^\s]*/g, "").trim();
      // Also remove trailing ": " or "— " that may be left after URL removal
      const headerPart = rawPart.replace(/[:\-–—]\s*$/, "").trim();

      const emDash = headerPart.indexOf("\u2014");
      const enDash = headerPart.indexOf("\u2013");
      // Also treat " - " (hyphen surrounded by spaces) as a separator
      const hyphenDash = headerPart.indexOf(" - ");
      const dashIdx = emDash >= 0 ? emDash : enDash >= 0 ? enDash : hyphenDash;
      const firstPipeIdx = headerPart.indexOf("|");

      // Extract clean title (everything before first dash/pipe)
      let rawTitle = dashIdx >= 0
        ? headerPart.slice(0, dashIdx).trim()
        : firstPipeIdx >= 0 ? headerPart.slice(0, firstPipeIdx).trim()
        : headerPart.trim();
      // Remove any "(Location)" parenthetical from title
      rawTitle = rawTitle.replace(/\s*\([^)]*\)\s*$/, "").trim();
      const title = rawTitle;

      // Extract location from after the dash
      let rawLocation = dashIdx >= 0
        ? headerPart.slice(dashIdx + (hyphenDash >= 0 && dashIdx === hyphenDash ? 3 : 1)).split("|")[0].trim()
        : "";
      // Strip any leftover URL fragments from location
      rawLocation = rawLocation.replace(/https?:\/\/[^\s]*/g, "").replace(/[:\-]\s*$/, "").trim();
      const location = rawLocation;

      const specs: { label: string; price?: string }[] = [];
      let possession = "";
      let rowReady = false;

      if (firstPipeIdx >= 0) {
        const pipeParts = headerPart.split("|").map(p => p.trim());
        for (let pi = 1; pi < pipeParts.length; pi++) {
          const part = pipeParts[pi];
          if (!part) continue;
          if (/ready/i.test(part) || part.includes("\u2705")) {
            rowReady = true;
          } else if (/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s+\d{4}/i.test(part)) {
            possession = part;
          } else {
            const specList = part.split(",").map(s => s.trim()).filter(Boolean);
            for (const spec of specList) {
              const rupeeIdx = spec.indexOf("\u20b9");
              if (rupeeIdx >= 0) {
                specs.push({ label: spec.slice(0, rupeeIdx).trim(), price: spec.slice(rupeeIdx).trim() });
              } else if (spec) {
                specs.push({ label: spec });
              }
            }
          }
        }
      }

      i++;
      while (i < lines.length) {
        const inner = lines[i];
        if (NUMBER_EMOJIS.some(n => inner.trimStart().startsWith(n))) break;
        if (inner.trim() === "" && specs.length > 0) { i++; break; }

        if (inner.includes("📐")) {
          const c2 = inner.replace("📐", "").trim();
          const arrowIdx = c2.indexOf("→");
          if (arrowIdx >= 0) {
            specs.push({ label: c2.slice(0, arrowIdx).trim(), price: c2.slice(arrowIdx + 1).trim() });
          } else {
            specs.push({ label: c2 });
          }
        } else if (inner.includes("📅")) {
          const c2 = inner.replace("📅", "").replace("Possession:", "").trim();
          if (c2.toLowerCase().includes("ready")) { rowReady = true; }
          else { possession = c2.replace("✅", "").trim(); }
        } else if (inner.includes("Ready ✅") || inner.includes("✅ Ready")) {
          rowReady = true;
        }
        i++;
      }

      currentTableRows.push({ num: matchedNum, title, location, specs, possession, ready: rowReady });
    } else {
      // If we hit non-card text after cards, flush the table first
      if (currentTableRows.length > 0 && line.trim() !== "") {
        flushTable();
      }
      currentText.push(line);
      i++;
    }
  }

  flushText();
  flushTable();

  return (
    <div className="space-y-2.5">
      {segments.map((seg, si) => {
        if (seg.type === "text") {
          return (
            <p key={si} className="whitespace-pre-wrap text-[13px] leading-relaxed" style={{ color: "#222" }}>
              {renderTextWithLinks(seg.content)}
            </p>
          );
        }

        // ── Project Table ──
        return (
          <div key={si} style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.1)", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "11.5px", minWidth: "480px" }}>
              <thead>
                <tr style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #1e1e1e 100%)" }}>
                  {["#", "Project", "📍 Location", "Size & Type", "Price", "Status"].map((h, hi) => (
                    <th
                      key={hi}
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 700,
                        fontSize: "9.5px",
                        letterSpacing: "0.09em",
                        textTransform: "uppercase",
                        padding: "8px 10px",
                        textAlign: "left",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seg.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    style={{
                      background: ri % 2 === 0 ? "#ffffff" : "#f8f8f8",
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                      transition: "background 0.15s",
                    }}
                  >
                    {/* # */}
                    <td style={{ padding: "7px 10px", fontSize: "11.5px", fontWeight: 700, color: "#555", whiteSpace: "nowrap" }}>
                      {ri + 1}
                    </td>
                    {/* Project */}
                    <td style={{ padding: "7px 10px", fontWeight: 700, color: "#0f0f0f", whiteSpace: "nowrap" }}>
                      {row.title}
                    </td>
                    {/* Location */}
                    <td style={{ padding: "7px 10px", whiteSpace: "nowrap" }}>
                      {(() => {
                        const mapUrl = getProjectMapUrl(row.title);
                        return mapUrl ? (
                          <a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Open ${row.title} on Google Maps`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              background: "#0a0a0a",
                              color: "#fff",
                              fontSize: "10px",
                              fontWeight: 600,
                              padding: "3px 9px 3px 7px",
                              borderRadius: "6px",
                              textDecoration: "none",
                              boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
                              transition: "opacity 0.15s",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                          >
                            <span style={{ fontSize: "11px" }}>📍</span>
                            {row.location || "View on Map"}
                            <span style={{ fontSize: "9px", opacity: 0.55 }}>↗</span>
                          </a>
                        ) : (
                          <span style={{ color: "#555" }}>{row.location || "—"}</span>
                        );
                      })()}
                    </td>
                    {/* Size & Type */}
                    <td style={{ padding: "7px 10px", color: "#444" }}>
                      {row.specs.length > 0
                        ? row.specs.map((s, si2) => (
                            <div key={si2} style={{ whiteSpace: "nowrap", lineHeight: 1.6 }}>{s.label}</div>
                          ))
                        : "—"}
                    </td>
                    {/* Price */}
                    <td style={{ padding: "7px 10px" }}>
                      {row.specs.filter(s => s.price).length > 0
                        ? row.specs.filter(s => s.price).map((s, si2) => (
                            <div key={si2} style={{
                              fontWeight: 700,
                              color: "#0f0f0f",
                              whiteSpace: "nowrap",
                              lineHeight: 1.6,
                            }}>
                              {s.price}
                            </div>
                          ))
                        : "—"}
                    </td>
                    {/* Status */}
                    <td style={{ padding: "7px 10px", whiteSpace: "nowrap" }}>
                      {row.ready ? (
                        <span style={{
                          background: "rgba(52,211,153,0.12)",
                          border: "1px solid rgba(52,211,153,0.4)",
                          color: "#059669",
                          fontSize: "9px",
                          fontWeight: 700,
                          padding: "2px 7px",
                          borderRadius: "99px",
                          letterSpacing: "0.07em",
                          display: "inline-block",
                        }}>
                          ✓ READY
                        </span>
                      ) : row.possession ? (
                        <span style={{
                          background: "rgba(251,191,36,0.1)",
                          border: "1px solid rgba(251,191,36,0.4)",
                          color: "#b45309",
                          fontSize: "9px",
                          fontWeight: 700,
                          padding: "2px 7px",
                          borderRadius: "99px",
                          letterSpacing: "0.04em",
                          display: "inline-block",
                        }}>
                          {row.possession}
                        </span>
                      ) : (
                        <span style={{ color: "#aaa", fontSize: "10px" }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

function hasProjectCards(text: string): boolean {
  const cleaned = text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/^#{1,3}\s+/gm, "");
  const lines = cleaned.split("\n").map(normalizeLine);
  return lines.some(l => NUMBER_EMOJIS.some(n => l.trimStart().startsWith(n)));
}

// ─── Knowledge Base ───────────────────────────────────────────────────────────
const knowledgeBase: ResponseEntry[] = [
  {
    keywords: ["hello", "hi", "hey", "namaste", "namaskar", "helo", "नमस्ते", "hanji", "haan", "hy", "good morning", "good evening", "salam"],
    response: "Hi! 👋 I'm Sandeep from Shilp Group.\n\nHow can I help you today? You can ask me about:\n• Our projects & homes\n• Pricing & availability\n• Site visits & location\n• About us\n\nWhat would you like to know? 😊",
    quickReplies: ["All Projects", "Contact Us", "About Company", "View Pricing"],
  },
  {
    keywords: ["map", "google map", "google maps", "link", "maps link", "link bejo", "link bhejo", "map link", "navigate", "direction", "directions", "route", "kaise aaye", "kaise jaayein", "how to reach", "kahan hai", "kahan h", "kidhar hai", "project location", "project ka address", "ka location", "ki location", "location chahiye", "where is shilp", "ka address", "serene location", "serene map", "serene address", "serene kahan", "northsky location", "northsky map", "northsky address", "residency location", "residency map", "residency address", "celestial location", "celestial map", "celestial address", "skyline location", "skyline map", "skyline address", "paradise location", "paradise map", "paradise address", "revanta location", "revanta map", "revanta address", "centrica location", "centrica map", "centrica address", "business gateway location", "business gateway map", "twin tower location", "twin tower map", "sacred location", "sacred map", "sacred address", "shilp one location", "shilp one map", "industrial park location", "industrial park map", "industrial location", "olives location", "olives map", "olives address"],
    response: "📍 Shilp Group — All Project Maps:\n\n🏢 Head Office (Shilp House, Bodakdev):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+House+Rajpath+Rangoli+Road+Bodakdev+Ahmedabad\n\n🏠 RESIDENTIAL\n• Shilp Residency (Gota):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+Residency+Gota+Ahmedabad\n\n• Northsky (GIFT City SEZ):\nhttps://www.google.com/maps/search/?api=1&query=Northsky+GIFT+City+SEZ+Gandhinagar\n\n• Shilp Celestial (Vaishnodevi):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+Celestial+Vaishnodevi+Circle+Ahmedabad\n\n• Skyline (Adani Shantigram):\nhttps://www.google.com/maps/search/?api=1&query=Skyline+Adani+Shantigram+Ahmedabad\n\n• Shilp Paradise (Sindhu Bhavan Rd):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+Paradise+Sindhu+Bhavan+Road+Ahmedabad\n\n• Shilp Serene (Shilaj):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+Serene+Shilaj+Ahmedabad\n\n• Revanta (Shela):\nhttps://www.google.com/maps/search/?api=1&query=Revanta+Shela+Ahmedabad\n\n🏢 COMMERCIAL\n• Centrica (GIFT City):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+Centrica+GIFT+City+Gandhinagar\n\n• Business Gateway (Vaishnodevi):\nhttps://www.google.com/maps/search/?api=1&query=Business+Gateway+Vaishnodevi+Circle+Ahmedabad\n\n• Twin Tower (GIFT City SEZ):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+Twin+Tower+GIFT+City+SEZ+Gandhinagar\n\n• Shilp Sacred (Iskon-Ambli):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+Sacred+Iskon+Ambli+Ahmedabad\n\n• Shilp One (Shilaj Circle):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+One+Shilaj+Circle+Ahmedabad\n\n• Industrial Park (Charodi):\nhttps://www.google.com/maps/search/?api=1&query=Industrial+Park+Charodi+Ahmedabad\n\n🌿 PLOTS\n• Shilp Olives (Sanand Nalsarovar):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+Olives+Sanand+Nalsarovar+Road+Ahmedabad\n\n📞 +91 9898211567 / +91 9898508567",
    quickReplies: ["Contact Us", "View Projects", "Make Enquiry"],
    link: { label: "Contact Page →", path: "/contact-us" },
  },
  {
    keywords: ["commercial", "office", "workspace", "dukaan", "business", "gift city", "centrica", "business gateway", "twin tower", "shilp one", "industrial", "shilp sacred", "sacred", "shilaj"],
    response: "🏢 Commercial Projects:\n\n1. Centrica — GIFT City Domestic\n   📐 1769 sqft Office → ₹1.82 Cr + GST\n   📐 3574 sqft Showroom → ₹10.3 Cr + GST\n   📅 Possession: Dec 2029\n\n2. Business Gateway — Vaishnodevi Circle\n   📐 4100 sqft Office/Showroom → ₹3.45 Cr + GST\n   📅 Ready ✅\n\n3. Twin Tower — GIFT City SEZ\n   📐 1800 sqft Offices → ₹1.90 Cr + GST\n   📅 Possession: Dec 2031\n\n4. Shilp Sacred — Iskon-Ambli\n   📐 1500 sqft Office → ₹1.37 Cr + GST\n   📐 2600 sqft Showroom → ₹7.00 Cr + GST\n   📅 Possession: May 2030\n\n5. Shilp One — Shilaj Circle\n   📐 1944 sqft Showroom → ₹2.35 Cr + GST\n\n6. Industrial Park — Charodi\n   📐 3500 sqft Plot → ₹2.62 Cr + GST\n   📅 Ready ✅\n\n📞 Exact rates: +91 9898211567 / +91 9898508567",
    quickReplies: ["Make Enquiry", "Residential Projects", "Contact Us", "View Plots"],
    link: { label: "View Commercial Projects →", path: "/projects/commerical" },
  },
  {
    keywords: ["residential", "home", "flat", "apartment", "ghar", "makaan", "villa", "2bhk", "3bhk", "4bhk", "northsky", "north sky", "revanta", "serene", "paradise", "residency", "skyline", "celestial", "vaishnodevi", "shilaj", "shela", "gota", "shantigram"],
    response: "🏠 Residential Projects:\n\n1. Shilp Residency — Gota\n   📐 2050 sqft 3BHK → ₹1.18 Cr + GST\n   📐 2360 sqft 3BHK → ₹1.37 Cr + GST\n   📐 3341 sqft 4BHK → ₹1.94 Cr + GST\n   📅 Possession: Jun 2027\n\n2. Northsky — GIFT City SEZ\n   📐 1511 sqft 2BHK → ₹1.50 Cr + GST\n   📐 1875 sqft 3BHK → ₹1.85 Cr + GST\n   📅 Possession: Mar 2028\n\n3. Shilp Celestial — Vaishnodevi\n   📐 2379 sqft 3BHK → ₹1.28 Cr + GST\n   📐 3153 sqft 4BHK → ₹1.70 Cr + GST\n   📅 Possession: Jul 2030\n\n4. Skyline — Adani Shantigram\n   📐 3071 sqft 4BHK → ₹1.90 Cr + GST\n   📅 Possession: Sep 2029\n\n5. Shilp Paradise — Sindhubhavan\n   📐 3380 sqft 4BHK → ₹2.69 Cr + GST\n   📅 Possession: Jun 2025\n\n6. Shilp Serene — Shilaj\n   📐 1750 sqft 3BHK → ₹85 Lakh + GST\n   📅 Ready ✅\n\n7. Revanta — Shela\n   📐 1510 sqft 3BHK → ₹64 Lakh + GST\n   📅 Ready ✅\n\n🏊 Pool • Gym • Clubhouse • 24x7 Security\n✅ All RERA Registered\n\n📞 Exact rates: +91 9898211567 / +91 9898508567",
    quickReplies: ["Make Enquiry", "Commercial Projects", "View Plots", "Contact Us"],
    link: { label: "View Residential Projects →", path: "/projects/residential" },
  },
  {
    keywords: ["plot", "plots", "land", "zameen", "plotting", "roots", "bhumi", "olives", "shilp olives", "sanand", "nalsarovar"],
    response: "🌿 Shilp Olives — Plotting Project:\n\n📍 Sanand Nalsarovar Road, Ahmedabad\n📐 From 6456 sq ft\n💰 Starting ₹1.83 Cr + GST\n📅 Possession: Dec 2026\n\n✅ RERA Registered\n✅ Gated Community\n✅ Wide Internal Roads\n✅ Prime Location\n\nIdeal for: Custom home / Long-term investment\n\n📞 Details & availability: +91 9898211567 / +91 9898508567",
    quickReplies: ["Make Enquiry", "Residential Projects", "Commercial Projects", "Contact Us"],
    link: { label: "View Plots →", path: "/projects/plots" },
  },
  {
    keywords: ["contact", "phone", "call", "number", "sampark", "helpline", "reach", "touch", "whatsapp", "email", "head office", "main office", "office address", "office location", "shilp house", "rajpath", "bodakdev"],
    response: "📞 Contact Shilp Group:\n\n🏢 Main Office (Head Office):\nShilp House, Rajpath Rangoli Road,\nOpposite Rajpath Club, Bodakdev,\nAhmedabad – 380054, Gujarat, India\n\n📍 Google Maps:\nhttps://www.google.com/maps/search/?api=1&query=Shilp+House+Rajpath+Rangoli+Road+Bodakdev+Ahmedabad\n\n📱 Phone: +91 9898211567 / +91 9898508567\n💬 WhatsApp: +91 9909961234\n✉️ Email: info@shilp.co.in\n🕐 Mon–Sun: 10AM–7PM (All days open)",
    quickReplies: ["View Projects", "Enquiry Form", "WhatsApp Us", "View Location"],
    link: { label: "Contact Page →", path: "/contact-us" },
  },
  {
    keywords: ["about", "company", "shilp group", "who", "kaun", "founder", "history", "yash", "brahmbhatt", "story", "established", "since", "started", "baare", "bare", "snehal", "ceo", "owner", "leadership", "director"],
    response: "🏛️ About Shilp Group:\n\n📍 Shilp House, Rajpath Rangoli Road, Bodakdev, Ahmedabad – 380054\n🕐 Est. 2004 | 20+ years | RERA Registered\n\n👨‍💼 Founder & CEO: Mr. Yash Brahmbhatt\nA visionary leader who started Shilp Group in 2004 with a land auction bid. He was the first developer to build on Sindhu Bhavan Road (now a prime address) and at GIFT City. Under his leadership, Shilp has delivered 50+ projects with no compromise on quality.\n\n👩‍💼 COO: Mrs. Snehal Brahmbhatt\nLeads Marketing, PR & Communications. Also founder of the Snehshilp Foundation — an NGO focused on education for Indian youth.\n\n✨ Company Highlights:\n• 52 projects completed | 15 ongoing\n• 10,000+ happy customers\n• 11+ prestigious awards\n• Pioneer on Sindhu Bhavan Road\n• First developer at GIFT City, Gandhinagar\n\n🎯 Quality, Integrity & Authenticity",
    quickReplies: ["View Awards", "View Projects", "Contact Us", "Meet the Team"],
    link: { label: "About Us →", path: "/about-us" },
  },
  {
    keywords: ["award", "awards", "achievement", "recognition", "honor", "puraskar", "prize"],
    response: "🏆 Shilp Group — 11+ Awards:\n\n• Realty Estate Excellence Awards 2021\n• Realty Plus Conclave 2020 & 2021\n• Realty Plus Best Commercial Project 2018\n• Building Gujarat Awards 2018\n• Prop Realty Developer Of The Year 2017\n• Times Man Of The Year (Yash Brahmbhatt)\n• Divya Bhaskar Luminary Awards\n• GIHED Credai 2018 | NAR Olympiad 2018",
    quickReplies: ["About Company", "View Projects", "Contact Us"],
    link: { label: "About Us →", path: "/about-us" },
  },
  {
    keywords: ["price", "cost", "rate", "kimat", "kitna", "kitne", "budget", "paisa", "rupee", "lakh", "crore", "affordable", "pricing", "daam"],
    response: "💰 All Project Rates (+ GST):\n\n🏠 RESIDENTIAL\nRevanta (Shela) · 1510 sqft 3BHK · ₹64 Lakh + GST ✅\nShilp Serene (Shilaj) · 1750 sqft 3BHK · ₹85 Lakh + GST ✅\nShilp Residency · 2050 sqft 3BHK · ₹1.18 Cr + GST\nShilp Residency · 2360 sqft 3BHK · ₹1.37 Cr + GST\nCelestial · 2379 sqft 3BHK · ₹1.28 Cr + GST\nNorthsky · 1511 sqft 2BHK · ₹1.50 Cr + GST\nNorthsky · 1875 sqft 3BHK · ₹1.85 Cr + GST\nSkyline · 3071 sqft 4BHK · ₹1.90 Cr + GST\nCelestial · 3153 sqft 4BHK · ₹1.70 Cr + GST\nShilp Residency · 3341 sqft 4BHK · ₹1.94 Cr + GST\nShilp Paradise · 3380 sqft 4BHK · ₹2.69 Cr + GST\n\n🏢 COMMERCIAL\nSacred Office · 1500 sqft · ₹1.37 Cr + GST\nTwin Tower · 1800 sqft · ₹1.90 Cr + GST\nCentrica Office · 1769 sqft · ₹1.82 Cr + GST\nShilp One · 1944 sqft · ₹2.35 Cr + GST\nIndustrial Park · 3500 sqft · ₹2.62 Cr + GST ✅\nBusiness Gateway · 4100 sqft · ₹3.45 Cr + GST ✅\nSacred Showroom · 2600 sqft · ₹7.00 Cr + GST\nCentrica Showroom · 3574 sqft · ₹10.3 Cr + GST\n\n🌿 PLOTS\nShilp Olives · 6456+ sqft · ₹1.83 Cr + GST (Dec 2026)\n\n📞 +91 9898211567 / +91 9898508567",
    quickReplies: ["Commercial Projects", "Residential Projects", "View Plots", "Make Enquiry"],
  },
  {
    keywords: ["career", "job", "naukri", "vacancy", "hiring", "work", "join", "opportunity", "internship"],
    response: "💼 Career at Shilp Group:\n\n📂 Open for:\n• Sales & Marketing\n• Architecture & Design\n• Civil Engineering\n• Customer Relations\n• IT & Digital Marketing\n\n📧 info@shilp.co.in\n📞 +91 9898211567 / +91 9898508567",
    quickReplies: ["Contact Us", "About Company", "View Projects"],
    link: { label: "Career Page →", path: "/career" },
  },
  {
    keywords: ["blog", "news", "article", "update", "insights", "read", "latest"],
    response: "📰 Shilp Group Blog:\n\n• Real estate trends in Ahmedabad\n• Property investment tips\n• First-time home buyer advice\n• GIFT City developments\n• RERA guidance for buyers",
    quickReplies: ["View Projects", "Contact Us", "About Company"],
    link: { label: "Read Our Blog →", path: "/blog" },
  },
  {
    keywords: ["location", "address", "where", "kahan", "city", "ahmedabad", "gandhinagar", "landmark", "near", "area", "state", "gujarat", "india"],
    response: "📍 Shilp Group — Office & Locations:\n\n🏢 Head Office:\nShilp House, Rajpath Rangoli Road,\nOpposite Rajpath Club, Bodakdev,\nAhmedabad – 380054, Gujarat, India\n\n📍 Maps: https://www.google.com/maps/search/?api=1&query=Shilp+House+Rajpath+Rangoli+Road+Bodakdev+Ahmedabad\n\n🏙️ Project Areas:\n• GIFT City, Gandhinagar → Centrica, Twin Tower, Northsky\n• Sindhu Bhavan Road → Shilp Paradise\n• Shilaj, Shela → Serene, Revanta (Ready!)\n• Gota, Bopal-Ambli, Vaishnodevi → Upcoming\n\n📞 +91 9898211567 / +91 9898508567",
    quickReplies: ["Get Map Link", "Contact Us", "View Projects", "Make Enquiry"],
    link: { label: "Contact Page →", path: "/contact-us" },
  },
  {
    keywords: ["why", "kyun", "special", "different", "better", "best", "unique", "trust", "quality"],
    response: "⭐ Why Choose Shilp Group?\n\n🎨 Modern architecture & design\n🤝 RERA registered | No hidden charges\n🏆 20+ years | 14+ projects | 11+ awards\n👥 Dedicated relationship manager\n✅ On-time delivery commitment\n💬 10,000+ Happy Customers",
    quickReplies: ["View Projects", "About Company", "View Awards", "Contact Us"],
  },
  {
    keywords: ["team", "members", "staff", "management", "director"],
    response: "👥 Shilp Group Team:\n\n👨‍💼 Founder & CMD: Mr. Yash Brahmbhatt\n\n🏗️ 100+ Professionals in:\n• Architecture & Engineering\n• Sales & Customer Relations\n• Finance, Legal & Marketing",
    quickReplies: ["About Company", "Contact Us", "View Projects"],
    link: { label: "Meet Our Team →", path: "/our-team" },
  },
  {
    keywords: ["visit", "site visit", "site visit timing", "timing", "office time", "kab aaye", "kab aana", "kab open", "khulta", "open time", "office hours", "kab milenge", "milne aana", "aana chahta", "aana chahti", "dekhna hai", "dekhne aana", "visit karna", "visit karna chahta", "visit karni", "aana hai"],
    response: "🏠 Site Visit — Shilp Group\n\n🕐 Timings: Mon–Sun  10:00 AM – 7:00 PM\n   (All 7 days open — including Sunday!)\n\n📍 Project Locations (Google Maps):\n\n🏠 RESIDENTIAL\n• Shilp Serene (Shilaj):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+Serene+Shilaj+Ahmedabad\n\n• Revanta (Shela):\nhttps://www.google.com/maps/search/?api=1&query=Revanta+Shela+Ahmedabad\n\n• Shilp Residency (Gota):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+Residency+Gota+Ahmedabad\n\n• Northsky (GIFT City):\nhttps://www.google.com/maps/search/?api=1&query=Northsky+GIFT+City+SEZ+Gandhinagar\n\n• Shilp Celestial (Vaishnodevi):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+Celestial+Vaishnodevi+Circle+Ahmedabad\n\n🏢 Head Office (Shilp House, Bodakdev):\nhttps://www.google.com/maps/search/?api=1&query=Shilp+House+Rajpath+Rangoli+Road+Bodakdev+Ahmedabad\n\n📞 +91 9898211567 / +91 9898508567\n💬 WhatsApp: +91 9909961234",
    quickReplies: ["Make Enquiry", "All Projects", "Contact Us", "View Pricing"],
    link: { label: "Contact Page →", path: "/contact-us" },
  },
  {
    keywords: ["enquiry", "enquire", "book", "schedule", "appointment", "brochure"],
    response: "📬 Book an Enquiry / Appointment:\n\n• Call/WhatsApp: +91 9898211567 / +91 9898508567\n• Email: info@shilp.co.in\n• Online form on Contact page\n• Site Visit — tell us your preferred date!\n\n🕐 Office Hours: Mon–Sun  10AM–7PM\n   (All 7 days open!)\n\n⚡ Response within 24 hours\n🎁 Free consultation & brochure!",
    quickReplies: ["Site Visit Info", "View Projects", "View Pricing", "Contact Us"],
    link: { label: "Enquiry Form →", path: "/contact-us" },
  },
  {
    keywords: ["rera", "registered", "registration", "legal", "approved", "certificate"],
    response: "✅ RERA Registration — Shilp Group:\n\n🏢 COMMERCIAL\n• Shilp Centrica:\n  PR/GJ/GANDHINAGAR/GANDHINAGAR/Others/CAA12608/081123\n• Shilp Twin Towers:\n  PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA08006/050221\n• Shilp Business Gateway:\n  PR/GJ/AHMEDABAD/AHMEDABAD CITY/AMC/CN63AA09963/A1C/030123\n• Shilp Sacred:\n  PR/GJ/AHMEDABAD/DASKROI/AMC/CAA15471/070725\n• Shilp One:\n  PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/CAA07959/250121\n\n🏠 RESIDENTIAL\n• Shilp Serene:\n  PR/GJ/AHMEDABAD/AHMEDABAD CITY/AMC/MAA10737/A1M/180924\n• Shilp Residency:\n  PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA11096/291222\n• Shilp Skyline:\n  PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA14084/020924\n• Shilp Paradise:\n  PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA09669/050122\n• Shilp Revanta:\n  PR/GJ/AHMEDABAD/SANAND/AUDA/MAA07874/050121\n• Shilp Northsky:\n  PR/GJ/GANDHINAGAR/GANDHINAGAR/Others/MAA11559/060423\n• Shilp Celestial:\n  PR/GJ/GANDHINAGAR/GMC/MAA14918/070325\n\n🌿 PLOTS\n• Shilp Industrial Park:\n  PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA08006/050221\n• Shilp The Roots:\n  PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/MAA08006/050221\n\n🔗 Verify: https://gujrera.gujarat.gov.in\n📞 +91 9898211567 / +91 9898508567",
    quickReplies: ["View Projects", "Contact Us", "About Company"],
  },
  {
    keywords: ["amenities", "amenity", "facilities", "features", "pool", "gym", "club", "parking", "garden", "security"],
    response: "🏊 Amenities:\n\n🏠 Residential:\n• Swimming Pool & Gymnasium\n• Clubhouse & Indoor Games\n• Landscaped Gardens\n• 24x7 Security & CCTV\n• Covered Parking & Power Backup\n\n🏢 Commercial:\n• Dedicated Parking & High-Speed Lifts\n• Fire Safety & Power Backup",
    quickReplies: ["Residential Projects", "Commercial Projects", "Make Enquiry"],
  },
  {
    keywords: ["brochure", "photo", "photos", "image", "images", "picture", "pictures", "gallery", "floor plan", "floor plans", "pdf", "catalogue", "catalog", "pics", "tasveer", "broucher", "download", "dekhao photo", "photo bhejo", "brochure bhejo", "brochure chahiye", "photo chahiye"],
    response: "📸 Photos & Brochure:\n\nSaare project ki photos, floor plans aur brochures hamare website pe available hain!\n\nWebsite pe project section mein dekh sakte hain ya hum directly WhatsApp par bhej sakte hain.\n\n📲 WhatsApp: +91 9909961234\n📞 +91 9898211567 / +91 9898508567\n✉️ info@shilp.co.in\n\nKis project ka brochure chahiye? 😊",
    quickReplies: ["Residential Projects", "Commercial Projects", "Contact Us", "Make Enquiry"],
    link: { label: "View Projects →", path: "/shilp-projects" },
  },
  {
    keywords: ["kitne project", "total project", "how many project", "completed project", "ongoing project", "kitne complete", "kitne ongoing", "total kitne", "kaun kaun se", "pure list", "sab project", "poora portfolio", "how many completed", "delivered", "handover"],
    response: "📊 Shilp Group — Project Count:\n\n✅ Completed / Delivered: 52 Projects\n🔄 Ongoing / Active: 14 Projects\n🏗️ Total: 66 Projects\n\n52 Completed Projects (2004–2024):\nShilp Arcade, Shilp Complex, Shaligram, Sashvat, Shilp Square A & B, Shilp Annexe, Shilp 3, HCG Hospital, Shilp Aaron (Bopal), Silver Nest, Shilp Saral, Parkview Green, Green City, Shilp Sapphire, City Square, Garden View, Green View, City Center 1 & 2, Blossom Luxuria, Shilp Elanza, Shivalik Shilp 1 & 2, Shilp Aperia, Shilp Arista, Asian Square, Shilp Satved, Shilp Shaligram, Shilp The Address, Shilp Zaveri, Shilp Epitome, Shilp Aaron (Rajpath), Shilp Corporate Park, Shilp 14, Shilp Revanta ✅, Shilp Serene ✅, Shilp Business Gateway ✅, Shilp Industrial Park ✅, Shilp One ✅, Shilp North Sky ✅, Shilp SkyLine ✅, Shilp Twin Tower ✅, Shilp Incubation Center ✅, and more!\n\n🔄 14 Ongoing Projects — type 'All Projects' for full details\n\n📞 +91 9898211567 / +91 9898508567",
    quickReplies: ["All Projects", "Residential Projects", "Commercial Projects", "Contact Us"],
    link: { label: "View All Projects →", path: "/shilp-projects" },
  },
  {
    keywords: ["project", "projects", "saare", "sab", "all", "kitne", "total", "list", "portfolio", "properties", "property", "real estate", "sabhi", "detail", "details", "batao", "btao", "bataiye", "dikhao", "show"],
    response: "🏗️ Shilp Group — All Ongoing Projects:\n\n📊 52 Completed ✅ | 14 Ongoing 🔄 | Total: 66 Projects\n\n🏠 RESIDENTIAL\n1. Shilp Residency — Gota\n   📐 2050 sqft 3BHK → ₹1.18 Cr + GST\n   📐 2360 sqft 3BHK → ₹1.37 Cr + GST\n   📐 3341 sqft 4BHK → ₹1.94 Cr + GST\n   📅 Jun 2027\n\n2. Northsky — GIFT City SEZ\n   📐 1511 sqft 2BHK → ₹1.50 Cr + GST\n   📐 1875 sqft 3BHK → ₹1.85 Cr + GST\n   📅 Mar 2028\n\n3. Shilp Celestial — Vaishnodevi\n   📐 2379 sqft 3BHK → ₹1.28 Cr + GST\n   📐 3153 sqft 4BHK → ₹1.70 Cr + GST\n   📅 Jul 2030\n\n4. Skyline — Adani Shantigram\n   📐 3071 sqft 4BHK → ₹1.90 Cr + GST\n   📅 Sep 2029\n\n5. Shilp Paradise — Sindhubhavan\n   📐 3380 sqft 4BHK → ₹2.69 Cr + GST\n   📅 Jun 2025\n\n6. Shilp Serene — Shilaj\n   📐 1750 sqft 3BHK → ₹85 Lakh + GST\n   📅 Ready ✅\n\n7. Revanta — Shela\n   📐 1510 sqft 3BHK → ₹64 Lakh + GST\n   📅 Ready ✅\n\n🏢 COMMERCIAL\n1. Centrica — GIFT City Domestic\n   📐 1769 sqft Office → ₹1.82 Cr + GST\n   📐 3574 sqft Showroom → ₹10.3 Cr + GST\n   📅 Dec 2029\n\n2. Business Gateway — Vaishnodevi Circle\n   📐 4100 sqft Office/Showroom → ₹3.45 Cr + GST\n   📅 Ready ✅\n\n3. Twin Tower — GIFT City SEZ\n   📐 1800 sqft Offices → ₹1.90 Cr + GST\n   📅 Dec 2031\n\n4. Shilp Sacred — Iskon-Ambli\n   📐 1500 sqft Office → ₹1.37 Cr + GST\n   📐 2600 sqft Showroom → ₹7.00 Cr + GST\n   📅 May 2030\n\n5. Shilp One — Shilaj Circle\n   📐 1944 sqft Showroom → ₹2.35 Cr + GST\n\n🏭 INDUSTRIAL / PLOTS\n1. Industrial Park — Charodi\n   📐 3500 sqft Plot → ₹2.62 Cr + GST\n   📅 Ready ✅\n\n2. Shilp Olives — Sanand Nalsarovar Rd\n   📐 6456+ sqft Plot → ₹1.83 Cr + GST\n   📅 Dec 2026\n\n✅ All RERA Registered | 📞 +91 9898211567",
    quickReplies: ["Commercial Projects", "Residential Projects", "View Pricing", "Make Enquiry"],
    link: { label: "View All Projects →", path: "/shilp-projects" },
  },
];

const fallback: Omit<ResponseEntry, "keywords"> = {
  response: "Sorry, I can only help with Shilp Group related queries! 😊\n\nYou can ask me about:\n• Our projects & pricing\n• Site visits & locations\n• About Shilp Group\n• Contact & enquiries",
  quickReplies: ["All Projects", "View Pricing", "Contact Us", "Site Visit Info"],
};

// ─── Groq AI Engine — 100% FREE ───────────────────────────────────────────────
// Step 1: Go to https://console.groq.com
// Step 2: Sign up & create a free API key
// Step 3: Add to your .env file: VITE_GROQ_API_KEY=gsk_xxxxxxxxxxxx
// Free tier: 14,400 requests/day — more than enough!
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY as string | undefined;

const SYSTEM_PROMPT = `You are Sandeep, a real human sales executive at Shilp Group — a premium real estate developer in Gujarat, India. You are warm, friendly, and helpful. You speak like a real person, not a bot. Use natural, conversational language. Be concise but caring. Occasionally use light Hinglish if the user does. Never say you are an AI or a bot — you are Sandeep from the Shilp Group team.

## About Shilp Group
- Founded: 2004 by Mr. Yash Brahmbhatt (Founder & CEO)
- Co-leadership: Mrs. Snehal Brahmbhatt (COO – Marketing, PR & Communications; also founder of Snehshilp Foundation NGO)
- HQ: Shilp House, Rajpath Rangoli Road, Opposite Rajpath Club, Bodakdev, Ahmedabad – 380054, Gujarat, India
- 52 projects completed, 14 ongoing, 20+ years, 10,000+ happy customers, 11+ awards, RERA registered
- Pioneer developer on Sindhu Bhavan Road and first developer at GIFT City, Gandhinagar
- Tagline: Quality, Integrity & Authenticity

## Completed / Delivered Projects (for reference only — NOT for sale)
These are projects Shilp has already delivered to customers. Mention them proudly when asked about track record or past work.

2004–2010 era: Shilp Arcade (Jodhpur Cross Rd), Shilp Complex (Gurukul Rd), Shilp Corner, Shaligram (Vastrapur), Sashvat (Memnagar), Shilp Square A & B (Drive-in Rd), Shilp Annexe (ChandKheda), Shilp 3 & HCG Hospital (Science City), Shilp Aaron (Bopal), Silver Nest (Gota), Saral (Bopal), Parkview Green (Science City)

2011–2015 era: Green City, Shilp Sapphire (Thaltej), Shilp City Square, Green View, Garden View, City Center & City Center 2 (Science City), Blossom Luxuria, Shilp Elanza (Thaltej), Shivalik Shilp 1 & 2, Shilp Aperia (Bopal-Ambli), Shilp Arista, Asian Square (Bodakdev)

2016–2022 era: Shilp Satved (Bodakdev), Shilp Shaligram (Vastrapur), Shilp The Address (Shilaj Cross Rd), Shilp Zaveri (Shyamal), Shilp Epitome (Bodakdev), Shilp The Address, Shilp The Roots (Moti Devti — plots), Shilp Corporate Park (Rajpath Rangoli Rd), Shilp 14 (Rajpath Rd)

2022–2024 era: Shilp Business Gateway (Vaishnodevi) ✅ Delivered, Shilp Revanta (Shela) ✅ Delivered, Shilp Industrial Park (Changodar) ✅ Delivered, Shilp Serene (Shilaj) ✅ Delivered, Shilp One (Rajpath Cross Rd) ✅ Delivered, Shilp Incubation Center (GIFT City) ✅ Delivered

Total delivered: 50+ projects | 10,000+ happy customers

## Active / For-Sale Projects — Complete Data

### RESIDENTIAL (7 projects)

1. Shilp Residency — Gota | Possession: 30 Jun 2027
   - 2050 sqft 3BHK | ₹1.18 Cr + GST charges
   - 2360 sqft 3BHK | ₹1.37 Cr + GST charges
   - 3341 sqft 4BHK | ₹1.94 Cr + GST charges

2. Shilp Serene — Shilaj | Status: READY
   - 1750 sqft 3BHK | ₹85 Lakh + GST charges

3. Shilp Paradise — Sindhubhavan | Possession: 30 Jun 2025
   - 3380 sqft 4BHK | ₹2.69 Cr + GST charges

4. Skyline — Adani Shantigram | Possession: 30 Sep 2029
   - 3071 sqft 4BHK | ₹1.90 Cr + GST charges

5. Shilp Celestial — Vaishnodevi | Possession: 07 Jul 2030
   - 2379 sqft 3BHK | ₹1.28 Cr + GST charges
   - 3153 sqft 4BHK | ₹1.70 Cr + GST charges

6. Revanta — Shela | Status: READY
   - 1510 sqft 3BHK | ₹64 Lakh + GST charges

7. Northsky — GIFT City SEZ | Possession: 31 Mar 2028
   - 1511 sqft 2BHK | ₹1.50 Cr + GST charges
   - 1875 sqft 3BHK | ₹1.85 Cr + GST charges

### COMMERCIAL (5 projects)

8. Centrica — GIFT City Domestic | Possession: 31 Dec 2029
   - 1769 sqft Office | ₹1.82 Cr + GST charges
   - 3574 sqft Showroom | ₹10.3 Cr + GST charges

9. Business Gateway — Vaishnodevi Circle | Status: READY
   - 4100 sqft Office/Showroom | ₹3.45 Cr + GST charges

10. Shilp Sacred — Iskon-Ambli | Possession: 31 May 2030
    - 1500 sqft Office | ₹1.37 Cr + GST charges
    - 2600 sqft Showroom | ₹7.00 Cr + GST charges

11. Shilp One — Shilaj Circle | Possession: TBD
    - 1944 sqft Showroom | ₹2.35 Cr + GST charges

12. Twin Tower — GIFT City SEZ | Possession: 31 Dec 2031
    - 1800 sqft Offices | ₹1.90 Cr + GST charges

### INDUSTRIAL / PLOTS (2 projects)

13. Industrial Park — Industrial Charodi | Status: READY
    - 3500 sqft Plot | ₹2.62 Cr + GST charges

14. Shilp Olives — Sanand Nalsarovar Road | Possession: Dec 2026
    - From 6456 sqft Plot | ₹1.83 Cr + GST charges

PRICING NOTES:
- All prices are base rates excluding GST
- GST charges applicable as per government norms — exact amount depends on property type
- Always say "+ GST charges" after any price

## Contact
- Phone: +91 9898211567 / +91 9898508567
- WhatsApp: +91 9909961234
- Email: info@shilp.co.in
- Hours: Mon–Sun 10AM–7PM (ALL 7 days, including Sunday)
- Head Office: Shilp House, Rajpath Rangoli Road, Opposite Rajpath Club, Bodakdev, Ahmedabad – 380054, Gujarat, India

## Locations & Map Links
Gujarat, India — Ahmedabad & Gandhinagar
Areas: GIFT City, Sindhu Bhavan Road, Bopal-Ambli, Ahmedabad outskirts

OFFICIAL MAP LINKS (use EXACTLY as written — never modify or invent new ones):
- Head Office (Shilp House, Bodakdev): https://www.google.com/maps/search/?api=1&query=Shilp+House+Rajpath+Rangoli+Road+Bodakdev+Ahmedabad
RESIDENTIAL:
- Shilp Residency (Gota): https://www.google.com/maps/search/?api=1&query=Shilp+Residency+Gota+Ahmedabad
- Northsky (GIFT City SEZ): https://www.google.com/maps/search/?api=1&query=Northsky+GIFT+City+SEZ+Gandhinagar
- Shilp Celestial (Vaishnodevi): https://www.google.com/maps/search/?api=1&query=Shilp+Celestial+Vaishnodevi+Circle+Ahmedabad
- Skyline (Adani Shantigram): https://www.google.com/maps/search/?api=1&query=Skyline+Adani+Shantigram+Ahmedabad
- Shilp Paradise (Sindhu Bhavan): https://www.google.com/maps/search/?api=1&query=Shilp+Paradise+Sindhu+Bhavan+Road+Ahmedabad
- Shilp Serene (Shilaj): https://www.google.com/maps/search/?api=1&query=Shilp+Serene+Shilaj+Ahmedabad
- Revanta (Shela): https://www.google.com/maps/search/?api=1&query=Revanta+Shela+Ahmedabad
COMMERCIAL:
- Centrica (GIFT City): https://www.google.com/maps/search/?api=1&query=Shilp+Centrica+GIFT+City+Gandhinagar
- Business Gateway (Vaishnodevi): https://www.google.com/maps/search/?api=1&query=Business+Gateway+Vaishnodevi+Circle+Ahmedabad
- Twin Tower (GIFT City SEZ): https://www.google.com/maps/search/?api=1&query=Shilp+Twin+Tower+GIFT+City+SEZ+Gandhinagar
- Shilp Sacred (Iskon-Ambli): https://www.google.com/maps/search/?api=1&query=Shilp+Sacred+Iskon+Ambli+Ahmedabad
- Shilp One (Shilaj Circle): https://www.google.com/maps/search/?api=1&query=Shilp+One+Shilaj+Circle+Ahmedabad
- Industrial Park (Charodi): https://www.google.com/maps/search/?api=1&query=Industrial+Park+Charodi+Ahmedabad
INDUSTRIAL/PLOTS:
- Shilp Olives (Sanand Nalsarovar): https://www.google.com/maps/search/?api=1&query=Shilp+Olives+Sanand+Nalsarovar+Road+Ahmedabad

## Site Visit / Office Hours
- CRITICAL: Office is OPEN ALL 7 DAYS including SUNDAY: Monday to Sunday, 10:00 AM to 7:00 PM
- SUNDAY IS OPEN. There is NO weekly off. Do NOT say Sunday is closed.
- When user asks about visiting, timing, site visit — ALWAYS say: "Open Mon–Sun, 10AM–7PM. All 7 days open including Sunday."
- If they ask about a specific project, give THAT project's map link first, then head office map link.

## Response Rules
- LANGUAGE RULE: ALWAYS reply in ENGLISH no matter what language the user writes in. You can understand Hindi, Hinglish, and Gujarati input — but your response MUST ALWAYS be in English only. Never use Devanagari script, Gujarati script, or Hindi/Gujarati words in your responses.
- Keep responses SHORT and conversational — under 200 words. Don't dump all info at once.
- For pricing always say "+ GST charges applicable" and add: "For exact rates, call +91 9898211567"
- PRICE-ONLY RULE: If user asks about pricing/rates in general (e.g. "price?", "rates batao", "kitna price hai", "all prices") → show ONLY project name + smallest price. Nothing else. Format: [emoji] [Name] – ₹[price] + GST charges. Keep it short.
- PROJECT DETAIL RULE: If user asks about a specific project by name → then give full details: location, sqft, type, status/possession, map link.
- When listing multiple projects use plain numbers: 1. 2. 3. (NOT emoji numbers)
- For PRICE-ONLY queries format: [Name] – ₹[price] + GST charges
- For ALL PROJECTS / project list, use EXACTLY this multi-line format per project:
  [N]. [Name] — [Location]
     📐 [sqft] [type] → ₹[price] + GST charges
     📐 [sqft] [type] → ₹[price] + GST charges  (repeat for each size)
     📅 [Month YYYY]  OR  📅 Ready ✅
  Example:
  1. Shilp Residency — Gota
     📐 2050 sqft 3BHK → ₹1.18 Cr + GST charges
     📐 3341 sqft 4BHK → ₹1.94 Cr + GST charges
     📅 Jun 2027
  CRITICAL: Use 📐 for each size/price line. Use 📅 for possession. Do NOT use pipe | format.
  NUMBERING RULE: When listing projects under multiple categories, RESTART numbering at 1. for each category (e.g. Residential 1. 2. ... 7., then Commercial RESTARTS 1. 2. ... 6., then Plots RESTARTS 1. 2.). Never number beyond 9. in a single category.
- CRITICAL: Do NOT put any URL or map link inside a project listing line. URLs must ONLY appear on their own separate line, never mixed with project name/location.
- STRICT TOPIC RULE: You ONLY answer questions related to Shilp Group — projects, pricing, locations, site visits, careers, about the company, team, awards, RERA, amenities, and contact info.
- OFF-TOPIC RULE: If the user asks about ANYTHING outside of Shilp Group (e.g. other companies, general knowledge, politics, movies, cricket, weather, recipes, other builders, other cities unrelated to Shilp, etc.) — politely decline and redirect. Use this exact format:
  "Sorry, I can only help with Shilp Group related queries! 😊
  
  You can ask me about:
  • Our projects & pricing
  • Site visits & locations
  • About Shilp Group
  • Contact & enquiries"
- Never answer general knowledge, trivia, competitor info, or anything unrelated to Shilp Group. Always redirect warmly.
- NEVER invent, modify, or guess any URL or map link. Only use exact links listed above.
- IMPORTANT: Output URLs as plain text only (https://...). Do NOT use markdown [text](url) format. UI renders them as buttons automatically.
- When listing all projects, categorize them: Residential | Commercial | Industrial/Plots
- Do NOT use markdown bold (**text**) or headers. Plain text with emojis for warmth.
- Use plain numbers 1. 2. 3. for numbered lists. Do NOT use emoji numbers like 1️⃣ 2️⃣ 3️⃣.
- BROCHURE/PHOTOS RULE: If user asks for brochure, photos, pictures, images, floor plan, gallery, pdf, catalogue of any project → say: "Photos and brochure are available on our website! 📸 You can also share your WhatsApp number and we'll send it directly. 📲 WhatsApp: +91 9909961234 | Call: +91 9898211567"
- TOTAL PROJECTS RULE: If user asks how many projects, total projects, kitne project, completed projects, ongoing projects → clearly state: Shilp Group has completed 52 projects and currently has 14 ongoing projects. Total 66 projects overall.`;


// Multi-turn conversation history
let conversationHistory: { role: "user" | "assistant"; content: string }[] = [];

async function askGroq(userMessage: string): Promise<string | null> {
  if (!GROQ_API_KEY || GROQ_API_KEY === "YOUR_GROQ_API_KEY_HERE") return null;

  try {
    conversationHistory.push({ role: "user", content: userMessage });
    const recentHistory = conversationHistory.slice(-10); // Keep last 10 messages

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant", // 🆓 Free & blazing fast (500 tokens/sec!)
        max_tokens: 1400,
        temperature: 0.7,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...recentHistory,
        ],
      }),
    });

    if (!response.ok) {
      console.error("Groq API error:", response.status);
      return null;
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim() ?? null;

    if (reply) {
      conversationHistory.push({ role: "assistant", content: reply });
    }

    return reply;
  } catch (err) {
    console.error("Groq request failed:", err);
    return null;
  }
}

// ─── KB Fallback Engine ───────────────────────────────────────────────────────
function getBotResponse(input: string): Omit<ResponseEntry, "keywords"> {
  const lower = input.toLowerCase().trim();

  function kwMatches(kw: string): boolean {
    if (kw.includes(" ")) return lower.includes(kw);
    const esc = kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(?:^|[^a-z0-9])${esc}(?=$|[^a-z0-9])`).test(lower);
  }

  for (const entry of knowledgeBase) {
    if (entry.keywords.some(kwMatches)) {
      return { response: entry.response, quickReplies: entry.quickReplies, link: entry.link };
    }
  }
  return fallback;
}

// ─── Quick Reply Triggers ─────────────────────────────────────────────────────
const quickReplyTriggers: Record<string, string> = {
  // English chips (new)
  "all projects": "project", "view projects": "project",
  "commercial projects": "commercial", "residential projects": "residential",
  "view plots": "plots", "contact us": "contact",
  "make enquiry": "enquiry", "about company": "about",
  "view awards": "awards", "meet the team": "team",
  "career page": "career", "contact page": "contact",
  "read blog": "blog", "view pricing": "price",
  "enquiry form": "enquiry", "whatsapp us": "contact",
  "view location": "location", "get map link": "map",
  "view amenities": "amenities", "why shilp": "why",
  "site visit info": "visit", "book site visit": "visit", "plan a visit": "visit",
  // Keep legacy Hinglish triggers for typed input
  "saare projects": "project", "projects dekho": "project",
  "plots dekho": "plots", "contact karo": "contact",
  "enquiry karo": "enquiry", "company ke baare mein": "about",
  "awards dekho": "awards", "team dekho": "team",
  "blog dekho": "blog", "pricing jaano": "price",
  "enquiry form bharo": "enquiry", "whatsapp karo": "contact",
  "location dekho": "location", "map link chahiye": "map",
  "amenities dekho": "amenities",
};

const welcomeMsg: Message = {
  id: 0,
  from: "bot",
  text: "Hi there! 👋 I'm Sandeep from Shilp Group.\n\nHow can I help you today? Feel free to ask about our projects, pricing, site visits, or anything else! 😊",
  quickReplies: ["All Projects", "View Pricing", "Site Visit Info", "Contact Us"],
  timestamp: new Date(),
};

// ─── Chatbot Component ────────────────────────────────────────────────────────
const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMsg]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 640);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const addMessage = (msg: Omit<Message, "id" | "timestamp">) => {
    setMessages((prev) => [...prev, { ...msg, id: Date.now() + Math.random(), timestamp: new Date() }]);
  };

  const handleClose = () => { setOpen(false); setExpanded(false); };

  const handleSend = async (text?: string) => {
    const raw = (text ?? input).trim();
    if (!raw) return;
    setInput("");
    const mapped = quickReplyTriggers[raw.toLowerCase()] ?? raw;
    addMessage({ from: "user", text: raw });
    setTyping(true);

    // Groq AI is primary — KB only used if Groq key is not configured
    const aiText = await askGroq(mapped);
    setTyping(false);

    if (aiText) {
      addMessage({ from: "bot", text: aiText });
    } else if (!GROQ_API_KEY || GROQ_API_KEY === "YOUR_GROQ_API_KEY_HERE") {
      // No Groq key configured — use KB fallback
      const { response, quickReplies, link } = getBotResponse(mapped);
      addMessage({ from: "bot", text: response, quickReplies, link });
    } else {
      // Groq failed (network/rate limit) — show friendly error
      addMessage({ from: "bot", text: "Sorry, I'm facing a connection issue right now. Please try again in a moment, or call us directly at +91 9898211567 😊" });
    }
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  const formatTime = (d: Date) =>
    d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  return (
    <>
      {/* ── Chat Panel (Right Drawer / Expanded Modal) ── */}
      {open && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 z-[9997]"
            style={{
              background: (expanded || isMobile) ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.18)",
              backdropFilter: (expanded || isMobile) ? "blur(6px)" : "none",
              WebkitBackdropFilter: (expanded || isMobile) ? "blur(6px)" : "none",
              transition: "background 0.3s",
            }}
            onClick={handleClose}
          />
          <div
            className="chat-window fixed z-[9998] flex flex-col overflow-hidden"
            style={expanded ? {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "min(840px, 95vw)",
              height: "clamp(520px, 92dvh, 920px)",
              borderRadius: "28px",
              background: "#FAFAFA",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.45)",
            } : isMobile ? {
              bottom: 0,
              left: 0,
              right: 0,
              top: "auto",
              transform: "none",
              width: "100%",
              height: "clamp(380px, 88dvh, 88dvh)",
              borderRadius: "20px 20px 0 0",
              background: "#FAFAFA",
              border: "none",
              boxShadow: "0 -10px 40px rgba(0,0,0,0.3)",
            } : {
              top: "50%",
              right: "16px",
              transform: "translateY(-50%)",
              width: "min(430px, calc(100vw - 32px))",
              height: "clamp(480px, 85dvh, 780px)",
              borderRadius: "20px",
              background: "#FAFAFA",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
            }}
          >
          {/* ── Header ── */}
          <div
            className="flex-shrink-0 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)",
              borderRadius: expanded ? "28px 28px 0 0" : (isMobile ? "20px 20px 0 0" : "20px 20px 0 0"),
              padding: isMobile ? "16px 16px 0" : "20px 20px 0",
            }}
          >
            {/* decorative shimmer lines */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)",
              backgroundSize: "200% 100%",
            }} />
            {/* top bar */}
            <div className="relative flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                {/* avatar */}
                <div className="relative shrink-0">
                  <div
                    className="w-12 h-12 flex items-center justify-center font-black text-sm tracking-tight"
                    style={{
                      background: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
                      borderRadius: "50%",
                      color: "#fff",
                      boxShadow: "0 4px 14px rgba(249,115,22,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
                      fontSize: "16px",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    P
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#0f0f0f] rounded-full" style={{ boxShadow: "0 0 6px rgba(52,211,153,0.8)" }} />
                </div>
                <div>
                  <p className="text-white text-[15px] font-bold leading-tight" style={{ letterSpacing: "-0.3px" }}>
                    Sandeep
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white/40 text-[9.5px] tracking-[0.1em] font-medium">
                      Sales Executive · Shilp Group
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right mr-1 hidden sm:block">
                  <p className="text-white/20 text-[8px] tracking-widest uppercase">Est.</p>
                  <p className="text-white/40 text-[9px] font-semibold tracking-wide">2004</p>
                </div>
                <button
                  onClick={() => setExpanded(v => !v)}
                  className="w-9 h-9 hidden sm:flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-90"
                  style={{ borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}
                  title={expanded ? "Collapse" : "Expand chat"}
                >
                  {expanded ? <TbArrowsMinimize className="text-[15px]" /> : <TbArrowsMaximize className="text-[15px]" />}
                </button>
                <button
                  onClick={handleClose}
                  className="w-9 h-9 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-90"
                  style={{ borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <IoClose className="text-[16px]" />
                </button>
              </div>
            </div>
            {/* quick chips row */}
            <div className="relative flex gap-2 overflow-x-auto pb-3 no-scrollbar">
              {["All Projects", "View Pricing", "Contact Us", "Get Map Link"].map((t, i) => {
                const icons = ["🏗️", "💰", "📞", "📍"];
                return (
                  <button
                    key={t}
                    onClick={() => handleSend(t)}
                    className="shrink-0 flex items-center gap-1.5 text-[10px] font-bold tracking-wide text-white/60 hover:text-white transition-all duration-200 hover:bg-white/10 active:scale-95"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "5px 10px",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <span className="text-[11px]">{icons[i]}</span>
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Messages ── */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
            style={{ background: "linear-gradient(180deg, #f4f4f4 0%, #efefef 100%)", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
          >
            {messages.map((msg, idx) => {
              const isUser = msg.from === "user";
              const prevFrom = idx > 0 ? messages[idx - 1].from : null;
              const showLabel = prevFrom !== msg.from;
              return (
                <div key={msg.id} className={`chat-msg flex flex-col ${isUser ? "items-end" : "items-start"}`}>
                  {showLabel && (
                    <span
                      className="text-[10px] font-bold tracking-[0.12em] uppercase mb-1.5 px-1"
                      style={{ color: isUser ? "#999" : "#555", fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" }}
                    >
                      {isUser ? "You" : "Sandeep"}
                    </span>
                  )}
                  <div
                    className={`${isUser ? "px-4 py-3 leading-relaxed whitespace-pre-wrap" : !hasProjectCards(msg.text) ? "px-4 py-3 leading-relaxed whitespace-pre-wrap" : ""}`}
                    style={{
                      maxWidth: isUser ? "88%" : !hasProjectCards(msg.text) ? "90%" : "100%",
                      fontSize: isUser ? "14px" : "13.5px",
                      lineHeight: "1.7",
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif",
                      fontWeight: isUser ? 400 : 400,
                      color: isUser ? "#fff" : "#111111",
                      background: isUser
                        ? "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)"
                        : !hasProjectCards(msg.text) ? "#ffffff" : "transparent",
                      borderRadius: isUser ? "20px 20px 6px 20px" : !hasProjectCards(msg.text) ? "6px 20px 20px 20px" : "0",
                      border: isUser ? "none" : !hasProjectCards(msg.text) ? "1px solid rgba(0,0,0,0.08)" : "none",
                      boxShadow: isUser
                        ? "0 6px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)"
                        : !hasProjectCards(msg.text) ? "0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)" : "none",
                    }}
                  >
                    {isUser ? msg.text : renderBotText(msg.text)}
                  </div>
                  {msg.link && (
                    <button
                      onClick={() => { navigate(msg.link!.path); handleClose(); }}
                      className="flex items-center gap-1.5 mt-2 mx-1 text-[10px] font-bold tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 hover:opacity-100 opacity-70"
                      style={{
                        color: "#0a0a0a",
                        background: "#f0f0f0",
                        border: "1px solid rgba(0,0,0,0.12)",
                        borderRadius: "8px",
                        padding: "5px 10px",
                      }}
                    >
                      <RiArrowRightUpLine className="text-[11px]" />
                      {msg.link.label}
                    </button>
                  )}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[92%]">
                      {msg.quickReplies.map((qr, qi) => (
                        <button
                          key={qr}
                          onClick={() => handleSend(qr)}
                          className="chat-qr text-[11px] font-semibold tracking-wide px-3 py-1.5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                          style={{
                            borderRadius: "99px",
                            animationDelay: `${qi * 0.06}s`,
                            border: "1.5px solid rgba(0,0,0,0.15)",
                            background: "#fff",
                            color: "#111",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "#0a0a0a";
                            (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "#0a0a0a";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "#fff";
                            (e.currentTarget as HTMLButtonElement).style.color = "#111";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,0,0,0.15)";
                          }}
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                  <span
                    className="text-[10px] mt-1.5 px-1 font-medium"
                    style={{ color: "rgba(0,0,0,0.32)", fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" }}
                  >
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
              );
            })}
            {typing && (
              <div className="chat-msg flex items-start">
                <div
                  className="px-4 py-3.5 flex gap-1.5 items-center"
                  style={{
                    background: "#fff",
                    borderRadius: "6px 20px 20px 20px",
                    border: "1px solid rgba(0,0,0,0.07)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full animate-bounce"
                      style={{ background: "#aaa", animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div
            className="flex-shrink-0 px-4 pt-3"
            style={{
              background: "#fff",
              borderTop: "1px solid rgba(0,0,0,0.06)",
              paddingBottom: isMobile ? "max(16px, env(safe-area-inset-bottom))" : "16px",
            }}
          >
            <div
              className="flex items-center gap-2.5 px-3.5 py-2.5 transition-all duration-200"
              style={{
                borderRadius: "16px",
                border: "1.5px solid #e0e0e0",
                background: "#F7F7F7",
              }}
              onFocus={() => {}}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Message Sandeep…"
                className="flex-1 bg-transparent outline-none"
                style={{ caretColor: "#0a0a0a", color: "#111", fontSize: "14px", lineHeight: 1.5, fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" }}
                onFocus={(e) => { (e.target.parentElement as HTMLDivElement).style.borderColor = "#111"; (e.target.parentElement as HTMLDivElement).style.boxShadow = "0 0 0 3px rgba(0,0,0,0.06)"; }}
                onBlur={(e) => { (e.target.parentElement as HTMLDivElement).style.borderColor = "#e0e0e0"; (e.target.parentElement as HTMLDivElement).style.boxShadow = "none"; }}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className={`w-8 h-8 flex items-center justify-center shrink-0 transition-all duration-200 active:scale-90 ${
                  input.trim() ? "text-white" : "text-[#bbb] cursor-not-allowed"
                }`}
                style={{
                  borderRadius: "10px",
                  background: input.trim()
                    ? "linear-gradient(135deg, #f97316 0%, #f59e0b 100%)"
                    : "transparent",
                  boxShadow: input.trim() ? "0 4px 12px rgba(249,115,22,0.35)" : "none",
                }}
              >
                <IoSend className="text-[12px]" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 px-1">
              <p className="text-[8px] font-bold tracking-[0.18em] uppercase" style={{ color: "rgba(0,0,0,0.2)" }}>
                Shilp Group · Est. 2004
              </p>
              <p className="text-[8px] tracking-widest uppercase" style={{ color: "rgba(0,0,0,0.18)" }}>
                All prices + GST
              </p>
            </div>
          </div>
          </div>
        </>
      )}

      {/* ── Chat FAB ── */}
      <div
        className={`fixed right-4 sm:right-6 z-[9999] flex-col items-end gap-2 ${open ? 'hidden' : 'flex'}`}
        style={{ bottom: "max(24px, env(safe-area-inset-bottom, 24px))" }}
      >
        {/* tooltip / label when closed — hidden on mobile to save space */}
        {!open && (
          <div
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 select-none"
            style={{
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(8px)",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: "0 0 5px rgba(52,211,153,0.9)" }} />
            <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-white/75">Chat with Sandeep</p>
          </div>
        )}
        <div className="relative flex items-center justify-center">
          {!open && (
            <>
              <span className="fab-pulse-ring absolute w-14 h-14 rounded-full bg-black/20" style={{ animationDelay: "0s" }} />
              <span className="fab-pulse-ring absolute w-14 h-14 rounded-full bg-black/10" style={{ animationDelay: "0.8s" }} />
            </>
          )}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Chat with Shilp Group"
            className="relative w-14 h-14 flex items-center justify-center transition-all duration-300 active:scale-90"
            style={{
              borderRadius: "20px",
              background: open
                ? "linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 100%)"
                : "linear-gradient(135deg, #1a1a1a 0%, #000 100%)",
              boxShadow: open
                ? "0 4px 16px rgba(0,0,0,0.25)"
                : "0 8px 28px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.07)",
              color: "#fff",
            }}
          >
            <span
              className="flex items-center justify-center transition-all duration-300"
              style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
            >
              {open ? <IoClose className="text-[20px]" /> : <TbMessageChatbot className="text-[20px]" />}
            </span>
            {!open && (
              <span
                className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full border-2 border-black bg-emerald-400"
                style={{ boxShadow: "0 0 6px rgba(52,211,153,0.9)" }}
              />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;