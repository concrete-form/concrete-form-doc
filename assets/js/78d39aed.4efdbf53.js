"use strict";(self.webpackChunkconcrete_form_doc=self.webpackChunkconcrete_form_doc||[]).push([[505],{8411:function(e,t,o){o.d(t,{ZP:function(){return l}});var n=o(3117),r=(o(7294),o(3905)),a=o(7849);const i={toc:[]},m="wrapper";function l(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},i,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.fI,{icon:"react.png",name:"formProps",type:"object",mdxType:"Prop"},"Forwarded to ",(0,r.kt)("code",null,"<form {...formProps} />")," element"),(0,r.kt)(a.fI,{icon:"react.png",name:"noValidate",type:"boolean",defaultValue:"true",mdxType:"Prop"},"Shorthand prop for ",(0,r.kt)("code",null,"<form noValidate />")),(0,r.kt)(a.iz,{mdxType:"Divider"}),(0,r.kt)(a.fI,{icon:"cf.png",name:"layout",type:"object",mdxType:"Prop"},"Learn how to ",(0,r.kt)("a",{href:"/docs/controls/html5/advanced-layout-customization"},(0,r.kt)("strong",null,"customize layouts"))," (HTML5 example)"),(0,r.kt)(a.fI,{icon:"cf.png",name:"disableWhileSubmitting",type:"boolean",defaultValue:"true",mdxType:"Prop"},"Disable all the controls when the form is submitting"),(0,r.kt)(a.fI,{icon:"cf.png",name:"language",type:"string",defaultValue:"en",mdxType:"Prop"},"For default translations when no translator is provided"),(0,r.kt)(a.fI,{icon:"cf.png",name:"translator",type:"function",mdxType:"Prop"},"Learn how to ",(0,r.kt)("a",{href:"/docs/translations"},(0,r.kt)("strong",null,"handle translations"))))}l.isMDXComponent=!0},1162:function(e,t,o){o.d(t,{Z:function(){return l}});var n=o(7294),r=o(3275),a={code:"code_pOFv",result:"result_CVae",dense:"dense_JxAw",codeHidden:"codeHidden_km2V"};const i="___START___",m="___END___";var l=e=>{let{Component:t,source:o,dense:l=!1,hideCode:c=!1}=e;return o=o.replace(/import React from 'react'/,""),o=o.replace(/export default .*/,""),o=o.trim(),o=o.replace(/\{? ?\/\* ?exclude\-start ?\*\/ ?\}?/g,i),o=o.replace(/\{? ?\/\* ?exclude\-end ?\*\/ ?\}?/g,m),o=o.replace(new RegExp(`${i}[^__]*${m}`,"igm"),""),n.createElement(n.Fragment,null,!c&&n.createElement(r.Z,{className:["language-jsx",a.code].join(" ")},o.trim()),n.createElement("div",{className:["shadow--md",a.result,l?a.dense:"",c?a.codeHidden:""].join(" ")},n.createElement(t,null)))}},7849:function(e,t,o){o.d(t,{iz:function(){return m},fI:function(){return i},ZP:function(){return a}});var n=o(7294),r=o(5522);var a=e=>{let{children:t}=e;return n.createElement("table",{className:r.Z.table},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:r.Z.iconColumnHeader}),n.createElement("th",{className:r.Z.nameColumnHeader},"Name"),n.createElement("th",{className:r.Z.typeColumnHeader},"Type"),n.createElement("th",{className:r.Z.requiredColumnHeader},"Required"),n.createElement("th",{className:r.Z.defaultColumnHeader},"Default"),n.createElement("th",{className:r.Z.descriptionColumnHeader},"Description"))),n.createElement("tbody",null,t))};var i=e=>{let{icon:t,name:o,type:a,defaultValue:i,required:m=!1,children:l}=e;return n.createElement("tr",null,n.createElement("td",{className:r.Z.iconColumn},t&&n.createElement("img",{src:`/img/icons/${t}`})),n.createElement("td",{className:r.Z.nameColumn},o),n.createElement("td",{className:r.Z.typeColumn},a&&n.createElement("code",null," ",a," ")),n.createElement("td",{className:r.Z.requiredColumn},m&&n.createElement("img",{src:"/img/icons/required.png"})),n.createElement("td",{className:r.Z.defaultColumn},i&&n.createElement("code",null," ",i," ")),n.createElement("td",{className:r.Z.descriptionColumn},l))};var m=()=>n.createElement("tr",{className:r.Z.divider},n.createElement("td",{colSpan:"6"}))},1337:function(e,t,o){o.d(t,{ZP:function(){return m}});var n=o(3117),r=(o(7294),o(3905));const a={toc:[]},i="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(i,(0,n.Z)({},a,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ci.appveyor.com/project/kegi/formik/history"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/appveyor/build/kegi/formik?style=flat-square",alt:null}))," ",(0,r.kt)("a",{parentName:"p",href:"https://coveralls.io/github/concrete-form/formik"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/coveralls/github/concrete-form/formik?style=flat-square",alt:null}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Github repo:")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/concrete-form/formik"},"https://github.com/concrete-form/formik")))}m.isMDXComponent=!0},6066:function(e,t,o){o.r(t),o.d(t,{assets:function(){return N},contentTitle:function(){return C},default:function(){return E},frontMatter:function(){return y},metadata:function(){return v},toc:function(){return b}});var n=o(3117),r=o(7294),a=o(3905),i=o(1337),m=o(8786),l=o(7849),c=o(8411),s=o(1162),d=o(7514),p=o(9179),u=o.n(p),f=o(3235),k=o.n(f);var h=()=>r.createElement(d.Z,{initialValues:{firstName:"John"},onSubmit:e=>(alert(JSON.stringify(e,void 0,2)),!0)},r.createElement(u(),{name:"firstName",placeholder:"What's your first name ?"}),r.createElement(k(),null,"submit"));const g=()=>r.createElement(s.Z,{Component:h,source:"import React from 'react'\nimport Form from '@concrete-form/formik'\nimport Input from '@concrete-form/html5/Input'\nimport SubmitButton from '@concrete-form/html5/SubmitButton'\n\nconst Demo = () => {\n  const onSubmit = data => { alert(JSON.stringify(data, undefined, 2)); return true }\n\n  return (\n    <Form initialValues={{ firstName: 'John' }} onSubmit={onSubmit}>\n      <Input name=\"firstName\" placeholder=\"What's your first name ?\" />\n      <SubmitButton>submit</SubmitButton>\n    </Form>\n  )\n}\n\nexport default Demo\n"}),y={title:"API",hide_title:!0,description:"Formik API for Concrete Form",pagination_prev:"form/formik/intro",pagination_next:null},C=void 0,v={unversionedId:"form/formik/api",id:"form/formik/api",title:"API",description:"Formik API for Concrete Form",source:"@site/docs/form/formik/api.mdx",sourceDirName:"form/formik",slug:"/form/formik/api",permalink:"/docs/form/formik/api",draft:!1,editUrl:"https://github.com/concrete-form/concrete-form-docs/docs/form/formik/api.mdx",tags:[],version:"current",frontMatter:{title:"API",hide_title:!0,description:"Formik API for Concrete Form",pagination_prev:"form/formik/intro",pagination_next:null},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/form/formik/intro"}},N={},b=[{value:"<code>&lt;Form /&gt;</code>",id:"form-",level:2},{value:"Props",id:"props",level:3},{value:"Examples",id:"examples",level:3},{value:"Formik context",id:"formik-context",level:3},{value:"Custom field properties",id:"custom-field-properties",level:2},{value:"Validation",id:"validation",level:2}],x={toc:b},_="wrapper";function E(e){let{components:t,...o}=e;return(0,a.kt)(_,(0,n.Z)({},x,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("style",{type:"text/css"}," ",m.Z," "),(0,a.kt)("h1",{id:"formik---api"},"Formik - API"),(0,a.kt)(i.ZP,{mdxType:"Header"}),(0,a.kt)("h2",{id:"form-"},(0,a.kt)("inlineCode",{parentName:"h2"},"<Form />")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"<Form />")," renders a ",(0,a.kt)("inlineCode",{parentName:"p"},"<form>")," HTML element and creates a context for the controls. All controls rendered inside this component will be registered automatically with ",(0,a.kt)("inlineCode",{parentName:"p"},"Formik"),".")),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(l.ZP,{mdxType:"Props"},(0,a.kt)(l.fI,{icon:"formik.png",name:"initialValues",type:"object",required:!0,mdxType:"Prop"},"Forwarded to ",(0,a.kt)("a",{href:"https://formik.org/docs/api/formik#initialvalues-values",target:"_blank"},(0,a.kt)("code",null,"<Formik />"))),(0,a.kt)(l.fI,{icon:"formik.png",name:"onSubmit",type:"function",mdxType:"Prop"},"Forwarded to ",(0,a.kt)("a",{href:"https://formik.org/docs/api/formik#onsubmit-values-values-formikbag-formikbag--void--promiseany",target:"_blank"},(0,a.kt)("code",null,"<Formik />"))),(0,a.kt)(l.fI,{icon:"formik.png",name:"formikProps",type:"object",mdxType:"Prop"},"Forwarded to ",(0,a.kt)("a",{href:"https://formik.org/docs/api/formik",target:"_blank"},(0,a.kt)("code",null,"<Formik {...formikProps} />"))),(0,a.kt)(l.iz,{mdxType:"Divider"}),(0,a.kt)(c.ZP,{mdxType:"CommonFormProps"})),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)(g,null),(0,a.kt)("h3",{id:"formik-context"},"Formik context"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Formik")," Context is automatically exposed so it's possible to use ",(0,a.kt)("a",{parentName:"p",href:"https://formik.org/docs/api/useFormikContext"},(0,a.kt)("inlineCode",{parentName:"a"},"useFormikContext()"))," normally inside ",(0,a.kt)("inlineCode",{parentName:"p"},"<Form />"),"."),(0,a.kt)("h2",{id:"custom-field-properties"},"Custom field properties"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"fieldProps")," has no effect when using ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Formik")),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Radios"),", ",(0,a.kt)("strong",{parentName:"p"},"Checkboxes")," and ",(0,a.kt)("strong",{parentName:"p"},"Select")," are handled out of the box! for that reason, ",(0,a.kt)("inlineCode",{parentName:"p"},"fieldProps")," is not needed.")),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://formik.org/docs/guides/validation"},"https://formik.org/docs/guides/validation")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"field level validation is not yet supported by ",(0,a.kt)("inlineCode",{parentName:"p"},"Concrete Form")," controls. Use ",(0,a.kt)("a",{parentName:"p",href:"https://formik.org/docs/guides/validation#validationschema"},"Schema Validation"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Learn how to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/translations"},"handle translations")))))}E.isMDXComponent=!0},5522:function(e,t){t.Z={table:"table_wo5S",descriptionColumnHeader:"descriptionColumnHeader_qlGR",iconColumn:"iconColumn_aTGi",nameColumn:"nameColumn_bJoB",typeColumn:"typeColumn_a7Je",requiredColumn:"requiredColumn_VnQV",descriptionColumn:"descriptionColumn_nleC",divider:"divider_VqJi"}}}]);