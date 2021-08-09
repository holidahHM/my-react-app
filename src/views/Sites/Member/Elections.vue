<template>
  <div>
        <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center bg-gradient-success ">
            <b-col xl="12">
            <b-breadcrumb class="breadcrumb-links bg-gradient-success text-white pt-10" style="font-size:15px;">
                <b-breadcrumb-item href="#home" class="text-white">Home</b-breadcrumb-item>
                <b-breadcrumb-item href="#library" class="text-white" active>Elections</b-breadcrumb-item>
            </b-breadcrumb>
            </b-col>
        
        </div>
        <div class=" pb-6 pb-8 pt-5 pt-md-1 bg-gradient-success">
            <b-container fluid class="mt--6">
        
                <b-row>
                    <b-col xl="12" >
                        <card>
                        <b-row class="float-right pb-4">
                    
                    </b-row>
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
                        <th scope="col">Election Title</th>
                        <th scope="col">Election Type</th >
                        <th scope="col">Vacancies</th>
                        <th scope="col">Election Period Start</th>
                        <th scope="col">Election End Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>

                        </tr>
                        </thead>
                    <tbody id="myTable">
                        <tr>
                                    <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                <td>Test Election 2020</td>
                                <td>Member Elected Trustee Election</td>
                                <td>1</td>
                                <td>2020-08-31 08:00:00</td>
                                <td>2020-09-30 17:00:00</td>
                                <td>Closed</td>

                            <td>
                                <router-link to="/member_elections_details">
                                <b-button variant="info">View</b-button>
                                </router-link>
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