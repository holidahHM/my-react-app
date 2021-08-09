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
                <h2 class="d-flex justify-content-center mb-4">Motor use</h2>
                <div class="row">
                  <b-col class="md-6">
                    <base-button type="info"
                      ><router-link to="/m_psv_quote"
                        >Passenger Carrying PSV</router-link
                      ></base-button
                    ></b-col
                  >
                  <b-col class="md-6">
                    <base-button type="info">Private/Courier</base-button></b-col
                  >
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
    return {};
  },
  methods: {},
};
</script>
