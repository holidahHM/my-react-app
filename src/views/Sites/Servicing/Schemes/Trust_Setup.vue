<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>

    <div>
  <b-tabs pills>
    <b-tab active>
        <template v-slot:title >
            Basic Scheme Settings 
        </template>
        <br>
        <div class="d-flex justify-content-center mb-3" >
        </div>
      <b-form @submit.prevent="updateProfile">

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Scheme Code"
              placeholder="Scheme Code" disabled
              v-model="user.schemecode"
            
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Scheme Name"
              placeholder="Scheme Name" disabled
              v-model="user.schemename"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Scheme Group Name"
              placeholder=""
              v-model="user.schemegroupname"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Show In"
              v-model="user.showin"
            >
            <select class="form-control">
                <option>DB Schemes</option>
                <option>DC Occupational Schemes</option>
                <option>Octagon Umbrella Retirement Benefits Scheme</option>
                <option>Octagon Personal Pension Scheme</option>
                <option>Octagon Uganda Umbrella RBS</option>
                <option>Britam Umbrella Scheme</option>
                <option>XENO Umbrella Scheme</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
              <base-input
              label="Type"
              v-model="user.type"
            >
            <select class="form-control">
                <option>Defined Contributions</option>
                <option>Defined Benefits</option>
            </select>
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Category"
              v-model="user.category"
            >
            <select class="form-control">
                <option>Pension Fund</option>
                <option>Provident Fund</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              label="Level of Administration"
              v-model="user.levelofadministration"
            >
            <select class="form-control">
                <option>Occupational</option>
                <option>Corporate Trustees</option>
                <option>CPO</option>
                <option>IPP</option>
                <option>Umbrella</option>
            </select>
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Sector"
              v-model="user.sector"
            >
            <select class="form-control">
                <option>Agriculture</option>
                <option>Commercial and Services</option>
                <option>Educational</option>
                <option>Financial</option>
                <option>Medical</option>
                <option>Production</option>
                <option>Religious</option>
                <option>Sports and Recreational</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
              <base-input
              type="date"
              label="Commencement Date"
              placeholder="Commencement Date"
              id="example-date-input"
              v-model="user.commencementDate"
            >
            </base-input>
          </b-col>
         <b-col lg="6">
              <base-input
              type="date"
              label="Registration Date"
              placeholder="Registration Date"
              id="example-date-input"
              v-model="user.regDate"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="KRA Tax PIN"
              placeholder=""
              v-model="user.KRAtaxpin"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Minimum Joining Age"
              placeholder=""
              v-model="user.minimumjoiningage"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Maximum Joining Date"
              placeholder=""
              v-model="user.maximumjoiningdate"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Service Basis"
              v-model="user.servicebasis"
            >
            <select class="form-control">
                <option>Date of Employment to Date of Exit</option>
                <option>Date of Joining Scheme to Date of Exit</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
         <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="RBA Registration No"
              placeholder=""
              v-model="user.RBAregNo"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="KRA Tax Exemption Cert No"
              placeholder=""
              v-model="user.KRATaxexemptioncertno"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Employer Funding Rate"
              placeholder=""
              v-model="user.employerfundingrate"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Employee Funding Rate"
              placeholder=""
              v-model="user.employeefundingrate"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Early Retirement Age"
              placeholder=""
              v-model="user.earlyretirementage"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Normal Retirement Age"
              placeholder=""
              v-model="user.normalretirementage"
            >
            </base-input>
          </b-col>
        </b-row>
          <b-row>
          <b-col lg="6">
            <base-input
              label="Contribution Remitance Mode"
              v-model="user.contributionremitancemode"
            >
            <select class="form-control">
                <option>Arrears</option>
                <option>Advance</option>
            </select>
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Frequency of Contribution"
              v-model="user.frequencyofcontribution"
            >
            <select class="form-control">
                <option>Once</option>
                <option>Daily</option>
                <option>Fortnightly</option>
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Half Annually</option>
                <option>Annually</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
         <b-row>
          <b-col lg="6">
            <base-input
              label="Movement Interest Type"
              v-model="user.Movementinteresttype"
            >
            <select class="form-control">
                <option>Guarantee</option>
                <option>Provision</option>
            </select>
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Country"
              v-model="user.country"
            >
            <select class="form-control">
                <option>Kenya</option>
                <option>Uganda</option>
                <option>Rwanda</option>
                <option>Zambia</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
         <b-row>
          <b-col lg="6">
             <base-input
              type="text"
              label="Trust Secretary"
              placeholder=""
              v-model="user.trustsecretary"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              label="Type of Scheme"
              v-model="user.typeofscheme"
            >
            <select class="form-control">
                <option>Defined Contribution Retirement Benefit Scheme</option>
                <option>Defined Contribution Provident Fund</option>
                <option>Defined Contribution Pension Fund</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
         <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Town"
              placeholder=""
              v-model="user.town"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Email"
              placeholder=""
              v-model="user.email"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Website"
              placeholder=""
              v-model="user.website"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Postal Address"
              placeholder=""
              v-model="user.postaladdress"
            >
            </base-input>
          </b-col>
        </b-row>
         <b-row>
          <b-col lg="6">
            <base-input
              label="Status"
              v-model="user.status"
            >
            <select class="form-control">
                <option>Active</option>
                <option>Dormant</option>
                <option>Suspended</option>
                <option>Closed</option>
            </select>
            </base-input>
          </b-col>
         </b-row>
      </div>
      <br>
      <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button  @click="Schemes()" type="primary">Submit</base-button>
        
        </b-row>
        <hr class="my-4">

    </b-form>

      
    </b-tab>
