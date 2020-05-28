(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d4ae3fc","chunk-2d20e7e9"],{b038:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:t.title,"confirm-loading":t.confirmLoading},on:{ok:t.onOk,cancel:t.onCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("a-form",t._b({attrs:{form:t.form}},"a-form",t.formItemLayout,!1),[a("a-form-item",{attrs:{label:"上级菜单"}},[a("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id",{rules:[{required:!0,message:"请选择上级菜单"}]}],expression:"['parent_id',{rules:[{required:true,message:'请选择上级菜单'}]}]"}],attrs:{"tree-data":t.treeData}})],1),a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入名称"}]}],expression:"['name',{rules:[{required:true,message:'请输入名称'}]}]"}]})],1),a("a-form-item",{attrs:{label:"图标"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["icon"],expression:"['icon']"}]})],1),a("a-form-item",{attrs:{label:"路由地址",extra:"支持外部链接，例：http://www.域名.com"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["route_path"],expression:"['route_path']"}]})],1),a("a-form-item",{attrs:{label:"路由名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["route_name",{rules:[{required:!0,message:"请输入路由名称"}]}],expression:"['route_name',{rules:[{required:true,message:'请输入路由名称'}]}]"}]})],1),a("a-form-item",{attrs:{label:"路由页面"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["route_component"],expression:"['route_component']"}]})],1),a("a-form-item",{attrs:{label:"权限按钮"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["auth_button_id"],expression:"['auth_button_id']"}],attrs:{mode:"multiple"}},t._l(t.authButtonList,(function(e){return a("a-select-option",{key:e.id},[t._v(t._s(e.name))])})),1)],1),a("a-form-item",{attrs:{label:"隐藏菜单"}},[a("a-switch",{directives:[{name:"decorator",rawName:"v-decorator",value:["hidden",{valuePropName:"checked"}],expression:"['hidden',{valuePropName:'checked'}]"}]})],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:"1"}],expression:"['status',{initialValue:'1'}]"}]},[a("a-radio",{attrs:{value:"1"}},[t._v("正常")]),a("a-radio",{attrs:{value:"0"}},[t._v("禁用")])],1)],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:"99"}],expression:"['sort',{initialValue:'99'}]"}]})],1)],1)],1)},r=[],n=(a("b4fb"),a("b130"),a("053b"),a("90aa"),a("b449"),a("5d83")),o=a("5c62"),s=a("e49c"),d=[{label:"框架页",key:"1"}],u={mixins:[s["default"]],data:function(){return{targetList:d,authButtonList:[]}},computed:{disabledId:function(){return this.$xy.util.getFieldsValue(this.$parent.list,{parentId:this.record.id})},treeData:function(){var t=this;return[{title:"无",value:"0",key:"0"}].concat(Object(o["a"])(this.$xy.util.changeKeys(this.$parent.list,{title:"name",value:"id",key:"id",children:"children",disabled:function(e){return t.disabledId.includes(e.id)}})))}},watch:{visible:function(t){t&&this.getAuthButtonList()}},methods:{getAuthButtonList:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.system.authButton.getList({status:"1"});case 2:a=e.sent,i=a.code,r=a.data.list,"200"===i&&(t.authButtonList=r);case 6:case"end":return e.stop()}}),e)})))()},handleInsert:function(t){var e=this;this.toggleModal(),this.title="新增菜单",this.$nextTick((function(){e.form.setFieldsValue({parent_id:t?t.id:"0"})}))},handleCopy:function(t){this.handleEdit(t),this.record={},this.title="复制菜单"},handleEdit:function(t){var e=this;this.toggleModal(),this.record=t,this.title="编辑菜单",this.$nextTick((function(){e.form.setFieldsValue({parent_id:t.parent_id,name:t.name,icon:t.icon,route_path:t.route_path,route_name:t.route_name,route_component:t.route_component,auth_button_id:e.$xy.util.stringToArray(t.auth_button_id),hidden:e.$xy.util.stringToBoolean(t.hidden),status:t.status,sort:t.sort})}))},handleDelete:function(t){var e=this;this.$api.system.menu.delete({id:t.id}).then((function(a){var i=a.code;"200"===i&&(e.$emit("delete",t),e.$emit("complete",t))}))},onOk:function(){var t=this;this.form.validateFieldsAndScroll((function(e,a){e||(t.confirmLoading=!0,t.$api.system.menu.submit({id:t.record.id,parent_id:a.parent_id,name:a.name,icon:a.icon,route_path:a.route_path,route_name:a.route_name,route_component:a.route_component,auth_button_id:t.$xy.util.arrayToString(a.auth_button_id),hidden:t.$xy.util.booleanToString(a.hidden),status:a.status,sort:a.sort}).then((function(e){var i=e.code;t.confirmLoading=!1,"200"===i&&(t.reset(),t.toggleModal(),t.$emit("ok",a),t.$emit("complete",a))}),(function(e){t.confirmLoading=!1})))}))},onCancel:function(){this.reset(),this.toggleModal(),this.$emit("cancel")}}},c=u,l=a("4023"),m=Object(l["a"])(c,i,r,!1,null,"1b2b1113",null);e["default"]=m.exports},f794:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-card",{attrs:{bordered:!1}},[a("div",{directives:[{name:"action",rawName:"v-action:insert",arg:"insert"}],staticClass:"mb-2"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(e){return t.$refs.editForm.handleInsert()}}},[t._v("新增菜单")])],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.list,loading:t.loading,pagination:!1,"row-key":"id",size:"middle"},scopedSlots:t._u([{key:"hidden",fn:function(e){return[a("a-badge",t._b({},"a-badge",t.formatHidden(e),!1))]}},{key:"status",fn:function(t){return[a("x-status",{attrs:{code:t}})]}},{key:"operation",fn:function(e,i){return[a("span",{directives:[{name:"action",rawName:"v-action:insertNext",arg:"insertNext"}]},[a("a",{on:{click:function(e){return t.$refs.editForm.handleInsert(i)}}},[t._v("新增下级")]),a("a-divider",{attrs:{type:"vertical"}})],1),a("span",{directives:[{name:"action",rawName:"v-action:copy",arg:"copy"}]},[a("a",{on:{click:function(e){return t.$refs.editForm.handleCopy(i)}}},[t._v("复制")]),a("a-divider",{attrs:{type:"vertical"}})],1),a("span",{directives:[{name:"action",rawName:"v-action:edit",arg:"edit"}]},[a("a",{on:{click:function(e){return t.$refs.editForm.handleEdit(i)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}})],1),a("span",{directives:[{name:"action",rawName:"v-action:delete",arg:"delete"}]},[a("a-popconfirm",{attrs:{title:"确认删除此数据?"},on:{confirm:function(e){return t.$refs.editForm.handleDelete(i)}}},[a("a",[t._v("删除")])])],1)]}}])})],1),a("edit-form",{ref:"editForm",on:{complete:t.onComplete}})],1)},r=[],n=a("b038"),o=[{title:"名称",dataIndex:"name"},{title:"路由地址",dataIndex:"route_path"},{title:"路由名称",dataIndex:"route_name"},{title:"菜单",dataIndex:"hidden",scopedSlots:{customRender:"hidden"}},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"排序",dataIndex:"sort"},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],s={name:"index",components:{EditForm:n["default"]},data:function(){return{columns:o,list:[],loading:!1}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.loading=!0,this.$api.system.menu.getList().then((function(e){var a=e.code,i=e.data.list;t.loading=!1,"200"===a&&(t.list=i)})).catch((function(){t.loading=!1}))},formatHidden:function(t){return"1"===t?{status:"error",text:"隐藏"}:{status:"processing",text:"显示"}},onComplete:function(){this.getList()}}},d=s,u=a("4023"),c=Object(u["a"])(d,i,r,!1,null,"63c8c5e8",null);e["default"]=c.exports}}]);