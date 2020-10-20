<template>
  <div class="">
    <navbar></navbar>
    <div class="flex items-center justify-center w-2/3 h-auto m-auto bg-blue-500 rounded-md shadow-lg">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import './assets/tailwind.css'
  import navbar from './components/NavBarComponent'

  export default {
    name: 'app',
    components: {
      navbar
    }
  }
</script>

<style>

</style>