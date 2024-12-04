<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import UiInput from '@/components/ui/UiInput.vue';


definePageMeta({
    middleware: ['auth']
})

const userStore = useUserStore();
const router = useRouter();

const user_id = ref('');
const errorMessage = ref<string | null>(null);

const login = async () => {
    await userStore.login(user_id.value)
    .then(() => {
        router.push('/dashboard');
    })
}
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <p>
            User ID: {{ user_id }}
        </p>
        <UiInput
            v-model="user_id"
            placeholder="UserID"
            type="number"
            @error="errorMessage = $event"
            class="mt-4"
        />
        <p v-if="errorMessage" class="text-red-500 w-[350px]">{{ errorMessage }}</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[350px] mt-5 disabled:bg-gray-300" :disabled="!!errorMessage || !user_id" @click="login">Login</button>
    </div>
</template>