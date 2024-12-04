<template>
    <li v-for="(value, key) in data" :key="key" class="w-full" :class="typeof value === 'object' && value !== null ? '' : 'pl-3'">
        <div :class="typeof value === 'object' && value !== null ? 'flex flex-col pl-3 w-full' : 'flex border-1 border-solid border-gray-500'">
            <span class="pl-4" :class="typeof value === 'object' && value !== null ? 'bg-gray-300 border-solid border-1 border-gray-500' : 'w-[150px]'">{{ key }}</span>
            <template v-if="typeof value === 'object' && value !== null">
                <ul>
                    <UiDynamicList :data="value" />
                </ul>
            </template>
            <template v-else>
                <span class="border-l-2 border-gray-500 pl-4"> {{ value }}</span>
            </template>
        </div>
    </li>
</template>

<script setup lang="ts">
defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<style lang="css" scoped>
.border-1 {
    border: 1px solid !important;
}
</style>