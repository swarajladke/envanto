import type { Metadata } from "next";
import { Figma, Github, Linkedin, LucideIcon, PenTool, Twitter, WandSparkles } from "lucide-react";
import { LinkButton } from "@/components/shared/button";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the creator behind PixelForge and the mission behind each product."
};

const tools: { label: string; icon: LucideIcon }[] = [
  { label: "Figma", icon: Figma },
  { label: "VS Code", icon: WandSparkles },
  { label: "Illustrator", icon: PenTool },
  { label: "GitHub", icon: Github }
];

export default function AboutPage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-14">
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="mx-auto h-72 w-72 rounded-full border border-border bg-gradient-to-br from-accent to-[#1a1a1a]" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">About the Creator</p>
            <h1 className="mt-4 font-display text-6xl font-bold leading-none tracking-tight">
              Hey, I&apos;m {brand.creator}.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base">
              I design and build premium digital products for designers, developers, and studios that want to ship faster without sacrificing craft.
            </p>
          </div>
        </div>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="card-frame p-6">
            <h2 className="font-display text-3xl font-bold">Why I build these products</h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary">
              I kept seeing teams lose momentum in repetitive setup work. PixelForge products are built to remove that friction and give creators a strong, polished starting point.
            </p>
          </article>
          <article className="card-frame p-6">
            <h2 className="font-display text-3xl font-bold">What I sell</h2>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              <li>Website templates for launches and portfolios</li>
              <li>UI kits and app foundations for SaaS and fintech</li>
              <li>Figma templates, graphics, and illustration packs</li>
            </ul>
          </article>
        </section>

        <section>
          <h2 className="font-display text-4xl font-bold tracking-tight">Tools I use</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <article key={tool.label} className="card-frame flex items-center gap-3 p-4">
                <tool.icon className="size-5 text-accent" />
                <p className="text-sm font-medium">{tool.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="card-frame p-6">
          <h2 className="font-display text-4xl font-bold tracking-tight">Connect</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="#" className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border">
              <Twitter className="size-4" />
            </a>
            <a href="#" className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border">
              <Github className="size-4" />
            </a>
            <a href="#" className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border">
              <Linkedin className="size-4" />
            </a>
          </div>
          <div className="mt-5">
            <LinkButton href="/search?q=custom%20project">Work with me</LinkButton>
          </div>
        </section>
      </div>
    </section>
  );
}
