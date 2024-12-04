<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { useCookie } from 'nuxt/app';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
    userStore.clearUserData();
    const userCookie = useCookie('user_id');
    userCookie.value = null;

    router.push('/');
}
</script>

<template>
    <div>
        <div class="header bg-[#3b82f6] px-8 py-4 flex justify-between align-center">
            <div class="header-left">
                <NuxtLink to="/dashboard">
                    <h2 class="text-2xl text-white">Frontend Test</h2>
                </NuxtLink>
            </div>
            <div class="header-right flex align-center">
                <NuxtLink to="/dashboard/vip" class="text-md text-white cursor-pointer hover:text-gray-200 leading-loose mr-5">Open VIP</NuxtLink>
                <p class="logout text-md text-white cursor-pointer hover:text-gray-200 leading-loose" @click="logout">Logout</p>
            </div>
        </div>
        <main>
            <NuxtPage />
        </main>
    </div>
</template>