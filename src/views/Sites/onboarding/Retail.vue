<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <b-row>
      <b-col xl="3" md="6">
        <stats-card
          title="PENSION"
          type="gradient-green"
          sub-title=""
          icon="ni ni-money-coins"
          class="mb-4"
        >
          <template slot="footer">
            <div class="mt-3">
              <b-button-group>
                <b-button @click="Application_Form()" variant="success">OPPS</b-button>
                <b-button @click="Application()" variant="info">IDD</b-button>
              </b-button-group>
            </div>
          </template>
        </stats-card>
      </b-col>

      <b-col xl="5" md="6">
        <stats-card
          title="Insurance"
          type="gradient-green"
          sub-title=""
          icon="ni ni-money-coins"
          class="mb-4"
        >
          <template slot="footer">
            <div class="mt-3">
              <b-button-group>
                <b-button @click="Proposal_form()" variant="success">Easy Cover</b-button>
                <!--
      <b-button variant="info">PRMC</b-button>
      <b-button variant="warning">Domestic package</b-button>
      <b-button variant="info">Personal accident</b-button>
      -->
              </b-button-group>
            </div>
          </template>
        </stats-card>
      </b-col>
      <!--
          <b-col xl="6" md="6">
          <stats-card title="Training"
                      type="gradient-green"
                      sub-title=""
                      icon="ni ni-money-coins"
                      class="mb-4">

            <template slot="footer">
              <div class="mt-3">
    <b-button-group>
      <b-button variant="success">Soft skills</b-button>
      
      
    </b-button-group>
  </div>
            </template>
          </stats-card>

        </b-col>
        -->

      <b-col xl="4" md="6">
        <stats-card
          title="Trust"
          type="gradient-info"
          sub-title=""
          icon="ni ni-chart-bar-32"
          class="mb-4"
        >
          <template slot="footer">
            <div class="mt-3">
              <b-button-group>
                <b-button @click="Living_Trust()" variant="info">Living</b-button>
              </b-button-group>
            </div>
          </template>
        </stats-card>
      </b-col>
    </b-row>
    <b-row> </b-row>
  </base-header>
</template>
<script>
import Application_Form from "../onboarding/Retail/Pension/OPPS/Application_Form.vue";
import Application from "../onboarding/Retail/Pension/IDD/Application.vue";
import Proposal_form from "../onboarding/Retail/Insurance/Easy Cover/Proposal_form";
import Living_Trust from "../onboarding/Retail/Trust/Living_Trust";
export default {
  components: {
    Application_Form,
    Application,
    Proposal_form,
    Living_Trust,
  },
  data() {
    return {
      fullnames: "",
      email: "",
      phone: "",
    };
  },
  created() {
    if (localStorage.getItem("userDate") !== null) {
      let userData = [];
      userData = JSON.parse(localStorage.getItem("userData"));

      this.fullnames = userData.fullnames;
      this.email = userData.email;
      this.phone = userData.mobile;
    }
  },
  methods: {
    Application() {
      this.$router.push("/application");
    },
    Application_Form() {
      this.$router.push("/application_form");
    },

    Living_Trust() {
      this.$router.push("/living_trust");
    },
    Proposal_form() {
      this.$router.push({
        name: "Fill Proposal form",
        params: {
          data: {
            leadName: this.fullnames,
            leadEmail: this.email,
            leadPhone: this.phone,
          },
        },
      });
    },
  },
};
</script>
