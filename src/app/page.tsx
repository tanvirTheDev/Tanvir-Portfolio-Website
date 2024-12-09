import Stats from "@/components/Homepage/Stats";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-End Developer</span>
            <h1 className="h1 py-4">
              Hello I&apos;m <br /> <span>Tanvir Ahamed</span>
            </h1>
            <p>
              I excel at crafting elegant digial experiences and I am proficient
              in various programming languages and techologies.
            </p>
            <div className="flex mt-5 flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex uppercase items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-primary-accent rounded-full flex justify-center items-center text-primary-accent text-base hover:bg-primary-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-10 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
