(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea829f22","chunk-2d21db8d"],{"5fe1":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-card",{attrs:{bordered:!1}},[a("div",{directives:[{name:"action",rawName:"v-action:insert",arg:"insert"}],staticClass:"mb-2"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.$refs.editForm.handleInsert()}}},[e._v("新增模板")])],1),a("a-table",{attrs:{columns:e.columns,"data-source":e.list,pagination:e.pagination,loading:e.loading,"row-key":"id",size:"middle"},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"status",fn:function(e){return[a("x-status",{attrs:{code:e}})]}},{key:"operation",fn:function(t,n){return[a("span",{directives:[{name:"action",rawName:"v-action:edit",arg:"edit"}]},[a("a",{on:{click:function(t){return e.$refs.editForm.handleEdit(n)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}})],1),a("span",{directives:[{name:"action",rawName:"v-action:delete",arg:"delete"}]},[a("a-popconfirm",{attrs:{title:"确认删除此数据?"},on:{confirm:function(t){return e.$refs.editForm.handleDelete(n)}}},[a("a",[e._v("删除")])])],1)]}}])})],1),a("edit-form",{ref:"editForm",on:{complete:e.onComplete}})],1)},i=[],o=(a("513c"),a("80a0")),r=a("d308"),s=[{title:"名称",dataIndex:"name"},{title:"页面",dataIndex:"route_component"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],c={name:"index",components:{EditForm:r["default"]},data:function(){return{columns:s,list:[],pagination:{showSizeChanger:!0},loading:!1}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,this.$api.information.template.getList({current_page:this.pagination.current,page_size:this.pagination.pageSize}).then((function(t){var a=t.code,n=t.data,i=n.list,r=n.total;e.loading=!1,"200"===a&&(e.pagination=Object(o["a"])(Object(o["a"])({},e.pagination),{},{total:Number(r)}),e.list=i)})).catch((function(){e.loading=!1}))},handleTableChange:function(e){this.pagination=Object(o["a"])(Object(o["a"])({},this.pagination),{},{current:e.current,pageSize:e.pageSize}),this.getList()},onComplete:function(){this.getList()}}},d=c,l=a("4023"),u=Object(l["a"])(d,n,i,!1,null,"f86277be",null);t["default"]=u.exports},d308:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,"confirm-loading":e.confirmLoading},on:{ok:e.onOk,cancel:e.onCancel},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("a-form",e._b({attrs:{form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入名称"}]}],expression:"['name',{rules:[{required:true,message:'请输入名称'}]}]"}]})],1),a("a-form-item",{attrs:{label:"视图"}},[a("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["menu_id",{rules:[{required:!0,message:"请选择视图"}]}],expression:"['menu_id',{rules:[{required:true,message:'请选择视图'}]}]"}],attrs:{"tree-data":e.menuList,loading:e.menuLoading}})],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:"1"}],expression:"['status',{initialValue:'1'}]"}]},[a("a-radio",{attrs:{value:"1"}},[e._v("正常")]),a("a-radio",{attrs:{value:"0"}},[e._v("禁用")])],1)],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:"99"}],expression:"['sort',{initialValue:'99'}]"}]})],1)],1)],1)},i=[],o=(a("053b"),a("b449"),a("5d83")),r=a("e49c"),s={mixins:[r["default"]],data:function(){return{menuList:[],menuLoading:!1}},created:function(){},watch:{visible:function(e){e&&!this.menuList.length&&this.getMenuList()}},methods:{getMenuList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.menuLoading=!0,t.next=3,e.$api.system.menu.getList({status:"1"});case 3:a=t.sent,n=a.code,i=a.data.list,e.menuLoading=!1,"200"===n&&(e.menuList=e.$xy.util.changeKeys(i));case 8:case"end":return t.stop()}}),t)})))()},handleInsert:function(){this.toggleModal(),this.title="新增模板"},handleEdit:function(e){var t=this;this.toggleModal(),this.record=e,this.title="编辑模板",this.$nextTick((function(){t.form.setFieldsValue({name:e.name,menu_id:e.menu_id,status:e.status,sort:e.sort})}))},handleDelete:function(e){var t=this;this.$api.information.template.delete({id:e.id}).then((function(a){var n=a.code;"200"===n&&(t.$emit("delete",e),t.$emit("complete",e))}))},onOk:function(){var e=this;this.form.validateFieldsAndScroll((function(t,a){t||(e.confirmLoading=!0,e.$api.information.template.submit({id:e.record.id,name:a.name,menu_id:a.menu_id,status:a.status,sort:a.sort}).then((function(t){var n=t.code;e.confirmLoading=!1,"200"===n&&(e.reset(),e.toggleModal(),e.$emit("ok"),e.$emit("complete",a))}),(function(t){e.confirmLoading=!1})))}))},onCancel:function(){this.reset(),this.toggleModal(),this.$emit("cancel")}}},c=s,d=a("4023"),l=Object(d["a"])(c,n,i,!1,null,"65fcb3ba",null);t["default"]=l.exports}}]);