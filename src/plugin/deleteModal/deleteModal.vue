<template>
  <div>
    <Modal v-model="isDeleteModal" width="360">
      <p slot="header">
        <span>删除确认</span>
      </p>
      <div>
        <p>是否删除此数据？</p>
      </div>
      <div slot="footer">
        <Button type="dashed" size="small" @click="openModal(2)">取消</Button>
        <Button type="error" size="small" @click="deletePost">删除</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: "deleteModal",
    data(){
      return {
        //模态框是否显示
        isDeleteModal: false,
      }
    },
    methods: {
      //打开或者关闭模态框 1为打开，2为关闭
      openModal( num = 1 ){
        if (num == '1') {
          this.isDeleteModal = true;
        } else {
          this.isDeleteModal = false;
        }
      },
      deletePost(){
        this.$emit('deletePost');
      }
    }
  }
</script>

<style scoped>

</style>
