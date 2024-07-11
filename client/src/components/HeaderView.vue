<script setup>
import { RouterLink } from "vue-router";
const menus = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
  },

  {
    id: 3,
    name: "Blog",
    link: "/blog",
  },
  { id: 4, name: "About", link: "/about" },
  { id: 5, name: "Contact", link: "/contact" },
];
</script>

<template>
  <header class="bg-headerBg text-white h-[60px] flex p-2 items-center w-full">
    <nav class="flex justify-between items-center  w-[95%] m-auto">
      <i class="pi pi-bars text-[30px] cursor-pointer desktop:hidden"></i>
      <div class="logo"><RouterLink to="/" class="desktop:text-[25px] font-bold mobile:text-[20px]">SleeKStyle</RouterLink>
       
      </div>
      <div class="desktop:flex gap-12 mobile:hidden">
        <ul v-for="menu in menus" key="menu.id">
          <RouterLink :to="menu.link" class="flex">
            <li class="flex">{{ menu.name }}</li>
          </RouterLink>
        </ul>
      </div>
      <div class="flex gap-12 items-center">
        <div class="desktop:bg-white px-2 py-1 rounded-md flex items-center gap-2">
          <p class="pi pi-search font-extrabold desktop:text-headerBg z-10 "></p>
          <input type="text" placeholder="search.........." class="desktop:flex mobile:hidden" />
        </div>
        <div class="pi pi-user"></div>
        <div class="pi pi-shopping-cart"></div>
      </div>
    </nav>
  </header>
</template>
