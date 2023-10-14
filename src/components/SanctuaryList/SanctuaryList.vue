<template>
  <div class="sanctuary-list">
    <SanctuaryItem v-for="sanctuary in sanctuaries" :key="sanctuary.getId()" :sanctuary="sanctuary" />
  </div>
</template>

<script setup lang="ts">
import SanctuaryItem from '@/components/SanctuaryItem.vue'
import { SanctuaryStore } from '@/stores';

const _store = new SanctuaryStore();
await _store.init();
const sanctuaries = await _store.fetchActiveSanctuaries();
</script>

<style scoped>
.sanctuary-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
