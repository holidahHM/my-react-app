<template>

<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">

  <card>

    <div>
  <b-tabs pills>

    <b-tab active>
        <template v-slot:title >
            Scheme Details
        </template>
        <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0 " >Scheme Details </h3>
            </b-col>
        </div>
        <br>
      <table class="table table-stripped">
                            <tbody id="myTable">
                                <tr>
                                    <td><b>Scheme Registration Date</b></td>
                                    <td>20-11-2020</td>
                                    <td><b>Scheme Commencement Date</b></td>
                                    <td>20-12-2020</td>
                                </tr>
                                <tr>
                                    <td><b>KRA Registration Number</b></td>
                                    <td>12345</td>
                                    <td><b>Tax Exemption Cert Number</b></td>
                                    <td>67890</td>
                                </tr>
                               
                               <tr>
                                    <td><b>RBA PIN</b></td>
                                    <td>54321</td>
                                    <td><b></b></td>
                                    <td></td>
                                </tr>
                               
                               <tr>
                                    <td><b>Scheme Registration Date</b></td>
                                    <td>20-11-2020</td>
                                    <td><b>Scheme Commencement Date</b></td>
                                    <td>20-12-2020</td>
                                </tr>
                               
                               <tr>
                                    <td><b>Employer Funding Rate</b></td>
                                    <td>9.00%</td>
                                    <td><b>Employee Funding Rate</b></td>
                                    <td>9.00%</td>
                                </tr>
                                <tr>
                                    <td><b>Early Retirement Age</b></td>
                                    <td>50</td>
                                    <td><b>Normal Retirement Age</b></td>
                                    <td>50</td>
                                </tr>
                               
                               
                               
                                
                            </tbody>
                            </table>
    </b-tab>

    <b-tab>
      <template v-slot:title >
         Trustee Details
      </template>
      <br>
        <br>
        <table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
	      <th scope="col">Trustee Name</th>
	      <th scope="col">Designation</th >
			 <th scope="col">Date elected</th>
			 <th scope="col">Term End Date</th>
			 <th scope="col">Trustee Certification Status</th>
             <th scope="col">Email</th>

	      </tr>
	    </thead>
       <tbody id="myTable">
	      	      	<tr>
	      		<td>Levy Wasike</td>
	      		<td>Member Elected</td>
	      		<td>10-08-2020</td>
	      		<td>10-08-2020</td>
	      		<td>Certified</td>
                <td>lwasike100@hotmail.com</td>
	      	</tr>
			  
      </tbody>
	  </table>
    </b-tab>
    <b-tab>
      <template v-slot:title >
         Service Provider
      </template>
      <div style="overflow: scroll;"> 
        <b-row>
        <b-col xl="12">
            <br><br>
            <table class="table table-stripped">
                <thead class="thead-light">
                <tr>
                <th scope="col">Provider Name</th>
                <th scope="col">Provider Location</th >
                    <th scope="col">Provider Role</th>
                    <th scope="col">Effective Date</th>
                </tr>
                </thead>
            <tbody id="myTable">
                            <tr>
                        <td>Standard Chartered Bank Kenya Limited Custody Services</td>
                        <td>50 Westlands Road, Standard Chartered @ Chiromo, Nairobi</td>
                        <td>Custodian</td>
                        <td>10-08-2020</td>
                    </tr>
                    
            </tbody>
            </table>
        </b-col>
        </b-row>
        </div>
    </b-tab>

   
  </b-tabs>
</div>
  </card>
</base-header>
</template>
<script>
export default {
  data() {
    return {
      user: {
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style></style>
