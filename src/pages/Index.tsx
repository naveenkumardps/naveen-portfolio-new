
import { ArrowRight, Code, Database, Globe, Mail, Phone, Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "TypeScript", level: 85, color: "bg-blue-600" },
    { name: "Node.js", level: 80, color: "bg-green-500" },
    { name: "Python", level: 88, color: "bg-yellow-500" },
    { name: "Laravel", level: 82, color: "bg-red-500" },
    { name: "Docker", level: 75, color: "bg-cyan-500" },
    { name: "FastAPI", level: 83, color: "bg-teal-500" },
    { name: "PostgreSQL", level: 87, color: "bg-indigo-500" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management API",
      description: "RESTful API built with FastAPI and Python for team collaboration",
      technologies: ["Python", "FastAPI", "MongoDB", "Docker"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Real-time Chat App",
      description: "WebSocket-based chat application with Laravel and Vue.js",
      technologies: ["Laravel", "Vue.js", "WebSocket", "Redis"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-800">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-slate-900 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-600 hover:text-slate-900 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-slate-900 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-900 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
                Full Stack Web
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Developer</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                Building scalable, secure, and reliable web applications with modern technologies
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Badge variant="secondary" className="text-lg px-4 py-2">Laravel</Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">FastAPI</Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">PHP</Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">Python</Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">RabbitMQ</Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">Serverless</Badge>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3" onClick={() => scrollToSection('projects')}>
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
            </div>
            
            <div className="mt-16 animate-bounce">
              <ChevronDown className="h-8 w-8 text-slate-400 mx-auto cursor-pointer" onClick={() => scrollToSection('about')} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  I'm a passionate full-stack developer with expertise in building scalable web applications. 
                  With a strong foundation in both frontend and backend technologies, I create solutions that are not only functional but also user-friendly.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  My experience spans across various technologies including Laravel, FastAPI, Python, and modern JavaScript frameworks. 
                  I believe in writing clean, maintainable code and following best practices in software development.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">Clean Code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">Database Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <span className="text-slate-700">Web Architecture</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full opacity-20 animate-pulse"></div>
                  <img 
                    src="/lovable-uploads/87b3243b-cfe6-4f40-880d-15acbcdd8ed3.png" 
                    alt="Developer" 
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Technical Skills</h2>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-700">{skill.name}</span>
                    <span className="text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                    <CardDescription className="text-slate-600">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-slate-300 mb-12">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-slate-300">your.email@example.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-slate-300">+1 (555) 123-4567</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-slate-300">Your City, Country</p>
              </div>
            </div>
            
            <div className="flex justify-center gap-6">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-slate-900">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-slate-900">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Name. All rights reserved. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
