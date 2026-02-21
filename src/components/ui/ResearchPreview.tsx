import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, Users, BookOpen, Award } from "lucide-react";

const ResearchPreview = () => {
  const navigate = useNavigate();

  const researchHighlights = [
    {
      icon: FlaskConical,
      title: "Research Focus",
      description: "Advanced robotic systems for therapeutic intervention"
    },
    {
      icon: Users,
      title: "Team",
      description: "Interdisciplinary experts in robotics and psychology"
    },
    {
      icon: BookOpen,
      title: "Publications",
      description: "Published papers at IEEE and international conferences"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Awards and grants for innovative research"
    }
  ];

  return (
    <section id="research-group" className="relative py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider text-sm">RESEARCH GROUP</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
            LARA Research Group
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Innovation at KL University for Therapeutic Robotics
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover how our dedicated research team at KL University is developing cutting-edge 
            robotic solutions to help children with special needs through therapeutic intervention.
          </p>
        </div>

        {/* Research Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {researchHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="soft-card border-border hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-foreground">{highlight.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/research")}
            className="px-8 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            Explore Research Group
          </Button>
          <p className="text-muted-foreground mt-4 text-sm">
            Learn more about our team, publications, and ongoing projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchPreview;
