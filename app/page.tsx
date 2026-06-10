"use client";

import { useState } from "react";
import { 
  Code, Database, Brain, Rocket, 
  ChevronRight, Menu, X, Sparkles, Target, Mail, Phone, MapPin, User,
  Eye, Mic, Activity, BarChart3, ShoppingCart
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "HireFlow - Recrutement IA",
      description: "Plateforme de recrutement pilotée par 5 agents IA autonomes. Scoring sémantique, génération de questions personnalisées, chat RAG, export PDF.",
      technologies: ["FastAPI", "React", "TailwindCSS", "SQLite", "LangGraph", "RAG"],
      features: [
        "Authentification JWT", "Upload batch CV", "Scoring sémantique",
        "Questions d'entretien", "Chat intelligent (RAG)", "Agenda entretiens",
        "Export PDF", "Analytics avancés"
      ],
      color: "from-blue-500 to-purple-500",
      icon: Brain
    },
    {
      title: "ProctorAI - Détection de Fraude aux Examens",
      description: "Application web de surveillance d'examens en ligne basée sur l'IA. Détection du regard, présence multiple, objets suspects et analyse audio en temps réel.",
      technologies: ["FastAPI", "React", "MediaPipe", "OpenCV", "YOLOv8", "WebSocket"],
      features: [
        "👀 Détection du regard (gauche/droite/hors écran)",
        "🧑‍🤝‍🧑 Détection de plusieurs personnes",
        "📱 Détection d'objets suspects (téléphone, documents)",
        "🔇 Analyse audio (voix externes, bruits suspects)",
        "🚨 Système d'alertes en temps réel",
        "📊 Tableau de bord superviseur"
      ],
      color: "from-red-500 to-orange-500",
      icon: Eye
    },
    {
      title: "MindCoach AI - Assistant IA de productivité",
      description: "Application web full-stack qui fournit un coaching et une assistance basés sur l'IA pour améliorer la productivité, la concentration et le développement personnel.",
      technologies: ["React", "Python", "FastAPI", "Groq API", "SQLite"],
      features: [
        "🔐 Authentification utilisateur",
        "🤖 Assistant IA intégré (Groq API)",
        "📊 Dashboard personnel",
        "🗂️ API backend Python",
        "💾 Base de données SQLite",
        "🎨 Interface React + Vite"
      ],
      color: "from-green-500 to-teal-500",
      icon: Brain
    },
    {
      title: "E-Commerce - Plateforme de vente en ligne",
      description: "Application e-commerce complète avec Angular pour le frontend et Spring Boot pour le backend. Gestion des produits, panier d'achat, commandes et interface administrateur.",
      technologies: ["Angular", "Spring Boot", "MySQL", "Spring Security", "Spring Data JPA", "TypeScript"],
      features: [
        "🔐 Authentification utilisateur sécurisée",
        "📦 Catalogue de produits détaillé",
        "🛒 Panier d'achat et checkout",
        "📦 Gestion des commandes et suivi",
        "👑 Panel administrateur (produits, utilisateurs, commandes)",
        "💾 Base de données MySQL"
      ],
      color: "from-pink-500 to-rose-500",
      icon: ShoppingCart
    },
    {
      title: "Student Performance Prediction - ML",
      description: "Application de Machine Learning pour prédire la réussite d'un étudiant en fonction de plusieurs facteurs (âge, absences, temps d'étude, échecs précédents, éducation des parents).",
      technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      features: [
        "📊 Analyse de données (EDA)",
        "🧠 Modèle de Machine Learning",
        "🌐 Dashboard interactif Streamlit",
        "📈 Visualisations dynamiques",
        "🎯 Prédiction en temps réel",
        "📊 Régression logistique, Arbre de décision, Random Forest"
      ],
      color: "from-yellow-500 to-orange-500",
      icon: BarChart3
    }
  ];

  const skills = [
    { name: "Frontend", icon: Code, technologies: ["React", "Next.js", "Angular", "TypeScript", "TailwindCSS", "Vite"] },
    { name: "Backend", icon: Database, technologies: ["FastAPI", "Spring Boot", "Node.js", "Python", "Prisma", "Flask"] },
    { name: "IA & ML", icon: Brain, technologies: ["LangChain", "RAG", "MediaPipe", "YOLOv8", "Scikit-learn", "OpenCV"] },
    { name: "DevOps", icon: Rocket, technologies: ["Docker", "Git", "CI/CD", "Vercel", "WebSocket", "MySQL"] },
  ];

  const stats = [
    { value: "7+", label: "Projets IA", icon: Brain },
    { value: "100%", label: "Automatisation", icon: Sparkles },
    { value: "24/7", label: "Disponible", icon: Target },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-400">
            Mon Portfolio
          </a>
          
          <div className="hidden md:flex gap-8">
            {["Projets", "Compétences", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition">
                {item}
              </a>
            ))}
          </div>
          
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 p-4 flex flex-col gap-4">
            {["Projets", "Compétences", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          {/* Photo de profil */}
          <div className="flex justify-center mb-6">
            <img
              src="/phomar.jpeg"
              alt="Photo de profil"
              className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-xl"
              style={{ objectPosition: "50% 20%" }}
            />
          </div>
          
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm mb-6">
            ✨ Ingénieure Logiciel & IA
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Amara Maryem
          </h1>
          
          <p className="text-xl text-gray-300 mb-10">
            Software Engineering Student
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projets" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:opacity-90 transition">
              Voir mes projets
              <ChevronRight className="inline ml-1" size={18} />
            </a>
            <a href="#contact" className="px-6 py-3 border border-gray-600 rounded-full font-semibold hover:border-blue-500 transition">
              Me contacter
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Découvrez mes réalisations récentes, alliant innovation et performance
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-8 p-6">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.color} bg-opacity-20 text-sm mb-4`}>
                      Projet phare
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-700 rounded-md text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {project.features.slice(0, 6).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        🔒 Code privé (sur demande)
                      </div>
                    </div>
                  </div>
                  
                  <div className={`bg-gradient-to-br ${project.color} rounded-xl p-8 flex items-center justify-center min-h-[250px]`}>
                    <div className="text-center">
                      <project.icon size={48} className="mx-auto mb-4 text-white/80" />
                      <p className="text-white font-semibold">Démonstration disponible</p>
                      <p className="text-white/70 text-sm mt-2">Contactez-moi pour un accès privé</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="py-20 px-6 bg-gray-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Les technologies que j'utilise pour créer des applications performantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <skill.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-700 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Me contacter</h2>
            <p className="text-gray-400">
              N'hésitez pas à me contacter pour toute opportunité professionnelle
            </p>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 space-y-4">
            <div className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg">
              <User size={20} className="text-blue-400" />
              <div>
                <div className="text-sm text-gray-400">Nom</div>
                <div className="font-medium">Amara Maryem</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg">
              <Mail size={20} className="text-blue-400" />
              <div>
                <div className="text-sm text-gray-400">Email</div>
                <a href="mailto:maryemm.amaraa@gmail.com" className="font-medium hover:text-blue-400 transition">
                  maryemm.amaraa@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg">
              <Phone size={20} className="text-blue-400" />
              <div>
                <div className="text-sm text-gray-400">Téléphone</div>
                <a href="tel:+21624182733" className="font-medium hover:text-blue-400 transition">
                  +216 24 182 733
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg">
              <MapPin size={20} className="text-blue-400" />
              <div>
                <div className="text-sm text-gray-400">Localisation</div>
                <div className="font-medium">Tunis, Ariana</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-gray-500">
            📍 Disponible pour des opportunités en CDI, freelance ou collaboration
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        <p>© 2024 Amara Maryem - Tous droits réservés</p>
      </footer>
    </div>
  );
}