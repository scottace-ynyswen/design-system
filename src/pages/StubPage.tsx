import { fontFamily, fontWeight } from "../tokens";

interface StubPageProps {
  title: string;
}

export function StubPage({ title }: StubPageProps) {
  return (
    <div style={{ padding: "40px 48px" }}>
      <h1 style={{ fontFamily: fontFamily.sans, fontSize: "24px", fontWeight: fontWeight.bold, color: "#1F1F1F", marginBottom: "6px" }}>
        {title}
      </h1>
      <p style={{ fontFamily: fontFamily.sans, fontSize: "14px", color: "#8A8A8A" }}>
        Coming soon.
      </p>
    </div>
  );
}
