import { useState } from "react";
import { Sidebar } from "./layout/Sidebar";
import type { PageId } from "./layout/Sidebar";
import { ColourPrimitivePage } from "./pages/ColourPrimitivePage";
import { ColourAliasPage } from "./pages/ColourAliasPage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { TypographyPage } from "./pages/TypographyPage";
import { SpacingPage } from "./pages/SpacingPage";
import { BorderRadiusPage } from "./pages/BorderRadiusPage";
import { fontFamily } from "./tokens";

function renderPage(page: PageId) {
  switch (page) {
    case "colour-primitive": return <ColourPrimitivePage />;
    case "colour-alias":     return <ColourAliasPage />;
    case "components":       return <ComponentsPage />;
    case "typography":       return <TypographyPage />;
    case "spacing":          return <SpacingPage />;
    case "border-radius":    return <BorderRadiusPage />;
  }
}

export default function App() {
  const [page, setPage] = useState<PageId>("colour-primitive");

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#FAFAFA", fontFamily: fontFamily.sans }}>
      <Sidebar active={page} onNavigate={setPage} />
      <main style={{ flex: 1, overflowY: "auto" }}>
        {renderPage(page)}
      </main>
    </div>
  );
}
