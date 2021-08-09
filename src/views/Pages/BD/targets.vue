<template>
  <card>

    <b-form >
      <h6 class="heading-small text-muted mb-4">Pension</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
            style="color:#212529"
              type="text"
              label="Your targets"
              placeholder="Your targets"
              v-model="user.username"
            >
            </base-input>
          </b-col>
          
        </b-row>
        <b-row >
          <b-col lg="6">
            <base-input
              type="text"
              label="Your Incentives"
              placeholder="Your Incentives"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4">

      <h6 class="heading-small text-muted mb-4">Insurance</h6>
        <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Your targets"
              placeholder="Your targets"
              v-model="user.Insurance"
            >
            </base-input>
          </b-col>
          
        </b-row>
        <b-row >
          <b-col lg="6">
            <base-input
              type="text"
              label="Your Incentives"
              placeholder="Your Incentives"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
     
      <hr class="my-4">

      <h6 class="heading-small text-muted mb-4">Trust</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Your targets"
              placeholder="Your targets"
              v-model="user.username"
            >
            </base-input>
          </b-col>
          
        </b-row>
        <b-row >
          <b-col lg="6">
            <base-input
              type="text"
              label="Your Incentives"
              placeholder="Your Incentives"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4">
      <h6 class="heading-small text-muted mb-4">Acturial</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Your targets"
              placeholder="Your targets"
              v-model="user.username"
            >
            </base-input>
          </b-col>
          
        </b-row>
        <b-row >
          <b-col lg="6">
            <base-input
              type="text"
              label="Your Incentives"
              placeholder="Your Incentives"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4">



    </b-form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'Your Targets',
        email: '',
        firstName: 'Your Incentives',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
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
