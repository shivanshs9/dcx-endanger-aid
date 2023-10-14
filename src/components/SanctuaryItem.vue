<template>
  <div class="box" :id="`${sanctuary.getId()}`">
    <img class="image" :src="sanctuary.image" :alt="sanctuary.name" />
    <div class="header">
      <span class="title"><small>{{ sanctuary.getId() }}</small>{{ sanctuary.name }}</span>
      <span class="subtitle">{{ sanctuary.slangHowOld() }}</span>
    </div>
    <div class="cta">
      <router-link :to="{ name: 'donate-sanctuary', params: { id: sanctuary.getId() } }" class="button is-primary">Donate</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, type PropType, type Ref } from 'vue';
import { Sanctuary } from "@/models";;

const props = defineProps({
  sanctuary: {
    type: Object as PropType<Sanctuary>,
    required: true,
  }
});
const sanctuary = props.sanctuary;

</script>