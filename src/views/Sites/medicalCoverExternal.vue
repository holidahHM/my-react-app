<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-primary">
    <div align-v="center" slot="header">
      <b-col cols="12" class="d-flex justify-content-center mb-3">
        <img src="img/brand/Blue-Octagon_Logo.png" style="width: 200px; height: 70px" />
      </b-col>
    </div>
    <br />
    <b-row class="justify-content-center">
      <b-col class="col-md-7">
        <div class="d-flex justify-content-center alert alert-info">
          <h3>Hello! Let us get to know more about you.</h3>
        </div>
      </b-col></b-row
    >
    <br />
    <form-wizard @onComplete="completeForm">
      <tab-content title="Personal Details" :selected="true">
        <div class="tab">
          <div align-v="center" slot="header">
            <b-col cols="12" class="d-flex justify-content-center mb-3">
              <strong>Personal Details(Principal Member)</strong>
            </b-col>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label class="control-label">Full Names *</label>
                <input
                  type="text"
                  name="member_name"
                  required
                  id="m_name"
                  class="form-control"
                  v-model="payloadData.name"
                />
              </div>
            </div>

            <input type="hidden" name="member_id" class="form-control" />
            <div class="col-sm-4">
              <div class="form-group">
                <label class="control-label">Email * </label>
                <input
                  type="email"
                  name="member_email"
                  id="m_email"
                  class="form-control"
                  required
                  v-model="payloadData.email"
                />
              </div>
            </div>

            <!-- <div class="col-sm-3">
                        
                                <div class="form-group">
                                    <label class="control-label">Place of Work/Business</label>
                                
                                    <input type="text"  name="member_workplace"  id="m_payroll_number"   class="form-control"  />
                                </div>
                            </div> -->
            <div class="col-sm-4">
              <div class="form-group">
                <label class="control-label">Phone Number *</label>
                <input
                  type="text"
                  name="member_tel_no"
                  id="phone_number"
                  class="form-control"
                  required
                  v-model="payloadData.phone"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <label class="control-label">ID Number *</label>
                <input
                  type="text"
                  name="member_id_no"
                  id="m_id_number"
                  class="form-control"
                  required
                  v-model="payloadData.IDNumber"
                />
              </div>
            </div>

            <div class="col-sm-6">
              <div class="form-group">
                <label class="control-label">Date of Birth *</label>
                <input
                  type="date"
                  name="member_dob"
                  id="from-datepicker"
                  placeholder="YYYY-MM-DD"
                  class="form-control inputdate"
                  required
                  v-model="payloadData.dob"
                />
              </div>
            </div>

            <!-- <div class="col-sm-3">
                                <div class="form-group">
                                    <label class="control-label">KRA PIN</label>
                                    <input type="text" name="member_kra_pin" id="m_pin" class="form-control"  >
                                 </div>
                                
                            </div>-->
          </div>
        </div>
      </tab-content>
      <tab-content title="Dependants Information">
        <div class="tab">
          <div class="row" style="margin-top: 30px">
            <div class="col-sm-12">
              <h3><label class="control-label">Dependants</label><br /></h3>
            </div>
            <div class="col-sm-9">
              <p class="mb20">
                Fill out the table below to register the dependants. Use the "+" and "-"
                button to add and remove beneficiaries respectively.
              </p>
            </div>
            <div class="col-sm-3">
              <a class="btn btn-info float-right" v-on:click="addRow1()"
                ><i class="fa fa-plus"></i
              ></a>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th style="width: 50px"></th>
                    <th class="text-center" style="width: 250px">Dendants Name</th>
                    <th class="text-center" style="width: 200px">
                      Relationship to Member
                    </th>
                    <th class="text-center" style="width: 100px">Telephone Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(ben, index) in payloadData.dependants">
                    <td>
                      <a class="btn btn-danger" v-on:click="deleteRow1(index)"
                        ><i class="fa fa-minus"></i
                      ></a>
                    </td>
                    <td>
                      <input type="text" class="form-control" v-model="ben.name" />
                    </td>
                    <td>
                      <base-input>
                        <select v-model="ben.relation" class="form-control">
                          <option>Spouse</option>
                          <option>Son</option>
                          <option>Daughter</option>
                        </select>
                      </base-input>
                    </td>
                    <td>
                      <input type="text" class="form-control" v-model="ben.contact" />
                    </td>
                  </tr>
                  <tr id="ben1"></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content title="Your Quote ">
        <div class="tab">
          <div class="row" style="margin-top: 30px">
            <div class="col-sm-12">
              <h3><label class="control-label"></label><br /></h3>
            </div>
          </div>
          <b-row
            ><b-col class="col-md-12">
              <div class="col-xl-12 alert alert-info">
                <h4>Select your preffered Plan</h4>
              </div>
            </b-col></b-row
          >
          <b-row>
            <b-col class="col-md-12">
              <div class="table-responsive">
                <table class="table table-bordered mb30">
                  <thead></thead>

                  <tbody v-for="i in serviceProvider">
                    <tr>
                      <td>
                        <strong>{{ i.name }}</strong>
                      </td>
                      <td>kshs {{ i.amount }} per month</td>
                      <td>
                        <b-form-radio
                          v-model="payloadData.selectedServiceProvider"
                          :aria-describedby="ariaDescribedby"
                          :value="i"
                        >
                        </b-form-radio>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-col>
          </b-row>
        </div>
      </tab-content>
      <tab-content title="Best Plan for your quote">
        <div class="tab">
          <b-row
            ><b-col class="col-md-12">
              <div class="col-xl-12 alert alert-info">
                <h4>Here is the carefully crafted package for you</h4>
              </div>
            </b-col></b-row
          >
          <div class="row">
            <div class="col-sm-6">
              <div class="panel panel-">
                <div class="panel-heading text-center">
                  <h3 class="panel-title">Your Quote</h3>
                </div>
                <div
                  class="row"
                  style="border-bottom: 1px solid #eee; height: 10px"
                ></div>
                <div class="panel-body">
                  <p style="color: red">
                    <i class="fa fa-check" style="color: red"></i> &nbsp;&nbsp;&nbsp;
                    Hospital Limit- Ksh 400,000
                  </p>
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Pre-Existing Limit - Ksh 200,000
                  </p>
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Out-patient Limit - Ksh 50,000
                  </p>
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Maternity Limit
                  </p>
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Waiting Period - 3 Months
                  </p>
                </div>
                <!-- panel-body -->
              </div>
              <!-- panel -->
            </div>
            <div class="col-sm-4">
              <div class="panel panel-primary">
                <div class="panel-heading text-center">
                  <h3 style="color: red"><b>Policy Plan</b></h3>
                </div>
                <div
                  class="row"
                  style="border-bottom: 1px solid #eee; height: 10px"
                ></div>
                <div class="panel-body">
                  <br /><br />
                  <h2 style="color: red">
                    <i class="fa fa-check" style="color: red"></i> Ksh
                    {{ annual }} Annually
                  </h2>
                  <br />
                  <span class="badge badge-pill badge-danger" v-if="verifyCoupon"
                    >Invalid coupon code!</span
                  >
                  <base-input
                    type="text"
                    label="Have Coupon Code?"
                    placeholder=""
                    aria-readonly=""
                    v-model="payloadData.couponcode"
                  >
                  </base-input>
                  <base-button type="primary" v-on:click="verifyCopon"
                    >Apply Coupon</base-button
                  >
                </div>
                <!-- panel-body -->
              </div>
              <!-- panel -->
            </div>
          </div>
        </div>
      </tab-content>
      <tab-content title="Payment">
        <div class="tab">
          <b-row
            ><b-col class="col-md-12">
              <div class="col-xl-12 alert alert-success">
                <h4>Policy Paymet Details</h4>
              </div>
            </b-col></b-row
          ><br />
          <b-row>
            <div class="col-sm-6">
              <div class="panel panel-">
                <div class="panel-heading text-center">
                  <h3 class="panel-title">Your Quote Summary</h3>
                </div>
                <div
                  class="row"
                  style="border-bottom: 1px solid #eee; height: 10px"
                ></div>
                <div class="panel-body">
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Policy Plan Class:
                  </p>
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Family Size:
                  </p>
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Gross Premium:
                  </p>
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Discount:
                  </p>
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Discounted Premium:
                  </p>
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Insurance Training Levy:
                  </p>
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Stamp Duty:
                  </p>
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Premium Payable:
                  </p>
                </div>
                <!-- panel-body -->
              </div>
              <!-- panel -->
            </div>
            <div class="col-sm-6">
              <div class="panel panel-">
                <div class="panel-heading text-center">
                  <h3 class="panel-title" style="color: red">Payment Procedure</h3>
                </div>
                <div
                  class="row"
                  style="border-bottom: 1px solid #eee; height: 10px"
                ></div>
                <div class="panel-body">
                  <p>
                    <i class="fa fa-check" style="color: green"></i>
                    &nbsp;&nbsp;&nbsp;Lipa na M-PESA > Buy Goods And services 'till no' =
                    920829
                  </p>
                  <p>
                    <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                    Cheque:
                  </p>
                  <h2 style="color: green">
                    <i class="fa fa-check" style="color: green"></i> Ksh
                    {{ annual }} Annually
                  </h2>
                </div>
                <!-- panel-body -->
              </div>
              <!-- panel -->
            </div>
          </b-row>
        </div>

        <div class="row">
          <div class="col-md-12">
            <table class="table table-bordered table-hover" id="pay_logic">
              <thead></thead>
              <tbody>
                <tr>
                  <td><strong>Amount To be Paid</strong></td>
                  <td>
                    <input
                      type="text"
                      readonly
                      name="payment_amount[]"
                      id="payment_due0"
                      class="form-control"
                      v-model="annual"
                    />
                  </td>
                </tr>
                <tr>
                  <td><strong> Mode of Payment </strong></td>
                  <td>
                    <input
                      type="text"
                      readonly
                      id="mode_of_payment"
                      class="form-control"
                      v-model="payloadData.mode_of_payment"
                    />
                  </td>
                </tr>

                <tr>
                  <td><strong> Mpesa phone number(+254) *</strong></td>
                  <td>
                    <input
                      type="text"
                      name="mpesa_phone_number"
                      id="mpesa_phone_number"
                      required
                      class="form-control"
                      v-model="payloadData.mpesa_phone"
                    />
                  </td>
                </tr>

                <tr>
                  <td><strong> Mpesa Code *</strong></td>
                  <td>
                    <input
                      type="text"
                      name="payment_ref[]"
                      id="payment_ref"
                      required
                      class="form-control"
                      v-model="payloadData.mpesa_code"
                    />
                  </td>
                </tr>

                <tr></tr>
                <tr id="pay1"></tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <b-row class="d-flex justify-content-center mb-3">
          <base-button v-b-modal.modal-1 type="success">Confirm Payment</base-button>
          <b-modal id="modal-1" title="Payment Details" size="lg" hide-footer>
            <b-col xl="12" md="10">
              <stats-card title="" type="gradient-green" sub-title="" class="mb-4">
                <template slot="footer">
                  <div class="mt-3">
                    <div class="row">
                      <div class="col-md-6">
                        <label for="input-default">Enter Phone No</label>
                        <b-form-input
                          type="text"
                          placeholder=""
                          v-model="payloadData.mpesa_phone"
                        ></b-form-input>
                      </div>
                      <div class="col-md-6">
                        <label for="input-default">Ref No(Cheque no/Mpesa Code)</label>
                        <b-form-input
                          type="text"
                          placeholder=""
                          v-model="payloadData.mpesa_code"
                        ></b-form-input>
                      </div>
                    </div></div></template
              ></stats-card>
              <b-row>
                <div class="col-md-4">
                  <base-button
                    class="mt-3"
                    block
                    type="success"
                    @click="$bvModal.hide('modal-1')"
                    >Save</base-button
                  >
                </div> </b-row
              ><br />
            </b-col>
          </b-modal>
          <base-button type="info">
            <router-link
              :to="{
                name: 'register',
                params: {
                  details: {
                    p_name: p_name,
                    p_email: p_email,
                  },
                },
              }"
              >Save and Pay Later</router-link
            ></base-button
          >
        </b-row>
        <br />
        <b-row>
          <b-col lg="12">
            <div v-loading="true" id="loading" v-if="checking">
              <p>Submitting request, please wait...</p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <div class="justify-content-lg-center">
            <span class="badge badge-pill badge-success" v-if="success">
              Request submitted successfully! <br />kindly be patiant as we process your
              policy certificate.<br />
              In the mean time, kindly check your email for your login credentials
              generated by our system.
            </span>
          </div>
        </b-row>
        <br />
      </tab-content>
    </form-wizard>
  </base-header>
