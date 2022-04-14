<template>
  <input
    type="text"
    placeholder="your activity.."
    class="w-full px-4 py-2 mb-2 transition-all duration-500 border rounded-md  border-slate-500 focus:outline-none focus:ring focus:border-sky-800/80 focus:ring-sky-300/80"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>
