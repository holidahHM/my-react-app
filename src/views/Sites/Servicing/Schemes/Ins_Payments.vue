<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <b-row
        ><b-col class="col-md-12">
          <stats-card
            title="Payment Type"
            type="gradient-green"
            sub-title=""
            class="mb-12"
          >
            <template slot="footer">
              <div class="mt-3">
                <b-form @submit.prevent="updatepayment">
                  <div class="pl-lg-12">
                    <b-row>
                      <b-col lg="4">
                        <b-form-radio
                          v-model="selected"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          value="Direct Payment"
                          >Direct Payment
                        </b-form-radio>
                      </b-col>

                      <b-col lg="4">
                        <b-form-radio
                          v-model="selected"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          value="Pay Client"
                          >Pay Client
                        </b-form-radio>
                      </b-col>
                      <b-col lg="4">
                        <b-form-radio
                          v-model="selected"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          value="Pay Insurer"
                          >Pay Insurer
                        </b-form-radio>
                      </b-col></b-row
                    ><b-row>
                      <b-col lg="4">
                        <b-form-radio
                          v-model="selected"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          value="Pay Agent"
                          >Pay Agent
                        </b-form-radio>
                      </b-col>
                      <b-col lg="4">
                        <b-form-radio
                          v-model="selected"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          value="Pay Suplier"
                          >Pay Supplier
                        </b-form-radio>
                      </b-col>
                      <b-col lg="4">
                        <b-form-radio
                          v-model="selected"
                          :aria-describedby="ariaDescribedby"
                          name="some-radios"
                          value="Fund Account Payment"
                          >Fund Account Payment
                        </b-form-radio>
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
            title="Account Details"
            type="gradient-green"
            sub-title=""
            class="mb-12"
          >
            <template slot="footer">
              <div class="mt-3">
                <b-form @submit.prevent="updatepayment">
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
                      <b-col lg="2">
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
                          label="Insurer's name"
                          placeholder="Insurer's name"
                          disabled
                          v-model="insurersname"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="2">
                        <base-input
                          type="text"
                          label="Insurer's No"
                          placeholder=""
                          disabled
                          v-model="isurerno"
                        >
                        </base-input> </b-col></b-row
                    ><br /></div
                ></b-form>
              </div>
            </template>
          </stats-card>
        </b-col> </b-row
      ><br />
      <b-row
        ><b-col class="col-md-12">
          <stats-card
            title="Payment Description"
            type="gradient-green"
            sub-title=""
            class="mb-12"
          >
            <template slot="footer">
              <div class="mt-3">
                <b-form @submit.prevent="updatepayment">
                  <div class="pl-lg-12">
                    <b-row>
                      <b-col lg="12">
                        <b-form-textarea
                          label="Description"
                          id="textarea"
                          placeholder=""
                          rows="2"
                          max-rows="3"
                          v-model="description"
                        ></b-form-textarea>
                      </b-col> </b-row
                    ><br />
                    <b-row>
                      <b-col lg="6">
                        <base-input
                          type="date"
                          label="Date"
                          placeholder=""
                          id="example-date-input"
                          v-model="date_from"
                        >
                        </base-input>
                      </b-col>

                      <b-col lg="6">
                        <base-input
                          type="text"
                          label="Payment No"
                          placeholder=""
                          id="example-date-input"
                          v-model="paymentno"
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
          <stats-card title="Amount" type="gradient-green" sub-title="" class="mb-4">
            <template slot="footer">
              <div class="mt-3">
                <b-form @submit.prevent="updatepaymet">
                  <div class="pl-lg-12">
                    <b-row>
                      <b-col lg="4">
                        <base-input label="Currency">
                          <select class="form-control" v-model="currency">
                            <option
                              :value="i.exRate"
                              v-for="i in currencyArray"
                              :key="i.id"
                            >
                              {{ i.name }}
                            </option>
                          </select>
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Shedule No"
                          placeholder=""
                          v-model="scheduleno"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Exchange Rate(Local Currency)"
                          placeholder="0.00"
                          readonly
                          v-model="currency"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Amount"
                          placeholder="0.00"
                          v-model="paidby"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="8">
                        <base-input
                          type="text"
                          label="Amount In words"
                          placeholder=""
                          v-model="amountinwords"
                        >
                        </base-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col lg="4">
                        <base-input label="Payment Mode">
                          <select class="form-control">
                            <option>Cash</option>
                            <option>Mpesa</option>
                            <option>Cheque</option>
                          </select>
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Cash/Cheque No/Other Ref No"
                          placeholder=""
                          v-model="refno"
                        >
                        </base-input>
                      </b-col>
                      <b-col lg="4">
                        <base-input
                          type="text"
                          label="Paid by"
                          placeholder=""
                          v-model="paidbyClient"
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
      <b-row class="d-flex justify-content-center mb-3">
        <base-button type="success" v-on:click="saveSchemeRenewal()">Save</base-button>
        <base-button v-b-modal.modal-1 type="info"> Allocate Payment</base-button>
        <b-modal id="modal-1" title="Product-Payment Allocation" size="lg" hide-footer>
          <b-col xl="12" md="10">
            <stats-card title="" type="gradient-green" sub-title="" class="mb-4">
              <template slot="footer">
                <div class="mt-3">
                  <div class="row">
                    <div class="col-md-4">
                      <label for="input-default">Client's Name</label>
                      <b-form-input
                        v-model="clientname"
                        type="text"
                        placeholder=""
                        readonly
                      ></b-form-input>
                    </div>
                    <div class="col-md-4">
                      <label for="input-default">Insurer's Name</label>
                      <b-form-input
                        v-model="insurersname"
                        type="text"
                        placeholder=""
                        readonly
                      ></b-form-input>
                    </div>
                    <div class="col-md-4">
                      <label for="input-default">Payment No</label>
                      <b-form-input
                        v-model="paymentno"
                        type="text"
                        placeholder="Payment No"
                        readonly
                      ></b-form-input>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <label for="input-default">Date From</label>
                      <b-form-input
                        v-model="datefrom"
                        type="text"
                        placeholder=""
                        readonly
                      ></b-form-input>
                    </div>
                    <div class="col-md-4">
                      <label for="input-default">Date To</label>
                      <b-form-input
                        v-model="dateto"
                        type="text"
                        placeholder=""
                        readonly
                      ></b-form-input>
                    </div>
                    <div class="col-md-4">
                      <label for="input-default">Payment Amount</label>
                      <b-form-input
                        v-model="paidby"
                        type="number"
                        placeholder=""
                        readonly
                      ></b-form-input>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-md-6">
                      <label for="input-default"><strong>Allocated</strong></label>
                      <b-form-input
                        v-model="allocatedamount"
                        type="number"
                        placeholder="0.00"
                      ></b-form-input>
                      <br />
                      <b-button
                        v-b-tooltip.hover.left
                        title="Click to allocate ammount!"
                        type="button"
                        class="btn btn-success btn-sm"
                        v-on:click="amountToAllocate()"
                      >
                        Allocate
                      </b-button>
                      <span class="badge bg-info"><u>Amount:</u></span> &nbsp;
                      <span class="badge bg-secondary" v-if="result">
                        <i>{{ finAllocatedAmount }}</i></span
                      >
                      <span class="badge badge-pill badge-danger" v-if="errorAllocate">
                        {{ errorTxt }}
                      </span>
                    </div>
                    <div class="col-md-6">
                      <label for="input-default"><strong>Account Balance</strong></label>
                      <b-form-input
                        v-model="finBalance"
                        type="text"
                        placeholder="0.00"
                        readonly
                      ></b-form-input>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <label for="input-default">Transaction TYpe</label>
                      <select class="form-control" v-model="transactiontype">
                        <option>Premiums Payable</option>
                        <option></option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <label for="input-default">Pay Net/ Full Amount</label>
                      <select class="form-control" v-model="paynet">
                        <option>Full Premium</option>
                        <option>Partial Payment</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <label for="input-default">Commission Earned</label>
                      <select class="form-control" v-model="coommissionearned">
                        <option>Only Fully Paid Transactions</option>
                        <option></option>
                      </select>
                    </div>
                  </div></div></template
            ></stats-card>
            <b-row>
              <base-button class="mt-3" type="success" v-on:click="allocatePaymentfunc()"
                >Save</base-button
              >
              <base-button class="mt-3" type="Success" @click="$bvModal.hide('modal-1')"
                >Cancel</base-button
              >
            </b-row></b-col
          ></b-modal
        >

        <base-button type="info"
          ><router-link to="/Ins_Policy_Trans"
            >Go to Policy Transaction</router-link
          ></base-button
        >

        <base-button type="warning">Close</base-button>
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
      selected: "",
      clientname: "",
      clientno: "",
      insurersname: "",
      isurerno: "",
      paymentdescription: "",
      datepaid: Date,
      paymentno: "",
      currency: "",
      currencyArray: [
        { id: 1, exRate: 32.6667, name: "Ksh" },
        { id: 2, exRate: 0.0306, name: "Ugsh" },
      ],
      scheduleno: "",
      exchangerate: "",
      amountCoverted: "",
      amountinwords: "",
      paymentmode: "",
      cashrefno: "",
      paidby: "",
      datefrom: Date,
      dateto: Date,
      allocatedamount: "",
      finAllocatedAmount: "",
      finBalance: "",
      balancefunc: "",
      transactiontype: "",
      paynet: "",
      coommissionearned: "",
      paidbyClient: "",
      errorAllocate: false,
      errorTxt: "",
      result: false,
    };
  },
  created() {
    this.clientname = this.$route.params.code.clientname;
    this.clientno = this.$route.params.code.clientno;
    this.insurersname = this.$route.params.code.insurancecompany;
    this.isurerno = this.$route.params.code.companycode;
    this.amount = this.$route.params.code.suminsured;
    this.paidby = this.$route.params.code.paidby;
    this.datefrom = this.$route.params.code.startDate;
    this.dateto = this.$route.params.code.endDate;
    this.balancefunc = this.$route.params.code.balanceCalc;
  },
  computed: {},
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    Ins_Policy_Trans() {
      this.$router.push("/Ins_Policy_Trans");
    },
    allocatePaymentfunc() {
      alert("all fields required");
    },
    saveSchemeRenewal() {
      alert("all fields required");
    },
    amountToAllocate() {
      if (this.allocatedamount > this.paidby) {
        this.errorAllocate = true;
        this.result = false;
        this.errorTxt = "Cannot allocate payment greater than the Payment amount";
      } else {
        this.errorAllocate = false;
        this.result = true;
        this.finBalance = insuranceErrors.allocatedAmount(
          this.allocatedamount,
          this.paidby
        );
        this.finAllocatedAmount = this.allocatedamount;
      }
    },
  },
};
</script>
<style></style>
