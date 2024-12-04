<script setup lang="ts">
import { onMounted } from 'vue';
import { useCookie } from 'nuxt/app';
import { useUserStore } from '@/stores/user';

definePageMeta({
  layout: 'dashboard-skeleton',
});

const userStore = useUserStore();

onMounted(async () => {
  if (!!userStore.userData) {
    const userId = useCookie<string>('user_id').value;

    if (userId) {
      try {
        await userStore.login(userId)
      } catch (error) {
        console.error('Login failed', error);
      }
    }
  }
});
</script>

<template>
  <div class="p-12">
    <ul>
      <UiDynamicList :data="userStore.userData" />
    </ul>
  </div>
</template>
