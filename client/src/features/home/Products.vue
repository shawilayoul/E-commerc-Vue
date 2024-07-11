<script lang="ts" setup>
import { image } from '../../assets/images';

/*** home product date ***/
const homeProducts = [
  {
    id: 1,
    image: image.boy10,
    name: "product name",
    price: 12,
  },
  {
    id: 2,
    image: image.girl2,
    name: "product name",
    price: 22,
  },
  {
    id: 3,
    image: image.boy14,
    name: "product name",
    price: 15,
  },
  {
    id: 4,
    image: image.kid2,
    name: "product name",
    price: 12,
  },
  {
    id: 5,
    image: image.boy9,
    name: "product name",
    price: 12,
  },
  {
    id: 6,
    image: image.kid9,
    name: "product name",
    price: 32,
  },
  {
    id: 7,
    image: image.girl3,
    name: "product name",
    price: 23,
  },
  {
    id: 8,
    image: image.boy6,
    name: "product name",
    price: 12,
  },
  {
    id: 9,
    image: image.boy12,
    name: "product name",
    price: 23,
  },
  {
    id: 10,
    image: image.kid8,
    name: "product name",
    price: 23,
  },
];
</script>

<template>
      <!-- product container -->
  <section class="product w-[80%] m-auto flex flex-col items-center gap-2">
    <h2 class="mt-3 font-bold desktop:text-[30px] , mobile:text-[20px]">
      Our Products
    </h2>
    <div class="filter mb-4">
      <button
        class="bg-headerBg text-mainWhite p-2 ml-2 rounded desktop:w-[100px]"
      >
        All
      </button>
      <button
        class="bg-headerBg text-mainWhite p-2 ml-2 rounded desktop:w-[100px]"
      >
        Men
      </button>
      <button
        class="bg-headerBg text-mainWhite p-2 ml-2 rounded desktop:w-[100px]"
      >
        Women
      </button>
      <button
        class="bg-headerBg text-mainWhite p-2 w-24 ml-2 rounded desktop:w-[100px]"
      >
        Kids
      </button>
    </div>
    <div class="products w-[95%] m-auto flex flex-wrap">
      <!--home prodcut data -->
      <div
      v-for="item in homeProducts" :key="item"
        class="flex flex-col gap-2 items-center bg-homeBg m-2 p-2 rounded"
        key="{id}"
      > <div class="img w-[250px]">
        <img :src="item.image" alt="" class=" w-full " />
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
