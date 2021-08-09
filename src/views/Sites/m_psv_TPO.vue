<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <br />
      <div>
        <b-row
          ><b-col class="col-md-12">
            <div class="col-xl-12 alert alert-info">
              <h5>Available products for Taxi Passenger Carrying PSV TPO</h5>
            </div>
          </b-col></b-row
        >
        <b-row>
          <b-col class="col-md-12">
            <div class="table-responsive">
              <table class="table table-bordered mb30">
                <thead></thead>

                <tbody>
                  <tr v-for="i in option1">
                    <td>
                      <strong>{{ i.name }} </strong>
                    </td>
                    <td>Kshs {{ i.amount }} per month</td>
                    <td>
                      <b-form-radio
                        v-model="selected"
                        :aria-describedby="ariaDescribedby"
                        :value="i"
                      >
                      </b-form-radio>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-col>
        </b-row>
        <br />
        <b-row>
          <div>
            <button type="button" class="btn btn-success">
              <router-link
                :to="{
                  name: 'motor tpo details',
                  params: {
                    cardet: {
                      taxiThirParty: $route.params.cardet,
                      selected,
                    },
                  },
                }"
                >Next</router-link
              >
            </button>
          </div>
        </b-row>
      </div>
    </card>
  </base-header>
</template>
<script>
export default {
  data() {
    return {
      option1: [
        { name: "Kenya Orient", amount: "999" },
        { name: "Pioneer Insurance", amount: "4600" },
        { name: "CIC", amount: "5600" },
      ],
      selected: [],
    };
  },
  methods: {
    select() {
      for (let i in this.option1) {
        this.selected.push(this.option1[i]);
      }
    },
  },
};
</script>
