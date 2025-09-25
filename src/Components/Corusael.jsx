import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

function Corusael({images}) {
  return (
        <Carousel plugins = {[
            Autoplay({
                delay:5000,
            }),
        ]} className="bg-slate-100 rounded-r-xl">
          <CarouselContent>
            <CarouselItem className="w-full">
              <img src={images[0]} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={images[1]} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={images[2]} alt="" />
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
  );
}

export default Corusael;
