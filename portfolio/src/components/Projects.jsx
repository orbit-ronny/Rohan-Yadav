import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div className="pb-4">
        <motion.h2
         whileInView={{ opacity: 1, y: 0}}
         initial={{ opacity: 0, y: -100}}
         transition={{ duration: 0.5}}
         className="my-20 text-center text-4xl">Projects</motion.h2>
        <div>
            {PROJECTS.map((project, index) => {
                const content = (
                  <motion.div
                    whileHover={{ scale: project.link ? 1.01 : 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="mb-8 overflow-hidden rounded-3xl border border-stone-800 bg-stone-950/70 shadow-xl"
                  >
                      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:gap-8">
                          <motion.div
                           whileInView={{ opacity: 1, x: 0 }}
                           initial={{ opacity: 0, x: -100 }}
                           transition={{ duration: 1 }}
                           className="w-full lg:w-1/3"
                          >
                              <motion.img
                                src={project.image}
                                alt={project.title}
                                whileHover={{ scale: project.link ? 1.03 : 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="h-64 w-full rounded-3xl object-cover shadow-2xl"
                              />
                          </motion.div>
                          <motion.div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-2/3"
                          >
                              <h3 className="mb-3 text-2xl font-semibold text-white">{project.title}</h3>
                              <p className="mb-5 max-w-2xl text-stone-400">{project.description}</p>
                              <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech, index) => (
                                      <motion.span
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="rounded-full bg-stone-900 px-3 py-2 text-sm font-medium text-stone-300 shadow-sm"
                                        transition={{ type: "spring", stiffness: 300 }}
                                      >
                                          {tech}
                                      </motion.span>
                                  ))}
                              </div>
                          </motion.div>
                      </div>
                  </motion.div>
                )

                return project.link ? (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index} className="block">
                    {content}
                  </div>
                )
            })}
        </div>
    </div>
  )
}

export default Projects