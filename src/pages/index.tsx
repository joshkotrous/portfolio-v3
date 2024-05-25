import { useState } from "react";
import { Link } from "vite-react-ssg";
import WordRotate from "@/components/magicui/word-rotate";
import { FaLocationDot } from "react-icons/fa6";

export default function Index() {
  const [count, setCount] = useState(0);
  // const navigate = useNavigate()

  return (
    <>
      <div className="w-screen px-1 h-screen flex flex-col justify-center items-center">
        <WordRotate
          className="text-4xl font-bold text-black dark:text-white"
          words={[
            "Web Development.",
            "UI/UX Design.",
            "Cloud Computing.",
            "Web Security.",
            "Frontend Frameworks.",
            "Backend Architectures.",
            "API Design.",
            "Content Management Systems.",
            "SEO Strategies.",
            "Web Performance Optimization.",
            "Responsive Design.",
            "JavaScript Libraries.",
          ]}
        />
        <div>
          Currently Senior Software Engineering Manager @ American Express
        </div>
        <div className="flex items-center gap-1">
          <FaLocationDot className="text-xl" />
          New York, NY
        </div>
      </div>

      <div className="w-full h-screen text-left text-4xl font-bold flex flex-col gap-6 p-4">
        Posts
        <div className="relative w-full h-fit flex flex-col gap-4 border-black/20 dark:border-white/20 border-[1px] p-4 backdrop-blur-[50px]">
          <div className="hover:scale-[101%] transition-all cursor-pointer">
            <div className="w-full flex justify-between items-center">
              <div>test</div>
              <div className="text-lg font-light">May 5, 2024</div>
            </div>

            <div className="text-lg font-normal">
              toisdjfgo;aisjdf;oaisjdfo;ij
            </div>
          </div>
          <div className="w-full border-black/20 dark:border-white/20 border-b-[1px]"></div>
          <div className="hover:scale-[101%] transition-all cursor-pointer">
            <div className="w-full flex justify-between items-center">
              <div>test</div>
              <div className="text-lg font-light">May 5, 2024</div>
            </div>

            <div className="text-lg font-normal">
              toisdjfgo;aisjdf;oaisjdfo;ij
            </div>
          </div>
          <div className="w-full border-black/20 dark:border-white/20 border-b-[1px]"></div>
          <div className="hover:scale-[101%] transition-all cursor-pointer">
            <div className="w-full flex justify-between items-center">
              <div>test</div>
              <div className="text-lg font-light">May 5, 2024</div>
            </div>

            <div className="text-lg font-normal">
              toisdjfgo;aisjdf;oaisjdfo;ij
            </div>
          </div>
          <div className="w-full border-black/20 dark:border-white/20 border-b-[1px]"></div>
          <div className="hover:scale-[101%] transition-all cursor-pointer">
            <div className="w-full flex justify-between items-center">
              <div>test</div>
              <div className="text-lg font-light">May 5, 2024</div>
            </div>

            <div className="text-lg font-normal">
              toisdjfgo;aisjdf;oaisjdfo;ij
            </div>
          </div>

          <div className="w-[1px] h-[30px] absolute bg-black/50 dark:bg-white -top-[16px] -left-[1px]"></div>
          <div className="w-[30px] h-[1px] absolute bg-black/50 dark:bg-white -top-[1px] -left-[16px]"></div>
          <div className="w-[1px] h-[30px] absolute bg-black/50 dark:bg-white -top-[16px] -right-[1px]"></div>
          <div className="w-[30px] h-[1px] absolute bg-black/50 dark:bg-white -top-[1px] -right-[16px]"></div>
          <div className="w-[1px] h-[30px] absolute bg-black/50 dark:bg-white -bottom-[16px] -left-[1px]"></div>
          <div className="w-[30px] h-[1px] absolute bg-black/50 dark:bg-white -bottom-[1px] -left-[16px]"></div>
          <div className="w-[1px] h-[30px] absolute bg-black/50 dark:bg-white -bottom-[16px] -right-[1px]"></div>
          <div className="w-[30px] h-[1px] absolute bg-black/50 dark:bg-white -bottom-[1px] -right-[16px]"></div>
        </div>
      </div>
    </>
  );
}
