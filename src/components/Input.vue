<template>
  <v-flex xs12 sm6 md3 class="pl-3">
    <v-text-field
      label="Type English Word"
      v-model="value"
      @change="input"
    ></v-text-field>
  </v-flex>
</template>

<script>
  import { mapActions } from 'vuex'
  import { changeEm } from "../helpers/changeEm";

  import { INPUT } from '../vuex/actions/input'
  export default {
    name: 'input',
    data() {
      return {
        value: '',
      }
    },
    methods: {
      ...mapActions([
        INPUT
      ]),
      input(){
        const tmp = changeEm(this.value);
        this.INPUT(tmp)
      }
    }
  }

</script>
