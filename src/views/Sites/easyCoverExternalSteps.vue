<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <b-col xl="12">
      <div style="overflow: scroll">
        <form-wizard @onComplete="payloadData">
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
                      v-model="payload.name"
                    />
                  </div>
                </div>

                <input type="hidden" name="member_id" class="form-control" />
                <div class="col-sm-4">
                  <div class="form-group">
                    <label class="control-label">Email * </label>
                    <input
                      type="text"
                      name="member_email"
                      id="m_email"
                      class="form-control"
                      required
                      v-model="payload.email"
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
                      v-model="payload.phone"
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
                      v-model="payload.document_number"
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
                      v-model="payload.dob"
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
          <tab-content title="Dependants">
            <div class="tab">
              <div class="row">
                <h3>
                  <label class="control-label">Who Do You want to Cover</label><br />
                </h3>

                <div class="col-sm-9">
                  <h5 class="lg-title">Dependants</h5>
                  <p class="mb20">
                    Fill out the table below to register your dependants. Use the "+" and
                    "-" button to add and remove dependants respectively.
                  </p>
                </div>
                <div class="col-sm-3">
                  <a id="add_row" class="btn btn-info float-right" v-on:click="addRow()"
                    ><i class="fa fa-plus"></i
                  ></a>
                </div>
              </div>
              <div style="overflow: scroll">
                <table class="table table-bordered table-hover" id="tab_logic">
                  <thead>
                    <tr>
                      <th style="width: 50px"></th>
                      <th class="text-center" style="width: 200px">Relationship</th>
                      <th class="text-center" style="width: 200px">Dependant Name *</th>
                      <th class="text-center" style="width: 100px">Date of Birth *</th>
                      <th class="text-center" style="width: 100px">
                        Identifying Document
                      </th>
                      <th class="text-center" style="width: 50px">ID Document Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, index) in payload.dependants">
                      <td>
                        <a
                          id="delete_row"
                          class="pull-right btn btn-danger"
                          v-on:click="deleteRow(index)"
                          ><i class="fa fa-minus"></i
                        ></a>
                      </td>
                      <td>
                        <base-input>
                          <select v-model="user.relation" class="form-control">
                            <option>Mother</option>
                            <option>Spouse</option>
                            <option>Child</option>
                          </select>
                        </base-input>
                      </td>
                      <td>
                        <input class="form-control" type="text" v-model="user.Name" />
                      </td>
                      <td>
                        <input class="form-control" type="date" v-model="user.dob" />
                      </td>
                      <td>
                        <base-input>
                          <select v-model="user.document" class="form-control">
                            <option>National ID</option>
                            <option>Passport</option>
                            <option>Birth Certificate</option>
                          </select>
                        </base-input>
                      </td>
                      <td>
                        <input
                          class="form-control"
                          type="number"
                          v-model="user.document_number"
                        />
                      </td>
                    </tr>

                    <tr id="addr1"></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </tab-content>
          <tab-content title="Beneficiaries">
            <div class="tab">
              <div class="row" style="margin-top: 30px">
                <div class="col-sm-12">
                  <h3>
                    <label class="control-label">Beneficiaries/Next of Kin</label><br />
                  </h3>
                </div>
                <div class="col-sm-9">
                  <p class="mb20">
                    Fill out the table below to register the member's beneficiaries/next
                    of kin. Use the "+" and "-" button to add and remove beneficiaries
                    respectively.
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
                        <th class="text-center" style="width: 250px">Beneficiary Name</th>
                        <th class="text-center" style="width: 200px">
                          Relationship to Member
                        </th>
                        <th class="text-center" style="width: 100px">Telephone Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(ben, index) in payload.beneficiaries">
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
                              <option>Mother</option>
                              <option>Father</option>
                              <option>Mother-in-law</option>
                              <option>Father-in-law</option>
                              <option>Niece</option>
                              <option>Nephew</option>
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
          <tab-content title="Payment">
            <div class="tab">
              Payments And Declaration:
              <div class="row">
                <div class="col-sm-9">
                  <h3 class="lg-title">Policy Payment Details</h3>

                  <h4>Your policy summery</h4>

                  <p class="mb20"></p>
                  <h4>Payment Procedure</h4>

                  <ul>
                    <li>SELECT M-PESA from the Menu.</li>
                    <li>
                      Lipa na M-PESA > Buy Goods And services 'till no' =
                      <strong>920829</strong>
                    </li>
                    <li>
                      Enter Amount > Enter amount as shown in the field below "Amount To
                      be Paid"
                    </li>
                    <li>Enter Your Mpesa pin</li>
                  </ul>
                </div>
                <p class="mb20">Fill out the payment details .</p>
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
                            v-model="payload.optionSelected"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td><strong> Mode of Payment </strong></td>
                        <td>
                          <input
                            type="text"
                            readonly
                            name="mode_of_payment[]"
                            id="mode_of_payment"
                            class="form-control"
                            v-model="payload.mode_of_payment"
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
                            v-model="payload.mpesa_phone"
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
                            v-model="payload.mpesa_code"
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
                <base-button type="success">Confirm Payment</base-button>
                <base-button type="info">
                  <router-link
                    :to="{
                      name: 'register',
                      params: {
                        details: {
                          p_name: payload.name,
                          p_email: payload.email,
                        },
                      },
                    }"
                    >Pay later</router-link
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
                    Request submitted successfully! <br />kindly be patiant as we process
                    your policy certificate.<br />
                    In the mean time, kindly check your email for your login credentials
                    generated by our system.
                  </span>
                </div>
              </b-row>
              <br />
            </div>
          </tab-content>
        </form-wizard></div
    ></b-col>
  </base-header>
</template>

<script>
import { json } from "d3";
import { FormWizard, TabContent } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import { registerUsers } from "../../api/users.api";
import insuranceErrors from "../../service/insuranceErrors";
import httpClient from "../../api/httpClient";

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
      payload: {
        optionSelected: "",
        name: "",
        email: "",
        phone: "",
        document_number: "",
        dob: Date,
        dependants: [
          {
            relation: "",
            Name: "",
            dob: Date,
            document: "",
            document_number: "",
          },
        ],
        beneficiaries: [
          {
            name: "",
            relation: "",
            contact: "",
          },
        ],
        mode_of_payment: "MPESA",
        mpesa_phone: "",
        mpesa_code: "",
      },
    };
  },
  created() {
    this.payload.optionSelected = this.$route.params.category.category;
  },
  methods: {
    async payloadData() {
      var stringjson = JSON.stringify(this.payload);
      // console.log("json easy cover object", JSON.parse(stringjson));

      console.log("payload data", stringjson);
      let response = "";
      this.checking = true;
      try {
        response = await httpClient.post("/users", stringjson);
        console.log("easy cover", response);
        console.log("payload data", this.payload);
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
    addRow: function () {
      this.payload.dependants.push({
        relation: "",
        name: "",
        dob: Date,
        document: "",
        document_number: "",
      });
    },
    deleteRow(index) {
      this.payload.dependants.splice(index, 1);
    },

    addRow1: function () {
      this.payload.beneficiaries.push({
        name: "",
        relation: "",
        contact: "",
      });
    },
    deleteRow1(index) {
      this.payload.beneficiaries.splice(index, 1);
    },
  },
};
</script>
