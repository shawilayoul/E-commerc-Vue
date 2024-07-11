<script lang="ts" setup>
import { image } from '../assets/images';
</script>

<template>
   <!--blog home image container-->
   <div class="blog-img relative mb-12">
        <img :src="image.bolg1" alt="" class="w-full h-[70vh] opacity-7" />
        <h2 class="text-[35px] font-bold absolute top-[40%] left-[45%] text-orange">
          Our Blog
        </h2>
      </div>
      <div class="bottom w-[70%] m-auto my-5">
        <div class="left w-full">
          <div class="post">
            <img :src="image.bolg4" alt="" />
            <h3 class="font-bold text-xl mt-3">
              Sample post with featured image
            </h3>
            <p class="font-bold">By author name Jhone</p>
            <p>
              Fusce gravida interdum eros a mollis. Sed non lorem varius,
              volutpat nisl in, laoreet ante . Quisque suscipit mauris ipsum, eu
              mollis arcu laoreet vel. In posuere odio sed libero tincidunt
              commodo a vel ipsum. Mauris fringilla tellus aliquam, egestas sem
              in, malesuada nunc. Etiam condimentum felis odio, vel mollis est
              tempor non...
            </p>
            <button class="p-1 bg-headerBg text-mainWhite rounded mt-3">
              Read More
            </button>
          </div>
          <div class="post">
            <img :src="image.bolg1" alt="" class="mt-3" />
            <h3 class="font-bold text-xl mt-3">
              Sample post with featured image
            </h3>
            <p class="font-bold">By author name Jhone</p>
            <p>
              Fusce gravida interdum eros a mollis. Sed non lorem varius,
              volutpat nisl in, laoreet ante . Quisque suscipit mauris ipsum, eu
              mollis arcu laoreet vel. In posuere odio sed libero tincidunt
              commodo a vel ipsum. Mauris fringilla tellus aliquam, egestas sem
              in, malesuada nunc. Etiam condimentum felis odio, vel mollis est
              tempor non...
            </p>
            <button class="p-1 bg-headerBg text-mainWhite rounded mt-3">
              Read More
            </button>
          </div>
          <div class="post">
            <img :src="image.bolg3"alt="" class="mt-3" />
            <h3 class="font-bold text-xl mt-3">
              Sample post with featured image
            </h3>
            <p class="font-bold">By author name Jhone</p>
            <p>
              Fusce gravida interdum eros a mollis. Sed non lorem varius,
              volutpat nisl in, laoreet ante . Quisque suscipit mauris ipsum, eu
              mollis arcu laoreet vel. In posuere odio sed libero tincidunt
              commodo a vel ipsum. Mauris fringilla tellus aliquam, egestas sem
              in, malesuada nunc. Etiam condimentum felis odio, vel mollis est
              tempor non...
            </p>
            <button class="p-1 bg-headerBg text-mainWhite rounded mt-3">
              Read More
            </button>
          </div>
        </div>
        <div class="right"></div>
      </div>
</template>

<style lang="postcss" scoped>
    
</style>
