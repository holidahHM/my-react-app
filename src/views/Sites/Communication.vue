<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <b-row>
        <b-col xl="12" md="10">
          <b-tabs v-model="tabIndex" small card>
            <b-tab title="Campaigns">
              <div class="tab-pane active" id="tab1-4">
                <div class="row">
                  <div class="col-md-6">
                    <h2>Create & Send Campaigns</h2>
                  </div>
                </div>
                <br />
                <b-row>
                  <b-col xl="12" md="10">
                    <stats-card title="" type="gradient-green" sub-title="" class="mb-4">
                      <template slot="footer">
                        <div class="mt-3">
                          <div class="row">
                            <div class="col-md-6">
                              <label for="input-default">Select Product</label>
                              <select class="form-control">
                                <option>All Products</option>
                                <option>Annuity</option>
                                <option>IDD</option>
                              </select>
                            </div>
                            <div class="col-md-6">
                              <label for="input-default">Select Target Audience</label>
                              <select class="form-control">
                                <option>All Members</option>
                                <option>25-35 Years</option>
                                <option>35-45 Years</option>
                              </select>
                            </div>
                          </div>
                          <br />
                          <div class="row">
                            <div class="col-md-6">
                              <label for="input-default">Select Target Member(s)</label>
                              <select class="form-control">
                                <option>holidah.mwangi</option>
                                <option>ian.muhavi</option>
                                <option>kevin.mulama</option>
                              </select>
                            </div>
                          </div>
                          <br />
                          <div class="row">
                            <div class="col-md-4">
                              <label for="input-default">Select Channel</label>
                              <select class="form-control">
                                <option>Email</option>
                                <option>SMS</option>
                                <option>Social Media</option>
                              </select>
                            </div>
                            <div class="col-md-3">
                              <label for="input-default">Select Template</label>
                              <select class="form-control">
                                <option>IDD</option>
                                <option>Insurance</option>
                              </select>
                            </div>
                            <div class="col-md-3">
                              <label for="input-default"></label><br />
                              <b-button v-b-modal.modal-1 variant="primary"
                                >Add Template</b-button
                              >
                              <b-modal
                                id="modal-1"
                                size="lg"
                                title="Create Template"
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
                                              >Template Name</label
                                            >
                                            <b-form-input
                                              type="text"
                                              placeholder=""
                                            ></b-form-input>
                                          </div>
                                          <div class="col-md-4">
                                            <label for="input-default"
                                              >Template Type</label
                                            >
                                            <select class="form-control">
                                              <option>SMS</option>
                                              <option>Email</option>
                                            </select>
                                          </div>
                                          <div class="col-md-4">
                                            <label for="input-default"
                                              >Template Status</label
                                            >
                                            <select class="form-control">
                                              <option>Active</option>
                                              <option>Inactive</option>
                                            </select>
                                          </div>
                                        </div>
                                        <br />
                                        <div class="row">
                                          <div class="col-md-12">
                                            <label for="input-default">Compose SMS</label>
                                            <b-form-textarea
                                              rows=""
                                              value=""
                                              id="about-form-textaria"
                                              placeholder=""
                                            ></b-form-textarea>
                                          </div>
                                        </div>
                                        <br />
                                        <div class="row">
                                          <div class="col-md-6">
                                            <label for="input-default"
                                              >Placeholders</label
                                            >
                                            <select class="form-control">
                                              <option>Policy Name</option>
                                              <option>Policy Amount</option>
                                              <option>Renewal Date</option>
                                            </select>
                                          </div>
                                        </div>
                                        <br />
                                        <b-row>
                                          <div class="col-md-4">
                                            <base-button
                                              block
                                              @click="$bvModal.hide('modal-1')"
                                              type="success"
                                              >Save Template</base-button
                                            >
                                          </div>
                                        </b-row>
                                        <br />
                                      </div>
                                    </template>
                                  </stats-card>
                                </b-col>
                              </b-modal>
                            </div>
                          </div>
                          <br />
                          <div class="row">
                            <div class="col-md-6">
                              <label for="input-default"
                                >Compose new Message or select from template</label
                              >
                              <b-form-textarea
                                rows="7"
                                value=""
                                id="about-form-textaria"
                                maxlength="140"
                                placeholder="Message"
                              ></b-form-textarea>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6">
                              <span class="help-block"
                                ><p id="characterLeft" class="help-block">
                                  140 characters left
                                </p></span
                              >
                            </div>
                          </div>
                          <br />
                          <div class="row">
                            <div class="form-group col-md-3">
                              <button
                                class="form-control input-sm btn btn-success"
                                id="btnSubmit"
                                name="btnSubmit"
                                type="submit"
                                style="height: 35px"
                              >
                                Send Now
                                <b-icon
                                  icon="arrow-right-square-fill"
                                  aria-hidden="true"
                                ></b-icon>
                              </button>
                            </div>
                            <div class="form-group col-md-3">
                              <button
                                class="form-control input-sm btn btn-success"
                                id="btnSubmit"
                                name="btnSubmit"
                                type="submit"
                                style="height: 35px"
                              >
                                Create Trigger
                                <b-icon
                                  icon="arrow-up-right-square-fill"
                                  aria-hidden="true"
                                ></b-icon>
                              </button>
                            </div>
                            <div class="form-group col-md-3">
                              <button
                                class="form-control input-sm btn btn-info"
                                data-toggle="modal"
                                data-target="#scheduleMessage"
                                id="scheduleMessages"
                                name="scheduleMessages"
                                type="button"
                                style="height: 35px"
                              >
                                Create Reminder
                                <b-icon icon="stopwatch" aria-hidden="true"></b-icon>
                              </button>
                            </div>
                            <div class="form-group col-md-3">
                              <button
                                class="form-control input-sm btn btn-info"
                                data-toggle="modal"
                                data-target="#scheduleMessage"
                                id="scheduleMessages"
                                name="scheduleMessages"
                                type="button"
                                style="height: 35px"
                              >
                                Schedule
                                <b-icon icon="stopwatch" aria-hidden="true"></b-icon>
                              </button>
                            </div>
                          </div>
                        </div>
                      </template>
                    </stats-card>
                  </b-col>
                </b-row>
              </div>
            </b-tab>
            <b-tab title="Templates">
              <div class="row">
                <b-col lg="12">
                  <p class="mb-0">
                    <b>Type something in the input field to search the table</b>
                  </p>
                </b-col>
              </div>
              <div class="row">
                <b-col lg="12">
                  <b-form-input
                    type="text"
                    label=""
                    placeholder="Search..."
                    class="text-left"
                  ></b-form-input>
                </b-col>
              </div>
              <br />
              <div class="row">
                <table class="table table-striped">
                  <thead class="thead-light">
                    <tr>
                      <th>Template Name</th>
                      <th>Template Message</th>
                      <th>Template Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody id="myTable">
                    <tr>
                      <td>Annuity</td>
                      <td>Dear Esteemed Customer....</td>
                      <td>Active</td>

                      <td>
                        <b-button v-b-modal.modal-2 variant="primary">Edit</b-button>
                        <b-modal id="modal-2" size="lg" title="Edit Template" hide-footer>
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
                                      <label for="input-default">Template Name</label>
                                      <b-form-input
                                        type="text"
                                        placeholder="Annuity"
                                      ></b-form-input>
                                    </div>
                                    <div class="col-md-4">
                                      <label for="input-default">Template Type</label>
                                      <select class="form-control">
                                        <option>SMS</option>
                                        <option>Email</option>
                                      </select>
                                    </div>
                                    <div class="col-md-4">
                                      <label for="input-default">Template Status</label>
                                      <select class="form-control">
                                        <option>Active</option>
                                        <option>Inactive</option>
                                      </select>
                                    </div>
                                  </div>
                                  <br />
                                  <div class="row">
                                    <div class="col-md-12">
                                      <label for="input-default">Compose SMS</label>
                                      <b-form-textarea
                                        rows=""
                                        value=""
                                        id="about-form-textaria"
                                        placeholder="Dear Esteemed Customer......"
                                      ></b-form-textarea>
                                    </div>
                                  </div>
                                  <br />
                                  <div class="row">
                                    <div class="col-md-6">
                                      <label for="input-default">Placeholders</label>
                                      <select class="form-control">
                                        <option>Policy Name</option>
                                        <option>Policy Amount</option>
                                        <option>Renewal Date</option>
                                      </select>
                                    </div>
                                  </div>
                                  <br />
                                  <b-row>
                                    <div class="col-md-4">
                                      <base-button
                                        block
                                        @click="$bvModal.hide('modal-2')"
                                        type="success"
                                        >Save Template</base-button
                                      >
                                    </div>
                                  </b-row>
                                  <br />
                                </div>
                              </template>
                            </stats-card>
                          </b-col>
                        </b-modal>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-tab>
            <b-tab title="Scheduled Messages">
              <div class="row">
                <b-col lg="12">
                  <p class="mb-0">
                    <b>Type something in the input field to search the table</b>
                  </p>
                </b-col>
              </div>
              <div class="row">
                <b-col lg="12">
                  <b-form-input
                    type="text"
                    label=""
                    placeholder="Search..."
                    class="text-left"
                  ></b-form-input>
                </b-col>
              </div>
              <br />
              <div class="row">
                <table class="table table-striped">
                  <thead class="thead-light">
                    <tr>
                      <th>Check Box</th>
                      <th>Template Name</th>
                      <th>Template Message</th>
                      <th>Scheduled Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody id="myTable">
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>Annuity</td>
                      <td>Dear Esteemed Customer....</td>
                      <td>2021/08/04</td>
                      <td>
                        <b-dropdown
                          id="dropdown-left"
                          text="Action"
                          variant="primary"
                          class="m-2"
                        >
                          <b-dropdown-item>
                            <router-link to="/">Send </router-link></b-dropdown-item
                          >
                          <b-dropdown-item>
                            <router-link to="/">Archive </router-link></b-dropdown-item
                          >
                          <b-dropdown-item
                            ><router-link to="/">Snoooze </router-link></b-dropdown-item
                          >
                          <b-dropdown-item>Delete</b-dropdown-item>
                        </b-dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-tab>
            <b-tab title="Outbox Messages">
              <div class="row">
                <b-col lg="12">
                  <p class="mb-0">
                    <b>Type something in the input field to search the table</b>
                  </p>
                </b-col>
              </div>
              <div class="row">
                <b-col lg="12">
                  <b-form-input
                    type="text"
                    label=""
                    placeholder="Search..."
                    class="text-left"
                  ></b-form-input>
                </b-col>
              </div>
              <br />
              <div class="row">
                <table class="table table-striped">
                  <thead class="thead-light">
                    <tr>
                      <th>Check Box</th>
                      <th>Audience Name</th>
                      <th>Template Message</th>
                      <th>Date Sent</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody id="myTable">
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>All Members</td>
                      <td>Dear Esteemed Customer....</td>
                      <td>2021/06/24</td>
                      <td>
                        <b-dropdown
                          id="dropdown-left"
                          text="Action"
                          variant="primary"
                          class="m-2"
                        >
                          <b-dropdown-item>
                            <router-link to="/">Archive </router-link></b-dropdown-item
                          >
                          <b-dropdown-item>Delete</b-dropdown-item>
                        </b-dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-tab>
            <b-tab title="Triggers">
              <div class="row">
                <b-col lg="12">
                  <p class="mb-0">
                    <b>Type something in the input field to search the table</b>
                  </p>
                </b-col>
              </div>
              <div class="row">
                <b-col lg="12">
                  <b-form-input
                    type="text"
                    label=""
                    placeholder="Search..."
                    class="text-left"
                  ></b-form-input>
                </b-col>
              </div>
              <br />
              <div class="row">
                <table class="table table-striped">
                  <thead class="thead-light">
                    <tr>
                      <th>Check Box</th>
                      <th>Template Name</th>
                      <th>Template Message</th>
                      <th>Added on</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody id="myTable">
                    <tr>
                      <td><input type="checkbox" /></td>
                      <td>IDD</td>
                      <td>Dear Esteemed Customer....</td>
                      <td>2021/06/24</td>
                      <td>
                        <b-dropdown
                          id="dropdown-left"
                          text="Action"
                          variant="primary"
                          class="m-2"
                        >
                          <b-dropdown-item>
                            <router-link to="/">Send</router-link></b-dropdown-item
                          >
                          <b-dropdown-item>
                            <router-link to="/">Archive </router-link></b-dropdown-item
                          >
                          <b-dropdown-item>
                            <router-link to="/">Snooze </router-link></b-dropdown-item
                          >
                          <b-dropdown-item>Delete</b-dropdown-item>
                        </b-dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-tab>
            <b-tab title="Reminders">
              <div class="row">
                <b-col lg="12">
                  <p class="mb-0">
                    <b>Type something in the input field to search the table</b>
                  </p>
                </b-col>
              </div>
              <div class="row">
                <b-col lg="12">
                  <b-form-input
                    type="text"
                    label=""
                    placeholder="Search..."
                    class="text-left"
                  ></b-form-input>
                </b-col>
              </div>
              <br />
              <div style="overflow: scroll">
                <div class="row">
                  <table class="table table-striped">
                    <thead class="thead-light">
                      <tr>
                        <th>Check Box</th>
                        <th>Template Name</th>
                        <th>Template Message</th>
                        <th>Channel</th>
                        <th>Timeline</th>
                        <th>Timeline Trigger(days before/after)</th>
                        <th>Added on</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody id="myTable">
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td>IDD</td>
                        <td>Dear Esteemed Customer....</td>
                        <td>SMS</td>
                        <td>Before 2021/06/2412:00:00A.M</td>
                        <td>One day before</td>
                        <td>2021/06/15</td>
                        <td>
                          <b-button variant="primary">Delete</b-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
      <br />
      <br />
    </card>
  </base-header>
</template>
<script></script>
