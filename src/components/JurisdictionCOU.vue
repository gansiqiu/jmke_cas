<template lang="html">
    <div class="juridictionCOU">
        <Form :model="formItem" :label-width="80">
            <FormItem label="名称*">
                <Input v-model="formItem.name" placeholder="Enter something..."></Input>
            </FormItem>
            <FormItem label="Radio">
                <RadioGroup v-model="formItem.radio">
                    <Radio label="male">Male</Radio>
                    <Radio label="female">Female</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="权限设置*">
                <CheckboxGroup v-model="formItem.jurisdiction">
                    <Checkbox label="权限1"></Checkbox>
                    <Checkbox label="权限2"></Checkbox>
                    <Checkbox label="权限3"></Checkbox>
                    <Checkbox label="权限4"></Checkbox>
                </CheckboxGroup>
            </FormItem>
            <FormItem>
                <Button type="primary">Submit</Button>
            </FormItem>
        </Form>

    </div>
</template>

<script>
export default {
    name:"juridictionCOU",
    data () {
            return {
                formItem: {
                    name: '',
                    radio: 'male',
                    jurisdiction: [],
                }
            }
        }
}
</script>

<style lang="css">
</style>
