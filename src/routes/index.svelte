<script lang="ts">
  import { onMount } from "svelte";

  let dark = true;
  onMount(() => {
    dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  });

  function toggleDarkMode() {
    dark = !dark;
    document.documentElement.classList.toggle("dark", dark);
  }

  const projects = [
    {
      title: "Flogram Web Compiler",
      description:
        "Built a secure and scalable backend with SpringBoot + PostgreSQL for a web-based compiler. Implemented user authentication, project compilation, and code execution services.",
      stack: ["Web Assembly", "Spring Boot", "PostgreSQL", "REST API"],
      link: "https://flogram.dev"
    },
	{
      title: "89Transfers Booking Platform",
      description:
        "Full-stack app for booking bus transfers with Google Maps routing, online payments via Stripe, and live driver notifications via WhatsApp, Email, and Slack.",
      stack: ["NestJS", "Prisma", "Stripe", "Google Maps"],
	  link: "https://89transfers.com/en"
    },
	{
      title: "TunePad Drum Logger",
      description:
        "Embedded Python + C system for recording and replaying drum sequences to improve music education. Admin dashboard built with React + Flask.",
      stack: ["Python", "C", "React", "Flask"],
	  link: "https://learn.tunepad.com/interactives/drumscope/"
    },
	{
      title: "Income Predictor ML",
      description:
        "Trained Random Forest and Logistic Regression models on Kaggle census data to predict income brackets. Evaluated using KNN and confusion matrix; visualized with Tableau.",
      stack: ["Python", "Scikit-learn", "Tableau"],
	  link: "https://github.com/didiermun/income_predictor"
    },
	{
      title: "Racket Test Generator",
      description:
        "Developed an AI-powered test generator for Racket code using GPT-3.5. Integrated with DrRacket and CLI to streamline debugging.",
      stack: ["GPT-3.5", "DrRacket"]
    },
    {
      title: "LLMTyped DT",
      description:
        "Research project investigating how well LLMs can infer accurate TypeScript types for real-world JavaScript libraries. Built a tool that consumes JavaScript libraries, converts them to TypeScript using LLM-generated type annotations, compares the generated types to human-authored definitions in DefinitelyTyped, identifies mismatches and inconsistencies, and compiles comprehensive reports. This research addresses the gap where JavaScript lacks a built-in static type system and explores whether LLMs can help automate the TypeScript ecosystem by generating correct typings and identifying errors in existing human-written definitions.",
      stack: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
    }
  ];

  const experiences = [
    {
      title: "Teaching Assistant (Data Structures and Algorithms & Programming Languages)",
      company: "Northwestern University",
      date: "September 2024 – Present",
      description: [
        "Guided 120+ students in data structures (AVL trees, heaps, graphs), improving lab completion rates by 20%.",
        "Created real-world algorithm demos, improving application accuracy by 25% on assessments.",
        "Assessed 20+ assignments weekly with personalized feedback, contributing to a 15% class-wide performance increase."
      ]
    },
    {
      title: "CPS GenAI Specialist Intern",
      company: "Chicago Public Schools",
      date: "June 2025 – September 2025",
      description: [
        "Designed scalable GenAI rollout pipeline across 600+ schools, cutting approval delays by 35%.",
        "Developed GenAI solutions (Python/JavaScript) to automate educator workflows, reducing administrative work by 25%."
      ]
    },
    {
      title: "Tunepad – Software Engineering Intern",
      company: "Northwestern University",
      date: "June 2024 – September 2024",
      description: [
        "Built embedded system (Python + C) for drum sequences, increasing student engagement by 30%.",
        "Built real-time React + Flask dashboard with task tracking, increasing operational transparency by 40%.",
        "Refactored coding lesson pipeline, increasing session completion rates by 20% for 200+ K–12 students."
      ]
    },
    {
      title: "Research Student – Programming Languages",
      company: "Northwestern University",
      date: "May 2024 – August 2024",
      description: [
        "Developed automated test-generation tool for Racket using chain-of-thought prompting. Tool supports CS321 faculty and research projects."
      ]
    }
  ];
</script>

<header class="px-6 py-4 flex justify-between items-center shadow">
  <h1 class="text-xl font-bold text-gray-400">Didier Munezero</h1>
</header>

<section class="px-6 py-16">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-5xl font-bold mb-6 text-gray-300">Hi, I’m Didier.</h2>
		<p class="py-2 font-para indent-8 text-lg text-gray-400">A Computer Science junior at Northwestern University, passionate about applying technology to achieve social impact. I’ve contributed to projects like <a href="https://flogram.dev/" target="_blank" class="text-indigo-600">Flogram</a> (a web-based compiler) and <a href="https://tunepad.com" target="_blank" class="text-indigo-600">Tunepad</a> (an ed-tech platform combining music and coding). I also enjoy music and mentoring, always looking for ways to use code to empower others.</p>
  </div>
</section>

<section class="px-6 py-16">
  <h2 class="text-4xl font-bold mb-10 text-center text-gray-300">Projects</h2>
  <div class="grid gap-8 md:grid-cols-2">
    {#each projects as p}
      <div class="border border-gray-700 rounded-xl p-6 hover:shadow-lg transition text-gray-300">
        <h3 class="text-2xl font-semibold">{p.title}</h3>
        <p class="mt-2 font-para text-gray-400">{p.description}</p>
        <div class="mt-2 text-sm text-gray-500">
          Stack: {p.stack.join(", ")}
        </div>
        {#if p.link}
          <a href={p.link} target="_blank" class="inline-block mt-4 text-indigo-600 hover:underline">View Project</a>
        {/if}
      </div>
    {/each}
  </div>
</section>

<section class="px-6 py-16 text-gray-300">
  <h2 class="text-4xl font-bold mb-10 text-center">Experience</h2>
  <div class="space-y-8">
    {#each experiences as e}
      <div class="border-l-4 border-indigo-500 pl-6">
        <h3 class="text-xl font-bold">{e.title}</h3>
        <div class="text-sm text-gray-500">{e.company} · {e.date}</div>
        <ul class="mt-2 list-disc ml-4 space-y-1 font-para text-gray-400">
          {#each e.description as line}
            <li>{line}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

<footer class="text-center py-6 border-t border-gray-700 text-gray-400">
  <div class="space-x-6">
    <a href="mailto:didiermunezero2027@u.northwestern.edu" class="hover:underline">Email</a>
    <a href="https://github.com/didiermun" target="_blank" class="hover:underline">GitHub</a>
    <a href="https://www.linkedin.com/in/didiermun/" target="_blank" class="hover:underline">LinkedIn</a>
    <a href="https://twitter.com/didier_mun" target="_blank" class="hover:underline">Twitter</a>
  </div>
  <p class="mt-4 text-sm text-gray-400">© {new Date().getFullYear()} Didier Munezero</p>
</footer>

<style>
  /* :global(body) {
    @apply bg-white dark:bg-black text-black dark:text-white transition-colors duration-300;
  } */
</style>
