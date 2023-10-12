<template>
  <section>
    <o-button label="Primary" variant="primary" @click="onClickConnect">
      {{
        connectingWallet
          ? 'Connecting...'
          : connectedWallet
          ? 'Disconnect'
          : 'Connect'
      }}
    </o-button>
    <!-- <span>Wallet is connected to: {{ getChain(connectedWallet.label) }}</span> -->
  </section>
</template>

<script setup lang="ts">
import { useOnboard } from '@web3-onboard/vue'

import { ethers } from 'ethers'

const { connectedWallet, connectingWallet, connectWallet, disconnectWallet, getChain } =
  useOnboard()

if (connectedWallet?.provider) {
  const ethersProvider = new ethers.BrowserProvider(connectedWallet.provider, 'any')
  console.log(ethersProvider)
}

const onClickConnect = () => {
  const { provider, label } = connectedWallet.value || {}
  if (provider && label) {
    disconnectWallet({ label })
  } else {
    connectWallet()
  }
}
</script>

<style>
</style>