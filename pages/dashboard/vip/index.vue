<script setup>
import vip from '@/middleware/vip';

definePageMeta({
  layout: 'dashboard-skeleton',
  middleware: [vip]
});
</script>

<template>
    <h1 class="text-3xl text-center text-green-600 font-bold pt-32">Welcome VIP Member!</h1>
</template>
