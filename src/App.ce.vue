<template>
  <link rel="stylesheet" type="text/css" :href="tailwind" />
  <body>
    <div class="p-5">
      <button class="bg-red-400">button of tailwind</button>
    </div>
    <div class="p-5">
      <button class="btn btn-secondary">button of daisyUI btn-secondary</button>
      <button class="btn btn-success">button of daisyUI </button>
    </div>
  </body>
</template>
<script lang="ts" setup>
import tailwind from "./assets/style.css?url";
</script>