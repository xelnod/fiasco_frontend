import { mapState } from 'vuex';
import FiascoForm from '@/components/__fiasco-form/index.vue';

export default {
  name: 'RegisterForm',
  components: { FiascoForm },
  computed: {
    ...mapState({
      currentUser: state => state.currentUser,
      isLoggedIn: state => state.isLoggedIn,
    }),
  },
  data() {
    return {
      fields: [
        {
          label: 'Меня зовут:',
          name: 'username',
          type: 'text',
          value: '',
          error: '',
        },
        {
          label: 'Я хочу вот такой пароль:',
          name: 'password',
          type: 'password',
          value: '',
          error: '',
        },
        {
          label: 'Именно такой пароль:',
          name: 'password2',
          type: 'password',
          value: '',
          error: '',
        },
        {
          label: 'Я зарабатываю, ну, скажем…',
          name: 'income',
          type: 'text',
          value: '50000',
          error: '',
        },
      ],
      errors: {},
      nonFieldErrors: '',
    };
  },
  methods: {
    register(data) {
      return new Promise((resolve, reject) => {
        this.$store.dispatch('register', {
          username: data.username,
          password: data.password,
          password2: data.password2,
          income: data.income,
        })
          .then((response) => {
            this.$store.dispatch('refreshState');
            resolve(response);
          })
          .catch((response) => {
            reject(response);
          });
      });
    },
  },
};
