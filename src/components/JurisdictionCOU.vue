<template lang="html">
    <div class="juridictionCOU">
        <Icol span="24">新建/修改权限</Icol><br>
        <Form :model="formItem" :label-width="80">
            <FormItem label="角色名称*">
                <RadioGroup v-model="formItem.radio">
                    <Radio label="Stylist">设计师</Radio>
                    <Radio label="Administrator">管理员</Radio>
                    <Radio label="Enterprise">企业用户</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem  label="权限设置*">
                <Select v-model="formItem.jurisdictionName" multiple style="width:400px">
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
    name:"juridictionCOU",
    data () {
        return {
        cityList: [
            {
                value: '0',
                label: '权限1'
            },
            {
                value: '1',
                label: '权限2'
            },
            {
                value: '2',
                label: '权限3'
            }
        ],
            formItem: {
                radio: 'Administrator',
                jurisdictionName:[]
            }
        }
    },
    methods:{
        submit(){
            console.log("11111",this.formItem.radio,this.formItem.jurisdictionName);
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
