'use client'

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Sponsors', href: '#' },
  { name: 'FAQ', href: '#' },
];

const menuVariants = {
  open: {
    x: 0,
    transition: {
      ease: [0.08, 0.65, 0.53, 0.96],
      duration: 0.6,
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
  closed: {
    x: '100%',
    transition: {
      ease: [0.08, 0.65, 0.53, 0.96],
      duration: 0.6,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, filter: 'blur(0px)', scale: 1 },
  closed: { opacity: 0, filter: 'blur(10px)', scale: 0.5 },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-m font-semibold leading-6 text-white">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-m font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog as={motion.div} open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <motion.div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
            <DialogPanel as={motion.div} initial="closed" animate="open" exit="closed" variants={menuVariants} className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  {/* Add your logo here */}
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <motion.div initial="closed" animate="open" exit="closed" variants={menuVariants} className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        variants={itemVariants}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                  <div className="py-6">
                    <motion.a
                      href="#"
                      variants={itemVariants}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
