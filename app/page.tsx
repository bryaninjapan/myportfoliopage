"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [activeSection, setActiveSection] = useState("done");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["done", "thought", "working"];
      const scrollPosition = window.scrollY + 200;

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
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center">
            <Tabs
              value={activeSection}
              onValueChange={(value) => {
                setActiveSection(value);
                scrollToSection(value);
              }}
              className="w-full max-w-2xl"
            >
              <TabsList className="w-full justify-center bg-transparent p-0 h-auto">
                <TabsTrigger
                  value="done"
                  className="text-base font-medium px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:shadow-none rounded-none"
                >
                  What Have I Done
                  <span className="ml-2 text-muted-foreground text-sm">我做了什么</span>
                </TabsTrigger>
                <TabsTrigger
                  value="thought"
                  className="text-base font-medium px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:shadow-none rounded-none"
                >
                  What Did I Think
                  <span className="ml-2 text-muted-foreground text-sm">我想了什么</span>
                </TabsTrigger>
                <TabsTrigger
                  value="working"
                  className="text-base font-medium px-6 py-2 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:shadow-none rounded-none"
                >
                  What Am I Working On
                  <span className="ml-2 text-muted-foreground text-sm">我正在做什么</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        {/* Section 1: What Have I Done */}
        <section
          id="done"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              What Have I Done
            </h2>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">30+</CardTitle>
                  <CardDescription>Years Experience</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">12+</CardTitle>
                  <CardDescription>Successful Exits</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">45%</CardTitle>
                  <CardDescription>Average Annual Return</CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Career Milestones */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Career Milestones</h3>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Senior Executive, Fortune 500</CardTitle>
                      <CardDescription>2015 - 2020</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Led strategic initiatives resulting in $2B+ revenue growth and market expansion across 15 countries.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Founding Partner, Investment Firm</CardTitle>
                      <CardDescription>2005 - 2015</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Co-founded and scaled investment firm from $50M to $1.2B AUM with focus on technology and healthcare sectors.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Venture Capital Principal</CardTitle>
                      <CardDescription>1995 - 2005</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Early-stage investor in 40+ companies, with 8 successful IPOs and 12 strategic acquisitions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right: Investment Achievements */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Investment Achievements</h3>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Tech Sector Portfolio</CardTitle>
                      <CardDescription>2018 - 2023</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Achieved 320% total return over 5 years through strategic positions in AI, cloud infrastructure, and enterprise software.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Healthcare Exit</CardTitle>
                      <CardDescription>2021</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Led Series B investment in biotech startup, resulting in $450M acquisition with 18x return in 3 years.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Real Estate Fund</CardTitle>
                      <CardDescription>2010 - 2020</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Managed $800M commercial real estate fund with consistent 12-15% annual returns and zero defaults.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: What Did I Think */}
        <section
          id="thought"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-muted/30"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[700px] mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              What Did I Think
            </h2>

            {/* Key Callout */}
            <Card className="mb-12 border-l-4 border-l-primary bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  The Most Important Lesson
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg italic text-foreground/90 leading-relaxed">
                  "The power of compounding is not just mathematical—it's philosophical. 
                  Every decision compounds. Every relationship compounds. Every investment compounds. 
                  The question isn't whether you're compounding, but whether you're compounding in the right direction."
                </blockquote>
              </CardContent>
            </Card>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 text-base leading-8 text-foreground/90 font-serif" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">The Power of Compounding</h3>
                  <p>
                    Over three decades, I've learned that <strong>compounding is the most powerful force in wealth creation</strong>. 
                    But it's not just about money—it's about knowledge, relationships, and strategic positioning. 
                    Each successful investment taught me something that made the next one better. Each relationship 
                    opened doors that led to opportunities I couldn't have predicted.
                  </p>
                  <p>
                    The key insight is that <strong>time is the ultimate multiplier</strong>. A 15% annual return over 
                    30 years doesn't just add up—it multiplies. $1 million becomes $66 million. But more importantly, 
                    the experience, judgment, and network you build over those years become exponentially more valuable.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Risk Management vs. Growth</h3>
                  <p>
                    Many investors see risk management and growth as opposing forces. I've found they're complementary. 
                    <strong> True risk management isn't about avoiding risk—it's about understanding it deeply</strong> and 
                    positioning yourself to capture asymmetric upside while limiting downside.
                  </p>
                  <blockquote className="border-l-4 border-l-foreground/20 pl-6 my-6 italic text-foreground/80">
                    "The best investments aren't the ones with no risk. They're the ones where the risk is misunderstood 
                    by the market, creating opportunity for those who see it clearly."
                  </blockquote>
                  <p>
                    This philosophy has guided me through market cycles, from the dot-com bubble to the 2008 financial 
                    crisis to the recent pandemic. In each case, understanding the true nature of risk—not just avoiding it— 
                    created the best opportunities.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Strategic Patience</h3>
                  <p>
                    In a world of instant gratification, <strong>strategic patience is a competitive advantage</strong>. 
                    The best deals I've made were ones I waited for. The best investments were ones I researched for months 
                    before committing capital.
                  </p>
                  <p>
                    This doesn't mean inaction. It means being ready to act decisively when the right opportunity appears. 
                    It means building the capacity—financial, intellectual, and relational—to move quickly when others can't.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">The Network Effect</h3>
                  <p>
                    Early in my career, I focused on transactions. Later, I learned that <strong>relationships are the real asset</strong>. 
                    The network you build—of entrepreneurs, investors, advisors, and partners—becomes more valuable over time. 
                    Each connection compounds, creating opportunities that wouldn't exist in isolation.
                  </p>
                  <p>
                    This network isn't built through networking events or LinkedIn connections. It's built through 
                    <strong> consistent value creation</strong>—helping others succeed, sharing knowledge freely, and 
                    maintaining integrity in every interaction. Over 30 years, this network has become my most valuable asset.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3: What Am I Working On */}
        <section
          id="working"
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              What Am I Working On
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-6xl">🚀</div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">AI-Powered Investment Platform</CardTitle>
                      <Badge variant="default" className="bg-green-500/10 text-green-700 dark:text-green-400">
                        Active
                      </Badge>
                    </div>
                    <CardDescription>
                      Building next-generation investment tools using machine learning to identify market inefficiencies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4">
                      Developing a platform that combines quantitative analysis with qualitative insights, 
                      enabling more informed investment decisions for institutional and high-net-worth clients.
                    </p>
                  </CardContent>
                  <div className="px-6 pb-6">
                    <Button className="w-full">Learn More</Button>
                  </div>
                </Card>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center">
                    <div className="text-6xl">🌱</div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">Climate Tech Fund</CardTitle>
                      <Badge variant="default" className="bg-blue-500/10 text-blue-700 dark:text-blue-400">
                        Funding Stage
                      </Badge>
                    </div>
                    <CardDescription>
                      Launching a $500M fund focused on sustainable technology and climate solutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4">
                      Assembling a portfolio of companies addressing climate change through innovative technology, 
                      with focus on energy storage, carbon capture, and sustainable agriculture.
                    </p>
                  </CardContent>
                  <div className="px-6 pb-6">
                    <Button className="w-full" variant="outline">Contact About This</Button>
                  </div>
                </Card>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center">
                    <div className="text-6xl">🤝</div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">Strategic Advisory Network</CardTitle>
                      <Badge variant="default" className="bg-purple-500/10 text-purple-700 dark:text-purple-400">
                        Seeking Partners
                      </Badge>
                    </div>
                    <CardDescription>
                      Creating an exclusive network of experienced executives to advise high-growth companies
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4">
                      Building a curated community where seasoned leaders share strategic guidance with promising 
                      companies, combining decades of experience with fresh perspectives.
                    </p>
                  </CardContent>
                  <div className="px-6 pb-6">
                    <Button className="w-full" variant="outline">Learn More</Button>
                  </div>
                </Card>
              </motion.div>
        </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
