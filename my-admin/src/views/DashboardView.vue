<template>
  <div class="flex flex-row">
    <div
      class="flex h-screen w-16 flex-col justify-between border-e bg-white basis-1/14 z-50"
    >
      <DashboardMenuVue></DashboardMenuVue>
    </div>
    <!-- Dashboard -->
    <div class="p-4 basis-13/14 z-0">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DashboardMenuVue from "../components/DashboardMenu.vue";
export default {
  components: { DashboardMenuVue },
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },
};
</script>
