<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
            
    <div class="row">
         
          <b-col lg="6">
            <base-input
              label="Choose Event"
              placeholder="Choose Event"
            >
            <select v-model="user_zone" class="form-control">
                <option>Training</option>
                <option>Meeting</option>
                
            </select>
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Choose Meeting"
              placeholder="Choose Meeting"
            >
            <select v-model="user_zone" class="form-control">
                <option>AGM</option>
                <option>SGM</option>
                
            </select>
            </base-input>
          </b-col>
    </div>
    <br>
    <br>
    <p>Tick Only Members Who Attended Event</p>
     <b-row>
                      <b-col xl="2" md="2">
                          <input type="radio" id="John" value="John" v-model="picked">
                          <label for="John">John</label>
                      </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Esther" value="Esther" v-model="picked">
                          <label for="Esther">Esther</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Maggy" value="Maggy" v-model="picked">
                          <label for="Maggy">Maggyy</label>
                       </b-col>
                       <b-col xl="2" md="2">
                           <input type="radio" id="Chris" value="Chris" v-model="picked">
                          <label for="Chris">Chris</label>
                       </b-col>
                       
                  </b-row>
     <br>
  <br>
  <br>
   <b-row>
    <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Scheme_servicing2()" variant="info">Save</b-button>
      
    </b-button-group>
    </b-col>
     </b-row>
    </base-header>
</template>
<script>
 import Scheme_servicing2 from '../../Servicing/Schemes/scheme_servicing2.vue'
export default {
  comments:{
    Scheme_servicing2
  },
  data() {
    return {
      user: {
      },
      i_f_name:'', //i stands for internal
      i_l_name:'',
      i_email:'',
      user:'',
      user_zone:'',
      user_accessto:''
    };
  },
  methods: {
    Scheme_servicing2(){
      this.$router.push('/Scheme_servicing2')
    },
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  },
}
</script>