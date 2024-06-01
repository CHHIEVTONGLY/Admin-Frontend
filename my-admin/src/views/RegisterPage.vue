<template>
  <div class="relative">
    <!-- Trigger Button -->
    <button
      @click="showModal = true"
      class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
    >
      Register Acc
    </button>

    <!-- Blurred background and login form modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center z-20"
    >
      <!-- Blurred background overlay -->
      <div
        @click="showModal = false"
        class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
      ></div>

      <!-- Login form -->
      <div
        class="relative w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md z-30"
      >
        <div class="px-6 py-4">
          <h3 class="mt-3 text-xl font-medium text-center text-gray-600">
            Welcome
          </h3>

          <p class="mt-1 text-center text-gray-500">Login or create account</p>

          <form>
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div class="flex items-center justify-between mt-4">
              <a href="#" class="text-sm text-gray-600 hover:text-gray-500"
                >Forget Password?</a
              >

              <button
                class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div
          class="flex items-center justify-center py-4 text-center bg-gray-50"
        >
          <span class="text-sm text-gray-600">Already have account ? </span>

          <router-link
            class="mx-2 text-sm font-bold text-blue-500 hover:underline"
            to="/admin-login"
          >
            Login
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
