<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
     <div class="row">
    <div class="col-md-4">
        <label for="input-default">Enter Scheme Name:</label>
      <b-form-input id="input-default" placeholder="Scheme Name"></b-form-input>
    </div>
    <div class="col-md-4">
     <p>Contribution Remittance Mode</p>
               <select v-model="country">
                 <option disabled value="Contribution Remittance Mode">Remittance Mode</option>
                        <option>Arrears</option>
                        <option>Advanced</option>
              </select>
              
    </div>
    <div class="col-md-3">
     <p>Structure</p>
               <select v-model="text">
                 <option disabled value="">Structure</option>
                        <option>OPPS</option>
                        <option>Umbrella</option>
                        <option>Trust Funds</option>
                        <option>Income DrawDown</option>
                        <option>Corporate Trustees</option>
                        <option>Corporate Principal Officer Scheme</option>
              </select>
              
    </div>
     </div>
      <div class="row">
    <div class="col-md-4">
        <label for="input-default">Sector:</label>
      <b-form-input id="input-default" placeholder="Sector"></b-form-input>
    </div>
    <div class="col-md-6">
     <p>Movement Interest Type</p>
               <select v-model="text">
                 <option disabled value="">Movement Interest</option>
                        <option>Guarantee</option>
                        <option>Provisional</option>
                        
              </select>
              
    </div>
     </div>
      <div class="row">
    <div class="col-md-4">
        <label for="input-default">Enter Tax Pin:</label>
      <b-form-input id="input-default" placeholder="Tax Pin"></b-form-input>
    </div>
    <div class="col-md-6">
     <p>Category</p>
               <select v-model="text">
                 <option disabled value="">Category</option>
                        <option>Provident</option>
                        <option>Pension</option>
              </select>
              
    </div>
     </div>
      <div class="row">
    <div class="col-md-4">
        <label for="input-default">Enter Registration Date:</label>
      <b-form-input type="date" placeholder="Telephone"></b-form-input>
    </div>
    <div class="col-md-6">
     <p>Select your Country</p>
               <select v-model="country">
                 <option disabled value="">Country</option>
                        <option>Kenya</option>
                        <option>Uganda</option>
                        <option>Zambia</option>
              </select>
              
    </div>
     </div>
           <div class="row">
    <div class="col-md-4">
        <label for="input-default">Enter Town:</label>
      <b-form-input id="input-default" placeholder="Town"></b-form-input>
    </div>
    <div class="col-md-6">
     <p>Type</p>
               <select v-model="text">
                 <option disabled value="">Type</option>
                        <option>Defined Benefits</option>
                        <option>Defined Contributions</option>
              </select>
              
    </div>
     </div>
      <div class="row">
    <div class="col-md-4">
        <label for="input-default">Enter Postal Address:</label>
      <b-form-input id="input-default" placeholder="Postal Address"></b-form-input>
    </div>
    <div class="col-md-6">
     <p>Frequency of Contribution</p>
               <select v-model="text">
                 <option disabled value="">Frequency of Contribution</option>
                        <option>Monthly</option>
                        <option>Quarterly</option>
                        <option>Semi-annually</option>
              </select>
              
    </div>
     </div>
      <div class="row">
    <div class="col-md-4">
        <label for="input-default">Enter Email:</label>
      <b-form-input type="email" placeholder="example@mail.com"></b-form-input>
    </div>
     </div>
     <br>
     <b-row>
    
    <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Beneficiaries()" variant="warning">Create Scheme</b-button>
      
    </b-button-group>
    </b-col>
     </b-row> 
    </card>    
    </base-header>
</template>