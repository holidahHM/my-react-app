<template>
<div>
    <b-row>
        <b-col xl="6" md="3">
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
                            <base-button type="info">View Assigned Targets</base-button>
                        </b-col>
            </card>
        </b-col>
        <b-col xl="6" md="3">
            <card>
                <div align-v="center" slot="header" >
                    <b-col>
                        <h3 class="mb-0">Incentives </h3>
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
                    <base-input md="auto">
                    <select class="form-control">
                        <option>Pension</option>
                        <option>Trust</option>
                        <option>Acturial Service</option>
                        <option>Insurance</option>
                    </select>
                </base-input>
                </b-row>
                <b-col class="d-flex justify-content-center mb-3">
                        <base-button type="info">View Assigned Incentives</base-button>
                    </b-col> 
            </card>
        </b-col>
    </b-row>
    <br><br>
    <b-col>
    <base-button type="success">Assign New Targets</base-button>
    <br><br>
</b-col>
<b-col> 
    <base-button type="success">Assign New Incentives</base-button>
</b-col>
<br><br>
</div>
    
</template>