<template>
    <div class="app-container">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Link">
          <el-input v-model="form.link" />
        </el-form-item>
        <el-form-item label="Theyear">
          <el-input v-model="form.theyear" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button @click="onCancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script>
  import { addProject } from '@/api/table'
  export default {
    data() {
      return {
        form: {
          name: '',
          link: '',
          theyear: '',
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message('submit!')
        addProject(this.form).then().catch(error => {
          reject(error)
        })
      },
      onCancel() {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .line{
    text-align: center;
  }
  </style>
  
  