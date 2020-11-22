<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="/img/logos/workflow-mark-on-dark.svg"
                alt="Workflow logo"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline">
                <router-link
                  v-for="(link, i) in links"
                  :key="i"
                  :to="link.to"
                  custom
                  v-slot="{ navigate, href, isExactActive }"
                >
                  <a
                    :href="href"
                    @click="navigate"
                    class="px-3 py-2 rounded-md text-sm font-medium"
                    :class="[
                      isExactActive
                        ? 'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
                      i > 0 && 'ml-4',
                    ]"
                    >{{ link.text }}</a
                  >
                </router-link>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button
                class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                aria-label="Notifications"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button
                    class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                    @click="showProfileMenu = !showProfileMenu"
                  >
                    <img
                      class="h-8 w-8 rounded-full"
                      src="/img/person1.jpeg"
                      alt=""
                    />
                  </button>
                </div>

                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <div
                    v-if="showProfileMenu"
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                  >
                    <div
                      class="py-1 rounded-md bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Your Profile</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Settings</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        >Sign out</a
                      >
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>

          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              @click="showMenu = !showMenu"
            >
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg
                class="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg
                class="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
      <div class="md:hidden" :class="showMenu ? 'block' : 'hidden'">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <router-link
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            custom
            v-slot="{ navigate, href, isExactActive }"
          >
            <a
              :href="href"
              @click="navigate().then(() => (showMenu = false))"
              class="block px-3 py-2 rounded-md text-base font-medium"
              :class="[
                isExactActive
                  ? 'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
                i > 0 && 'mt-1',
              ]"
              >{{ link.text }}</a
            >
          </router-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="/img/person1.jpeg"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div class="mt-1 text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
          </div>
          <div class="mt-3 px-2">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Your Profile</a
            >
            <a
              href="#"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Settings</a
            >
            <a
              href="#"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
              >Sign out</a
            >
          </div>
        </div>
      </div>
    </nav>

    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          {{ $route.meta.title }}
        </h1>
      </div>
    </header>

    <div class="max-w-screen-xl mx-auto py-6 sm:px-6 lg:px-8">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    showMenu: false,
    showProfileMenu: false,
    links: [
      { text: 'Home', to: '/' },
      { text: 'About', to: '/about' },
    ],
  }),
})
</script>
