<template>
  <div id="app">
    <p>{{ "7 char" | ellipsis }}</p>
    <p>{{ "14 characters" | ellipsis }}</p>
    <p>{{ "More than 14 characters" | ellipsis }}</p>
    <p>{{ null | ellipsis }}</p>
    <p>{{ 55 | ellipsis }}</p>
    <p>{{ dato }}</p>
  </div>
</template>

<script>
import { ellipsis } from '@/utils/filters';

export default {
  filters: {
    ellipsis
  },
  props: {
      dato: String,
  }
};
</script>