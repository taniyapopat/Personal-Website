import { Github, Linkedin } from "lucide-react";
d="M18.36 2H21l-6.56 7.49L22 22h-6.59l-4.29-5.6L5.2 22H2.54l7.01-8L2 2h6.7l3.87 5.18L18.36 2Zm-2.31 18h1.26L7.99 4H6.67l9.38 16Z"
/>
</svg>
);
}

export default function Portfolio() {
return (
<div className="min-h-screen w-full bg-black text-neutral-200">
{/* Page wrapper */}
<div className="mx-auto max-w-5xl px-6 sm:px-8">
{/* Header / Hero */}
<header className="pt-20 sm:pt-28">
<motion.h1
initial={{ opacity: 0, y: 12 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-center text-4xl font-extrabold tracking-tight sm:text-6xl"
>
Taniya Popat
</motion.h1>

<motion.p
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.15 }}
className="mt-4 text-center text-sm text-neutral-400 sm:text-base"
>
Cybersecurity | United Airlines | ECDLP | C
</motion.p>

{/* Socials */}
<motion.div
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: 0.25 }}
className="mt-8 flex items-center justify-center gap-6"
>
<a
href="#"
aria-label="GitHub"
className="rounded-full p-2 text-neutral-300 transition hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
>
<Github className="h-6 w-6" />
</a>
<a
href="https://www.linkedin.com/in/taniyapopat"
aria-label="LinkedIn"
className="rounded-full p-2 text-neutral-300 transition hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
>
<Linkedin className="h-6 w-6" />
</a>
<a
href="#"
aria-label="X (Twitter)"
className="rounded-full p-2 text-neutral-300 transition hover:scale-110 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
>
<XIcon className="h-6 w-6" />
</a>
</motion.div>
</header>

{/* About Me */}
<main className="mt-16 pb-24">
<section className="mx-auto max-w-3xl">
<h2 className="text-2xl font-semibold tracking-tight">About Me</h2>

<div className="prose prose-invert prose-p:leading-relaxed mt-6 space-y-5 text-neutral-300">
<p>
Hi there! <span role="img" aria-label="wave">👋</span> I'm Taniya Popat, an ECDLP Associate in United Airlines’ Digital Technology organization. I’m focused on Cybersecurity—especially Cyber Defense—and passionate about helping protect large-scale systems.
</p>
<p>
I enjoy sharing what I’m learning and curating proofs‑of‑concept, making complex security topics approachable. Recently I’ve been hands‑on with cloud security fundamentals, threat detection concepts, and automation basics.
</p>
<p>
Outside of work, I love connecting with other early‑career security folks, swapping resources, and exploring how AI can assist defenders.
</p>
<p>
If you’re in security or just curious about it, I’d love to connect and exchange ideas.
</p>
<p className="text-sm text-neutral-400">
Don't forget to <a href="#contact" className="font-semibold text-emerald-400 hover:text-emerald-300 underline-offset-4 hover:underline">connect!</a>
</p>
</div>
</section>
</main>

{/* Footer */}
<footer id="contact" className="border-t border-white/10 py-10">
<div className="mx-auto max-w-3xl text-center text-sm text-neutral-400">
© {new Date().getFullYear()} Taniya Popat. All rights reserved.
</div>
</footer>
</div>
</div>
);
}
