"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Heatmap = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.Heatmap),
  { ssr: false },
);

export function Logo() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#1a1a1a]" />;
  }

  return (
    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden cursor-pointer">
      <Heatmap
        speed={2.02}
        contour={0.396}
        angle={23}
        noise={0}
        innerGlow={0.54}
        outerGlow={0.78}
        scale={1.46}
        image="https://avatars.githubusercontent.com/u/85168600?v=4"
        colors={[
          "#11206A",
          "#1F3BA2",
          "#2F63E7",
          "#6BD7FF",
          "#FFE679",
          "#FF991E",
          "#FF4C00",
        ]}
        colorBack="#00000000"
        style={{
          backgroundColor: "#000000",
          borderRadius: "calc(infinity * 1px)",
          height: "100%",
          width: "100%",
          outline: "2px solid #FFFFFF",
        }}
      />
    </div>
  );
}
