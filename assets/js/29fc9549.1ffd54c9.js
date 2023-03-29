"use strict";(self.webpackChunkconcrete_form_doc=self.webpackChunkconcrete_form_doc||[]).push([[368],{1162:function(e,t,o){o.d(t,{Z:function(){return c}});var n=o(7294),r=o(3275),l={code:"code_pOFv",result:"result_CVae",dense:"dense_JxAw",codeHidden:"codeHidden_km2V"};const a="___START___",m="___END___";var c=e=>{let{Component:t,source:o,dense:c=!1,hideCode:i=!1}=e;return o=o.replace(/import React from 'react'/,""),o=o.replace(/export default .*/,""),o=o.trim(),o=o.replace(/\{? ?\/\* ?exclude\-start ?\*\/ ?\}?/g,a),o=o.replace(/\{? ?\/\* ?exclude\-end ?\*\/ ?\}?/g,m),o=o.replace(new RegExp(`${a}[^__]*${m}`,"igm"),""),n.createElement(n.Fragment,null,!i&&n.createElement(r.Z,{className:["language-jsx",l.code].join(" ")},o.trim()),n.createElement("div",{className:["shadow--md",l.result,c?l.dense:"",i?l.codeHidden:""].join(" ")},n.createElement(t,null)))}},4979:function(e,t,o){o.d(t,{F2:function(){return re},cO:function(){return de},oh:function(){return he},ou:function(){return le},S2:function(){return ae},DV:function(){return ve},II:function(){return ne},sR:function(){return be},mE:function(){return ke},Ee:function(){return ue},Ph:function(){return me},gy:function(){return ce},iR:function(){return ie},FX:function(){return ge},Mm:function(){return fe},gx:function(){return pe},Zh:function(){return se}});var n=o(3117),r=o(7294),l=o(1162),a=o(5418),m=o(9179),c=o.n(m);var i=()=>r.createElement(a.Z,null,r.createElement(c(),{name:"demo",placeholder:"I'm an input"})),p=o(2841),s=o.n(p);var d=()=>r.createElement(a.Z,null,r.createElement(s(),{name:"demo",placeholder:"I'm a boring autocomplete field"})),u=o(7886),f=o.n(u);var b=()=>r.createElement(a.Z,null,"date: ",r.createElement(f(),{name:"date",type:"date"}),"time: ",r.createElement(f(),{name:"time",type:"time"}),"datetime: ",r.createElement(f(),{name:"datetime",type:"datetime"})),h=o(5740),g=o.n(h);var k=()=>r.createElement(a.Z,null,r.createElement(g(),{name:"demo"})),v=o(2590),E=o.n(v);var x=()=>r.createElement(a.Z,null,"String options :",r.createElement(E(),{name:"select1",options:["foo","bar","baz","biz"]}),"Multiple select :",r.createElement(E(),{name:"select2",options:["foo","bar","baz","biz"],multiple:!0}),"Labelled options :",r.createElement(E(),{name:"select3",options:[{label:"First option",value:"foo"},"bar",{label:"Third option",value:"baz",props:{disabled:!0}}]}),"Groups (allowEmpty) :",r.createElement(E(),{name:"select4",allowEmpty:!0,options:["foo",{group:"Group 1",options:["bar","baz"]}]}),"Childrens (allowEmpty) :",r.createElement(E(),{name:"select5",allowEmpty:!0},r.createElement("option",{value:"foo"},"Foo"),r.createElement("option",{value:"bar"},"Bar"),r.createElement("option",{value:"baz"},"Baz"))),N=o(9137),y=o.n(N);var C=()=>r.createElement(a.Z,null,r.createElement(y(),{name:"demo",label:r.createElement(r.Fragment,null,"I accept the ",r.createElement("a",{href:"#void"},"terms and conditions"),".")})),F=o(4954),w=o.n(F);var L=()=>r.createElement(a.Z,null,r.createElement(w(),{name:"demo",min:10,max:90,label:"Label of the slider"})),z=o(3363),Z=o.n(z);var D=()=>r.createElement(a.Z,null,r.createElement(Z(),{name:"demo",placeholder:"I'm a textarea"})),S=o(663),I=o.n(S),R=o(7536);var T=()=>{const e=(0,R.cI)({defaultValues:{"disabled-active":!0}});return r.createElement(a.Z,{form:e},r.createElement(I(),{name:"demo",label:"I'm a toggle switch"}),r.createElement(I(),{name:"disabled",disabled:!0,label:"I'm a disabled toggle switch"}),r.createElement(I(),{name:"disabled-active",disabled:!0,label:"I'm a disabled + active toggle switch"}))},G=o(2916),_=o.n(G);var M=()=>r.createElement(a.Z,null,"Vertical :",r.createElement(_(),{name:"demo-vertical",options:["foo","bar","baz"]}),r.createElement("br",null)," Horizontal :",r.createElement(_(),{name:"demo-horizontal",orientation:"horizontal",options:[{label:r.createElement("span",{style:{color:"deeppink"}},"Foo"),value:"foo"},"bar",{label:"baz",value:"baz",props:{disabled:!0}}]})),H=o(9704),B=o.n(H);var P=()=>r.createElement(a.Z,null,"Vertical :",r.createElement(B(),{name:"demo-vertical",options:["foo","bar","baz"]}),r.createElement("br",null)," Horizontal :",r.createElement(B(),{name:"demo-horizontal",orientation:"horizontal",options:[{label:r.createElement("span",{style:{color:"deeppink"}},"Foo"),value:"foo"},"bar",{label:"baz",value:"baz",props:{disabled:!0}}]})),V=o(3235),j=o.n(V);var A=()=>r.createElement(a.Z,{onSubmit:()=>{return e=3e3,new Promise((t=>setTimeout(t,e)));var e}},r.createElement(j(),null,"Submit")),O=o(3891),W=o.n(O);var X=()=>r.createElement(a.Z,null,r.createElement(W(),{label:"Label linked to the control",labelPosition:"left"},r.createElement(c(),{name:"demo-single"})),r.createElement(W(),{label:"Label NOT linked to the controls group",labelPosition:"left"},r.createElement(B(),{name:"demo-group",options:["foo","bar","baz"]})),r.createElement(W(),{label:"Label NOT linked to boolean controls",labelPosition:"left"},r.createElement(y(),{name:"demo-bool",label:"THIS is the real label"})));const $=e=>{let{name:t,control:o,errors:n}=e;return r.createElement("div",{className:"custom-html5-control"},r.createElement("div",{className:"custom-html5-control-control-wrapper"},o),n&&r.createElement("div",{className:"custom-html5-control-errors-wrapper"},n))},U=e=>{let{errors:t}=e;return r.createElement("div",{className:"custom-html5-errors"},t.join(","))},J=e=>{let{label:t,control:o,labelPosition:n="left"}=e;return r.createElement("label",{className:`custom-html5-item-label concreteform-${n}`},r.createElement("div",null,t),r.createElement("div",null,o))},q=e=>{let{items:t}=e;return r.createElement("div",{className:"custom-html5-items-group"},t)},K=e=>{let{label:t,htmlFor:o}=e;return r.createElement("label",{className:"custom-html5-label",htmlFor:o},t)},Q=e=>{let{control:t,label:o}=e;return r.createElement("div",{className:"custom-html5-labelled-control"},r.createElement("div",null,o),r.createElement("div",null,t))};var Y=()=>{const e=(0,R.cI)();return(0,r.useEffect)((()=>{["demo1","demo2"].forEach((t=>{e.setError(t,{type:"custom",message:"Error  message"},{shouldFocus:!1})}))}),[]),r.createElement(a.Z,{form:e,onSubmit:()=>{},layout:{control:$,errors:U,itemLabel:J,itemsGroup:q,label:K,labelledControl:Q}},r.createElement(W(),{label:"Label"},r.createElement(c(),{name:"demo1"})),r.createElement(W(),{label:"Label"},r.createElement(_(),{name:"demo2",options:["Foo","bar",{label:"Baz",value:"Baz",props:{disabled:!0}}]})))};var ee=()=>r.createElement(a.Z,null,r.createElement(B(),{name:"demo",options:["foo","bar","baz"]}));var te=()=>r.createElement(a.Z,null,r.createElement(_(),{name:"demo",options:[{label:"Displayed label",value:"actual-value"},{label:r.createElement("strong",null,"I am bold"),value:"123"},{label:"I am disabled",value:"abc",props:{disabled:!0}}]}));var oe=()=>r.createElement(a.Z,null,r.createElement(E(),{name:"demo",options:["first",{group:"My group",options:["foo",{label:"bar",value:"Bar!"}]},"not-part-of-any-group",{group:"Disabled group",options:["first","second"],props:{disabled:!0}}]}));const ne=e=>r.createElement(l.Z,(0,n.Z)({Component:i,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Input from '@concrete-form/html5/Input'\n\nconst Demo = () => (\n  <Form>\n    <Input name=\"demo\" placeholder=\"I'm an input\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),re=e=>r.createElement(l.Z,(0,n.Z)({Component:d,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Autocomplete from '@concrete-form/html5/Autocomplete'\n\nconst Demo = () => (\n  <Form>\n    <Autocomplete name=\"demo\" placeholder=\"I'm a boring autocomplete field\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),le=e=>r.createElement(l.Z,(0,n.Z)({Component:b,source:'import React from \'react\'\nimport Form from \'@concrete-form/react-hook-form\'\nimport DateTime from \'@concrete-form/html5/DateTime\'\n\nconst Demo = () => (\n  <Form>\n    date: <DateTime name="date" type="date" />\n    time: <DateTime name="time" type="time" />\n    datetime: <DateTime name="datetime" type="datetime" />\n  </Form>\n)\n\nexport default Demo\n'},e)),ae=e=>r.createElement(l.Z,(0,n.Z)({Component:k,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport FileInput from '@concrete-form/html5/FileInput'\n\nconst Demo = () => (\n  <Form>\n    <FileInput name=\"demo\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),me=e=>r.createElement(l.Z,(0,n.Z)({Component:x,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Select from '@concrete-form/html5/Select'\n\nconst Demo = () => (\n  <Form>\n    String options :\n    <Select name=\"select1\" options={['foo', 'bar', 'baz', 'biz']} />\n\n    Multiple select :\n    <Select name=\"select2\" options={['foo', 'bar', 'baz', 'biz']} multiple />\n\n    Labelled options :\n    <Select name=\"select3\" options={[\n      { label: 'First option', value: 'foo' },\n      'bar',\n      { label: 'Third option', value: 'baz', props: { disabled: true } },\n    ]} />\n\n    Groups (allowEmpty) :\n    <Select name=\"select4\" allowEmpty options={[\n      'foo',\n      { group: 'Group 1', options: ['bar', 'baz'] }\n    ]} />\n\n    Childrens (allowEmpty) :\n    <Select name=\"select5\" allowEmpty>\n      <option value=\"foo\">Foo</option>\n      <option value=\"bar\">Bar</option>\n      <option value=\"baz\">Baz</option>\n    </Select>\n  </Form>\n)\n\nexport default Demo\n"},e)),ce=e=>r.createElement(l.Z,(0,n.Z)({Component:C,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport SingleCheckbox from '@concrete-form/html5/SingleCheckbox'\n\nconst Demo = () => (\n  <Form>\n    <SingleCheckbox name=\"demo\" label={(\n      <>I accept the <a href=\"#void\">terms and conditions</a>.</>\n    )} />\n  </Form>\n)\n\nexport default Demo\n"},e)),ie=e=>r.createElement(l.Z,(0,n.Z)({Component:L,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Slider from '@concrete-form/html5/Slider'\n\nconst Demo = () => (\n  <Form>\n    <Slider name=\"demo\" min={10} max={90} label=\"Label of the slider\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),pe=e=>r.createElement(l.Z,(0,n.Z)({Component:D,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Textarea from '@concrete-form/html5/Textarea'\n\nconst Demo = () => (\n  <Form>\n    <Textarea name=\"demo\" placeholder=\"I'm a textarea\" />\n  </Form>\n)\n\nexport default Demo\n"},e)),se=e=>r.createElement(l.Z,(0,n.Z)({Component:T,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport ToggleSwitch from '@concrete-form/html5/ToggleSwitch'\n/* exclude-start */\nimport { useForm } from 'react-hook-form'\n/* exclude-end */\nconst Demo = () => /* exclude-start */ {\n  const form = useForm({defaultValues: { 'disabled-active' : true }})\n  return /* exclude-end */  (\n  <Form /* exclude-start */ form={form} /* exclude-end */>\n    <ToggleSwitch name=\"demo\" label=\"I'm a toggle switch\" />\n    <ToggleSwitch name=\"disabled\" disabled label=\"I'm a disabled toggle switch\" />\n    <ToggleSwitch name=\"disabled-active\" disabled label=\"I'm a disabled + active toggle switch\" />\n  </Form>\n  )\n}\n\nexport default Demo\n"},e)),de=e=>r.createElement(l.Z,(0,n.Z)({Component:M,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport CheckboxGroup from '@concrete-form/html5/CheckboxGroup'\n\nconst Demo = () => (\n  <Form>\n    Vertical :\n    <CheckboxGroup name=\"demo-vertical\" options={['foo', 'bar', 'baz']} />\n\n    <br /> Horizontal :\n    <CheckboxGroup name=\"demo-horizontal\" orientation=\"horizontal\" options={[\n      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },\n      'bar',\n      { label: 'baz', value: 'baz', props: { disabled: true } },\n    ]} />\n  </Form>\n)\n\nexport default Demo\n"},e)),ue=e=>r.createElement(l.Z,(0,n.Z)({Component:P,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport RadioGroup from '@concrete-form/html5/RadioGroup'\n\nconst Demo = () => (\n  <Form>\n    Vertical :\n    <RadioGroup name=\"demo-vertical\" options={['foo', 'bar', 'baz']} />\n\n    <br /> Horizontal :\n    <RadioGroup name=\"demo-horizontal\" orientation=\"horizontal\" options={[\n      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },\n      'bar',\n      { label: 'baz', value: 'baz', props: { disabled: true } },\n    ]} />\n  </Form>\n)\n\nexport default Demo\n"},e)),fe=e=>r.createElement(l.Z,(0,n.Z)({Component:A,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport SubmitButton from '@concrete-form/html5/SubmitButton'\n\nconst wait = delay => new Promise(resolve => setTimeout(resolve, delay))\n\nconst Demo = () => (\n  <Form onSubmit={() => wait(3000)}>\n    <SubmitButton>Submit</SubmitButton>\n  </Form>\n)\n\nexport default Demo\n"},e)),be=e=>r.createElement(l.Z,(0,n.Z)({Component:X,source:'import React from \'react\'\nimport Form from \'@concrete-form/react-hook-form\'\nimport LabelledControl from \'@concrete-form/html5/LabelledControl\'\nimport Input from \'@concrete-form/html5/Input\'\nimport RadioGroup from \'@concrete-form/html5/RadioGroup\'\nimport SingleCheckbox from \'@concrete-form/html5/SingleCheckbox\'\n\nconst Demo = () => (\n  <Form>\n    <LabelledControl label="Label linked to the control" labelPosition="left">\n      <Input name="demo-single" />\n    </LabelledControl>\n\n    <LabelledControl label="Label NOT linked to the controls group" labelPosition="left">\n      <RadioGroup name="demo-group" options={[\'foo\', \'bar\', \'baz\']} />\n    </LabelledControl>\n\n    <LabelledControl label="Label NOT linked to boolean controls" labelPosition="left">\n      <SingleCheckbox name="demo-bool" label="THIS is the real label" />\n    </LabelledControl>\n  </Form>\n)\n\nexport default Demo\n'},e)),he=e=>r.createElement(l.Z,(0,n.Z)({Component:Y,source:"import React, { useEffect } from 'react'\nimport { useForm } from 'react-hook-form'\nimport Form from '@concrete-form/react-hook-form'\nimport LabelledControl from '@concrete-form/html5/LabelledControl'\nimport Input from '@concrete-form/html5/Input'\nimport CheckboxGroup from '@concrete-form/html5/CheckboxGroup'\n\nimport './customLayout.css'\n\nconst ControlLayout = ({ name, control, errors }) => (\n  <div className=\"custom-html5-control\">\n    <div className=\"custom-html5-control-control-wrapper\">\n      { control }\n    </div>\n    { errors && (\n      <div className=\"custom-html5-control-errors-wrapper\">\n        { errors }\n      </div>\n    ) }\n  </div>\n)\n\nconst ErrorLayout = ({ errors }) => {\n  return (\n    <div className=\"custom-html5-errors\">\n      { errors.join(',') }\n    </div>\n  )\n}\n\nconst ItemLabelLayout = ({\n  label,\n  control,\n  labelPosition = 'left',\n}) => {\n  return (\n    <label className={`custom-html5-item-label concreteform-${labelPosition}`}>\n      <div>{ label }</div>\n      <div>{ control }</div>\n    </label>\n  )\n}\n\nconst ItemsGroupLayout = ({\n  items,\n}) => {\n  return (\n    <div className=\"custom-html5-items-group\">\n      { items }\n    </div>\n  )\n}\n\nconst LabelLayout = ({\n  label,\n  htmlFor,\n}) => {\n  return (\n    <label className=\"custom-html5-label\" htmlFor={htmlFor}>\n      { label }\n    </label>\n  )\n}\n\nconst LabelledControlLayout = ({\n  control,\n  label,\n}) => {\n  return (\n    <div className=\"custom-html5-labelled-control\">\n      <div>{ label }</div>\n      <div>{ control }</div>\n    </div>\n  )\n}\n\nconst Demo = () => {\n  const form = useForm()\n\n  useEffect(() => {\n    ['demo1', 'demo2'].forEach(field => {\n      form.setError(field, { type: 'custom', message: 'Error  message' }, { shouldFocus: false })\n    })\n  }, [])\n\n  return (\n    <Form\n      form={form}\n      onSubmit={() => {}}\n      layout={{\n        control: ControlLayout,\n        errors: ErrorLayout,\n        itemLabel: ItemLabelLayout,\n        itemsGroup: ItemsGroupLayout,\n        label: LabelLayout,\n        labelledControl: LabelledControlLayout,\n      }}\n    >\n      <LabelledControl label=\"Label\">\n        <Input name=\"demo1\" />\n        </LabelledControl>\n  \n        <LabelledControl label=\"Label\">\n          <CheckboxGroup name=\"demo2\" options={['Foo', 'bar', { label: 'Baz', value: 'Baz', props: { disabled: true } }]} />\n        </LabelledControl>\n      </Form>\n  )\n}\n\nexport default Demo\n"},e)),ge=e=>r.createElement(l.Z,(0,n.Z)({Component:ee,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport RadioGroup from '@concrete-form/html5/RadioGroup'\n\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n    <RadioGroup name=\"demo\" options={['foo', 'bar', 'baz']} />\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e)),ke=e=>r.createElement(l.Z,(0,n.Z)({Component:te,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport CheckboxGroup from '@concrete-form/html5/CheckboxGroup'\n\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n<CheckboxGroup name=\"demo\" options={[\n  { label: 'Displayed label', value: 'actual-value' },\n  { label: <strong>I am bold</strong>, value: '123'},\n  { label: 'I am disabled', value: 'abc', props: { disabled: true } },\n]} />\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e)),ve=e=>r.createElement(l.Z,(0,n.Z)({Component:oe,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Select from '@concrete-form/html5/Select'\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n\n<Select name=\"demo\" options={[\n  'first',\n  { group: 'My group', options: ['foo', { label: 'bar', value: 'Bar!' }] },\n  'not-part-of-any-group',\n  { group: 'Disabled group', options: ['first', 'second'], props: { disabled: true } },\n]} />\n\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e))},6210:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return m},metadata:function(){return i},toc:function(){return s}});var n=o(3117),r=(o(7294),o(3905)),l=o(8786),a=o(4979);const m={title:"Controls options",hide_title:!0,description:"Control with multiple choices such as Select, Checkbox and Radio in HTML5"},c="HTML5 Controls options",i={unversionedId:"controls/html5/controls-options",id:"controls/html5/controls-options",title:"Controls options",description:"Control with multiple choices such as Select, Checkbox and Radio in HTML5",source:"@site/docs/controls/html5/controls-options.mdx",sourceDirName:"controls/html5",slug:"/controls/html5/controls-options",permalink:"/docs/controls/html5/controls-options",draft:!1,editUrl:"https://github.com/concrete-form/concrete-form-docs/docs/controls/html5/controls-options.mdx",tags:[],version:"current",frontMatter:{title:"Controls options",hide_title:!0,description:"Control with multiple choices such as Select, Checkbox and Radio in HTML5"},sidebar:"docs",previous:{title:"API",permalink:"/docs/controls/html5/api"},next:{title:"Advanced layout customization",permalink:"/docs/controls/html5/advanced-layout-customization"}},p={},s=[{value:"Multiple choices controls",id:"multiple-choices-controls",level:2},{value:"<code>options</code> prop",id:"options-prop",level:2},{value:"String",id:"string",level:3},{value:"Labelled option",id:"labelled-option",level:3},{value:"Group",id:"group",level:3}],d={toc:s},u="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"html5-controls-options"},"HTML5 Controls options"),(0,r.kt)("style",{type:"text/css"}," ",l.Z," "),(0,r.kt)("div",{class:"html5"},(0,r.kt)("h2",{id:"multiple-choices-controls"},"Multiple choices controls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./api#select-"},(0,r.kt)("inlineCode",{parentName:"a"},"<Select />"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./api#checkboxgroup-"},(0,r.kt)("inlineCode",{parentName:"a"},"<CheckboxGroup />"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./api#radiogroup-"},(0,r.kt)("inlineCode",{parentName:"a"},"<RadioGroup />")))),(0,r.kt)("h2",{id:"options-prop"},(0,r.kt)("inlineCode",{parentName:"h2"},"options")," prop"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"options"))," is expected to be an ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," containing items defined below :"),(0,r.kt)("h3",{id:"string"},"String"),(0,r.kt)("p",null,"the ",(0,r.kt)("strong",{parentName:"p"},"key")," and the ",(0,r.kt)("strong",{parentName:"p"},"value")," will share the same ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," value provided."),(0,r.kt)(a.FX,{dense:!0}),(0,r.kt)("p",null,"Will produce :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<input name="demo" type="radio" value="foo"> foo\n<input name="demo" type="radio" value="bar"> bar\n<input name="demo" type="radio" value="baz"> baz\n')),(0,r.kt)("h3",{id:"labelled-option"},"Labelled option"),(0,r.kt)("p",null,"Labelled options are defined as object. They can set their value, their label and some props to forward to the control."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"node")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any React node such as string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The value of the option")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"props"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forwarded to the rendered form control")))),(0,r.kt)(a.mE,{dense:!0}),(0,r.kt)("p",null,"Will produce :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<input name="demo" type="checkbox" value="actual-value"> Displayed label\n<input name="demo" type="checkbox" value="123"> <strong>I am bold</strong>\n<input name="demo" type="checkbox" value="abc" disabled=""> I am disabled\n')),(0,r.kt)("h3",{id:"group"},"Group"),(0,r.kt)("p",null,"A group has a label, holds other options and cannot be selected."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Groups are only supported by ",(0,r.kt)("a",{parentName:"p",href:"./api#select-"},(0,r.kt)("inlineCode",{parentName:"a"},"<Select />")),".",(0,r.kt)("br",null),"\nIn HTML5, ",(0,r.kt)("inlineCode",{parentName:"p"},"<optgroup>")," cannot be nested.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"group"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forwarded to ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup"},(0,r.kt)("inlineCode",{parentName:"a"},"<optgroup>")),"'s ",(0,r.kt)("strong",{parentName:"td"},"label")," prop")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mixed")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mix of strings and labelled options")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"props"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forwarded to ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup"},(0,r.kt)("inlineCode",{parentName:"a"},"<optgroup>")))))),(0,r.kt)(a.DV,{dense:!0}),(0,r.kt)("p",null,"Will produce :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<select name="demo">\n  <option value="first">first</option>\n\n  <optgroup label="My group">\n    <option value="foo">foo</option>\n    <option value="bar">Bar!</option>\n  </optgroup>\n\n  <option value="not-part-of-any-group">not-part-of-any-group</option>\n\n  <optgroup label="Disabled group" disabled="">\n    <option value="first">first</option>\n    <option value="second">second</option>\n  </optgroup>\n</select>\n'))))}f.isMDXComponent=!0},8786:function(e,t){t.Z='/* errors */\n\n.concreteform-control [aria-invalid=true] {\n  border-color: #f00;\n  color: #f00;\n}\n\n.concreteform-control input:not([type=checkbox]):not([type=radio]):not([type=range])[aria-invalid=true]:focus, .concreteform-control textarea[aria-invalid=true]:focus {\n  outline: solid 1px currentcolor;\n}\n\n.concreteform-control-errors {\n  list-style: none;\n  margin: 0;\n  padding: 0.25rem;\n  color: #f00;\n}\n\n/* posititons */\n\n.concreteform-left {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: left;\n}\n\n.concreteform-right {\n  display: flex;\n  flex-direction: row;\n}\n\n.concreteform-top {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.concreteform-bottom {\n  display: flex;\n  flex-direction: column;\n}\n\n/* items group (radio / checkbox items) */\n\n.concreteform-items-group {\n  display: flex;\n}\n\n.concreteform-items-group-horizontal {\n  flex-direction: row;\n}\n\n.concreteform-items-group-vertical {\n  flex-direction: column;\n}\n\n/* labelled input (input is always 60%) */\n\n.concreteform-labelled-control.concreteform-left > *:first-child, .concreteform-labelled-control.concreteform-right > *:first-child {\n  width: 60%;\n}\n.concreteform-labelled-control.concreteform-left > *:last-child, .concreteform-labelled-control.concreteform-right > *:last-child {\n  width: 40%;\n}\n\n/* toggle switch */\n\n.concreteform-toggle-switch {\n\tdisplay: inline-block;\n  position: relative;\n  width: 32px;\n  height: 20px;\n  cursor: pointer;\n  margin: 0 0.3rem;\n}\n\n.concreteform-toggle-switch > input {\n\tposition: absolute;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.concreteform-toggle-switch .concreteform-toggle-switch-slider {\n\twidth: 100%;\n  height: 100%;\n\tbackground: #8f8f9d;\n  border-radius: 20px;\n  transition: .4s;\n}\n\n.concreteform-toggle-switch .concreteform-toggle-switch-slider:before {\n\tcontent: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #fff;\n  transition: .25s;\n  transform: scale(.70);\n}\n\n.concreteform-toggle-switch > input:checked + .concreteform-toggle-switch-slider:before {\n\tleft: 36%;\n}\n\n.concreteform-toggle-switch > input:checked + .concreteform-toggle-switch-slider {\n  background: #0075ff;\n}\n\n@-moz-document url-prefix() {\n  .concreteform-toggle-switch > input:checked + .concreteform-toggle-switch-slider {\n    background: #0060df;\n  }\n}\n\n.concreteform-toggle-switch > input:disabled + .concreteform-toggle-switch-slider {\n  cursor: default;\n  transition: 0s;\n  background: #dfdfdf;\n}\n\n.concreteform-toggle-switch > input:checked:disabled + .concreteform-toggle-switch-slider {\n  background: #bfdcff;\n}\n\n@-moz-document url-prefix() {\n  .concreteform-toggle-switch > input:checked:disabled + .concreteform-toggle-switch-slider {\n    background: #b7d6ff;\n  }\n}'}}]);