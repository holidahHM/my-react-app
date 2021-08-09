<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <b-tabs pills card>
        <b-tab title="PENSION(40)" active>
          <div>
            <b-form @submit.prevent="updateProfile">
              <b-row>
                <div class="my-auto align-self-center">
                  <b-col xl="12">
                    <h4>List of claims</h4>
                  </b-col>
                </div>
              </b-row>
              <br />
              <b-row>
                <div class="col-xl-6">
                  <b-col xl="12" sm="12">
                    <p class="mb-0">
                      <b>Type something in the input field to search the table</b>
                    </p>
                    <b-form-input type="text" label="" placeholder="Search for a claim">
                      <br />
                    </b-form-input>
                  </b-col>
                </div>
                <div class="col-xl-6">
                  <b-col xl="12" sm="12">
                    <p class="mb-0"><b>Filter by</b></p>
                    <b-form-select
                      id="sort-by-select"
                      v-model="sortBy"
                      :options="sortOptions"
                      :aria-describedby="ariaDescribedby"
                      class="w-75"
                    >
                      <template #first>
                        <option value="">Date</option>
                        <option value="">Scheme Name</option>
                        <option value="">Scheme code</option>
                        <option value="">Member ID</option>
                        <option value="">Member Name</option>
                      </template>
                    </b-form-select>
                  </b-col>
                </div>
              </b-row>
              <br />
              <b-row>
                <b-col xl="12" md="12" sm="12">
                  <p>Type of withdrawal</p>
                  <select v-model="withdrawal">
                    <option disabled value="">Select the type of withdrawal</option>
                    <option>Online Withdrawals</option>
                    <option>Manual Withdrawals</option>
                  </select>
                  <span> Choice:{{ withdrawal }}</span>
                </b-col>
              </b-row>
              <b-tabs v-model="tabIndex" small card>
                <b-tab
                  v-if="withdrawal === 'Online Withdrawals'"
                  title="Pending HR approval"
                >
                  <b-row>
                    <b-col lg="12" sm="12" xl="12">
                      <div style="overflow: scroll">
                        <b-row>
                          <table class="table table-stripped">
                            <thead class="thead-light">
                              <tr>
                                <th scope="col">Move</th>
                                <th scope="col">Stay</th>
                                <th scope="col">Member .no</th>
                                <th scope="col">Member Name</th>
                                <th scope="col">Date Modified</th>
                                <th scope="col">Reason for Exit</th>
                                <th scope="col">EE portion</th>
                                <th scope="col">ER portion</th>
                                <th scope="col">AVC portion</th>
                                <th scope="col">Documents Attached</th>
                              </tr>
                            </thead>
                            <tbody id="myTable">
                              <tr v-for="i in online">
                                <td>
                                  <b-button
                                    variant="primary"
                                    class="btn btn-primary btn-lg btn-block"
                                    >Move</b-button
                                  >
                                </td>
                                <td>{{ i.stay }}</td>
                                <td>{{ i.member_no }}</td>
                                <td>{{ i.member_name_new }}</td>
                                <td>{{ i.date_modified }}</td>
                                <td>{{ i.reason_for_exist }}</td>
                                <td>{{ i.EE_porttion }}</td>
                                <td>{{ i.ER_porttion }}</td>
                                <td>{{ i.AVC_portion }}</td>
                                <td>
                                  <b-button
                                    v-b-modal.modal-1
                                    variant="primary"
                                    class="btn btn-primary btn-lg btn-block"
                                    >Supporting Documents
                                  </b-button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </b-row>
                      </div>
                    </b-col>
                  </b-row>
                </b-tab>

                <b-tab
                  v-if="withdrawal === 'Online Withdrawals'"
                  title="Pending Administration Approval"
                >
                  <b-tabs>
                    <b-tab title="Pending Checking">
                      <b-row>
                        <b-col lg="12" sm="12" xl="12">
                          <div style="overflow: scroll">
                            <b-row>
                              <table class="table table-stripped">
                                <thead class="thead-light">
                                  <tr>
                                    <th scope="col">Move</th>
                                    <th scope="col">Stay</th>
                                    <th scope="col">Member .no</th>
                                    <th scope="col">Member Name</th>
                                    <th scope="col">worksheet</th>
                                    <th scope="col">statements</th>
                                    <th scope="col">view documents</th>
                                    <th scope="col">next step</th>
                                  </tr>
                                </thead>
                                <tbody id="myTable">
                                  <tr v-for="i in online">
                                    <td>
                                      <b-button
                                        variant="primary"
                                        class="btn btn-primary btn-lg btn-block"
                                        >Move</b-button
                                      >
                                    </td>
                                    <td>{{ i.stay }}</td>
                                    <td>{{ i.member_no }}</td>
                                    <td>{{ i.member_name_new }}</td>
                                    <td>
                                      <b-button
                                        variant="primary"
                                        class="btn btn-primary btn-lg btn-block"
                                        >View Worksheet
                                      </b-button>
                                    </td>
                                    <td>
                                      <b-button
                                        variant="primary"
                                        class="btn btn-primary btn-lg btn-block"
                                        >View Worksheet
                                      </b-button>
                                    </td>
                                    <td>
                                      <b-button
                                        variant="primary"
                                        class="btn btn-primary btn-lg btn-block"
                                        >Supporting Documents
                                      </b-button>
                                    </td>
                                    <td>
                                      <b-button
                                        variant="primary"
                                        class="btn btn-primary btn-lg btn-block"
                                        >Check
                                      </b-button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </b-row>
                          </div>
                        </b-col>
                      </b-row>
                    </b-tab>
                    <b-tab title="Pending Approval">
                      <b-row>
                        <b-col lg="12" sm="12" xl="12">
                          <div style="overflow: scroll">
                            <b-row>
                              <table class="table table-stripped">
                                <thead class="thead-light">
                                  <tr>
                                    <th scope="col">Member .no</th>
                                    <th scope="col">Member Name</th>
                                    <th scope="col">View worksheets</th>
                                    <th scope="col">View Documents</th>
                                    <th scope="col">next step</th>
                                  </tr>
                                </thead>
                                <tbody id="myTable">
                                  <tr v-for="i in online">
                                    <td>{{ i.member_no }}</td>
                                    <td>{{ i.member_name_new }}</td>
                                    <td>
                                      <b-button
                                        variant="primary"
                                        class="btn btn-primary btn-lg btn-block"
                                        >View Worksheet
                                      </b-button>
                                    </td>
                                    <td>
                                      <b-button
                                        variant="primary"
                                        class="btn btn-primary btn-lg btn-block"
                                        >Supporting Documents
                                      </b-button>
                                    </td>
                                    <td>
                                      <b-row>
                                        <b-col xl="6">
                                          <b-button
                                            variant="primary"
                                            class="btn btn-primary btn-lg btn-block"
                                            >Check
                                          </b-button>
                                        </b-col>
                                        <b-col xl="6">
                                          <b-button
                                            variant="primary"
                                            class="btn btn-primary btn-lg btn-block"
                                          >
                                            Un Check
                                          </b-button>
                                        </b-col>
                                      </b-row>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </b-row>
                          </div>
                        </b-col>
                      </b-row>
                    </b-tab>
                  </b-tabs>
                  <div class="tab-pane active" id="tab1-4"></div>
                </b-tab>
                <b-tab
                  v-if="withdrawal === 'Manual Withdrawals'"
                  title="Received Withdrawals"
                >
                  <div class="tab-pane active" id="tab1-4">
                    <b-row>
                      <b-col lg="12" sm="12" xl="12">
                        <!-- <div style="overflow: scroll;">  -->
                        <b-row>
                          <div class="col-xl-12 alert alert-secondary">
                            <h3>New Withdrawals Table</h3>
                            <p>
                              The table below shows new withdrawals whose information has
                              been entered into the system
                            </p>
                          </div>
                          <table class="table table-stripped">
                            No new withdrawal notification forms have been processed.

                            <td></td>
                          </table>
                        </b-row>
                        <!-- </div>  -->
                      </b-col>
                    </b-row>
                  </div>
                </b-tab>

                <b-tab
                  v-if="withdrawal === 'Manual Withdrawals'"
                  title="Pending Forwarding to Trustees"
                >
                  <div class="tab-pane active" id="tab1-4">
                    <div class="tab-pane active" id="tab1-4">
                      <b-row>
                        <b-col lg="12" sm="12" xl="12">
                          <!-- <div style="overflow: scroll;">  -->
                          <b-row>
                            <div class="col-xl-12 alert alert-secondary">
                              <h3>Forward Discharge To Trustees</h3>
                              <p>
                                Use checkbox to add/remove individual withdrawal requests
                                from batch. Click the relevant"Email Batch" button to
                                batch, preview email and send notification to trustees.
                              </p>
                            </div>
                            <table class="table table-stripped">
                              No pending member exit notifications for trustees.

                              <td></td>
                            </table>
                          </b-row>
                          <!-- </div>  -->
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </b-tab>
                <b-tab
                  v-if="withdrawal === 'Online Withdrawals'"
                  title="Pending Trustees Approval"
                >
                  <div class="tab-pane active" id="tab1-4">
                    <b-row>
                      <b-col lg="12" sm="12" xl="12">
                        <div style="overflow: scroll">
                          <b-row>
                            <table class="table table-stripped">
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col">Move</th>
                                  <th scope="col">Stay</th>
                                  <th scope="col">Member .no</th>
                                  <th scope="col">Member Name</th>
                                  <th scope="col">Date Modified</th>
                                  <th scope="col">Reason for Exit</th>
                                  <th scope="col">Trustee signatory 1</th>
                                  <th scope="col">Trustee signatory 2</th>
                                  <th scope="col">Documents Attached</th>
                                </tr>
                              </thead>
                              <tbody id="myTable">
                                <tr v-for="i in online">
                                  <td>
                                    <b-button
                                      variant="primary"
                                      class="btn btn-primary btn-lg btn-block"
                                      >Move</b-button
                                    >
                                  </td>
                                  <td>{{ i.stay }}</td>
                                  <td>{{ i.member_no }}</td>
                                  <td>{{ i.member_name_new }}</td>
                                  <td>{{ i.date_modified }}</td>
                                  <td>{{ i.reason_for_exist }}</td>
                                  <td>{{ i.trustee_sig_1 }}</td>
                                  <td>{{ i.trustee_sig_1 }}</td>

                                  <td>
                                    <b-button
                                      variant="primary"
                                      class="btn btn-primary btn-lg btn-block"
                                      >View Documents
                                    </b-button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </b-row>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </b-tab>
                <b-tab
                  v-if="withdrawal === 'Manual Withdrawals'"
                  title="Pending Discharge Signing"
                >
                  <div class="tab-pane active" id="tab1-4">
                    <div class="tab-pane active" id="tab1-4">
                      <b-row>
                        <b-col lg="12" sm="12" xl="12">
                          <!-- <div style="overflow: scroll;">  -->
                          <b-row>
                            <div class="col-xl-12 alert alert-secondary">
                              <h3>Receive Signed Discharge Form</h3>
                              <p>
                                The table below shows (if any) the withdrawals which are
                                pending reciept of signed discharge forms from trustees.
                              </p>
                            </div>
                            <table class="table table-stripped">
                              No discharge forms pending signing.

                              <td></td>
                            </table>
                          </b-row>
                          <!-- </div>  -->
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </b-tab>
                <b-tab
                  v-if="withdrawal === 'Online Withdrawals'"
                  title="Pending Custodian payment Instruction"
                >
                  <div class="tab-pane active" id="tab1-4">
                    <b-row>
                      <b-col lg="12" sm="12" xl="12">
                        <div style="overflow: scroll">
                          <b-row>
                            <table class="table table-stripped">
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col">Move</th>
                                  <th scope="col">Stay</th>
                                  <th scope="col">Member .no</th>
                                  <th scope="col">Member Name</th>
                                  <th scope="col">Date Notified by HR</th>
                                  <th scope="col">Reason for Exit</th>
                                  <th scope="col">Trustee signatory 1</th>
                                  <th scope="col">Trustee signatory 2</th>
                                  <th scope="col">Discharge Date</th>
                                  <th scope="col">Documents Attached</th>
                                </tr>
                              </thead>
                              <tbody id="myTable">
                                <tr v-for="i in online">
                                  <td>
                                    <b-button
                                      variant="primary"
                                      class="btn btn-primary btn-lg btn-block"
                                      >Move</b-button
                                    >
                                  </td>
                                  <td>{{ i.stay }}</td>
                                  <td>{{ i.member_no }}</td>
                                  <td>{{ i.member_name_new }}</td>
                                  <td>{{ i.date_modified }}</td>
                                  <td>{{ i.reason_for_exit }}</td>
                                  <td>{{ i.trustee_sig_1 }}</td>
                                  <td>{{ i.trustee_sig_1 }}</td>
                                  <td>{{ i.date_discharged }}</td>
                                  <td>
                                    <b-button
                                      variant="primary"
                                      class="btn btn-primary btn-lg btn-block"
                                      >View Documents
                                    </b-button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </b-row>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </b-tab>
                <b-tab
                  v-if="withdrawal === 'Manual Withdrawals'"
                  title="Pending Payment Letter Creation"
                >
                  <div class="tab-pane active" id="tab1-4">
                    <div class="tab-pane active" id="tab1-4">
                      <b-row>
                        <b-col lg="12" sm="12" xl="12">
                          <!-- <div style="overflow: scroll;">  -->
                          <b-row>
                            <div class="col-xl-12 alert alert-secondary">
                              <h3>Create Payment Requisition Letter</h3>
                              <p>
                                Use checkbox to add/remove individual withdrawal requests
                                to/from batch. Click "Create Batch Letter" button to batch
                                selected requests in one letter
                              </p>
                            </div>
                            <table class="table table-stripped">
                              No withdrawals pending creation of payment requisition
                              letters.

                              <td></td>
                            </table>
                          </b-row>
                          <!-- </div>  -->
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </b-tab>
                <b-tab
                  v-if="withdrawal === 'Manual Withdrawals'"
                  title="Pending Payment Letter Signing"
                >
                  <div class="tab-pane active" id="tab1-4">
                    <div class="tab-pane active" id="tab1-4">
                      <b-row>
                        <b-col lg="12" sm="12" xl="12">
                          <!-- <div style="overflow: scroll;">  -->
                          <b-row>
                            <div class="col-xl-12 alert alert-secondary">
                              <h3>Upload and Forward Payment Requisition Letter</h3>
                              <p>
                                The list below shows payment requisition letters that are
                                pending approval by administrator signatories and
                                forwarding to the Custodian.
                              </p>
                            </div>
                            <table class="table table-stripped">
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col">Letter Ref</th>
                                  <th scope="col">Member Name</th>
                                  <th scope="col">Created on</th>
                                  <th scope="col">Created by</th>
                                  <th scope="col">Next Process</th>
                                </tr>
                              </thead>
                              <tbody id="myTable">
                                <tr v-for="i in online">
                                  <td>{{ i.letter_ref }}</td>
                                  <td>{{ i.member_name_new }}</td>
                                  <td>{{ i.date_modified }}</td>
                                  <td>{{ i.created_by }}</td>
                                  <td>
                                    <b-dropdown
                                      id="dropdown-left"
                                      text="Action"
                                      variant="primary"
                                      class="m-2"
                                    >
                                      <b-dropdown-item>Upload Letter </b-dropdown-item>
                                      <!--opens up a modal -->
                                      <b-dropdown-item>Download Letter</b-dropdown-item>
                                      <b-dropdown-item>Reverse Letter</b-dropdown-item>
                                    </b-dropdown>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </b-row>
                          <!-- </div>  -->
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </b-tab>
                <b-tab
                  v-if="withdrawal === 'Online Withdrawals'"
                  title="Pending Date Paid"
                >
                  <div class="tab-pane active" id="tab1-4">
                    <b-row>
                      <b-col lg="12" sm="12" xl="12">
                        <div style="overflow: scroll">
                          <b-row>
                            <table class="table table-stripped">
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col">Stay</th>
                                  <th scope="col">Member .no</th>
                                  <th scope="col">Member Name</th>
                                  <th scope="col">Requisition Letter Sent On :</th>
                                  <th scope="col">Letter Sent By:</th>
                                  <th scope="col">Enter Paid Date:</th>
                                </tr>
                              </thead>
                              <tbody id="myTable">
                                <tr v-for="i in online">
                                  <td>{{ i.stay }}</td>
                                  <td>{{ i.member_no }}</td>
                                  <td>{{ i.member_name_new }}</td>
                                  <td>{{ i.date_modified }}</td>
                                  <td>{{ i.sent_by }}</td>
                                  <td>
                                    <b-button
                                      variant="primary"
                                      class="btn btn-primary btn-lg btn-block"
                                      >Save Date Paid
                                    </b-button>
                                  </td>

                                  <td>
                                    <b-button
                                      variant="primary"
                                      class="btn btn-primary btn-lg btn-block"
                                      >Edit Claim cycle dates
                                    </b-button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </b-row>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </b-tab>
                <b-tab v-if="withdrawal === 'Manual Withdrawals'" title="Pending Payment">
                  <div class="tab-pane active" id="tab1-4">
                    <div class="tab-pane active" id="tab1-4">
                      <b-row>
                        <b-col lg="12" sm="12" xl="12">
                          <div style="overflow: scroll">
                            <b-row>
                              <div class="col-xl-12 alert alert-secondary">
                                <h3>New Withdrawals Table</h3>
                                <p>
                                  The table below shows new withdrawals whose information
                                  has been entered into the system
                                </p>
                              </div>
                              <table class="table table-stripped">
                                <thead class="thead-light">
                                  <tr>
                                    <th scope="col">Member No.</th>
                                    <th scope="col">Member Name</th>
                                    <th scope="col">Scheme Name</th>
                                    <th scope="col">Requisition letter sent on</th>
                                    <th scope="col">Letter sent by</th>
                                    <th scope="col">Enter paid date</th>
                                  </tr>
                                </thead>
                                <tbody id="myTable">
                                  <tr v-for="i in online">
                                    <td>{{ i.letter_ref }}</td>
                                    <td>{{ i.member_name_new }}</td>
                                    <td>{{ i.scheme_name }}</td>
                                    <td>{{ i.date_modified }}</td>
                                    <td>{{ i.created_by }}</td>
                                    <td>
                                      <b-dropdown
                                        id="dropdown-left"
                                        text="Action"
                                        variant="primary"
                                        class="m-2"
                                      >
                                        <b-dropdown-item>Upload Letter </b-dropdown-item>
                                        <!--opens up a modal -->
                                        <b-dropdown-item>Download Letter</b-dropdown-item>
                                        <b-dropdown-item>Reverse Letter</b-dropdown-item>
                                      </b-dropdown>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!-- </table> -->
                            </b-row>
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </b-tab>
                <b-tab title="Paid Withdrawals">
                  <div class="tab-pane active" id="tab1-4">
                    <b-row>
                      <b-col lg="12" sm="12" xl="12">
                        <div style="overflow: scroll">
                          <b-row>
                            <!-- This section will be used to fit all the filters that will be used in the below table -->
                            <b-col lg="4" sm="4" md="4" class="mb-4">
                              <!-- <button -->
                              <p>Filters</p>
                              <base-button
                                icon
                                type="primary"
                                @click="sort('withdrawal_type')"
                                >Online/Manual</base-button
                              >
                            </b-col>
                          </b-row>
                          <b-row>
                            <table class="table table-stripped">
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col">Type</th>
                                  <th scope="col">Memb. No.</th>
                                  <th scope="col">Member Name</th>
                                  <th scope="col">Date Received from Trustees</th>
                                  <th scope="col">Date sent to Custodian</th>
                                  <th scope="col">Date Paid</th>
                                  <th scope="col">Date Notified</th>
                                  <th scope="col">Date DV sent to Trustees</th>
                                </tr>
                              </thead>
                              <tbody id="myTable">
                                <tr v-for="i in sortedProducts">
                                  <td>{{ i.withdrawal_type }}</td>
                                  <td>{{ i.member_no }}</td>
                                  <td>{{ i.member_name_new }}</td>
                                  <td>{{ i.date_discharged }}</td>
                                  <td>{{ i.date_modified }}</td>
                                  <td>{{ i.date_PAID }}</td>
                                  <td>PENDING</td>
                                  <td>PENDING</td>
                                </tr>
                              </tbody>
                            </table>
                          </b-row>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </b-tab>
              </b-tabs>
              <b-modal id="modal-1" size="lg" title="Claim reversal" hide-footer>
                <b-col xl="12" md="10">
                  <stats-card
                    title="New Withdrawals Table"
                    type="gradient-green"
                    sub-title=""
                    class="mb-4"
                  >
                    <template slot="footer">
                      <div class="mt-3">
                        <div class="row">
                          <div class="col-md-6">
                            <label for="input-default">Transaction ID</label>
                            <b-form-input
                              type="text"
                              placeholder="..Transaction ID"
                              readonly
                            >
                            </b-form-input>
                          </div>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-md-6">
                            <label for="input-default">Claim No</label>
                            <b-form-input type="text" placeholder="..Claim no" readonly>
                            </b-form-input>
                          </div>
                          <div class="col-md-6">
                            <label for="input-default">Member ID</label>
                            <b-form-input type="text" placeholder="..Member ID" readonly>
                            </b-form-input>
                          </div>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-md-6">
                            <label for="input-default">Member's Name</label>
                            <b-form-input type="text" placeholder="..Member's name">
                            </b-form-input>
                          </div>
                          <div class="col-md-6">
                            <label for="input-default">Member's Email</label>
                            <b-form-input type="text" placeholder="..Member's Email">
                            </b-form-input>
                          </div>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-md-6">
                            <label for="input-default">Scheme ID No</label>
                            <b-form-input
                              type="text"
                              placeholder="..Scheme ID No"
                            ></b-form-input>
                          </div>
                          <div class="col-md-6">
                            <label for="input-default">Scheme No:</label>
                            <b-form-input
                              type="text"
                              placeholder="..Scheme Name"
                            ></b-form-input>
                          </div>
                        </div>
                      </div>
                    </template>
                  </stats-card>
                  <stats-card
                    title="Reversal-Documents"
                    type="gradient-green"
                    sub-title=""
                    class="mb-4"
                  >
                    <template slot="footer">
                      <div class="mt-3">
                        <div class="row">
                          <div class="col-md-6">
                            <label for="input-default">Reversal Document Type</label>
                            <select>
                              <option>OPPS WITHDRAWAL ID(Current)</option>
                              <option>OPPS WITHDRAWAL ID(Legacy)</option>
                              <option>OPPS Areas Batch ID</option>
                              <option>OPPS Closing Balances Batch ID</option>
                              <option>OPPS Contriution Batch ID</option>
                              <option>OPPS Transfers in Batch ID</option>
                              <option>OPPS Interest ID [remitted]</option>
                              <option>OPPS Interest ID [unremitted]</option>
                              <option>Trustfund Deposit ID [Legacy]</option>
                              <option>Trustfund Withdrawal ID [Legacy]</option>
                              <option>Trustfund Deposit ID [Split]</option>
                              <option>Trustfund Withdrawal ID [Split]</option>
                              <option>Trustfund Payrol ID [Legacy]</option>
                              <option>Trustfund Payrol ID [Split]</option>
                            </select>
                          </div>
                          <div class="col-md-6">
                            <label for="input-default"
                              >Signed Product Application Form</label
                            >
                            <input
                              class="form-control"
                              type="file"
                              id="application_document"
                              name="application_document"
                            />
                          </div>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-md-12">
                            <label for="input-default">Description</label>
                            <textarea
                              type="text"
                              id="application_description"
                              name="application_description"
                              class="form-control"
                            ></textarea>
                          </div>
                        </div>
                        <br />
                        <br />
                      </div>
                      <br />
                    </template>
                  </stats-card>
                  <base-button
                    class="mt-3"
                    block
                    @click="$bvModal.hide('modal-1')"
                    type="success"
                    >Save Commission Claim</base-button
                  >
                </b-col>
              </b-modal>
              <b-modal id="modal-1" size="lg" title="Claim reversal" hide-footer>
                <b-col xl="12" md="10">
                  <stats-card
                    title="New Withdrawals Table"
                    type="gradient-green"
                    sub-title=""
                    class="mb-4"
                  >
                    <template slot="footer">
                      <div class="mt-3">
                        <div class="row">
                          <div class="col-md-6">
                            <label for="input-default">Transaction ID</label>
                            <b-form-input
                              type="text"
                              placeholder="..Transaction ID"
                              readonly
                            >
                            </b-form-input>
                          </div>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-md-6">
                            <label for="input-default">Claim No</label>
                            <b-form-input type="text" placeholder="..Claim no" readonly>
                            </b-form-input>
                          </div>
                          <div class="col-md-6">
                            <label for="input-default">Member ID</label>
                            <b-form-input type="text" placeholder="..Member ID" readonly>
                            </b-form-input>
                          </div>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-md-6">
                            <label for="input-default">Member's Name</label>
                            <b-form-input type="text" placeholder="..Member's name">
                            </b-form-input>
                          </div>
                          <div class="col-md-6">
                            <label for="input-default">Member's Email</label>
                            <b-form-input type="text" placeholder="..Member's Email">
                            </b-form-input>
                          </div>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-md-6">
                            <label for="input-default">Scheme ID No</label>
                            <b-form-input
                              type="text"
                              placeholder="..Scheme ID No"
                            ></b-form-input>
                          </div>
                          <div class="col-md-6">
                            <label for="input-default">Scheme No:</label>
                            <b-form-input
                              type="text"
                              placeholder="..Scheme Name"
                            ></b-form-input>
                          </div>
                        </div>
                      </div>
                    </template>
                  </stats-card>
                  <stats-card
                    title="Reversal-Documents"
                    type="gradient-green"
                    sub-title=""
                    class="mb-4"
                  >
                    <template slot="footer">
                      <div class="mt-3">
                        <div class="row">
                          <div class="col-md-6">
                            <label for="input-default">Reversal Document Type</label>
                            <select>
                              <option>OPPS WITHDRAWAL ID(Current)</option>
                              <option>OPPS WITHDRAWAL ID(Legacy)</option>
                              <option>OPPS Areas Batch ID</option>
                              <option>OPPS Closing Balances Batch ID</option>
                              <option>OPPS Contriution Batch ID</option>
                              <option>OPPS Transfers in Batch ID</option>
                              <option>OPPS Interest ID [remitted]</option>
                              <option>OPPS Interest ID [unremitted]</option>
                              <option>Trustfund Deposit ID [Legacy]</option>
                              <option>Trustfund Withdrawal ID [Legacy]</option>
                              <option>Trustfund Deposit ID [Split]</option>
                              <option>Trustfund Withdrawal ID [Split]</option>
                              <option>Trustfund Payrol ID [Legacy]</option>
                              <option>Trustfund Payrol ID [Split]</option>
                            </select>
                          </div>
                          <div class="col-md-6">
                            <label for="input-default"
                              >Signed Product Application Form</label
                            >
                            <input
                              class="form-control"
                              type="file"
                              id="application_document"
                              name="application_document"
                            />
                          </div>
                        </div>
                        <br />
                        <div class="row">
                          <div class="col-md-12">
                            <label for="input-default">Description</label>
                            <textarea
                              type="text"
                              id="application_description"
                              name="application_description"
                              class="form-control"
                            ></textarea>
                          </div>
                        </div>
                        <br />
                        <br />
                      </div>
                      <br />
                    </template>
                  </stats-card>
                  <base-button
                    class="mt-3"
                    block
                    @click="$bvModal.hide('modal-1')"
                    type="success"
                    >Save Commission Claim</base-button
                  >
                </b-col>
              </b-modal>
              <!-- Introducing a new modal that contains members details in the insurance module -->
              <b-modal id="modal-view" size="lg" title="Claim Details" hide-footer>
                <b-tabs>
                  <b-tab title="Existing Policies">
                    <br />
                    <b-col xl="12" md="10">
                      <stats-card
                        title="Policy and Payments"
                        type="gradient-green"
                        sub-title=""
                        class="mb-4"
                      >
                        <template slot="footer">
                          <div class="mt-3">
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">Policy Number</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Policy Number"
                                  readonly
                                >
                                </b-form-input>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">Insurance Company</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Insurance Company"
                                  readonly
                                >
                                </b-form-input>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">Product Name</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Product Name"
                                  readonly
                                >
                                </b-form-input>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">Options Name</label>
                                <b-form-input type="text" placeholder="..Option name">
                                </b-form-input>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">Policy Stage</label>
                                <b-form-input type="text" placeholder="..Policy Stage">
                                </b-form-input>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default"
                                  >Policy Certificate (password protected)</label
                                >
                                <b-button
                                  variant="primary"
                                  class="btn btn-primary btn-lg btn-block"
                                >
                                  View
                                </b-button>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">Policy Status</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Policy Status"
                                ></b-form-input>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">Policy Start</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Policy Start"
                                ></b-form-input>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">Policy End</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Policy End"
                                ></b-form-input>
                              </div>
                            </div>
                          </div>
                        </template>
                      </stats-card>
                      <base-button
                        class="mt-3"
                        block
                        @click="$bvModal.hide('modal-view')"
                        type="success"
                        >Save and Exit</base-button
                      >
                    </b-col>
                  </b-tab>
                  <b-tab title="Member Profile">
                    <br />
                    <b-col xl="12" md="10">
                      <stats-card
                        title="Profile information"
                        type="gradient-green"
                        sub-title=""
                        class="mb-4"
                      >
                        <template slot="footer">
                          <div class="mt-3">
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">Member code</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Member code"
                                  readonly
                                >
                                </b-form-input>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">Member Name</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Member Name"
                                  readonly
                                >
                                </b-form-input>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">Date of Birth</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Date of Birth"
                                  readonly
                                >
                                </b-form-input>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">National ID Number</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..National ID number"
                                >
                                </b-form-input>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">Place of Work</label>
                                <b-form-input type="text" placeholder="..Place of Work">
                                </b-form-input>
                              </div>
                            </div>
                            <br />
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">Telephone Number</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Telephone Number"
                                ></b-form-input>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">Email</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Email"
                                ></b-form-input>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <label for="input-default">Member Group ID</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Member Group ID"
                                ></b-form-input>
                              </div>
                              <div class="col-md-6">
                                <label for="input-default">Member Group Link</label>
                                <b-form-input
                                  type="text"
                                  placeholder="..Member Group Link"
                                ></b-form-input>
                              </div>
                            </div>
                          </div>
                        </template>
                      </stats-card>
                      <base-button
                        class="mt-3"
                        block
                        @click="$bvModal.hide('modal-view')"
                        type="success"
                        >Save Member Profile</base-button
                      >
                    </b-col>
                  </b-tab>
                  <b-tab title="Documents"> </b-tab>
                  <b-tab title="Insurerance Workflow"> </b-tab>
                </b-tabs>
              </b-modal>
            </b-form>
          </div>
        </b-tab>
        <b-tab title="INSURANCE(20)">
          <div>
            <b-form @submit.prevent="updateProfile">
              <b-row>
                <div class="my-auto align-self-center">
                  <b-col xl="12">
                    <h4>List of claims</h4>
                  </b-col>
                </div>
              </b-row>
              <div v-loading="true" id="loading" v-if="checking">
                <p>Checking claims data</p>
              </div>
              <b-row>
                <div class="col-xl-6">
                  <b-col xl="12" sm="12">
                    <p class="mb-0">
                      <b>Type something in the input field to search the table</b>
                    </p>
                    <b-form-input
                      type="text"
                      label=""
                      placeholder="Search for a claim"
                      v-model="searchTitle"
                    >
                    </b-form-input>
                    <br />
                    <b-button
                      pill
                      variant="outline-secondary"
                      v-on:click="
                        page = 1;
                        retrieveTutorials();
                      "
                      >Search</b-button
                    >
                  </b-col>
                </div>
                <div class="col-xl-6">
                  <b-col xl="12" sm="12">
                    <p class="mb-0"><b>Filter by</b></p>
                    <select
                      class="w-75"
                      v-model="selectedClaim"
                      v-on:click="choosenRows()"
                    >
                      <option v-for="size in claims" :key="size.id" :value="size.name">
                        {{ size.name }}
                      </option>
                    </select>
                  </b-col>
                </div>
              </b-row>
              <br />

              <br />
              <b-row>
                <b-col lg="4">
                  Select Number of rows:
                  <select class="w-75" v-model="selectedLimit" v-on:click="choosenRows()">
                    <option v-for="size in limit" :key="size" :value="size">
                      {{ size }}
                    </option>
                  </select>
                </b-col>
                <b-col lg="4">
                  Items per Page:
                  <select class="w-75" v-model="pageSize">
                    <option v-for="size in pageSizes" :key="size" :value="size">
                      {{ size }}
                    </option>
                  </select>
                </b-col>
              </b-row>
              <br />
              <b-row>
                <b-col lg="6">
                  <pagination
                    v-bind:todos="todos"
                    v-on:page:update="updatePage"
                    v-bind:currentPage="currentPage"
                    v-bind:pageSize="pageSize"
                  >
                  </pagination>
                </b-col>
              </b-row>
              <!-- Adding a tab pill -->
              <b-tabs>
                <div>
                  <b-form>
                    <b-row>
                      <b-col lg="12" sm="12" xl="12">
                        <div style="overflow: scroll">
                          <!--<div class="col-xl-12 alert alert-secondary">
                            <p>
                              Select the member whose policy you wish to approve/reject in
                              the table below. If approved the member will receive policy
                              certificate and insurance company notified
                            </p>
                          </div>-->

                          <br />

                          <br />
                          <b-row>
                            <table class="table table-stripped">
                              <thead class="thead-light">
                                <tr>
                                  <th scope="col">
                                    <label class="form-checkbox">
                                      <input
                                        type="checkbox"
                                        v-model="selectAll"
                                        @click="selectIns"
                                      />
                                    </label>
                                  </th>
                                  <th scope="col">Id</th>
                                  <th scope="col">Member Code</th>
                                  <th scope="col">Member Name</th>
                                  <th scope="col">Specified Items</th>
                                  <th scope="col">Policy Number</th>
                                  <th scope="col">Sum Insured</th>
                                  <th scope="col">Status</th>
                                  <th scope="col">Action</th>
                                </tr>
                              </thead>
                              <tbody id="myTable">
                                <tr
                                  v-for="i in selectedMembers"
                                  :selectedMembers="selectedMembers"
                                  :currentpage="currentPage"
                                  :key="i.ID"
                                >
                                  <td>
                                    <label class="form-checkbox">
                                      <input
                                        type="checkbox"
                                        :value="i.ID"
                                        v-model="selected"
                                      />
                                      <i class="form-icon"></i>
                                    </label>
                                  </td>
                                  <td>{{ i.ID }}</td>
                                  <td>{{ i.ClientID }}</td>
                                  <td>{{ i.claimant }}</td>
                                  <td>{{ i.specificItems }}</td>
                                  <td>{{ i.policyNo }}</td>
                                  <td>{{ i.sumInsured }}</td>
                                  <td>{{ i.status }}</td>

                                  <td>
                                    <b-dropdown
                                      id="dropdown-left"
                                      text="Action"
                                      variant="primary"
                                      class="m-2"
                                    >
                                      <!-- <b-dropdown-item v-b-modal.modal-1>Reverse a claim</b-dropdown-item> -->
                                      <b-dropdown-item v-b-modal.modal-view
                                        >View</b-dropdown-item
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
                  </b-form>
                </div>
              </b-tabs>
              <!-- <b-row>
            <b-col lg="12" sm="12" xl="12">
	
           <div style="overflow: scroll;"> 
	  <b-row>
