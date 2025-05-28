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
	  link: "https://89tranfers.com"
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
      stack: ["Python", "Scikit-learn", "Tableau"]
    },
	{
      title: "Racket Test Generator",
      description:
        "Developed an AI-powered test generator for Racket code using GPT-3.5. Integrated with DrRacket and CLI to streamline debugging.",
      stack: ["GPT-3.5", "DrRacket"]
    },
    {
      title: "Wildlife Ranger Report Tool",
      description:
        "Built a real-time reporting tool for rangers in Rwanda to document gorilla sightings. Urgent reports notify veterinarians instantly via socket messages.",
      stack: ["NextJS", "PostgreSQL", "Socket.io"],
	  link: "https://npmg-client-six.vercel.app"
    }
  ];

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "TunePad, Northwestern University",
      date: "May 2024 – Aug 2024",
      description: [
        "Built an embedded drum system (Python + C) to enhance hands-on music learning.",
        "Developed a ReactJS + Flask dashboard with real-time tracking.",
        "Maintained K–12 Python coding lessons and conducted research on music and learning with 360° video data."
      ]
    },
    {
      title: "Teaching Assistant – Data Structures & Algorithms",
      company: "Northwestern University",
      date: "Sept 2024 – Present",
      description: [
        "Led 120+ students in mastering AVL trees, heaps, and graph algorithms.",
        "Reviewed 20+ assignments weekly and improved overall class grades by 15%."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "89Transfers, Remote (Spain)",
      date: "May 2023 – Sept 2023",
      description: [
        "Built a full-stack bus booking platform with Stripe, Google Maps, and real-time messaging.",
        "Implemented NestJS backend and Prisma ORM for efficient task orchestration."
      ]
    },
    // {
    //   title: "Incoming SWE Intern",
    //   company: "Flogram",
    //   date: "Summer 2025",
    //   description: [
    //     "Contributing to the development of a new web-based programming language and compiler infrastructure."
    //   ]
    // }
  ];
</script>

<header class="px-6 py-4 flex justify-between items-center shadow">
  <h1 class="text-xl font-bold text-gray-400">Didier Munezero</h1>
</header>

<section class="px-6 py-16">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-5xl font-bold mb-6 text-gray-300">Hi, I’m Didier.</h2>
		<p class="py-2 font-para indent-8 text-lg text-gray-400">A Computer Science junior at Northwestern University, passionate about scalable systems, educational tech, and AI solutions. I’ve contributed to projects like <a href="https://flogram.dev/" target="_blank" class="text-indigo-600">Flogram</a> (a web-based compiler) and <a href="https://tunepad.com" target="_blank" class="text-indigo-600">Tunepad</a> (an ed-tech platform combining music and coding). I also enjoy music and mentoring, always looking for ways to use code to empower others.</p>
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
