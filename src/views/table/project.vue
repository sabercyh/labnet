<template>
    <div class="app-container">
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" label="ID" width="95">
          <template slot-scope="scope">
            {{ scope.$index }}
          </template>
        </el-table-column>
        <el-table-column label="Name" width="400">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column label="Link" width="110">
          <template slot-scope="scope">
            {{ scope.row.link }}
          </template>
        </el-table-column>
        <el-table-column label="Theyear" width="110">
          <template slot-scope="scope">
            {{ scope.row.theyear }}
          </template>
        </el-table-column>
        
      </el-table>
    </div>
  </template>
  
  <script>
  import { getProject } from '@/api/table'
  
  export default {
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    data() {
      return {
        list: null,
        listLoading: true
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getProject().then(response => {
          this.list = response.data.lists
          this.listLoading = false
          
        })
      }
    }
  }
  </script>
  