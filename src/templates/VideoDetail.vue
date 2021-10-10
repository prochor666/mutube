<template>

    <header class="bg-gray-50 dark:bg-gray-900 py-8">
        <div
            class="
                max-w-7xl
                mx-auto
                px-4
                sm:px-6
                lg:px-8
                xl:flex
                xl:items-center
                xl:justify-between
            "
        >
            <div class="w-full">
                <h1 class="mt-2
                    text-2xl
                    font-bold
                    leading-7
                    text-gray-900
                    dark:text-gray-400
                    sm:text-3xl
                    sm:truncate">
                    Dashboard
                </h1>
            </div>
        </div>
    </header>

    <main class="pt-1 pb-16">
        <div class="max-w-7xl mx-auto sm:px-6 px-2 lg:px-8 py-4 sm:py-8">
            App
        </div>
    </main>

</template>

<script>
import { ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import {
    ArrowSmDownIcon,
    ArrowSmUpIcon,
    PaperClipIcon,
} from '@heroicons/vue/solid';

export default {
    components: {
        ArrowSmDownIcon,
        ArrowSmUpIcon,
        PaperClipIcon
    },
    async setup() {
        const route = useRoute();
        const router = useRouter();
        const videos = reactive(new Set());
        const apiUrl = '';

        const getVideos = async function() {
            const result = await axios.get(`${apiUrl}`, {});
            let _d = await result.data;
            return _d;
        };

        //videos.value = await getVideos();

        return {
            videos
        };
    },
};
</script>

<style></style>