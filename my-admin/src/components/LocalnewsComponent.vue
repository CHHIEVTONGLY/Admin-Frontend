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
              <!-- Dropdown -->
              <div
                @mouseenter="toggleStatus(false)"
                @mouseleave="toggleStatus(true)"
                class="relative"
              >
                <div
                  class="inline-flex items-center overflow-hidden rounded-md border bg-white"
                >
                  <h1
                    class="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                  >
                    Sort by
                  </h1>

                  <button
                    class="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <span class="sr-only">Menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  class="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                  role="menu"
                  :class="{ hidden: !statusShow, hidden: statusShow }"
                >
                  <div class="p-2">
                    <!-- Popular sort -->
                    <div
                      class="hover:bg-gray-50 cursor-pointer"
                      @click="sortPopular"
                    >
                      <h1
                        class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                      >
                        Popular
                      </h1>
                    </div>

                    <!-- Recently sort -->
                    <div
                      class="hover:bg-gray-50 cursor-pointer"
                      @click="sortDate"
                    >
                      <h1
                        class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        role="menuitem"
                      >
                        Recently
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
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
              <th scope="col" class="px-6 py-3">View</th>
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
              <td class="px-6 py-4">{{ x.date }}</td>
              <td class="px-6 py-4">{{ x.view }}</td>
              <td class="px-6 py-4">
                <button
                  @click="getUpdateDataId(x._id)"
                  class="font-medium text-yellow-400 dark:text-yellow-500 hover:underline"
                >
                  Update
                </button>
              </td>
              <td class="px-6 py-4">
                <button
                  @click="deleteLocalnews(x._id)"
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
      <div
        v-if="showSuccessPopup"
        class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
      >
        <popup-delete></popup-delete>
      </div>
      <div
        v-if="showUpdatePopup"
        class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
      >
        <div
          class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
        >
          <div class="bg-white rounded-xl shadow-md p-6 w-96">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-semibold">Update Local News</h2>
              <!-- Close btn -->
              <button
                @click="closeUpdatePopup"
                class="text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
            <div>
              <label
                for="img-url"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Image URL <span class="text-gray-400">(Optional)</span></label
              >
              <input
                v-model="imgUrl"
                type="text"
                id="img-url"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mt-4">
              <label
                for="title"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Title <span class="text-gray-400">(Optional)</span></label
              >
              <input
                v-model="title"
                type="text"
                id="title"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="mt-4">
              <label
                for="paragraph"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Paragraph
                <span class="text-gray-400">
                  (Input "|" for newline)</span
                ></label
              >
              <textarea
                v-model="paragraph"
                type="text"
                id="paragraph"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
            </div>
            <div class="text-green-400 mt-2">
              <h1>{{ updateMessage }}</h1>
            </div>
            <!-- Update btn -->
            <button
              @click="updateData"
              type="button"
              class="mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import PopupDelete from "./PopupDelete.vue";
export default {
  components: { PopupDelete },
  data() {
    return {
      localnewsData: [],
      query: "",
      searchData: [],
      showSuccessPopup: false,
      showUpdatePopup: false,
      statusShow: true,
      imgUrl: "",
      title: "",
      paragraph: "",
      updateMessage: "",
      updateDataID: "",
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

    async deleteLocalnews(id) {
      try {
        console.log(id);
        await axios.delete(
          process.env.VUE_APP_API_URL + `api/users/local-remove/${id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        // Set timeout when delete sucessfully it'll reload the page for 4seconds
        this.showSuccessPopup = true;

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch (error) {
        console.error("Error searching:", error);
      }
    },

    async sortPopular() {
      try {
        const response = await axios.get(
          process.env.VUE_APP_API_URL + "api/localnews/popular/sort"
        );
        this.localnewsData = response.data;
      } catch (error) {
        console.error("Error");
      }
    },

    async sortDate() {
      try {
        const response = await axios.get(
          process.env.VUE_APP_API_URL + "api/localnews/date/sort"
        );
        this.localnewsData = response.data;
      } catch (error) {
        console.error("Error");
      }
    },

    getUpdateDataId(id) {
      this.showUpdatePopup = true;
      this.updateDataId = id; // Store the ID in data property
    },
    closeUpdatePopup() {
      this.showUpdatePopup = !this.showUpdatePopup;
    },
    async updateData() {
      const updateDataRequest = {};
      if (this.imgUrl) updateDataRequest.imgUrl = this.imgUrl;
      if (this.title) updateDataRequest.title = this.title;
      if (this.paragraph) updateDataRequest.paragraph = this.paragraph;

      try {
        await axios.put(
          process.env.VUE_APP_API_URL +
            `api/users/local-update/${this.updateDataId}`,
          updateDataRequest,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        this.updateMessage = "News updated successfully!";
        setTimeout(() => {
          window.location.reload();
        }, 4000);
      } catch (error) {
        console.error("Error updating news:", error);
        this.updateMessage = "Error updating news. Please try again.";
      }
    },

    toggleStatus(isShow) {
      this.statusShow = isShow;
    },
  },
};
</script>
