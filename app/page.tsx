"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [activeSection, setActiveSection] = useState("done");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["done", "thought", "working"];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-zinc-900 selection:text-zinc-50">
      
      {/* Floating Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-1 p-1.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50">
          {[
            { id: "done", label: "Done", sub: "做过" },
            { id: "thought", label: "Think", sub: "想过" },
            { id: "working", label: "Work", sub: "在做" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "text-white"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-zinc-900 dark:bg-zinc-50 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {item.label}
                <span className={`text-[10px] opacity-60 ${activeSection === item.id ? "font-light" : ""}`}>{item.sub}</span>
              </span>
            </button>
          ))}
        </nav>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 sm:px-12 pt-24 pb-40">
        
        {/* Header / Intro */}
        <header className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              Building tools for <br className="hidden sm:block" />
              <span className="text-zinc-500 dark:text-zinc-500">legal & trading.</span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-lg">
              Developer and investor focused on legal tech and trading tools. 
              4-5 years of experience building AI-powered solutions and exploring market patterns.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/bryaninjapan" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://www.linkedin.com/in/boon-kie-goh-11941296/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </header>

        {/* Section 1: What Have I Done (Bento Grid) */}
        <section id="done" className="mb-40 scroll-mt-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-12 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-zinc-400"></span>
            Milestones & Impact
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
            {/* Stat 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Experience</span>
              <div>
                <span className="text-6xl font-bold tracking-tighter">4-5</span>
                <span className="text-xl ml-2 text-zinc-400">Years</span>
              </div>
            </motion.div>

            {/* Career Highlight (Large) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 bg-zinc-900 dark:bg-white text-zinc-50 dark:text-zinc-900 p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ArrowUpRight className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Legal Tech & Trading Tools</h3>
              <p className="opacity-80 max-w-md">Built AI-powered tools for legal professionals and day traders. Focused on practical solutions that solve real problems.</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-3xl flex flex-col justify-between"
            >
              <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Projects</span>
              <div>
                <span className="text-6xl font-bold tracking-tighter">15+</span>
                <span className="text-xl ml-2 text-zinc-400">Built</span>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl flex flex-col justify-between"
            >
              <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">LLM Models</span>
              <div>
                <span className="text-6xl font-bold tracking-tighter">8+</span>
                <span className="text-xl ml-2 text-zinc-400">Integrated</span>
              </div>
            </motion.div>

             {/* BitQuant Project */}
             <motion.a
              href="https://bryaninjapan.github.io/Bitquant/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 border border-zinc-900 dark:border-zinc-50 p-8 rounded-3xl flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">BitQuant AI</h3>
                  <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <p className="text-zinc-400 dark:text-zinc-600 text-sm mb-4">Risk assessment model for day traders.</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-3 border-zinc-700 text-zinc-400 dark:border-zinc-300 dark:text-zinc-600 font-normal">
                  Live Tool
                </Badge>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-tight">
                  *Disclaimer: This tool is for informational purposes only and does not constitute financial advice.
                </p>
              </div>
            </motion.a>

            {/* English Editor Project */}
            <motion.a
              href="https://bryaninjapan.github.io/englisheditor/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">English Editor</h3>
                  <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">通过导入各种LLM模型来校对英文文本</p>
              </div>
              <div>
                <Badge variant="outline" className="mb-3 border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400 font-normal">
                  Live Tool
                </Badge>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-tight">
                  Professional English editing tool powered by multiple LLM models (Gemini, GPT-4o, etc.)
                </p>
              </div>
            </motion.a>

            {/* JP Legal Translator Project */}
            <motion.a
              href="https://bryaninjapan.github.io/jp-translator/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="md:col-span-2 bg-zinc-100 dark:bg-zinc-800 p-8 rounded-3xl flex flex-col justify-between group cursor-pointer hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold mb-2">JP Legal Translator</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 max-w-md">Professional full-text interpretation tool for Japanese legal documents.</p>
                </div>
                <ArrowUpRight className="w-6 h-6 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0 ml-4" />
              </div>
              <div>
                <Badge variant="outline" className="border-zinc-400 text-zinc-700 dark:border-zinc-600 dark:text-zinc-300 font-normal">
                  Live Tool
                </Badge>
              </div>
            </motion.a>
          </div>
        </section>

        {/* Section 2: What Did I Think (Editorial) */}
        <section id="thought" className="mb-40 scroll-mt-24">
           <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-12 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-zinc-400"></span>
            Philosophy & Thesis
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="text-9xl font-serif text-zinc-100 dark:text-zinc-900 absolute -top-10 -left-10 -z-10 select-none">“</span>
                <h3 className="text-3xl font-serif leading-tight mb-6">
                  The best tools solve real problems for real people.
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Thoughts on building practical solutions in legal tech and trading, based on 4-5 years of hands-on experience.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <article className="prose prose-lg dark:prose-invert prose-zinc max-w-none">
                <p className="lead text-xl text-zinc-600 dark:text-zinc-300">
                  Over the past few years, I've learned that <strong className="text-zinc-900 dark:text-zinc-50">building tools that solve real problems is more valuable than chasing trends</strong>. 
                  Whether it's legal tech or trading tools, the focus should be on practical value.
                </p>
                <p>
                  Each project I've built taught me something new. Working in legal and trading domains showed me 
                  how AI can augment human expertise rather than replace it. The key is understanding the domain 
                  deeply before building solutions.
                </p>
                
                <blockquote className="border-l-2 border-zinc-900 dark:border-zinc-50 pl-6 italic text-2xl font-serif my-12 text-zinc-800 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-900 py-4 pr-4">
                  "The best tools aren't the most complex ones. They're the ones that solve a specific problem 
                  really well for people who need it."
                </blockquote>

                <h4 className="font-sans text-lg font-bold uppercase tracking-wide mt-12 mb-4">Domain Knowledge First</h4>
                <p>
                  Before building tools for legal or trading, I spend time understanding the domain. 
                  The best solutions come from understanding the problems deeply, not from applying technology blindly.
                </p>
                <p>
                  For trading tools, risk assessment is crucial. For legal tools, accuracy and reliability matter most. 
                  Each domain has its own requirements that can't be ignored.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Section 3: What Am I Working On (Project Cards) */}
        <section id="working" className="scroll-mt-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-12 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-zinc-400"></span>
            Current Focus
          </motion.h2>

          <div className="space-y-32">
            {[
              {
                title: "Legal Tech Tools",
                status: "Exploring",
                desc: "Exploring how AI can help legal professionals with document analysis and research. Early stage personal project.",
                color: "bg-emerald-500",
                number: "01"
              },
              {
                title: "Trading Risk Models",
                status: "Learning",
                desc: "Deepening my understanding of risk assessment for day trading. Building tools to help traders make better decisions.",
                color: "bg-blue-500",
                number: "02"
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden">
                    <div className={`absolute inset-0 opacity-10 ${project.color}`} />
                    <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold text-zinc-200 dark:text-zinc-800 select-none">
                      {project.number}
                    </div>
                  </div>
                </div>
                
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-50 animate-pulse" />
                    <Badge variant="secondary" className="rounded-full px-4 font-normal bg-zinc-100 dark:bg-zinc-800">
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="text-4xl font-bold mb-6 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {project.desc}
                  </p>
                  {project.link ? (
                    <Button variant="link" className="p-0 text-lg font-medium hover:no-underline group/btn" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit project <ArrowUpRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  ) : (
                    <Button variant="link" className="p-0 text-lg font-medium hover:no-underline group/btn">
                      Learn more <ArrowUpRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
      
      <footer className="py-12 text-center text-sm text-zinc-400 dark:text-zinc-600">
        <p>© {new Date().getFullYear()} Design & Built with Next.js</p>
      </footer>
    </div>
  );
}
