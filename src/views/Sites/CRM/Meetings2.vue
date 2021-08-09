<template>
  <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
  <b-row>
    <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Schedule_Meeting()" variant="info">Schedule a Meeting</b-button>
      
    </b-button-group>
    </b-col>
    <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Add_Action_Item()" variant="success">Add Action Items</b-button>
      
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Add_Meeting_Expense()" variant="success">Add Meeting Expense</b-button>
      
    </b-button-group>
    </b-col>
     <b-col class="col-md-3">
      <b-button-group>
      <b-button @click="Meeting_Settings()" variant="success">Meeting Settings</b-button>
      
    </b-button-group>
    </b-col>
  </b-row>
  </base-header>
</template>

<script>
import Meeting_Settings from '../CRM/Meeting_Actions/Meeting_Settings'
import Schedule_Meeting from '../CRM/Meeting_Actions/Schedule_Meeting'
import Add_Action_Item from '../CRM/Meeting_Actions/Add_Action_Item'
import Add_Meeting_Expense from '../CRM/Meeting_Actions/Add_Meeting_Expense'

export default {
    comments:{
        Meeting_Settings,
        Schedule_Meeting,
        Add_Action_Item,
        Add_Meeting_Expense
    },
    methods: {
        Meeting_Settings(){
            this.$router.push('/meeting_settings')
        },
        Schedule_Meeting(){
            this.$router.push('/schedule_meeting')
        },
        Add_Action_Item(){
            this.$router.push('/add_action_item')
        },
        Add_Meeting_Expense(){
            this.$router.push('/add_meeting_expense')
        }
    },


}
</script>

<style>

</style>