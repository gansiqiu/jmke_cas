<style lang="css">
    .ivu-form{
        width: 70%;
        margin-left: 60px;
        margin-top: 40px;
    }
</style>
<template>
  <div class="userCOU">
    <Icol span="24">新建/修改用户</Icol><br>
    <Form :model="formItem" :label-width="180">
        <FormItem label="用户名*">
            <Input type="email" v-model="formItem.email" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label="密码*">
            <Input type="password" v-model="formItem.password" placeholder="请输入密码"></Input>
        </FormItem>

        <FormItem label="有效标志*">
            <RadioGroup v-model="formItem.flag">
                <Radio label="0">有效标志0</Radio>
                <Radio label="1">有效标志1</Radio>
            </RadioGroup>
        </FormItem>

        <FormItem  label="角色设置*">
            <Select v-model="formItem.rollName" multiple style="width:400px">
                <Option v-for="item in rollList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>

        <FormItem>
            <Button type="primary" @click="submit" long>提交</Button>
        </FormItem>
    </Form>
  </div>
</template>
<script>
    export default {
        name:"userCOU",
        data () {
            return {
                formItem: {
                    email: '',
                    password: '',
                    flag: "0",
                    rollName:[]
                },
                rollList: [
                    {
                        value: '0',
                        label: '设计师'
                    },
                    {
                        value: '1',
                        label: '管理员'
                    },
                    {
                        value: '2',
                        label: '企业用户'
                    }
                ],
            }
        },
        methods:{
            submit(){
                console.log("111111111",this.formItem.email,this.formItem.password,this.formItem.flag);
            }
        },
        created(){
            console.log("created");
        }
    }
</script>
