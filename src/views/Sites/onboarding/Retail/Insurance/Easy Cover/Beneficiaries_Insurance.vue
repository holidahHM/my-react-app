<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
    <div class="tab">:

												<div class="row" style="margin-top: 30px">
                                        <div class="col-sm-12">
                                        <h3>   <label class="control-label">Beneficiaries/Next of Kin</label><br></h3>
                                        </div>
                                         <div class="col-sm-9">
                                              <p class="mb20">Fill out the table below to register the member's beneficiaries/next of kin. Use the "+" and "-" button to add and remove beneficiaries respectively.</p>
                                            </div>     
                                            <div class="col-sm-3"> 
                                                <a id="add_nok" class="btn btn-info pull-right"><i class="fa fa-plus"></i></a><a id='delete_nok' class="pull-right btn btn-danger mr20 mb10"><i class="fa fa-minus"></i></a>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-md-12 ">
                                                <table class="table table-bordered table-hover" id="ben_logic">
                                                    <thead>
                                                        <tr >
                                                            <th class="text-center" style="width: 250px">
                                                                Beneficiary Name
                                                            </th>
                                                            <th class="text-center" style="width: 200px">
                                                                Relationship to Member
                                                            </th>
                                                            <th class="text-center" style="width: 100px">
                                                                Telephone Number
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr id='ben0'>
                                                            <td>
                                                            <input type="text" name='beneficiary_name[]' placeholder='Enter full name' class="form-control"/>
                                                            </td>
                                                            <td>
                                                            <input type="text" name='beneficiary_relationship[]'  class="form-control"/>
                                                            </td>
                                                            <td>
                                                            <input type="text" name='beneficiary_tel_no[]'  class="form-control"/>
                                                            </td>
                                                        
                                                        </tr>
                                                        <tr id='ben1'></tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
  </div>
     <b-row>
    <b-col xl="4" md="6">
      <b-button-group>
      <b-button @click="Eazy_Cover_Joining()" variant="info">Previous</b-button>
      
    </b-button-group>
    </b-col>
    <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Payment_insurance()" variant="success">Next</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </card>
    </base-header>
</template>
<script>
import Eazy_Cover_Joining from '../Easy Cover/Eazy_Cover_Joining'
import Payment_insurance from '../Easy Cover/Payment_insurance'
export default {
    comments:{
        Payment_insurance,
        Eazy_Cover_Joining
    },
    methods: {
       Payment_insurance(){
            this.$router.push('/payment_insurance')
        },
        Eazy_Cover_Joining(){
            this.$router.push('/eazy_cover_joining')
        }
    },
}
</script>