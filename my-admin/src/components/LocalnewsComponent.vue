<template>
  <div>
    <!-- Dashboard -->
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="pb-4 bg-white dark:bg-gray-900">
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative mt-1">
            <div
              class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <div class="flex">
              <!-- Searching -->
              <input
                v-model="query"
                type="text"
                id="table-search"
                class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by title"
              />
              <button
                @click="search"
                class="ml-2 relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span
                  class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Search
                </span>
              </button>
            </div>
          </div>
        </div>
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="p-4">Title</th>
              <th scope="col" class="px-6 py-3">Date</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Update</th>
              <th scope="col" class="px-6 py-3">Delete</th>
            </tr>
          </thead>
          <tbody>
            <!-- Table rows without checkboxes -->
            <tr
              v-for="x in localnewsData"
              :key="x._id"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <!-- title -->
                {{ limitLength(x.title, 40) }}
              </th>
              <td class="px-6 py-4">{{ x.time }}</td>
              <td class="px-6 py-4">Local</td>
              <td class="px-6 py-4">
                <button
                  class="font-medium text-yellow-400 dark:text-yellow-500 hover:underline"
                >
                  Update
                </button>
              </td>
              <td class="px-6 py-4">
                <button
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
            <!-- More table rows -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      localnewsData: [],
      query: "",
      searchData: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const localResponse = await axios.get(
          process.env.VUE_APP_API_URL + "api/users/localnews-admin"
        );
        this.localnewsData = localResponse.data;
        console.log(this.localnewsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    limitLength(text, maxLength) {
      if (!text) {
        return "";
      }
      return text.length <= maxLength
        ? text
        : text.substring(0, maxLength) + "...";
    },
    async search() {
      try {
        const response = await axios.get(
          process.env.VUE_APP_API_URL +
            `api/users/search-localnews?query=${this.query}`
        );
        this.localnewsData = response.data;
      } catch (error) {
        console.error("Error searching:", error);
      }
    },
  },
};
</script>
