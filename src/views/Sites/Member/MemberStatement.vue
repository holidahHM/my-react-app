<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
    
    <div align-v="center" slot="header" >
      <b-col cols="12">
        <h3 class="mb-0">Member Statement </h3>
      </b-col>
    </div>

    <b-form @submit.prevent="updateProfile">

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              label="Select Period"
            >
            <select class="form-control">
                <option>JAN-DEC 2020</option>
                <option>JAN-DEC 2019</option>
                <option>JAN-DEC 2018</option>
                <option>JAN-DEC 2017</option>
            </select>
            </base-input>
          </b-col>
          <b-col lg="6" class="pb-8 pt-4 pt-md-4">
              <router-link to="">
            <base-button type="info">Generate Statement</base-button>
            </router-link>
          </b-col>
        </b-row>
      </div>


    </b-form>
  </card>
</base-header>
</template>
