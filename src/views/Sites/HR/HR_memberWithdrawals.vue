<template>

<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">

  <card>

    <div>
  <b-tabs pills>

    <b-tab active>
        <template v-slot:title >
            Approved withdrawals
        </template>
        <br>
        <b-row>
            <b-col xl="12" >
                <card>
                    <!-- <b-row class="float-right pb-4">
                    
                        <b-col xl="1" >
                        <router-link to="/benefit_claim">
                        <b-button variant="success">Claim benefits</b-button>
                        <br>
                        </router-link>
                        </b-col>
                    </b-row> -->
                    <b-row>
                    <b-col lg="12">
                        <p class="mb-0"><b>Type something in the input field to search the table</b></p>
                        </b-col>
                        </b-row>
                        <br>
                        <b-row>
                            <b-col lg="6">
                            <b-form-input type="text"
                            label=""
                            placeholder="Search..." class="text-left"></b-form-input>
                            </b-col>
                        </b-row>
                        <br>

                        <div style="overflow: scroll;"> 
                            <b-row>
                            <b-col xl="6">
                        <table class="table table-stripped">
                                <thead class="thead-light">
                                <tr>
                                <th scope="col">Check Box</th>
                                <th scope="col">Member.No</th>
                                <th scope="col">Member Name</th >
                                    <th scope="col">Employer</th>
                                    <th scope="col">Reason For Exit</th>
                                    <th scope="col">Documents Attached</th>
                            <th scope="col">Action</th>

                                </tr>
                                </thead>
                            <tbody id="myTable">
                                <tr>
                                            <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                        <td>1</td>
                                        <td>John Snow</td>
                                        <td>28486</td>
                                        <td>18-05-2020</td>
                                        <td>18-05-2020</td>
                                        <td>Pending</td>

                                    <td>
                                    <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                                        <b-dropdown-item href="#">View worksheet</b-dropdown-item>
                                        <b-dropdown-item href="#">Cancel withdrawal</b-dropdown-item>
                                    </b-dropdown>
                                            </td>
                                </tr>
                            </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </div>
                    </card>
                </b-col>
            </b-row>
    </b-tab>

    <b-tab>
      <template v-slot:title >
         Pending Trustees Approval <b-badge variant="primary" class="badge-circle badge-md  border-white float-right">54</b-badge>
      </template>
      <br>
        <br>
        <b-row>
            <b-col xl="12" >
                <card>
                    <!-- <b-row class="float-right pb-4">
                    
                        <b-col xl="1" >
                        <router-link to="/benefit_claim">
                        <b-button variant="success">Claim benefits</b-button>
                        <br>
                        </router-link>
                        </b-col>
                    </b-row> -->
                    <b-row>
                    <b-col lg="12">
                        <p class="mb-0"><b>Type something in the input field to search the table</b></p>
                        </b-col>
                        </b-row>
                        <br>
                        <b-row>
                            <b-col lg="6">
                            <b-form-input type="text"
                            label=""
                            placeholder="Search..." class="text-left"></b-form-input>
                            </b-col>
                        </b-row>
                        <br>

                        <div style="overflow: scroll;"> 
                            <b-row>
                            <b-col xl="6">
                        <table class="table table-stripped">
                                <thead class="thead-light">
                                <tr>
                                <th scope="col">Check Box</th>
                                <th scope="col">Member.No</th>
                                <th scope="col">Member Name</th >
                                    <th scope="col">Employer</th>
                                    <th scope="col">Reason For Exit</th>
                                    <th scope="col">Documents Attached</th>
                            <th scope="col">Action</th>

                                </tr>
                                </thead>
                            <tbody id="myTable">
                                <tr>
                                            <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                        <td>1</td>
                                        <td>John Snow</td>
                                        <td>28486</td>
                                        <td>18-05-2020</td>
                                        <td>18-05-2020</td>
                                        <td>Pending</td>

                                    <td>
                                    <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                                        <b-dropdown-item href="#">View worksheet</b-dropdown-item>
                                        <b-dropdown-item href="#">Cancel withdrawal</b-dropdown-item>
                                    </b-dropdown>
                                            </td>
                                </tr>
                            </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </div>
                    </card>
                </b-col>
            </b-row>
    </b-tab>
    <b-tab>
      <template v-slot:title >
         Pending Administrator Approval <b-badge variant="primary" class="badge-circle badge-md  border-white float-right">54</b-badge>
      </template>
        <b-row>
            <b-col xl="12" >
                <card>
                    <!-- <b-row class="float-right pb-4">
                    
                        <b-col xl="1" >
                        <router-link to="/benefit_claim">
                        <b-button variant="success">Claim benefits</b-button>
                        <br>
                        </router-link>
                        </b-col>
                    </b-row> -->
                    <b-row>
                    <b-col lg="12">
                        <p class="mb-0"><b>Type something in the input field to search the table</b></p>
                        </b-col>
                        </b-row>
                        <br>
                        <b-row>
                            <b-col lg="6">
                            <b-form-input type="text"
                            label=""
                            placeholder="Search..." class="text-left"></b-form-input>
                            </b-col>
                        </b-row>
                        <br>

                        <div style="overflow: scroll;"> 
                            <b-row>
                            <b-col xl="6">
                        <table class="table table-stripped">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col">Check Box</th>
                                        <th scope="col">Member.No</th>
                                        <th scope="col">Member Name</th >
                                        <th scope="col">Computation worksheet</th>

                                    </tr>
                                </thead>
                                <tbody id="myTable">
                                    <tr>
                                        <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                        <td>1</td>
                                        <td>John Snow</td>
                                        <td><base-button variant="primary">View Discharge Form </base-button></td>
                                    </tr>
                            </tbody>
                            </table>
                            </b-col>
                            </b-row>
                        </div>
                    </card>
                </b-col>
            </b-row>
        
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
