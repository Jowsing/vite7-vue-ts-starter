<script setup lang="ts">
import { type FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

interface FormData {
  name?: string
  date?: string
}

const form = ref<FormData>({})

const rules = reactive<FormRules<FormData>>({
  name: [
    {
      required: true,
      message: '请输入文件名称',
      trigger: 'blur'
    }
  ],
  date: [
    {
      required: true,
      message: '请输入日期',
      trigger: 'blur'
    }
  ]
})
</script>

<template>
  <div w-full h-full>
    <div m-10>
      <el-form :model="form" :rules="rules">
        <div w-full h-68px flex flex-row bg-blue>
          <el-form-item label="文件名" prop="name" style="margin-top: 18px">
            <el-input v-model="form.name" placeholder="请输入文件名称" />
          </el-form-item>
          <el-form-item label="日期" prop="date" style="margin-top: 18px">
            <el-input v-model="form.date" placeholder="请输入日期" />
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
