<template>
     <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
     <div class="row">
   <div class="col-sm-4">
                           <label for="input-default">Number of Meetings:</label>
      <b-form-input id="input-default" placeholder="ffg"></b-form-input>
      
                       
   </div>
   </div>
   <br>
   <br>
   <br>
   <br>
     <b-row>
    <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Meetings2()" variant="info">Save</b-button>
      
    </b-button-group>
    </b-col>
     </b-row>
     </base-header>
     
</template>
<script>
import Meetings2 from '../Meetings2'
export default {
    components:{
        Meetings2
    },
    methods: {
        Meetings2(){
            this.$router.push('/meetings2')
        }
    },
}
</script>