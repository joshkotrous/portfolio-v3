import { useState, useRef } from "react";
import Section from "@/components/section";
import BorderedContainer from "@/components/bordered-container";
import Post from "@/components/post";
import { MagicCardGradient } from "@/components/magicui/magic-card-gradient";
import HeroBanner from "@/components/hero-banner";
import NavigationDemo from "@/components/navigation-demo";
import SkillTags from "@/components/skill-tags";
export default function Index() {
  return (
    <>
      <HeroBanner />
      <Section title="Posts">
        <BorderedContainer>
          <Post
            title="Test"
            date="May 5, 2024"
            description="Testing the post functionality. This should work as expected without any bugs to be found."
          />
          <div className="w-full border-black/20 dark:border-white/20 border-b-[1px]" />
        </BorderedContainer>
      </Section>
      <Section title="Projects">
        <MagicCardGradient />
      </Section>
      <Section title="Components">
        <div className="w-full relative flex flex-col-reverse gap-4 md:flex-row items-center">
          <div className="text-lg md:text-2xl w-full">
            Responsive Nav Bar
            <p className="text-sm md:text-lg font-normal">
              A fully responsive and reusable nav bar with support for dark
              mode.
            </p>
            <SkillTags />
          </div>

          <NavigationDemo />
        </div>
      </Section>
    </>
  );
}
