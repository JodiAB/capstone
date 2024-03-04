<template >
    <div class="footer">
        <h2 class="foot">&copy;  <span>{{ currYear }}</span> Titan Treasures. All rights reserved.</h2>
    </div>
</template>
<script>
import { mapState } from 'vuex';
  
  export default {
    data() {
            return {
                currYear: new Date().getFullYear()
            }
        }
  }
</script>
<style >

  
  .foot {
   
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
  
</style>