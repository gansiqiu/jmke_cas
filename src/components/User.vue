<template lang="html">
    <div class="user" v-cloak>
        <Icol span="24">用户</Icol><br>
        <Modal v-model="deleteModal" @on-ok="ok">
	        <p style="color:#f60;text-align:center">
	            <Icon type="information-circled"></Icon>
	            <span>确定要删除？</span>
	        </p>
	    </Modal>
      <router-link class="btn btn-primary" :to="{ name: 'userCOU'}"><Icon type="plus-round"></Icon></span>新建</router-link>
		<!-- <a class="btn btn-primary btn-sm"  href="newsCOU" role="button" ><Icon type="plus-round"></Icon></span>新建</a> -->
		<Table :columns="columns" :data="dataList" style="margin-top:20px;"></Table>
		<Page v-model="totalPage" :current="1" :total="totalPage" @on-change="pageChange" show-total style="margin-right:60px;margin-top:20px;text-align:right;"></Page>
	</div>
</template>

<script>
export default {
    name:"user",
    data(){
        return{
            dataList:[
              {id:"1",name:"1"},
              {id:"2",name:"2"},
              {id:"2",name:"2"},
              {id:"2",name:"2"},
              {id:"2",name:"2"},
              {id:"2",name:"2"},
              {id:"2",name:"2"},
              {id:"2",name:"2"},
              {id:"2",name:"2"}
            ],
            columns: [
          	     { title: 'ID',key: 'id', align: 'center'},
                 { title: '姓名',key: 'name', align: 'center'},
                 { title: '操作',key: 'opt', align: 'center',
              	   render: (h, params) => {
                         return h('div', [
                             h('Button', {
                                 props: {
                                     type: 'primary',
                                     size: 'small'
                                 },
                                 style: {
                                     marginRight: '5px'
                                 },
                                 on: {
                                     click: () => {
                                         this.change(params.index)
                                     }
                                 }
                             }, '修改'),
                             h('Button', {
                                 props: {
                                     type: 'error',
                                     size: 'small'
                                 },
                                 on: {
                                     click: () => {
                                         this.remove(params.index)
                                     }
                                 }
                             }, '删除')
                         ]);
                     }
                 }
             ],
        }
    }
}
</script>

<style lang="css">
[v-cloak] {
  display: none;
}
</style>
