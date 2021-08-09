<template>
    <div>
        
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
        <b-breadcrumb class="breadcrumb-links bg-gradient-success text-white pt--10" style="font-size:15px;">
            <b-breadcrumb-item href="#home" class="text-white">Home</b-breadcrumb-item>
            <b-breadcrumb-item href="#/member_elections" class="text-white">Elections</b-breadcrumb-item>
            <b-breadcrumb-item href="#library" class="text-white" active>Election Details</b-breadcrumb-item>
        </b-breadcrumb>
        <b-row>
            <b-col xl="6">
                <card>
                    <div align-v="center" slot="header" >
                    <b-col>
                        <h3 class="mb-0">Elections Details</h3>
                    </b-col>
                    </div>
                    <div style="overflow: scroll;"> 
                       <table class="table table-stripped">
                            <tbody id="myTable">
                                <tr>
                                    <td><b>Election Title</b></td>
                                    <td>TEST ELECTION 2020</td>
                                </tr>
                                <tr>
                                    <td><b>Election Type</b></td>
                                    <td>Member Elected Trustee Election (1 position)</td>
                                </tr>
                                <tr>
                                    <td><b>Election Status</b></td>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <td><b>Voting Period</b></td>
                                    <td>08:00 AM 31st Aug, 2020 - 05:00 PM 30th Sep, 2020</td>
                                </tr>
                                
                            </tbody>
                            </table>
                    </div>
                </card>
                <br><br>
                <card>
                    <div align-v="center" slot="header" >
                    <b-col>
                        <h3 class="mb-0">Elections Tally</h3>
                    </b-col>
                    </div>
                    <div>
                       <table class="table table-stripped">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Candidate Name</th>
                                    <th scope="col">Votes</th>
                                    <th scope="col">Status</th >
                                </tr>
                            </thead>
                            <tbody id="myTable" v-for="member in members" :key="member.image">
                                <tr>
                                    <td><b>{{member.name}}</b></td>
                                    <td>{{member.status}}</td>
                                    <td><b-badge class="badge-md" :variant="`${member.statusType}`">{{member.vote}}</b-badge></td>
                                </tr>
                                
                            </tbody>
                            </table>
                    </div>
                    <br><br>
                    <div>
                       <table class="table table-stripped">
                            <tbody id="myTable">
                                <tr>
                                    <td><b>Spoilt Votes</b></td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td><b>Total Votes</b></td>
                                    <td>72</td>
                                </tr>
                                
                            </tbody>
                            </table>
                    </div>
                </card>
            </b-col>
            <b-col xl="6" md="3">
               <card>
                   <div align-v="center" slot="header" >
                    <b-col>
                        <h3 class="mb-0">Voting Area</h3>
                    </b-col>
                    </div>

                    <table class="table table-stripped">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Candidate Image</th>
                                <th scope="col">Candidate Name</th>
                                <th scope="col">Choose</th >
                            </tr>
                        </thead>
                        <tbody id="myTable" v-for="member in members" :key="member.image">

                                <tr class="pt-5">
                                    <td class="avatar   px-0"><b-img rounded="circle" alt="Image placeholder" :src="member.image" /></td>
                                    <td>{{member.name}}</td>
                                    <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                                    
                                </tr>
                        </tbody>
	                </table>
                    
                     <hr class="my-4">
                    <b-row class="d-flex justify-content-center mb-3"  >
                    
                        <base-button type="success">Vote</base-button>
                    
                    </b-row>
                               


               </card> 
            </b-col>
        </b-row>
        <br><br>
        
        </base-header>
    </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
      },
      i_f_name:'', //i stands for internal
      i_l_name:'',
      i_email:'',
      user:'',
      user_zone:'',
      user_accessto:''
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  },
   data() {
      return {
        membersSearch: '',
        members: [
          {
            name: 'John Michael',
            status: '20',
            vote:'won',
            statusType: 'success',
            image: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-1.jpg'
          },
          {
            name: 'Alex Smith',
            status: '10',
            vote:'lost',
            statusType: 'warning',
            image: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-2.jpg'
          },
          {
            name: 'Samantha Ivy',
            status: '15',
            vote:'lost',
            statusType: 'warning',
            image: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-3.jpg'
          },
          {
            name: 'John Michael',
            status: '13',
            vote:'lost',
            statusType: 'warning',
            image: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg'
          }
        ]
      }
    }
    
};

   
</script>

<style></style>