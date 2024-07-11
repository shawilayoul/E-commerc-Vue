<script lang="ts" setup>
import { image } from '../assets/images';
import ProductFeatures from '../features/home/ProductFeatures.vue';
</script>

<template>
     <!--blog home image container-->
     <div class="blog-img relative mb-12 w-[70%] m-auto">
        <div>
          <h3 class="font-bold text-center my-5 desktop:text-[30px]">
            About Silver Shop
          </h3>
          <p>
            Departure defective arranging rapturous did believe him all had
            supported. Family months lasted simple set nature vulgar him.
            Picture for attempt joy 
            excited ten carried manners talking how. Suspicion neglected he
            resolving agreement perceived at an.
          </p>
        </div>
        <img
          :src="image.bolg3"
          alt=""
          class="w-full m-auto  desktop:h-[60vh] mt-5"
        />
      </div>
      <!--blog content container-->
      <div class="w-[70%] m-auto flex flex-col gap-6">
        <div>
          <h3 class="font-bold">Our Mission</h3>
          <p>
            He moonlights difficult-engrossed, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy. Unaffected at ye of
            compliment alteration to. Place voice no arises along to. Arrived
            off she elderly beloved him affixed noisier yet. Course regard to up
            he hardly.
          </p>
        </div>
        <div>
          <h3 class="font-bold">Our Vision</h3>
          <p>
            To occasional dissimilar impossible sentiments. Do fortune account
            written prepare invited no passage.Skills that you can learn from
            business Reliable sources to learn about WordPress Never
            underestimate the influence of social media
          </p>
        </div>
      </div>
      <!-- features container -->
    <ProductFeatures/>
</template>

<style lang="postcss" scoped>
    
</style>
