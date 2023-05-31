import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface InvertorType {
  name: string;
  id: number;
  designation: string;
  imageSource: string;
}

const investors: InvertorType[] = [
  {
    name: "John Doe",
    id: 1,
    imageSource: "https://source.unsplash.com/k9XZPpPHDho/50X50",
    designation: "Software Engineer",
  },
  {
    name: "Jane Smith",
    id: 2,
    imageSource: "https://source.unsplash.com/v2aKnjMbP_k/50X50",
    designation: "Product Manager",
  },
  {
    name: "Michael Johnson",
    id: 3,
    imageSource: "https://source.unsplash.com/rriAI0nhcbc/50X50",
    designation: "Marketing Specialist",
  },
  {
    name: "Sarah Williams",
    id: 4,
    imageSource: "https://source.unsplash.com/or6mrFMVmHM/50X50",
    designation: "Graphic Designer",
  },
  {
    name: "Robert Thompson",
    id: 5,
    imageSource: "https://source.unsplash.com/eSjmZW97cH8/50X50",
    designation: "Data Analyst",
  },
  {
    name: "Emily Davis",
    id: 6,
    imageSource: "https://source.unsplash.com/An7LvVMb6rY/50X50",
    designation: "UX Designer",
  },
  {
    name: "Daniel Wilson",
    id: 7,
    imageSource: "https://source.unsplash.com/YUa-41O4ja0/50X50",
    designation: "Project Manager",
  },
  {
    name: "Olivia Brown",
    id: 8,
    imageSource: "https://source.unsplash.com/X6Uj51n5CE8/50X50",
    designation: "HR Manager",
  },
  {
    name: "James Anderson",
    id: 9,
    imageSource: "https://source.unsplash.com/Y7C7F26fzZM/50X50",
    designation: "Sales Representative",
  },
  {
    name: "Sophia Martinez",
    id: 10,
    imageSource: "https://source.unsplash.com/_H5Tnj7e1hc/50X50",
    designation: "Accountant",
  },
  {
    name: "William Taylor",
    id: 11,
    imageSource: "https://source.unsplash.com/XHVpWcr5grQ/50X50",
    designation: "Software Developer",
  },
  {
    name: "Ava Wilson",
    id: 12,
    imageSource: "https://source.unsplash.com/G9f4Enb8XVM/50X50",
    designation: "UI Designer",
  },
  {
    name: "Alexander Lee",
    id: 13,
    imageSource: "https://source.unsplash.com/O9OX30WPp2Y/50X50",
    designation: "Business Analyst",
  },
  {
    name: "Mia Rodriguez",
    id: 14,
    imageSource: "https://source.unsplash.com/J1OScm_uHUQ/50X50",
    designation: "Marketing Manager",
  },
  {
    name: "Ethan Thomas",
    id: 15,
    imageSource: "https://source.unsplash.com/sjLG3DBOJSI/50X50",
    designation: "Software Engineer",
  },
  {
    name: "Isabella Clark",
    id: 16,
    imageSource: "https://source.unsplash.com/6xv4A1VA1rU/50X50",
    designation: "Product Manager",
  },
  {
    name: "Benjamin Walker",
    id: 17,
    imageSource: "https://source.unsplash.com/8YG31Xn4dSw/50X50",
    designation: "Graphic Designer",
  },
  {
    name: "Charlotte Hill",
    id: 18,
    imageSource: "https://source.unsplash.com/QJEVpydulGs/50X50",
    designation: "Marketing Specialist",
  },
  {
    name: "Liam Thompson",
    id: 19,
    imageSource: "https://source.unsplash.com/_H6wpor9mjs/50X50",
    designation: "Software Engineer",
  },
  {
    name: "Emma Davis",
    id: 20,
    imageSource: "https://source.unsplash.com/ILip77SbmOE/50X50",
    designation: "Product Manager",
  },
  {
    name: "Enia Davis",
    id: 21,
    imageSource: "https://source.unsplash.com/C8Ta0gwPbQg/50X50",
    designation: "Project Manager",
  },
];

const container = {
  initial: { opacity: 0 },
  show: {
    opacity: 1,
    delay: 1,
    transition: {
      staggerChildren: 0.1,
      // delayChildren: 1,
      when: "beforeChildren",
    },
  },
};
const item = {
  initial: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
  },
};
function About() {
  return (
    <div className="min-h-screen bg-black bg-[url('/clay-5.jpg')] bg-[length:100%] bg-[position:top_right] bg-no-repeat py-32">
      <div className="mx-auto mb-10 max-w-2xl space-y-5 font-aleg text-zinc-300">
        <h1 className="text-3xl font-medium">Investors</h1>
        <p className="font-serif text-lg">
          We're lucky to be backed by some of the most experienced investors,
          operators, and executives across industries who embody
          conscientiousness.
        </p>
      </div>

      <div className="space-y-56">
        <motion.div
          initial="initial"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl columns-1 gap-5 gap-y-5  text-zinc-200 sm:columns-2 md:columns-3 [&>div:not(:first-child)]:mt-5"
        >
          {investors.map((inv) => (
            <Card investor={inv} key={inv.designation} />
          ))}
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl columns-1 gap-5 gap-y-5 text-zinc-200 sm:columns-2 md:columns-3 [&>div:not(:first-child)]:mt-5"
        >
          {investors.map((inv) => (
            <Card investor={inv} key={inv.designation} />
          ))}
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="show"
          variants={container}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl columns-1 gap-5 gap-y-5 text-zinc-200 sm:columns-2 md:columns-3 [&>div:not(:first-child)]:mt-5"
        >
          {investors.map((inv) => (
            <Card investor={inv} key={inv.designation} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default About;

function Card({ investor }: { investor: InvertorType }) {
  return (
    <motion.div
      variants={item}
      className="group relative flex cursor-pointer gap-2 rounded-lg border border-zinc-700 bg-white/10 p-1 backdrop-blur-md transition-all hover:bg-[#fcfcfc27] hover:backdrop-blur-lg"
    >
      <div className="h-10 w-10 overflow-hidden rounded-full">
        <img
          src={investor.imageSource}
          className="h-full w-full object-cover object-center"
          alt=""
        />
      </div>

      <div>
        <h1 className="text-sm font-semibold">{investor.name}</h1>
        <p className="text-xs text-zinc-400">{investor.designation}</p>
      </div>

      <ArrowRight className="absolute bottom-2 right-2 h-3 w-3 text-blue-600 transition-all group-hover:scale-x-125" />
    </motion.div>
  );
}
