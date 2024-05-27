import { MagicContainer } from "@/components/magicui/magic-card";

interface MagicCardGradientProps {
  children?: React.ReactNode;
}

export const MagicCardGradient: React.FC<MagicCardGradientProps> = ({
  children,
}) => {
  return (
    <MagicContainer
      className={"flex h-full w-full gap-4 justify-center items-start "}
    >
      <div className="grid gap-4 gap-y-20 grid-cols-1 md:grid-cols-3 w-full auto-rows-[250px] ">
        {children}
      </div>
    </MagicContainer>
  );
};
