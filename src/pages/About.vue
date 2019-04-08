<template>
  <div class="about">
    {{this.value}}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'about',
    computed: {
      ...mapGetters(['value']),
    },
  }
</script>
