<script setup></script>

<template>
  <footer class="bg-headerBg text-white pt-2">
    <!--footer-top section-->
    <div
      className="w-[95%] m-auto p-2 desktop:flex-row justify-between  mobile:flex flex-col   tablet:items-center gap-3"
    >
      <div class="flex flex-col gap-2">
        <h3 class="font-bold">About us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Commodi repellat facere molestiae ab facilis sunt id. <br />
          Non eligendi, fugit harum sint, iure molestias, cumque <br />
          laboriosam eius deleniti assumenda odit perspiciatis.
        </p>
        <div className="flex gap-16 my-1">
          <i class="pi pi-facebook text-[25px]"></i>
          <i class="pi pi-instagram text-orange text-[25px]"></i>
          <i class="pi pi-twitter text-[25px]"></i>
          <i class="pi pi-youtube text-orange text-[25px]"></i>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 class="font-bold">News letter</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p>
          Nostrum ullam perferendis fuga dolorem eveniet expedita 
        </p>
        <div class="">
          <input
            type="text"
            placeholder="Enter your E-mail and get 10$ catch"
            class="px-2 py-1 w-[250px]"
          />
          <button class="bg-orange px-2 py-1">Subscribes</button>
        </div>
        <div className="flex gap-16 my-1">
          <i class="pi pi-credit-card text-[25px]"></i>
          <i class="pi pi-paypal text-orange text-[25px]"></i>
          <i class="pi pi-wallet text-[25px]"></i>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 class="font-bold">Informations</h3>
        <p>Delivery information</p>
        <p>contact us</p>
        <p>Phone: <span class="text-orange">+33 7 82 37 11 77</span></p>
        <p>E-mail: <span class="text-orange">aocholayoul9@gmail.com</span></p>
      </div>
    </div>
    <!--footer bottom section-->
    <div
      className="bg-black p-4 desktop:flex-row justify-between  mobile:flex flex-col mobile:items-center gap-2 "
    >
      <div>
        <p>@2024copyRight</p>
      </div>
      <div>
        <p>General condition of sale</p>
      </div>
      <div>
        <p>Privacy Policy</p>
      </div>
      <div>
        <p>Terms and conditions</p>
      </div>
    </div>
  </footer>
</template>
