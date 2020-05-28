(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22252c"],{cdb7:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-card",{attrs:{bordered:!1,tabList:e.tabList,activeTabKey:e.key},on:{tabChange:e.onTabChange}},[t("a-form",e._b({attrs:{form:e.form}},"a-form",{labelCol:{span:7},wrapperCol:{xs:24,sm:12,md:10}},!1),[t("div",{directives:[{name:"show",rawName:"v-show",value:"basic"==e.key,expression:"key == 'basic'"}]},[t("a-form-item",{attrs:{label:"名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name"],expression:"['name']"}]})],1),t("a-form-item",{attrs:{label:"域名"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["domain_name"],expression:"['domain_name']"}]})],1),t("a-form-item",{attrs:{label:"版权"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["copyright"],expression:"['copyright']"}],attrs:{placeholder:"版权、备案号等"}})],1),t("a-form-item",{attrs:{label:"状态"}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["status"],expression:"['status']"}]},[t("a-radio",{attrs:{value:"1"}},[e._v("正常运行")]),t("a-radio",{attrs:{value:"0"}},[e._v("关闭站点")])],1)],1),t("a-form-item",{attrs:{label:"关闭说明"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["close_explain"],expression:"['close_explain']"}],attrs:{rows:4,placeholder:"关闭站点后，访问网站时的提示信息"}})],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:"seo"==e.key,expression:"key == 'seo'"}]},[t("a-form-item",{attrs:{label:"标题"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title"],expression:"['title']"}],attrs:{placeholder:"一般不超过80个字符"}})],1),t("a-form-item",{attrs:{label:"关键字"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["keywords"],expression:"['keywords']"}],attrs:{placeholder:"一般不超过100个字符"}})],1),t("a-form-item",{attrs:{label:"描述"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description"],expression:"['description']"}],attrs:{rows:4,placeholder:"一般不超过200个字符"}})],1),t("a-form-item",{attrs:{label:"代码"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["script"],expression:"['script']"}],attrs:{rows:8,placeholder:"统计代码、百度商桥、58客服等"}})],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:"upload"==e.key,expression:"key == 'upload'"}]},[t("a-form-item",{attrs:{label:"上传目录"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["upload_dir"],expression:"['upload_dir']"}]})],1),t("a-form-item",{attrs:{label:"允许的文件类型",extra:"* 代表所有文件；也可以使用 jpg|png|gif 方式"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["allowed_file_type"],expression:"['allowed_file_type']"}]})],1),t("a-form-item",{attrs:{label:"允许的文件大小",extra:"1 MB = 1024 KB"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["allowed_file_size"],expression:"['allowed_file_size']"}],attrs:{addonAfter:"MB"}})],1)],1),t("a-form-item",e._b({},"a-form-item",{wrapperCol:{offset:7,xs:24,sm:12,md:10}},!1),[t("a-button",{directives:[{name:"action",rawName:"v-action:save",arg:"save"}],attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e._v("保存 ")])],1)],1)],1)},i=[],o=(t("f3dd"),t("0a51"),t("053b"),t("e49c")),s=[{tab:"基本配置",key:"basic"},{tab:"SEO配置",key:"seo"},{tab:"上传配置",key:"upload"}],l={name:"index",mixins:[o["default"]],data:function(){return{tabList:s,key:"basic",id:"",loading:!1}},created:function(){var e=this.$route.query.tab;e&&(this.key=e),this.getData()},watch:{$route:function(e){e.query.tab&&(this.key=e.query.tab)}},methods:{getData:function(){var e=this;this.$api.system.config.getData().then((function(a){var t=a.code,r=a.data;"200"===t&&(e.form.setFieldsValue({name:r.name,domain_name:r.domain_name,copyright:r.copyright,status:r.status||"1",close_explain:r.close_explain,title:r.title,keywords:r.keywords,description:r.description,script:r.script,upload_dir:r.upload_dir,allowed_file_type:r.allowed_file_type,allowed_file_size:r.allowed_file_size}),e.id=r.id)}))},handleSubmit:function(){var e=this;this.form.validateFieldsAndScroll((function(a,t){a||(e.loading=!0,e.$api.system.config.submit({id:e.id,name:t.name,domain_name:t.domain_name,copyright:t.copyright,status:t.status,close_explain:t.close_explain,title:t.title,keywords:t.keywords,description:t.description,script:t.script,upload_dir:t.upload_dir,allowed_file_type:t.allowed_file_type,allowed_file_size:t.allowed_file_size}).then((function(a){var t=a.code,r=a.data;e.loading=!1,"200"===t&&(r.insert_id&&(e.id=r.insert_id),e.$store.dispatch("config/setConfig"))}),(function(a){e.loading=!1})))}))},onTabChange:function(e){this.$router.push({name:"config",query:{tab:e}})}}},d=l,n=t("4023"),c=Object(n["a"])(d,r,i,!1,null,"c9090736",null);a["default"]=c.exports}}]);