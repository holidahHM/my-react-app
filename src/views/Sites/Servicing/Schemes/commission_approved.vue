<template>
<base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <card>
     <div>
  <b-tabs pills>
    <b-tab active>
        <template v-slot:title >
            Pending Commission Approvals
        </template>
        <br>
        <div class="d-flex justify-content-center mb-3" >
            <b-col cols="12">
                <h3 class="mb-0">Commissions Pending Approval </h3>
            </b-col>
        </div>
         <div class="col-sm-12" align="center"> You have no pending Commission Approvals on this system</div> 
    </b-tab>

  </b-tabs>
</div>

  </card>
</base-header>
</template>