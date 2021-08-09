<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      
    </base-header>

    <b-container fluid class="mt--7">
      <card>
        <b-row class="float-right pb-4">
                    
        <b-col lg="1" >
        
        </b-col>
        </b-row>
	 	  <b-row>
          <b-col lg="6">
              <b-form-input type="text"
                    label=""
                    placeholder="Search..." class="text-left">
                </b-form-input>
          </b-col>
          <b-col lg="6">
              <router-link to="">
                <b-button variant="success">Upload</b-button>
              </router-link>
          </b-col>
        </b-row>
          <br>
          <b-row>
            <b-col lg="3">
                <b-form-group
                label="Scheme"
                label-for="sort-by-select"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                class="mb-0"
                v-slot="{ ariaDescribedby }"
              >
                <b-input-group size="sm">
                  <b-form-select
                    id="sort-by-select"
                    v-model="sortBy"
                    :options="sortOptions"
                    :aria-describedby="ariaDescribedby"
                    class="w-75"
                  >
                    <template #first>
                      <option value="">CROWN PAINTS</option>
                      <option value="">MASINDE MULIRO UNIVERSITY</option>
                    </template>
                  </b-form-select>
                </b-input-group>
              </b-form-group>
              </b-col>
            <b-col lg="4" class="my-1">
              <b-form-group
                label="Document wallet"
                label-for="sort-by-select"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                class="mb-0"
                v-slot="{ ariaDescribedby }"
              >
                <b-input-group size="sm">
                  <b-form-select
                    id="sort-by-select"
                    v-model="sortBy"
                    :options="sortOptions"
                    :aria-describedby="ariaDescribedby"
                    class="w-75"
                  >
                    <template #first>
                      <option value="">SCHEME REPORTS</option>
                    </template>
                  </b-form-select>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col lg="4" class="my-1">
              <b-form-group
                label="Document Type"
                label-for="sort-by-select"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                class="mb-0"
                v-slot="{ ariaDescribedby }"
              >
                <b-input-group size="sm">
                  <b-form-select
                    id="sort-by-select"
                    v-model="sortBy"
                    :options="sortOptions"
                    :aria-describedby="ariaDescribedby"
                    class="w-75"
                  >
                    <template #first>
                      <option value="">Meeting agenda</option>
                      <option value="">Administration Report</option>
                      <option value="">Investment Report</option>
                      <option value="">Custody Report</option>
                      <option value="">Accounts Report</option>
                      <option value="">Audit Report</option>
                      <option value="">Ad hoc Report</option>
                      <option value="">Quartely Compliance Report</option>
                    </template>
                  </b-form-select>
                </b-input-group>
              </b-form-group>
            </b-col>
            <!-- <b-col lg="2">
              <router-link to="/benefit_claim">
                <b-button variant="info">View</b-button>
              </router-link>
            </b-col> -->
          </b-row>
          <br>

        <div style="overflow: scroll;"> 
          <b-row>
          <b-col xl="6">
      <table class="table table-stripped">
            <thead class="thead-light">
              <tr>
                <th scope="col">Check Box</th>
                <th scope="col">Document Name</th>
                <th scope="col">Document Type</th>
                <th scope="col">Effective Date</th>
                <th scope="col">Expires</th>
                <th scope="col">Expiry Date</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody id="myTable">
                <tr>
                  <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                  <td>Notice & Agenda -BOT Q3 2018</td>
                  <td>Meeting Agenda</td>
                  <td>30-Sep-2018</td>
                  <td>No</td>
                  <td>N/A</td>

                  <td>
                    <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                        <b-dropdown-item > <router-link to="">View Document </router-link></b-dropdown-item>
                        <b-dropdown-item ><router-link to="">Add to dispatch list </router-link></b-dropdown-item>
                        <b-dropdown-item >View Details</b-dropdown-item>
                    </b-dropdown>
                  </td> 
                </tr>
                <tr>
                  <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                  <td>Notice & Agenda -BOT Q3 2018</td>
                  <td>Meeting Agenda</td>
                  <td>30-Sep-2018</td>
                  <td>No</td>
                  <td>N/A</td>

                  <td>
                    <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                        <b-dropdown-item > <router-link to="">View Document </router-link></b-dropdown-item>
                        <b-dropdown-item ><router-link to="">Add to dispatch list </router-link></b-dropdown-item>
                        <b-dropdown-item >View Details</b-dropdown-item>
                    </b-dropdown>
                  </td> 
                </tr>
                <tr>
                  <td><input type="checkbox"  name="scheme_no1" value="323"></td>
                  <td>Notice & Agenda -BOT Q3 2018</td>
                  <td>Meeting Agenda</td>
                  <td>30-Sep-2018</td>
                  <td>No</td>
                  <td>N/A</td>

                  <td>
                    <b-dropdown id="dropdown-left" text="Action" variant="primary" class="m-2">
                        <b-dropdown-item > View Document </b-dropdown-item>
                        <b-dropdown-item >Add to dispatch list</b-dropdown-item>
                        <b-dropdown-item >View Details</b-dropdown-item>
                    </b-dropdown>
                  </td> 
                </tr>
            </tbody>
             <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
          </table>
          </b-col>
          </b-row>
        </div>
        </card>
    </b-container>

  </div>
</template>
