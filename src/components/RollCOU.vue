<template lang="html">
    <div class="rollCOU">
        <Icol span="24">新建/修改角色</Icol><br>
        <Form :model="formItem" :label-width="80">
            <FormItem  label="角色名称*">
                <Select v-model="formItem.rollName" multiple style="width:400px">
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
            cityList: [
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
            formItem: {
                rollName:[]
            }
        }
    },
    methods:{
        submit(){
            console.log("111",this.formItem.rollName);
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
