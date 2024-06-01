<template>
  <div>
    <div>
      <div class="inline-flex size-16 items-center justify-center z-50">
        <span
          class="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
        >
          L
        </span>
      </div>

      <div class="border-t border-gray-100">
        <div class="px-2">
          <div class="py-4">
            <a
              href="#"
              class="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                General
              </span>
            </a>
          </div>

          <ul class="space-y-1 border-t border-gray-100 pt-4">
            <li>
              <router-link
                class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                to="/dashboard/localnews"
              >
                <svg
                  class="size-5 opacity-75 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h9.961L20 8.423v9.962q0 .69-.462 1.153T18.384 20zm0-1h12.769q.269 0 .442-.173t.173-.442V9h-4V5H5.616q-.27 0-.443.173T5 5.616v12.769q0 .269.173.442t.443.173M7.5 16h9v-1h-9zm0-7H12V8H7.5zm0 3.5h9v-1h-9z"
                  />
                </svg>

                <span
                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Localnews
                </span>
              </router-link>
            </li>
            <li>
              <router-link
                class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                to="/dashboard/worldnews"
              >
                <svg
                  class="size-5 opacity-75 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h9.961L20 8.423v9.962q0 .69-.462 1.153T18.384 20zm0-1h12.769q.269 0 .442-.173t.173-.442V9h-4V5H5.616q-.27 0-.443.173T5 5.616v12.769q0 .269.173.442t.443.173M7.5 16h9v-1h-9zm0-7H12V8H7.5zm0 3.5h9v-1h-9z"
                  />
                </svg>

                <span
                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Worldnews
                </span>
              </router-link>
            </li>
            <li>
              <a
                href="#"
                class="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>

                <span
                  class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                >
                  Account
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2"
    >
      <form action="#">
        <button
          type="submit"
          class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5 opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>

          <span
            class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
          >
            Logout
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
