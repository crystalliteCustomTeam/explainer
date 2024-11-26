import React from "react";
import { CTA } from "./index";

export const CallToAction = ({
  title = "We’re Continually Racing Against <br> The Clock So That  You Can <br>Stay Ahead Of The Game.  ",
  desc = "",
}) => {
  return (
    <section>
      <div className="pt-[50px] xl:pt-[80px] pb-3">
        <div className="container">
          <div className="flex flex-col items-center lg:items-end :justify-end font-rubik">
            <h2
              className="xl:text-[50px] lg:text-[40px] text-[25px] font-semibold text-center lg:text-right uppercase leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className="flex md:flex-row flex-col md:items-end md:justify-end items-center justify-center gap-5 mt-5 w-max lg:!ml-auto">
              <CTA icon={true} text="Live Chat" css="bg-gradient-custom" />
              <CTA icon={true} />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
