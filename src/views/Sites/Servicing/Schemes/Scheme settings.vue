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
              aria-readonly=""
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
              label="Structure"
              v-model="user.StructureS"
            >
            <select class="form-control">
                <option>Administration Schemes</option>
                <option>OPPS Individual Internal</option>
                <option>OPPS Group Internal</option>
                <option>Umbrella Schemes</option>
                <option>Corporate Principal Schemes</option>
                <option>Corporate Trustees</option>
                <option>Income DrawDown Funds</option>
                <option>Trust Fund</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
              <base-input
              label="Type of Scheme"
              v-model="user.typeofscheme"
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
              label="Commencement Dtae"
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
              label="Exempt Contributions From Taxation"
              v-model="user.exemptcontributionsfromtaxation"
            >
            <select class="form-control">
                <option>No</option>
                <option>Yes</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
      </div>
      <br>
      <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button type="primary">Submit</base-button>
        
        </b-row>
        <hr class="my-4">

    </b-form>

      
    </b-tab>

    <b-tab>
      <template v-slot:title >
         Benefits Payment Portions
      </template>
      <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Add Portion </h3>
            </b-col>
        </div>
      <b-form @submit.prevent="updateProfile">
      <div class="pl-lg-4">
        <b-row>
          <b-col lg="12">
            <base-input
              label="Benefit"
              v-model="user.Benefit"
            >
            <select class="form-control">
                <option>Annuity[Purchase Annuity]</option>
                <option>Death[Get Fund lumpsum]</option>
                <option>Early Retirement</option>
                <option>Early Retirement[Get Fund Lumpsum]</option>
                <option>Early Retirement[Get Fund Lumpsum + Annuity]</option>
                <option>Early Retirement[Get Fund Lumpsum + Income DrawDown]</option>
                <option>Full Transfer[Transfer Benefiys to another scheme]</option>
                <option>Ill-health[Get Fund Lumpsum]</option>
                <option>Late Retirement</option>
                <option>Early Retirement[Get Fund Lumpsum]</option>
                <option>Early Retirement[Get Fund Lumpsum + Annuity]</option>
                <option>Early Retirement[Get Fund Lumpsum + Income DrawDown]</option>
                <option>Migration[Get Fund Lumpsum]</option>
                <option>Normal Retirement</option>
                <option>Normal Retirement[Get Fund Lumpsum]</option>
                <option>Normal Retirement[Get Fund Lumpsum + Annuity]t</option>
                <option>Normal Retirement[Get Fund Lumpsum + Income Drawdown]</option>
                <option>Partial Withdrawal[Get Fund Lumpsum]</option>
                <option>Withdrawal + Transfer[Get Fund Lumpsum and Transfer Benefits to another Scheme</option>
            </select>
            </base-input>
          </b-col>
          </b-row>
          <br>
          <b-row>
          <div class="d-flex justify-content-left mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Portions: <i>(Percentage)</i></h3>
            </b-col>
        </div>
          </b-row>
        <b-row>
            <b-col lg="3">
                <base-input
                type="text"
                label="Fund Lumpsum%"
                placeholder="0"
                v-model="user.fundlumpsum"
                >
                </base-input>
          </b-col>
          <b-col lg="3">
            <base-input
              type="text"
              label="Annuity Purchase%"
              placeholder="0"
              v-model="user.annuitypurchase"
            >
            </base-input>
          </b-col>
          <b-col lg="3">
            <base-input
              type="text"
              label="Income DrawDown%"
              placeholder="0"
              v-model="user.incomedrawdown"
            >
            </base-input>
          </b-col>
          <b-col lg="3">
            <base-input
              type="text"
              label="Transfer Values%"
              placeholder="0"
              v-model="user.transfervalues"
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
                <h2 class="mb-0">Benefits Payment Portions</h2>
            </b-col>
        </div>
         </b-row>
        <b-row class="d-flex justify-content-left mb-4"  >
        
            <base-button @click="Import_benefits()" type="secondary">Import Benefits Payment Portions</base-button>
        
        </b-row>

        <table class="table table-striped">
	    <thead class="thead-light">
	      <tr>
	      <th>Serial</th>
	      <th>Benefit</th>
			 <th>Fund Lumpsum%</th>
			 <th>Annuity Purchase%</th>
			 <th>Income DrawDown%</th>
			 <th>Transfer Value%</th>
			 <th>Total%</th>
			 <th>Action</th>
	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>1</td>
	      		<td>Annuity</td>
	      		<td>20</td>
	      		<td>30</td>
	      		<td>30</td>
	      		<td>20</td>
            <td>100</td>

<td>
	  <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
    <b-dropdown-item href="#">Open</b-dropdown-item>
    <b-dropdown-item href="#">Edit</b-dropdown-item>
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
          <div class="d-flex mb-3" >
            <b-col cols="6">
                <h2 class="mb-0">Periods</h2>
            </b-col>
        </div>

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
    <b-dropdown-item href="#">Unlock</b-dropdown-item>
    <b-dropdown-item href="#">Edit</b-dropdown-item>
    <b-dropdown-item href="#">Quarters</b-dropdown-item>
    <b-dropdown-item href="#">Sub Periods</b-dropdown-item>
    <b-dropdown-item href="#">Generate Sub Periods</b-dropdown-item>
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
import Import_benefits from '../Schemes/Import_benefits'
export default {
components:{Import_benefits},
  data() {
    return {
      user: [],
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    },
    Import_benefits(){
      this.$router.push('/Import_benefits')
    }
  }
  
};
</script>
<style></style>
