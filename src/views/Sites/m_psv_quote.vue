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
                          name: 'motor psv tpo',
                          params: {
                            cardet: {
                              taxi: $route.params.cardet.taxi,
                              thirdparty,
                              code: '085PSVT',
                            },
                          },
                        }"
                        >Third Party</router-link
                      ></base-button
                    >
                  </b-col>
                  <b-col class="md-6">
                    <base-button type="info" v-b-modal.modal-2>Comprehensive</base-button>
                    <b-modal
                      id="modal-2"
                      title="Please tell us a little more about your taxi"
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
                                >What is the value of your taxi??</label
                              >
                              <b-form-input
                                type="number"
                                placeholder=""
                                v-model="c_value"
                              ></b-form-input>
                            </div>
                            <br />
                            <div class="col-md-12">
                              <label for="input-default"
                                >What is your taxis’s Make and Model?</label
                              >
                              <b-form-input
                                type="text"
                                placeholder=""
                                v-model="c_model"
                              ></b-form-input>
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
                                name: 'm_psv_COMP',
                                params: {
                                  cardet: {
                                    comprehensive,
                                    c_value,
                                    c_model,
                                    code: '084PSVC',
                                    taxi: $route.params.cardet.taxi,
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
                            @click="$bvModal.hide('modal-2')"
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
      c_value: "",
      c_model: "",
      comprehensive: "Comprehensive",
    };
  },
  methods: {},
};
</script>
