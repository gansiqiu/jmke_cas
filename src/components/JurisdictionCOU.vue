<template lang="html">
    <div class="jurisdictionCOU">
        <Icol span="24">新建/修改权限</Icol><br>
        <Form :model="formItem" :label-width="180">
            <FormItem label="新建权限名称*">
                <Input type="text" v-model="jurisdictionName"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="submit">提交</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
    name:"jurisdictionCOU",
    data () {
        return {
            jurisdictionName:"",
            postUrl:'',
            postData:{
                permissionName:'',
                id:''
            }
        }
    },
    methods:{
        submit(){
            this.postData.permissionName = this.jurisdictionName;
            let that = this;
            if(this.$route.query.id != undefined){
                this.postUrl = "/api/permission/updatePermission";
                this.postData.id = this.$route.query.id;

            }else{
                this.postUrl = "/api/permission/createPermission";
                this.postData.id = "";

            }
            axios.post(this.postUrl,JSON.stringify(this.postData),{
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
            .then(function (response) {
                that.$Notice.success({title:"操作成功！3秒后返回权限管理界面"});
                setTimeout(function(){
                    that.$router.push({path:"/jurisdiction"});
                },3000);
            })
            .catch(function (error) {
                that.$Notice.error({title:"操作失败！"});
            });
        }
    },
    created(){
        if(this.$route.query.id != undefined){
            this.jurisdictionName = this.$route.query.permission;
        }
    }
}
</script>

<style lang="css">
    .ivu-form{
        width: 70%;
        margin-left: 60px;
        margin-top: 40px;
    }
</style>
