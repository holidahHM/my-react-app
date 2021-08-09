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
                <b-form @submit.prevent="updateProfile">
                  <!--Country select -->
                  <!--1st row-->
                  <b-row class="float-right pb-4">
                    <b-button v-b-modal.modal-1 variant="success"
                      >Add Service Provider+</b-button
                    >
                    <b-modal
                      id="modal-1"
                      title="Register Service Provider"
                      size="lg"
                      hide-footer
                    >
                      <b-col xl="12" md="10">
                        <stats-card
                          title=""
                          type="gradient-green"
                          sub-title=""
                          class="mb-4"
                        >
                          <template slot="footer">
                            <div class="mt-3">
                              <div class="row">
                                <div class="col-md-6">
                                  <label for="input-default">Service Provider Name</label>
                                  <b-form-input type="text" placeholder=""></b-form-input>
                                </div>
                                <div class="col-md-3">
                                  <label for="input-default">Provider Type</label>
                                  <select class="form-control">
                                    <option>Custodian</option>
                                    <option>Fund Manager</option>
                                  </select>
                                </div>
                                <div class="col-md-3">
                                  <label for="input-default">Provider Status</label>
                                  <select class="form-control">
                                    <option>Active</option>
                                    <option>Inactive</option>
                                  </select>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-3">
                                  <label for="input-default">Building</label>
                                  <b-form-input type="text" placeholder=""></b-form-input>
                                </div>
                                <div class="col-md-3">
                                  <label for="input-default">Street</label>
                                  <b-form-input type="text" placeholder=""></b-form-input>
                                </div>
                                <div class="col-md-3">
                                  <label for="input-default">City</label>
                                  <b-form-input type="text" placeholder=""></b-form-input>
                                </div>
                                <div class="col-md-3">
                                  <label for="input-default">Country</label>
                                  <b-form-input type="text" placeholder=""></b-form-input>
                                </div>
                              </div></div></template
                        ></stats-card>
                        <b-row>
                          <div class="col-md-4">
                            <base-button class="mt-3" block type="success"
                              >Save Service Provider Info</base-button
                            >
                          </div> </b-row
                        ><br />
                        <b-row
                          ><b-col xl="12" md="12">
                            <stats-card
                              title=""
                              type="gradient-green"
                              sub-title=""
                              class="mb-4"
                            >
                              <template slot="footer">
                                <div class="mt-3">
                                  <div class="row">
                                    <div class="alert alert-danger" v-if="errorSearch">
                                      {{ errorSearch }}
                                    </div>
                                    <div></div>
                                    <div>
                                      <b-col xl="12" lg="12">
                                        <p class="mb-0">
                                          <b
                                            >Type something in the input field to search
                                            the table</b
                                          >
                                        </p>
                                        <b-form-input
                                          type="text"
                                          label=""
                                          placeholder="Search...."
                                          v-model="keyword"
                                          @keyup.enter="searchLogic"
                                        >
                                          <br />
                                        </b-form-input>
                                      </b-col>
                                    </div>
                                  </div>
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
                                                <th scope="col">Provider Name</th>
                                                <th scope="col">Provider Type</th>
                                                <th scope="col">Provider Status</th>
                                                <th scope="col">Building</th>
                                                <th scope="col">City</th>
                                                <th scope="col">Street</th>
                                                <th scope="col">Country</th>
                                                <th scope="col">Action</th>
                                              </tr>
                                            </thead>
                                            <tbody id="myTable">
                                              <tr v-for="i in items">
                                                <td>
                                                  <label class="form-checkbox">
                                                    <input
                                                      type="checkbox"
                                                      :value="i.s_provider_id"
                                                      v-model="selected"
                                                    />
                                                    <i class="form-icon"></i>
                                                  </label>
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>

                                                <td>
                                                  <b-button variant="primary"
                                                    >Edit</b-button
                                                  >
                                                </td>
                                              </tr>
                                            </tbody>
                                            <div>
                                              <b-pagination
                                                v-model="currentPage"
                                                :total-rows="rows"
                                                :per-page="perPage"
                                                first-number
                                              ></b-pagination>
                                            </div>
                                          </table>
                                        </b-row>
                                      </div>
                                    </b-col>
                                  </b-row></div></template></stats-card></b-col
                        ></b-row>
                      </b-col>
                    </b-modal>
                    <b-button v-b-modal.modal-2 variant="success">Add Country+</b-button>
                    <b-modal id="modal-2" title="Country Info" size="lg" hide-footer>
                      <b-col xl="12" md="10">
                        <stats-card
                          title=""
                          type="gradient-green"
                          sub-title=""
                          class="mb-4"
                        >
                          <template slot="footer">
                            <div class="mt-3">
                              <div class="row">
                                <div class="col-md-4">
                                  <label for="input-default">Country Name</label>
                                  <b-form-input type="text" placeholder=""></b-form-input>
                                </div>
                                <div class="col-md-4">
                                  <label for="input-default">Tax Rate%</label>
                                  <b-form-input
                                    type="number"
                                    placeholder=""
                                  ></b-form-input>
                                </div>
                                <div class="col-md-4">
                                  <label for="input-default">Currency</label>
                                  <b-form-input type="text" placeholder=""></b-form-input>
                                </div>
                              </div></div></template
                        ></stats-card>
                        <b-row>
                          <div class="col-md-4">
                            <base-button class="mt-3" block type="success"
                              >Save Country Info</base-button
                            >
                          </div> </b-row
                        ><br />
                        <b-row
                          ><b-col xl="12" md="12">
                            <stats-card
                              title=""
                              type="gradient-green"
                              sub-title=""
                              class="mb-4"
                            >
                              <template slot="footer">
                                <div class="mt-3">
                                  <div class="row">
                                    <div class="alert alert-danger" v-if="errorSearch">
                                      {{ errorSearch }}
                                    </div>
                                    <div></div>
                                    <div>
                                      <b-col xl="12" lg="12">
                                        <p class="mb-0">
                                          <b
                                            >Type something in the input field to search
                                            the table</b
                                          >
                                        </p>
                                        <b-form-input
                                          type="text"
                                          label=""
                                          placeholder="Search...."
                                          v-model="keyword"
                                          @keyup.enter="searchLogic"
                                        >
                                          <br />
                                        </b-form-input>
                                      </b-col>
                                    </div>
                                  </div>
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
                                                <th scope="col">CountryId</th>
                                                <th scope="col">Country Name</th>
                                                <th scope="col">Tax Rate</th>
                                                <th scope="col">Currency</th>
                                                <th scope="col">Action</th>
                                              </tr>
                                            </thead>
                                            <tbody id="myTable">
                                              <tr v-for="i in items">
                                                <td>
                                                  <label class="form-checkbox">
                                                    <input
                                                      type="checkbox"
                                                      :value="i.country_id"
                                                      v-model="selected"
                                                    />
                                                    <i class="form-icon"></i>
                                                  </label>
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                  <b-button variant="primary"
                                                    >Edit</b-button
                                                  >
                                                </td>
                                              </tr>
                                            </tbody>
                                            <div>
                                              <b-pagination
                                                v-model="currentPage"
                                                :total-rows="rows"
                                                :per-page="perPage"
                                                first-number
                                              ></b-pagination>
                                            </div>
                                          </table>
                                        </b-row>
                                      </div>
                                    </b-col>
                                  </b-row></div></template></stats-card></b-col></b-row
                      ></b-col>
                    </b-modal>
                    <b-button v-b-modal.modal-3 variant="success">Add Product+</b-button>
                    <b-modal id="modal-3" title="Product Info" size="lg" hide-footer>
                      <b-col xl="12" md="10">
                        <stats-card
                          title=""
                          type="gradient-green"
                          sub-title=""
                          class="mb-4"
                        >
                          <template slot="footer">
                            <div class="mt-3">
                              <div class="row">
                                <div class="col-md-4">
                                  <label for="input-default">Product Name</label>
                                  <b-form-input type="text" placeholder=""></b-form-input>
                                </div>
                                <div class="col-md-4">
                                  <label for="input-default">Product code</label>
                                  <b-form-input
                                    type="text"
                                    placeholder=""
                                    readonly
                                  ></b-form-input>
                                </div>
                                <div class="col-md-4">
                                  <label for="input-default">Business Code</label>
                                  <b-form-input
                                    type="text"
                                    placeholder=""
                                    readonly
                                  ></b-form-input>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-4">
                                  <label for="input-default">Product Category</label>
                                  <select class="form-control">
                                    <option></option>
                                    <option></option>
                                  </select>
                                </div>
                                <div class="col-md-4">
                                  <label for="input-default">Provider Type</label>
                                  <select class="form-control">
                                    <option></option>
                                    <option></option>
                                  </select>
                                </div>
                                <div class="col-md-4">
                                  <label for="input-default"
                                    >Policy Expiry Interval</label
                                  >
                                  <b-form-input type="text" placeholder=""></b-form-input>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-4">
                                  <label for="input-default">Tax Rate</label>
                                  <b-form-input type="text" placeholder=""></b-form-input>
                                </div>
                                <div class="col-md-4">
                                  <label for="input-default">Contract Start</label>
                                  <b-form-input type="date" placeholder=""></b-form-input>
                                </div>
                                <div class="col-md-4">
                                  <label for="input-default">Contract End</label>
                                  <b-form-input type="date" placeholder=""></b-form-input>
                                </div>
                              </div></div></template
                        ></stats-card>
                        <b-row>
                          <div class="col-md-4">
                            <base-button class="mt-3" block type="success"
                              >Save Product Info</base-button
                            >
                          </div> </b-row
                        ><br />
                        <b-row
                          ><b-col xl="12" md="12">
                            <stats-card
                              title=""
                              type="gradient-green"
                              sub-title=""
                              class="mb-4"
                            >
                              <template slot="footer">
                                <div class="mt-3">
                                  <div class="row">
                                    <div class="alert alert-danger" v-if="errorSearch">
                                      {{ errorSearch }}
                                    </div>
                                    <div></div>
                                    <div>
                                      <b-col xl="12" lg="12">
                                        <p class="mb-0">
                                          <b
                                            >Type something in the input field to search
                                            the table</b
                                          >
                                        </p>
                                        <b-form-input
                                          type="text"
                                          label=""
                                          placeholder="Search...."
                                          v-model="keyword"
                                          @keyup.enter="searchLogic"
                                        >
                                          <br />
                                        </b-form-input>
                                      </b-col>
                                    </div>
                                  </div>
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
                                                <th scope="col">CountryId</th>
                                                <th scope="col">Product Name</th>
                                                <th scope="col">Product Code</th>
                                                <th scope="col">Business Code</th>
                                                <th scope="col">Product Category</th>
                                                <th scope="col">Provider Type</th>
                                                <th scope="col">
                                                  Policy Expiry Interval
                                                </th>
                                                <th scope="col">Tax Rate</th>
                                                <th scope="col">Contract Start</th>
                                                <th scope="col">Contract End</th>
                                                <th scope="col">Action</th>
                                              </tr>
                                            </thead>
                                            <tbody id="myTable">
                                              <tr v-for="i in items">
                                                <td>
                                                  <label class="form-checkbox">
                                                    <input
                                                      type="checkbox"
                                                      :value="i.product_id"
                                                      v-model="selected"
                                                    />
                                                    <i class="form-icon"></i>
                                                  </label>
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                  <b-button variant="primary"
                                                    >Edit</b-button
                                                  >
                                                </td>
                                              </tr>
                                            </tbody>
                                            <div>
                                              <b-pagination
                                                v-model="currentPage"
                                                :total-rows="rows"
                                                :per-page="perPage"
                                                first-number
                                              ></b-pagination>
                                            </div>
                                          </table>
                                        </b-row>
                                      </div>
                                    </b-col>
                                  </b-row></div></template></stats-card></b-col></b-row
                      ></b-col>
                    </b-modal>
                  </b-row>
                  <br /><br /><br />
                  <b-row>
                    <b-col xl="4" md="6">
                      <p>Select your Country</p>
                      <select v-model="country">
                        <option disabled value="">Country</option>
                        <option>Kenya</option>
                        <option>Uganda</option>
                        <option>Zambia</option>
                      </select>
                      <span> Choice: {{ country }}</span>
                    </b-col>
                    <b-col xl="4" md="6">
                      <p>Service Category</p>
                      <select v-model="p_category">
                        <option disabled value="">Service Category</option>
                        <option>Retail</option>
                        <option>Corporate</option>
                      </select>
                      <span> Choice: {{ p_category }}</span>
                    </b-col>
                    <b-col xl="4" md="6">
                      <p>Product Category</p>
                      <select v-model="p_category">
                        <option disabled value="">Product Category</option>
                        <option>Retail</option>
                        <option>Corporate</option>
                      </select>
                      <span> Choice: {{ p_category }}</span>
                    </b-col>
                    <b-col xl="4" md="6">
                      <p>Currency</p>
                      <select v-model="currency">
                        <option disabled value="">Currency</option>
                        <option>Ksh</option>
                        <option>Ugx</option>
                        <option>Zsh</option>
                      </select>
                      <span> Choice: {{ currency }}</span>
                    </b-col>
                    <!--end of 1st row--></b-row
                  >
                  <!--2nd row-->
                  <b-row>
                    <b-col xl="6" md="6">
                      <br />
                      <p>Do you want to add a new Product?</p>

                      <b-form-radio-group
                        v-model="value"
                        :options="options"
                        :state="state"
                        name="radio-validation"
                      >
                        <b-form-invalid-feedback :state="state"
                          >Please select one</b-form-invalid-feedback
                        >
                        <b-form-valid-feedback :state="state"
                          >Thank you</b-form-valid-feedback
                        >
                      </b-form-radio-group>
                    </b-col>
                    <b-col xl="6">
                      <br />
                      <label for="input-default">Enter the Product's name:</label>
                      <b-form-input
                        id="input-default"
                        placeholder="Enter the Product's name"
                      ></b-form-input>
                    </b-col>
                    <!--end of 2nd row --></b-row
                  >
                  <!--start of 3rd row -->
                  <b-row>
                    <b-col xl="12">
                      <br />
                      <p>Choose product you want to define their settings</p>
                      <select v-model="p_products">
                        <option disabled value="">Products</option>
                        <option v-if="p_category === 'Retail'">OPPS</option>
                        <option v-if="p_category === 'Retail'">
                          Octagon Income Drawdown Fund
                        </option>
                        <option v-if="p_category === 'Corporate'">
                          Octagon Umbrella Retirement Benefits
                        </option>
                        <option v-if="p_category === 'Corporate'">
                          Occupational Scheme
                        </option>
                      </select>
                      <span> Choice: {{ p_products }}</span>
                    </b-col>
                  </b-row>
                  <!--end of 3rd row-->
                  <br />
                  <b-row>
                    <b-col xl="6" md="6">
                      <p>TYPE</p>
                      <select v-model="type">
                        <option disabled value="">TYPE</option>
                        <option>SEGREGATED</option>
                        <option>GURANTEED</option>
                      </select>
                      <span> Choice: {{ type }}</span>
                    </b-col>
                    <b-col xl="6" md="6">
                      <p>STRUCTURE</p>
                      <select v-model="structure">
                        <option disabled value="">Structure</option>
                        <option>DC</option>
                        <option>DB</option>
                      </select>
                      <span> Choice: {{ structure }}</span>
                    </b-col>
                  </b-row>
                  <!--end of 4th row-->
                  <br />
                  <b-row>
                    <b-col xl="6" md="6">
                      <p>Benefits structure</p>
                      <select v-model="benefits">
                        <option disabled value="">Benefits structure</option>
                        <option>Pension</option>
                        <option>Provident</option>
                      </select>
                      <span> Choice: {{ benefits }}</span>
                    </b-col>
                    <b-col xl="6" md="6">
                      <p>Sector</p>
                      <select v-model="sector">
                        <option disabled value="">Sector</option>
                        <option>Financial</option>
                        <option>Agricultural</option>
                        <option>Commercial and Services</option>
                        <option>Educational</option>
                        <option>Medical</option>
                        <option>Production</option>
                        <option>Religious</option>
                        <option>Sports and Recreation</option>
                      </select>
                      <span> Choice: {{ sector }}</span>
                    </b-col>
                  </b-row>
                  <!--end of 4th row-->
                  <br />
                  <b-row>
                    <b-col xl="6" md="6">
                      <p>Tax</p>
                      <b-form-input
                        id="input-default"
                        placeholder="Enter the Tax Rate"
                      ></b-form-input>
                    </b-col>

                    <b-col xl="6" md="6">
                      <p>Tax relief</p>
                      <b-form-input
                        id="input-default"
                        placeholder="Enter the Tax Relief"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <!--end of 4th row-->
                  <br />
                  <b-row>
                    <b-col xl="6" md="6">
                      <p>Contribution relief</p>
                      <b-form-input
                        id="input-default"
                        placeholder="Enter the Contribution Relief"
                      ></b-form-input>
                    </b-col>

                    <b-col xl="6" md="6">
                      <p>Personal relief</p>
                      <b-form-input
                        id="input-default"
                        placeholder="Enter the Personal relief"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <!--end of 4th row-->
                  <br />
                  <b-row>
                    <b-col xl="6" md="6">
                      <p>Annuity relief</p>
                      <b-form-input
                        id="input-default"
                        placeholder="Enter the Annuity Relief"
                      ></b-form-input>
                    </b-col>
                    <b-col xl="6" md="6">
                      <p>Pension relief</p>
                      <b-form-input
                        id="input-default"
                        placeholder="Enter the Pension Relief"
                      ></b-form-input>
                    </b-col>
                    <!--add code  
  <b-col xl='6' md="6">
   <input v-for="item in items" v-model="item.entity"></input>
  <button @click="addItem">add</button>
 </b-col>-->
                  </b-row>
                  <!--end of 4th row-->
                  <br />
                  <b-row>
                    <b-col xl="6" md="6">
                      <p>Interest Time period Calculation</p>
                      <select v-model="interest">
                        <option disabled value="">Time period</option>
                        <option>Monthly</option>
                        <option>Quartely</option>
                        <option>Yearly</option>
                      </select>
                      <span> Choice: {{ interest }}</span>
                    </b-col>
                    <b-col xl="6" md="6">
                      <p>Calculation mode</p>
                      <select v-model="calculation">
                        <option disabled value="">calculation</option>
                        <option>Simple Interest</option>
                        <option>Compound Interest</option>
                      </select>
                      <span> Choice: {{ calculation }}</span>
                    </b-col>
                  </b-row>
                  <br />
                  <b-row class="d-flex justify-content-center mb-3">
                    <base-button type="info">Save</base-button>

                    <base-button type="danger">Delete</base-button>
                  </b-row>
                </b-form>
              </b-tab>

              <!--Insurance Tab-->
              <b-tab title="Insurance"
                ><b-card-text>
                  <b-form @submit.prevent="updateProfile"
                    ><b-row class="float-right pb-4">
                      <b-button v-b-modal.modal-4 variant="success"
                        >Add Service Provider+</b-button
                      >
                      <b-modal
                        id="modal-4"
                        title="Register Service Provider"
                        size="lg"
                        hide-footer
                      >
                        <b-col xl="12" md="10">
                          <stats-card
                            title=""
                            type="gradient-green"
                            sub-title=""
                            class="mb-4"
                          >
                            <template slot="footer">
                              <div class="mt-3">
                                <div class="row">
                                  <div class="col-md-6">
                                    <label for="input-default"
                                      >Service Provider Name</label
                                    >
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      v-model="sp_name"
                                    ></b-form-input>
                                  </div>
                                  <!--<div class="col-md-3">
                                    <label for="input-default">Provider Type</label>
                                    <select class="form-control">
                                      <option>Custodian</option>
                                      <option>Fund Manager</option>
                                    </select>
                                  </div>-->
                                  <div class="col-md-3">
                                    <label for="input-default">Provider Status</label>
                                    <select class="form-control" v-model="sp_status">
                                      <option>Active</option>
                                      <option>Inactive</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-3">
                                    <label for="input-default">Building</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      v-model="sp_building"
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">Street</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      v-model="sp_street"
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">City</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      v-model="sp_city"
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">Country</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      v-model="sp_country"
                                    ></b-form-input>
                                  </div>
                                </div></div></template
                          ></stats-card>
                          <b-row>
                            <div class="col-md-4">
                              <base-button class="mt-3" block type="success"
                                >Save Service Provider Info</base-button
                              >
                            </div> </b-row
                          ><br />
                          <b-row
                            ><b-col xl="12" md="12">
                              <stats-card
                                title=""
                                type="gradient-green"
                                sub-title=""
                                class="mb-4"
                              >
                                <template slot="footer">
                                  <div class="mt-3">
                                    <div class="row">
                                      <div class="alert alert-danger" v-if="errorSearch">
                                        {{ errorSearch }}
                                      </div>
                                      <div></div>
                                      <div>
                                        <b-col xl="12" lg="12">
                                          <p class="mb-0">
                                            <b
                                              >Type something in the input field to search
                                              the table</b
                                            >
                                          </p>
                                          <b-form-input
                                            type="text"
                                            label=""
                                            placeholder="Search...."
                                            v-model="keyword"
                                            @keyup.enter="searchLogic"
                                          >
                                            <br />
                                          </b-form-input>
                                        </b-col>
                                      </div>
                                    </div>
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
                                                  <th scope="col">Provider Name</th>
                                                  <th scope="col">Provider Type</th>
                                                  <th scope="col">Provider Status</th>
                                                  <th scope="col">Building</th>
                                                  <th scope="col">City</th>
                                                  <th scope="col">Street</th>
                                                  <th scope="col">Country</th>
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
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>

                                                  <td>
                                                    <b-button
                                                      v-b-modal.modal-16
                                                      variant="primary"
                                                      >Edit</b-button
                                                    >
                                                    <b-modal
                                                      id="modal-16"
                                                      title="Edit Service Provider Details"
                                                      size="lg"
                                                      hide-footer
                                                    >
                                                      <b-col xl="12" md="10">
                                                        <stats-card
                                                          title=""
                                                          type="gradient-green"
                                                          sub-title=""
                                                          class="mb-4"
                                                        >
                                                          <template slot="footer">
                                                            <div class="mt-3">
                                                              <div class="row">
                                                                <div class="col-md-6">
                                                                  <label
                                                                    for="input-default"
                                                                    >Service Provider
                                                                    Name</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Provider Type</label
                                                                  >
                                                                  <select
                                                                    class="form-control"
                                                                  >
                                                                    <option>
                                                                      Custodian
                                                                    </option>
                                                                    <option>
                                                                      Fund Manager
                                                                    </option>
                                                                  </select>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Provider
                                                                    Status</label
                                                                  >
                                                                  <select
                                                                    class="form-control"
                                                                  >
                                                                    <option>
                                                                      Active
                                                                    </option>
                                                                    <option>
                                                                      Inactive
                                                                    </option>
                                                                  </select>
                                                                </div>
                                                              </div>
                                                              <div class="row">
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Building</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Street</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >City</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Country</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                              </div></div></template
                                                        ></stats-card>
                                                        <b-row>
                                                          <div class="col-md-4">
                                                            <base-button
                                                              class="mt-3"
                                                              block
                                                              @click="
                                                                $bvModal.hide('modal-16')
                                                              "
                                                              type="success"
                                                              >Save</base-button
                                                            >
                                                          </div>
                                                        </b-row></b-col
                                                      >
                                                    </b-modal>
                                                  </td>
                                                </tr>
                                              </tbody>
                                              <div>
                                                <b-pagination
                                                  v-model="currentPage"
                                                  :total-rows="rows"
                                                  :per-page="perPage"
                                                  first-number
                                                ></b-pagination>
                                              </div>
                                            </table>
                                          </b-row>
                                        </div>
                                      </b-col>
                                    </b-row></div></template></stats-card></b-col
                          ></b-row>
                        </b-col>
                      </b-modal>
                      <b-button v-b-modal.modal-5 variant="success"
                        >Add Country+</b-button
                      >
                      <b-modal id="modal-5" title="Country Info" size="lg" hide-footer>
                        <b-col xl="12" md="10">
                          <stats-card
                            title=""
                            type="gradient-green"
                            sub-title=""
                            class="mb-4"
                          >
                            <template slot="footer">
                              <div class="mt-3">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Country Name</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      v-model="cr_name"
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Tax Rate%</label>
                                    <b-form-input
                                      type="number"
                                      placeholder=""
                                      v-model="cr_taxrate"
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Currency</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      v-model="cr_currrency"
                                    ></b-form-input>
                                  </div>
                                </div></div></template
                          ></stats-card>
                          <b-row>
                            <div class="col-md-4">
                              <base-button class="mt-3" block type="success"
                                >Save Country Info</base-button
                              >
                            </div> </b-row
                          ><br />
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
                                        <th scope="col">CountryId</th>
                                        <th scope="col">Country Name</th>
                                        <th scope="col">Tax Rate</th>
                                        <th scope="col">Currency</th>
                                        <th scope="col">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody id="myTable">
                                      <tr v-for="i in items">
                                        <td>
                                          <label class="form-checkbox">
                                            <input
                                              type="checkbox"
                                              :value="i.country_id"
                                              v-model="selected"
                                            />
                                            <i class="form-icon"></i>
                                          </label>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                          <b-button v-b-modal.modal-16 variant="primary"
                                            >Edit</b-button
                                          >
                                          <b-modal
                                            id="modal-16"
                                            title="Edit Country Details"
                                            size="lg"
                                            hide-footer
                                          >
                                            <b-col xl="12" md="10">
                                              <stats-card
                                                title=""
                                                type="gradient-green"
                                                sub-title=""
                                                class="mb-4"
                                              >
                                                <template slot="footer">
                                                  <div class="mt-3">
                                                    <div class="row">
                                                      <div class="col-md-4">
                                                        <label for="input-default"
                                                          >Country Name</label
                                                        >
                                                        <b-form-input
                                                          type="text"
                                                          placeholder=""
                                                        ></b-form-input>
                                                      </div>
                                                      <div class="col-md-4">
                                                        <label for="input-default"
                                                          >Tax Rate%</label
                                                        >
                                                        <b-form-input
                                                          type="text"
                                                          placeholder=""
                                                        ></b-form-input>
                                                      </div>
                                                      <div class="col-md-4">
                                                        <label for="input-default"
                                                          >Currency</label
                                                        >
                                                        <b-form-input
                                                          type="text"
                                                          placeholder=""
                                                        ></b-form-input>
                                                      </div>
                                                    </div></div></template
                                              ></stats-card>
                                              <b-row>
                                                <div class="col-md-4">
                                                  <base-button
                                                    class="mt-3"
                                                    block
                                                    @click="$bvModal.hide('modal-16')"
                                                    type="success"
                                                    >Save</base-button
                                                  >
                                                </div>
                                              </b-row></b-col
                                            >
                                          </b-modal>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <div>
                                      <b-pagination
                                        v-model="currentPage"
                                        :total-rows="rows"
                                        :per-page="perPage"
                                        first-number
                                      ></b-pagination>
                                    </div>
                                  </table>
                                </b-row>
                              </div>
                            </b-col> </b-row
                        ></b-col>
                      </b-modal>
                      <b-button v-b-modal.modal-6 variant="success"
                        >Add Product+</b-button
                      >
                      <b-modal id="modal-6" title="Product Info" size="lg" hide-footer>
                        <b-col xl="12" md="10">
                          <stats-card
                            title=""
                            type="gradient-green"
                            sub-title=""
                            class="mb-4"
                          >
                            <template slot="footer">
                              <div class="mt-3">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Product Name</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      v-model="pr_name"
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Product code</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      v-model="pr_prcode"
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Business Code</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      v-model="pr_bscode"
                                      readonly
                                    ></b-form-input>
                                  </div>
                                </div></div></template
                          ></stats-card>
                          <b-row>
                            <div class="col-md-4">
                              <base-button class="mt-3" block type="success"
                                >Save Product Info</base-button
                              >
                            </div> </b-row
                          ><br />
                          <b-row
                            ><b-col xl="12" md="12">
                              <stats-card
                                title=""
                                type="gradient-green"
                                sub-title=""
                                class="mb-4"
                              >
                                <template slot="footer">
                                  <div class="mt-3">
                                    <div class="row">
                                      <div class="alert alert-danger" v-if="errorSearch">
                                        {{ errorSearch }}
                                      </div>
                                      <div></div>
                                      <div>
                                        <b-col xl="12" lg="12">
                                          <p class="mb-0">
                                            <b
                                              >Type something in the input field to search
                                              the table</b
                                            >
                                          </p>
                                          <b-form-input
                                            type="text"
                                            label=""
                                            placeholder="Search...."
                                            v-model="keyword"
                                            @keyup.enter="searchLogic"
                                          >
                                            <br />
                                          </b-form-input>
                                        </b-col>
                                      </div>
                                    </div>
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
                                                  <th scope="col">CountryId</th>
                                                  <th scope="col">Product Name</th>
                                                  <th scope="col">Product Code</th>
                                                  <th scope="col">Business Code</th>
                                                  <th scope="col">Product Category</th>
                                                  <th scope="col">Provider Type</th>
                                                  <th scope="col">
                                                    Policy Expiry Interval
                                                  </th>
                                                  <th scope="col">Tax Rate</th>
                                                  <th scope="col">Contract Start</th>
                                                  <th scope="col">Contract End</th>
                                                  <th scope="col">Action</th>
                                                </tr>
                                              </thead>
                                              <tbody id="myTable">
                                                <tr v-for="i in items">
                                                  <td>
                                                    <label class="form-checkbox">
                                                      <input
                                                        type="checkbox"
                                                        :value="i.product_id"
                                                        v-model="selected"
                                                      />
                                                      <i class="form-icon"></i>
                                                    </label>
                                                  </td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td>
                                                    <b-button variant="primary"
                                                      >Edit</b-button
                                                    >
                                                  </td>
                                                </tr>
                                              </tbody>
                                              <div>
                                                <b-pagination
                                                  v-model="currentPage"
                                                  :total-rows="rows"
                                                  :per-page="perPage"
                                                  first-number
                                                ></b-pagination>
                                              </div>
                                            </table>
                                          </b-row>
                                        </div>
                                      </b-col>
                                    </b-row></div></template></stats-card></b-col></b-row
                        ></b-col>
                      </b-modal> </b-row
                    ><br /><br /><br />
                    <b-row>
                      <b-col xl="4" md="6">
                        <p>Select your Country</p>
                        <select v-model="countryInsurance">
                          <option disabled value="">Country</option>
                          <option
                            :value="count.country_id"
                            v-for="count in countryInsuranceFormData"
                            v-bind:key="count.country_id"
                          >
                            {{ count.country_name }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ countryInsurance }}</span>-->
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>Product Category</p>
                        <select v-model="p_categoryInsurance">
                          <option disabled value="">Product Category</option>
                          <option
                            :value="prod.prod_code"
                            v-for="prod in productsInsurancesFormData"
                            v-bind:key="prod.prod_code"
                          >
                            {{ prod.prod_category }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ p_categoryInsurance }}</span>-->
                      </b-col>

                      <b-col xl="4" md="4">
                        <p>Service Category</p>
                        <select v-model="s_categoryInsurance">
                          <option disabled value="">Service Category</option>
                          <option
                            :value="service.service_code"
                            v-for="service in serviceCategoryFormData"
                            v-bind:key="service.service_code"
                          >
                            {{ service.service_category }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ s_categoryInsurance }}</span>-->
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>Currency</p>
                        <select v-model="currencyInsurance">
                          <option disabled value="">Currency</option>
                          <option
                            :value="curr.country_id"
                            v-for="curr in countryInsuranceFormData"
                            v-bind:key="curr.id"
                          >
                            {{ curr.currency_code }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ currencyInsurance }}</span>-->
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>Product Name</p>
                        <select v-model="productInsuranceName">
                          <option disabled value="">Product Name</option>
                          <option
                            :value="pname.prod_code"
                            v-for="pname in productsInsurancesFormData"
                            v-bind:key="pname.prod_code"
                          >
                            {{ pname.prod_name }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ productInsuranceName }}</span>-->
                      </b-col>
                      <!--end of 1st row--></b-row
                    >
                    <b-row>
                      <b-col xl="12" md="6">
                        <p>Product Group</p>
                        <select v-model="p_groupInsurance">
                          <option disabled value="">Product Group</option>
                          <option
                            :value="pgrp.prod_code"
                            v-for="pgrp in productsInsurancesFormData"
                            v-bind:key="pgrp.prod_code"
                          >
                            {{ pgrp.prod_group }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ p_groupInsurance }}</span>-->
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col xl="12" md="6">
                        <p>Product Type</p>
                        <select v-model="p_typeInsurance">
                          <option disabled value="">Product Type</option>
                          <option
                            :value="ptype.prod_code"
                            v-for="ptype in productsInsurancesFormData"
                            v-bind:key="ptype.prod_code"
                          >
                            {{ ptype.prod_type }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ p_typeInsurance }}</span>-->
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col xl="6" md="6">
                        <p>Service provider</p>
                        <select v-model="serviceProviderInsurance">
                          <option disabled value="">Service Provider</option>
                          <option
                            :value="serviceProv.id"
                            v-for="serviceProv in serviceProviderInsuranceFormData"
                            v-bind:key="serviceProv.id"
                          >
                            {{ serviceProv.sp_name }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ serviceProviderInsurance }}</span>-->
                      </b-col>
                      <b-col xl="6" md="6">
                        <p>Commision rate</p>
                        <select v-model="commisionRateInsurance">
                          <option disabled value="">Commission rate</option>
                          <option
                            :value="serviceProv.id"
                            v-for="serviceProv in serviceProviderInsuranceFormData"
                            v-bind:key="serviceProv.id"
                          >
                            {{ serviceProv.commission_rate }}% for
                            {{ serviceProv.sp_name }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ commisionRateInsurance }}</span>-->
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col xl="6" md="6">
                        <p>SLA</p>
                        <select v-model="sla">
                          <option disabled value="">SLA</option>
                          <option
                            :value="serviceProv.id"
                            v-for="serviceProv in serviceProviderInsuranceFormData"
                            v-bind:key="serviceProv.id"
                          >
                            {{ serviceProv.SLA_present }} for {{ serviceProv.sp_name }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ sla }}</span>-->
                      </b-col>
                      <b-col xl="6" md="6">
                        <p>SLA Expiry date</p>
                        <select v-model="serviceProviderInsuranceExpiry">
                          <option disabled value="">SLA expiry</option>
                          <option
                            :value="serviceProv.expiry_date.date"
                            v-for="serviceProv in serviceProviderInsuranceFormData"
                            v-bind:key="serviceProv.id"
                          >
                            {{ serviceProv.expiry_date.date }} for
                            {{ serviceProv.sp_name }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ serviceProviderInsuranceExpiry }}</span>-->
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col xl="6" md="6">
                        <p>Year of service</p>
                        <select v-model="serviceProviderInsuranceYIS">
                          <option disabled value="">Year in service</option>
                          <option
                            :value="serviceProv.id"
                            v-for="serviceProv in serviceProviderInsuranceFormData"
                            v-bind:key="serviceProv.id"
                          >
                            {{ serviceProv.years_in_service }} years for
                            {{ serviceProv.sp_name }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ serviceProviderInsuranceYIS }}</span>-->
                      </b-col>
                      <b-col xl="6" md="6">
                        <p>MODEL (seperate each model with a comma , )</p>
                        <b-form-input
                          id="input-default"
                          v-model="model_insurance"
                          placeholder="Enter MODEL not serviced"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <!-- <b-col xl='3' md="6">
               <p>MIN AGE</p>
      <b-form-input id="input-default" placeholder="Enter MIN AGE"></b-form-input>
 </b-col>
    <b-col xl='3' md="6">
               <p>MAX AGE</p>
      <b-form-input id="input-default" placeholder="Enter MAX AGE"></b-form-input>
 </b-col> -->
                      <b-col xl="3" md="6">
                        <p>Tax Rate</p>
                        <select v-model="taxRateInsurance">
                          <option disabled value="">Tax Rate</option>
                          <option
                            :value="taxrate.country_id"
                            v-for="taxrate in countryInsuranceFormData"
                            v-bind:key="taxrate.country_id"
                          >
                            {{ taxrate.tax_rate }} for {{ taxrate.country_name }}
                          </option>
                        </select>
                        <!--<span> Choice: {{ taxRateInsurance }}</span>-->
                      </b-col>
                      <b-col xl="3" md="6">
                        <p>Mode of Intergration</p>
                        <select v-model="p_typeintergration">
                          <option disabled value="">Mode of Intergration</option>
                          <option value="API">API</option>
                          <option value="FILE">FILE</option>
                          <option value="Database">Database</option>
                        </select>
                        <!--<span> Choice: {{ p_typeintergration }}</span>-->
                      </b-col>
                    </b-row>

                    <br />
                    <b-row class="d-flex justify-content-center mb-3">
                      <base-button type="info" @click.prevent="saveInsuranceSettings()"
                        >Save</base-button
                      >

                      <base-button type="danger">Delete</base-button>
                    </b-row>
                    <div class="alert alert-danger" v-if="error">
                      {{ error }}
                    </div>
                    <div class="alert alert-success" v-if="successData">
                      {{ successData }}
                    </div>
                  </b-form>
                  <!--1st row-->
                  <b-row>
                    <b-col xl="12" md="12">
                      <stats-card
                        title=""
                        type="gradient-green"
                        sub-title=""
                        class="mb-4"
                      >
                        <template slot="footer">
                          <div class="mt-3">
                            <div class="row">
                              <div>
                                <b-col xl="12" lg="12">
                                  <p class="mb-0">
                                    <b
                                      >Type something in the input field to search the
                                      table</b
                                    >
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
                            </div>
                            <br />
                            <div class="row">
                              <b-col lg="12" sm="12" xl="12">
                                <div style="overflow: scroll">
                                  <b-row>
                                    <table class="table table-stripped">
                                      <thead class="thead-light">
                                        <tr>
                                          <th scope="col">
                                            <label class="form-checkbox">
                                              <input type="checkbox" />
                                            </label>
                                          </th>
                                          <th scope="col">ProductId</th>
                                          <th scope="col">Product Name</th>
                                          <th scope="col">Product Category</th>
                                          <th scope="col">Product Type</th>
                                          <th scope="col">Tax Rate</th>
                                          <th scope="col">SLA Expiry Date</th>
                                          <th scope="col">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody id="myTable"></tbody>
                                    </table>
                                  </b-row>
                                </div>
                              </b-col>
                            </div>
                          </div> </template
                      ></stats-card> </b-col
                  ></b-row>

                  <!--end of 3rd row-->
                </b-card-text>
              </b-tab>
              <!--Trust Tab-->
              <b-tab title="Trust"
                ><b-card-text>
                  <b-form @submit.prevent="updateProfile">
                    <b-row class="float-right pb-4">
                      <b-button v-b-modal.modal-7 variant="success"
                        >Add Service Provider+</b-button
                      >
                      <b-modal
                        id="modal-7"
                        title="Register Service Provider"
                        size="lg"
                        hide-footer
                      >
                        <b-col xl="12" md="10">
                          <stats-card
                            title=""
                            type="gradient-green"
                            sub-title=""
                            class="mb-4"
                          >
                            <template slot="footer">
                              <div class="mt-3">
                                <div class="row">
                                  <div class="col-md-6">
                                    <label for="input-default"
                                      >Service Provider Name</label
                                    >
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">Provider Type</label>
                                    <select class="form-control">
                                      <option>Custodian</option>
                                      <option>Fund Manager</option>
                                    </select>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">Provider Status</label>
                                    <select class="form-control">
                                      <option>Active</option>
                                      <option>Inactive</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-3">
                                    <label for="input-default">Building</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">Street</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">City</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">Country</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                </div></div></template
                          ></stats-card>
                          <b-row>
                            <div class="col-md-4">
                              <base-button class="mt-3" type="success"
                                >Save Service Provider Info</base-button
                              >
                            </div> </b-row
                          ><br />

                          <b-row
                            ><b-col xl="12" md="12">
                              <stats-card
                                title=""
                                type="gradient-green"
                                sub-title=""
                                class="mb-4"
                              >
                                <template slot="footer">
                                  <div class="mt-3">
                                    <div class="row">
                                      <div class="alert alert-danger" v-if="errorSearch">
                                        {{ errorSearch }}
                                      </div>
                                      <div></div>
                                      <div>
                                        <b-col xl="12" lg="12">
                                          <p class="mb-0">
                                            <b
                                              >Type something in the input field to search
                                              the table</b
                                            >
                                          </p>
                                          <b-form-input
                                            type="text"
                                            label=""
                                            placeholder="Search...."
                                            v-model="keyword"
                                            @keyup.enter="searchLogic"
                                          >
                                            <br />
                                          </b-form-input>
                                        </b-col>
                                      </div>
                                    </div>
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
                                                  <th scope="col">Provider Name</th>
                                                  <th scope="col">Provider Type</th>
                                                  <th scope="col">Provider Status</th>
                                                  <th scope="col">Building</th>
                                                  <th scope="col">City</th>
                                                  <th scope="col">Street</th>
                                                  <th scope="col">Country</th>
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
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>

                                                  <td>
                                                    <b-button
                                                      v-b-modal.modal-16
                                                      variant="primary"
                                                      >Edit</b-button
                                                    >
                                                    <b-modal
                                                      id="modal-16"
                                                      title="Edit Service Provider Details"
                                                      size="lg"
                                                      hide-footer
                                                    >
                                                      <b-col xl="12" md="10">
                                                        <stats-card
                                                          title=""
                                                          type="gradient-green"
                                                          sub-title=""
                                                          class="mb-4"
                                                        >
                                                          <template slot="footer">
                                                            <div class="mt-3">
                                                              <div class="row">
                                                                <div class="col-md-6">
                                                                  <label
                                                                    for="input-default"
                                                                    >Service Provider
                                                                    Name</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Provider Type</label
                                                                  >
                                                                  <select
                                                                    class="form-control"
                                                                  >
                                                                    <option>
                                                                      Custodian
                                                                    </option>
                                                                    <option>
                                                                      Fund Manager
                                                                    </option>
                                                                  </select>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Provider
                                                                    Status</label
                                                                  >
                                                                  <select
                                                                    class="form-control"
                                                                  >
                                                                    <option>
                                                                      Active
                                                                    </option>
                                                                    <option>
                                                                      Inactive
                                                                    </option>
                                                                  </select>
                                                                </div>
                                                              </div>
                                                              <div class="row">
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Building</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Street</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >City</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Country</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                              </div></div></template
                                                        ></stats-card>
                                                        <b-row>
                                                          <div class="col-md-4">
                                                            <base-button
                                                              class="mt-3"
                                                              block
                                                              @click="
                                                                $bvModal.hide('modal-16')
                                                              "
                                                              type="success"
                                                              >Save</base-button
                                                            >
                                                          </div>
                                                        </b-row></b-col
                                                      >
                                                    </b-modal>
                                                  </td>
                                                </tr>
                                              </tbody>
                                              <div>
                                                <b-pagination
                                                  v-model="currentPage"
                                                  :total-rows="rows"
                                                  :per-page="perPage"
                                                  first-number
                                                ></b-pagination>
                                              </div>
                                            </table>
                                          </b-row>
                                        </div>
                                      </b-col>
                                    </b-row></div></template></stats-card></b-col></b-row
                        ></b-col>
                      </b-modal>
                      <b-button v-b-modal.modal-8 variant="success"
                        >Add Country+</b-button
                      >
                      <b-modal id="modal-8" title="Country Info" size="lg" hide-footer>
                        <b-col xl="12" md="10">
                          <stats-card
                            title=""
                            type="gradient-green"
                            sub-title=""
                            class="mb-4"
                          >
                            <template slot="footer">
                              <div class="mt-3">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Country Name</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Tax Rate%</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      readonly
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Currency</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                </div></div></template
                          ></stats-card>
                          <b-row>
                            <div class="col-md-4">
                              <base-button class="mt-3" block type="success"
                                >Save Country Info</base-button
                              >
                            </div> </b-row
                          ><br />
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
                                        <th scope="col">CountryId</th>
                                        <th scope="col">Country Name</th>
                                        <th scope="col">Tax Rate</th>
                                        <th scope="col">Currency</th>
                                        <th scope="col">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody id="myTable">
                                      <tr v-for="i in items">
                                        <td>
                                          <label class="form-checkbox">
                                            <input
                                              type="checkbox"
                                              :value="i.country_id"
                                              v-model="selected"
                                            />
                                            <i class="form-icon"></i>
                                          </label>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                          <b-button variant="primary">Edit</b-button>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <div>
                                      <b-pagination
                                        v-model="currentPage"
                                        :total-rows="rows"
                                        :per-page="perPage"
                                        first-number
                                      ></b-pagination>
                                    </div>
                                  </table>
                                </b-row>
                              </div>
                            </b-col> </b-row
                        ></b-col>
                      </b-modal>
                      <b-button v-b-modal.modal-9 variant="success"
                        >Add Product+</b-button
                      >
                      <b-modal id="modal-9" title="Product Info" size="lg" hide-footer>
                        <b-col xl="12" md="10">
                          <stats-card
                            title=""
                            type="gradient-green"
                            sub-title=""
                            class="mb-4"
                          >
                            <template slot="footer">
                              <div class="mt-3">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Product Name</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Product code</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      readonly
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Business Code</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      readonly
                                    ></b-form-input>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Product Category</label>
                                    <select class="form-control">
                                      <option></option>
                                      <option></option>
                                    </select>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Provider Type</label>
                                    <select class="form-control">
                                      <option></option>
                                      <option></option>
                                    </select>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default"
                                      >Policy Expiry Interval</label
                                    >
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Tax Rate</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Contract Start</label>
                                    <b-form-input
                                      type="date"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Contract End</label>
                                    <b-form-input
                                      type="date"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                </div></div></template
                          ></stats-card>
                          <b-row>
                            <div class="col-md-4">
                              <base-button class="mt-3" block type="success"
                                >Save Product Info</base-button
                              >
                            </div> </b-row
                          ><br />
                          <b-row
                            ><b-col xl="12" md="12">
                              <stats-card
                                title=""
                                type="gradient-green"
                                sub-title=""
                                class="mb-4"
                              >
                                <template slot="footer">
                                  <div class="mt-3">
                                    <div class="row">
                                      <div class="alert alert-danger" v-if="errorSearch">
                                        {{ errorSearch }}
                                      </div>
                                      <div></div>
                                      <div>
                                        <b-col xl="12" lg="12">
                                          <p class="mb-0">
                                            <b
                                              >Type something in the input field to search
                                              the table</b
                                            >
                                          </p>
                                          <b-form-input
                                            type="text"
                                            label=""
                                            placeholder="Search...."
                                            v-model="keyword"
                                            @keyup.enter="searchLogic"
                                          >
                                            <br />
                                          </b-form-input>
                                        </b-col>
                                      </div>
                                    </div>
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
                                                  <th scope="col">CountryId</th>
                                                  <th scope="col">Product Name</th>
                                                  <th scope="col">Product Code</th>
                                                  <th scope="col">Business Code</th>
                                                  <th scope="col">Product Category</th>
                                                  <th scope="col">Provider Type</th>
                                                  <th scope="col">
                                                    Policy Expiry Interval
                                                  </th>
                                                  <th scope="col">Tax Rate</th>
                                                  <th scope="col">Contract Start</th>
                                                  <th scope="col">Contract End</th>
                                                  <th scope="col">Action</th>
                                                </tr>
                                              </thead>
                                              <tbody id="myTable">
                                                <tr v-for="i in items">
                                                  <td>
                                                    <label class="form-checkbox">
                                                      <input
                                                        type="checkbox"
                                                        :value="i.product_id"
                                                        v-model="selected"
                                                      />
                                                      <i class="form-icon"></i>
                                                    </label>
                                                  </td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td>
                                                    <b-button variant="primary"
                                                      >Edit</b-button
                                                    >
                                                  </td>
                                                </tr>
                                              </tbody>
                                              <div>
                                                <b-pagination
                                                  v-model="currentPage"
                                                  :total-rows="rows"
                                                  :per-page="perPage"
                                                  first-number
                                                ></b-pagination>
                                              </div>
                                            </table>
                                          </b-row>
                                        </div>
                                      </b-col>
                                    </b-row></div></template></stats-card></b-col></b-row
                        ></b-col>
                      </b-modal> </b-row
                    ><br /><br /><br />
                    <b-row>
                      <b-col xl="4" md="6">
                        <p>Select your Country</p>
                        <select v-model="country">
                          <option disabled value="">Country</option>
                          <option>Kenya</option>
                          <option>Uganda</option>
                          <option>Zambia</option>
                        </select>
                        <span> Choice: {{ country }}</span>
                      </b-col>

                      <b-col xl="4" md="4">
                        <p>Service Category</p>
                        <select v-model="p_category">
                          <option disabled value="">Service Category</option>
                          <option>Retail</option>
                          <option>Corporate</option>
                        </select>
                        <span> Choice: {{ p_category }}</span>
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>Product Category</p>
                        <select v-model="p_category">
                          <option disabled value="">Product Category</option>
                          <option>Retail</option>
                          <option>Corporate</option>
                        </select>
                        <span> Choice: {{ p_category }}</span>
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>Currency</p>
                        <select v-model="currency">
                          <option disabled value="">Currency</option>
                          <option>Ksh</option>
                          <option>Ugx</option>
                          <option>Zsh</option>
                        </select>
                        <span> Choice: {{ currency }}</span>
                      </b-col>
                      <!--end of 1st row--></b-row
                    >
                    <b-row>
                      <b-col xl="12" md="6">
                        <p>Product</p>
                        <select v-model="p_category">
                          <option disabled value="">Product</option>
                          <option>Living Trust</option>
                          <option>Corporate Trustee</option>
                          <option>Hakika Trust</option>
                        </select>
                        <span> Choice: {{ p_category }}</span>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col xl="4" md="6">
                        <p>MIN AGE</p>
                        <b-form-input
                          id="input-default"
                          placeholder="Enter MIN AGE"
                        ></b-form-input>
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>MAX AGE</p>
                        <b-form-input
                          id="input-default"
                          placeholder="Enter MAX AGE"
                        ></b-form-input>
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>Tax Rate</p>
                        <b-form-input
                          id="input-default"
                          placeholder="Enter Tax Rate"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col xl="6" md="6">
                        <p>Interest Time period Calculation</p>
                        <select v-model="interest">
                          <option disabled value="">Time period</option>
                          <option>Monthly</option>
                          <option>Quartely</option>
                          <option>Yearly</option>
                        </select>
                        <span> Choice: {{ interest }}</span>
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>Beneficiary</p>
                        <b-form-input
                          id="input-default"
                          placeholder="Beneficiary"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <br />
                    <b-row class="d-flex justify-content-center mb-3">
                      <base-button type="info">Save</base-button>

                      <base-button type="danger">Delete</base-button>
                    </b-row>
                  </b-form>

                  <!--end of 3rd  row-->
                </b-card-text>
              </b-tab>
              <!--Acturial Tab-->
              <b-tab title="Acturial"
                ><b-card-text>
                  <b-form @submit.prevent="updateProfile"
                    ><b-row class="float-right pb-4">
                      <b-button v-b-modal.modal-10 variant="success"
                        >Add Service Provider+</b-button
                      >
                      <b-modal
                        id="modal-10"
                        title="Register Service Provider"
                        size="lg"
                        hide-footer
                      >
                        <b-col xl="12" md="10">
                          <stats-card
                            title=""
                            type="gradient-green"
                            sub-title=""
                            class="mb-4"
                          >
                            <template slot="footer">
                              <div class="mt-3">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Product Name</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Product code</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      readonly
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Business Code</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      readonly
                                    ></b-form-input>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Product Category</label>
                                    <select class="form-control">
                                      <option></option>
                                      <option></option>
                                    </select>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Provider Type</label>
                                    <select class="form-control">
                                      <option></option>
                                      <option></option>
                                    </select>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default"
                                      >Policy Expiry Interval</label
                                    >
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Tax Rate</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Contract Start</label>
                                    <b-form-input
                                      type="date"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Contract End</label>
                                    <b-form-input
                                      type="date"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                </div></div></template
                          ></stats-card>
                          <b-row>
                            <div class="col-md-4">
                              <base-button class="mt-3" block type="success"
                                >Save Service Provider Info</base-button
                              >
                            </div> </b-row
                          ><br />
                          <b-row
                            ><b-col xl="12" md="12">
                              <stats-card
                                title=""
                                type="gradient-green"
                                sub-title=""
                                class="mb-4"
                              >
                                <template slot="footer">
                                  <div class="mt-3">
                                    <div class="row">
                                      <div class="alert alert-danger" v-if="errorSearch">
                                        {{ errorSearch }}
                                      </div>
                                      <div></div>
                                      <div>
                                        <b-col xl="12" lg="12">
                                          <p class="mb-0">
                                            <b
                                              >Type something in the input field to search
                                              the table</b
                                            >
                                          </p>
                                          <b-form-input
                                            type="text"
                                            label=""
                                            placeholder="Search...."
                                            v-model="keyword"
                                            @keyup.enter="searchLogic"
                                          >
                                            <br />
                                          </b-form-input>
                                        </b-col>
                                      </div>
                                    </div>
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
                                                  <th scope="col">Provider Name</th>
                                                  <th scope="col">Provider Type</th>
                                                  <th scope="col">Provider Status</th>
                                                  <th scope="col">Building</th>
                                                  <th scope="col">City</th>
                                                  <th scope="col">Street</th>
                                                  <th scope="col">Country</th>
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
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>

                                                  <td>
                                                    <b-button
                                                      v-b-modal.modal-16
                                                      variant="primary"
                                                      >Edit</b-button
                                                    >
                                                    <b-modal
                                                      id="modal-16"
                                                      title="Edit Service Provider Details"
                                                      size="lg"
                                                      hide-footer
                                                    >
                                                      <b-col xl="12" md="10">
                                                        <stats-card
                                                          title=""
                                                          type="gradient-green"
                                                          sub-title=""
                                                          class="mb-4"
                                                        >
                                                          <template slot="footer">
                                                            <div class="mt-3">
                                                              <div class="row">
                                                                <div class="col-md-6">
                                                                  <label
                                                                    for="input-default"
                                                                    >Service Provider
                                                                    Name</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Provider Type</label
                                                                  >
                                                                  <select
                                                                    class="form-control"
                                                                  >
                                                                    <option>
                                                                      Custodian
                                                                    </option>
                                                                    <option>
                                                                      Fund Manager
                                                                    </option>
                                                                  </select>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Provider
                                                                    Status</label
                                                                  >
                                                                  <select
                                                                    class="form-control"
                                                                  >
                                                                    <option>
                                                                      Active
                                                                    </option>
                                                                    <option>
                                                                      Inactive
                                                                    </option>
                                                                  </select>
                                                                </div>
                                                              </div>
                                                              <div class="row">
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Building</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Street</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >City</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                                <div class="col-md-3">
                                                                  <label
                                                                    for="input-default"
                                                                    >Country</label
                                                                  >
                                                                  <b-form-input
                                                                    type="text"
                                                                    placeholder=""
                                                                  ></b-form-input>
                                                                </div>
                                                              </div></div></template
                                                        ></stats-card>
                                                        <b-row>
                                                          <div class="col-md-4">
                                                            <base-button
                                                              class="mt-3"
                                                              block
                                                              @click="
                                                                $bvModal.hide('modal-16')
                                                              "
                                                              type="success"
                                                              >Save</base-button
                                                            >
                                                          </div>
                                                        </b-row></b-col
                                                      >
                                                    </b-modal>
                                                  </td>
                                                </tr>
                                              </tbody>
                                              <div>
                                                <b-pagination
                                                  v-model="currentPage"
                                                  :total-rows="rows"
                                                  :per-page="perPage"
                                                  first-number
                                                ></b-pagination>
                                              </div>
                                            </table>
                                          </b-row>
                                        </div>
                                      </b-col>
                                    </b-row></div></template></stats-card></b-col></b-row
                        ></b-col>
                      </b-modal>
                      <b-button v-b-modal.modal-11 variant="success"
                        >Add Country+</b-button
                      >
                      <b-modal id="modal-11" title="Country Info" size="lg" hide-footer>
                        <b-col xl="12" md="10">
                          <stats-card
                            title=""
                            type="gradient-green"
                            sub-title=""
                            class="mb-4"
                          >
                            <template slot="footer">
                              <div class="mt-3">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Country Name</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Tax Rate%</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Currency</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                </div></div></template
                          ></stats-card>
                          <b-row>
                            <div class="col-md-4">
                              <base-button class="mt-3" block type="success"
                                >Save Country Info</base-button
                              >
                            </div> </b-row
                          ><br />
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
                                        <th scope="col">CountryId</th>
                                        <th scope="col">Country Name</th>
                                        <th scope="col">Tax Rate</th>
                                        <th scope="col">Currency</th>
                                        <th scope="col">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody id="myTable">
                                      <tr v-for="i in items">
                                        <td>
                                          <label class="form-checkbox">
                                            <input
                                              type="checkbox"
                                              :value="i.country_id"
                                              v-model="selected"
                                            />
                                            <i class="form-icon"></i>
                                          </label>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                          <b-button variant="primary">Edit</b-button>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <div>
                                      <b-pagination
                                        v-model="currentPage"
                                        :total-rows="rows"
                                        :per-page="perPage"
                                        first-number
                                      ></b-pagination>
                                    </div>
                                  </table>
                                </b-row>
                              </div>
                            </b-col> </b-row
                        ></b-col>
                      </b-modal>
                      <b-button v-b-modal.modal-12 variant="success"
                        >Add Product+</b-button
                      >
                      <b-modal id="modal-12" title="Product Info" size="lg" hide-footer>
                        <b-col xl="12" md="10">
                          <stats-card
                            title=""
                            type="gradient-green"
                            sub-title=""
                            class="mb-4"
                          >
                            <template slot="footer">
                              <div class="mt-3">
                                <div class="row"></div></div></template
                          ></stats-card>
                          <b-row>
                            <div class="col-md-4">
                              <base-button class="mt-3" block type="success"
                                >Save Product Info</base-button
                              >
                            </div> </b-row
                          ><br />
                          <b-row
                            ><b-col xl="12" md="12">
                              <stats-card
                                title=""
                                type="gradient-green"
                                sub-title=""
                                class="mb-4"
                              >
                                <template slot="footer">
                                  <div class="mt-3">
                                    <div class="row">
                                      <div class="alert alert-danger" v-if="errorSearch">
                                        {{ errorSearch }}
                                      </div>
                                      <div></div>
                                      <div>
                                        <b-col xl="12" lg="12">
                                          <p class="mb-0">
                                            <b
                                              >Type something in the input field to search
                                              the table</b
                                            >
                                          </p>
                                          <b-form-input
                                            type="text"
                                            label=""
                                            placeholder="Search...."
                                            v-model="keyword"
                                            @keyup.enter="searchLogic"
                                          >
                                            <br />
                                          </b-form-input>
                                        </b-col>
                                      </div>
                                    </div>
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
                                                  <th scope="col">CountryId</th>
                                                  <th scope="col">Product Name</th>
                                                  <th scope="col">Product Code</th>
                                                  <th scope="col">Business Code</th>
                                                  <th scope="col">Product Category</th>
                                                  <th scope="col">Provider Type</th>
                                                  <th scope="col">
                                                    Policy Expiry Interval
                                                  </th>
                                                  <th scope="col">Tax Rate</th>
                                                  <th scope="col">Contract Start</th>
                                                  <th scope="col">Contract End</th>
                                                  <th scope="col">Action</th>
                                                </tr>
                                              </thead>
                                              <tbody id="myTable">
                                                <tr v-for="i in items">
                                                  <td>
                                                    <label class="form-checkbox">
                                                      <input
                                                        type="checkbox"
                                                        :value="i.product_id"
                                                        v-model="selected"
                                                      />
                                                      <i class="form-icon"></i>
                                                    </label>
                                                  </td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td>
                                                    <b-button variant="primary"
                                                      >Edit</b-button
                                                    >
                                                  </td>
                                                </tr>
                                              </tbody>
                                              <div>
                                                <b-pagination
                                                  v-model="currentPage"
                                                  :total-rows="rows"
                                                  :per-page="perPage"
                                                  first-number
                                                ></b-pagination>
                                              </div>
                                            </table>
                                          </b-row>
                                        </div>
                                      </b-col>
                                    </b-row></div></template></stats-card></b-col></b-row
                        ></b-col>
                      </b-modal> </b-row
                    ><br /><br /><br />
                    <b-row>
                      <b-col xl="4" md="6">
                        <p>Select your Country</p>
                        <select v-model="country">
                          <option disabled value="">Country</option>
                          <option>Kenya</option>
                          <option>Uganda</option>
                          <option>Zambia</option>
                        </select>
                        <span> Choice: {{ country }}</span>
                      </b-col>

                      <b-col xl="4" md="4">
                        <p>Service Category</p>
                        <select v-model="p_category">
                          <option disabled value="">Service Category</option>
                          <option>Retail</option>
                          <option>Corporate</option>
                        </select>
                        <span> Choice: {{ p_category }}</span>
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>Product Category</p>
                        <select v-model="p_category">
                          <option disabled value="">Product Category</option>
                          <option>Retail</option>
                          <option>Corporate</option>
                        </select>
                        <span> Choice: {{ p_category }}</span>
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>Currency</p>
                        <select v-model="currency">
                          <option disabled value="">Currency</option>
                          <option>Ksh</option>
                          <option>Ugx</option>
                          <option>Zsh</option>
                        </select>
                        <span> Choice: {{ currency }}</span>
                      </b-col>
                      <!--end of 1st row--></b-row
                    >
                    <b-row>
                      <b-col xl="12" md="6">
                        <p>Product</p>
                        <select v-model="p_category">
                          <option disabled value="">Product</option>
                          <option>Asset consulting</option>
                          <option>Acturial valuation</option>
                          <option>Investment Policy Statement</option>
                        </select>
                        <span> Choice: {{ p_category }}</span>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col xl="4" md="6">
                        <p>MIN AGE</p>
                        <b-form-input
                          id="input-default"
                          placeholder="Enter MIN AGE"
                        ></b-form-input>
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>MAX AGE</p>
                        <b-form-input
                          id="input-default"
                          placeholder="Enter MAX AGE"
                        ></b-form-input>
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>Tax Rate</p>
                        <b-form-input
                          id="input-default"
                          placeholder="Enter Tax Rate"
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <br />
                    <b-row class="d-flex justify-content-center mb-3">
                      <base-button type="info">Save</base-button>

                      <base-button type="danger">Delete</base-button>
                    </b-row>
                  </b-form>
                  <!--1st row-->

                  <!--end of3rd row-->
                </b-card-text>
              </b-tab>
              <!--Training Tab-->
              <b-tab title="Training"
                ><b-card-text>
                  <b-form @submit.prevent="updateProfile"
                    ><b-row class="float-right pb-4">
                      <b-button v-b-modal.modal-13 variant="success"
                        >Add Service Provider+</b-button
                      >
                      <b-modal
                        id="modal-13"
                        title="Register Service Provider"
                        size="lg"
                        hide-footer
                      >
                        <b-col xl="12" md="10">
                          <stats-card
                            title=""
                            type="gradient-green"
                            sub-title=""
                            class="mb-4"
                          >
                            <template slot="footer">
                              <div class="mt-3">
                                <div class="row">
                                  <div class="col-md-6">
                                    <label for="input-default"
                                      >Service Provider Name</label
                                    >
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">Provider Type</label>
                                    <select class="form-control">
                                      <option>Custodian</option>
                                      <option>Fund Manager</option>
                                    </select>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">Provider Status</label>
                                    <select class="form-control">
                                      <option>Active</option>
                                      <option>Inactive</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-3">
                                    <label for="input-default">Building</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">Street</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">City</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-3">
                                    <label for="input-default">Country</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                </div></div></template
                          ></stats-card>
                          <b-row>
                            <div class="col-md-4">
                              <base-button class="mt-3" block type="success"
                                >Save Service Provider Info</base-button
                              >
                            </div> </b-row
                          ><br /><b-row>
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
                                        <th scope="col">Provider Name</th>
                                        <th scope="col">Provider Type</th>
                                        <th scope="col">Provider Status</th>
                                        <th scope="col">Building</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Street</th>
                                        <th scope="col">Country</th>
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
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>

                                        <td>
                                          <b-button v-b-modal.modal-16 variant="primary"
                                            >Edit</b-button
                                          >
                                          <b-modal
                                            id="modal-16"
                                            title="Edit Service Provider Details"
                                            size="lg"
                                            hide-footer
                                          >
                                            <b-col xl="12" md="10">
                                              <stats-card
                                                title=""
                                                type="gradient-green"
                                                sub-title=""
                                                class="mb-4"
                                              >
                                                <template slot="footer">
                                                  <div class="mt-3">
                                                    <div class="row">
                                                      <div class="col-md-6">
                                                        <label for="input-default"
                                                          >Service Provider Name</label
                                                        >
                                                        <b-form-input
                                                          type="text"
                                                          placeholder=""
                                                        ></b-form-input>
                                                      </div>
                                                      <div class="col-md-3">
                                                        <label for="input-default"
                                                          >Provider Type</label
                                                        >
                                                        <select class="form-control">
                                                          <option>Custodian</option>
                                                          <option>Fund Manager</option>
                                                        </select>
                                                      </div>
                                                      <div class="col-md-3">
                                                        <label for="input-default"
                                                          >Provider Status</label
                                                        >
                                                        <select class="form-control">
                                                          <option>Active</option>
                                                          <option>Inactive</option>
                                                        </select>
                                                      </div>
                                                    </div>
                                                    <div class="row">
                                                      <div class="col-md-3">
                                                        <label for="input-default"
                                                          >Building</label
                                                        >
                                                        <b-form-input
                                                          type="text"
                                                          placeholder=""
                                                        ></b-form-input>
                                                      </div>
                                                      <div class="col-md-3">
                                                        <label for="input-default"
                                                          >Street</label
                                                        >
                                                        <b-form-input
                                                          type="text"
                                                          placeholder=""
                                                        ></b-form-input>
                                                      </div>
                                                      <div class="col-md-3">
                                                        <label for="input-default"
                                                          >City</label
                                                        >
                                                        <b-form-input
                                                          type="text"
                                                          placeholder=""
                                                        ></b-form-input>
                                                      </div>
                                                      <div class="col-md-3">
                                                        <label for="input-default"
                                                          >Country</label
                                                        >
                                                        <b-form-input
                                                          type="text"
                                                          placeholder=""
                                                        ></b-form-input>
                                                      </div>
                                                    </div></div></template
                                              ></stats-card>
                                              <b-row>
                                                <div class="col-md-4">
                                                  <base-button
                                                    class="mt-3"
                                                    block
                                                    @click="$bvModal.hide('modal-16')"
                                                    type="success"
                                                    >Save</base-button
                                                  >
                                                </div>
                                              </b-row></b-col
                                            >
                                          </b-modal>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <div>
                                      <b-pagination
                                        v-model="currentPage"
                                        :total-rows="rows"
                                        :per-page="perPage"
                                        first-number
                                      ></b-pagination>
                                    </div>
                                  </table>
                                </b-row>
                              </div>
                            </b-col>
                          </b-row>
                        </b-col>
                      </b-modal>
                      <b-button v-b-modal.modal-14 variant="success"
                        >Add Country+</b-button
                      >
                      <b-modal id="modal-14" title="Country Info" size="lg" hide-footer>
                        <b-col xl="12" md="10">
                          <stats-card
                            title=""
                            type="gradient-green"
                            sub-title=""
                            class="mb-4"
                          >
                            <template slot="footer">
                              <div class="mt-3">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Country Name</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Tax Rate%</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Currency</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                </div></div></template
                          ></stats-card>
                          <b-row>
                            <div class="col-md-4">
                              <base-button class="mt-3" block type="success"
                                >Save Country Info</base-button
                              >
                            </div> </b-row
                          ><br />
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
                                        <th scope="col">CountryId</th>
                                        <th scope="col">Country Name</th>
                                        <th scope="col">Tax Rate</th>
                                        <th scope="col">Currency</th>
                                        <th scope="col">Action</th>
                                      </tr>
                                    </thead>
                                    <tbody id="myTable">
                                      <tr v-for="i in items">
                                        <td>
                                          <label class="form-checkbox">
                                            <input
                                              type="checkbox"
                                              :value="i.country_id"
                                              v-model="selected"
                                            />
                                            <i class="form-icon"></i>
                                          </label>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                          <b-button variant="primary">Edit</b-button>
                                        </td>
                                      </tr>
                                    </tbody>
                                    <div>
                                      <b-pagination
                                        v-model="currentPage"
                                        :total-rows="rows"
                                        :per-page="perPage"
                                        first-number
                                      ></b-pagination>
                                    </div>
                                  </table>
                                </b-row>
                              </div>
                            </b-col> </b-row
                        ></b-col>
                      </b-modal>
                      <b-button v-b-modal.modal-15 variant="success"
                        >Add Product+</b-button
                      >
                      <b-modal id="modal-15" title="Product Info" size="lg" hide-footer>
                        <b-col xl="12" md="10">
                          <stats-card
                            title=""
                            type="gradient-green"
                            sub-title=""
                            class="mb-4"
                          >
                            <template slot="footer">
                              <div class="mt-3">
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Product Name</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Product code</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      readonly
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Business Code</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                      readonly
                                    ></b-form-input>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Product Category</label>
                                    <select class="form-control">
                                      <option></option>
                                      <option></option>
                                    </select>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Provider Type</label>
                                    <select class="form-control">
                                      <option></option>
                                      <option></option>
                                    </select>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default"
                                      >Policy Expiry Interval</label
                                    >
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-4">
                                    <label for="input-default">Tax Rate</label>
                                    <b-form-input
                                      type="text"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Contract Start</label>
                                    <b-form-input
                                      type="date"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                  <div class="col-md-4">
                                    <label for="input-default">Contract End</label>
                                    <b-form-input
                                      type="date"
                                      placeholder=""
                                    ></b-form-input>
                                  </div>
                                </div></div></template
                          ></stats-card>
                          <b-row>
                            <div class="col-md-4">
                              <base-button class="mt-3" block type="success"
                                >Save Product Info</base-button
                              >
                            </div> </b-row
                          ><br />
                          <b-row
                            ><b-col xl="12" md="12">
                              <stats-card
                                title=""
                                type="gradient-green"
                                sub-title=""
                                class="mb-4"
                              >
                                <template slot="footer">
                                  <div class="mt-3">
                                    <div class="row">
                                      <div class="alert alert-danger" v-if="errorSearch">
                                        {{ errorSearch }}
                                      </div>
                                      <div></div>
                                      <div>
                                        <b-col xl="12" lg="12">
                                          <p class="mb-0">
                                            <b
                                              >Type something in the input field to search
                                              the table</b
                                            >
                                          </p>
                                          <b-form-input
                                            type="text"
                                            label=""
                                            placeholder="Search...."
                                            v-model="keyword"
                                            @keyup.enter="searchLogic"
                                          >
                                            <br />
                                          </b-form-input>
                                        </b-col>
                                      </div>
                                    </div>
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
                                                  <th scope="col">CountryId</th>
                                                  <th scope="col">Product Name</th>
                                                  <th scope="col">Product Code</th>
                                                  <th scope="col">Business Code</th>
                                                  <th scope="col">Product Category</th>
                                                  <th scope="col">Provider Type</th>
                                                  <th scope="col">
                                                    Policy Expiry Interval
                                                  </th>
                                                  <th scope="col">Tax Rate</th>
                                                  <th scope="col">Contract Start</th>
                                                  <th scope="col">Contract End</th>
                                                  <th scope="col">Action</th>
                                                </tr>
                                              </thead>
                                              <tbody id="myTable">
                                                <tr v-for="i in items">
                                                  <td>
                                                    <label class="form-checkbox">
                                                      <input
                                                        type="checkbox"
                                                        :value="i.product_id"
                                                        v-model="selected"
                                                      />
                                                      <i class="form-icon"></i>
                                                    </label>
                                                  </td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td>
                                                    <b-button variant="primary"
                                                      >Edit</b-button
                                                    >
                                                  </td>
                                                </tr>
                                              </tbody>
                                              <div>
                                                <b-pagination
                                                  v-model="currentPage"
                                                  :total-rows="rows"
                                                  :per-page="perPage"
                                                  first-number
                                                ></b-pagination>
                                              </div>
                                            </table>
                                          </b-row>
                                        </div>
                                      </b-col>
                                    </b-row></div></template></stats-card></b-col></b-row
                        ></b-col>
                      </b-modal> </b-row
                    ><br /><br /><br />
                    <b-row>
                      <b-col xl="4" md="6">
                        <p>Select your Country</p>
                        <select v-model="country">
                          <option disabled value="">Country</option>
                          <option>Kenya</option>
                          <option>Uganda</option>
                          <option>Zambia</option>
                        </select>
                        <span> Choice: {{ country }}</span>
                      </b-col>

                      <b-col xl="4" md="4">
                        <p>Service Category</p>
                        <select v-model="p_category">
                          <option disabled value="">Service Category</option>
                          <option>Retail</option>
                          <option>Corporate</option>
                        </select>
                        <span> Choice: {{ p_category }}</span>
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>Product Category</p>
                        <select v-model="p_category">
                          <option disabled value="">Product Category</option>
                          <option>Retail</option>
                          <option>Corporate</option>
                        </select>
                        <span> Choice: {{ p_category }}</span>
                      </b-col>
                      <b-col xl="4" md="6">
                        <p>Currency</p>
                        <select v-model="currency">
                          <option disabled value="">Currency</option>
                          <option>Ksh</option>
                          <option>Ugx</option>
                          <option>Zsh</option>
                        </select>
                        <span> Choice: {{ currency }}</span>
                      </b-col>
                      <!--end of 1st row--></b-row
                    >
                    <b-row>
                      <b-col xl="12" md="6">
                        <p>Product</p>
                        <select v-model="p_category">
                          <option disabled value="">Product</option>
                          <option>Corporate Training</option>
                          <option>Retail Training</option>
                        </select>
                        <span> Choice: {{ p_category }}</span>
                      </b-col>
                    </b-row>

                    <br />
                    <b-row class="d-flex justify-content-center mb-3">
                      <base-button type="info">Save</base-button>

                      <base-button type="danger">Delete</base-button>
                    </b-row>
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
  addNewCountry,
  addNewProduct,
  addNewServiceProvider,
  getAllCountries,
  getAllProducts,
  getAllServiceProviders,
  getAllServices,
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
      sp_name: "",
      sp_status: "",
      sp_building: "",
      sp_street: "",
      sp_country: "",
      sp_city: "",
      cr_name: "",
      cr_taxrate: "",
      cr_currency: "",
      pr_name: "",
      pr_prcode: "",
      pr_bscode: "",
    };
  },
  methods: {
    addItem() {
      this.items.push({
        entity: "",
      });
    },
    async saveServiceProvider() {
      let response = "";
      try {
        this.$loading.show({ delay: 0 });
        response = await addNewServiceProvider();
        console.log(response);
      } catch (e) {
        this.$loading.hide();
        console.error("error", e);
        this.$toast.error("Failed! Please try again", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
      this.$loading.hide();
      if (response.status === 200) {
        this.$toast.success("New service provider saved", {
          position: "top-right",
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
    },
    async saveCountrySettings() {
      let response = "";
      try {
        this.$loading.show({ delay: 0 });
        response = await addNewCountry();
        console.log(response);
      } catch (e) {
        this.$loading.hide();
        console.error("error", e);
        this.$toast.error("Failed! Please try again", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
      this.$loading.hide();
      if (response.status === 200) {
        this.$toast.success("New service provider saved", {
          position: "top-right",
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
    },
    async saveProductSettings() {
      let response = "";
      try {
        this.$loading.show({ delay: 0 });
        response = await addNewProduct();
        console.log(response);
      } catch (e) {
        this.$loading.hide();
        console.error("error", e);
        this.$toast.error("Failed! Please try again", {
          position: "top-right",
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
      this.$loading.hide();
      if (response.status === 200) {
        this.$toast.success("New service provider saved", {
          position: "top-right",
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: true,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
      }
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
  },
  async mounted() {
    //load data if in localstorage
    if (
      localStorage.getItem("countriesData") !== null ||
      localStorage.getItem("productsData") !== null ||
      localStorage.getItem("serviceProviderData") !== null ||
      localStorage.getItem("servicesData") !== null
    ) {
      this.countryInsuranceFormData = JSON.parse(localStorage.getItem("countriesData"));
      this.productsInsurancesFormData = JSON.parse(localStorage.getItem("productsData"));
      this.serviceProviderInsuranceFormData = JSON.parse(
        localStorage.getItem("serviceProviderData")
      );
      this.serviceCategoryFormData = JSON.parse(localStorage.getItem("servicesData"));
    }
    try {
      let resp = await getAllCountries();
      this.countryInsuranceFormData = resp.data.data;
      console.log(resp.data.data);
      localStorage.setItem("countriesData", JSON.stringify(resp.data.data));
    } catch (e) {
      console.log(e);
    }
    try {
      let resp = await getAllProducts();
      this.productsInsurancesFormData = resp.data.data;
      console.log(resp.data.data);
      localStorage.setItem("productsData", JSON.stringify(resp.data.data));
    } catch (e) {
      console.log(e);
    }
    try {
      let resp = await getAllServiceProviders();
      this.serviceProviderInsuranceFormData = resp.data.data;
      console.log(resp.data.data);
      localStorage.setItem("serviceProviderData", JSON.stringify(resp.data.data));
    } catch (e) {
      console.log(e);
    }
    try {
      let resp = await getAllServices();
      this.serviceCategoryFormData = resp.data.data;
      console.log(resp.data.data);
      localStorage.setItem("servicesData", JSON.stringify(resp.data.data));
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
<style></style>
