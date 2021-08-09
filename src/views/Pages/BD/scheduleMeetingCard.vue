<template>

  <card>

    <div>
  <b-tabs pills>
    <b-tab active>
        <template v-slot:title >
            Schedule Meeting
        </template>
        <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0 " >Schedule Meeting </h3>
            </b-col>
        </div>
        <br>
      
      <b-form @submit.prevent="newLead">

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="12">
            <base-input
              label="Select Lead"
              v-model="user.lead"
            >
            <select class="form-control">
                <option>Select Lead</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="8">
            <base-input
              type="date"
              label="Meeting Date"
              placeholder=""
              id="example-date-input"
              v-model="user.date"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="time"
              label="Start Time"
              placeholder="Start Time"
              id="example-time-input"
              v-model="user.starttime"
            >
            </base-input>
          </b-col>
         <b-col lg="6">
            <base-input
              type="time"
              label="End Time"
              placeholder="End Time"
              id="example-time-input"
              v-model="user.endtime"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12">
            <base-input
              type="text"
              label="Venue"
              placeholder="Venue"
              v-model="user.venue"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="12">
            <b-form-group label="Meeting Details" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
            <!--  <label class="form-control-label">About Me</label> -->
            <b-form-textarea rows="4" value="" id="about-form-textaria" placeholder="Enter details regarding the meeting"></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <br>
      <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button type="success">Save Meeting</base-button>
        
        </b-row>
        <hr class="my-4">

    </b-form>
      
    </b-tab>

    <b-tab>
      <template v-slot:title >
         Request for funds
      </template>
      <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Request for funds </h3>
            </b-col>
        </div>
        <br>
      <b-form @submit.prevent="ExistingProspect">

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="12">
            <base-input
              label="Select Meeting"
              v-model="user.Meeting"
            >
            <select class="form-control">
                <option>Select Meeting</option>
            </select>
            </base-input>
          </b-col>
        </b-row>
        <b-row>
            <b-col lg="8">
            <base-input
              type="date"
              label="Date of Expense"
              placeholder="Date of Expense"
              id="example-date-input"
              v-model="user.date"
            >
            </base-input>
          </b-col>
          </b-row>
        <b-row>
            <b-col lg="8">
                <base-input
                type="text"
                label="Approver "
                placeholder="Approver"
                v-model="user.Approver"
                >
                </base-input>
          </b-col>
        </b-row>
        <b-row>
            <b-col lg="8">
                <base-input
                type="text"
                label="Title"
                placeholder="Title"
                v-model="user.Title"
                >
                </base-input>
          </b-col>
        </b-row>
        <hr class="my-4">
        <h6 class="heading-small text-muted mb-4">Breakdown your expense</h6>
        <b-row>
            <b-col lg="4">
            <base-input
              label="Category"
              v-model="user.category"
            >
            <select class="form-control">
                <option>Transport</option>
                <option>Airtime</option>
                <option>Meals</option>
                <option>Accomodation</option>
                <option>Entertainment</option>
                <option>Tender</option>
                <option>Tender Security</option>
                <option>Legal</option>
            </select>
            </base-input>
          </b-col>
         <b-col lg="4">
            <base-input
              type="text"
              label="Amount"
              placeholder="Amount"
              v-model="user.Amount"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <b-form-group label="Basis of Amount" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
            <!--  <label class="form-control-label">About Me</label> -->
            <b-form-textarea rows="4" value="" id="about-form-textaria" placeholder=""></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        
      </div>
      <br>
      <b-row class="d-flex justify-content-center mb-3"  >
        
            <base-button type="success">Save & Send Requisition</base-button>
        
        
        </b-row>
        <hr class="my-4">

    </b-form>
      
    </b-tab>

   
  </b-tabs>
</div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style></style>
