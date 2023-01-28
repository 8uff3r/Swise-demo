<template>
  <div>
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div class="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div class="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                  Beauty Products
                </h2>

                <p class="mt-4 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                  rerum quam amet provident nulla error!
                </p>
              </header>

              <a href="#"
                class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-[#FF4141] rounded hover:shadow focus:outline-none focus:ring">
                Shop All
              </a>
            </div>
          </div>

          <div class="lg:col-span-2 lg:py-8">
            <ul class="grid grid-cols-2 gap-4">
              <li>
                <a href="#" class="block group">
                  <img src="../assets/banners/4b.png" alt="" class="object-cover w-full rounded aspect-square" />

                  <div class="mt-3">
                    <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Face Creams
                    </h3>

                    <p class="mt-1 text-sm text-gray-700">$150</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" class="block group">
                  <img src="../assets/banners/3b.png" alt="" class="object-cover w-full rounded aspect-square" />

                  <div class="mt-3">
                    <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Hand Cream
                    </h3>

                    <p class="mt-1 text-sm text-gray-700">$150</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>

</style>
