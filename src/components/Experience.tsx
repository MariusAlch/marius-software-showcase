
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Revolut",
    role: "Senior Web Engineer",
    period: "Aug 2022 – Present",
    description: "Built Revolut's all-in-one Fincrime platform, mentored new team members, and led development plans and UI reviews.",
    skills: ["TypeScript", "React", "Fintech", "Team Leadership"]
  },
  {
    company: "Boson Protocol",
    role: "Lead Web Engineer",
    period: "Jul 2021 – Aug 2022",
    description: "Led frontend for decentralized marketplace, built cross-page market widget, and interviewed frontend candidates.",
    skills: ["React", "Web3", "Leadership", "Frontend Architecture"]
  },
  {
    company: "Namecheap, Inc",
    role: "Senior Frontend Engineer",
    period: "Oct 2018 – Jul 2021",
    description: "Led frontend of EasyWP product, built shared UI library, and migrated app from Laravel to React + Node.js.",
    skills: ["React", "Node.js", "UI Libraries", "Migration"]
  },
  {
    company: "Edgeless",
    role: "Senior Software Engineer",
    period: "Sep 2017 – Oct 2018",
    description: "Built an early blockchain staking platform and set frontend development standards.",
    skills: ["Blockchain", "Frontend Standards", "React", "TypeScript"]
  },
  {
    company: "TripCreator",
    role: "Frontend Developer",
    period: "Oct 2015 – Sep 2017",
    description: "Built payments platform, migrated frontend to React + TypeScript, and introduced monorepo structure.",
    skills: ["React", "TypeScript", "Payments", "Monorepo"]
  },
  {
    company: "Tieto",
    role: "Software Developer",
    period: "Oct 2014 – Oct 2015",
    description: "Maintained invoice, expense, and project management tools.",
    skills: ["Software Maintenance", "Enterprise Tools", "Development"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            8+ years of experience building scalable web applications and leading development teams
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 border-border/50 hover:border-border">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-foreground">{exp.company}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">
                      {exp.role}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">Bachelor of Science in Computer Software Engineering</p>
                <p className="text-muted-foreground">Vilniaus Universitetas (2014-2018)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
