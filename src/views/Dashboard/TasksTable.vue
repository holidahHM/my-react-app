<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col>
          <h3 class="mb-0">TASKS</h3>
        </b-col>
        <b-col class="text-right">
          <a href="#!" class="btn btn-sm btn-primary">See all</a>
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table"
              :data="tableData"
              header-row-class-name="thead-light">
      <el-table-column label="TASK"
                       min-width="60px"
                       prop="task">
        <template v-slot="{row}">
          <div class="font-weight-600">{{row.task}}</div>
        </template>
      </el-table-column>
      <el-table-column label="PERIOD"
                       min-width="50px"
                       prop="duration">
      </el-table-column>

       <el-table-column label="assignee"
                       min-width="70px"
                       prop="assignee">
      </el-table-column>
      <el-table-column label="STATUS"
                       min-width="50px"
                       prop="status">
      </el-table-column>
      <el-table-column label="date-SUBMITTED"
                       min-width="80px"
                       prop="submmittedTime">
        <template v-slot="{row}">
          {{row.submmittedTime}}
        </template>
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'page-visits-table',
    components: {
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
            task: 'Task(info1)',
            status: 'closed',
            duration: '1-day',
            assignee: 'Manager-1',
            submmittedTime: '01-02-2021'
          },
          {
            task: 'Task(info2)',
            status: 'closed',
            duration: '1-day',
            assignee: 'Manager-1',
            submmittedTime: '01-03-2021'
          },
          {
            task: 'Task(info3)',
            status: 'open',
            duration: '2-day',
            assignee: 'collegue-2',
            submmittedTime: 'N/A'
          },
          {
             task: 'Task(info4)',
            status: 'open',
            duration: '1-day',
            assignee: 'Manager-1',
            submmittedTime: 'N/A'
          },
          {
             task: 'Task(info5)',
            status: 'open',
            duration: '4-hours',
            assignee: 'Manager-1',
            submmittedTime: 'N/A'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
