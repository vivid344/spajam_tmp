<template>
  <div class="about">
    先程入力した言葉↓
    <h1>{{this.value}}</h1>

    今まで入力された言葉↓
    <h2>{{this.total}}</h2>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'about',
    computed: {
      ...mapGetters(['value', 'total']),
    },
  }
</script>
