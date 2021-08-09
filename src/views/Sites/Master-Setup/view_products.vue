<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <b-card no-body>
        <!-- Tabs for changing products -->

        <b-row>
          <b-col xl="12" md="12">
            <b-tabs pills card>
              <!--Pension Tab-->
              <b-tab title="Pension" active>
                <b-form>
                  <b-row>
                    <div class="my-auto align-self-center">
                      <b-col xl="12">
                        <h4>VIEW EXISTING USERS</h4>
                      </b-col>
                    </div>
                  </b-row>
                  <br />
                  <b-row>
                    <div class="alert alert-danger" v-if="errorSearch">
                      {{ errorSearch }}
                    </div>
                    <div></div>
                    <div class="mx-auto">
                      <b-col xl="12" lg="12">
                        <p class="mb-0">
                          <b>Type something in the input field to search the table</b>
                        </p>
                        <b-form-input
                          type="text"
                          label=""
                          placeholder="Search for a product"
                          v-model="keyword"
                          @keyup.enter="searchLogic"
                        >
                          <br />
                        </b-form-input>
                      </b-col>
                    </div>
                  </b-row>
                  <br />
                  <b-row>
                    <b-col lg="12" sm="12" xl="12">
                      <div style="overflow: scroll">
                        <b-row>
                          <table class="table table-stripped">
                            <thead class="thead-light">
                              <tr>
                                <th scope="col">
                                  <label class="form-checkbox">
                                    <input
                                      type="checkbox"
                                      v-model="selectAll"
                                      @click="select"
                                    />
                                  </label>
                                </th>
                                <th scope="col">UserId</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Operation level</th>
                                <th scope="col">Administration Rights</th>
                                <th scope="col">System Group</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody id="myTable">
                              <tr v-for="i in items">
                                <td>
                                  <label class="form-checkbox">
                                    <input
                                      type="checkbox"
                                      :value="i.user_id"
                                      v-model="selected"
                                    />
                                    <i class="form-icon"></i>
                                  </label>
                                </td>
                                <td>{{ i.user_id }}</td>
                                <td>{{ i.user_full_names }}</td>
                                <td>{{ i.user_schemes }}</td>
                                <td>{{ adminLabel }}</td>
                                <td>{{ i.user_group }}</td>
                                <td>{{ activeStatus }}</td>

                                <td>
                                  <b-dropdown
                                    id="dropdown-left"
                                    text="Action"
                                    variant="primary"
                                    class="m-2"
                                  >
                                    <b-dropdown-item v-b-modal.modal-1
                                      >Edit Details
                                    </b-dropdown-item>
                                    <!--opens up a modal -->
                                    <b-dropdown-item v-b-modal.modal-2
                                      >Reset Password</b-dropdown-item
                                    >
                                  </b-dropdown>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </b-row>
                      </div>
                    </b-col>
                  </b-row>
                  <b-modal
                    id="modal-1"
                    size="lg"
                    title="Edit Existing Member details"
                    hide-footer
                  >
                    <b-col xl="12" md="10">
                      <stats-card
                        title="BIO-DATA"
                        type="gradient-green"
                        sub-title=""
                        class="mb-4"
                      >
                        <template slot="footer">
                          <div class="mt-3">
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">Index No</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Index no"
                                  readonly
                                ></b-form-input>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">User ID</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..User ID"
                                  readonly
                                ></b-form-input>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">User's Name</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Member's name"
                                ></b-form-input>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">User's Email</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Member's Email"
                                ></b-form-input>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">National ID No</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..ID No"
                                ></b-form-input>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">Payroll No:</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Payroll No"
                                ></b-form-input>
                              </div>
                            </div>
                          </div>
                        </template>
                      </stats-card>
                      <stats-card
                        title="USER-ACCESS RIGHTS"
                        type="gradient-green"
                        sub-title=""
                        class="mb-4"
                      >
                        <template slot="footer">
                          <div class="mt-3">
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">Country</label>
                                <select class="form-control">
                                  <option>Kenya</option>
                                  <option>Uganda</option>
                                  <option>Zambia</option>
                                </select>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">Operation level</label>
                                <select class="form-control">
                                  <option>Internal</option>
                                  <option>External</option>
                                </select>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">Administration Rights</label>
                                <select class="form-control">
                                  <option>Admin-Sys</option>
                                  <option>Admin-Department</option>
                                  <option>Approver</option>
                                  <option>Supervisior</option>
                                  <option>Member</option>
                                </select>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">Access Module</label>
                                <select class="form-control">
                                  <option>Master-Setup</option>
                                  <option>BD</option>
                                  <option>Onboarding</option>
                                  <option>Servicing</option>
                                  <option>CRM</option>
                                  <option>E-learning</option>
                                  <option>Accounting</option>
                                  <option>Governance</option>
                                  <option>Insurance</option>
                                  <option>Elections</option>
                                  <option>Reports</option>
                                  <option>Document centre</option>
                                  <option>Communication</option>
                                  <option>E-board</option>
                                  <option>Fund Management</option>
                                </select>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">System Group</label>
                                <select class="form-control">
                                  <option>Member</option>
                                  <option>Normal</option>
                                  <option>HR</option>
                                  <option>Trustee</option>
                                  <option>Service Provideer</option>
                                  <option>None</option>
                                </select>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">Delagate Owner</label>
                                <select class="form-control">
                                  <option>Self</option>
                                  <option>Test-1</option>
                                  <option>Test-2</option>
                                </select>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-xl-12 col-md-6">
                                <label for="input-default">Scheme</label>
                                <div class="row">
                                  <div class="col-md-6 col-sm-6">
                                    <b-form-input
                                      type="text"
                                      placeholder="Scheme config"
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-6 col-sm-6">
                                    <b-button v-b-modal.modal-3 variant="primary"
                                      >Manage Schemes</b-button
                                    >
                                  </div>
                                </div>
                                <br />
                              </div>
                              <br />
                              <div class="col-md-6">
                                <label for="input-default">Status</label>
                                <select class="form-control">
                                  <option>Active</option>
                                  <option>Disabled</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <br />
                        </template>
                      </stats-card>
                      <base-button
                        class="mt-3"
                        block
                        @click="$bvModal.hide('modal-1')"
                        type="success"
                        >Save</base-button
                      >
                    </b-col>
                  </b-modal>

                  <b-modal id="modal-2" size="lg" title="Password Reset" hide-footer>
                    <stats-card
                      title="Email"
                      type="gradient-green"
                      sub-title=""
                      class="mb-4"
                    >
                      <template slot="footer">
                        <div class="mt-3">
                          <div class="row">
                            <div class="col-md-12 col-sm-12">
                              <label for="input-default">User's Email Address</label>
                              <b-form-input
                                type="text"
                                placeholder="..Email Address"
                                readonly
                              ></b-form-input>
                            </div>
                          </div>
                          <br />
                          <div class="row">
                            <div class="col-md-4">
                              <b-button variant="primary">Confirm Email Address</b-button>
                              <br />
                            </div>
                            <div class="col-md-4">
                              <b-button
                                variant="primary"
                                v-on:click="isHidden = !isHidden"
                                >Change Email Address
                              </b-button>
                            </div>
                            <br />
                          </div>
                          <div v-if="isHidden" class="row">
                            <div class="col-md-12 col-sm-12">
                              <br />
                              <label for="input-default">New Email Address</label>
                              <b-form-input
                                type="text"
                                placeholder="Enter New Email Address"
                              ></b-form-input>
                              <br />
                            </div>
                            <div class="col-md-12 col-sm-12">
                              <label for="input-default">Confirm Email Address</label>
                              <b-form-input
                                type="text"
                                placeholder="Confirm New Email Address"
                              ></b-form-input>
                              <br />
                            </div>
                            <div class="col-md-4">
                              <b-button variant="primary"
                                >Save New Email Address
                              </b-button>
                            </div>
                          </div>
                        </div>
                        <base-button
                          class="mt-3"
                          block
                          @click="$bvModal.hide('modal-2')"
                          type="success"
                          >Generate Password Reset link</base-button
                        >
                      </template>
                    </stats-card>
                  </b-modal>
                  <b-modal id="modal-3" size="lg" title="Manage Schemes" hide-footer>
                  </b-modal>
                </b-form>
                <!--Country select -->
                <!--1st row-->
              </b-tab>

              <!--Insurance Tab-->
              <b-tab title="Insurance"
                ><b-card-text>
                  <b-form>
                    <b-row>
                      <div class="my-auto align-self-center">
                        <b-col xl="12">
                          <h4>VIEW PRODUCTS</h4>
                        </b-col>
                      </div>
                    </b-row>
                    <br />
                    <b-row>
                      <div class="alert alert-danger" v-if="errorSearch">
                        {{ errorSearch }}
                      </div>
                      <div></div>
                      <div class="mx-auto">
                        <b-col xl="12" sm="12">
                          <p class="mb-0">
                            <b>Type something in the input field to search the table</b>
                          </p>
                          <b-form-input
                            type="text"
                            label=""
                            placeholder="Search for a product"
                            v-model="keyword"
                            @keyup.enter="searchLogic"
                          >
                            <br />
                          </b-form-input>
                        </b-col>
                      </div>
                    </b-row>
                    <br />
                    <b-row>
                      <b-col lg="12" sm="12" xl="12">
                        <div style="overflow: scroll">
                          <b-row>
                            <table class="table table-stripped">
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col">
                                    <label class="form-checkbox">
                                      <input
                                        type="checkbox"
                                        v-model="selectAll"
                                        @click="select"
                                      />
                                    </label>
                                  </th>
                                  <th scope="col">Product</th>
                                  <th scope="col">Product Name</th>
                                  <th scope="col">Service Provider</th>
                                  <th scope="col">Commision rate</th>
                                  <th scope="col">Service Legal Agreement</th>
                                  <th scope="col">Year in service</th>
                                  <th scope="col">Country</th>
                                  <th scope="col">Tax rate</th>
                                  <th scope="col">Mode of intergration</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody id="myTable">
                                <tr v-for="i in countryInsuranceFormData">
                                  <td>
                                    <label class="form-checkbox">
                                      <input
                                        type="checkbox"
                                        :value="i.prod_code"
                                        v-model="selected"
                                      />
                                      <i class="form-icon"></i>
                                    </label>
                                  </td>
                                  <td>{{ i.prod_code }}</td>
                                  <td>{{ i.prod_name }}</td>
                                  <td>{{ i.service_provider }}</td>
                                  <td>{{ i.commission_rate }}</td>
                                  <td>{{ i.SLA }}</td>
                                  <td>{{ i.year_of_service }}</td>
                                  <td>{{ i.country_name }}</td>
                                  <td>{{ i.tax_rate }}</td>
                                  <td>{{ i.mode_of_intergration }}</td>
                                  <td>
                                    <b-dropdown
                                      id="dropdown-left"
                                      text="Action"
                                      variant="primary"
                                      class="m-2"
                                    >
                                      <b-dropdown-item v-b-modal.modal-1
                                        >Edit Details
                                      </b-dropdown-item>
                                      <!--opens up a modal -->
                                      <b-dropdown-item v-b-modal.modal-2
                                        >Reset Password</b-dropdown-item
                                      >
                                    </b-dropdown>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </b-row>
                        </div>
                      </b-col>
                    </b-row>
                    <b-modal
                      id="modal-1"
                      size="lg"
                      title="Edit Existing Member details"
                      hide-footer
                    >
                      <b-col xl="12" md="10">
                        <stats-card
                          title="BIO-DATA"
                          type="gradient-green"
                          sub-title=""
                          class="mb-4"
                        >
                          <template slot="footer">
                            <div class="mt-3">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Index No</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Index no"
                                    readonly
                                  ></b-form-input>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">User ID</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..User ID"
                                    readonly
                                  ></b-form-input>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">User's Name</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Member's name"
                                  ></b-form-input>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">User's Email</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Member's Email"
                                  ></b-form-input>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">National ID No</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..ID No"
                                  ></b-form-input>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Payroll No:</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Payroll No"
                                  ></b-form-input>
                                </div>
                              </div>
                            </div>
                          </template>
                        </stats-card>
                        <stats-card
                          title="USER-ACCESS RIGHTS"
                          type="gradient-green"
                          sub-title=""
                          class="mb-4"
                        >
                          <template slot="footer">
                            <div class="mt-3">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Country</label>
                                  <select class="form-control">
                                    <option>Kenya</option>
                                    <option>Uganda</option>
                                    <option>Zambia</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Operation level</label>
                                  <select class="form-control">
                                    <option>Internal</option>
                                    <option>External</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Administration Rights</label>
                                  <select class="form-control">
                                    <option>Admin-Sys</option>
                                    <option>Admin-Department</option>
                                    <option>Approver</option>
                                    <option>Supervisior</option>
                                    <option>Member</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Access Module</label>
                                  <select class="form-control">
                                    <option>Master-Setup</option>
                                    <option>BD</option>
                                    <option>Onboarding</option>
                                    <option>Servicing</option>
                                    <option>CRM</option>
                                    <option>E-learning</option>
                                    <option>Accounting</option>
                                    <option>Governance</option>
                                    <option>Insurance</option>
                                    <option>Elections</option>
                                    <option>Reports</option>
                                    <option>Document centre</option>
                                    <option>Communication</option>
                                    <option>E-board</option>
                                    <option>Fund Management</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">System Group</label>
                                  <select class="form-control">
                                    <option>Member</option>
                                    <option>Normal</option>
                                    <option>HR</option>
                                    <option>Trustee</option>
                                    <option>Service Provideer</option>
                                    <option>None</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Delagate Owner</label>
                                  <select class="form-control">
                                    <option>Self</option>
                                    <option>Test-1</option>
                                    <option>Test-2</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-xl-12 col-md-6">
                                  <label for="input-default">Scheme</label>
                                  <div class="row">
                                    <div class="col-md-6 col-sm-6">
                                      <b-form-input
                                        type="text"
                                        placeholder="Scheme config"
                                      ></b-form-input>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                      <b-button v-b-modal.modal-3 variant="primary"
                                        >Manage Schemes</b-button
                                      >
                                    </div>
                                  </div>
                                  <br />
                                </div>
                                <br />
                                <div class="col-md-6">
                                  <label for="input-default">Status</label>
                                  <select class="form-control">
                                    <option>Active</option>
                                    <option>Disabled</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <br />
                          </template>
                        </stats-card>
                        <base-button
                          class="mt-3"
                          block
                          @click="$bvModal.hide('modal-1')"
                          type="success"
                          >Save</base-button
                        >
                      </b-col>
                    </b-modal>

                    <b-modal id="modal-2" size="lg" title="Password Reset" hide-footer>
                      <stats-card
                        title="Email"
                        type="gradient-green"
                        sub-title=""
                        class="mb-4"
                      >
                        <template slot="footer">
                          <div class="mt-3">
                            <div class="row">
                              <div class="col-md-12 col-sm-12">
                                <label for="input-default">User's Email Address</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Email Address"
                                  readonly
                                ></b-form-input>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-4">
                                <b-button variant="primary"
                                  >Confirm Email Address</b-button
                                >
                                <br />
                              </div>
                              <div class="col-md-4">
                                <b-button
                                  variant="primary"
                                  v-on:click="isHidden = !isHidden"
                                  >Change Email Address
                                </b-button>
                              </div>
                              <br />
                            </div>
                            <div v-if="isHidden" class="row">
                              <div class="col-md-12 col-sm-12">
                                <br />
                                <label for="input-default">New Email Address</label>
                                <b-form-input
                                  type="text"
                                  placeholder="Enter New Email Address"
                                ></b-form-input>
                                <br />
                              </div>
                              <div class="col-md-12 col-sm-12">
                                <label for="input-default">Confirm Email Address</label>
                                <b-form-input
                                  type="text"
                                  placeholder="Confirm New Email Address"
                                ></b-form-input>
                                <br />
                              </div>
                              <div class="col-md-4">
                                <b-button variant="primary"
                                  >Save New Email Address
                                </b-button>
                              </div>
                            </div>
                          </div>
                          <base-button
                            class="mt-3"
                            block
                            @click="$bvModal.hide('modal-2')"
                            type="success"
                            >Generate Password Reset link</base-button
                          >
                        </template>
                      </stats-card>
                    </b-modal>
                    <b-modal id="modal-3" size="lg" title="Manage Schemes" hide-footer>
                    </b-modal>
                  </b-form>
                  <!--1st row-->

                  <!--end of 3rd row-->
                </b-card-text>
              </b-tab>
              <!--Trust Tab-->
              <b-tab title="Trust"
                ><b-card-text>
                  <b-form>
                    <b-row>
                      <div class="my-auto align-self-center">
                        <b-col xl="12">
                          <h4>VIEW EXISTING USERS</h4>
                        </b-col>
                      </div>
                    </b-row>
                    <br />
                    <b-row>
                      <div class="alert alert-danger" v-if="errorSearch">
                        {{ errorSearch }}
                      </div>
                      <div></div>
                      <div class="mx-auto">
                        <b-col xl="12" sm="12">
                          <p class="mb-0">
                            <b>Type something in the input field to search the table</b>
                          </p>
                          <b-form-input
                            type="text"
                            label=""
                            placeholder="Search for a member"
                            v-model="keyword"
                            @keyup.enter="searchLogic"
                          >
                            <br />
                          </b-form-input>
                        </b-col>
                      </div>
                    </b-row>
                    <br />
                    <b-row>
                      <b-col lg="12" sm="12" xl="12">
                        <div style="overflow: scroll">
                          <b-row>
                            <table class="table table-stripped">
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col">
                                    <label class="form-checkbox">
                                      <input
                                        type="checkbox"
                                        v-model="selectAll"
                                        @click="select"
                                      />
                                    </label>
                                  </th>
                                  <th scope="col">UserId</th>
                                  <th scope="col">Full Name</th>
                                  <th scope="col">Operation level</th>
                                  <th scope="col">Administration Rights</th>
                                  <th scope="col">System Group</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody id="myTable">
                                <tr v-for="i in items">
                                  <td>
                                    <label class="form-checkbox">
                                      <input
                                        type="checkbox"
                                        :value="i.user_id"
                                        v-model="selected"
                                      />
                                      <i class="form-icon"></i>
                                    </label>
                                  </td>
                                  <td>{{ i.user_id }}</td>
                                  <td>{{ i.user_full_names }}</td>
                                  <td>{{ i.user_schemes }}</td>
                                  <td>{{ adminLabel }}</td>
                                  <td>{{ i.user_group }}</td>
                                  <td>{{ activeStatus }}</td>

                                  <td>
                                    <b-dropdown
                                      id="dropdown-left"
                                      text="Action"
                                      variant="primary"
                                      class="m-2"
                                    >
                                      <b-dropdown-item v-b-modal.modal-1
                                        >Edit Details
                                      </b-dropdown-item>
                                      <!--opens up a modal -->
                                      <b-dropdown-item v-b-modal.modal-2
                                        >Reset Password</b-dropdown-item
                                      >
                                    </b-dropdown>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </b-row>
                        </div>
                      </b-col>
                    </b-row>
                    <b-modal
                      id="modal-1"
                      size="lg"
                      title="Edit Existing Member details"
                      hide-footer
                    >
                      <b-col xl="12" md="10">
                        <stats-card
                          title="BIO-DATA"
                          type="gradient-green"
                          sub-title=""
                          class="mb-4"
                        >
                          <template slot="footer">
                            <div class="mt-3">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Index No</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Index no"
                                    readonly
                                  ></b-form-input>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">User ID</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..User ID"
                                    readonly
                                  ></b-form-input>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">User's Name</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Member's name"
                                  ></b-form-input>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">User's Email</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Member's Email"
                                  ></b-form-input>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">National ID No</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..ID No"
                                  ></b-form-input>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Payroll No:</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Payroll No"
                                  ></b-form-input>
                                </div>
                              </div>
                            </div>
                          </template>
                        </stats-card>
                        <stats-card
                          title="USER-ACCESS RIGHTS"
                          type="gradient-green"
                          sub-title=""
                          class="mb-4"
                        >
                          <template slot="footer">
                            <div class="mt-3">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Country</label>
                                  <select class="form-control">
                                    <option>Kenya</option>
                                    <option>Uganda</option>
                                    <option>Zambia</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Operation level</label>
                                  <select class="form-control">
                                    <option>Internal</option>
                                    <option>External</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Administration Rights</label>
                                  <select class="form-control">
                                    <option>Admin-Sys</option>
                                    <option>Admin-Department</option>
                                    <option>Approver</option>
                                    <option>Supervisior</option>
                                    <option>Member</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Access Module</label>
                                  <select class="form-control">
                                    <option>Master-Setup</option>
                                    <option>BD</option>
                                    <option>Onboarding</option>
                                    <option>Servicing</option>
                                    <option>CRM</option>
                                    <option>E-learning</option>
                                    <option>Accounting</option>
                                    <option>Governance</option>
                                    <option>Insurance</option>
                                    <option>Elections</option>
                                    <option>Reports</option>
                                    <option>Document centre</option>
                                    <option>Communication</option>
                                    <option>E-board</option>
                                    <option>Fund Management</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">System Group</label>
                                  <select class="form-control">
                                    <option>Member</option>
                                    <option>Normal</option>
                                    <option>HR</option>
                                    <option>Trustee</option>
                                    <option>Service Provideer</option>
                                    <option>None</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Delagate Owner</label>
                                  <select class="form-control">
                                    <option>Self</option>
                                    <option>Test-1</option>
                                    <option>Test-2</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-xl-12 col-md-6">
                                  <label for="input-default">Scheme</label>
                                  <div class="row">
                                    <div class="col-md-6 col-sm-6">
                                      <b-form-input
                                        type="text"
                                        placeholder="Scheme config"
                                      ></b-form-input>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                      <b-button v-b-modal.modal-3 variant="primary"
                                        >Manage Schemes</b-button
                                      >
                                    </div>
                                  </div>
                                  <br />
                                </div>
                                <br />
                                <div class="col-md-6">
                                  <label for="input-default">Status</label>
                                  <select class="form-control">
                                    <option>Active</option>
                                    <option>Disabled</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <br />
                          </template>
                        </stats-card>
                        <base-button
                          class="mt-3"
                          block
                          @click="$bvModal.hide('modal-1')"
                          type="success"
                          >Save</base-button
                        >
                      </b-col>
                    </b-modal>

                    <b-modal id="modal-2" size="lg" title="Password Reset" hide-footer>
                      <stats-card
                        title="Email"
                        type="gradient-green"
                        sub-title=""
                        class="mb-4"
                      >
                        <template slot="footer">
                          <div class="mt-3">
                            <div class="row">
                              <div class="col-md-12 col-sm-12">
                                <label for="input-default">User's Email Address</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Email Address"
                                  readonly
                                ></b-form-input>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-4">
                                <b-button variant="primary"
                                  >Confirm Email Address</b-button
                                >
                                <br />
                              </div>
                              <div class="col-md-4">
                                <b-button
                                  variant="primary"
                                  v-on:click="isHidden = !isHidden"
                                  >Change Email Address
                                </b-button>
                              </div>
                              <br />
                            </div>
                            <div v-if="isHidden" class="row">
                              <div class="col-md-12 col-sm-12">
                                <br />
                                <label for="input-default">New Email Address</label>
                                <b-form-input
                                  type="text"
                                  placeholder="Enter New Email Address"
                                ></b-form-input>
                                <br />
                              </div>
                              <div class="col-md-12 col-sm-12">
                                <label for="input-default">Confirm Email Address</label>
                                <b-form-input
                                  type="text"
                                  placeholder="Confirm New Email Address"
                                ></b-form-input>
                                <br />
                              </div>
                              <div class="col-md-4">
                                <b-button variant="primary"
                                  >Save New Email Address
                                </b-button>
                              </div>
                            </div>
                          </div>
                          <base-button
                            class="mt-3"
                            block
                            @click="$bvModal.hide('modal-2')"
                            type="success"
                            >Generate Password Reset link</base-button
                          >
                        </template>
                      </stats-card>
                    </b-modal>
                    <b-modal id="modal-3" size="lg" title="Manage Schemes" hide-footer>
                    </b-modal>
                  </b-form>

                  <!--end of 3rd  row-->
                </b-card-text>
              </b-tab>
              <!--Acturial Tab-->
              <b-tab title="Acturial"
                ><b-card-text>
                  <b-form>
                    <b-row>
                      <div class="my-auto align-self-center">
                        <b-col xl="12">
                          <h4>VIEW EXISTING USERS</h4>
                        </b-col>
                      </div>
                    </b-row>
                    <br />
                    <b-row>
                      <div class="alert alert-danger" v-if="errorSearch">
                        {{ errorSearch }}
                      </div>
                      <div></div>
                      <div class="mx-auto">
                        <b-col xl="12" sm="12">
                          <p class="mb-0">
                            <b>Type something in the input field to search the table</b>
                          </p>
                          <b-form-input
                            type="text"
                            label=""
                            placeholder="Search for a member"
                            v-model="keyword"
                            @keyup.enter="searchLogic"
                          >
                            <br />
                          </b-form-input>
                        </b-col>
                      </div>
                    </b-row>
                    <br />
                    <b-row>
                      <b-col lg="12" sm="12" xl="12">
                        <div style="overflow: scroll">
                          <b-row>
                            <table class="table table-stripped">
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col">
                                    <label class="form-checkbox">
                                      <input
                                        type="checkbox"
                                        v-model="selectAll"
                                        @click="select"
                                      />
                                    </label>
                                  </th>
                                  <th scope="col">UserId</th>
                                  <th scope="col">Full Name</th>
                                  <th scope="col">Operation level</th>
                                  <th scope="col">Administration Rights</th>
                                  <th scope="col">System Group</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody id="myTable">
                                <tr v-for="i in items">
                                  <td>
                                    <label class="form-checkbox">
                                      <input
                                        type="checkbox"
                                        :value="i.user_id"
                                        v-model="selected"
                                      />
                                      <i class="form-icon"></i>
                                    </label>
                                  </td>
                                  <td>{{ i.user_id }}</td>
                                  <td>{{ i.user_full_names }}</td>
                                  <td>{{ i.user_schemes }}</td>
                                  <td>{{ adminLabel }}</td>
                                  <td>{{ i.user_group }}</td>
                                  <td>{{ activeStatus }}</td>

                                  <td>
                                    <b-dropdown
                                      id="dropdown-left"
                                      text="Action"
                                      variant="primary"
                                      class="m-2"
                                    >
                                      <b-dropdown-item v-b-modal.modal-1
                                        >Edit Details
                                      </b-dropdown-item>
                                      <!--opens up a modal -->
                                      <b-dropdown-item v-b-modal.modal-2
                                        >Reset Password</b-dropdown-item
                                      >
                                    </b-dropdown>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </b-row>
                        </div>
                      </b-col>
                    </b-row>
                    <b-modal
                      id="modal-1"
                      size="lg"
                      title="Edit Existing Member details"
                      hide-footer
                    >
                      <b-col xl="12" md="10">
                        <stats-card
                          title="BIO-DATA"
                          type="gradient-green"
                          sub-title=""
                          class="mb-4"
                        >
                          <template slot="footer">
                            <div class="mt-3">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Index No</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Index no"
                                    readonly
                                  ></b-form-input>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">User ID</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..User ID"
                                    readonly
                                  ></b-form-input>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">User's Name</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Member's name"
                                  ></b-form-input>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">User's Email</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Member's Email"
                                  ></b-form-input>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">National ID No</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..ID No"
                                  ></b-form-input>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Payroll No:</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Payroll No"
                                  ></b-form-input>
                                </div>
                              </div>
                            </div>
                          </template>
                        </stats-card>
                        <stats-card
                          title="USER-ACCESS RIGHTS"
                          type="gradient-green"
                          sub-title=""
                          class="mb-4"
                        >
                          <template slot="footer">
                            <div class="mt-3">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Country</label>
                                  <select class="form-control">
                                    <option>Kenya</option>
                                    <option>Uganda</option>
                                    <option>Zambia</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Operation level</label>
                                  <select class="form-control">
                                    <option>Internal</option>
                                    <option>External</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Administration Rights</label>
                                  <select class="form-control">
                                    <option>Admin-Sys</option>
                                    <option>Admin-Department</option>
                                    <option>Approver</option>
                                    <option>Supervisior</option>
                                    <option>Member</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Access Module</label>
                                  <select class="form-control">
                                    <option>Master-Setup</option>
                                    <option>BD</option>
                                    <option>Onboarding</option>
                                    <option>Servicing</option>
                                    <option>CRM</option>
                                    <option>E-learning</option>
                                    <option>Accounting</option>
                                    <option>Governance</option>
                                    <option>Insurance</option>
                                    <option>Elections</option>
                                    <option>Reports</option>
                                    <option>Document centre</option>
                                    <option>Communication</option>
                                    <option>E-board</option>
                                    <option>Fund Management</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">System Group</label>
                                  <select class="form-control">
                                    <option>Member</option>
                                    <option>Normal</option>
                                    <option>HR</option>
                                    <option>Trustee</option>
                                    <option>Service Provideer</option>
                                    <option>None</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Delagate Owner</label>
                                  <select class="form-control">
                                    <option>Self</option>
                                    <option>Test-1</option>
                                    <option>Test-2</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-xl-12 col-md-6">
                                  <label for="input-default">Scheme</label>
                                  <div class="row">
                                    <div class="col-md-6 col-sm-6">
                                      <b-form-input
                                        type="text"
                                        placeholder="Scheme config"
                                      ></b-form-input>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                      <b-button v-b-modal.modal-3 variant="primary"
                                        >Manage Schemes</b-button
                                      >
                                    </div>
                                  </div>
                                  <br />
                                </div>
                                <br />
                                <div class="col-md-6">
                                  <label for="input-default">Status</label>
                                  <select class="form-control">
                                    <option>Active</option>
                                    <option>Disabled</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <br />
                          </template>
                        </stats-card>
                        <base-button
                          class="mt-3"
                          block
                          @click="$bvModal.hide('modal-1')"
                          type="success"
                          >Save</base-button
                        >
                      </b-col>
                    </b-modal>

                    <b-modal id="modal-2" size="lg" title="Password Reset" hide-footer>
                      <stats-card
                        title="Email"
                        type="gradient-green"
                        sub-title=""
                        class="mb-4"
                      >
                        <template slot="footer">
                          <div class="mt-3">
                            <div class="row">
                              <div class="col-md-12 col-sm-12">
                                <label for="input-default">User's Email Address</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Email Address"
                                  readonly
                                ></b-form-input>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-4">
                                <b-button variant="primary"
                                  >Confirm Email Address</b-button
                                >
                                <br />
                              </div>
                              <div class="col-md-4">
                                <b-button
                                  variant="primary"
                                  v-on:click="isHidden = !isHidden"
                                  >Change Email Address
                                </b-button>
                              </div>
                              <br />
                            </div>
                            <div v-if="isHidden" class="row">
                              <div class="col-md-12 col-sm-12">
                                <br />
                                <label for="input-default">New Email Address</label>
                                <b-form-input
                                  type="text"
                                  placeholder="Enter New Email Address"
                                ></b-form-input>
                                <br />
                              </div>
                              <div class="col-md-12 col-sm-12">
                                <label for="input-default">Confirm Email Address</label>
                                <b-form-input
                                  type="text"
                                  placeholder="Confirm New Email Address"
                                ></b-form-input>
                                <br />
                              </div>
                              <div class="col-md-4">
                                <b-button variant="primary"
                                  >Save New Email Address
                                </b-button>
                              </div>
                            </div>
                          </div>
                          <base-button
                            class="mt-3"
                            block
                            @click="$bvModal.hide('modal-2')"
                            type="success"
                            >Generate Password Reset link</base-button
                          >
                        </template>
                      </stats-card>
                    </b-modal>
                    <b-modal id="modal-3" size="lg" title="Manage Schemes" hide-footer>
                    </b-modal>
                  </b-form>
                  <!--1st row-->

                  <!--end of3rd row-->
                </b-card-text>
              </b-tab>
              <!--Training Tab-->
              <b-tab title="Training"
                ><b-card-text>
                  <b-form>
                    <b-row>
                      <div class="my-auto align-self-center">
                        <b-col xl="12">
                          <h4>VIEW EXISTING USERS</h4>
                        </b-col>
                      </div>
                    </b-row>
                    <br />
                    <b-row>
                      <div class="alert alert-danger" v-if="errorSearch">
                        {{ errorSearch }}
                      </div>
                      <div></div>
                      <div class="mx-auto">
                        <b-col xl="12" sm="12">
                          <p class="mb-0">
                            <b>Type something in the input field to search the table</b>
                          </p>
                          <b-form-input
                            type="text"
                            label=""
                            placeholder="Search for a member"
                            v-model="keyword"
                            @keyup.enter="searchLogic"
                          >
                            <br />
                          </b-form-input>
                        </b-col>
                      </div>
                    </b-row>
                    <br />
                    <b-row>
                      <b-col lg="12" sm="12" xl="12">
                        <div style="overflow: scroll">
                          <b-row>
                            <table class="table table-stripped">
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col">
                                    <label class="form-checkbox">
                                      <input
                                        type="checkbox"
                                        v-model="selectAll"
                                        @click="select"
                                      />
                                    </label>
                                  </th>
                                  <th scope="col">UserId</th>
                                  <th scope="col">Full Name</th>
                                  <th scope="col">Operation level</th>
                                  <th scope="col">Administration Rights</th>
                                  <th scope="col">System Group</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody id="myTable">
                                <tr v-for="i in items">
                                  <td>
                                    <label class="form-checkbox">
                                      <input
                                        type="checkbox"
                                        :value="i.user_id"
                                        v-model="selected"
                                      />
                                      <i class="form-icon"></i>
                                    </label>
                                  </td>
                                  <td>{{ i.user_id }}</td>
                                  <td>{{ i.user_full_names }}</td>
                                  <td>{{ i.user_schemes }}</td>
                                  <td>{{ adminLabel }}</td>
                                  <td>{{ i.user_group }}</td>
                                  <td>{{ activeStatus }}</td>

                                  <td>
                                    <b-dropdown
                                      id="dropdown-left"
                                      text="Action"
                                      variant="primary"
                                      class="m-2"
                                    >
                                      <b-dropdown-item v-b-modal.modal-1
                                        >Edit Details
                                      </b-dropdown-item>
                                      <!--opens up a modal -->
                                      <b-dropdown-item v-b-modal.modal-2
                                        >Reset Password</b-dropdown-item
                                      >
                                    </b-dropdown>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </b-row>
                        </div>
                      </b-col>
                    </b-row>
                    <b-modal
                      id="modal-1"
                      size="lg"
                      title="Edit Existing Member details"
                      hide-footer
                    >
                      <b-col xl="12" md="10">
                        <stats-card
                          title="BIO-DATA"
                          type="gradient-green"
                          sub-title=""
                          class="mb-4"
                        >
                          <template slot="footer">
                            <div class="mt-3">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Index No</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Index no"
                                    readonly
                                  ></b-form-input>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">User ID</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..User ID"
                                    readonly
                                  ></b-form-input>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">User's Name</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Member's name"
                                  ></b-form-input>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">User's Email</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Member's Email"
                                  ></b-form-input>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">National ID No</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..ID No"
                                  ></b-form-input>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Payroll No:</label>
                                  <b-form-input
                                    type="text"
                                    placeholder="..Payroll No"
                                  ></b-form-input>
                                </div>
                              </div>
                            </div>
                          </template>
                        </stats-card>
                        <stats-card
                          title="USER-ACCESS RIGHTS"
                          type="gradient-green"
                          sub-title=""
                          class="mb-4"
                        >
                          <template slot="footer">
                            <div class="mt-3">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Country</label>
                                  <select class="form-control">
                                    <option>Kenya</option>
                                    <option>Uganda</option>
                                    <option>Zambia</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Operation level</label>
                                  <select class="form-control">
                                    <option>Internal</option>
                                    <option>External</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Administration Rights</label>
                                  <select class="form-control">
                                    <option>Admin-Sys</option>
                                    <option>Admin-Department</option>
                                    <option>Approver</option>
                                    <option>Supervisior</option>
                                    <option>Member</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Access Module</label>
                                  <select class="form-control">
                                    <option>Master-Setup</option>
                                    <option>BD</option>
                                    <option>Onboarding</option>
                                    <option>Servicing</option>
                                    <option>CRM</option>
                                    <option>E-learning</option>
                                    <option>Accounting</option>
                                    <option>Governance</option>
                                    <option>Insurance</option>
                                    <option>Elections</option>
                                    <option>Reports</option>
                                    <option>Document centre</option>
                                    <option>Communication</option>
                                    <option>E-board</option>
                                    <option>Fund Management</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">System Group</label>
                                  <select class="form-control">
                                    <option>Member</option>
                                    <option>Normal</option>
                                    <option>HR</option>
                                    <option>Trustee</option>
                                    <option>Service Provideer</option>
                                    <option>None</option>
                                  </select>
                                </div>
                                <div class="col-md-6">
                                  <label for="input-default">Delagate Owner</label>
                                  <select class="form-control">
                                    <option>Self</option>
                                    <option>Test-1</option>
                                    <option>Test-2</option>
                                  </select>
                                </div>
                              </div>
                              <br />
                              <div class="row">
                                <div class="col-xl-12 col-md-6">
                                  <label for="input-default">Scheme</label>
                                  <div class="row">
                                    <div class="col-md-6 col-sm-6">
                                      <b-form-input
                                        type="text"
                                        placeholder="Scheme config"
                                      ></b-form-input>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                      <b-button v-b-modal.modal-3 variant="primary"
                                        >Manage Schemes</b-button
                                      >
                                    </div>
                                  </div>
                                  <br />
                                </div>
                                <br />
                                <div class="col-md-6">
                                  <label for="input-default">Status</label>
                                  <select class="form-control">
                                    <option>Active</option>
                                    <option>Disabled</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <br />
                          </template>
                        </stats-card>
                        <base-button
                          class="mt-3"
                          block
                          @click="$bvModal.hide('modal-1')"
                          type="success"
                          >Save</base-button
                        >
                      </b-col>
                    </b-modal>

                    <b-modal id="modal-2" size="lg" title="Password Reset" hide-footer>
                      <stats-card
                        title="Email"
                        type="gradient-green"
                        sub-title=""
                        class="mb-4"
                      >
                        <template slot="footer">
                          <div class="mt-3">
                            <div class="row">
                              <div class="col-md-12 col-sm-12">
                                <label for="input-default">User's Email Address</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Email Address"
                                  readonly
                                ></b-form-input>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-4">
                                <b-button variant="primary"
                                  >Confirm Email Address</b-button
                                >
                                <br />
                              </div>
                              <div class="col-md-4">
                                <b-button
                                  variant="primary"
                                  v-on:click="isHidden = !isHidden"
                                  >Change Email Address
                                </b-button>
                              </div>
                              <br />
                            </div>
                            <div v-if="isHidden" class="row">
                              <div class="col-md-12 col-sm-12">
                                <br />
                                <label for="input-default">New Email Address</label>
                                <b-form-input
                                  type="text"
                                  placeholder="Enter New Email Address"
                                ></b-form-input>
                                <br />
                              </div>
                              <div class="col-md-12 col-sm-12">
                                <label for="input-default">Confirm Email Address</label>
                                <b-form-input
                                  type="text"
                                  placeholder="Confirm New Email Address"
                                ></b-form-input>
                                <br />
                              </div>
                              <div class="col-md-4">
                                <b-button variant="primary"
                                  >Save New Email Address
                                </b-button>
                              </div>
                            </div>
                          </div>
                          <base-button
                            class="mt-3"
                            block
                            @click="$bvModal.hide('modal-2')"
                            type="success"
                            >Generate Password Reset link</base-button
                          >
                        </template>
                      </stats-card>
                    </b-modal>
                    <b-modal id="modal-3" size="lg" title="Manage Schemes" hide-footer>
                    </b-modal>
                  </b-form>
                  <!--1st row-->

                  <!--end of3rd row-->
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-card>
    </base-header>
  </div>
