<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <b-row
        ><b-col class="col-md-12">
          <stats-card
            title="Policy Details"
            type="gradient-green"
            sub-title=""
            class="mb-12"
          >
            <template slot="footer">
              <div class="mt-3">
                <b-form @submit.prevent="updatepolicyregister">
                  <div class="pl-lg-12">
                    <b-row>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Client Name"
                          placeholder="Client Name"
                          disabled
                          v-model="clientname"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Client's No"
                          placeholder="Client's No"
                          disabled
                          v-model="clientno"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Insured's Name"
                          placeholder=""
                          readonly
                          v-model="insuredsname"
                        >
                        </base-input> </b-col></b-row
                    ><br />
                    <b-row>
                      <b-col lg="3">
                        <base-input
                          type="text"
                          label="Insured Item"
                          placeholder=""
                          readonly
                          v-model="insureditem"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="3">
                        <base-input
                          type="text"
                          label="Item No"
                          placeholder=""
                          readonly
                          v-model="itemno"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="3">
                        <base-input
                          type="text"
                          label="Policy class"
                          placeholder=""
                          readonly
                          v-model="productclass"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="3">
                        <base-input
                          type="text"
                          label="Product Code"
                          placeholder=""
                          readonly
                          v-model="productcode"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Policy No"
                          placeholder=""
                          disabled
                          v-model="policyno"
                        >
                        </base-input>
                      </b-col>

                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Insured's Pin"
                          placeholder=""
                          readonly
                          v-model="insuredspin"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Occupation"
                          placeholder="Occupation"
                          readonly
                          v-model="occupation"
                        >
                        </base-input> </b-col
                    ></b-row></div
                ></b-form>
              </div>
            </template>
          </stats-card>
        </b-col> </b-row
      ><br />
      <b-row
        ><b-col class="col-md-12">
          <stats-card
            title="Insurance Dates"
            type="gradient-green"
            sub-title=""
            class="mb-12"
          >
            <template slot="footer">
              <div class="mt-3">
                <b-form @submit.prevent="updatepolicyregister">
                  <div class="pl-lg-12">
                    <b-row>
                      <b-col lg="3">
                        <base-input
                          type="date"
                          label=" Date From(Inception)*"
                          placeholder=""
                          id="example-date-input"
                          v-model="startDate"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="3">
                        <base-input
                          type="date"
                          label=" Date To(Expiry)*"
                          placeholder=""
                          id="example-date-input"
                          v-model="endDate"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="3">
                        <base-input
                          type="text"
                          label="Days on Cover"
                          placeholder=""
                          readonly
                          v-model="daysComputed"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="3">
                        <base-input
                          type="text"
                          label="Next Renewal Date"
                          placeholder=""
                          readonly
                          id="example-date-input"
                          v-model="renewDate"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                  </div>
                </b-form>
              </div>
            </template>
          </stats-card>
        </b-col> </b-row
      ><br />
      <b-row
        ><b-col class="col-md-12">
          <stats-card
            title="Insurance Company/ Company Where Co-insured"
            type="gradient-green"
            sub-title=""
            class="mb-4"
          >
            <template slot="footer">
              <div class="mt-3">
                <b-form @submit.prevent="updatepolicyregister">
                  <div class="pl-lg-12">
                    <b-row>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Insurance company"
                          placeholder=""
                          readonly
                          v-model="insurancecompany"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Company Code"
                          placeholder=""
                          readonly
                          v-model="companycode"
                        >
                        </base-input>
                      </b-col>

                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Policy Status"
                          readonly
                          v-model="policystatus"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                  </div>
                  <br />
                </b-form>
              </div>
            </template>
          </stats-card>
        </b-col> </b-row
      ><br />
      <b-row
        ><b-col class="col-md-12">
          <stats-card title="Financials" type="gradient-green" sub-title="" class="mb-12">
            <template slot="footer">
              <div class="mt-3">
                <b-form @submit.prevent="updatepolicyregister">
                  <div class="pl-lg-12">
                    <b-row>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Sum Insured"
                          placeholder="0.00"
                          readonly
                          v-model="suminsured"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input label="Rate" v-model="user.rate">
                          <select class="form-control">
                            <option>Percent</option>
                            <option>Per Mile</option>
                            <option>No Rate</option>
                          </select>
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="number"
                          label="Basic Premium*"
                          placeholder=""
                          v-model="basicP"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col lg="6">
                        <base-input
                          type="number"
                          label=" Paid By Client*"
                          placeholder="Amount paid by client"
                          readonly
                          v-model="dueP"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="6">
                        <base-input
                          type="number"
                          label=" Paid To Insurer*"
                          placeholder=""
                          readonly
                          v-model="paidtoIns"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <br /></div
                ></b-form>
              </div>
            </template>
          </stats-card>
        </b-col> </b-row
      ><br />
      <b-row class="d-flex justify-content-center mb-3">
        <base-button type="info"
          ><router-link
            :to="{
              name: 'Insurance Payments',
              params: {
                code: {
                  startDate,
                  endDate,
                  clientname,
                  clientno,
                  insuredsname,
                  insureditem,
                  itemno,
                  productclass,
                  productcode,
                  policyno,
                  insuredspin,
                  occupation,
                  insurancecompany,
                  companycode,
                  policystatus,
                  suminsured,
                  paidby,
                  paidtoinsurer,
                  renewDate,
                  daysComputed,
                  balanceCalc,
                  paidtoIns,
                },
              },
            }"
            >Payment Allocation</router-link
          ></base-button
        >
        <!--<base-button  @click="Ins_Policy_Trans()" type="primary">Policy Transactions</base-button>-->
        <base-button type="success">Save</base-button>
        <base-button type="warning"
          ><router-link to="/Ins_scheme_servicing">Close</router-link></base-button
        >
      </b-row>
    </card>
  </base-header>
