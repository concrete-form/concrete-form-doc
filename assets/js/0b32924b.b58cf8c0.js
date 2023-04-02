"use strict";(self.webpackChunkconcrete_form_doc=self.webpackChunkconcrete_form_doc||[]).push([[269],{1162:function(e,t,o){o.d(t,{Z:function(){return c}});var n=o(7294),r=o(3275),l={code:"code_pOFv",result:"result_CVae",dense:"dense_JxAw",codeHidden:"codeHidden_km2V"};const a="___START___",m="___END___";var c=e=>{let{Component:t,source:o,dense:c=!1,hideCode:i=!1}=e;return o=o.replace(/import React from 'react'/,""),o=o.replace(/export default .*/,""),o=o.trim(),o=o.replace(/\{? ?\/\* ?exclude\-start ?\*\/ ?\}?/g,a),o=o.replace(/\{? ?\/\* ?exclude\-end ?\*\/ ?\}?/g,m),o=o.replace(new RegExp(`${a}[^__]*${m}`,"igm"),""),n.createElement(n.Fragment,null,!i&&n.createElement(r.Z,{className:["language-jsx",l.code].join(" ")},o.trim()),n.createElement("div",{className:["shadow--md",l.result,c?l.dense:"",i?l.codeHidden:""].join(" ")},n.createElement(t,null)))}},9684:function(e,t,o){o.d(t,{f:function(){return a},Z:function(){return l}});var n=o(7294),r=o(5522);var l=e=>{let{children:t}=e;return n.createElement("table",{className:r.Z.table},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:r.Z.nameColumnHeader,style:{minWidth:150}},"Name"),n.createElement("th",{className:r.Z.typeColumnHeader,style:{minWidth:200}},"Type"),n.createElement("th",{className:r.Z.descriptionColumnHeader},"Description"))),n.createElement("tbody",null,t))};var a=e=>{let{name:t,type:o,children:l}=e;return n.createElement("tr",null,n.createElement("td",{className:r.Z.nameColumn},t),n.createElement("td",{className:r.Z.typeColumn},o&&n.createElement("code",null," ",o," ")),n.createElement("td",{className:r.Z.descriptionColumn},l))}},4979:function(e,t,o){o.d(t,{F2:function(){return re},cO:function(){return ue},oh:function(){return he},ou:function(){return le},S2:function(){return ae},DV:function(){return ve},II:function(){return ne},sR:function(){return be},mE:function(){return ke},Ee:function(){return pe},Ph:function(){return me},gy:function(){return ce},iR:function(){return ie},FX:function(){return ge},Mm:function(){return fe},gx:function(){return se},Zh:function(){return de}});var n=o(3117),r=o(7294),l=o(1162),a=o(5418),m=o(9179),c=o.n(m);var i=()=>r.createElement(a.Z,null,r.createElement(c(),{name:"demo",placeholder:"I'm an input"})),s=o(2841),d=o.n(s);var u=()=>r.createElement(a.Z,null,r.createElement(d(),{name:"demo",placeholder:"I'm a boring autocomplete field"})),p=o(7886),f=o.n(p);var b=()=>r.createElement(a.Z,null,"date: ",r.createElement(f(),{name:"date",type:"date"}),"time: ",r.createElement(f(),{name:"time",type:"time"}),"datetime: ",r.createElement(f(),{name:"datetime",type:"datetime"})),h=o(5740),g=o.n(h);var k=()=>r.createElement(a.Z,null,r.createElement(g(),{name:"demo"})),v=o(2590),y=o.n(v);var E=()=>r.createElement(a.Z,null,"String options :",r.createElement(y(),{name:"select1",options:["foo","bar","baz","biz"]}),"Multiple select :",r.createElement(y(),{name:"select2",options:["foo","bar","baz","biz"],multiple:!0}),"Labelled options :",r.createElement(y(),{name:"select3",options:[{label:"First option",value:"foo"},"bar",{label:"Third option",value:"baz",props:{disabled:!0}}]}),"Groups (allowEmpty) :",r.createElement(y(),{name:"select4",allowEmpty:!0,options:["foo",{group:"Group 1",options:["bar","baz"]}]}),"Childrens (allowEmpty) :",r.createElement(y(),{name:"select5",allowEmpty:!0},r.createElement("option",{value:"foo"},"Foo"),r.createElement("option",{value:"bar"},"Bar"),r.createElement("option",{value:"baz"},"Baz"))),x=o(9137),C=o.n(x);var F=()=>r.createElement(a.Z,null,r.createElement(C(),{name:"demo",label:r.createElement(r.Fragment,null,"I accept the ",r.createElement("a",{href:"#void"},"terms and conditions"),".")})),N=o(4954),Z=o.n(N);var z=()=>r.createElement(a.Z,null,r.createElement(Z(),{name:"demo",min:10,max:90,label:"Label of the slider"})),w=o(3363),L=o.n(w);var T=()=>r.createElement(a.Z,null,r.createElement(L(),{name:"demo",placeholder:"I'm a textarea"})),D=o(663),S=o.n(D),I=o(7536);var R=()=>{const e=(0,I.cI)({defaultValues:{"disabled-active":!0}});return r.createElement(a.Z,{form:e},r.createElement(S(),{name:"demo",label:"I'm a toggle switch"}),r.createElement(S(),{name:"disabled",disabled:!0,label:"I'm a disabled toggle switch"}),r.createElement(S(),{name:"disabled-active",disabled:!0,label:"I'm a disabled + active toggle switch"}))},P=o(2916),G=o.n(P);var _=()=>r.createElement(a.Z,null,"Vertical :",r.createElement(G(),{name:"demo-vertical",options:["foo","bar","baz"]}),r.createElement("br",null)," Horizontal :",r.createElement(G(),{name:"demo-horizontal",orientation:"horizontal",options:[{label:r.createElement("span",{style:{color:"deeppink"}},"Foo"),value:"foo"},"bar",{label:"baz",value:"baz",props:{disabled:!0}}]})),H=o(9704),A=o.n(H);var B=()=>r.createElement(a.Z,null,"Vertical :",r.createElement(A(),{name:"demo-vertical",options:["foo","bar","baz"]}),r.createElement("br",null)," Horizontal :",r.createElement(A(),{name:"demo-horizontal",orientation:"horizontal",options:[{label:r.createElement("span",{style:{color:"deeppink"}},"Foo"),value:"foo"},"bar",{label:"baz",value:"baz",props:{disabled:!0}}]})),M=o(3235),V=o.n(M);var j=()=>r.createElement(a.Z,{onSubmit:()=>{return e=3e3,new Promise((t=>setTimeout(t,e)));var e}},r.createElement(V(),null,"Submit")),O=o(3891),q=o.n(O);var J=()=>r.createElement(a.Z,null,r.createElement(q(),{label:"Label linked to the control",labelPosition:"left"},r.createElement(c(),{name:"demo-single"})),r.createElement(q(),{label:"Label NOT linked to the controls group",labelPosition:"left"},r.createElement(A(),{name:"demo-group",options:["foo","bar","baz"]})),r.createElement(q(),{label:"Label NOT linked to boolean controls",labelPosition:"left"},r.createElement(C(),{name:"demo-bool",label:"THIS is the real label"})));const $=e=>{let{name:t,control:o,errors:n}=e;return r.createElement("div",{className:"custom-html5-control"},r.createElement("div",{className:"custom-html5-control-control-wrapper"},o),n&&r.createElement("div",{className:"custom-html5-control-errors-wrapper"},n))},W=e=>{let{errors:t}=e;return r.createElement("div",{className:"custom-html5-errors"},t.join(","))},X=e=>{let{label:t,control:o,labelPosition:n="left"}=e;return r.createElement("label",{className:`custom-html5-item-label concreteform-${n}`},r.createElement("div",null,t),r.createElement("div",null,o))},U=e=>{let{items:t}=e;return r.createElement("div",{className:"custom-html5-items-group"},t)},Y=e=>{let{label:t,htmlFor:o}=e;return r.createElement("label",{className:"custom-html5-label",htmlFor:o},t)},Q=e=>{let{control:t,label:o}=e;return r.createElement("div",{className:"custom-html5-labelled-control"},r.createElement("div",null,o),r.createElement("div",null,t))};var K=()=>{const e=(0,I.cI)();return(0,r.useEffect)((()=>{["demo1","demo2"].forEach((t=>{e.setError(t,{type:"custom",message:"Error  message"},{shouldFocus:!1})}))}),[]),r.createElement(a.Z,{form:e,onSubmit:()=>{},layout:{control:$,errors:W,itemLabel:X,itemsGroup:U,label:Y,labelledControl:Q}},r.createElement(q(),{label:"Label"},r.createElement(c(),{name:"demo1"})),r.createElement(q(),{label:"Label"},r.createElement(G(),{name:"demo2",options:["Foo","bar",{label:"Baz",value:"Baz",props:{disabled:!0}}]})))};var ee=()=>r.createElement(a.Z,null,r.createElement(A(),{name:"demo",options:["foo","bar","baz"]}));var te=()=>r.createElement(a.Z,null,r.createElement(G(),{name:"demo",options:[{label:"Displayed label",value:"actual-value"},{label:r.createElement("strong",null,"I am bold"),value:"123"},{label:"I am disabled",value:"abc",props:{disabled:!0}}]}));var oe=()=>r.createElement(a.Z,null,r.createElement(y(),{name:"demo",options:["first",{group:"My group",options:["foo",{label:"bar",value:"Bar!"}]},"not-part-of-any-group",{group:"Disabled group",options:["first","second"],props:{disabled:!0}}]}));const ne=e=>r.createElement(l.Z,(0,n.Z)({Component:i,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Input from '@concrete-form/html5/Input'\n\nconst Demo = () => (\n  <Form>\n    <Input name=\"demo\" placeholder=\"I'm an input\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),re=e=>r.createElement(l.Z,(0,n.Z)({Component:u,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Autocomplete from '@concrete-form/html5/Autocomplete'\n\nconst Demo = () => (\n  <Form>\n    <Autocomplete name=\"demo\" placeholder=\"I'm a boring autocomplete field\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),le=e=>r.createElement(l.Z,(0,n.Z)({Component:b,source:'import React from \'react\'\nimport Form from \'@concrete-form/react-hook-form\'\nimport DateTime from \'@concrete-form/html5/DateTime\'\n\nconst Demo = () => (\n  <Form>\n    date: <DateTime name="date" type="date" />\n    time: <DateTime name="time" type="time" />\n    datetime: <DateTime name="datetime" type="datetime" />\n  </Form>\n)\n\nexport default Demo\n'},e)),ae=e=>r.createElement(l.Z,(0,n.Z)({Component:k,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport FileInput from '@concrete-form/html5/FileInput'\n\nconst Demo = () => (\n  <Form>\n    <FileInput name=\"demo\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),me=e=>r.createElement(l.Z,(0,n.Z)({Component:E,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Select from '@concrete-form/html5/Select'\n\nconst Demo = () => (\n  <Form>\n    String options :\n    <Select name=\"select1\" options={['foo', 'bar', 'baz', 'biz']} />\n\n    Multiple select :\n    <Select name=\"select2\" options={['foo', 'bar', 'baz', 'biz']} multiple />\n\n    Labelled options :\n    <Select name=\"select3\" options={[\n      { label: 'First option', value: 'foo' },\n      'bar',\n      { label: 'Third option', value: 'baz', props: { disabled: true } },\n    ]} />\n\n    Groups (allowEmpty) :\n    <Select name=\"select4\" allowEmpty options={[\n      'foo',\n      { group: 'Group 1', options: ['bar', 'baz'] }\n    ]} />\n\n    Childrens (allowEmpty) :\n    <Select name=\"select5\" allowEmpty>\n      <option value=\"foo\">Foo</option>\n      <option value=\"bar\">Bar</option>\n      <option value=\"baz\">Baz</option>\n    </Select>\n  </Form>\n)\n\nexport default Demo\n"},e)),ce=e=>r.createElement(l.Z,(0,n.Z)({Component:F,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport SingleCheckbox from '@concrete-form/html5/SingleCheckbox'\n\nconst Demo = () => (\n  <Form>\n    <SingleCheckbox name=\"demo\" label={(\n      <>I accept the <a href=\"#void\">terms and conditions</a>.</>\n    )} />\n  </Form>\n)\n\nexport default Demo\n"},e)),ie=e=>r.createElement(l.Z,(0,n.Z)({Component:z,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Slider from '@concrete-form/html5/Slider'\n\nconst Demo = () => (\n  <Form>\n    <Slider name=\"demo\" min={10} max={90} label=\"Label of the slider\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),se=e=>r.createElement(l.Z,(0,n.Z)({Component:T,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Textarea from '@concrete-form/html5/Textarea'\n\nconst Demo = () => (\n  <Form>\n    <Textarea name=\"demo\" placeholder=\"I'm a textarea\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),de=e=>r.createElement(l.Z,(0,n.Z)({Component:R,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport ToggleSwitch from '@concrete-form/html5/ToggleSwitch'\n/* exclude-start */\nimport { useForm } from 'react-hook-form'\n/* exclude-end */\nconst Demo = () => /* exclude-start */ {\n  const form = useForm({defaultValues: { 'disabled-active' : true }})\n  return /* exclude-end */  (\n  <Form /* exclude-start */ form={form} /* exclude-end */>\n    <ToggleSwitch name=\"demo\" label=\"I'm a toggle switch\" />\n    <ToggleSwitch name=\"disabled\" disabled label=\"I'm a disabled toggle switch\" />\n    <ToggleSwitch name=\"disabled-active\" disabled label=\"I'm a disabled + active toggle switch\" />\n  </Form>\n  )\n}\n\nexport default Demo\n"},e)),ue=e=>r.createElement(l.Z,(0,n.Z)({Component:_,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport CheckboxGroup from '@concrete-form/html5/CheckboxGroup'\n\nconst Demo = () => (\n  <Form>\n    Vertical :\n    <CheckboxGroup name=\"demo-vertical\" options={['foo', 'bar', 'baz']} />\n\n    <br /> Horizontal :\n    <CheckboxGroup name=\"demo-horizontal\" orientation=\"horizontal\" options={[\n      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },\n      'bar',\n      { label: 'baz', value: 'baz', props: { disabled: true } },\n    ]} />\n  </Form>\n)\n\nexport default Demo\n"},e)),pe=e=>r.createElement(l.Z,(0,n.Z)({Component:B,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport RadioGroup from '@concrete-form/html5/RadioGroup'\n\nconst Demo = () => (\n  <Form>\n    Vertical :\n    <RadioGroup name=\"demo-vertical\" options={['foo', 'bar', 'baz']} />\n\n    <br /> Horizontal :\n    <RadioGroup name=\"demo-horizontal\" orientation=\"horizontal\" options={[\n      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },\n      'bar',\n      { label: 'baz', value: 'baz', props: { disabled: true } },\n    ]} />\n  </Form>\n)\n\nexport default Demo\n"},e)),fe=e=>r.createElement(l.Z,(0,n.Z)({Component:j,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport SubmitButton from '@concrete-form/html5/SubmitButton'\n\nconst wait = delay => new Promise(resolve => setTimeout(resolve, delay))\n\nconst Demo = () => (\n  <Form onSubmit={() => wait(3000)}>\n    <SubmitButton>Submit</SubmitButton>\n  </Form>\n)\n\nexport default Demo\n"},e)),be=e=>r.createElement(l.Z,(0,n.Z)({Component:J,source:'import React from \'react\'\nimport Form from \'@concrete-form/react-hook-form\'\nimport LabelledControl from \'@concrete-form/html5/LabelledControl\'\nimport Input from \'@concrete-form/html5/Input\'\nimport RadioGroup from \'@concrete-form/html5/RadioGroup\'\nimport SingleCheckbox from \'@concrete-form/html5/SingleCheckbox\'\n\nconst Demo = () => (\n  <Form>\n    <LabelledControl label="Label linked to the control" labelPosition="left">\n      <Input name="demo-single" />\n    </LabelledControl>\n\n    <LabelledControl label="Label NOT linked to the controls group" labelPosition="left">\n      <RadioGroup name="demo-group" options={[\'foo\', \'bar\', \'baz\']} />\n    </LabelledControl>\n\n    <LabelledControl label="Label NOT linked to boolean controls" labelPosition="left">\n      <SingleCheckbox name="demo-bool" label="THIS is the real label" />\n    </LabelledControl>\n  </Form>\n)\n\nexport default Demo\n'},e)),he=e=>r.createElement(l.Z,(0,n.Z)({Component:K,source:"import React, { useEffect } from 'react'\nimport { useForm } from 'react-hook-form'\nimport Form from '@concrete-form/react-hook-form'\nimport LabelledControl from '@concrete-form/html5/LabelledControl'\nimport Input from '@concrete-form/html5/Input'\nimport CheckboxGroup from '@concrete-form/html5/CheckboxGroup'\n\nimport './customLayout.css'\n\nconst ControlLayout = ({ name, control, errors }) => (\n  <div className=\"custom-html5-control\">\n    <div className=\"custom-html5-control-control-wrapper\">\n      { control }\n    </div>\n    { errors && (\n      <div className=\"custom-html5-control-errors-wrapper\">\n        { errors }\n      </div>\n    ) }\n  </div>\n)\n\nconst ErrorLayout = ({ errors }) => {\n  return (\n    <div className=\"custom-html5-errors\">\n      { errors.join(',') }\n    </div>\n  )\n}\n\nconst ItemLabelLayout = ({\n  label,\n  control,\n  labelPosition = 'left',\n}) => {\n  return (\n    <label className={`custom-html5-item-label concreteform-${labelPosition}`}>\n      <div>{ label }</div>\n      <div>{ control }</div>\n    </label>\n  )\n}\n\nconst ItemsGroupLayout = ({\n  items,\n}) => {\n  return (\n    <div className=\"custom-html5-items-group\">\n      { items }\n    </div>\n  )\n}\n\nconst LabelLayout = ({\n  label,\n  htmlFor,\n}) => {\n  return (\n    <label className=\"custom-html5-label\" htmlFor={htmlFor}>\n      { label }\n    </label>\n  )\n}\n\nconst LabelledControlLayout = ({\n  control,\n  label,\n}) => {\n  return (\n    <div className=\"custom-html5-labelled-control\">\n      <div>{ label }</div>\n      <div>{ control }</div>\n    </div>\n  )\n}\n\nconst Demo = () => {\n  const form = useForm()\n\n  useEffect(() => {\n    ['demo1', 'demo2'].forEach(field => {\n      form.setError(field, { type: 'custom', message: 'Error  message' }, { shouldFocus: false })\n    })\n  }, [])\n\n  return (\n    <Form\n      form={form}\n      onSubmit={() => {}}\n      layout={{\n        control: ControlLayout,\n        errors: ErrorLayout,\n        itemLabel: ItemLabelLayout,\n        itemsGroup: ItemsGroupLayout,\n        label: LabelLayout,\n        labelledControl: LabelledControlLayout,\n      }}\n    >\n      <LabelledControl label=\"Label\">\n        <Input name=\"demo1\" />\n        </LabelledControl>\n  \n        <LabelledControl label=\"Label\">\n          <CheckboxGroup name=\"demo2\" options={['Foo', 'bar', { label: 'Baz', value: 'Baz', props: { disabled: true } }]} />\n        </LabelledControl>\n      </Form>\n  )\n}\n\nexport default Demo\n"},e)),ge=e=>r.createElement(l.Z,(0,n.Z)({Component:ee,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport RadioGroup from '@concrete-form/html5/RadioGroup'\n\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n    <RadioGroup name=\"demo\" options={['foo', 'bar', 'baz']} />\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e)),ke=e=>r.createElement(l.Z,(0,n.Z)({Component:te,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport CheckboxGroup from '@concrete-form/html5/CheckboxGroup'\n\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n<CheckboxGroup name=\"demo\" options={[\n  { label: 'Displayed label', value: 'actual-value' },\n  { label: <strong>I am bold</strong>, value: '123'},\n  { label: 'I am disabled', value: 'abc', props: { disabled: true } },\n]} />\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e)),ve=e=>r.createElement(l.Z,(0,n.Z)({Component:oe,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Select from '@concrete-form/html5/Select'\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n\n<Select name=\"demo\" options={[\n  'first',\n  { group: 'My group', options: ['foo', { label: 'bar', value: 'Bar!' }] },\n  'not-part-of-any-group',\n  { group: 'Disabled group', options: ['first', 'second'], props: { disabled: true } },\n]} />\n\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e))},2198:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var n=o(3117),r=o(7294),l=o(3905),a=o(8786),m=o(4979),c=o(9684);const i={title:"Advanced layout customization",hide_title:!0,description:"Advanced layout customization for HTML5 controls",pagination_next:null},s=void 0,d={unversionedId:"controls/html5/advanced-layout-customization",id:"controls/html5/advanced-layout-customization",title:"Advanced layout customization",description:"Advanced layout customization for HTML5 controls",source:"@site/docs/controls/html5/advanced-layout-customization.mdx",sourceDirName:"controls/html5",slug:"/controls/html5/advanced-layout-customization",permalink:"/docs/controls/html5/advanced-layout-customization",draft:!1,editUrl:"https://github.com/concrete-form/concrete-form-docs/docs/controls/html5/advanced-layout-customization.mdx",tags:[],version:"current",frontMatter:{title:"Advanced layout customization",hide_title:!0,description:"Advanced layout customization for HTML5 controls",pagination_next:null},sidebar:"docs",previous:{title:"Controls options",permalink:"/docs/controls/html5/controls-options"}},u={},p=[{value:"Set custom layout components",id:"set-custom-layout-components",level:2},{value:"Available layout components",id:"available-layout-components",level:2},{value:"Layout components props",id:"layout-components-props",level:2},{value:"control",id:"control",level:3},{value:"errors",id:"errors",level:3},{value:"itemLabel",id:"itemlabel",level:3},{value:"itemGroup",id:"itemgroup",level:3},{value:"label",id:"label",level:3},{value:"labelledControl",id:"labelledcontrol",level:3}],f={toc:p},b="wrapper";function h(e){let{components:t,...o}=e;return(0,l.kt)(b,(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"html5"},(0,l.kt)("h1",{id:"html5-advanced-layout-customization"},"HTML5 Advanced layout customization"),(0,l.kt)("style",{type:"text/css"}," ",a.Z," "),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"For most projects, you ",(0,l.kt)("strong",{parentName:"p"},"DON'T")," need that level of customization. You should use CSS instead.")),(0,l.kt)("h2",{id:"set-custom-layout-components"},"Set custom layout components"),(0,l.kt)("p",null,"Concrete Form allows you to customize every single component used for layout.",(0,l.kt)("br",null),"\nThese components need to be defined at the ",(0,l.kt)("inlineCode",{parentName:"p"},"<Form />")," level like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Form layout={{\n  control: ...,\n  errors: ...,\n  itemLabel: ...,\n  itemsGroup: ...,\n  label: ...,\n  labelledControl: ...,\n}}>\n  Your form content\n</Form>\n")),(0,l.kt)("h2",{id:"available-layout-components"},"Available layout components"),(0,l.kt)(m.oh,{hideCode:!0,dense:!0,mdxType:"CustomLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"layout"),(0,l.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"cl cl-control"},"control")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Renders ",(0,l.kt)("strong",{parentName:"td"},"control")," and ",(0,l.kt)("strong",{parentName:"td"},"errors")," components")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"cl cl-errors"},"errors")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Renders the field errors (to be injected in ",(0,l.kt)("strong",{parentName:"td"},"control"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"cl cl-itemLabel"},"itemLabel")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Renders each item (control + label) in a group (ex: Checkbox or Radio)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"cl cl-itemsGroup"},"itemsGroup")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Renders a group of controls (items)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"cl cl-label"},"label")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Renders a label inside ",(0,l.kt)("inlineCode",{parentName:"td"},"LabelledControl"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("div",{className:"cl cl-labelledControl"},"labelledControl")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Renders a label and a control")))),(0,l.kt)("h2",{id:"layout-components-props"},"Layout components props"),(0,l.kt)("p",null,"Components will receive these props"),(0,l.kt)("h3",{id:"control"},"control"),(0,l.kt)(c.Z,{mdxType:"Props"},(0,l.kt)(c.f,{name:"name",type:"string",mdxType:"Prop"},"name of the control"),(0,l.kt)(c.f,{name:"control",type:"node",mdxType:"Prop"},"Control component"),(0,l.kt)(c.f,{name:"errors",type:"node",mdxType:"Prop"},"Errors component. (result of ",(0,l.kt)("div",{className:"cl cl-errors"},"errors")," layout)")),(0,l.kt)("h3",{id:"errors"},"errors"),(0,l.kt)(c.Z,{mdxType:"Props"},(0,l.kt)(c.f,{name:"name",type:"string",mdxType:"Prop"},"name of the control"),(0,l.kt)(c.f,{name:"errors",type:"string[]",mdxType:"Prop"},"array of translated errors")),(0,l.kt)("h3",{id:"itemlabel"},"itemLabel"),(0,l.kt)(c.Z,{mdxType:"Props"},(0,l.kt)(c.f,{name:"name",type:"string",mdxType:"Prop"},"name of the control"),(0,l.kt)(c.f,{name:"control",type:"node",mdxType:"Prop"},"control element (checkbox, radio, toggle switch, etc)"),(0,l.kt)(c.f,{name:"label",type:"node",mdxType:"Prop"},"label of the control"),(0,l.kt)(c.f,{name:"labelPosition",type:(0,l.kt)(r.Fragment,null,'"top"',(0,l.kt)("br",null),'| "bottom"',(0,l.kt)("br",null),'| "left"',(0,l.kt)("br",null),'| "right"'),mdxType:"Prop"},"position of the label")),(0,l.kt)("h3",{id:"itemgroup"},"itemGroup"),(0,l.kt)(c.Z,{mdxType:"Props"},(0,l.kt)(c.f,{name:"name",type:"string",mdxType:"Prop"},"name of the control"),(0,l.kt)(c.f,{name:"items",type:"node",mdxType:"Prop"},"result of multiple ",(0,l.kt)("div",{className:"cl cl-itemLabel"},"itemLabel"),(0,l.kt)("br",null),(0,l.kt)("strong",null,"Note:")," this is a single node and ",(0,l.kt)("strong",null,"not")," an array"),(0,l.kt)(c.f,{name:"label",type:"node",mdxType:"Prop"},"label of the control"),(0,l.kt)(c.f,{name:"orientation",type:(0,l.kt)(r.Fragment,null,'"vertical" | "horizontal"'),mdxType:"Prop"},"orientation of the items")),(0,l.kt)("h3",{id:"label"},"label"),(0,l.kt)(c.Z,{mdxType:"Props"},(0,l.kt)(c.f,{name:"label",type:"node",mdxType:"Prop"},"label to render"),(0,l.kt)(c.f,{name:"htmlFor",type:"string | undefined",mdxType:"Prop"},'"',(0,l.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/for",target:"_blank"},(0,l.kt)("strong",null,"for")),'" value to provide to the label (',(0,l.kt)("em",null,"if available"),")")),(0,l.kt)("h3",{id:"labelledcontrol"},"labelledControl"),(0,l.kt)(c.Z,{mdxType:"Props"},(0,l.kt)(c.f,{name:"control",type:"node",mdxType:"Prop"},"result of ",(0,l.kt)("div",{className:"cl cl-control"},"control")),(0,l.kt)(c.f,{name:"label",type:"node",mdxType:"Prop"},"result of ",(0,l.kt)("div",{className:"cl cl-label"},"label")),(0,l.kt)(c.f,{name:"labelPosition",type:(0,l.kt)(r.Fragment,null,'"top"',(0,l.kt)("br",null),'| "bottom"',(0,l.kt)("br",null),'| "left"',(0,l.kt)("br",null),'| "right"'),mdxType:"Prop"},"position of the label (relative to the control)"))))}h.isMDXComponent=!0},5522:function(e,t){t.Z={table:"table_wo5S",descriptionColumnHeader:"descriptionColumnHeader_qlGR",iconColumn:"iconColumn_aTGi",nameColumn:"nameColumn_bJoB",typeColumn:"typeColumn_a7Je",requiredColumn:"requiredColumn_VnQV",descriptionColumn:"descriptionColumn_nleC",divider:"divider_VqJi"}},8786:function(e,t){t.Z='/* errors */\n\n.concreteform-control [aria-invalid=true] {\n  border-color: #f00;\n  color: #f00;\n}\n.concreteform-control input:not([type=checkbox]):not([type=radio]):not([type=range])[aria-invalid=true]:focus, .concreteform-control textarea[aria-invalid=true]:focus {\n  outline: solid 1px currentcolor;\n}\n.concreteform-control-errors {\n  list-style: none;\n  margin: 0;\n  padding: 0.25rem;\n  color: #f00;\n}\n\n/* posititons */\n\n.concreteform-left {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: left;\n}\n.concreteform-right {\n  display: flex;\n  flex-direction: row;\n}\n.concreteform-top {\n  display: flex;\n  flex-direction: column-reverse;\n}\n.concreteform-bottom {\n  display: flex;\n  flex-direction: column;\n}\n\n/* items group (radio / checkbox items) */\n\n.concreteform-items-group {\n  display: flex;\n}\n.concreteform-items-group-horizontal {\n  flex-direction: row;\n}\n.concreteform-items-group-vertical {\n  flex-direction: column;\n}\n\n/* labelled input (input is always 60%) */\n\n.concreteform-labelled-control.concreteform-left > *:first-child, .concreteform-labelled-control.concreteform-right > *:first-child {\n  width: 60%;\n}\n.concreteform-labelled-control.concreteform-left > *:last-child, .concreteform-labelled-control.concreteform-right > *:last-child {\n  width: 40%;\n}\n\n/* toggle switch */\n\n.concreteform-toggle-switch {\n\tdisplay: inline-block;\n  position: relative;\n  width: 32px;\n  height: 20px;\n  cursor: pointer;\n  margin: 0 0.3rem;\n}\n.concreteform-toggle-switch > input {\n\tposition: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.concreteform-toggle-switch .concreteform-toggle-switch-slider {\n\twidth: 100%;\n  height: 100%;\n\tbackground: #8f8f9d;\n  border-radius: 20px;\n  transition: .4s;\n}\n.concreteform-toggle-switch .concreteform-toggle-switch-slider:before {\n\tcontent: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #fff;\n  transition: .25s;\n  transform: scale(.70);\n}\n.concreteform-toggle-switch > input:checked + .concreteform-toggle-switch-slider:before {\n\tleft: 36%;\n}\n.concreteform-toggle-switch > input:checked + .concreteform-toggle-switch-slider {\n  background: #0075ff;\n}\n.concreteform-toggle-switch > input:disabled + .concreteform-toggle-switch-slider {\n  cursor: default;\n  transition: 0s;\n  background: #dfdfdf;\n}\n.concreteform-toggle-switch > input:checked:disabled + .concreteform-toggle-switch-slider {\n  background: #bfdcff;\n}\n@-moz-document url-prefix() {\n  .concreteform-toggle-switch > input:checked + .concreteform-toggle-switch-slider {\n    background: #0060df;\n  }\n  .concreteform-toggle-switch > input:checked:disabled + .concreteform-toggle-switch-slider {\n    background: #b7d6ff;\n  }\n}\n'}}]);