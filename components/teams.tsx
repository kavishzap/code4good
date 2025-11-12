"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type TeamItem = {
  /** Public/static path to the team image (e.g. /top-teams/xxx.jpg) */
  imageSrc: string;
  /** Team name to show under the image */
  name: string;
  /** 1..10 rank; if omitted we derive from array index */
  rank?: number;
  /** Optional subtitle: score, points, city, etc. */
  subtitle?: string;
  /** Optional link to team page or socials */
  href?: string;
};

type TopTeamsProps = {
  title?: string;
  description?: string;
  teams: TeamItem[]; // pass your 10 images here
  className?: string;
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.04, duration: 0.28, ease: "easeOut" },
  }),
};

export function TopTeamsGrid({
  title = "Top 10 Teams",
  description = "Ranked by latest standings",
  teams,
  className,
}: TopTeamsProps) {
  return (
    <section
      id="top-teams"
      className={cn("py-16 md:py-20 container mx-auto px-8", className)}
    >
      <div className="mb-10 flex flex-col items-center text-center gap-2">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={cn(
          "grid gap-5",
          // responsive grid: 2 -> 3 -> 4 -> 5 columns
          "grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        )}
      >
        {teams.slice(0, 10).map((team, i) => {
          const rank = team.rank ?? i + 1;
          const CardInner = (
            <Card
              className={cn(
                "group relative overflow-hidden rounded-2xl border-border/60",
                "transition-transform duration-200 hover:-translate-y-1"
              )}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={team.imageSrc}
                    alt={team.name}
                    fill
                    priority={i < 5}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* gradient overlay for legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  {/* Rank badge */}
                  <Badge
                    variant="secondary"
                    className={cn(
                      "absolute left-3 top-3 select-none",
                      "bg-primary text-primary-foreground border-0"
                    )}
                  >
                    #{rank}
                  </Badge>
                </div>

                <div className="p-4 text-center flex flex-col items-center justify-center">
                  <h3 className="text-base font-medium leading-tight">
                    {team.name}
                  </h3>
                  {team.subtitle ? (
                    <span className="text-xs text-muted-foreground mt-1">
                      {team.subtitle}
                    </span>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          );

          return (
            <motion.li
              key={`${team.name}-${i}`}
              custom={i}
              variants={itemVariants}
            >
              {team.href ? (
                <a href={team.href} target="_blank" rel="noopener noreferrer">
                  {CardInner}
                </a>
              ) : (
                CardInner
              )}
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}

/* ---------- Example usage ----------
Place your 10 images (from your screenshot) inside /public/top-teams/
(e.g. /public/top-teams/WhatsApp-Image-1.jpg, ...). Then render:

import { TopTeamsGrid, type TeamItem } from "@/components/top-teams";

const TEAMS: TeamItem[] = [
  { imageSrc: "/top-teams/WhatsApp-Image-1.jpg", name: "Team A", rank: 1 },
  { imageSrc: "/top-teams/WhatsApp-Image-2.jpg", name: "Team B", rank: 2 },
  { imageSrc: "/top-teams/WhatsApp-Image-3.jpg", name: "Team C", rank: 3 },
  { imageSrc: "/top-teams/WhatsApp-Image-4.jpg", name: "Team D", rank: 4 },
  { imageSrc: "/top-teams/WhatsApp-Image-5.jpg", name: "Team E", rank: 5 },
  { imageSrc: "/top-teams/WhatsApp-Image-6.jpg", name: "Team F", rank: 6 },
  { imageSrc: "/top-teams/WhatsApp-Image-7.jpg", name: "Team G", rank: 7 },
  { imageSrc: "/top-teams/WhatsApp-Image-8.jpg", name: "Team H", rank: 8 },
  { imageSrc: "/top-teams/WhatsApp-Image-9.jpg", name: "Team I", rank: 9 },
  { imageSrc: "/top-teams/WhatsApp-Image-10.jpg", name: "Team J", rank: 10 },
];

export default function Page() {
  return <TopTeamsGrid title="Top 10 Teams" teams={TEAMS} />;
}
------------------------------------ */
