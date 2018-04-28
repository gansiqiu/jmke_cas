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
    <Form :model="formItem" :label-width="80">
        <FormItem label="用户名*">
            <Input type="email" v-model="formItem.name" placeholder="请输入用户名"></Input>
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
                    name: '',
                    password: '',
                    flag: "0"
                }
            }
        },
        methods:{
            submit(){
                console.log("111111111",this.formItem.name,this.formItem.password,this.formItem.flag);
            }
        },
        created(){
            console.log("created");
        }
    }
</script>