<b-tab>
      <template v-slot:title >
         Scheme Periods
      </template>
      <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Add Period </h3>
            </b-col>
        </div>
      <b-form @submit.prevent="updateProfile">
      <div class="pl-lg-4">
        <b-row>
           <b-col lg="12">
            <base-input
              type="text"
              label="Period Name"
              placeholder=""
              v-model="user.periodname"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12">
              <base-input
              type="date"
              label="Start Date"
              placeholder="Start Dtae"
              id="example-date-input"
              v-model="user.startdate"
            >
            </base-input>
          </b-col>
          </b-row>
        <b-row>
            <b-col lg="12">
                 <base-input
              type="date"
              label="End Date"
              placeholder="End Date"
              id="example-date-input"
              v-model="user.enddate"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button type="primary">Submit</base-button>
        
        </b-row>
         <br>
         <b-row>
          <div class="d-flex mb-3" >
            <b-col cols="12">
                <h2 class="mb-0">Periods</h2>
            </b-col>
        </div>
         </b-row>
        <table class="table table-striped">
	    <thead class="thead-light">
	      <tr>
	      <th>Serial</th>
	      <th>Period ID</th>
			 <th>Period Name</th>
			 <th>Start Date</th>
			 <th>End Date</th>
			 <th>Locked</th>
			 <th>Action</th>
	      </tr>
	    </thead>
      <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>323</td>
	      		<td>Jan2021</td>
	      		<td>2021-01-01</td>
	      		<td>2021-12-31</td>
	      		<td>NO</td>
<td>
	  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item href="#">Lock</b-dropdown-item>
    <b-dropdown-item href="#">Edit</b-dropdown-item>
    <b-dropdown-item href="#">Sub Periods</b-dropdown-item>
    <b-dropdown-item href="#">Import Sub Periods</b-dropdown-item>
  </b-dropdown>
					</td>
	      	</tr>
      </tbody>
	  </table>
        
      </div>
      <br>
      
        <hr class="my-4">

    </b-form>
      
    </b-tab>
  <b-tab>
      <template v-slot:title >
         Transaction Purposes
      </template>
      <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Add Purpose </h3>
            </b-col>
        </div>
      <b-form @submit.prevent="updatePurpose">
      <div class="pl-lg-4">
        <b-row>
             <b-col lg="2">
            <p>Purpose:</p>
          </b-col>
           <b-col lg="10">
            <base-input
              type="text"
              placeholder=""
              v-model="user.purpose"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="2">
            <p>Transaction Type:</p>
          </b-col>
          <b-col lg="10">
              <base-input
              v-model="user.servicebasis"
            >
            <select class="form-control">
                <option>Deposit</option>
                <option>Withdrawal</option>
            </select>
            </base-input>
          </b-col>
          </b-row>
        <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button type="primary">Submit</base-button>
        
        </b-row>
         <br>
         <b-row>
          <div class="d-flex mb-3" >
            <b-col cols="12">
                <h2 class="mb-0">Purposes</h2>
            </b-col>
        </div>
         </b-row>
        <table class="table table-striped">
	    <thead class="thead-light">
	      <tr>
	      <th>Serial</th>
	      <th>Purpose</th>
			 <th>Transaction Type</th>
			 <th>Action</th>
	      </tr>
	    </thead>
      <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>Additional Funds</td>
	      		<td>Deposit</td>
