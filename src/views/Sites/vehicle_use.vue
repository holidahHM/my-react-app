<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <b-container class="mt--12 pb-12">
      <b-row class="justify-content-center responsive">
        <div align-v="center" slot="header">
          <b-col cols="12" class="justify-content-center mb-3">
            <img
              src="img/brand/Blue-Octagon_Logo.png"
              style="width: 200px; height: 70px"
            />
          </b-col>
        </div>
        <br />
        <b-col class="col-md-12 mb-12 d-flex justify-content-center" lg="12">
          <div class="stats-card-responsive">
            <stats-card
              title=""
              type="gradient-green"
              sub-title=""
              class="responsive mb-6"
              lg="12"
            >
              <template slot="footer">
                <div class="mt-3">
                  <h2 class="justify-content-center mb-4">Choose a vehicle use</h2>
                  <div class="row">
                    <base-button type="info"
                      ><router-link
                        :to="{
                          name: 'Private car Quote',
                          params: {
                            pcardetails: {
                              car_private: car,
                              selection_type: selection_type,
                            },
                          },
                        }"
                        >{{ car }}</router-link
                      ></base-button
                    >
                  </div>
                  <br />
                  <div class="row">
                    <base-button type="info"
                      ><router-link
                        :to="{
                          name: 'Type of Coverages',
                          params: {
                            cardet: {
                              taxi: taxi,
                              selection_type,
                            },
                          },
                        }"
                        >Taxi</router-link
                      ></base-button
                    >
                  </div>
                  <br />
                  <div class="row">
                    <base-button type="info"
                      ><router-link
                        :to="{
                          name: 'Commercial Coverage',
                          params: {
                            cardet: {
                              commercial: commercial,
                              selection_type,
                            },
                          },
                        }"
                        >Commercial</router-link
                      ></base-button
                    >
                  </div>
                </div></template
              ></stats-card
            >
          </div></b-col
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
      car: "Private",
      taxi: "Taxi",
      commercial: "commercial",
      selection_type: [],
    };
  },
  created() {
    this.selection_type.push(this.$route.params.cartype);
  },
  methods: {},
};
</script>
