<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <stats-card title="" type="gradient-green" sub-title="" class="mb-4">
      <template slot="footer">
        <div class="mt-3">
          <div class="row">
            <b-col lg="4">
                    <base-input
                      type="text"
                      label="Prospect Name"
                      placeholder=""
                      id="example-date-input"
                      v-model="i_f_name"
                    >
                    </base-input>
                  </b-col>
            <b-col lg="4">
                    <base-input
                      type="text"
                      label="Prospect Phone No"
                      placeholder=""
                      id="example-date-input"
                      v-model="i_f_name"
                    >
                    </base-input>
                  </b-col>
           <b-col lg="4">
                    <base-input
                      type="text"
                      label="Prospect Email"
                      placeholder=""
                      id="example-date-input"
                      v-model="i_f_name"
                    >
                    </base-input>
                  </b-col>
          </div><br>
          <div class="row">
            <b-col lg="4">
                    <base-input
                      type="text"
                      label="Contact Name"
                      placeholder=""
                      id="example-date-input"
                      v-model="i_f_name"
                    >
                    </base-input>
                  </b-col>
            <b-col lg="4">
                    <base-input
                      type="text"
                      label="Contact Phone No"
                      placeholder=""
                      id="example-date-input"
                      v-model="i_f_name"
                    >
                    </base-input>
                  </b-col>
           <b-col lg="4">
                    <base-input
                      type="text"
                      label="Contact Email"
                      placeholder=""
                      id="example-date-input"
                      v-model="i_f_name"
                    >
                    </base-input>
                  </b-col>
          </div>
          <div class="row">
           <b-col lg="4">
                    <base-input
                      type="date"
                      label="Date of Contact"
                      placeholder=""
                      id="example-date-input"
                      v-model="dob"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="4">
            <base-input
              label="Business"
              placeholder=""
            >
            <select v-model="user_zone" class="form-control">
                <option>Insurance</option>
                <option>Trust</option>
                <option>Pension</option>
            </select>
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              label="Product"
              placeholder=""
            >
            <select v-model="user_zone" class="form-control">
                <option>Motor</option>
                <option>Easy Cover</option>
                <option>Medical (PRMS)</option>
            </select>
            </base-input>
          </b-col></div>
           <div class="row">
           <b-col lg="4">
                    <base-input
                      type="test"
                      label="Business Value"
                      placeholder=""
                      id="example-date-input"
                      v-model="dob"
                    >
                    </base-input>
                  </b-col>
                 <b-col lg="8">
                    <base-input
                      type="test"
                      label="Remarks"
                      placeholder=""
                      id="example-date-input"
                      v-model="dob"
                    >
                    </base-input>
                  </b-col></div><br>
           <b-col class="col-md-3">
                    <b-button-group>
                      <b-button variant="success"><router-link to='/your-prospect'>Save</router-link>
                      </b-button
                      >
                    </b-button-group>
                  </b-col>
          <br /></div
      ></template>
    </stats-card>
   
  </base-header>
</template>

<script>
//import { updateSingleMember } from "../../../../api/users.api";
//import Card from "../../../../components/Cards/Card.vue";
export default {
  components: {  },
  name: "Test",
  props: {
    msg: String,
  },
  name: "Test",
  data() {
    return {
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    async updateUser() {
      let response = "";
      try {
        this.updatingUser = true;
        response = await updateSingleMember(
          this.clientID,
          this.i_f_name,
          this.postaddress,
          this.krapinn,
          this.userEmail,
          this.phonenumber,
          this.dob,
          this.idnumber,
          this.userstatus,
          this.physicaladdress
        );
        console.info("updatemember", response);
      } catch (e) {
        this.updatingUser = false;
        console.error("error", e);
        this.$toast.error("Failed! Try again", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: false,
          closeButton: "button",
          icon: true,
          rtl: false,
        });

        this.$router.push("/Members2");
      }
    },
  },
}
</script>
<style></style>
