<template>
  <div id="app">
    <lButton type="primary">button</lButton>
    <lButton type="success">button</lButton>
    <lButton @click="loading = !loading" :loading="loading" type="warning">button</lButton>
    <lInput block :count="20"></lInput>
    <lInput readonly></lInput>
    <lInput disabled></lInput>
  </div>
</template>

<script>
import lButton from '@/components/button.vue'
import lInput from '@/components/input.vue'
import '@/styles/index.scss'

export default {
  name: 'app',
  components: {
    lButton,
    lInput
  },
  data(){
    return {
      loading:false
    }
  }
}
</script>

<style>

</style>
