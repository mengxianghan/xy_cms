(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61a4f8cc"],{"3f02":function(t,a,e){"use strict";var o=e("608c"),n=e.n(o);n.a},"608c":function(t,a,e){},"7f42":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a-layout",{style:{height:"100vh"}},[e("x-sider",{attrs:{collapsed:t.collapsed}}),e("a-layout",[e("a-layout-header",{style:{background:"#fff",position:"sticky",top:0,zIndex:10,padding:0}},[e("div",{staticClass:"layout-header__action",on:{click:function(){return t.collapsed=!t.collapsed}}},[e("a-icon",{attrs:{type:t.collapsed?"menu-unfold":"menu-fold"}})],1),e("div",{staticClass:"layout-header__right"},[e("a-tooltip",{attrs:{placement:"bottom",title:"Github"}},[e("div",{staticClass:"layout-header__action"},[e("a",{attrs:{href:"https://github.com/mengxianghan/xuanyu-cms-front",target:"_blank"}},[e("a-icon",{attrs:{type:"github"}})],1)])]),e("a-dropdown",[e("div",{staticClass:"layout-header__action"},[e("div",{staticClass:"layout-header__user-info"},[e("a-avatar",{attrs:{src:t.logo}}),t._v(" "+t._s(t.fullName)+" ")],1)]),e("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e("a-menu-item",{key:"logout",on:{click:t.handleLogout}},[e("a-icon",{attrs:{type:"logout"}}),t._v(" 退出登录 ")],1)],1)],1)],1)]),e("a-layout-content",[e("div",{staticClass:"layout-content"},[e("keep-alive",[e("router-view")],1)],1)])],1)],1)],1)},n=[],l=e("80a0"),s=e("5880"),c={data:function(){return{collapsed:!1}},computed:Object(l["a"])({},Object(s["mapState"])({logo:function(t){return t.app.logo},fullName:function(t){return t.user.fullName}})),methods:{handleLogout:function(t){var a=this;this.$confirm({title:"注销登录？",onOk:function(){a.$ls.clear();var t=a.$router.resolve({name:"login"}),e=t.href;location.href=e}})}}},i=c,r=(e("3f02"),e("4023")),u=Object(r["a"])(i,o,n,!1,null,"7cad4f3a",null);a["default"]=u.exports}}]);