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
                         <b-row class="float-right pb-4">
                    
                        <b-col lg="12" >
                        <router-link to="/submit_contributions">
                        <b-button variant="success">Submit Contributions Schedule</b-button>
                        <br>
                        </router-link>
                        </b-col>
                    </b-row> 
                        <b-row>
                        <b-col lg="8">
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
                            <th scope="col">HR Batch ID</th>
                            <th scope="col">OPAS Batch ID</th >
                            <th scope="col">Description</th>
                            <th scope="col">Created By</th>
                            <th scope="col">Checked by Pension Administrator</th>
                            <th scope="col">Action</th>

                        </tr>
                        </thead>
                    <tbody id="myTable">
                        <tr>
                                <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                <td>22121</td>
                                <td>131312</td>
                                <td>Transfers in</td>
                                <td>SN-0788</td>
                                <td>Yes</td>
                                <td>
                                    <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                                        <b-dropdown-item href="#">View New Entries</b-dropdown-item>
                                        <b-dropdown-item href="#">View Contributions Entries</b-dropdown-item>
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
            </b-container>
        </div>
    </div>
</template>