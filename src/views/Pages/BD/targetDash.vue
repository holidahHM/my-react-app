<template>
  <div>
      
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
        <b-row>
            <div>
                <div align-v="center" slot="header" >
                    <b-col cols="6">
                        <h4 class="mb-0">Your Targets and Incentives</h4>
                    </b-col>
                </div>
                <br><br>
                <b-row>
                <b-col xl="6" md="2">
                <stats-card title="Total traffic"
                            type="gradient-red"
                            sub-title="350,897"
                            icon="ni ni-active-40"
                            class="mb-4">

                    <template slot="footer">
                    <span class="text-success mr-2">3.48%</span>
                    <span class="text-nowrap">Since last month</span>
                    </template>
                </stats-card>
                </b-col>
                <b-col xl="6" md="2">
                <stats-card title="Total traffic"
                            type="gradient-orange"
                            sub-title="2,356"
                            icon="ni ni-chart-pie-35"
                            class="mb-4">

                    <template slot="footer">
                    <span class="text-success mr-2">12.18%</span>
                    <span class="text-nowrap">Since last month</span>
                    </template>
                </stats-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col xl="6" md="2">
                <stats-card title="Sales"
                            type="gradient-green"
                            sub-title="924"
                            icon="ni ni-money-coins"
                            class="mb-4">

                    <template slot="footer">
                    <span class="text-danger mr-2">5.72%</span>
                    <span class="text-nowrap">Since last month</span>
                    </template>
                </stats-card>

                </b-col>
                <b-col xl="6" md="2">
                <stats-card title="Stats"
                            type="gradient-info"
                            sub-title="49,65%"
                            icon="ni ni-chart-bar-32"
                            class="mb-4">

                    <template slot="footer">
                    <span class="text-success mr-2">54.8%</span>
                    <span class="text-nowrap">Since last month</span>
                    </template>
                </stats-card>
                </b-col>
            </b-row>  

            </div>
            <b-col xl="6" md="3">
                <br><br><br>
                <card>
                    <div align-v="center" slot="header" >
                        <b-col>
                            <h3 class="mb-0">Your Performance </h3>
                        </b-col>
                        <div class="chart">
                            <pie-chart
                                id="pie-chart"
                                :height="350"
                            >
                            </pie-chart>
                        </div>
                    </div>
                </card>
            </b-col>
            

        </b-row>
    
        </base-header>
        <div class="pb-6 pb-8 pt-5  bg-gradient-success">
            <b-row class="d-flex justify-content-center mb-3">
                <b-col xl="8" md="8">
                    <card>
                        <div align-v="center" slot="header" >
                            <b-col cols="6">
                                <h3 class="mb-0">Targets and Incentives</h3>
                            </b-col>
                        </div>
                        <b-list-group>
                            <b-list-group-item>
                                <b-row>
                                    <b-col md="auto">
                                        <h4>
                                            Your Targets and Incentives
                                        </h4>
                                    </b-col>
                                    <b-col md="auto">
                                        <router-link to="/BD_targets_Incentives">
                                            <base-button type="info">View</base-button>
                                        </router-link>
                                    </b-col>
                                </b-row>
                            </b-list-group-item>
                        </b-list-group>
                    </card>
                </b-col>
                
                <b-col xl="5" md="6">
                </b-col>
            </b-row>
             
        </div>   
        <br><br>

</div>

    
</template>


