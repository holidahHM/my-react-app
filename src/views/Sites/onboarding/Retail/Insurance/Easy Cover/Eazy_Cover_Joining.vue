<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <div class="tab">
        <div align="center"><strong>Personal Details(Principal Member)</strong></div>
        <div class="row">
          <div class="col-sm-4">
            <div class="form-group">
              <label class="control-label">Full Names *</label>

              <input
                type="text"
                name="member_name"
                required
                id="m_name"
                class="form-control"
              />
            </div>
          </div>

          <input type="hidden" name="member_id" class="form-control" />
          <div class="col-sm-4">
            <div class="form-group">
              <label class="control-label">Email * </label>
              <input
                type="text"
                name="member_email"
                id="m_email"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="col-sm-3">
            <div class="form-group">
              <label class="control-label">Place of Work/Business</label>

              <input
                type="text"
                name="member_workplace"
                id="m_payroll_number"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="form-group">
              <label class="control-label">Phone Number *</label>
              <input
                type="text"
                name="member_tel_no"
                id="phone_number"
                class="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label class="control-label">ID Number *</label>
              <input
                type="text"
                name="member_id_no"
                id="m_id_number"
                class="form-control"
                required
              />
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label class="control-label">Date of Birth *</label>
              <input
                type="text"
                name="member_dob"
                id="from-datepicker"
                placeholder="YYYY-MM-DD"
                class="form-control inputdate"
                required
              />
            </div>
          </div>

          <div class="col-sm-3">
            <div class="form-group">
              <label class="control-label">KRA PIN</label>
              <input type="text" name="member_kra_pin" id="m_pin" class="form-control" />
            </div>
          </div>
        </div>
      </div>
      <div class="tab">
        <div class="row">
          <h3>Who Do You want to Cover</h3>
          <br />

          <div class="col-sm-9">
            <h5 class="lg-title">Dependants</h5>
            <p class="mb20">
              Fill out the table below to register your dependants. Use the "+" and "-"
              button to add and remove dependants respectively.
            </p>
          </div>
          <div class="col-sm-3">
            <a id="add_row" class="btn btn-info pull-right" @click="addRow"
              ><i class="fa fa-plus"></i
            ></a>
            <a id="delete_row" class="pull-right btn btn-danger mr20 mb10"
              ><i class="fa fa-minus"></i
            ></a>
          </div>
        </div>
        <table class="table table-bordered table-hover" id="tab_logic">
          <thead>
            <tr>
              <th class="text-center" style="width: 150px">Relationship</th>
              <th class="text-center" style="width: 200px">Dependant Name *</th>
              <th class="text-center" style="width: 100px">Date of Birth *</th>
              <th class="text-center" style="width: 100px">Identifying Document</th>
              <th class="text-center" style="width: 50px">ID Document Number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-model="rows">
              <td>
                <select
                  class="form-control"
                  id="relationship0"
                  name="insuree_id"
                  required
                ></select>
              </td>
              <td>
                <input
                  type="text"
                  name="dependant_name"
                  required
                  placeholder="Enter full name"
                  class="form-control"
                />
              </td>
              <td>
                <input
                  type="text"
                  name="dependant_dob"
                  required
                  placeholder="yyyy-mm-dd"
                  class="form-control inputdate"
                />
              </td>
              <td>
                <select class="form-control" name="dependant_id_doc_type[]">
                  <option value="National ID">National ID</option>
                  <option value="Passport">Passport</option>
                  <option value="BirthCert">Birth Certificate</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  name="dependant_identity_number"
                  placeholder="passport/id number"
                  class="form-control"
                />
              </td>
            </tr>

            <tr id="addr1"></tr>
          </tbody>
        </table>
      </div>

      <b-row>
        <b-col xl="4" md="6">
          <b-button-group>
            <b-button @click="Application_Form()" variant="info">Previous</b-button>
          </b-button-group>
        </b-col>
        <b-col xl="4" md="1">
          <b-button-group>
            <b-button @click="Beneficiaries_Insurance()" variant="success">Next</b-button>
          </b-button-group>
        </b-col> </b-row
      >-->
      <div class="panel-body">
        <i
          class="fa fa-plus pull-right"
          @click="addRow"
          style="font-size: 25px; color: #337ab7; cursor: pointer"
        ></i>
        <table class="table table-bordered">
          <thead class="text text-success">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users">
              <td>
                <input v-model="user.name" class="form-control" type="text" />
              </td>
              <td>
                <input v-model="user.email" class="form-control" type="text" />
              </td>
              <td>
                <input v-model="user.mobno" class="form-control" type="text" />
              </td>
              <td>
                <i
                  @click="deleteRow(index)"
                  class="fa fa-remove"
                  style="font-size: 25px; color: red; cursor: pointer"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </card>
  </base-header>
</template>
<script>
import Beneficiaries_Insurance from "../Easy Cover/Beneficiaries_Insurance";
export default {
  // comments:{
  //     Beneficiaries_Insurance
  // },
  //     data: {
  //     rows: [
  //     ]
  //   },
  //   methods:{
  //     addRow: function(){
  //       this.rows.push({});
  //     },
  //     removeRow: function(row){

  //       this.rows.$remove(row);
  //     }
  //   }
  data() {
    users: [{ name: "", email: "", mobno: "" }];
  },
  methods: {
    addRow: function () {
      this.users.push({ name: "", email: "", mobno: "" });
    },
    deleteRow(index) {
      this.users.splice(index, 1);
    },
  },
};
</script>
