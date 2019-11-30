<template>
  <div id="app">
    Привет, {{ currentUser.username }}!

      <button v-if="isLoggedIn" @click="logout">
        Выйти
      </button> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <span v-if="!isLoggedIn"> | <router-link to="/login">Войти</router-link></span>
    <router-view/>
  </div>
</template>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      currentUser: state => state.currentUser,
      isLoggedIn: state => state.isLoggedIn,
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
