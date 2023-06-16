<template>
  <div class="p-6 flex flex-col gap-6">
    <div class="text-xl font-semibold">Hello World</div>

    <SCard title="This is card data">
      <div>
        <p class="pb-4">Hello</p>
        <SBtn class="px-10 btn-sm btn-primary rounded" @click="onClick"
          >Test Notify</SBtn
        >
      </div>
    </SCard>

    <SForms />
  </div>
</template>

<script setup lang="ts">
import { SBtn } from 'masc-vue';
import { SCard, useNotify } from 'masc-vue';
import SForms from './components/SForms.vue';
const notify = useNotify();

async function onClick() {
  const yes = await notify.confirm(
    'Please confirm if you would like to do this?'
  );
  if (yes) {
    notify.success(`The response is confirmed`);
  } else {
    notify.warning(`User did not like it`);
  }
}
</script>
