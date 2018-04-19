<!-- /* <style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        height: 0px;
        background: #fff;
        background: blue;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .menu-item a{
        text-align: center;
        color: white;
        text-decoration: none;
        background: red;
        display: inline-block;
        overflow: hidden;
        width:100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
        margin-right: 10px;
    }
    .collapsed-menu a{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="user" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="user">
                        <router-link :to="'/user'"><Icon type="ios-navigate"></Icon>用户</router-link>
                    </MenuItem>
                    <MenuItem name="search">
                        <router-link :to="'/roll'"><Icon type="search"></Icon>角色</router-link>
                    </MenuItem>
                    <MenuItem name="jurisdiction">
                        <router-link :to="'/jurisdiction'"><Icon type="settings"></Icon>权限</router-link>
                    </MenuItem>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <Header class="layout-header-bar"></Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '220px'}">
                    <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                isCollapsed: false
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script> */ -->
