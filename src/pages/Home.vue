<template>
  <div class="home">
    半角で入力した文字がaboutページでは全角で表示されます
    <Input />
    <v-btn @click="testRouter">Aboutに遷移(routerのtest)</v-btn>
  </div>
</template>

<script>
import Input from '../components/Input'
import { mapGetters } from 'vuex'
import router from '../plugins/router'

export default {
  name: 'home',
  components: {
    Input
  },
  computed: {
    ...mapGetters(['value']),
  },
  methods: {
    testRouter() {
      router.push('/about')
    },
  }
}
</script>
