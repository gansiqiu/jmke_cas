<template lang="html">
    <div class="rollCOU">
        <Icol span="24">新建/修改角色</Icol><br>
        <Form :model="formItem" :label-width="80">
            <FormItem label="角色名称*">
                <Input v-model="formItem.name" placeholder="请输入角色名称"></Input>
            </FormItem>
            <FormItem label="密码*">
                <Input v-model="formItem.password" placeholder="请输入密码"></Input>
            </FormItem>

            <FormItem label="有效标志*">
                <RadioGroup v-model="formItem.flag">
                    <Radio label="male">Male</Radio>
                    <Radio label="female">Female</Radio>
                </RadioGroup>
            </FormItem>

            <FormItem>
                <Button type="primary">Submit</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
    name:"rollCOU",
    data () {
        return {
            formItem: {
                name: '',
                password: '',
                flag: 'male'
            }
        }
    }
}
</script>

<style lang="css">
</style>
