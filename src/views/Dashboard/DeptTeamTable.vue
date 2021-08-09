<template>
  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">STAFF PERFORMANCE</h3>
        </b-col>
        <b-col class="text-right">
          <base-button size="sm" type="primary">See all</base-button>
        </b-col>
      </b-row>
    </template>


    <el-table
      class="table-responsive table"
      :data="tableData"
      header-row-class-name="thead-light">
      <el-table-column label="NAME" min-width="115x" prop="name">
        <template v-slot="{row}">
          <div class="font-weight-600">{{row.name}}</div>
        </template>
      </el-table-column>

      <el-table-column label="done-TASKS" min-width="125px" prop="tasks">
      </el-table-column>

      <el-table-column min-width="220px" prop="progress">
        <template v-slot="{row}">
          <div class="d-flex align-items-center">
            <span class="mr-2">{{row.progress}}%</span>
            <base-progress :type="row.progressType" :value="row.progress" />
          </div>
        </template>
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
  import { BaseProgress } from '@/components';
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'social-traffic-table',
    components: {
      BaseProgress,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        tableData: [
          {
            name: 'Holidah',
            tasks: '12',
            progress: 85,
            progressType: 'gradient-danger',
          },
          {
            name: 'Moses',
            tasks: '9',
            progress: 55,
            progressType: 'gradient-success',
          },
          {
            name: 'Ian',
            tasks: '10',
            progress: 75,
            progressType: 'gradient-primary',
          },
          {
            name: 'Sharlene',
            tasks: '10',
            progress: 75,
            progressType: 'gradient-info',
          },
          {
            name: 'Samuel',
            tasks: '7',
            progress: 40,
            progressType: 'gradient-warning',
          },
          {
            name: 'Robert',
            tasks: '10',
            progress: 75,
            progressType: 'gradient-warning',
          },
          {
            name: 'Allan',
            tasks: '11',
            progress: 80,
            progressType: 'gradient-warning',
          },
        ]
      }
    }

  }
</script>
<style>

</style>
