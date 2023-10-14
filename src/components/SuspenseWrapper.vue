<template>
  <Suspense>
    <template #default><slot></slot></template>
    <template #fallback>
      <o-loading :active="true">
        <o-icon pack="fas" icon="sync-alt" size="large" spin />
      </o-loading>
    </template>
  </Suspense>
</template>

<script setup lang="ts"></script>