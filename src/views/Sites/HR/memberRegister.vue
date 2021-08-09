<template>
  <div>
        <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center bg-gradient-success ">
            <b-col xl="12">
            <b-breadcrumb class="breadcrumb-links bg-gradient-success text-white pt-10" style="font-size:15px;">
                <b-breadcrumb-item href="#home" class="text-white">Home</b-breadcrumb-item>
                <b-breadcrumb-item href="#library" class="text-white" active>Member Register</b-breadcrumb-item>
            </b-breadcrumb>
            </b-col>
        
        </div>
        <div class=" pb-6 pb-8 pt-5 pt-md-1 bg-gradient-success">
            <b-container fluid class="mt--6">
        
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
                            <th scope="col">Member Number</th>
                            <th scope="col">Member Name</th >
                            <th scope="col">Gender</th>
                            <th scope="col">Payroll Number</th>
                            <th scope="col">KRA PIN</th>
                            <th scope="col">ID Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Member Status</th>

                        </tr>
                        </thead>
                    <tbody id="myTable">
                        <tr>
                                <td>105</td>
                                <td>John Snow</td>
                                <td>Male</td>
                                <td>1805-3002</td>
                                <td>A1294NGF</td>
                                <td>1234567</td>
                                <td>snow@email.com</td>
                                <td>Pending</td>
                        </tr>
                    </tbody>
                    </table>
                    </b-col>
                    </b-row>
                </div>
                        </card>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>