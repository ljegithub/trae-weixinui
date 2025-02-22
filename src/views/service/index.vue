<script setup lang="ts">

</script>

<template>
  <div class="service-container">
    <el-row :gutter="20">
      <!-- 标题卡片 -->
      <el-col :span="24">
        <el-card class="title-card">
          <h2>在线服务</h2>
          <p>提供便捷的水利办在线服务，高效处理业务需求</p>
        </el-card>
      </el-col>

      <!-- 服务列表 -->
      <el-col :span="24">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>服务项目</span>
              <el-button type="primary">申请服务</el-button>
            </div>
          </template>
          <div class="list-content">
            <el-empty description="暂无数据" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.service-container {
  padding: 20px;
}

.title-card {
  margin-bottom: 20px;
  background-color: #e6f7ff;
}

.title-card h2 {
  margin: 0 0 10px 0;
  color: #1890ff;
}

.title-card p {
  margin: 0;
  color: #666;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-content {
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>