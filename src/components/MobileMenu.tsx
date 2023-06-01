import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: "-100px" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useNavigate();

  const handleRouting = useCallback((pathname: string) => {
    router(pathname);
    setIsOpen(false);
  }, []);

  return (
    <div className="sm:hidden">
      <button
        className="rounded-2xl bg-zinc-800 px-2 py-1 "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <X className="h-7 w-7 text-zinc-300" />
        ) : (
          <Menu className="h-7 w-7 text-zinc-300" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-[69px] h-[calc(100vh-69px)] w-full bg-black/70"
          >
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className="flex h-full flex-col items-center justify-center space-y-14 text-zinc-300 sm:hidden"
            >
              <motion.li variants={item} className="text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  Origins
                </p>
                <button
                  onClick={() => handleRouting("/stories")}
                  className="font-aleg text-2xl"
                >
                  STORIES
                </button>
              </motion.li>
              <motion.li variants={item} className="text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  Work with us
                </p>
                <button
                  className="font-aleg text-2xl"
                  onClick={() => handleRouting("/career")}
                >
                  CAREER
                </button>
              </motion.li>
              <motion.li variants={item} className="text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  learn more
                </p>
                <button
                  className="font-aleg text-2xl"
                  onClick={() => handleRouting("/pricing")}
                >
                  PRICING
                </button>
              </motion.li>
              <motion.li variants={item} className="text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
                  our team
                </p>
                <button
                  className="font-aleg text-2xl"
                  onClick={() => handleRouting("/about")}
                >
                  ABOUT
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
