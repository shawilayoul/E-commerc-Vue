<script lang="ts" setup>
import { image } from '../../assets/images';

/*** home product date ***/
const homeProducts = [
  {
    id: 1,
    image: image.boy1,
    name: "product name",
    price: 12,
  },
  {
    id: 2,
    image: image.girl6,
    name: "product name",
    price: 22,
  },
  {
    id: 3,
    image: image.boy4,
    name: "product name",
    price: 15,
  },
  {
    id: 4,
    image: image.kid6,
    name: "product name",
    price: 12,
  },
  {
    id: 5,
    image: image.boy7,
    name: "product name",
    price: 12,
  },
  {
    id: 6,
    image: image.kid8,
    name: "product name",
    price: 32,
  },
  {
    id: 7,
    image: image.girl4,
    name: "product name",
    price: 23,
  },
  {
    id: 8,
    image: image.boy12,
    name: "product name",
    price: 12,
  },
  {
    id: 9,
    image: image.boy3,
    name: "product name",
    price: 23,
  },
  {
    id: 10,
    image: image.kid9,
    name: "product name",
    price: 23,
  },
];
</script>

<template>
      <!-- product container -->
  <section class="product w-[80%] m-auto flex flex-col items-center gap-2 my-5">
    <h2 class="mt-3 font-bold desktop:text-[30px] , mobile:text-[20px]">
      New Arrival
    </h2>
    <div class="products w-[95%] m-auto flex flex-wrap">
      <!--home prodcut data -->
      <div
      v-for="item in homeProducts" :key="item"
        class="flex flex-col gap-2 items-center bg-homeBg m-2 p-2 rounded"
        key="{id}"
      > <div class="w-[250px] h-[300px]">
        <img :src="item.image" alt="" class=" w-full h-[300px]" />
      </div>
        <h4>{{ item.name }}</h4>
        <p>${{ item.price }}</p>
        <button class="cartBtn bg-headerBg p-2 text-mainWhite rounded">
          Add to cart
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
    
</style>
