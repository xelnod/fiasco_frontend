import { mapState } from 'vuex';

import LoginForm from './_login-form/index.vue';
import RegisterForm from './_register-form/index.vue';

export default {
  name: 'LoginRegister',
  computed: {
    ...mapState({
      currentUser: state => state.currentUser,
      isLoggedIn: state => state.isLoggedIn,
    }),
  },
  data() {
    return {
      activeTab: 'Login',
    };
  },
  components: { LoginForm, RegisterForm },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
    changeActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
