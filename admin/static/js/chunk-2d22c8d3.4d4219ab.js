(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c8d3"],{f45d:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,"confirm-loading":e.confirmLoading},on:{ok:e.onOk,cancel:e.onCancel},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("a-form",e._b({attrs:{form:e.form}},"a-form",e.formItemLayout,!1),[a("a-form-item",{attrs:{label:"上级栏目"}},[a("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["parent_id",{rules:[{required:!0,message:"请选择上级栏目"}]}],expression:"['parent_id',{rules:[{required:true,message:'请选择上级栏目'}]}]"}],attrs:{"tree-data":e.treeData}})],1),a("a-form-item",{attrs:{label:"栏目名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入栏目名称"}]}],expression:"['name',{rules:[{required:true,message:'请输入栏目名称'}]}]"}]})],1),a("a-form-item",{attrs:{label:"模板"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["template_id",{rules:[{required:!0,message:"请选择模板"}]}],expression:"['template_id',{rules:[{required:true,message:'请选择模板'}]}]"}],attrs:{loading:e.templateLoading}},e._l(e.templateList,(function(t){return a("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1),a("a-form-item",{attrs:{label:"状态"}},[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:"1"}],expression:"['status',{initialValue:'1'}]"}]},[a("a-radio",{attrs:{value:"1"}},[e._v("正常")]),a("a-radio",{attrs:{value:"0"}},[e._v("禁用")])],1)],1),a("a-form-item",{attrs:{label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sort",{initialValue:"99"}],expression:"['sort',{initialValue:'99'}]"}]})],1)],1)],1)},r=[],n=(a("b4fb"),a("b130"),a("053b"),a("90aa"),a("b449"),a("5d83")),s=a("5c62"),o=a("e49c"),l={mixins:[o["default"]],data:function(){return{templateList:[],templateLoading:!1}},computed:{disabledId:function(){return this.$xy.util.getFieldsValue(this.$parent.list,{parentId:this.record.id})},treeData:function(){var e=this;return[{title:"无",value:"0",key:"0"}].concat(Object(s["a"])(this.$xy.util.changeKeys(this.$parent.list,{title:"name",value:"id",key:"id",children:"children",disabled:function(t){return e.disabledId.includes(t.id)}})))}},created:function(){},watch:{visible:function(e){e&&!this.templateList.length&&this.getTemplateList()}},methods:{getTemplateList:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.templateLoading=!0,t.next=3,e.$api.information.template.getList({has_pagination:0,status:1});case 3:a=t.sent,i=a.code,r=a.data.list,e.templateLoading=!1,"200"===i&&(e.templateList=r);case 8:case"end":return t.stop()}}),t)})))()},handleInsert:function(e){var t=this;this.toggleModal(),this.title="新增栏目",this.$nextTick((function(){t.form.setFieldsValue({parent_id:e?e.id:"0"})}))},handleEdit:function(e){var t=this;this.toggleModal(),this.record=e,this.title="编辑栏目",this.$nextTick((function(){t.form.setFieldsValue({parent_id:e.parent_id,name:e.name,template_id:e.template_id,status:e.status,sort:e.sort})}))},handleDelete:function(e){var t=this;this.$api.information.column.delete({id:e.id}).then((function(a){var i=a.code;"200"===i&&(t.$emit("delete",e),t.$emit("complete",e))}))},onOk:function(){var e=this;this.form.validateFieldsAndScroll((function(t,a){t||(e.confirmLoading=!0,e.$api.information.column.submit({id:e.record.id,parent_id:a.parent_id,name:a.name,template_id:a.template_id,status:a.status,sort:a.sort}).then((function(t){var i=t.code;e.confirmLoading=!1,"200"===i&&(e.reset(),e.toggleModal(),e.$emit("ok",a),e.$emit("complete",a))}),(function(t){e.confirmLoading=!1})))}))},onCancel:function(){this.reset(),this.toggleModal(),this.$emit("cancel")}}},d=l,c=a("4023"),u=Object(c["a"])(d,i,r,!1,null,"1eb451be",null);t["default"]=u.exports}}]);