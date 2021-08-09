<template>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
     <div class="tab">Payments And Declaration:
  <div class="row" >
  
                                            <div class="col-sm-9">
                                                <h3 class="lg-title">Policy Payment Details</h3>
                                               
                                            <h4>Your policy summery</h4>


                                                <p class="mb20"><h4>Payment Procedure</h4> </p>
                                                <ul>
                                                <li>SELECT M-PESA from the Menu.</li>
                                                <li>Lipa na M-PESA > Buy Goods And services 'till no' = <strong>920829</strong></li>
                                                <li>Enter Amount > Enter amount  as shown in the field below "Amount To be Paid" </li>
                                                <li>Enter Your Mpesa pin</li>
                                                </ul>

                                            </div>  
                                            <p class="mb20">Fill out the payment details .</p>   
                                           
                                        </div>

                                        <div class="row">
                                            <div  class="col-md-12">
                                                <table class="table table-bordered table-hover" id="pay_logic">
                                                    <thead>
                                                       
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                        <td><strong>Amount To be Paid</strong></td>
                                        <td>
                                            <input type="text" readonly name="payment_amount[]" id="payment_due0" class="form-control" />
                                            </td></tr>
                                        <tr>
                                        <td><strong> Mode of Payment </strong></td>
                                        <td><input type="text" readonly name="mode_of_payment[]" value="MPESA"  id="mode_of_payment" class="form-control" /></td>
                                        </tr>
                                        
                                        <tr>
                                        <td><strong> Mpesa phone number(+254) *</strong></td>
                                        <td>  <input type="text" name="mpesa_phone_number" id="mpesa_phone_number" required class="form-control" /></td>
                                        </tr>

                                        <tr>
                                        <td><strong> Mpesa Code *</strong></td>
                                        <td>  <input type="text" name="payment_ref[]" id="payment_ref" required class="form-control" /></td>
                                        </tr>
                                        
                                        <tr>
                                                        <tr id='pay1'></tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                            <button style="margin-bottom: 10%; float: right;" type="submit" id="validate_transaction"  name="validate_transaction" class="btn btn-success">Confirm Payment</button>
                                        </div>
 
                                        
<button id="save_member_info" style="float: right; " name="register_member" variant="info"   type="submit" >Submit</button>
              
  </div>
     <b-row>
    <b-col xl="4" md="6">
      <b-button-group>
      <b-button @click="Application_Form()" variant="info">Previous</b-button>
      
    </b-button-group>
    </b-col>
    <b-col xl="4" md="1">
      <b-button-group>
      <b-button @click="Policy_Document()" variant="success">Next</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
    </card>
    </base-header>
</template>
<script>
import Policy_Document from '../Easy Cover/Policy_Document'
export default {
    comments:{
        Policy_Document
    },
    methods: {
        Policy_Document(){
            this.$router.push('/policy_document')
        }
    },
}
</script>