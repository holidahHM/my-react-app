<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <div class="row">
        <div class="col-sm-4">
          <div class="panel panel-info">
            <div class="panel-heading text-center">
              <h3 class="panel-title">OPTION 1</h3>
            </div>
            <div class="row" style="border-bottom: 1px solid #eee; height: 80px">
              <h1 style="width: 100%; text-align: center">Ksh. {{ option1 }}</h1>
            </div>
            <div class="panel-body">
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Kshs.
                100,000 Sum assured for Principal member, Spouse and Children (Max 4)
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Kshs.
                50,000 Sum assured for Parents and parents in law
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; 18-80
                Years age limit for Principal member, Spouse, parents & parents in law
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; 1-24
                years age limit for children
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Kshs
                500 for any additional Child
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Kshs.
                2,500 for additional age from 81-90 years for Kshs. 50,000 Sum assured
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; 1
                Death only in a policy year per family
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Covers
                up to 10 family members
              </p>
            </div>
            <!-- panel-body -->
            <div class="panel-footer text-center">
              <button type="button" class="btn btn-info" style="width: 80%" id="buy_1">
                <router-link
                  :to="{
                    name: 'Joining Form',
                    params: {
                      data: {
                        option: '3,700',
                        leadDetails,
                      },
                    },
                  }"
                  >Buy Cover!</router-link
                >
              </button>
            </div>
          </div>
          <!-- panel -->
        </div>

        <div class="col-sm-4">
          <div class="panel panel-info-alt">
            <div class="panel-heading text-center">
              <h3 class="panel-title">OPTION 2</h3>
            </div>
            <div class="row" style="border-bottom: 1px solid #eee; height: 80px">
              <h1 style="width: 100%; text-align: center">Ksh. {{ option2 }}</h1>
            </div>
            <div class="panel-body">
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Kshs.
                200,000 Sum assured for Principal member, Spouse and Children (Max 4)
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Kshs.
                50,000 Sum assured for Parents and parents in law
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; 18-80
                Years age limit for Principal member, Spouse, parents & parents in law
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; 1-24
                years age limit for children
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Kshs
                1000 for any additional Child
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Kshs.
                2,500 for additional age from 81-90 years for Kshs. 50,000 Sum assured
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; 1
                Death only in a policy year per family
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Covers
                up to 10 family members
              </p>
            </div>
            <!-- panel-body -->
            <div class="panel-footer text-center">
              <button type="button" class="btn btn-info" style="width: 80%" id="buy_2">
                <router-link
                  :to="{
                    name: 'Joining Form',
                    params: {
                      data: {
                        option: '5,500',
                        leadDetails,
                      },
                    },
                  }"
                  >Buy Cover!</router-link
                >
              </button>
            </div>
          </div>
          <!-- panel -->
        </div>

        <div class="col-sm-4">
          <div class="panel panel-primary">
            <div class="panel-heading text-center">
              <h3 class="panel-title">OPTION 3</h3>
            </div>
            <div class="row" style="border-bottom: 1px solid #eee; height: 80px">
              <h1 style="width: 100%; text-align: center">Ksh. {{ option3 }}</h1>
            </div>
            <div class="panel-body">
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Kshs.
                200,000 Sum assured for Principal member, Spouse and Children (Max 4)
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Kshs.
                100,000 Sum assured for Parents and parents in law
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; 18-80
                Years age limit for Principal member, Spouse, parents & parents in law
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; 1-24
                years age limit for children
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Kshs
                1000 for any additional Child
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Kshs.
                2,500 for additional age from 81-90 years for Kshs. 50,000 Sum assured
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; 1
                Death only in a policy year per family
              </p>
              <p>
                <i class="fa fa-check" style="color: green"></i> &nbsp;&nbsp;&nbsp; Covers
                up to 10 family members
              </p>
            </div>
            <!-- panel-body -->
            <div class="panel-footer text-center">
              <button type="button" class="btn btn-info" style="width: 80%" id="buy_3">
                <router-link
                  :to="{
                    name: 'Joining Form',
                    params: {
                      data: {
                        option: '7,500',
                        leadDetails,
                      },
                    },
                  }"
                  >Buy Cover!</router-link
                >
              </button>
            </div>
          </div>
          <!-- panel -->
        </div>
      </div>
    </card>
  </base-header>
</template>
<script>
import Eazy_Cover_Joining from "../Easy Cover/Eazy_Cover_Joining";
export default {
  comments: {
    Eazy_Cover_Joining,
  },
  data() {
    return {
      leadDetails: { Prospect_name: "", prospect_email: "", prospect_phone: "" },
    };
  },
  created() {
    this.leadDetails.prospect_email = this.$route.params.data.leadEmail;
    this.leadDetails.prospect_name = this.$route.params.data.leadName;
    this.leadDetails.prospect_phone = this.$route.params.data.leadPhone;
  },
  methods: {
    Eazy_Cover_Joining() {
      this.$router.push("/eazy_cover_joining");
    },
  },
};
</script>
