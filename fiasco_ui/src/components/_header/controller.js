import { mapState } from 'vuex';

export default {
  name: 'mainHeader',
  computed: {
    ...mapState({
      currentUser: state => state.currentUser,
      isLoggedIn: state => state.isLoggedIn,
    }),
  },
  data() {
    return {
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
  mounted() {
  },
};
