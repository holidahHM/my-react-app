<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <b-row>
        <b-col lg="6">
          <base-input
            type="text"
            label="Member Name"
            placeholder="Member Name" readonly
            id="example-date-input"
            v-model="member_name"
          >
          </base-input>
        </b-col>
        <b-col lg="6">
          <base-input
            type="text"
            label="Date of Birth"
            placeholder="Date of Birth"
            id="example-date-input"
            v-model="member_dob"
          >
          </base-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="6">
          <base-input
            type="integer"
            label="Member Number"
            placeholder="Member Number" raedonly
            id="example-date-input"
            v-model="member_number"
          >
          </base-input>
        </b-col>
        <b-col lg="6">
          <base-input
            type="text"
            label="KRA Pin"
            placeholder="KRA Pin"
            id="example-date-input"
            v-model="member_pin"
          >
          </base-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="6">
          <base-input
            type="integer"
            label="Phone No"
            placeholder="Phone No"
            id="example-date-input"
            v-model="member_phone"
          >
          </base-input>
        </b-col>
        <b-col lg="6">
          <base-input
            type="integer"
            label="Physical Address"
            placeholder="Physical Address"
            id="example-date-input"
            v-model="member_physical_address"
          >
          </base-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="6">
          <base-input
            type="text"
            label="Employer"
            placeholder="Employer"
            id="example-date-input"
            v-model="member_employer"
          >
          </base-input>
        </b-col>
        <b-col lg="6">
          <base-input
            type="mail"
            label="Email"
            placeholder="Email"
            id="example-date-input"
            v-model="i_email"
          >
          </base-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="6">
          <base-input
            type="text"
            label="ID Number"
            placeholder="ID Number"
            id="example-date-input"
            v-model="member_id_number"
          >
          </base-input>
        </b-col>
        <b-col lg="6">
          <base-input
            type="text"
            label="Payroll Number"
            placeholder="Payroll Number"
            id="example-date-input"
            v-model="member_payroll"
          >
          </base-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-md-3">
          <b-button-group>
            <b-button @click="Members()" variant="info">Save</b-button>
          </b-button-group>
        </b-col>
      </b-row>
    </card>
  </base-header>
</template>

<script>
import { getSingleMember } from "../../../../api/users.api";
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
      user_zone: "",
      member_number: "",
      user_accessto: "",
      member_id_number: "",
      member_employer: "",
      member_physical_address: "",
      member_pin: "",
      member_dob: "",
      member_name: "",
      member_phone: "",
      member_payroll: "",
      memberDet: [],
    };
  },
  created() {
    this.member_number = this.$route.params.clientid;
  },
  async mounted() {
    let response = "";
    try {
      this.$loading.show({ delay: 0 });
      response = await getSingleMember(this.member_number);
      console.info("member", response.data.data);
      this.memberDet = response.data.data;
    } catch (e) {
      this.$loading.hide();
      console.error("error", e);
      this.$toast.error("Failed! Refresh the page", {
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
    }
    this.$loading.hide();

    if (response.status === 200) {
      this.$toast.success("Member retrieved", {
        position: "top-right",
        timeout: 3000,
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
      for (let item in this.memberDet) {
        this.member_name = this.memberDet[item].Name;
        this.member_dob = this.memberDet[item].DOB.date;
        this.member_id_number = this.memberDet[item].IDNO;
        this.i_email = this.memberDet[item].Email;
        this.member_phone = this.memberDet[item].Mobile;
        this.member_pin = this.memberDet[item].PINNO;
        this.member_physical_address =
          this.memberDet[item].Address + " " + this.memberDet[item].Town;
      }
    }

    //this.i_f_name = this.memberDet.Name;
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
