<template lang="html">
    <div class="role" v-cloak>
        <Icol span="24">角色</Icol><br>
        <Modal v-model="deleteModal" @on-ok="ok">
	        <p style="color:#f60;text-align:center">
	            <Icon type="information-circled"></Icon>
	            <span>确定要删除？</span>
	        </p>
	    </Modal>
        <router-link class="btn btn-primary" :to="{ name: 'roleCOU'}"><Icon type="plus-round"></Icon></span>新建</router-link>
		<Table :columns="columns" :data="dataList" style="margin-top:20px;"></Table>
		<Page v-model="totalPage" :current="1" :total="totalPage" @on-change="pageChange" show-total style="margin-right:60px;margin-top:20px;text-align:right;"></Page>
    </div>
</template>

<script>
export default {
    name:"role",
    data(){
        return{
            dataList:[],
            columns: [
          	     { title: 'ID',key: 'id', align: 'center'},
                 { title: '角色名称',key: 'rolename', align: 'center'},
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
             totalPage:0,
             deleteModal:false,
             roleId : 0,
             deleateData:{id:0},
             deletePostUrl:'/api/role/deleteRole',
             postUrl:'/api/role/getDataByPage',
             postData:{offset:0,limit:10}
        }
    },
    methods:{
        // 分页控件页数改变事件
        pageChange:function(index){
            this.postData.offset = (index - 1) * 10;
            var that = this;
            axios.get(this.postUrl, {
    　　          params: this.postData
            })
            .then(function(res){
                that.dataList = res.data.resultData;
                that.totalPage = res.data.totalRecords
            })
            .catch(function(err){
                that.$Notice.error({title:"请求失败！"});
            });
        },
        ok(){
            var that = this;
            this.deleateData.id = this.roleId;
            // 删除选项
    //         axios.get(this.deletePostUrl,{
    // 　　          params: this.deleateData
    //         })
    //         .then(function(res){
    //             that.$Notice.success({title:"删除成功！"});
    //             that.deleteModal = false;
    //
    //         })
    //         .catch(function(err){
    //             that.$Notice.error({title:"请求失败！"});
    //         });
        },
        change(index){
            this.$router.push({path:'/role/roleCOU',query: {id: this.dataList[index].id, role:this.dataList[index].rolename }});
        },
        remove(index){
            this.roleId =  this.dataList[index].id;
            this.deleteModal = true;
        }
    },
    created(){
        var that = this;
        axios.get(this.postUrl, {
　　          params: this.postData
        })
        .then(function(res){
            that.dataList = res.data.resultData;
            that.totalPage = res.data.totalRecords
        })
        .catch(function(err){
            that.$Notice.error({title:"请求失败！"});
        });
    }
}
</script>

<style lang="css">

</style>
