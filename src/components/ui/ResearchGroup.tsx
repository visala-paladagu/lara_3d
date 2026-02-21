import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Users, GraduationCap, FlaskConical, Briefcase, Image, Mail, Home, ArrowRight } from "lucide-react";
import laraLogo from "@/assets/lara-logo.png";

const ResearchGroup = () => {
  const navigate = useNavigate();

  const newsItems = [
    "LARA therapy system pilot program launched at special education centers across Tamil Nadu.",
    "Research paper on 'Technology-Assisted Therapy for Children with Down Syndrome' accepted at IEEE ICRA 2024.",
    "Collaboration established with National Institute for Empowerment of Persons with Intellectual Disabilities.",
    "LARA robot prototype successfully completed Phase 2 clinical trials with 95% positive outcomes.",
    "Team member Dr. Priya Sharma awarded Best Researcher in Assistive Robotics 2024.",
    "New grant received from DST-SERB for expanding LARA's emotion recognition capabilities.",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section with Background */}
      <div 
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(30, 58, 95, 0.85), rgba(30, 58, 95, 0.7)), url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920')",
          minHeight: "400px"
        }}
      >
        {/* Logo and Title */}
        <div className="text-center pt-8 pb-4">
          <img 
            src={laraLogo} 
            alt="LARA Logo" 
            className="h-24 mx-auto mb-4 drop-shadow-lg"
          />
          
          <p className="text-xl text-primary-foreground mt-4 font-medium">
            KL University Research Initiative
          </p>
        </div>

        {/* Navigation Menu */}
        <div className="flex justify-center pb-6 px-4">
          <nav className="bg-card/90 backdrop-blur-md border border-border rounded-xl shadow-lg flex flex-wrap justify-center gap-1 p-2">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-foreground hover:bg-muted"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:bg-muted">
                  <Users className="w-4 h-4 mr-1" />
                  People
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50">
                <DropdownMenuItem className="cursor-pointer">Faculty</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Research Scholars</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Interns</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Project Staff</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:bg-muted">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Academics
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50">
                <DropdownMenuItem className="cursor-pointer">Courses</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Prospective Students</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Admissions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:bg-muted">
                  <FlaskConical className="w-4 h-4 mr-1" />
                  Research
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50">
                <DropdownMenuItem className="cursor-pointer">Labs</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Publications</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Projects</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Activities</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:bg-muted">
                  <Briefcase className="w-4 h-4 mr-1" />
                  Vacancies
                  <ChevronDown className="w-4 h-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50">
                <DropdownMenuItem className="cursor-pointer">Internships</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Project Positions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="text-foreground hover:bg-muted">
              <Image className="w-4 h-4 mr-1" />
              Gallery
            </Button>

            <Button variant="ghost" className="text-foreground hover:bg-muted">
              <Mail className="w-4 h-4 mr-1" />
              Contact Us
            </Button>
          </nav>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto px-6 pb-8">
          <p className="text-primary-foreground/90 text-lg leading-relaxed">
            The <strong className="text-primary-foreground">LARA </strong>research group at KL University 
            focuses on developing advanced robotic systems for therapeutic intervention in children with 
            <strong className="text-primary-foreground"> Down Syndrome, Learning Disabilities, Intellectual Disabilities, and Autism</strong>. 
            Our interdisciplinary team combines expertise in Robotics, Intelligent Systems, Child Psychology, 
            and Special Education to create innovative solutions that empower children with special needs.
          </p>
        </div>
      </div>

      {/* News and Recent Events Section */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
            News and Recent Events
          </h2>
          
          <Card className="soft-card border-border">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {newsItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#" 
                className="inline-block mt-6 text-primary hover:opacity-80 underline font-medium transition-colors"
              >
                More publications...
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Know More Button Section */}
      <div className="py-14 px-6 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Interested in learning more about our therapy system?
          </h3>
          <Button
            size="lg"
            onClick={() => navigate("/")}
            className="font-semibold px-8 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            To Know More About the Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Footer Links */}
      <footer className="bg-card border-t border-border py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4 text-muted-foreground text-sm">
          <a href="https://kluniversity.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            KL University
          </a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-primary transition-colors">
            KL University Webmail
          </a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-primary transition-colors">
            Moodle
          </a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-primary transition-colors">
            Central Library
          </a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-primary transition-colors">
            Follow us on Twitter
          </a>
        </div>
        <p className="text-center text-muted-foreground mt-4 text-xs">
          © 2025 LARA Research Group, KL University. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ResearchGroup;
