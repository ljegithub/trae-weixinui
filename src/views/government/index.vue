<script setup lang="ts">

</script>

<template>
  <div class="government-container">
    <el-row :gutter="20">
      <!-- 标题卡片 -->
      <el-col :span="24">
        <el-card class="title-card">
          <h2>政务公开</h2>
          <p>及时发布水利办政务信息，保障政务公开透明</p>
        </el-card>
      </el-col>

      <!-- 政务信息列表 -->
      <el-col :span="24">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>政务信息</span>
              <el-button type="primary">发布信息</el-button>
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
.government-container {
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