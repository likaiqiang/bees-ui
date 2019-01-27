<template>
  <div id="app">
    
    <lButton @click="loading = !loading" :loading="loading" type="warning">button</lButton>
    <lInput block :count="20"></lInput>
    <lInput readonly></lInput>
    <lInput disabled></lInput>
    <p>test1</p>
    <p>test2</p>
    <p>test3</p>
    <p>test4</p>
    <p>test5</p>
    <p>test6</p>
    <p>test7</p>
    <p>test8</p>
    <p>test9</p>
    <p>test10</p>
    <p>test11</p>
    <p>test12</p>
    <p>test13</p>
    <p>test14</p>
    <p>test15</p>
    <p>test16</p>
    <p>test17</p>
    <p>test18</p>
    <p>test19</p>
    <p>test20</p>
    <p>test21</p>
    <p>test22</p>
    <p>test23</p>
    <p>test24</p>
    <p>test25</p>
    <p>test26</p>
    <p>test27</p>
    <p>test28</p>
    <p>test29</p>
    <p>test30</p>
    <lSticky>
      <lButton>btton1</lButton>
    </lSticky>
    <p>er1</p>
    <p>er2</p>
    <p>er3</p>
    <p>er4</p>
    <p>er5</p>
    <p>er6</p>
    <p>er7</p>
    <p>er8</p>
    <p>er9</p>
    <p>er10</p>
    <p>er11</p>
    <p>er12</p>
    <p>er13</p>
    <p>er14</p>
    <p>er15</p>
    <p>er16</p>
    <p>er17</p>
    <p>er18</p>
    <p>er19</p>
    <p>er20</p>
    <p>er21</p>
    <p>er22</p>
    <p>er23</p>
    <p>er24</p>
    <p>er25</p>
    <p>er26</p>
    <p>er27</p>
    <p>er28</p>
    <p>er29</p>
    <p>er30</p>
  </div>
</template>

<script>
import lButton from '@/components/button.vue'
import lInput from '@/components/input.vue'
import lSticky from '@/components/sticky.vue'
import '@/styles/index.scss'

export default {
  name: 'app',
  components: {
    lButton,
    lInput,
    lSticky
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
