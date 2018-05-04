<template lang="html">
    <div class="rollCOU">
        <Icol span="24">新建/修改角色</Icol><br>
        <Form :model="formItem" :label-width="180">
            <FormItem label="新建角色名称*">
                <Input type="text" v-model="formItem.roleName" placeholder="请输入..."></Input>
            </FormItem>
            <FormItem  label="设置权限*">
                <Select v-model="formItem.permissionArr" multiple style="width:400px">
                    <Option v-for="item in permissionList" :value="item.id" :key="item.id">{{ item.permissionName }}</Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="submit">提交</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
    name:"rollCOU",
    data () {
        return {
            //
            permissionList: [],
            formItem: {
                roleName:"",
                permissionArr:[]
            },
            // 权限数据
            permissionPostUrl:"/api/permission/getDataByPage",
            permissionPostData:{offset:0,limit:1000}
        }
    },
    methods:{
        submit(){
            console.log(this.formItem.permissionArr,this.formItem.roleName);
        }
    },
    created(){
        // 判断新建还是修改
        if(this.$route.query.id != undefined){
            this.formItem.roleName = this.$route.query.role;
        }
        // 权限数据的初始化
        var that = this;
        axios.get(this.permissionPostUrl, {
　　          params: this.permissionPostData
        })
        .then(function(res){
            that.permissionList = res.data.resultData;
        })
        .catch(function(err){
            that.$Notice.error({title:"请求失败！"});
        });
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
