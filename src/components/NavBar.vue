<template>
  <div class="navbar mt-0 md:mt-8 lg:px-10 [&_span]:hidden [&_span]:lg:block">
    <div class="navbar-start">
      <button class="btn-ghost btn hidden space-x-0 md:flex lg:space-x-2">
        <font-awesome-icon icon="fas fa-question-circle" />
        <span class="hidden lg:block"> Help & FAQ </span>
      </button>
      <div class="hidden p-4 lg:block">
        <input type="text" placeholder="Search for products" class="input-bordered input-primary input w-full p-4" />
      </div>
      <button class="btn-ghost btn block space-x-0 lg:hidden lg:space-x-2" @click="$vfm.show('searchModal')">
        <span> Search </span>
        <font-awesome-icon icon="fas fa-magnifying-glass" />
      </button>
    </div>
    <div class="navbar-center">
      <a class="btn-ghost btn relative w-36 border-none normal-case hover:bg-inherit lg:w-56">
        <img :src="getImageUrl('logos/logo_name.png')" class="" />
      </a>
    </div>
    <div class="navbar-end space-x-2 [&_label]:lg:space-x-2 [&>*]:space-x-0">
      <div class="dropdown-bottom dropdown-end dropdown hidden md:block">
        <label tabindex="0" class="btn-ghost btn">
          <span> Cart </span>
          <font-awesome-icon icon="fas fa-cart-shopping" />
        </label>
        <div tabindex="0"
          class="card dropdown-content card-compact w-64 translate-x-1/4 bg-primary p-2 text-primary-content shadow">
          <div class="card-body">
            <h3 class="card-title">Number of Items:</h3>
            <p>you can use any element as a dropdown.</p>
          </div>
        </div>
      </div>
      <div tabindex="0" class="dropdown-bottom dropdown-end dropdown">
        <label class="btn-ghost btn">
          <span> Profile </span>
          <font-awesome-icon icon="fas fa-user" />
        </label>
        <div tabindex="0" class="card-compact card dropdown-content w-64 bg-primary p-2 text-primary-content shadow">
          <div class="card-body">
            <h3 class="card-title">Profile</h3>
            <nav aria-label="Main Nav" class="flex flex-col space-y-1">
              <a href="" class="flex items-center rounded-lg bg-gray-100 px-4 py-2 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span class="ml-3 text-sm font-medium"> General </span>
              </a>

              <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="group flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>

                  <span class="ml-3 text-sm font-medium"> Teams </span>

                  <span class="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                </summary>

                <nav aria-label="Users Nav" class="mt-2 ml-8 flex flex-col space-y-1">
                  <a href=""
                    class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Banned Users
                  </a>

                  <a href=""
                    class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Calendar
                  </a>
                </nav>
              </details>

              <a href=""
                class="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>

                <span class="ml-3 text-sm font-medium"> Billing </span>
              </a>

              <a href=""
                class="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>

                <span class="ml-3 text-sm font-medium"> Invoices </span>
              </a>

              <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  class="group flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>

                  <span class="ml-3 text-sm font-medium"> Account </span>

                  <span class="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </span>
                </summary>

                <nav aria-label="Account Nav" class="mt-2 ml-8 flex flex-col space-y-1">
                  <a href=""
                    class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Details
                  </a>

                  <a href=""
                    class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Security
                  </a>

                  <form action="/logout">
                    <button type="submit"
                      class="w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                      Logout
                    </button>
                  </form>
                </nav>
              </details>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <vue-final-modal v-model="show" name="searchModal" classes="flex justify-center items-center"
    content-class="w-[80%] md:w-[50%]">
    <div class="p-4">
      <input type="text" placeholder="Search for products" class="input-bordered input-primary input w-full p-4" />
    </div>
  </vue-final-modal>
</template>
<script setup>
import helpers from "../helpers.js";
import { inject, ref } from "vue";
import { VueFinalModal } from "vue-final-modal";
import UserDrop from "../components/UserDrop.vue";
const getImageUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};
const $vfm = inject("$vfm");
const show = ref(false);
</script>
