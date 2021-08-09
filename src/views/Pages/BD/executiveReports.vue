<template>
  <div>
      
        <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
        <b-row>
            <b-col xl="4" md="3">
                <br><br><br>
                <card>
                    <div align-v="center" slot="header" >
                        <b-col>
                            <h3 class="mb-0">Targets </h3>
                        </b-col>
                    </div>
                    <b-row> 
                    <base-input md="auto">
                        <select class="form-control">
                            <option>Group Level</option>
                            <option>Subsidiary Level</option>
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
                    <b-col class="d-flex justify-content-center mb-3">
                        <base-button type="info">View Performance Report</base-button>
                    </b-col> 
                </card>
            </b-col>
            <b-col xl="4" md="3">
                <br><br><br>
                <card>
                    <div align-v="center" slot="header" >
                        <b-col>
                            <h3 class="mb-0">Assigned Targets </h3>
                        </b-col>
                        <line-chart
                        :height="350"
                        ref="bigChart">
                        </line-chart>
                    </div>
                </card>
            </b-col>
            <b-col xl="4" md="3">
                <br><br><br>
                <card>
                    <div align-v="center" slot="header" >
                        <b-col>
                            <h3 class="mb-0">Actual Performance </h3>
                        </b-col>
                        <line-chart
                        :height="350"
                        ref="bigChart">
                        </line-chart>
                    </div>
                </card>
            </b-col>
            

        </b-row>
    
        </base-header>

</div>

    
</template>


