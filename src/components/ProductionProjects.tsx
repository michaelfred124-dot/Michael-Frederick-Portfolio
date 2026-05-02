import { motion } from 'motion/react';
import { COLORS } from '../constants';
import { Users, Calendar, CheckCircle, ArrowUpRight } from 'lucide-react';

// Import local assets
import stickyFingersImg from '../assets/Sticky_Fingers_Poster.jpg';
import animationImg from '../assets/AnimRef.jpg';

const PROD_PROJECTS = [
  {
    title: 'Sticky Fingers',
    role: 'Project Manager',
    duration: '9 months',
    teamSize: '15+ Artists & Tech',
    outcome: 'Successful pipeline implementation & ahead of schedule',
    description: 'Managed a cross-functional team of artists, animators, and developers. Oversaw the entire production pipeline from concept to final delivery, ensuring milestones were met on schedule while maintaining high creative standards.',
    image: stickyFingersImg,
    tags: ['Team Management', 'Pipeline Setup', 'Scheduling'],
    color: COLORS.purple,
    responsibilities: [
      'Created and managed production schedules, task lists, and deadlines across 5 departments',
      'Coordinated between directors, artists, and crew to align creative and technical objectives',
      'Anticipated and resolved production challenges to maintain efficiency and workflow'
    ],
    tools: ['Maya', 'Google Suite', 'Nuke', 'Discord'],
    link: '#'
  },
  {
    title: 'Animation\nReference.org',
    role: 'Project Manager',
    duration: '6 months',
    teamSize: 'Solo Developer & Founder',
    outcome: '3k monthly users, solo developer, and founder',
    description: 'Spearheaded the development of a comprehensive reference library platform for animators. Managed content curation, coordinated with developers for the site build, and oversaw user testing and launch.',
    image: animationImg,
    tags: ['Product Management', 'Web Platform', 'Curation'],
    color: COLORS.blue,
    responsibilities: [
      'Curated and organized an expansive library of references for 3D animators',
      'Coordinated web development sprints and prioritized feature rollouts',
      'Conducted QA testing to ensure seamless user experience across devices'
    ],
    tools: ['AI Studio', 'Antigravity', 'Claude Code', 'GitHub'],
    link: 'https://animationreference.org/'
  },
  {
    title: 'Web Design Agency',
    role: 'Founder & Managing Director',
    duration: '2+ years',
    teamSize: 'Varying Freelance Teams',
    outcome: 'Delivered 20+ client projects',
    description: 'Established and directed a boutique web design agency. Handled all client communications, defined project scopes, managed freelance resources, and acted as the primary liaison between technical teams and stakeholders.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    tags: ['Client Relations', 'Resource Allocation', 'Scope Management'],
    color: COLORS.yellow,
    responsibilities: [
      'Defined project scopes, budgets, and timelines for freelance design projects',
      'Acted as primary liaison between technical teams and external stakeholders',
      'Managed resource allocation and mitigated project risks'
    ],
    tools: ['Notion', 'Webflow', 'Adobe CC', 'Asana'],
    link: '#'
  }
];

export default function ProductionProjects() {
  return (
    <section className="py-20 lg:py-32 px-4 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 gap-16 lg:gap-24">
          {PROD_PROJECTS.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col group"
            >
              <div className="relative w-full aspect-[21/9] min-h-[400px] rounded-[32px] lg:rounded-[48px] overflow-hidden border-8 border-black shadow-[15px_15px_0px_rgba(34,34,34,1)] mb-8 lg:mb-12">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div>
                      <span 
                        className="inline-block px-4 py-2 text-xs lg:text-sm font-bold uppercase tracking-widest text-black rounded-full border-2 border-black mb-4"
                        style={{ backgroundColor: project.color }}
                      >
                        {project.role}
                      </span>
                      <h3 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] whitespace-pre-line">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs lg:text-sm font-bold uppercase rounded-xl tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 lg:px-8">
                <div className="lg:col-span-2 flex flex-col">
                  <h4 className="text-2xl font-black uppercase tracking-tight text-black mb-4">Project Overview</h4>
                  <p className="text-xl text-black/70 font-medium leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <div className="mb-10">
                    <h5 className="text-sm font-bold uppercase tracking-widest text-[#8E7AFE] mb-4">Key Responsibilities</h5>
                    <ul className="space-y-4">
                      {project.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-black shrink-0" />
                          <span className="text-lg text-black/80 font-medium">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8 border-t-2 border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-3">Tools & Software</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map(tool => (
                          <span key={tool} className="px-3 py-1 bg-white border-2 border-black/10 text-black text-xs font-bold uppercase rounded-lg tracking-widest shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.link && project.link !== '#' && (
                      <a 
                        href={project.link} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:scale-105 hover:bg-[#8E7AFE] transition-all whitespace-nowrap shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
                      >
                        View Project <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl p-8 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] flex flex-col gap-6">
                  <h4 className="text-xl font-black uppercase tracking-tight text-black mb-2 border-b-2 border-black/10 pb-4">Production Details</h4>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#F1EDE1] rounded-xl border-2 border-black">
                      <Calendar className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-black/40">Duration</span>
                      <span className="block text-lg font-bold text-black">{project.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#F1EDE1] rounded-xl border-2 border-black">
                      <Users className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-black/40">Team Size</span>
                      <span className="block text-lg font-bold text-black">{project.teamSize}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#F1EDE1] rounded-xl border-2 border-black">
                      <CheckCircle className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-black/40">Outcome</span>
                      <span className="block text-lg font-bold text-black">{project.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
