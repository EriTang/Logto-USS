<script setup>
import { cn } from "@/lib/utils";

const props = defineProps({
  class: { type: null, required: false },
});
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border bg-gray-50 text-gray-900 shadow-sm',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
