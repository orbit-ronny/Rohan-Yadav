import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCss3, TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiQlik, SiSqlite } from "react-icons/si";
import { DiCssTricks, DiDatabase, DiHtml5, DiJsBadge, DiMysql, DiRedis, DiSqllite } from "react-icons/di";
import { FaJsSquare, FaNodeJs } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100}}
       transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100}}
       transition={{duration: 1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         whileHover={{ scale: 1.2 }}
         className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(3)}
         whileHover={{ scale: 1.2 }}
         className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </motion.div> */}
        <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(5)}
         whileHover={{ scale: 1.2 }}
         className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        {/* <motion.div
         initial="initial"
         animate="animate"
         variants={iconVariants(2.5)}
         className="p-4">
            <DiRedis className="text-7xl text-red-700"/>
        </motion.div> */}
        <motion.div 
        initial="initial"
         animate="animate"
         variants={iconVariants(2)}
         whileHover={{ scale: 1.2 }}
        className="p-4">
          <FaNodeJs className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
        initial="initial"
         animate="animate"
         variants={iconVariants(6)}
         whileHover={{ scale: 1.2 }}
        className="p-4">
          <DiHtml5 className="text-7xl text-orange-700"/>
        </motion.div>
        <motion.div 
        initial="initial"
         animate="animate"
         variants={iconVariants(4)}
         whileHover={{ scale: 1.2 }}
        className="p-4">
          <DiJsBadge className="text-7xl text-yellow-400"/>
        </motion.div>
        <motion.div 
        initial="initial"
         animate="animate"
         variants={iconVariants(5)}
         whileHover={{ scale: 1.2 }}
         className="p-4">
          <RiTailwindCssFill className="text-7xl text-sky-500"/>
        </motion.div>
        {/* <div className="p-4">
            <DiMysql className="text-7xl text-blue-500"/>
        </div> */}
        <motion.div 
        initial="initial"
         animate="animate"
         variants={iconVariants(6)}
         whileHover={{ scale: 1.2 }}
        className="p-4">
          <TbBrandCss3 className="text-7xl text-blue-600"/>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;