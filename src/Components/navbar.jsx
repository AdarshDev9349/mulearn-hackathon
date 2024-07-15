'use client'

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as Scroll } from 'react-scroll';

const navigation = [
  { name: 'Home', href: '#',to:'home' },
  { name: 'About', href: '#about',to:'about' },
  { name: 'Stacks', href: '#',to:'stacks' },
  { name: 'Timeline', href: '#',to:'time' },
  { name: 'FAQ', href: '#',to:'faq' },
];

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const menuVariants = {
  open: {
    clipPath: "inset(10% 10% 10% 10% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3
    }
  }
};


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header  className="home fixed inset-x-0  top-0 z-50 lg:flex w-full justify-center"style={{  background: 'rgba(2, 11, 18,0.6)' }}>
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
         
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-16">
          {navigation.map((item) => (
            <Scroll to={item.to} smooth={true}>
            <a key={item.name} href={item.href} className="text-m font-semibold leading-6 text-white transform transition duration-500 hover:scale-105">
              {item.name}
            </a>
            </Scroll>
          ))}
        </div>

      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog as={motion.div} open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <motion.div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <DialogPanel as={motion.div} initial="closed" animate="open" exit="closed" variants={menuVariants}  className="w-3/4 max-w-sm overflow-y-auto bg-white px-10  sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    {/* Add your logo here */}
                  </a>
                  <motion.button
                  variants={itemVariants}
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative top-12 rounded-md  text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </motion.button>
                </div>
                <motion.ul
                  variants={menuVariants}
                  style={{ pointerEvents: mobileMenuOpen ? "auto" : "none" }}
                  className="mt-10 mb-10 flow-root"
                >
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <motion.li key={item.name} variants={itemVariants}>
                        <Scroll to={item.to} smooth={true}><a
                          href={item.href}
                          className="-mx-3 block flex justify-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-lg text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a></Scroll>
                      </motion.li>
                    ))}
                  </div>
                </motion.ul>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
