<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
<b-row>
  <b-col class="col-md-2">
      <b-button variant="info"><router-link to='/Insurance_Servicing'>« Go Back</router-link></b-button>
    </b-col>
    <b-col class="col-md-10">
     <div class="col-xl-12 alert alert-success">
  <h5>Shows Member and Policy details</h5>
</div>
    </b-col></b-row>
<br>
  <div>
    <b-row><b-col class="col-md-7">
     <div class="col-xl-7 alert alert-info">
  <h5>Test Member</h5>
</div>
    </b-col></b-row>
                              <b-row>  
                                  <b-col class="col-md-12"> 
                                    
                                    <div class="table-responsive">
                                        <table class="table table-bordered mb30">
                                            <thead>
                                                
                                            </thead>
                                                                                    
                                       
                                        <tbody><tr>
                                        <td><strong>Policy Number </strong></td>
                                       <td><strong>Policy Name </strong></td>
                                       <td><strong>Action</strong></td>
                                        </tr>
                                         <tr>
                                        <td>1096_20180704_1</td>
                                        <td>Motor Vehicle COMP</td>
                                         <td><b-button variant="info"><router-link to="/Ins_Policydetails">View</router-link></b-button></td>
                                        </tr>
                                        <tr>
                                        <td>8796_201657434_9</td>
                                        <td>Last Expense Cover</td>
                                         <td><b-button variant="info"><router-link to="/">View</router-link></b-button></td>
                                        </tr>
                                        <tr>
                                        <td>3456_20180704_6</td>
                                        <td>Domestic Package</td>
                                        <td><b-button variant="info"><router-link to="/">View</router-link></b-button></td>
                                        </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                  </b-col>
                              </b-row>
  </div>
  </card>
</base-header>
</template>
