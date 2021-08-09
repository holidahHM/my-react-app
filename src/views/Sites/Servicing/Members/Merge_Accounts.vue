<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
       <div id="visa">
    <h2>Beneficiaries</h2>
    <form>
     <br><br>
     <b-row>
         <b-col lg="4">
      <button @click="add">+</button>
         </b-col>
         <b-col lg="4">
              <button @click="deleteV(counter)">-</button>
         </b-col>
     </b-row>
      <br>
      <div class="previous"
      v-for="(applicant, counter) in applicants"
      v-bind:key="counter">
      <b-row>
      <b-col lg="2">
      <base-input 
              type="text"
              label="name"
              placeholder="Name"
              id="example-date-input"
              v-model="applicant.expiration"
            >
            </base-input>
      </b-col>
      <b-col lg="2">
      <base-input 
              type="text"
              label="Relationship to Member"
              placeholder="Relationship"
              id="example-date-input"
              v-model="applicant.expiration"
            >
            </base-input>
      </b-col>
      <b-col lg="2">
      <base-input 
              type="text"
              label="Address"
              placeholder="Address"
              id="example-date-input"
              v-model="applicant.expiration"
            >
            </base-input>
      </b-col>
      <b-col lg="2">
      <base-input 
              type="text"
              label="Telephone"
              placeholder="Telephone"
              id="example-date-input"
              v-model="applicant.expiration"
            >
            </base-input>
      </b-col>
      <b-col lg="2">
      <base-input 
              type="date"
              label="Date of Birth"
              placeholder="Date of Birth"
              id="example-date-input"
              v-model="applicant.expiration"
            >
            </base-input>
      </b-col>
      <b-col lg="2">
      <base-input 
              type="date"
              label="Date of Appointment"
              placeholder="Date of Appointment"
              id="example-date-input"
              v-model="applicant.expiration"
            >
            </base-input>
      </b-col>
      </b-row>
      <b-row>
           <b-col lg="2">
      <base-input 
              type="text"
              label="ID No."
              placeholder="ID"
              id="example-date-input"
              v-model="applicant.expiration"
            >
            </base-input>
      </b-col>
       <b-col lg="2">
      <base-input 
              type="text"
              label="Share %"
              placeholder=".00"
              id="example-date-input"
              v-model="applicant.expiration"
            >
            </base-input>
      </b-col>
      </b-row>
       
        
         
      </div>
    </form>
</div>
    </card>
    </base-header>
</template>
<script>
export default {
    name: 'Test',
  props: {
    msg: String
  },
  data(){
    return {
       applicants:[
       {
      previous: '',
      expiration:''
       }
     ]
    }
  },
  methods : {
    add(){
      this.applicants.push({
        previous:'',
        expiration: ''
      })
    },
    deleteV(counter){
      this.applicants.splice(counter,1);
}
  }
}
</script>