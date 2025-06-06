
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Contact Information
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch for professional web development services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <User className="h-5 w-5 text-primary" />
                Personal Contact
              </CardTitle>
              <CardDescription>
                Direct contact with Marius Alchimavičius
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="mailto:marius.alchimavicius@gmail.com" className="flex items-center gap-3">
                    <Mail className="h-4 w-4" />
                    marius.alchimavicius@gmail.com
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a 
                    href="https://www.linkedin.com/in/marius-alchimavicius" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>
                Official company details for Marius Software, MB
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-foreground">Company Name</p>
                  <p className="text-muted-foreground">Marius Software, MB</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground">Company ID</p>
                  <p className="text-muted-foreground">306965772</p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-muted-foreground">
                    Fabriko g. 33C<br />
                    LT-25135 Vilnius<br />
                    Lithuania
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-foreground">Services</p>
                  <p className="text-muted-foreground">
                    Professional web development, React/TypeScript consulting, fintech solutions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Technical Expertise:</strong> TypeScript, Next.js, React.js, Node.js, Frontend Architecture, 
                Team Leadership, Fintech Development, UI/UX Implementation
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Languages:</strong> English (Professional), Lithuanian (Native), Russian (Elementary)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
