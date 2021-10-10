<template>

    <div class="h-screen flex bg-white dark:bg-black">
        <div class="flex flex-col w-64">
            <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 dark:border-gray-900 text-gray-800 dark:text-gray-400">
                <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <nav class="mt-5 flex-1" aria-label="Sidebar">
                        <div class="px-2 space-y-1">
                            <a v-for="video in videos" :key="video.source" :href="video.source" class="block relative video-nav-min font-medium py-6 my-6">
                                <div class="absolute top-0 video-240 z-1000" @hover.prevent>
                                </div>
                                <div class="absolute top-0 z-10 video-240" @hover.prevent>
                                    <youtube-iframe
                                        :video-id="video.source"
                                        :player-width="240"
                                        :player-height="135"
                                        :no-cookie="false"
                                        :player-parameters="{controls:0,loop:1,muted:1,autoplay:1,disablekb:1,fs:0,modestbranding:0,playsinline:1,rel:0,iv_load_policy:3,cc_load_policy:0}"
                                    ></youtube-iframe>
                                    {{ video.title }}
                                </div >
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        <main class="flex-1 overflow-y-auto">
            <div class="py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="lead">{{ videos[0].title }}</h1>
                <youtube-iframe
                    :video-id="videos[0].source"
                    :player-parameters="{controls:1,muted:0,volume:25,loop:0,autoplay:1,modestbranding:0,playsinline:0}"
                ></youtube-iframe>
            </div>
        </main>
    </div>



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
        PaperClipIcon,
    },

    async setup() {
        const route = useRoute();
        const router = useRouter();
        const videos = reactive([
            {
                title: 'A Journey Beyond The Milky Way',
                source: '5eqPpc0nL6o',
            },
            {
                title: 'Enigmas of the Solar System',
                source: 'pQ9VBLLprpo',
            },
            {
                title: "Cosmic Journeys - Hubble: Universe in Motion",
                source: "IN1KJ8LYW3U"
            }
        ]);
        const apiUrl = '';

        const getVideos = async function () {
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