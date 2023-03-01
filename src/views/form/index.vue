<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Title">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="Journal">
        <el-input v-model="form.journal" />
      </el-form-item>
      <el-form-item label="Author">
        <el-input v-model="form.author" />
      </el-form-item>
      <el-form-item label="Authors">
        <el-input v-model="form.authors" />
      </el-form-item>

      <el-form-item label="Link">
        <el-input v-model="form.link" />
      </el-form-item>
      <el-form-item label="Papercode">
        <el-input v-model="form.papercode" />
      </el-form-item>
      <el-form-item label="Theyear">
        <el-input v-model="form.theyear" />
      </el-form-item>
      


      <el-form-item label="Date">
        <el-col :span="11">
          <el-date-picker v-model="form.date" type="date" placeholder="Pick a date" style="width: 100%;" />
        </el-col>
      </el-form-item>
      
      
      <el-form-item label="Abstract">
        <el-input v-model="form.abstract" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addArticle } from '@/api/table'
export default {
  data() {
    return {
      form: {
        title: '',
        author: '',
        authors: '',
        date: '',
        abstract: '',
        theyear: '',
        papercode: '',
        link: '',
        journal:'',
        
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
      addArticle(this.form).then().catch(error => {
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

