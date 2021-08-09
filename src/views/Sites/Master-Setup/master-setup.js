//declaring a vue instance for a drropdown menu in product settings
const dropdownVue={
    data(){
      return{
        selected :''
      }
    }
  }
Vue.createApp(dropdownVue).mount('#countryDropdown');//the id of the dropdown