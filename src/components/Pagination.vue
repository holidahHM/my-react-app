<template>
  <div v-if="totalPages() > 0" class="pagination">
    <a
      v-if="showPreviousLink()"
      class="pagination-btn"
      v-on:click="updatePage(currentPage - 1)"
    >
      &laquo;
    </a>
    <a class="active">{{ currentPage + 1 }}</a>
    <a>of {{ totalPages() }} pages</a>
    <a
      v-if="showNextLink()"
      class="pagination-btn"
      v-on:click="updatePage(currentPage + 1)"
    >
      &raquo;
    </a>
  </div>
</template>
<script>
export default {
  name: "pagination",
  props: ["todos", "currentPage", "pageSize"],
  methods: {
    updatePage(pageNumber) {
      this.$emit("page:update", pageNumber);
    },
    totalPages() {
      return Math.ceil(this.todos.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == this.totalPages() - 1 ? false : true;
    },
  },
};
</script>
<style scoped>
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
  border-radius: 5px;
}
</style>
