import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

export const alt = `${site.name} | ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated social preview image (Open Graph / Twitter). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#10141c",
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(94,234,212,0.22), transparent 45%)",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#f1f5f9",
              color: "#10141c",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            IK
          </div>
          <div style={{ fontSize: 26, color: "#5eead4" }}>{site.availability}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 44, color: "#94a3b8", marginTop: 8 }}>{site.title}</div>
          <div style={{ fontSize: 30, color: "#cbd5e1", marginTop: 32, maxWidth: 900 }}>
            {site.tagline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {site.stack.map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid #334155",
                fontSize: 22,
                color: "#cbd5e1",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
