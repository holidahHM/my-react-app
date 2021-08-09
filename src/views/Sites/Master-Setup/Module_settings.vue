<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    <card>
      <div>
        <b-tabs pills>
          <b-tab xl="3" active>
            <template v-slot:title> Basic System Settings </template>
            <br />
            <div class="d-flex justify-content-center mb-3">
              <b-col cols="12">
                <h3 class="mb-0">General system setings</h3>
                <br />
              </b-col>
            </div>
            <b-form>
              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input
                      label="Number of Alerts per user"
                      v-model="user.alertsPerUser"
                    >
                      <select class="form-control">
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                      </select>
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      label="Select the Format of Reports"
                      v-model="user.reportFormat"
                    >
                      <select class="form-control">
                        <option>CSV</option>
                        <option>PDF</option>
                        <option>EXCEL</option>
                      </select>
                    </base-input>
                  </b-col>
                  <!--CHANGE LOGO-->
                  <b-col lg="6">
                    <label class="Upload Logo">
                      <!-- We can't use a normal button element here, as it would become the target of the label. -->
                      <div class="select-button">
                        <!-- Display the filename if a file has been selected. -->
                        <span v-if="value">Selected File: {{ value.name }}</span>

                        <span v-else>Upload Logo File</span>
                      </div>
                      <!-- Now, the file input that we hide. -->
                      <br />
                      <input type="file" @change="handleFileChange" />
                    </label>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      label="Number of Content that appears on the Side menu"
                      v-model="user.sideMenuContent"
                    >
                      <select class="form-control">
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      label="Choose the Background Colour"
                      v-model="user.backgroundColor"
                    >
                      <select class="form-control">
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Yellow</option>
                        <option>Black</option>
                      </select>
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      label="Choose the Navbar Colour"
                      v-model="user.navbarColor"
                    >
                      <select class="form-control">
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Yellow</option>
                        <option>Black</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Change Company name"
                      placeholder="Define company name"
                      v-model="user.companyName"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      label="Enable 24hour clock reporting"
                      v-model="user.clockReporting"
                    >
                      <select class="form-control">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
              </div>
              <br />
              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="info">Save</base-button>

                <base-button type="danger">Delete</base-button>
              </b-row>
              <hr class="my-4" />
            </b-form>
          </b-tab>

          <b-tab xl="3">
            <template v-slot:title> Modules Settings </template>
            <br />
            <b-form>
              <h6 class="heading-small text-muted mb-4">CRM</h6>
              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Type of meeting"
                      placeholder="Define Types of meetings"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                </b-row>
              </div>
              <br />
              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="info">Save</base-button>

                <base-button type="danger">Delete</base-button>
              </b-row>
              <hr class="my-4" />
            </b-form>
            <b-form>
              <h6 class="heading-small text-muted mb-4">E-learning</h6>
              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="number"
                      label="Number of Video per page load"
                      placeholder="Define Number of Video"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="number"
                      label="Number of Blogs per page load"
                      placeholder="Define Number of Blogs"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="number"
                      label="Number of Podcasts per page load"
                      placeholder="Define Number of Podcast"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="Language Setup Option" v-model="user.divison">
                      <select class="form-control">
                        <option>English</option>
                        <option>Swahili</option>
                        <option>Baganda</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Mode of Payment"
                      placeholder="Define Mode of Payment"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                </b-row>
              </div>
              <br />
              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="info">Save</base-button>

                <base-button type="danger">Delete</base-button>
              </b-row>
              <hr class="my-4" />
            </b-form>
            <b-form>
              <h6 class="heading-small text-muted mb-4">Accounting</h6>
              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input label="Select Currency" v-model="user.Prospect">
                      <select class="form-control">
                        <option>Ksh</option>
                        <option>Ugx</option>
                        <option>Zsh</option>
                      </select>
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Add Investment Type"
                      placeholder="Define Investment Types"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="number"
                      label="Define the number of Decimal places"
                      placeholder="Number of Decimal Places"
                      v-model="user.leadNumber"
                    >
                    </base-input>
                  </b-col>
                </b-row>
              </div>
              <br />
              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="info">Save</base-button>

                <base-button type="danger">Delete</base-button>
              </b-row>
              <hr class="my-4" />
            </b-form>
            <b-form>
              <h6 class="heading-small text-muted mb-4">Reports</h6>
              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input label="Allow Report Downloading" v-model="user.divison">
                      <select class="form-control">
                        <option>Yes</option>
                        <option>NO</option>
                      </select>
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      label="Open and View Reports on the Browser"
                      v-model="user.divison"
                    >
                      <select class="form-control">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <label class="Upload Logo">
                      <!-- We can't use a normal button element here, as it would become the target of the label. -->
                      <div class="select-button">
                        <!-- Display the filename if a file has been selected. -->
                        <span v-if="value">Selected File: {{ value.name }}</span>

                        <span v-else>Upload Report Logo File</span>
                      </div>
                      <!-- Now, the file input that we hide. -->
                      <br />
                      <input type="file" @change="handleFileChange" />
                    </label>
                  </b-col>
                  <br />
                  <b-col lg="6">
                    <label class="Upload Logo">
                      <!-- We can't use a normal button element here, as it would become the target of the label. -->
                      <div class="select-button">
                        <!-- Display the filename if a file has been selected. -->
                        <span v-if="value">Selected File: {{ value.name }}</span>

                        <span v-else>Upload Report Watermark File</span>
                      </div>
                      <!-- Now, the file input that we hide. -->
                      <br />
                      <input type="file" @change="handleFileChange" />
                    </label>
                    <br />
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <br />
                    <base-input
                      label="Allow for report Serialization"
                      v-model="user.divison"
                    >
                      <select class="form-control">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <br />
                    <base-input label="Allow report encryption" v-model="user.divison">
                      <select class="form-control">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
              </div>
              <br />
              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="info">Save</base-button>

                <base-button type="danger">Delete</base-button>
              </b-row>
              <hr class="my-4" />
            </b-form>
            <b-form>
              <h6 class="heading-small text-muted mb-4">Document Centre</h6>
              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input label="Choose Division" v-model="user.divison">
                      <select class="form-control">
                        <option>Pension</option>
                        <option>Insurance</option>
                        <option>Trust</option>
                        <option>Training</option>
                        <option>Acturial Services</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="email"
                      label="Lead Email address"
                      placeholder="Prefil Email Address"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="email"
                      label="Lead Email address"
                      placeholder="Prefil Email Address"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="Choose Product or Service" v-model="user.product">
                      <select class="form-control">
                        <option>Prefil according to division</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Lead Phone Number"
                      placeholder="Lead Phone Number"
                      v-model="user.leadNumber"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Business Value"
                      placeholder="Business Value"
                      v-model="user.businessvalue"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="date"
                      label="Date of Contact"
                      placeholder="DAte of Contact"
                      id="example-date-input"
                      v-model="user.lastName"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group
                      label="Add Note"
                      label-class="form-control-label"
                      class="mb-0"
                      label-for="about-form-textaria"
                    >
                      <!--  <label class="form-control-label">About Me</label> -->
                      <b-form-textarea
                        rows="4"
                        value=""
                        id="about-form-textaria"
                        placeholder=""
                      ></b-form-textarea>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
              <br />
              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="info">Save</base-button>

                <base-button type="danger">Delete</base-button>
              </b-row>
              <hr class="my-4" />
            </b-form>
            <b-form>
              <h6 class="heading-small text-muted mb-4">Communication</h6>
              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input label="Select Prospect" v-model="user.Prospect">
                      <select class="form-control">
                        <option>Select Prospect</option>
                      </select>
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="Choose Division" v-model="user.divison">
                      <select class="form-control">
                        <option>Pension</option>
                        <option>Insurance</option>
                        <option>Trust</option>
                        <option>Training</option>
                        <option>Acturial Services</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="email"
                      label="Lead Email address"
                      placeholder="Prefil Email Address"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="email"
                      label="Lead Email address"
                      placeholder="Prefil Email Address"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="Choose Product or Service" v-model="user.product">
                      <select class="form-control">
                        <option>Prefil according to division</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Lead Phone Number"
                      placeholder="Lead Phone Number"
                      v-model="user.leadNumber"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Business Value"
                      placeholder="Business Value"
                      v-model="user.businessvalue"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="date"
                      label="Date of Contact"
                      placeholder="DAte of Contact"
                      id="example-date-input"
                      v-model="user.lastName"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group
                      label="Add Note"
                      label-class="form-control-label"
                      class="mb-0"
                      label-for="about-form-textaria"
                    >
                      <!--  <label class="form-control-label">About Me</label> -->
                      <b-form-textarea
                        rows="4"
                        value=""
                        id="about-form-textaria"
                        placeholder=""
                      ></b-form-textarea>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
              <br />
              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="info">Save</base-button>

                <base-button type="danger">Delete</base-button>
              </b-row>
              <hr class="my-4" />
            </b-form>
            <b-form>
              <h6 class="heading-small text-muted mb-4">E-board</h6>
              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input label="Select Prospect" v-model="user.Prospect">
                      <select class="form-control">
                        <option>Select Prospect</option>
                      </select>
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="Choose Division" v-model="user.divison">
                      <select class="form-control">
                        <option>Pension</option>
                        <option>Insurance</option>
                        <option>Trust</option>
                        <option>Training</option>
                        <option>Acturial Services</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="email"
                      label="Lead Email address"
                      placeholder="Prefil Email Address"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="email"
                      label="Lead Email address"
                      placeholder="Prefil Email Address"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="Choose Product or Service" v-model="user.product">
                      <select class="form-control">
                        <option>Prefil according to division</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Lead Phone Number"
                      placeholder="Lead Phone Number"
                      v-model="user.leadNumber"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Business Value"
                      placeholder="Business Value"
                      v-model="user.businessvalue"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="date"
                      label="Date of Contact"
                      placeholder="DAte of Contact"
                      id="example-date-input"
                      v-model="user.lastName"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group
                      label="Add Note"
                      label-class="form-control-label"
                      class="mb-0"
                      label-for="about-form-textaria"
                    >
                      <!--  <label class="form-control-label">About Me</label> -->
                      <b-form-textarea
                        rows="4"
                        value=""
                        id="about-form-textaria"
                        placeholder=""
                      ></b-form-textarea>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
              <br />
              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="info">Save</base-button>

                <base-button type="danger">Delete</base-button>
              </b-row>
              <hr class="my-4" />
            </b-form>
            <b-form>
              <h6 class="heading-small text-muted mb-4">Fund Management</h6>
              <div class="pl-lg-4">
                <b-row>
                  <b-col lg="6">
                    <base-input label="Select Prospect" v-model="user.Prospect">
                      <select class="form-control">
                        <option>Select Prospect</option>
                      </select>
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="Choose Division" v-model="user.divison">
                      <select class="form-control">
                        <option>Pension</option>
                        <option>Insurance</option>
                        <option>Trust</option>
                        <option>Training</option>
                        <option>Acturial Services</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="email"
                      label="Lead Email address"
                      placeholder="Prefil Email Address"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="email"
                      label="Lead Email address"
                      placeholder="Prefil Email Address"
                      v-model="user.email"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input label="Choose Product or Service" v-model="user.product">
                      <select class="form-control">
                        <option>Prefil according to division</option>
                      </select>
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Lead Phone Number"
                      placeholder="Lead Phone Number"
                      v-model="user.leadNumber"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <base-input
                      type="text"
                      label="Business Value"
                      placeholder="Business Value"
                      v-model="user.businessvalue"
                    >
                    </base-input>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col lg="6">
                    <base-input
                      type="date"
                      label="Date of Contact"
                      placeholder="DAte of Contact"
                      id="example-date-input"
                      v-model="user.lastName"
                    >
                    </base-input>
                  </b-col>
                  <b-col lg="6">
                    <b-form-group
                      label="Add Note"
                      label-class="form-control-label"
                      class="mb-0"
                      label-for="about-form-textaria"
                    >
                      <!--  <label class="form-control-label">About Me</label> -->
                      <b-form-textarea
                        rows="4"
                        value=""
                        id="about-form-textaria"
                        placeholder=""
                      ></b-form-textarea>
                    </b-form-group>
                  </b-col>
                </b-row>
              </div>
              <br />
              <b-row class="d-flex justify-content-center mb-3">
                <base-button type="info" @click="saveLogic">Save</base-button>

                <base-button type="danger">Delete</base-button>
              </b-row>
              <hr class="my-4" />
            </b-form>
          </b-tab>
        </b-tabs>
      </div>
    </card>
  </base-header>
</template>
<script>
import errorCodes from "../../../service/errorCodes";
import { systemSettings } from "../../../api/users.api";
export default {
  data() {
    return {
      user: {
        alertsPerUser: "",
        reportFormat: "",
        sideMenuContent: "",
        backgroundColor: "",
        navbarColor: "",
        companyName: "",
        clockReporting: "",
      },
    };
  },
  methods: {
    basicSettings() {},
  },
};
</script>
<style></style>
