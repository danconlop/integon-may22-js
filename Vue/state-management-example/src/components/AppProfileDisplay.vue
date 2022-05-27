<template>
  <section class="md:w-1/3 flex flex-col p-12">
    <!-- Profile Card -->
    <h3 class="font-bold font-lg">{{ formData.name }}</h3>
    <p class="mt-2">{{ formData.occupation }}</p>
  </section>
</template>

<script>
import eventBus from "../event-bus";

export default {
  mounted() {
    eventBus.$on("profileUpdate", this.update);
  },
  beforeDestroy() {
    eventBus.$off("profileUpdate");
  },
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    update(formData) {
      this.formData = formData;
    },
  },
};
</script>