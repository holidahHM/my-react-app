<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <div align-v="center" slot="header">
        <b-col cols="12" class="d-flex justify-content-center mb-3">
          <img src="img/brand/Blue-Octagon_Logo.png" style="width: 200px; height: 70px" />
        </b-col>
      </div>
      <br />
      <h1 class="d-flex justify-content-center mb-3">
        {{ payload_Data.option.amount }} KSH Duration: 1 Month Motor Private Comprehensive
        by {{ payload_Data.option.name }}
      </h1>
      <br />
      <div class="row">
        <div class="col-sm-6">
          <div class="panel panel-info">
            <div class="panel-heading text-center">
              <h3 class="panel-title">Included Benefits</h3>
            </div>
            <div class="panel-body">
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Third
                Party Persons - Unlimited(Per Person)
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Third
                Party Property Liability - 20,000,000 KSH (Per Event)
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                Passengers Liability - 20,000,000 KSH - Per Event<br />
                5,000,000 KSH - Per Person
              </p>
            </div>
            <!-- panel-body -->
          </div>
          <!-- panel -->
        </div>

        <div class="col-sm-6">
          <div class="panel panel-info-alt">
            <div class="panel-heading text-center">
              <h3 class="panel-title">Excess & Coverage</h3>
            </div>
            <div class="panel-body">
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Third
                Party Property Damage - Deductible: 5,000 KSH (Per Event)
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp;
                Protection against political risks, unrest, and terrorism attacks - Limit:
                2.5% - Of sum insured
              </p>
            </div>
            <!-- panel-body -->
          </div>
          <!-- panel -->
        </div>
      </div>

      <div class="panel-footer text-center">
        <button
          type="button"
          class="btn btn-warning"
          style="width: 30%"
          v-on:click="buynow"
        >
          Buy Now!</button
        ><br /><br />
        <button type="button" class="btn btn-success" style="width: 30%">
          <router-link
            :to="{
              name: 'register',
              params: {
                details: {
                  p_name: p_name,
                  p_email: p_email,
                },
              },
            }"
            >Save for Later</router-link
          >
        </button>
      </div>
      <br />
      <b-row>
        <b-col lg="12">
          <div v-loading="true" id="loading" v-if="checking">
            <p>Submitting request, please wait...</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <div class="justify-content-lg-center">
          <span class="badge badge-pill badge-success" v-if="success">
            Request submitted successfully! <br />kindly be patiant as we process your
            policy certificate.<br />
            In the mean time, kindly check your email for your login credentials generated
            by our system.
          </span>
        </div>
      </b-row>
      <br />
    </card>
  </base-header>
</template>
<script>
import httpClient from "../../api/httpClient";
export default {
  data() {
    return {
      checking: false,
      success: false,
      payload: [],
      payload_Data: {
        option: [],
        carData: [],
      },
    };
  },
  created() {
    this.payload_Data.carData = this.$route.params.cardet.comprehensive;
    this.payload_Data.option = this.$route.params.cardet.selected;
  },
  methods: {
    async buynow() {
      var stringjson = JSON.stringify(this.payload_Data);
      // console.log("json easy cover object", JSON.parse(stringjson));

      console.log("payload data", stringjson);
      let response = "";
      this.checking = true;
      try {
        response = await httpClient.post("/users", stringjson);
        console.log("easy cover", response);
        console.log("payload data", this.payload_Data);
        this.checking = false;
      } catch (e) {
        this.checking = false;
        this.success = false;
        console.log("Easy cover error", e);
      }

      this.checking = false;
      this.success = false;
      if (response.status === 200) {
        this.success = true;
      }
    },
  },
};
</script>
