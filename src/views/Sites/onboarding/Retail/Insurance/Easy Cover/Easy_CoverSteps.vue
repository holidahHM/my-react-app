<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
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
              <h3><label class="control-label">Who Do You want to Cover</label><br /></h3>

              <div class="col-sm-9">
                <h5 class="lg-title">Dependants</h5>
                <p class="mb20">
                  Fill out the table below to register your dependants. Use the "+" and
                  "-" button to add and remove dependants respectively.
                </p>
              </div>
              <div class="col-sm-3">
                <a
                  @click.prevent="addNewDependant"
                  id="add_row"
                  class="btn btn-info pull-right"
                  ><i class="fa fa-plus"></i
                ></a>
              </div>
            </div>
            <div style="overflow: scroll">
              <table class="table table-bordered table-hover" id="tab_logic">
                <thead>
                  <tr>
                    <th class="text-center" style="width: 150px">Remove</th>
                    <th class="text-center" style="width: 150px">Relationship</th>
                    <th class="text-center" style="width: 200px">Dependant Name *</th>
                    <th class="text-center" style="width: 100px">Date of Birth *</th>
                    <th class="text-center" style="width: 100px">Identifying Document</th>
                    <th class="text-center" style="width: 50px">ID Document Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    id="addr0"
                    v-for="(depend, index) in payload.dependants"
                    :key="depend.id"
                  >
                    <td>
                      <a
                        v-on:click="payload.dependants.splice(index, 1)"
                        id="delete_row"
                        class="pull-right btn btn-danger mr20 mb10"
                        ><i class="fa fa-minus"></i
                      ></a>
                    </td>
                    <td>
                      <select
                        v-model="depend.relation"
                        class="form-control"
                        id="relationship0"
                        name="insuree_id"
                        required
                      >
                        <!-- filled using js -->
                        <Option>father</Option>
                        <Option>mother</Option>
                        <Option>daughter</Option>
                        <Option>son</Option>
                        <Option>wife</Option>
                        <Option>brother</Option>
                        <Option>sister</Option>
                        <Option>relative</Option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="dependant_name"
                        required
                        placeholder="Enter full name"
                        class="form-control"
                        v-model="depend.Name"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="dependant_dob"
                        required
                        placeholder="yyyy-mm-dd"
                        class="form-control inputdate"
                        v-model="depend.dob"
                      />
                    </td>
                    <td>
                      <select
                        v-model="depend.document_type"
                        class="form-control"
                        name="dependant_id_doc_type[]"
                      >
                        <option value="National ID">National ID</option>
                        <option value="Passport">Passport</option>
                        <option value="BirthCert">Birth Certificate</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        name="dependant_identity_number"
                        placeholder="passport/id number"
                        class="form-control"
                        v-model="depend.document_number"
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
                  Fill out the table below to register the member's beneficiaries/next of
                  kin. Use the "+" and "-" button to add and remove beneficiaries
                  respectively.
                </p>
              </div>
              <div class="col-sm-3">
                <a
                  @click.prevent="addNewBeneficiary"
                  id="add_nok"
                  class="btn btn-info pull-right"
                  ><i class="fa fa-plus"></i
                ></a>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <table class="table table-bordered table-hover" id="ben_logic">
                  <thead>
                    <tr>
                      <th class="text-center" style="width: 250px">Remove</th>
                      <th class="text-center" style="width: 250px">Beneficiary Name</th>
                      <th class="text-center" style="width: 200px">
                        Relationship to Member
                      </th>
                      <th class="text-center" style="width: 100px">Telephone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      id="ben0"
                      v-for="(benefit, index) in payload.beneficiaries"
                      :key="benefit.id"
                    >
                      <td>
                        <a
                          v-on:click="payload.beneficiaries.splice(index, 1)"
                          id="delete_row"
                          class="pull-right btn btn-danger mr20 mb10"
                          ><i class="fa fa-minus"></i
                        ></a>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="beneficiary_name[]"
                          placeholder="Enter full name"
                          class="form-control"
                          v-model="benefit.name"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="beneficiary_relationship[]"
                          class="form-control"
                          v-model="benefit.relation"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="beneficiary_tel_no[]"
                          class="form-control"
                          v-model="benefit.contact"
                        />
                      </td>
                    </tr>
                    <tr id="ben1"></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </tab-content>
        <tab-content title="Step 3">
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
                    Enter Amount > Enter amount as shown in the field below "Amount To be
                    Paid"
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
                          value="MPESA"
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
            <button
              style="margin-bottom: 10%; float: right"
              class="btn btn-success"
              @click.prevent="confirmPayment"
            >
              Confirm Payment
            </button>
            <button style="margin-bottom: 10%; float: right" class="btn btn-info">
              Pay Later
            </button>
            <br />
            <br />
            <br />
            <b-row>
              <b-col lg="12">
                <div v-loading="true" id="loading" v-if="checking">
                  <p>requesting, please wait...</p>
                </div>
              </b-col>
            </b-row>
            <br />
          </div>
        </tab-content>
      </form-wizard>
    </card>
  </base-header>
</template>

<script>
import { FormWizard, TabContent } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import httpClient from "../../../../../../api/httpClient";
export default {
  name: "BasicStepperForm",
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      errormsg: "",
      checking: false,
      payload: {
        optionSelected: "",
        email: "",
        name: "",
        phone: "",
        dob: Date,
        mpesa_code: "",
        mpesa_phone: "",
        mode_of_payment: "MPESA",
        //first step data;
        dependants: [
          {
            id: 1,
            relation: "",
            Name: "",
            dob: "",
            document: "",
            document_number: "",
          },
        ],
        nextId: 2,
        beneficiaries: [
          {
            id: 1,
            name: "",
            relation: "",
            contact: "",
          },
        ],
        nextBn: 2,
      },
    };
  },
  created() {
    this.payload.email = this.$route.params.data.leadDetails.prospect_email;
    this.payload.name = this.$route.params.data.leadDetails.Prospect_name;
    this.payload.phone = this.$route.params.data.leadDetails.prospect_phone;
    this.payload.optionSelected = this.$route.params.data.option;
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
        this.$toast.success("Request Successfull", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: false,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      } catch (e) {
        this.checking = false;
        console.log("Easy cover error", e);
      }

      this.checking = false;
    },
    addNewDependant() {
      this.payload.dependants.push({
        id: this.payload.nextId++,
        relation: this.payload.relation,
        Name: this.payload.Name,
        dob: this.payload.dob,
        document: this.payload.document,
        document_number: this.payload.document_number,
      });
      this.payload.relation = "";
      this.payload.Name = "";
      this.payload.dob = "";
      this.payload.document = "";
      this.payload.document_number = "";
    },
    removeDependant() {
      for (let i in this.payload.dependants) {
        this.payload.dependants.splice(i, 1);
      }
    },
    addNewBeneficiary() {
      this.payload.beneficiaries.push({
        id: this.payload.nextBn++,
        name: this.payload.name,
        relation: this.payload.relation,
        contact: this.payload.contact,
      });
      this.payload.name = "";
      this.payload.relation = "";
      this.payload.contact = "";
    },
    removeBeneficiary() {
      for (let i in this.payload.beneficiaries) {
        this.payload.beneficiaries.splice(i, 1);
      }
    },
    async confirmPayment() {
      this.$toast.error("Failed! No mpesa code detected", {
        position: "top-right",
        timeout: 5000,
        closeOnClick: false,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: true,
        hideProgressBar: false,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
    },
  },
};
</script>
