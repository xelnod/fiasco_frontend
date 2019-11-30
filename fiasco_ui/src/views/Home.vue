<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <mainHeader/>
  </div>
</template>

<script>
// @ is an alias to /src
import mainHeader from '@/components/_header/index.vue';

export default {
  name: 'home',
  components: {
    mainHeader,
  },
};
</script>
