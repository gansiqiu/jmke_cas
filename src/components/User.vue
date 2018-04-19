<template lang="html">
    <div class="user" v-cloak>
        <Icol span="24">用户</Icol><br>
        <Modal v-model="deleteModal" @on-ok="ok">
	        <p style="color:#f60;text-align:center">
	            <Icon type="information-circled"></Icon>
	            <span>确定要删除？</span>
	        </p>
	    </Modal>
		<a class="btn btn-primary btn-sm"  href="news/newsCOU" role="button" ><Icon type="plus-round"></Icon></span>新建</a>
		<Table :columns="columns" :data="dataList" style="margin-top:20px;"></Table>
		<Page v-model="totalPage" :current="1" :total="totalPage" @on-change="pageChange" show-total style="margin-right:60px;margin-top:20px;text-align:right;"></Page>
	</div>
</template>

<script>
export default {
    name:"user",
    data(){
        return{
            dataList:[]
        }
    }
}
</script>

<style lang="css">
[v-cloak] {
  display: none;
}
</style>
