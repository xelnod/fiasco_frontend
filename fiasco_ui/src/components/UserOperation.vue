<template>
    <div>
    <span>
        I am an Operation!
        Amount is {{ amount }}.
        Name is {{ name }}.
        Category is {{ category }}
        Subcat is {{ subcategory }}
    </span>
</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Operation',
  computed: {
  },
  props: {
    name: String,
    amount: Number,
    category: Object,
    subcategory: Object
  },
  data() {
    return {
      money: 0,
      cat: null
    };
  },
  methods: {
  }
};
</script>