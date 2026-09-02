import { ImageResponse } from "next/og";

export const alt = "LeituOn — o teu tracker pessoal de leitura";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Cartão de partilha gerado no build. Repete o motivo do logótipo — anel de
 * progresso quase fechado com o marcador âmbar — sobre o ardósia da marca.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 72,
          padding: "0 96px",
          background: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "relative",
            width: 260,
            height: 260,
            flexShrink: 0,
          }}
        >
          {/* Três quartos de anel: a falha fica em cima à esquerda, onde
              o marcador âmbar termina o percurso. */}
          <div
            style={{
              width: 260,
              height: 260,
              borderRadius: 260,
              border: "22px solid #f8fafc",
              borderBottomColor: "#334155",
              transform: "rotate(135deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 26,
              top: 48,
              width: 34,
              height: 34,
              borderRadius: 34,
              background: "#f59e0b",
            }}
          />
          {/* Livro aberto ao centro. */}
          <div
            style={{
              position: "absolute",
              left: 74,
              top: 104,
              display: "flex",
              gap: 6,
            }}
          >
            <div
              style={{
                width: 52,
                height: 56,
                background: "#f8fafc",
                transform: "skewY(8deg)",
              }}
            />
            <div
              style={{
                width: 52,
                height: 56,
                background: "#818cf8",
                transform: "skewY(-8deg)",
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 800, color: "#f8fafc" }}>
            <span>Leitu</span>
            <span style={{ color: "#f59e0b" }}>On</span>
          </div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 40, color: "#cbd5e1" }}>
            O teu tracker pessoal de leitura
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 22,
              letterSpacing: 6,
              color: "#94a3b8",
            }}
          >
            SEMPRE NO SEU RITMO
          </div>
        </div>
      </div>
    ),
    size,
  );
}