<table class="table table-stripped">
	    <thead class="thead-light">
	      <tr>
		<th scope="col">
			<label class="form-checkbox">
			<input type='checkbox' v-model='selectAll' @click='select'> 
			</label>
		</th>
	      <th scope="col">Claim number</th>
	      <th scope="col">Member ID</th >
		  <th scope="col">Full Name </th>
		  <th scope="col">Category</th>
		  <th scope="col">Scheme number</th>
		  <th scope="col"> Processing stage</th>
		  <th scope="col"> Status</th>
          <th scope="col">Action</th>

	      </tr>
	    </thead>
       <tbody  id="myTable">
	      	<tr v-for="i in insurance_items" >
				<td>
					<label class="form-checkbox">
    				<input type="checkbox" :value="i.id " v-model="selected">
					<i class="form-icon"></i>
  					</label>
				</td>
	      		<td>{{i.claimnumber}}</td>
	      		<td>{{i.memberid}}</td>
	      		<td>{{i.fullName}}</td>
	      		<td>{{i.Category}}</td>
				<td>{{i.schemeno}}</td>
				<td>{{i.processingstage}}</td>
				<td>{{i.status}}</td>

				<td>
					<b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
					
					<b-dropdown-item v-b-modal.modal-1>Reverse a claim</b-dropdown-item>
					</b-dropdown>
				</td>
	   		</tr>
		</tbody>
	  </table>
	                           
	  </b-row>
  </div>
          </b-col>
          </b-row> -->
            </b-form>
          </div>
        </b-tab>
        <b-tab title="TRUST(10)">
          <div>
            <b-form @submit.prevent="updateProfile">
              <b-row>
                <div class="my-auto align-self-center">
                  <b-col xl="12">
                    <h4>List of claims</h4>
                  </b-col>
                </div>
              </b-row>
              <br />
              <b-row>
                <div class="col-xl-6">
                  <b-col xl="12" sm="12">
                    <p class="mb-0">
                      <b>Type something in the input field to search the table</b>
                    </p>
                    <b-form-input type="text" label="" placeholder="Search for a claim">
                      <br />
                    </b-form-input>
                  </b-col>
                </div>
                <!--<div class="col-xl-6">
                  <b-col xl="12" sm="12">
                    <p class="mb-0"><b>Filter by</b></p>
                    <b-form-select
                      id="sort-by-select"
                      v-model="sortBy"
                      :options="sortOptions"
                      :aria-describedby="ariaDescribedby"
                      class="w-75"
                    >
                      <template #first>
                        <option value="">Date</option>
                        <option value="">Scheme Name</option>
                        <option value="">Scheme code</option>
                        <option value="">Member ID</option>
                        <option value="">Member Name</option>
                      </template>
                    </b-form-select>
                  </b-col>
                </div>-->
                <!-- <div class ="">
            <b-col xl="9" sm ="9"> -->
                <!-- <button -->

                <!-- <base-button  icon type="primary"  @click="sort('Category')" >Pension/Insurance/Trust</base-button>
            </b-col>
		  </div> -->
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
                            <th scope="col">Claim number</th>
                            <th scope="col">Member ID</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Scheme number</th>
                            <th scope="col">Processing stage</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody id="myTable">
                          <tr">
                          <td>
                            <label class="form-checkbox">
                              <input type="checkbox" />
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
                            <b-dropdown
                              id="dropdown-left"
                              text="Action"
                              variant="primary"
                              class="m-2"
                            >
                              <b-dropdown-item v-b-modal.modal-1
                                >Reverse Claim</b-dropdown-item
                              >
                            </b-dropdown>
                          </td>
                        </tbody>
                      </table>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
            </b-form>
          </div>
        </b-tab>
      </b-tabs>
    </card>
  </base-header>
