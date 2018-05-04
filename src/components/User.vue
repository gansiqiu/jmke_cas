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
		<Table :columns="columns" :data="dataList" style="margin-top:20px;"></Table>
		<Page v-model="totalPage" :current="1" :total="totalPage" @on-change="pageChange" show-total style="margin-right:60px;margin-top:20px;text-align:right;"></Page>
	</div>
</template>

<script>
export default {
    name:"user",
    data(){
        return{
            dataList:[],
            columns: [
          	     { title: 'ID',key: 'id', align: 'center'},
                 { title: '用户名称',key: 'email', align: 'center'},
                 { title: '修改',key: 'opt', align: 'center',
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
                             // h('Button', {
                             //     props: {
                             //         type: 'error',
                             //         size: 'small'
                             //     },
                             //     on: {
                             //         click: () => {
                             //             this.remove(params.index)
                             //         }
                             //     }
                             // }, '删除')
                         ]);
                     }
                 }
             ],
             totalPage:"",
             deleteModal:false,
             deleateData:{email:"",valid:0},
             deletePostUrl:"/api/user/resetUserValid",
             postUrl:'/api/user/getDataByPage',
             postData:{offset:0,limit:10}
        }
    },
    methods:{
        // 分页控件页数改变事件
        pageChange:function(){

        },
        ok(){
            var that = this;
            this.deleateData.valid = !this.deleateData.valid;
            console.log(this.deleateData.valid );
            // 删除选项
            axios.post(this.deletePostUrl, JSON.stringify(this.deleateData))
            .then(function(res){
                that.$Notice.success({title:"删除成功！"});
                that.deleteModal = false;
                axios.get(that.postUrl, {
        　　          params: that.postData
                })
                .then(function(res){
                    console.log(res);
                    that.dataList = res.data.resultData;
                    that.totalPage = res.data.totalRecords
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
            this.$router.push({path:'/user/userCOU',query: {id: this.dataList[index].id, email:this.dataList[index].email,  valid:this.dataList[index].valid}});
        },
        remove(index){
            this.deleateData.email = this.dataList[index].email;
            this.deleateData.valid = this.dataList[index].valid;
            console.log("=================:",this.deleateData.valid );
            this.deleteModal = true;
        }
    },
    created(){
        var that = this;
        axios.get(this.postUrl, {
　　          params: this.postData
        })
        .then(function(res){
            console.log(res);
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
[v-cloak] {
  display: none;
}
</style>
