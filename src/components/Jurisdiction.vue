<template lang="html">
    <div class="jurisdiction">
        <Icol span="24">权限</Icol><br>
        <Modal v-model="deleteModal" @on-ok="ok">
	        <p style="color:#f60;text-align:center">
	            <Icon type="information-circled"></Icon>
	            <span>确定要删除？</span>
	        </p>
	    </Modal>
        <router-link class="btn btn-primary" :to="{ name: 'jurisdictionCOU'}"><Icon type="plus-round"></Icon></span>新建</router-link>
		<Table :columns="columns" :data="dataList" style="margin-top:20px;"></Table>
		<Page v-model="totalPage" :current="1" :total="totalPage" @on-change="pageChange" show-total style="margin-right:60px;margin-top:20px;text-align:right;"></Page>
    </div>
</template>

<script>
export default {
    name:"jurisdiction",
    data(){
        return{
            dataList:[],
            columns: [
          	     { title: 'ID',key: 'id', align: 'center'},
                 { title: '权限名称',key: 'permissionName', align: 'center'},
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
            postUrl:'/api/permission/getDataByPage',
            postData:{offset:0,limit:10},
            permissionId:"",
            deletePostUrl:'/api/permission/deletePermission',
            deleateData:{id:0}
        }
    },
    methods:{
        // 分页控件页数改变事件
        pageChange:function(index){
            this.$Loading.start();
            let that = this;
            this.postData.offset = (index - 1) * 10;
            axios.get(this.postUrl, {
    　　          params: this.postData
            })
            .then(function(res){
                that.$Loading.finish();
                that.dataList = res.data.resultData;
                that.totalPage = res.data.totalRecords;
            })
            .catch(function(err){
                that.$Loading.error();
                that.$Notice.error({title:"请求失败！"});
            });
        },
        ok(){
            var that = this;
            this.deleateData.id = this.permissionId;
            axios.get(this.deletePostUrl,{
    　　          params: this.deleateData
            })
            .then(function(res){
                that.$Notice.success({title:"删除成功！"});
                that.deleteModal = false;
                axios.get(that.postUrl, {
        　　          params: that.postData
                })
                .then(function(res){
                    that.dataList = res.data.resultData;
                    that.totalPage = res.data.totalRecords;
                })
                .catch(function(err){
                    that.$Notice.error({title:"请求失败！"});
                });
            })
            .catch(function(err){
                that.$Notice.error({title:"请求失败！"});
            });
        },
        change(index){
            this.$router.push({path:'/Jurisdiction/JurisdictionCOU',query: {id: this.dataList[index].id, permission:this.dataList[index].permissionName }});
        },
        remove(index){
            this.permissionId =  this.dataList[index].id;
            this.deleteModal = true;
        }
    },
    created(){
        var that = this;
        this.$Loading.start();
        axios.get(this.postUrl, {
　　          params: this.postData
        })
        .then(function(res){
            that.$Loading.finish();
            that.dataList = res.data.resultData;
            that.totalPage = res.data.totalRecords;
        })
        .catch(function(err){
            that.$Loading.error();
            that.$Notice.error({title:"请求失败！"});
        });
    }
}
</script>

<style lang="css">
</style>
