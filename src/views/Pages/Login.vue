<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Welcome!</h1>
              <p class="text-lead text-white">Welcome at Octagon Africa</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
             <b-card-header class="bg-transparent pb-5">
            
              <div class="text-center">
                <a href="#" class="btn btn-neutral btn-icon mr-4">
                  <img src="img/brand/Octagon_logo.png">
                  
                </a>
                
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
             <div class="alert alert-danger" v-if="model.error">
                {{ model.error }}
              </div>
              <div class="alert alert-success" v-if="model.success">
                {{ model.success }}
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" action=""  method = "get" @submit.prevent="handleSubmit(onSubmit)" >
                  <base-input alternative
                              class="mb-3"
                              name="Username"
                              :rules="{required: true, }"
                              prepend-icon="ni ni-circle-08"
                              placeholder="Username"
                              v-model="model.username">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="Password"
                              v-model="model.password">
                  </base-input>

                  <b-form-checkbox v-model="model.rememberMe">Remember me</b-form-checkbox>
                  <div class="text-center">
                    <base-button type="submit" @click="loginLogic" class="btn btn-primary">Sign in</base-button>
                    <router-link to="/otp" class="text-light"><small>OTP</small></router-link>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <router-link to="/dashboard" class="text-light"><small>Forgot password?</small></router-link>
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/register" class="text-light"><small>Create new account</small></router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import errorCodes from '../../service/errorCodes'
import { loginUser } from '../../api/users.api'
export default {
    data() {
        return {
            model: {
              username: '',
              password: '',
              rememberMe: false,
              error: '',
              success: '',
            },
        };
    },
    methods: {
        async loginLogic() {
          this.model.error = '';
          this.model.success = '';
          let response = '';
           try{
             this.$loading.show({delay:0});
            response = await loginUser(this.model.username, this.model.password);
            console.log(response);
            this.model.success = response.data.message;
           }catch(e){
             this.$loading.hide();
             let respmess = errorCodes.getErrorMessageFromCode(e.response.status);
             this.model.error = respmess;
             throw respmess;
           }
            this.$loading.hide();
           if (response.status === 200){
             let tokenData = {
                userid: response.data.data.user_id,
                fullname: response.data.data.user_full_names,
                username: response.data.data.username,
                oafslmodules:response.data.data.oafsl_modules,
            };
            localStorage.setItem('userData', JSON.stringify(tokenData));
            this.$router.push('/homepage');
           }   
        },
    },
    mounted() {
      if (localStorage.getItem('userData') !== null) {
        this.$router.push('/homepage');
      }
      else{
        this.$router.push('/login');
      }
    },

};
</script>