</template>
<script>
import insuranceErrors from "../../../../service/insuranceErrors";
import Ins_Policy_Trans from "../Schemes/Ins_Policy_Trans.vue";
//import Schemes from '../Schemes/Schemes'
export default {
  components: { Ins_Policy_Trans },
  data() {
    return {
      user: {},
      startDate: Date,
      endDate: Date,
      clientname: "",
      clientno: "",
      insuredsname: "",
      insureditem: "",
      itemno: "",
      productclass: "",
      productcode: "",
      policyno: "",
      insuredspin: "",
      occupation: "",
      insurancecompany: "",
      companycode: "",
      policystatus: "",
      suminsured: "",
      paidby: "",
      paidtoinsurer: "",

      //balance calculation
      dueP: "",
      basicP: "",
      commRate: "",
      wTaxrate: "",
    };
  },
  created() {
    this.clientname = this.$route.params.code.s_name;
    this.clientno = this.$route.params.code.codes;
    this.policyno = this.$route.params.code.policy_number;
    this.policystatus = this.$route.params.code.s_status;
    this.insuredsname = this.$route.params.code.i_name;
    this.insureditem = this.$route.params.code.i_item;
    this.itemno = this.$route.params.code.i_item_no;
    this.productclass = this.$route.params.code.product_class;
    this.productcode = this.$route.params.code.product_code;
    this.insuredspin = this.$route.params.code.i_pin;
    this.occupation = this.$route.params.code.occupation;
    this.insurancecompany = this.$route.params.code.insurance_company;
    this.companycode = this.$route.params.code.company_code;
    this.suminsured = this.$route.params.code.sum_insured;
    this.dueP = this.$route.params.code.duePremium;
    this.basicP = this.$route.params.code.basicP;
    this.commRate = this.$route.params.code.Commission_rate;
    this.wTaxrate = this.$route.params.code.wTaxRate;
  },
  computed: {
    daysComputed: function () {
      return insuranceErrors.date_diff_indays(this.startDate, this.endDate);
    },
    renewDate: function () {
      return insuranceErrors.addDate(this.endDate, 1);
    },
    balanceCalc: function () {
      return this.paidby;
    },
    paidtoIns: function () {
      return insuranceErrors.paidtoInsurer(
        this.commRate,
        this.basicP,
        this.wTaxrate,
        this.dueP
      );
    },
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    Ins_Policy_Trans() {
      this.$router.push("/Ins_Policy_Trans");
    },
  },
};
</script>
<style></style>
