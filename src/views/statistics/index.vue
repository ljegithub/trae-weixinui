<script setup lang="ts">

</script>

<template>
  <div class="statistics-container">
    <el-row :gutter="20">
      <!-- 标题卡片 -->
      <el-col :span="24">
        <el-card class="title-card">
          <h2>数据统计</h2>
          <p>全面展示水利办业务数据，助力决策分析</p>
        </el-card>
      </el-col>

      <!-- 统计数据展示 -->
      <el-col :span="24">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>统计数据</span>
              <el-button type="primary">导出数据</el-button>
            </div>
          </template>
          <div class="statistics-content">
            <el-empty description="暂无数据" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.statistics-container {
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

.statistics-content {
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>