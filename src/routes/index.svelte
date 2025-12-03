<script lang="ts">
  import { onMount } from "svelte";

  let dark = true;
  onMount(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      dark = saved === "true";
    } else {
    dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    document.documentElement.classList.toggle("dark", dark);
  });

  function toggleDarkMode() {
    dark = !dark;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("darkMode", dark.toString());
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
        "Research project investigating LLM-generated TypeScript types for JavaScript libraries. Built a tool that converts JS libraries to TypeScript, compares generated types to DefinitelyTyped definitions, and identifies mismatches to compile comprehensive reports.",
      stack: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
    }
  ];

  const experiences = [
    {
      title: "Teaching Assistant (DSA & Programming Languages)",
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

<button
  on:click={toggleDarkMode}
  class="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
  aria-label="Toggle dark mode"
>
  {#if dark}
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  {:else}
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  {/if}
</button>

<section class="px-6 py-16 bg-white dark:bg-[#000000]">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-300">Hi, I'm Didier.</h2>
		<p class="py-2 font-para indent-8 text-lg text-gray-600 dark:text-gray-400">A Computer Science junior at Northwestern University, passionate about applying technology to achieve social impact. I've contributed to projects like <a href="https://flogram.dev/" target="_blank" class="text-indigo-600 dark:text-indigo-400 hover:underline">Flogram</a> (a web-based compiler) and <a href="https://tunepad.com" target="_blank" class="text-indigo-600 dark:text-indigo-400 hover:underline">Tunepad</a> (an ed-tech platform combining music and coding). I also enjoy music and mentoring, always looking for ways to use code to empower others.</p>
  </div>
</section>

<section class="px-6 py-16 bg-gray-50 dark:bg-[#000000]">
  <h2 class="text-4xl font-bold mb-10 text-center text-gray-800 dark:text-gray-300">Projects</h2>
  <div class="grid gap-8 md:grid-cols-2">
    {#each projects as p}
      <div class="border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300">
        <h3 class="text-2xl font-semibold">{p.title}</h3>
        <p class="mt-2 font-para text-gray-600 dark:text-gray-400">{p.description}</p>
        <div class="mt-2 text-sm text-gray-500 dark:text-gray-500">
          Stack: {p.stack.join(", ")}
        </div>
        {#if p.link}
          <a href={p.link} target="_blank" class="inline-block mt-4 text-indigo-600 dark:text-indigo-400 hover:underline">View Project</a>
        {/if}
      </div>
    {/each}
  </div>
</section>

<section class="px-6 py-16 bg-white dark:bg-[#000000] text-gray-800 dark:text-gray-300">
  <h2 class="text-4xl font-bold mb-10 text-center">Experience</h2>
  <div class="space-y-8">
    {#each experiences as e}
      <div class="border-l-4 border-indigo-500 dark:border-indigo-400 pl-6">
        <h3 class="text-xl font-bold">{e.title}</h3>
        <div class="text-sm text-gray-500 dark:text-gray-500">{e.company} · {e.date}</div>
        <ul class="mt-2 list-disc ml-4 space-y-1 font-para text-gray-600 dark:text-gray-400">
          {#each e.description as line}
            <li>{line}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

<footer class="text-center py-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#000000] text-gray-600 dark:text-gray-400">
  <div class="space-x-6">
    <a href="mailto:didiermunezero2027@u.northwestern.edu" class="hover:underline">Email</a>
    <a href="https://github.com/didiermun" target="_blank" class="hover:underline">GitHub</a>
    <a href="https://www.linkedin.com/in/didiermun/" target="_blank" class="hover:underline">LinkedIn</a>
    <a href="https://twitter.com/didier_mun" target="_blank" class="hover:underline">Twitter</a>
  </div>
  <p class="mt-4 text-sm">© {new Date().getFullYear()} Didier Munezero</p>
</footer>

<style>
  :global(body) {
    @apply bg-white dark:bg-[#000000] transition-colors duration-300;
  }
</style>
