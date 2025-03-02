"use client";
import { useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface GridItemProps {
  area: string;
  title: string;
  description?: string;
}

export const GridItem = ({ area, title, description }: GridItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="bg-main relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 box-shadow dark:shadow-[0px_0px_27px_0px_#2D2D2D] dark:shadow-primary md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400">
                {expanded ? description : truncateText(description || "", 40)}
              </h2>
              {description && description.split(" ").length > 40 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-blue-500 hover:underline mt-2"
                >
                  {expanded ? "Show Less" : "Read More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
