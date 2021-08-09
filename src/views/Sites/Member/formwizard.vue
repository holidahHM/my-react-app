<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
    <form-wizard>
        <tab-content title="Step 1" :selected="true">
            <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" class="form-control" placeholder="Enter your name" v-model="email">
            </div>
        </tab-content>
        <tab-content title="Step 2"> 
            <div class="form-group">
                <label for="companyName">Your Company Name</label>
                <input type="text" class="form-control" placeholder="Enter your Company / Organization name" v-model="companyName">
            </div>
        </tab-content>
        <tab-content title="Step 3">
            <div class="form-group">
                <label for="referral">From Where did you hear about us</label>
                <select class="form-control" v-model="referral">
                    <option>Newspaper</option>
                    <option>Online Ad</option>
                    <option>Friend</option>
                    <option>Other</option>
                </select>
            </div>
        </tab-content>
         <tab-content title="Step 4">
            <div class="form-group">
                <label for="referral">From Where did you hear about us</label>
                <select class="form-control" v-model="referral">
                    <option>Newspaper</option>
                    <option>Online Ad</option>
                    <option>Friend</option>
                    <option>Other</option>
                </select>
            </div>
        </tab-content>
         <tab-content title="Step 5">
            <div class="form-group">
                <label for="referral">From Where did you hear about us</label>
                <select class="form-control" v-model="referral">
                    <option>Newspaper</option>
                    <option>Online Ad</option>
                    <option>Friend</option>
                    <option>Other</option>
                </select>
            </div>
        </tab-content>
        <tab-content title="Step 5">
            <div class="form-group">
                <label for="referral">From Where did you hear about us</label>
                <select class="form-control" v-model="referral">
                    <option>Newspaper</option>
                    <option>Online Ad</option>
                    <option>Friend</option>
                    <option>Other</option>
                </select>
            </div>
        </tab-content>
        <tab-content title="Step 5">
            <div class="form-group">
                <label for="referral">From Where did you hear about us</label>
                <select class="form-control" v-model="referral">
                    <option>Newspaper</option>
                    <option>Online Ad</option>
                    <option>Friend</option>
                    <option>Other</option>
                </select>
            </div>
        </tab-content>
        <tab-content title="Step 5">
            <div class="form-group">
                <label for="referral">From Where did you hear about us</label>
                <select class="form-control" v-model="referral">
                    <option>Newspaper</option>
                    <option>Online Ad</option>
                    <option>Friend</option>
                    <option>Other</option>
                </select>
            </div>
        </tab-content>
        <tab-content title="Step 5">
            <div class="form-group">
                <label for="referral">From Where did you hear about us</label>
                <select class="form-control" v-model="referral">
                    <option>Newspaper</option>
                    <option>Online Ad</option>
                    <option>Friend</option>
                    <option>Other</option>
                </select>
            </div>
        </tab-content>
        <tab-content title="Step 5">
            <div class="form-group">
                <label for="referral">From Where did you hear about us</label>
                <select class="form-control" v-model="referral">
                    <option>Newspaper</option>
                    <option>Online Ad</option>
                    <option>Friend</option>
                    <option>Other</option>
                </select>
            </div>
        </tab-content>
    </form-wizard>
  </card>
</base-header>
</template>

<script>
import {FormWizard, TabContent} from 'vue-step-wizard'
import "vue-step-wizard/dist/vue-step-wizard.css";





import { required } from 'vuelidate/lib/validators';


    import { email } from 'vuelidate/lib/validators';
    import { numeric } from 'vuelidate/lib/validators';
    
    validationRules:[
        {fullName: {required}, email: {required, email} },  //Validation Rules for step 1
        {companyName: {required}, numberOfEmployees: {required, numeric} },   //Validation for step 2
        {referral: {required}, terms: {required, numeric} }   //Validation for step 3
    ]


export default {
    name: 'BasicStepperForm',
    components: {
        FormWizard, TabContent
    },
    data(){
        return {
            email: '',
            companyName: '',
            referral: '',
        }
    },
}

</script>