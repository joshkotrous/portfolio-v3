import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";

export function MagicCardGradient() {
  return (
    <MagicContainer
      className={"flex h-full w-full gap-4 justify-center items-start"}
    >
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 w-full h-full grid-flow-row auto-rows-max">
        <MagicCard
          borderWidth={3}
          className="flex m-auto w-full h-full max-h-64 cursor-pointer flex-col justify-end overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-4 shadow-2xl"
        >
          <p className="z-10 whitespace-nowrap text-3xl font-medium text-gray-800 dark:text-gray-200 w-full">
            Magic
          </p>
          <p className="z-10 whitespace-nowrap text-2xl font-normal text-gray-800 dark:text-gray-200 w-full">
            Test
          </p>

          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard
          borderWidth={3}
          className="flex m-auto w-full h-full max-h-64 cursor-pointer flex-col justify-end overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-4 shadow-2xl"
        >
          <p className="z-10 whitespace-nowrap text-3xl font-medium text-gray-800 dark:text-gray-200 w-full">
            Magic
          </p>
          <p className="z-10 whitespace-nowrap text-2xl font-normal text-gray-800 dark:text-gray-200 w-full">
            Test
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard
          borderWidth={3}
          className="flex m-auto w-full h-full max-h-64 cursor-pointer flex-col justify-end overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-4 shadow-2xl"
        >
          <p className="z-10 whitespace-nowrap text-3xl font-medium text-gray-800 dark:text-gray-200 w-full">
            Magic
          </p>
          <p className="z-10 whitespace-nowrap text-2xl font-normal text-gray-800 dark:text-gray-200 w-full">
            Test
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard
          borderWidth={3}
          className="flex m-auto w-full h-full max-h-64 cursor-pointer flex-col justify-end overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-4 shadow-2xl"
        >
          <p className="z-10 whitespace-nowrap text-3xl font-medium text-gray-800 dark:text-gray-200 w-full">
            Magic
          </p>
          <p className="z-10 whitespace-nowrap text-2xl font-normal text-gray-800 dark:text-gray-200 w-full">
            Test
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
        <MagicCard
          borderWidth={3}
          className="flex m-auto w-full h-full max-h-64 cursor-pointer flex-col justify-end overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-4 shadow-2xl"
        >
          <p className="z-10 whitespace-nowrap text-3xl font-medium text-gray-800 dark:text-gray-200 w-full">
            Magic
          </p>
          <p className="z-10 whitespace-nowrap text-2xl font-normal text-gray-800 dark:text-gray-200 w-full">
            Test
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </MagicCard>
      </div>
    </MagicContainer>
  );
}
