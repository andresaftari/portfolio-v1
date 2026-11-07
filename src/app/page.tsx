import { About } from "@/features/about/About";
import { Contact } from "@/features/contact/Contact";
import { Hero } from "@/features/hero/Hero";
import { Journey } from "@/features/journey/Journey";
import { Portfolio } from "@/features/portfolio/Portfolio";
import { ProjectDialogProvider } from "./_components/ProjectDialogProvider";

export default function Home() {
  return (
    <ProjectDialogProvider>
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Journey />
        <Contact />
      </main>
    </ProjectDialogProvider>
  );
}
