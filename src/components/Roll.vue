<template lang="html">
    <div class="roll" v-cloak>
        <Icol span="24">角色</Icol><br>
        <Modal v-model="deleteModal" @on-ok="ok">
	        <p style="color:#f60;text-align:center">
	            <Icon type="information-circled"></Icon>
	            <span>确定要删除？</span>
	        </p>
	    </Modal>
        <router-link class="btn btn-primary" :to="{ name: 'rollCOU'}"><Icon type="plus-round"></Icon></span>新建</router-link>
		<Table :columns="columns" :data="dataList" style="margin-top:20px;"></Table>
		<Page v-model="totalPage" :current="1" :total="totalPage" @on-change="pageChange" show-total style="margin-right:60px;margin-top:20px;text-align:right;"></Page>
    </div>
</template>

<script>
export default {
    name:"roll",
    data(){
        return{
            dataList:[
              {id:"1",name:"管理员"},
              {id:"2",name:"设计师"},
              {id:"2",name:"设计师"},
              {id:"2",name:"设计师"},
              {id:"2",name:"设计师"},
              {id:"2",name:"设计师"},
              {id:"2",name:"设计师"},
              {id:"2",name:"设计师"},
              {id:"2",name:"企业用户"},
              {id:"2",name:"企业用户"},
              {id:"2",name:"企业用户"},
              {id:"2",name:"企业用户"},
              {id:"2",name:"企业用户"}
            ],
            columns: [
          	     { title: 'ID',key: 'id', align: 'center'},
                 { title: '类型',key: 'name', align: 'center'},
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
             totalPage:"",
             deleteModal:false
        }
    },
    methods:{
        // 分页控件页数改变事件
        pageChange:function(){

        },
        ok(){

        }
    },
    created(){
        this.totalPage = this.dataList.length;
    }
}
</script>

<style lang="css">
</style>
