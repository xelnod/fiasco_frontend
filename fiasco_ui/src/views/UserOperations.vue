<template>
  <div class="about">
    <operation v-for="op in operations" :key="op.id" :name="op.name" :amount="op.amount" :category="op.category" :subcategory="op.subcategory"/>
  </div>
</template>

<script>
import operation from '@/components/UserOperation.vue'
export default {
  components: {
    operation
  },
  data() {
    return {
      operations: [{
        id: 1,
        name: 'kek',
        amount: 100500,
        category: 1,
        subcategory: 1
      },
      {
        id: 2,
        name: 'pek',
        amount: 200600,
        category: 2,
        subcategory: 3
      }]}
  }
}
</script>