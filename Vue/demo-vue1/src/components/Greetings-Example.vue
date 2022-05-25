<template>
  <div>{{ greeting }} {{ who }}</div>
</template>
<script>
export default {
  props: {
    greeting: {
      type: String,
      required: false,
      default: 'Hola',
    },
    who: {
      type: String,
      required: false,
      default: 'JavaScript',
    },
  },
};
</script>