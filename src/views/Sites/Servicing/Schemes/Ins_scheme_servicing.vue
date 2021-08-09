<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <!-- <b-row>
      <b-col class="col-md-6">
        <b-button-group>
          <b-dropdown
            id="dropdown-left"
            text="Member Servicing"
            variant="info"
            class="m-2"
          >
            <b-dropdown-item>
              <router-link to="/Beneficiaries_Member_Servicing"
                >Beneficiaries
              </router-link></b-dropdown-item
            >
            <b-dropdown-item>
              <router-link to="/Portal_Edits">Portal Edits </router-link></b-dropdown-item
            >
          </b-dropdown>
        </b-button-group>
      </b-col>
      <b-col class="col-md-6">
        <b-button-group>
          <b-dropdown
            id="dropdown-left"
            text="Member statement"
            variant="info"
            class="m-2"
          >
            <b-dropdown-item>
              <router-link to="/Generate_Statement"
                >Generate Statement
              </router-link></b-dropdown-item
            >
          </b-dropdown>
        </b-button-group>
      </b-col>
    </b-row> -->
    <b-row
      ><b-col xl="12" md="12">
        <stats-card title="" type="gradient-green" sub-title="" class="mb-4">
          <template slot="footer">
            <div class="mt-3">
              <div class="row">
                <div class="col-md-6">
                  <label for="input-default"><Strong>Scheme Name:</Strong></label
                  ><br />
                  {{ $route.params.code.s_name }}
                </div>
                <!--<div class="col-md-3">
                                    <label for="input-default">Provider Type</label>
                                    <select class="form-control">
                                      <option>Custodian</option>
                                      <option>Fund Manager</option>
                                    </select>
                                  </div>-->
                <div class="col-md-6">
                  <label for="input-default"><Strong>Start Date:</Strong></label
                  ><br />
                  {{ $route.params.code.d_from }}
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label for="input-default"><Strong>Proposal No:</Strong></label
                  ><br />
                  {{ $route.params.code.propasal_number }}
                </div>
                <!--<div class="col-md-3">
                                    <label for="input-default">Provider Type</label>
                                    <select class="form-control">
                                      <option>Custodian</option>
                                      <option>Fund Manager</option>
                                    </select>
                                  </div>-->
                <div class="col-md-6">
                  <label for="input-default"><Strong>End Date:</Strong></label
                  ><br />
                  {{ enddate }}
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label for="input-default"><Strong>Policy No:</Strong></label
                  ><br />
                  {{ $route.params.code.policy_number }}
                </div>
                <div class="col-md-6">
                  <label for="input-default"><Strong>Status:</Strong></label
                  ><br />
                  <span class="badge badge-pill badge-success" v-if="current">
                    {{ status }}
                  </span>
                  <span class="badge badge-pill badge-danger" v-if="lapsed">
                    {{ status }}
                  </span>
                </div>
              </div>
              <br />
              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="success"
                  ><router-link
                    :to="{
                      name: 'Policy Register',
                      params: {
                        code: {
                          codes: $route.params.code.codes,
                          s_name: $route.params.code.s_name,
                          propasal_number: $route.params.code.propasal_number,
                          policy_number: $route.params.code.policy_number,
                          s_status: $route.params.code.s_status,
                          i_name: $route.params.code.insured_name,
                          i_item: $route.params.code.insured_item,
                          i_item_no: $route.params.code.item_no,
                          product_class: $route.params.code.product_class,
                          product_code: $route.params.code.product_code,
                          i_pin: $route.params.code.i_pin,
                          occupation: $route.params.code.occupation,
                          insurance_company: $route.params.code.insurance_company,
                          company_code: $route.params.code.company_code,
                          sum_insured: $route.params.code.suminsured,
                          basicP: $route.params.code.basicP,
                          duePremium: $route.params.code.duePremium,
                          Commission_rate: $route.params.code.commRate,
                          wTaxRate: $route.params.code.wTaxRate,
                        },
                      },
                    }"
                    >Renew</router-link
                  ></base-button
                >
                <base-button type="info"
                  ><router-link
                    :to="{
                      name: 'Policy Register',
                      params: {
                        code: {
                          codes: $route.params.code.codes,
                          s_name: $route.params.code.s_name,
                          propasal_number: $route.params.code.propasal_number,
                          policy_number: $route.params.code.policy_number,
                          s_status: $route.params.code.s_status,
                          i_name: $route.params.code.insured_name,
                          i_item: $route.params.code.insured_item,
                          i_item_no: $route.params.code.item_no,
                          product_class: $route.params.code.product_class,
                          product_code: $route.params.code.product_code,
                          i_pin: $route.params.code.i_pin,
                          occupation: $route.params.code.occupation,
                          insurance_company: $route.params.code.insurance_company,
                          company_code: $route.params.code.company_code,
                          sum_insured: $route.params.code.suminsured,
                          basicP: $route.params.code.basicP,
                          duePremium: $route.params.code.duePremium,
                        },
                      },
                    }"
                    >Suspend</router-link
                  ></base-button
                >
                <base-button type="warning">Delete</base-button>
              </b-row>
            </div></template
          >
        </stats-card>
      </b-col></b-row
    >
  </base-header>
</template>
<script>
import { getBefefiaries, getSingleMemberPolicy } from "../../../../api/users.api";
import BaseButton from "../../../../components/BaseButton.vue";
import Card from "../../../../components/Cards/Card.vue";
import insuranceErrors from "../../../../service/insuranceErrors";
export default {
  components: { Card, BaseButton },
  data() {
    return {
      memberDet: [],
      member_ID: "",
      i_f_name: "",
      prod_num: "",
      ben_items: [],
      enddate: Date,
      current: false,
      lapsed: false,
      status: "",
    };
  },
  created() {
    this.enddate = this.$route.params.code.d_to;
    if (this.$route.params.code.s_status === "CURRENT") {
      this.current = true;
      this.lapsed = false;
      this.status = this.$route.params.code.s_status;
    } else if (this.$route.params.code.s_status === "LAPSED") {
      this.current = false;
      this.lapsed = true;
      this.status = this.$route.params.code.s_status;
    }
  },
  methods: {},
};
</script>

<style scoped></style>
