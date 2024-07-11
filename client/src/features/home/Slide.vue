<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { image } from "../../assets/images";

const slides = [
  {
    id: 1,
    title: "The hidden gems in fashion trends",
    description:
      "Step into the realm of unparalleled style with our unbeatablet-shirt trendsetter of today.",
    imageLeft: image.tshirt1,
    imageRight: image.tshirt1,
  },

  {
    id: 4,
    title: "The hidden gems in fashion trends",
    description:
      "Step into the realm of unparalleled style with our unbeatablet-shirt trendsetter of today.",
    imageLeft: image.suit3,
    imageRight: image.suit3,
  },
  {
    id: 5,
    title: "The hidden gems in fashion trends",
    description:
      "Step into the realm of unparalleled style with our unbeatablet-shirt trendsetter of today.",
    imageLeft: image.tshirt3,
    imageRight: image.tshirt3,
  },
];

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 1,
    snapAlign: "start",
  },
};
</script>

<template>
  <!--slide -->
  <div
    class="bg-homeBg flex flex-col justify-center p-2 relative w-[95%] h-[70vh] items-center m-auto mt-3 mb-4"
  >
    <Carousel :wrap-around="true" :breakpoints="breakpoints">
      <Slide v-for="slide in slides" :key="slide.id">
        <div
          class="slide w-full h-[80vh], desktop:flex justify-between items-center , mobile:flex"
        >
          <img :src="slide.imageLeft" class="h-96 desktop:w-96 , mobile:w-52" />
          <div class="flex flex-col items-center justify-center gap-4">
            <h2 class="slideTitle font-bold tablet:text-3xl , mobile:text-1xl">
              The hidden gems <br />
              in fashion trends
            </h2>
            <p class="">
              {{ slide.description }}
            </p>
            <div className="flex gap-32">
              <button
                class="bg-mainBlack text-mainWhite p-2 rounded mr-4 cursor-pointer desktop:w-[150px]"
              >
                Shop now
              </button>
            </div>
          </div>
          <img
            :src="slide.imageRight"
            class="imgLeft w-96 h-96 , desktop:flex , mobile:hidden"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>


</template>
