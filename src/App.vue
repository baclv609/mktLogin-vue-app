<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const layout = computed(
    () => `${route?.meta?.layout || 'default'}-layout`, // optional chaining
);
</script>
<template>
    <AConfigProvider :theme="{
      token: {
        colorPrimary: '#00A66E',
      },
    }">
      <component :is="layout">
        <router-view />
      </component>
    </AConfigProvider>
</template>
