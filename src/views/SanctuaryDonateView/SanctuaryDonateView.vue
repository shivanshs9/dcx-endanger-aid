<template>
  <div class="donation-page">
    <div class="sanctuary-details">
      <img :src="sanctuary.image" alt="Sanctuary Image" class="sanctuary-image" />
      <h1>{{ sanctuary.name }}</h1>
      <p>{{ sanctuary.description }}</p>
      <p><strong>Date Created:</strong> {{ sanctuary.slangHowOld() }}</p>
      <p><strong>Animal Count:</strong> {{ animalCount }}</p>
      <!-- Add more details as needed -->
    </div>

    <div class="donation-options">
      <div class="one-time-donation">
        <h2>One-Time Donation</h2>
        <input type="number" v-model="oneTimeAmount" placeholder="Amount of crypto tokens" />
        <button @click="donateOneTime">Donate</button>
      </div>

      <div class="subscription-donation">
        <h2>Subscription Donation</h2>
        <p>Subscribe to make a periodic donation and receive a guardianship certificate (NFT) of an animal.</p>
        <input type="number" v-model="subscriptionAmount" placeholder="Amount of crypto tokens" />
        <button @click="subscribeDonation">Subscribe</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SanctuaryStore } from '@/stores/SanctuaryStore';
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  }
});

const _store = new SanctuaryStore();
await _store.init();
const sanctuary = await _store.getSanctuary(parseInt(props.id));

const oneTimeAmount = ref(0);
const subscriptionAmount = ref(0);
const animalCount = ref(0);

animalCount.value = await sanctuary.howManyAnimals();

const donateOneTime = () => {

}
const subscribeDonation = () => {

}
</script>

<style>
.donation-page {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: auto;
}

.sanctuary-details {
  width: 60%;
}

.sanctuary-image {
  width: 100%;
  height: auto;
}

.donation-options {
  width: 35%;
}

.one-time-donation,
.subscription-donation {
  margin-bottom: 2rem;
}

input[type="number"] {
  width: 100%;
  margin-bottom: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #f0c14b;
  border: 1px solid #a88734;
  cursor: pointer;
}
</style>