</template>
<script>
import { getAllCLaims } from "../../../../api/users.api";
import BaseInput from "../../../../components/Inputs/BaseInput.vue";
import Pagination from "../../../../components/Pagination.vue";
import insuranceErrors from "../../../../service/insuranceErrors";
export default {
  components: { BaseInput, Pagination },
  data() {
    return {
      //insurance items
      // pending: "Pending",
      // just_reported: "Just Reported",
      // finalized: "Settled (Claim is Finalized)",
      // rejected: "Repudiated",
      // settled: "Settled",
      // in_progress: "On Progress",
      selectedClaim: "Just Reported",
      claims: [
        { id: 1, name: "Just Reported" },
        { id: 2, name: "Pending" },
        { id: 3, name: "Repudiated" },
        { id: 4, name: "Settled (Claim is Finalized)" },
        { id: 5, name: "Settled" },
        { id: 6, name: "On Progress" },
      ],
      todos: [],
      selected: [],
      selectAll: false,
      searchTitle: "",
      page: 1,
      currentPage: 0,
      pageSize: 5,
      selectedMembers: [],
      limit: [20, 50, 100, 200],
      selectedLimit: "",
      checking: false,
      pageSizes: [5, 10, 25],

      //pension items
      space: [
        {
          previous: "",
          expiration: "",
        },
      ],
      withdrawal: "",
      sortBy: "withdrawal_type",
      sortDirection: "asc",
      choice: "",
      items: [
        {
          scheme: "Test Scheme",
          member_name: " Test Member 1",
          withdrawal_id: " 27188 ",
        },
      ],
      online: [],
      trust: [],
      i_f_name: "", //i stands for internal
      i_l_name: "",
      i_email: "",
      user: "",
      isHidden: false,
      user_zone: "",
      user_accessto: "",
      b_division: ["Default"], // Array reference
      lists: [
        { value: "Default", text: "You haven't choosen any value", disabled: true },
        { value: "Pension", text: "Pension" },
        { value: "Insurance", text: "Insurance" },
        { value: "Trust", text: "Trust" },
        { value: "Acturial", text: "Acturial" },
        { value: "Training", text: "Training" },
      ],
      pension_items: [],
      trust_items: [],
    };
  },
  computed: {
    user_Name: function () {
      return this.i_f_name + "." + this.i_l_name;
    },
  },
  async mounted() {
    let response = "";
    this.todos = "";
    try {
      this.checking = true;
      response = await getAllCLaims();
      console.info("All claims", response.data.data);
      this.todos = response.data.data;
      this.updatevisibleMembers();
    } catch (e) {
      console.log("claims error", e);
      this.checking = false;
    }
    this.checking = false;
  },
  methods: {
    //insurance methods
    retrieveTutorials() {
      this.checking = true;
      let params = insuranceErrors.getRequestParams(
        this.searchTitle,
        this.selectedLimit,
        this.selectedClaim
      );

      getAllCLaims(params)
        .then((response) => {
          this.todos = response.data.data;
          this.updatevisibleMembers();
          console.log(response.data);
          this.checking = false;
        })
        .catch((e) => {
          this.checking = false;
          console.log(e);
        });
    },

    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updatevisibleMembers();
    },
    totalPages() {
      return Math.ceil(this.todos.length / this.pageSize);
    },
    updatevisibleMembers() {
      this.selectedMembers = this.todos.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );

      if (this.selectedMembers.length == 0 && this.currentPage > 0) {
        this.updatePage(currentPage - 1);
      }
    },
    choosenRows() {
      this.checking = true;
      let params = insuranceErrors.getRequestParams(
        this.searchTitle,
        this.selectedLimit,
        this.selectedClaim
      );

      getAllCLaims(params)
        .then((response) => {
          this.todos = response.data.data;
          this.updatevisibleMembers();
          console.log(response.data);
          this.checking = false;
        })
        .catch((e) => {
          this.checking = false;
          console.log(e);
        });
    },
    claimStatus() {
      this.checking = true;
      let params = insuranceErrors.getRequestParams(
        this.searchTitle,
        this.selectedLimit,
        this.selectedClaim
      );

      getAllCLaims(params)
        .then((response) => {
          this.todos = response.data.data;
          this.updatevisibleMembers();
          console.log(response.data);
          this.checking = false;
        })
        .catch((e) => {
          this.checking = false;
          console.log(e);
        });
    },

    //other methods
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.items) {
          this.selected.push(this.items[i].id);
        }
      }
    },
    selectIns() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.todos) {
          this.selected.push(this.todos[i].ID);
        }
      }
    },
    add() {
      this.space.push({
        previous: "",
        expiration: "",
      });
    },
    deleteV(counter) {
      this.space.splice(counter, 1);
    },
  },
  computed: {},
};
</script>
<style></style>
