import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { COLORS } from '../constants';

const EXPERIENCES = [
  {
    company: 'Sticky Fingers 3D Hybrid Film',
    location: 'San Jose, California',
    roles: [
      {
        title: 'Producer',
        period: 'Aug 2025 - Present',
        description: 'Overseeing the full production process from pre-production to post-production. Managing schedules, delegating and tracking assignments, and coordinating between directors, artists, and crew.',
        skills: ['3D Animation', 'Microsoft Office', 'Project Management', 'Team Leadership']
      },
      {
        title: 'Rigging Lead',
        period: 'Sep 2025 - Present',
        description: 'Designing and implementing character and prop rigs. Collaborating with the animation team to ensure rigs meet performance, flexibility, and usability needs.',
        skills: ['Rigging', 'Technical Support', 'Maya', 'Problem Solving']
      },
      {
        title: '3D Animator',
        period: 'Aug 2025 - Present',
        description: 'Creating high-quality 3D animations, blocking and polishing character motion to achieve appealing storytelling.',
        skills: ['3D Animation', 'Character Animation', 'Motion Blocking']
      }
    ]
  },
  {
    company: 'GDC Festival of Gaming',
    location: 'San Francisco Bay Area',
    roles: [
      {
        title: 'Conference Associate',
        period: 'Mar 2026',
        description: 'Event operations and attendee support for the 2026 Game Developers Conference.',
        skills: ['Event Operations', 'Customer Service', 'Communication']
      }
    ]
  },
  {
    company: 'Amazon',
    location: 'Livermore, California',
    roles: [
      {
        title: 'Operations Manager / Dispatcher',
        period: 'Nov 2020 - Jan 2026',
        description: 'Ensured timely dispatch, managed team workflows, and oversaw daily logistical operations.',
        skills: ['Time Management', 'Training', 'Logistics', 'Operations Management', 'Leadership']
      }
    ]
  },
  {
    company: 'Village of Warriors (Non-profit)',
    location: 'Santa Clara, California',
    roles: [
      {
        title: 'Graphic Designer / Social Media Intern',
        period: 'Feb 2025 - Sep 2025',
        description: 'Designed thumbnails and graphics for social media posts. Supported various campaigns and initiatives.',
        skills: ['Graphic Design', 'Motion Graphics', 'Visual Communication', 'Social Media']
      }
    ]
  },
  {
    company: 'Figure Fighter Falky',
    location: 'Remote/Hybrid',
    roles: [
      {
        title: '3D Animator',
        period: 'Dec 2024 - Feb 2025',
        description: 'Creating, blocking downstream, and cleaning up character animations for Falky Freedom Fighter.',
        skills: ['3D Animation', 'Character Animation', 'Cleanup', 'Motion Graphics']
      },
      {
        title: 'Social Media Assistant',
        period: 'Dec 2024 - Feb 2025',
        description: 'Assisted with content creation, organized social media schedules, and tracked engagement metrics.',
        skills: ['Social Media', 'Social Media Management', 'Content Creation']
      }
    ]
  }
];

const EDUCATION = [
  {
    school: 'San José State University',
    degree: 'Bachelor of Fine Arts - BFA, Animation, Interactive Technology, Video Graphics and Special Effects',
    period: '2020 - 2026',
    activities: 'Shrunken Head Man Club',
    skills: ['3D Animation Production', '3D Modeling', 'Illustration']
  },
  {
    school: 'Las Positas College',
    degree: 'Associate of Arts - AA, Animation, Interactive Technology, Video Graphics and Special Effects',
    period: '2018 - 2020',
    skills: ['Graphic Design Software', 'Adobe Creative Cloud', 'Digital Art']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-[#F1EDE1] px-4 lg:px-6 border-y-4 border-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col space-y-4 mb-16 lg:mb-24 text-center">
          <span className="text-xs lg:text-sm uppercase tracking-[0.4em] font-bold text-black/40">Journey</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-[0.9]">
            My <br className="lg:hidden" />Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Work Experience Section */}
          <div className="lg:col-span-7 space-y-12 text-black">
            <div className="flex items-center gap-4 mb-10 pb-4 border-b-4 border-black">
              <div className="p-3 bg-pink-400 rounded-xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <Briefcase className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight">Work History</h3>
            </div>

            <div className="space-y-12">
              {EXPERIENCES.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-6 lg:pl-10 border-l-4 border-black"
                >
                  <div className="absolute w-5 h-5 bg-[#86DE00] border-4 border-black rounded-full -left-[14px] top-1"></div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight mb-1">{exp.company}</h4>
                  <div className="flex items-center gap-2 text-black/60 font-bold text-sm uppercase tracking-wider mb-6">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>

                  <div className="space-y-8">
                    {exp.roles.map((role, rIndex) => (
                      <div key={rIndex} className="bg-white p-6 rounded-2xl border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-3 gap-2">
                          <h5 className="text-xl font-bold bg-[#FFE28B] px-3 py-1 border-2 border-black rounded-lg w-fit">
                            {role.title}
                          </h5>
                          <div className="flex items-center gap-2 text-sm font-bold uppercase text-black/60">
                            <Calendar className="w-4 h-4" />
                            <span>{role.period}</span>
                          </div>
                        </div>
                        <p className="font-medium text-black/80 leading-relaxed mb-4">
                          {role.description}
                        </p>
                        {role.skills && role.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {role.skills.map((skill, sIndex) => (
                              <span key={sIndex} className="px-3 py-1 bg-black/5 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-black/10">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="lg:col-span-5 space-y-12 text-black">
            <div className="flex items-center gap-4 mb-10 pb-4 border-b-4 border-black">
              <div className="p-3 bg-[#00B1FF] rounded-xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <GraduationCap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight">Education</h3>
            </div>

            <div className="space-y-8">
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 lg:p-8 rounded-[24px] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] transition-transform"
                >
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-2 leading-none">{edu.school}</h4>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase text-[#FF6B6B] mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="font-bold text-lg leading-snug mb-3">
                    {edu.degree}
                  </p>
                  
                  {edu.skills && edu.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.skills.map((skill, sIndex) => (
                        <span key={sIndex} className="px-3 py-1 bg-black/5 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-black/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {edu.activities && (
                    <div className="mt-4 pt-4 border-t-2 border-black/10">
                      <p className="text-sm font-bold text-black/60 uppercase tracking-widest mb-1">Activities</p>
                      <p className="font-medium">{edu.activities}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