</template>
<script>
import { FormWizard, TabContent } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import httpClient from "../../api/httpClient";
import insuranceErrors from "../../service/insuranceErrors";

export default {
  name: "BasicStepperForm",
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      checking: false,
      success: false,
      payloadArray: [],
      payloadData: {
        selectedProduct: [],
        name: "",
        email: "",
        phone: "",
        IDNumber: "",
        dob: Date,
        mpesa_code: "",
        mpesa_phone: "",
        mode_of_payment: "MPESA",
        couponcode: "",
        selectedServiceProvider: [],
        dependants: [
          {
            name: "",
            relation: "",
            contact: "",
          },
        ],
      },
      verifyCoupon: false,
      serviceProvider: [
        { name: "Kenya orient", amount: "999" },
        { name: "Pioneer Insurance", amount: "4600" },
        { name: "CIC", amount: "5600" },
      ],
    };
  },
  created() {
    this.payloadData.selectedProduct.push(this.$route.params.code);
  },
  computed: {
    annual() {
      return insuranceErrors.calcMedCoverQuote(
        this.payloadData.selectedServiceProvider.amount
      );
    },
  },
  methods: {
    async completeForm() {
      //this.payloadArray.push(this.payloadData);
      //console.log("medical cover payload", this.payloadArray);

      var stringjson = JSON.stringify(this.payloadData);
      let response = "";
      this.checking = true;
      try {
        response = await httpClient.post("/users", stringjson);
        console.log("easy cover", response);
        console.log("payload data", this.payloadData);
        this.checking = false;
      } catch (e) {
        this.checking = false;
        this.success = false;
        console.log("Easy cover error", e);
      }

      this.checking = false;
      this.success = false;
      if (response.status === 200) {
        this.success = true;
      }
    },
    verifyCopon() {
      this.verifyCoupon = true;
    },
    select() {
      for (let i in this.serviceProvider) {
        this.payloadData.selectedServiceProvider.push(this.serviceProvider[i]);
      }
    },

    addRow1: function () {
      this.payloadData.dependants.push({
        name: "",
        relation: "",
        contact: "",
      });
    },
    deleteRow1(index) {
      this.payloadData.dependants.splice(index, 1);
    },
  },
};
</script>
