<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <b-row>
        <b-col lg="6">
          <base-input
            type="date"
            label="Start Period"
            placeholder="Start Period"
            id="example-date-input"
            v-model="statement_s_date"
          >
          </base-input>
        </b-col>
        <b-col lg="6">
          <base-input
            type="date"
            label="End Period"
            placeholder="End period"
            id="example-date-input"
            v-model="statement_e_date"
          >
          </base-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-md-3">
          <b-button-group>
            <b-button variant="info">Detailed statement</b-button>
          </b-button-group>
        </b-col>
        <b-col class="col-md-3">
          <b-button-group>
            <b-button variant="info">Summarized statement</b-button>
          </b-button-group>
        </b-col>
      </b-row>
    </card>
  </base-header>
</template>

<script>
import Members from "../Members/Members";
export default {
  comments: {
    Members,
  },
  data() {
    return {
      user: {},
      i_f_name: "", //i stands for internal
      i_l_name: "",
      i_email: "",
      statement_s_date: "",
      statement_e_date: "",
      user_zone: "",
      user_accessto: "",
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    Members() {
      this.$router.push("/members");
    },
  },
};
</script>
<style></style>
