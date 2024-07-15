<script lang="ts" setup>
import { image } from "../assets/images";
</script>

<template>
  <!--contact home image container-->
  <div class="blog-img relative mb-12">
    <img :src="image.bolg1" alt="" class="w-full h-[70vh]" />
    <h2 class="font-bold absolute top-[40%] left-[45%] text-orange desktop:text-[35px]  mobile:text-[20px]">
      Contact us
    </h2>
  </div>
  <!--contact content-->
  <div class="bottom w-[95%] m-auto desktop:flex justify-evenly">
    <div class="left flex flex-col gap-4 items-center mb-4">
      <h3 class="font-bold text-xl">Get in touch</h3>
      <p>
        We are also active in social media. <br />You can find us on below
        adresses..
      </p>
      <div class="items text-center">
        <i class="fa-solid fa-location-dot text-xl text-mainRed"></i>

        <p>
          HS B26, Horton Ford Rd, <br />
          Eidson, TN, 37731
        </p>
      </div>
      <div class="items text-center">
        <i class="pi pi-phone text-xl text-mainRed"></i>
        <p>Call us</p>
        <p>+33 7 82 37 11 77</p>
      </div>
      <div class="items text-center">
        <i class="pi pi-envelope text-xl text-mainRed"></i>
        <p>E-mailus</p>
        <p>aocholayoul9@gmail.com</p>
      </div>
      <div class="text-center">
        <i class="pi pi-clock text-xl text-mainRed"></i>
        <p>
          Opening Hour 8:00 AM – 10:00 PM <br />
          Monday – Sunday
        </p>
      </div>
    </div>
    <div class="right flex flex-col gap-4 items-center">
      <h3 class="font-bold text-xl">Send a Message</h3>

      <form class="mobile: flex flex-col items-center">
        <p>Do you have anything in your mind to tell us?</p>
        <p>Please don’t hesitate to get in touch to us via our contact form.</p>
        <div>
          <div for="Name">Name</div>
          <input
            type="text"
            placeholder="Enter your name"
            class="bg-homeBg p-2 rounded desktop:w-96  mobile:w-96"
          />
        </div>
        <div>
          <div for="Name">E-mail</div>
          <input
            type="text"
            placeholder="Enter your name"
            class="bg-homeBg p-2 rounded my-2 desktop:w-96 mobile:w-96"
          />
        </div>
        <div>
          <div for="Name">Message</div>
          <textarea
            name=""
            id=""
            placeholder="Entyer your message"
            class="bg-homeBg p-2 rounded desktop:w-96 my-2 h-32  mobile:w-96"
          ></textarea>
        </div>
        <button class="bg-headerBg p-2 text-mainWhite rounded">
          send message
        </button>
      </form>
    </div>
  </div>
  <!-- google map-->
  <div class="map w-[95%] m-auto my-6">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
      width="400"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="w-full m-auto"
    ></iframe>
  </div>
</template>

<style lang="postcss" scoped></style>
