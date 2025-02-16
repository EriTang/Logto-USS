<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: null, required: false },
});
</script>

<template>
  <h3
    :class="
      cn('text-2xl font-semibold leading-none ', props.class)
    "
  >
    <slot />
  </h3>
</template>
