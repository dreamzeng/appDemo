<template>
  <div class="circle">
     <header-bar>
       <h2 slot="read" class="tit" >{{ msg }}</h2>
     </header-bar>
      <section class='m_content'>
     <tools></tools>
     <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
        
     </svg>
<svg width="100%" height="100%" version="1.1"
xmlns="http://www.w3.org/2000/svg">

<rect x="20" y="20" rx="20" ry="20" width="250"
height="100" style="fill:red;stroke:black;
stroke-width:5;opacity:0.5"/>

</svg>
     <bottom-nav></bottom-nav>
     </section>
  </div>
</template>

<script>
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'
import tools from '@/components/Tools.vue'
// import toTop from '@/components/To-top.vue'
// import axios from 'axios'
export default {
  name: 'home',
  components: {
        headerBar,
        bottomNav,
        tools
  },
  data () {
    return {
      msg: '圈子'
    }
  }
}
</script>

<style  lang="less">
@import '../assets/css/sprite.css';

</style>
