<template>
  <div class="relative">
    <!-- Blurred background and login form modal -->
    <div class="fixed inset-0 flex items-center justify-center z-20">
      <!-- Blurred background overlay -->
      <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      <!-- Login form -->
      <div
        class="relative w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md z-30"
      >
        <div class="px-6 py-4">
          <h3 class="mt-3 text-xl font-medium text-center text-gray-600">
            Welcome Back
          </h3>

          <p class="mt-1 text-center text-gray-500">Login account</p>

          <form>
            <div class="w-full mt-4">
              <input
                v-model="user.email"
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>

            <div class="w-full mt-4">
              <input
                v-model="user.password"
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>

            <div class="mt-4">
              <h1
                :class="{
                  'text-green-600': loginStatus,
                  'text-red-600': !loginStatus,
                }"
              >
                {{ errorMessage }}
              </h1>
            </div>

            <div class="flex items-center justify-between mt-4">
              <a href="#" class="text-sm text-gray-600 hover:text-gray-500"
                >Forget Password?</a
              >

              <button
                @click.prevent="login"
                class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errorMessage: "",
      loginStatus: false,
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          process.env.VUE_APP_API_URL + "api/users/admin-login",
          {
            email: this.user.email,
            password: this.user.password,
          }
        );
        localStorage.setItem("token", response.data.token);
        // this.$router.push("/publish-news");
        this.loginStatus = true;
        this.errorMessage = "Sucessfully logged in";
      } catch (error) {
        this.loginStatus = false;
        this.errorMessage = error.response.data.message;
      }
    },
  },
};
</script>
