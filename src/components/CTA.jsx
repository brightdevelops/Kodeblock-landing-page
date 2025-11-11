import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // ✅ parent animates once
            className='bg-gradient-to-b from-[#333333] to-[#F5E7D7] w-full py-20 px-5 md:px-10 mx-auto'
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // ✅ animate once
                transition={{ duration: 0.8, type: "spring" }}
                className='text-center text-white mb-10'
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} // ✅ animate once
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='font-bold text-2xl md:text-3xl lg:text-4xl mb-3'
                >
                    Ready to Build the Future?
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} // ✅ animate once
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='font-normal text-base md:text-lg'
                >
                    Join our community of innovators and be part of the next generation of digital products.
                </motion.p>

                <motion.a
                    href="#projects"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} // ✅ animate once
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(249, 115, 22, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer mt-8 text-white px-6 py-3 rounded-md font-medium bg-gradient-to-r from-[#F97316] to-[#93440D] drop-shadow-2xl"
                    >
                        Explore our products
                    </motion.button>
                </motion.a>
            </motion.div>
        </motion.section>
    )
}

export default CTA