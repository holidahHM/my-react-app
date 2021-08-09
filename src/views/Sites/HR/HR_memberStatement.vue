<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
    
    <div align-v="center" slot="header" >
      <b-col cols="12">
            <b-alert show variant="success">
                Select period, enter the member number and click "Generate Statement" to get the member statement in pdf format.
            </b-alert>
      </b-col>
    </div>


    <div class="pl-lg-4">
        <b-row>
          <b-col lg="4">
            <base-input
              label="Select Period"
            >
            <select class="form-control">
                <option>JAN-DEC 2020</option>
                <option>JAN-DEC 2019</option>
                <option>JAN-DEC 2018</option>
                <option>JAN-DEC 2017</option>
            </select>
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              label=" Member Number"
              placeholder="Enter member no"
            >
            </base-input>
          </b-col>
          <b-col lg="4" class="pb-8 pt-4 pt-md-4">
              <router-link to="">
            <base-button type="info">Generate Statement</base-button>
            </router-link>
          </b-col>
        </b-row>
    </div>


    <b-row>
        <div align-v="center" slot="header" >
            <b-col cols="12">
                <b-alert show variant="success">
                    Below is the scheme member register. Use it to look up the member number for the relevant scheme member. Use the search box below to filter the records
                </b-alert>
            </b-col>
        </div>
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
                <b-col lg="6">
                <b-form-input type="text"
                label=""
                placeholder="Search..." class="text-left"></b-form-input>
                </b-col>
            </b-row>
            <br>

        <b-row>
            <b-col xl="6">
                <table class="table table-stripped">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Member Number</th>
                            <th scope="col">Member Name</th >
                            <th scope="col">Gender</th>
                            <th scope="col">Member Status</th>

                        </tr>
                    </thead>
                    <tbody id="myTable">
                        <tr>
                            <td>1805-3002</td>
                            <td>105</td>
                            <td>John Snow</td>
                            <td>Male</td>
                            <td>Pending</td>
                        </tr>
                    </tbody>
                </table>
            </b-col>
        </b-row>
            </card>
        </b-col>
    </b-row>
  </card>
</base-header>
</template>
