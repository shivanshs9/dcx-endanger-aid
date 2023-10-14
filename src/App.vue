<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { init as web3Init } from '@web3-onboard/vue'
import injectedModule from '@web3-onboard/injected-wallets'

const injected = injectedModule()
const rpcAPIKey = 'r7nUn99aelPVuy8s7OMQmY3N8NkHP6j4'
const rpcUrl = `https://eth-sepolia.g.alchemy.com/v2/${rpcAPIKey}`

web3Init({
  wallets: [injected],
  chains: [
    // { id: 0x1, token: 'ETH', label: 'Ethereum Mainnet', rpcUrl }
    { id: 0xaa36a7, token: 'ETH', label: 'Ethereum Testnet', rpcUrl }
  ]
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <o-menu>
        <o-menu-list label="Menu">
            <o-menu-item icon="info-circle" label="Home">
              <RouterLink to="/">Home</RouterLink>
            </o-menu-item>>
        </o-menu-list>
    </o-menu>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
