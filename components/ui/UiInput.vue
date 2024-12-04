<script setup lang="ts">
import { ref, watch } from 'vue';
import useInputValidator from '@/composables/useInputValidator';

const props = defineProps({
  modelValue: [String, Number],
  placeholder: String,
  type: {
    type: String,
    default: 'text',
  },
});

const emit = defineEmits(['update:modelValue', 'error']);

const inputValue = ref(props.modelValue);
const { validate } = useInputValidator();

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue);
  const error = validate(newValue, props.type);
  emit('error', error);
});

watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
  }
);
</script>

<template>
    <input
        v-model="inputValue"
        :placeholder="placeholder"
        class="border p-2 rounded w-[350px] hover:border-blue-500 focus:outline-none focus:border-blue-500 focus-visible:border-blue-500"
    />
</template>