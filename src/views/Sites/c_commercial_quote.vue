<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <b-container class="mt--12 pb-5">
      <b-row class="justify-content-center">
        <div align-v="center" slot="header">
          <b-col cols="12" class="d-flex justify-content-center mb-3">
            <img
              src="img/brand/Blue-Octagon_Logo.png"
              style="width: 200px; height: 70px"
            />
          </b-col>
        </div>
        <br />
        <b-col class="col-md-12 mb-12 d-flex justify-content-center" lg="12">
          <stats-card title="" type="gradient-green" sub-title="" class="mb-4" lg="12">
            <template slot="footer">
              <div class="mt-3">
                <h2 class="d-flex justify-content-center mb-4">
                  Choose type of Coverage
                </h2>
                <div class="row">
                  <b-col class="md-6">
                    <base-button type="info"
                      ><router-link
                        :to="{
                          name: 'c_commercial_TPO',
                          params: {
                            cardet: {
                              selection: $route.params.cardet,
                              thirdparty: thirdparty,
                              code: '100/MCTP',
                            },
                          },
                        }"
                        >{{ thirdparty }}</router-link
                      ></base-button
                    ></b-col
                  >
                  <b-col class="md-6">
                    <base-button type="info" v-b-modal.modal-1>Comprehensive</base-button>
                    <b-modal
                      id="modal-1"
                      title="Please tell us a little more about your vehicle"
                      size="lg"
                      hide-footer
                    >
                      <b-col xl="12" md="10">
                        <stats-card
                          title=""
                          type="gradient-green"
                          sub-title=""
                          class="mb-4"
                        >
                          <div class="row">
                            <div class="col-md-12">
                              <label for="input-default"
                                >What is the value of your Vehicle</label
                              >
                              <b-form-input
                                type="text"
                                placeholder=""
                                v-model="c_value"
                              ></b-form-input>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <label for="input-default"
                                >What is your vehicle’s year of manufacture?</label
                              >
                              <select class="form-control" v-model="y_o_m">
                                <option>2015</option>
                                <option>2016</option>
                                <option>2017</option>
                                <option>2018</option>
                                <option>2019</option>
                              </select>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <label for="input-default"
                                >What is your vehicle’s brand?</label
                              >
                              <select class="form-control" v-model="c_brand">
                                <option>Hudson</option>
                                <option>Ford</option>
                                <option>Honda</option>
                              </select>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <label for="input-default"
                                >What is your vehicle’s model?</label
                              >
                              <select class="form-control" v-model="c_model">
                                <option>Legend</option>
                                <option>CL</option>
                                <option>TL</option>
                              </select>
                            </div>
                          </div>
                          <template slot="footer">
                            <div class="mt-3"></div></template></stats-card
                      ></b-col>
                      <b-row>
                        <div class="col-md-4">
                          <base-button class="mt-3" type="success"
                            ><router-link
                              :to="{
                                name: 'c_commercial_COMP',
                                params: {
                                  cardet: {
                                    selection: $route.params.cardet,
                                    comprehensive,
                                    c_value,
                                    code: '090/MCC',
                                    y_o_m,
                                    c_brand,
                                    c_model,
                                  },
                                },
                              }"
                              >Submit</router-link
                            ></base-button
                          >
                        </div>
                        <div class="col-md-4">
                          <base-button
                            class="mt-3"
                            block
                            @click="$bvModal.hide('modal-1')"
                            type="Success"
                            >Cancel</base-button
                          >
                        </div>
                      </b-row></b-modal
                    >
                  </b-col>
                </div>
              </div></template
            ></stats-card
          ></b-col
        >
      </b-row></b-container
    >
  </base-header>
</template>

<script>
import { FormWizard, TabContent } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";

export default {
  name: "BasicStepperForm",
  components: {
    FormWizard,
    TabContent,
  },
  data() {
    return {
      thirdparty: "Third Party",
      comprehensive: "Comprehensive",
      c_value: "",
      y_o_m: "",
      c_brand: "",
      c_model: "",
    };
  },
  methods: {},
};
</script>
