<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <b-container class="mt--6 pb-8">
      <b-row class="justify-content-center">
        <div align-v="center" slot="header">
          <b-col cols="12" class="d-flex justify-content-center mb-3">
            <img
              src="img/brand/Blue-Octagon_Logo.png"
              style="width: 200px; height: 70px"
            />
          </b-col></div
      ></b-row>
      <b-row class="justify-content-center">
        <br /><br />

        <b-col class="col-md-6">
          <div class="d-flex justify-content-center alert alert-info">
            <h5>Takes only few minutes and you're done. Welcome</h5>
          </div> </b-col
        ><br />
        <b-col class="col-md-12 mb-12 d-flex justify-content-center" xl="12">
          <stats-card title="" type="gradient-green" sub-title="" class="mb-4" xl="12">
            <template slot="footer">
              <div class="mt-3">
                <h2 class="d-flex justify-content-center mb-4">Choose a vehicle type</h2>
                <div class="row">
                  <b-col class="md-6"
                    ><div>
                      <base-button type="info"
                        ><router-link
                          :to="{
                            name: 'Vehicle Use',
                            params: {
                              cartype: {
                                car: car,
                                product,
                              },
                            },
                          }"
                          >{{ car }}</router-link
                        ></base-button
                      >
                    </div></b-col
                  >
                  <b-col class="md-6"
                    ><div>
                      <base-button type="info"
                        ><router-link
                          :to="{
                            name: 'Motorcycle Use',
                            params: {
                              cardet: {
                                motorbike,
                                product,
                              },
                            },
                          }"
                          >{{ motorbike }}</router-link
                        ></base-button
                      >
                    </div></b-col
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
    return {
      car: "car",
      motorbike: "motorbike",
      product: "Motor",
    };
  },
  methods: {},
};
</script>
