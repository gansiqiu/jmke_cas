<style>
html,body{
    font-size: 16px;
    margin: 0px;
    padding: 0px;
}
.cas{
    color: white;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-left: 60px;
    background: #2c3e50;
}
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
.ivu-menu-vertical .ivu-menu-item{
    padding: 0;
}
.ivu-menu-vertical div{
    height:50px;
    text-align:center;
    line-height:50px;
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
    <div id="app">
        <div class="cas">
            单点登录管理
        </div>
        <div class="layout">
            <Layout>
                <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                    <Menu :active-name="ur" theme="dark" width="auto" :class="menuitemClasses">
                        <MenuItem name="user">
                            <div v-on:click="userPage">
                                <Icon type="ios-navigate"></Icon>
                                <span>用户</span>
                            </div>
                        </MenuItem>
                        <MenuItem name="roll">
                            <div v-on:click="rollPage">
                                <Icon type="search"></Icon>
                                <span>角色</span>
                            </div>
                        </MenuItem>
                        <MenuItem name="jurisdiction">
                            <div v-on:click="jurisdictionPage">
                                <Icon type="settings"></Icon>
                                <span>权限</span>
                            </div>
                        </MenuItem>
                    </Menu>
                    <div slot="trigger"></div>
                </Sider>
                <Layout>
                    <Header class="layout-header-bar"></Header>
                    <Content :style="{margin: '20px', background: '#fff', minHeight: '780px'}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            isCollapsed: false,
            rr:this.$route.path
        };
    },
    computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            ur: function(){
                if (this.$route.path == "/") {
                    return "user"
                }
                if (this.$route.path == "/user" || this.$route.path == "/user/userCOU") {
                    return "user"
                }
                if (this.$route.path == "/roll" || this.$route.path == "/roll/rollCOU") {
                    return "roll"
                }
                if(this.$route.path == "/jurisdiction" || this.$route.path == "/jurisdiction/jurisdictionCOU"){
                    return "jurisdiction"
                }
            }
    },
    methods:{
        userPage:function(event){
            this.$router.push({name: 'user', replace: true});
        },
        rollPage:function(event){
            this.$router.push({name: 'roll', replace: true});
        },
        jurisdictionPage:function(event){
            this.$router.push({name: 'jurisdiction', replace: true});
        }
    },
    created: function () {
	        this.$router.push('/');
	}
}
</script>