</template>
<script>
import {
  getAllCountries,
  getAllProducts,
  getAllServiceProviders,
  getAllServices,
  getInsuranceProducts,
  saveInsurance,
} from "../../../api/users.api";
import insuranceErrors from "../../../service/insuranceErrors";
export default {
  data() {
    return {
      state: "state",
      country: "",
      countryInsurance: "",
      currencyInsurance: "",
      productInsuranceName: "",
      p_groupInsurance: "",
      p_typeInsurance: "",
      serviceProviderInsurance: "",
      serviceProviderInsuranceExpiry: "",
      serviceProviderInsuranceYIS: "",
      taxRateInsurance: "",
      commisionRateInsurance: "",
      countryInsuranceFormData: [],
      productsInsurancesFormData: [],
      serviceProviderInsuranceFormData: [],
      serviceCategoryFormData: [],
      currency: "",
      p_categoryInsurance: "",
      s_categoryInsurance: "",
      s_categoryInsuranceFormData: [],
      p_category: "",
      p_products: "",
      p_typeintergration: "",
      type: "",
      p_type: "",
      sla: "",
      benefits: "",
      structure: "",
      sector: "",
      interest: "",
      model_insurance: "",
      calculation: "",
      error: "",
      successData: "",
      min_age_ins: "",
      max_age_ins: "",
      selected: [],
      selectAll: false,
    };
  },
  methods: {
    addItem() {
      this.items.push({
        entity: "",
      });
    },
    async saveInsuranceSettings() {
      this.error = "";
      let response = "";
      this.successData = "";
      try {
        this.$loading.show({ delay: 0 });
        response = await saveInsurance(
          this.countryInsurance,
          this.p_categoryInsurance,
          this.s_categoryInsurance,
          this.currencyInsurance,
          this.p_typeInsurance,
          this.serviceProviderInsurance,
          this.commisionRateInsurance,
          this.sla,
          this.serviceProviderInsuranceExpiry,
          this.serviceProviderInsuranceYIS,
          this.model_insurance,
          this.min_age_ins,
          this.max_age_ins,
          this.p_typeintergration,
          this.productInsuranceName,
          this.p_groupInsurance
        );
        console.log(response.data);
      } catch (e) {
        this.$loading.hide();
        let respmess = insuranceErrors.getErrorMessages(e.response.status);
        this.error = respmess;
        throw respmess;
      }
      this.$loading.hide();
      if (response.status === 200) {
        //alert('data saved successfully');
        this.successData = "data saved successfully";
        this.$router.push("/viewproducts");
      }
    },
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.itemscountryInsuranceFormData) {
          this.selected.push(this.itemscountryInsuranceFormData[i].prod_code);
        }
      }
    },
  },
  async mounted() {
    //load data if in localstorage
    if (localStorage.getItem("insurance_Products") !== null) {
      this.countryInsuranceFormData = JSON.parse(
        localStorage.getItem("insurance_Products")
      );
    }
    try {
      let resp = await getInsuranceProducts();
      this.countryInsuranceFormData = resp.data.data;
      console.log(resp.data.data);
      localStorage.setItem("insurance_Products", JSON.stringify(resp.data.data));
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
<style></style>
