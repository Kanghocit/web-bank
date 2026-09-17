import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #ff4d4d, #00a651 55%, #1ec9a7)",
          color: "white",
          fontSize: 28,
          fontWeight: 800,
        }}
      >
        V
      </div>
    ),
    { ...size },
  );
}
