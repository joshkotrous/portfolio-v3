import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import SkillTags from "../skill-tags";
import { FaLink } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export function MagicCardGradient() {
  return (
    <MagicContainer
      className={"flex h-full w-full gap-4 justify-center items-start "}
    >
      <div className="grid gap-4 gap-y-4 grid-cols-2 md:grid-cols-3 w-full auto-rows-[250px] ">
        <MagicCard
          borderWidth={3}
          className="flex m-auto w-full h-fit flex-col justify-end overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-4 shadow-2xl items-center gap-2 cursor-default pb-10 md:pb-4"
        >
          <div className="relative md:left-[7.5%] w-full max-h-[8rem] overflow-hidden rounded-t-[10px] [mask:linear-gradient(to_bottom,rgba(0,0,0,1)_0,rgba(0,0,0,0)_100%)] ">
            <iframe
              src="https://joshkotrous.github.io/portfolio-v1"
              className="scale-[0.14] w-[1700px] h-[900px] origin-top-left rounded-t-[70px] "
            />
          </div>
          <div className="w-full h-fit flex flex-col mt-2 ">
            <p className=" top-1/2 h-fit z-10 whitespace-nowrap text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 w-full">
              Portfolio v1
            </p>
            <p className="h-fit z-10  text-base md:text-lg font-normal text-gray-800 dark:text-gray-200 w-full mb-2">
              My first developer portfolio.
            </p>
            <div className="flex flex-col gap-2 md:text-lg   truncate">
              <Link
                to=""
                className="flex w-fit gap-1 md:gap-2 justify-start items-center"
              >
                <FaLink />
                <p className="text-xs truncate">https://joshkotrous.io</p>
              </Link>
              <Link
                to=""
                className="flex w-fit gap-1 md:gap-2 justify-start items-center"
              >
                <FaGithub />
                <p className="text-xs truncate">https://joshkotrous.io</p>
              </Link>
            </div>
          </div>

          <SkillTags
            className="text-[7px] gap-[5px] md:text-[12px] md:gap-2 h-fit"
            skillClassName="p-1 py-0 md:p-1"
          />

          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </div>
    </MagicContainer>
  );
}
