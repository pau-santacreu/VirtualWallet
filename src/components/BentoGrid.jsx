import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function BentoGrid({ data }) {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      className="min-h-screen bg-neutral-900 text-white p-6 font-sans"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Targeta Principal: PERFIL */}
        <motion.div variants={itemVariants} className="md:col-span-2 bg-neutral-800 p-6 rounded-2xl border border-neutral-700 flex flex-col justify-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            {data.personal.name}
          </h1>
          <h2 className="text-xl text-neutral-400 mb-4">{data.personal.role}</h2>
          <p className="text-neutral-300">{data.personal.tagline}</p>
        </motion.div>

        {/* Targeta: FOTO o LOGO */}
        <motion.div variants={itemVariants} className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700 flex items-center justify-center overflow-hidden">
          <img 
            src="/logo_cview_icon_v2.png" 
            alt="Logo Personal" 
            className="w-full h-full object-contain" 
          />
        </motion.div>

        {/* Targeta: CONTACTE (Botons grans per a mòbil) */}
        <motion.div variants={itemVariants} className="md:col-span-3 bg-neutral-800 p-4 rounded-2xl border border-neutral-700 flex justify-around items-center">
          <a href={data.personal.linkedin} target="_blank" className="flex flex-col items-center gap-2 text-blue-400 hover:text-blue-300 transition">
            <Linkedin size={32} /> <span className="text-sm">LinkedIn</span>
          </a>
          <a href={data.personal.github} target="_blank" className="flex flex-col items-center gap-2 text-white hover:text-gray-300 transition">
            <Github size={32} /> <span className="text-sm">GitHub</span>
          </a>
          <a href={`mailto:${data.personal.email}`} className="flex flex-col items-center gap-2 text-green-400 hover:text-green-300 transition">
            <Mail size={32} /> <span className="text-sm">Email</span>
          </a>
          <a href={data.personal.cvPdf} download className="flex flex-col items-center gap-2 text-red-400 hover:text-red-300 transition">
            <FileText size={32} /> <span className="text-sm">CV PDF</span>
          </a>
        </motion.div>

        {/* Targeta: SKILLS (Llista) */}
        <motion.div variants={itemVariants} className="md:col-span-1 bg-neutral-800 p-6 rounded-2xl border border-neutral-700">
          <h3 className="text-lg font-bold mb-4 text-purple-400">Stack Tecnològic</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span key={skill.name} className="px-3 py-1 bg-neutral-700 rounded-full text-sm border border-neutral-600 flex items-center gap-2">
                <span>{skill.icon}</span> {skill.name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Targeta: PROJECTES */}
        <motion.div variants={itemVariants} className="md:col-span-2 bg-neutral-800 p-6 rounded-2xl border border-neutral-700">
          <h3 className="text-lg font-bold mb-4 text-yellow-400">Projectes Recents</h3>
          <div className="space-y-4">
            {data.projects.map((project, idx) => (
              <div key={idx} className="p-3 bg-neutral-700/50 rounded-xl hover:bg-neutral-700 transition cursor-default">
                <h4 className="font-bold">{project.title}</h4>
                <p className="text-sm text-neutral-300 mb-2">{project.desc}</p>
                <div className="flex gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs bg-black/30 px-2 py-0.5 rounded text-neutral-400">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}