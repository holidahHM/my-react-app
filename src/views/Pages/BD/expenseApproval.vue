<template>

  <card>
    <div align-v="center" slot="header" >
      <b-col cols="12">
        <h3 class="mb-0">Your Requisitions </h3>
      </b-col>
    </div>

    <b-row class="float-right pb-4">
	
			<b-col >
        <div>
          <div>
  <base-button id="show-btn" @click="$bvModal.show('bv-modal-example')" type="info">Request Funds</base-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      Request Fund
    </template>
    <div class="">
      <b-form>

              <div class="pl-lg-1">
                <b-row>
                  <b-col lg="12">
                    <base-input
                      label="Select Meeting"
                    >
                    <select class="form-control">
                        <option>Select Meeting</option>
                    </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                    <b-col lg="8">
                    <base-input
                      type="date"
                      label="Date of Expense"
                      placeholder="Date of Expense"
                      id="example-date-input"
                    >
                    </base-input>
                  </b-col>
                  </b-row>
                <b-row>
                    <b-col lg="8">
                        <base-input
                        type="text"
                        label="Approver "
                        placeholder="Approver"
                        >
                        <select class="form-control">
                        <option>Approver Name</option>
                    </select>
                        </base-input>
                  </b-col>
                </b-row>
                <b-row>
                    <b-col lg="8">
                        <base-input
                        type="text"
                        label="Title" 
                        placeholder="Title"
                        >
                        </base-input>
                  </b-col>
                </b-row>
                <hr class="my-4">
                <h6 class="heading-small text-muted mb-4">Breakdown your expense</h6>
                <b-row>
                    <b-col lg="4">
                    <base-input
                      label="Category"
                    >
                    <select class="form-control">
                        <option>Transport</option>
                        <option>Airtime</option>
                        <option>Meals</option>
                        <option>Accomodation</option>
                        <option>Entertainment</option>
                        <option>Tender</option>
                        <option>Tender Security</option>
                        <option>Legal</option>
                    </select>
                    </base-input>
                  </b-col>
                <b-col lg="4">
                    <base-input
                      type="text"
                      label="Amount"
                      placeholder="Amount"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="4">
                    <b-form-group label="Basis of Amount" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
                   <!--  <label class="form-control-label">About Me</label> -->
                    <b-form-textarea rows="4" value="" id="about-form-textaria" placeholder=""></b-form-textarea>
                    </b-form-group>
                  </b-col>
                </b-row>
                
              </div>
              <br>
                <hr class="my-4">
            </b-form>
    </div>
    <base-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')" type="success">Save & Send Requisition</base-button>
  </b-modal>


  <b-modal id="edit-modal" hide-footer>
    <template #modal-title>
      Edit fund request
    </template>
    <div class="">
      <b-form>

              <div class="pl-lg-1">
                <b-row>
                  <b-col lg="12">
                    <base-input
                      label="Select Meeting"
                    >
                    <select class="form-control">
                        <option>Select Meeting</option>
                    </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                    <b-col lg="8">
                    <base-input
                      type="date"
                      label="Date of Expense"
                      placeholder="Date of Expense"
                      id="example-date-input"
                    >
                    </base-input>
                  </b-col>
                  </b-row>
                <b-row>
                    <b-col lg="8">
                        <base-input
                        type="text"
                        label="Approver "
                        placeholder="Approver"
                        >
                        <select class="form-control">
                        <option>Approver Name</option>
                    </select>
                        </base-input>
                  </b-col>
                </b-row>
                <b-row>
                    <b-col lg="8">
                        <base-input
                        type="text"
                        label="Title" 
                        placeholder="Title"
                        >
                        </base-input>
                  </b-col>
                </b-row>
                <hr class="my-4">
                <h6 class="heading-small text-muted mb-4">Breakdown your expense</h6>
                <b-row>
                    <b-col lg="4">
                    <base-input
                      label="Category"
                    >
                    <select class="form-control">
                        <option>Transport</option>
                        <option>Airtime</option>
                        <option>Meals</option>
                        <option>Accomodation</option>
                        <option>Entertainment</option>
                        <option>Tender</option>
                        <option>Tender Security</option>
                        <option>Legal</option>
                    </select>
                    </base-input>
                  </b-col>
                <b-col lg="4">
                    <base-input
                      type="text"
                      label="Amount"
                      placeholder="Amount"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="4">
                    <b-form-group label="Basis of Amount" label-class="form-control-label" class="mb-0" label-for="about-form-textaria">
                   <!--  <label class="form-control-label">About Me</label> -->
                    <b-form-textarea rows="4" value="" id="about-form-textaria" placeholder=""></b-form-textarea>
                    </b-form-group>
                  </b-col>
                </b-row>
                
              </div>
              <br>
                <hr class="my-4">
            </b-form>
    </div>
    <base-button class="mt-3" block @click="$bvModal.hide('edit-modal')" type="success">Save & Send Requisition</base-button>
  </b-modal>


</div>
</div>
          <br><br>
      </b-col>
		</b-row>
		<b-row>
          <b-col lg="12">
           <p class="mb-0"><b>Type something in the input field to search the table</b></p>
          </b-col>
        </b-row>
		<br>
		<b-row>
			<b-col lg="6">
			<b-form-input type="text"
              label=""
              placeholder="Search..." class="text-left"></b-form-input>
			  </b-col>
		</b-row>
		<br>

  	<div style="overflow: scroll;"> 
	  <b-row>
	  <b-col xl="6">
		<table class="table table-stripped">
				<thead class="thead-light">
				<tr>
				<th scope="col">Check Box</th>
				<th scope="col">Index</th>
				<th scope="col">Meeting Title</th >
					<th scope="col">Date of Expense</th>
					<th scope="col">Approver</th>
					<th scope="col">Category</th>
					<th scope="col">Amount</th>
					<th scope="col">Basis of amount</th>
          <th scope="col">Status</th>
			<th scope="col">Action</th>

				</tr>
				</thead>
			<tbody id="myTable">
				<tr>
							<td><input type="checkbox"  name="scheme_no1" value="323"></td>
						<td>1</td>
						<td>Meeting title</td>
						<td>19-05-2021</td>
						<td>John Snow</td>
						<td>Transport</td>
						<td>Ksh 2000</td>
						<td>Basis</td>
            <td>Pending</td>

					<td>
					<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
						<b-dropdown-item href="#" @click="$bvModal.show('edit-modal')">Edit</b-dropdown-item>
						<b-dropdown-item href="#">Delete</b-dropdown-item>
					</b-dropdown>
							</td>
				</tr>
			</tbody><div>
   <b-pagination
     v-model="currentPage"
     :total-rows="rows"
     :per-page="perPage"
     first-number
   ></b-pagination>
 </div>
	  </table>
	  </b-col>
	  </b-row>
  </div>


  </card>
</template>

<script>
export default {
  data() {
    return {
      user: {
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  },

    data() {
      return {
         rows: 100,
         perPage: 1,
         currentPage: 1,
        meeting: [
          {
            name: 'John Michael',
            status: 'Online',
            statusType: 'success',
            image: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-1.jpg'
          },
          {
            name: 'Alex Smith',
            status: 'In a meeting',
            statusType: 'danger',
            image: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-2.jpg'
          },
          {
            name: 'John Snow',
            status: 'Online',
            statusType: 'success',
            image: 'https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-5.jpg'
          }
        ]
      }
    }
};
  
</script>
<style></style>
