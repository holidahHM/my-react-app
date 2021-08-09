<template>
  <div>
      
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
        <b-row>
            <div>
                <div align-v="center" slot="header" >
                    <b-col cols="6">
                        <h4 class="mb-0">Overview</h4>
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
            <br><br>
            <b-col>
                <base-button type="info">Assign New Targets</base-button>
                <br><br>
            </b-col>
            <b-col> 
                <base-button type="info">Assign New Incentives</base-button>
            </b-col>  

            </div>
            
            <b-col xl="6" md="3">
                <br><br><br>
                <card>
                    <div align-v="center" slot="header" >
                        <b-col>
                            <h3 class="mb-0">Organizational Performance </h3>
                        </b-col>
                        <line-chart
                        :height="350"
                        ref="bigChart">
                        </line-chart>
                    </div>
                    <b-row>
                    <b-col md="auto">
                        <base-button type="info">Change View</base-button>
                    </b-col>    
                    <base-input md="auto">
                        <select class="form-control">
                            <option>Departmental</option>
                            <option>Sub Departmental</option>
                            <option>Individual</option>
                        </select>
                    </base-input>
                     <base-input>
                        <select class="form-control">
                            <option>Pension</option>
                            <option>Trust</option>
                            <option>Acturial Service</option>
                            <option>Insurance</option>
                        </select>
                    </base-input>
                    </b-row>
                </card>
            </b-col>
            

        </b-row>
    
        </base-header>

</div>

    
</template>


