import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function SignIn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full bg-zinc-800 px-3 py-1 text-xs uppercase tracking-wider text-zinc-300"
      >
        sign in
      </button>
      <AnimatePresence>
        {isOpen && (
          <Dialog as={"div"} open={isOpen} onClose={() => setIsOpen(false)}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-zinc-700/50"
            ></motion.div>

            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="max-w-md rounded-lg bg-zinc-900 text-zinc-200"
              >
                <Dialog.Panel>
                  <div className="space-y-10 p-10">
                    <h1 className="text-center font-aleg text-3xl tracking-widest">
                      Play
                    </h1>
                    {/* <p>Sign in to Play</p> */}

                    <div className="space-y-5">
                      <div className="flex cursor-pointer items-center justify-center gap-5 rounded-full border border-zinc-600 py-1.5">
                        <img className="h-5 w-5" src="/apple.png" alt="" />

                        <span>Sign in with Apple</span>
                      </div>

                      <div className="flex cursor-pointer items-center justify-center gap-5 rounded-full border border-zinc-600 py-1.5">
                        <img className="h-5 w-5" src="/google.png" alt="" />
                        <span>sign in with Google</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 uppercase">
                      <span className="h-[1px] flex-1 bg-zinc-500"></span>
                      <span>OR</span>
                      <span className="h-[1px] flex-1 bg-zinc-500"></span>
                    </div>

                    <form className="space-y-5">
                      <div>
                        <input
                          className="w-full rounded-lg border border-zinc-600 bg-transparent px-4 py-1.5 outline-none"
                          type="text"
                          placeholder="enter your email"
                        />
                      </div>

                      <div>
                        <button className="w-full rounded-full border border-zinc-600 bg-zinc-800 py-2 text-sm backdrop-blur-lg">
                          Sign in with email
                        </button>
                      </div>
                    </form>

                    <p className="text-center text-xs">I need a new account</p>

                    <p className="text-center text-sm text-zinc-400">
                      By continuing you agree to Clay's{" "}
                      <span className="underline underline-offset-2">
                        Terms of Service{" "}
                      </span>{" "}
                      and{" "}
                      <span className="underline underline-offset-2">
                        Privacy Policy
                      </span>
                    </p>
                  </div>
                </Dialog.Panel>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SignIn;
