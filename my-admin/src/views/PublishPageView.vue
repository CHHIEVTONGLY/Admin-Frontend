<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
  >
    <!-- Publish section -->
    <div class="relative bg-white rounded-xl shadow-md p-6 w-96">
      <div class="flex justify-between items-center mb-4">
        <div>
          <h2 class="text-xl font-semibold">Publish news</h2>
          <p class="text-gray-400 mt-4">Publish to : {{ publishOption }}</p>
          <!-- Dropdown -->
          <div
            @mouseenter="toggleStatus(false)"
            @mouseleave="toggleStatus(true)"
            class="absolute top-0 right-0 mt-4 z-50"
          >
            <div
              class="inline-flex items-center overflow-hidden rounded-md border bg-white"
            >
              <h1
                class="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
              >
                Publish to
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
            <!-- Dropdown menu -->
            <div
              class="absolute z-10 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
              role="menu"
              :class="{ hidden: !statusShow }"
            >
              <div class="p-2">
                <!-- Local news publish -->
                <div
                  class="hover:bg-gray-50 cursor-pointer"
                  @click="publishOptionStatus('local')"
                >
                  <h1
                    class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Local News
                  </h1>
                </div>
                <!-- World news publish -->
                <div
                  class="hover:bg-gray-50 cursor-pointer"
                  @click="publishOptionStatus('world')"
                >
                  <h1
                    class="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    World News
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Input fields for updating news -->
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
          >Paragraph <span class="text-gray-400">(Insert "|" for newline )</span></label
        >
        <textarea
          v-model="paragraph"
          type="text"
          id="paragraph"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
      </div>
      <div class="text-green-400 mt-2">
        <h1>{{ publishMessage }}</h1>
      </div>
      <!-- Update btn -->
      <button
        @click="publishNews"
        type="button"
        class="mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Publish
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showPublishPopup: false,
      statusShow: false,
      publishOption: "",
      publishMessage: "",
      imgUrl: "",
      title: "",
      paragraph: "",
    };
  },
  methods: {
    toggleStatus(isShow) {
      this.statusShow = !isShow;
    },
    publishOptionStatus(option) {
      this.publishOption = option;
    },

    async publishNews() {
      const publishData = {
        imgUrl: this.imgUrl,
        title: this.title,
        paragraph: this.paragraph,
      };

      if (this.publishOption === "local") {
        try {
          const response = await axios.post(
            process.env.VUE_APP_API_URL + "api/users/local-publish",
            publishData,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          this.publishMessage = `Publish successfully : ${response.data}`;
        } catch (e) {
          console.error("Error ", e.message);
          this.updateMessage = "Error publishing news. Please try again later.";
        }
      } else if (this.publishOption === "world") {
        try {
          const response = await axios.post(
            process.env.VUE_APP_API_URL + "api/users/world-publish",
            publishData,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          this.publishMessage = `Publish successfully : ${response.data}`;
        } catch (e) {
          console.error("Error ", e.message);
          this.updateMessage = "Error publishing news. Please try again later.";
        }
      } else {
        this.publishMessage = "Error publishing news. Please try again later.";
      }
    },
  },
};
</script>
