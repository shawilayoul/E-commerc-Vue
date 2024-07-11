<script setup>
import Slide from "../features/home/Slide.vue";
import Products from "../features/home/Products.vue";
import NewProducts from "../features/home/NewProducts.vue";
import ProductFeatures from "../features/home/ProductFeatures.vue";
</script>

<template>
  <!--  container -->
  <div class="shop-container w-[95%] m-auto mt-3 desktop:flex gap-12">
     <!--  shop Slide container -->
    <div class="shop-right w-full">
     
      <Slide/>
    </div>
    <div
      class="desktop:w-[25%] flex flex-col gap-3 mr-4 mobile:w-[80%] mobile:m-auto"
    >
      <h3 class="p-2 text-xl font-bold">CATEGORIES</h3>
      <div class="select-section p-2 flex flex-col gap-3">
        <div class="select-item flex justify-between border-b-[2px] p-1 mb-3">
          <label htmlFor="men">Men</label>
          <select name="" id="men">
            <option value="">Sweaters & Knits</option>
            <option value="">Jackest & Coats</option>
            <option value="">Shorts</option>
          </select>
        </div>
        <div class="select-item flex justify-between border-b-[2px] p-1 mb-3">
          <label htmlFor="men">Women</label>
          <select name="" id="men">
            <option value="">Jackest & Coats</option>
            <option value="">Sweaters & Knits</option>

            <option value="">Shorts</option>
          </select>
        </div>
        <div class="select-item flex justify-between border-b-[2px] p-1 mb-3">
          <label htmlFor="men">Kid</label>
          <select name="" id="men">
            <option value="">Shorts</option>
            <option value="">Sweaters & Knits</option>
            <option value="">Jackest & Coats</option>
          </select>
        </div>
        <div class="select-item flex justify-between border-b-[2px] p-1 mb-3">
          <label htmlFor="men">Top Selles</label>
          <select name="" id="men">
            <option value="">Sweaters & Knits</option>
            <option value="">Jackest & Coats</option>
            <option value="">Shorts</option>
          </select>
        </div>
      </div>
      <div class="color p-2">
        <h3 class="text-xl font-bold mb-3">Colors</h3>
        <div class="grid grid-cols-3 gap-3">
          <div class="bg-mainRed w-18 h-14"></div>
          <div class="red bg-mainGray w-18 h-14"></div>
          <div class="yellow bg-black w-18 h-14"></div>
          <div class="black bg-mainBlue w-18 h-14"></div>
          <div class="blue bg-green w-18 h-14"></div>
          <div class="green bg-yellow w-18 h-14"></div>
        </div>
      </div>
      <div class="price-filter p-2">
        <h3 class="text-xl font-bold">Filter by Price</h3>
        <input type="range" class="w-72" />
      </div>
    </div>
  </div>
  <!-- product container -->
  <Products />

  <!-- features container -->
 <ProductFeatures/>

  <NewProducts/>
</template>

<style lang="postcss" scoped></style>
