(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e5eba"],{9717:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,"confirm-loading":e.confirmLoading},on:{ok:e.onOk,cancel:e.onCancel},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("a-form",e._b({attrs:{form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入名称"}]}],expression:"['name',{rules:[{required:true,message:'请输入名称'}]}]"}]})],1),a("a-form-item",{attrs:{label:"Key"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["key",{rules:[{required:!0,message:"请输入Key"}]}],expression:"['key',{rules:[{required:true,message:'请输入Key'}]}]"}]})],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:"1"}],expression:"['status',{initialValue:'1'}]"}]},[a("a-radio",{attrs:{value:"1"}},[e._v("正常")]),a("a-radio",{attrs:{value:"0"}},[e._v("禁用")])],1)],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:"99"}],expression:"['sort',{initialValue:'99'}]"}]})],1)],1)],1)},r=[],o=(a("053b"),a("e49c")),n={mixins:[o["default"]],data:function(){return{}},methods:{handleInsert:function(e){this.toggleModal(),this.title="新增权限按钮"},handleEdit:function(e){var t=this;this.toggleModal(),this.record=e,this.title="编辑权限按钮",this.$nextTick((function(){t.form.setFieldsValue({name:e.name,key:e.key,status:e.status,sort:e.sort})}))},handleDelete:function(e){var t=this;this.$api.system.authButton.delete({id:e.id}).then((function(a){var i=a.code;"200"===i&&(t.$emit("delete",e),t.$emit("complete",e))}))},onOk:function(){var e=this;this.form.validateFieldsAndScroll((function(t,a){t||(e.confirmLoading=!0,e.$api.system.authButton.submit({id:e.record.id,name:a.name,key:a.key,status:a.status,sort:a.sort}).then((function(t){var i=t.code;e.confirmLoading=!1,"200"===i&&(e.reset(),e.toggleModal(),e.$emit("ok",a),e.$emit("complete",a))}),(function(t){e.confirmLoading=!1})))}))},onCancel:function(){this.reset(),this.toggleModal(),this.$emit("cancel")}}},s=n,l=a("4023"),u=Object(l["a"])(s,i,r,!1,null,"cfcd422a",null);t["default"]=u.exports}}]);