<td>
	  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item href="#">Delete</b-dropdown-item>
  </b-dropdown>
					</td>
	      	</tr>
      </tbody>
	  </table>
        
      </div>
      <br>
      
        <hr class="my-4">

    </b-form>
  </b-tab>
  <b-tab>
      <template v-slot:title >
         Transaction Payment Mode
      </template>
      <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Add Payment Mode</h3>
            </b-col>
        </div>
      <b-form @submit.prevent="updatePurpose">
      <div class="pl-lg-4">
        <b-row>
             <b-col lg="2">
            <p>Payment Mode:</p>
          </b-col>
           <b-col lg="8">
            <base-input
              type="text"
              placeholder=""
              v-model="user.purpose"
            >
            </base-input>
          </b-col>
        
        <b-col class="d-flex justify-content-right mb-3"  >
        
            <base-button type="primary">Submit</base-button>
        
        </b-col>
        </b-row>
         <b-row>
          <div class="d-flex mb-3" >
            <b-col cols="12">
                <h2 class="mb-0">Payment Modes </h2>
            </b-col>
        </div>
         </b-row>

        <table class="table table-striped">
	    <thead class="thead-light">
	      <tr>
	      <th>Serial</th>
	      <th>Payment Mode</th>
			 <th>Action</th>
	      </tr>
	    </thead>
      <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>Bank Transfer</td>
<td>
	  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item href="#">Delete</b-dropdown-item>
  </b-dropdown>
					</td>
	      	</tr>
      </tbody>
	  </table>
        
      </div>
      <br>
      
        <hr class="my-4">

    </b-form>
  </b-tab>
    <b-tab>
      <template v-slot:title >
         Transaction Service Provider
      </template>
      <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Add Service Provider</h3>
            </b-col>
        </div>
      <b-form @submit.prevent="updateServiceProvider">
      <div class="pl-lg-4">
        <b-row>
             <b-col lg="2">
            <p>Service Provider:</p>
          </b-col>
           <b-col lg="8">
            <base-input
              type="text"
              placeholder=""
              v-model="user.serviceprovider"
            >
            </base-input>
          </b-col>
        
        <b-col class="d-flex justify-content-right mb-3"  >
        
            <base-button type="primary">Submit</base-button>
        
        </b-col>
        </b-row>
        <b-row>
          <div class="d-flex mb-3" >
            <b-col cols="12">
                <h2 class="mb-0">Service Providers</h2>
            </b-col>
        </div>
        </b-row>
        <table class="table table-striped">
	    <thead class="thead-light">
	      <tr>
	      <th>Serial</th>
	      <th>Service Provider</th>
			 <th>Action</th>
	      </tr>
	    </thead>
      <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>CFC Stanbic Bank</td>
<td>
	  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item href="#">Delete</b-dropdown-item>
  </b-dropdown>
					</td>
	      	</tr>
      </tbody>
	  </table>
        
      </div>
      <br>
      
        <hr class="my-4">

    </b-form>
  </b-tab>
  </b-tabs>
</div>
  </card>
</base-header>
</template>
<script>
import Schemes from '../Schemes/Schemes'
export default {
components:{Schemes},
  data() {
    return {
      user: {
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    },
    Schemes(){
      this.$router.push('/Schemes')
    }
  }
  
};
</script>
<style></style>
