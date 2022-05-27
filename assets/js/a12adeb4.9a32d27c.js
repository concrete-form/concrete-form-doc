"use strict";(self.webpackChunkconcrete_form_doc=self.webpackChunkconcrete_form_doc||[]).push([[291],{1162:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(7294),r=n(9869),a={code:"code_z8-u",result:"result_qARp",dense:"dense_ubyi",codeHidden:"codeHidden_4Sgj"},l="___START___",m="___END___",i=function(e){var t=e.Component,n=e.source,i=e.dense,c=void 0!==i&&i,u=e.hideCode,p=void 0!==u&&u;return n=(n=(n=(n=(n=(n=n.replace(/import React from 'react'/,"")).replace(/export default .*/,"")).trim()).replace(/\{? ?\/\* ?exclude\-start ?\*\/ ?\}?/g,l)).replace(/\{? ?\/\* ?exclude\-end ?\*\/ ?\}?/g,m)).replace(new RegExp("___START___[^__]*___END___","igm"),""),o.createElement(o.Fragment,null,!p&&o.createElement(r.Z,{className:["language-jsx",a.code].join(" ")},n.trim()),o.createElement("div",{className:["shadow--md",a.result,c?a.dense:"",p?a.codeHidden:""].join(" ")},o.createElement(t,null)))}},3695:function(e,t,n){n.d(t,{F2:function(){return te},Bb:function(){return $},Am:function(){return ce},oh:function(){return de},ou:function(){return ne},S2:function(){return oe},DV:function(){return he},II:function(){return ee},sR:function(){return se},mE:function(){return be},QE:function(){return ue},Ph:function(){return re},gy:function(){return ae},iR:function(){return le},FX:function(){return fe},Mm:function(){return pe},gx:function(){return me},Zh:function(){return ie}});var o=n(3117),r=n(7294),a=n(1162),l=n(5418),m=n(5972),i=n.n(m),c=n(1587),u=function(){return r.createElement(l.Z,{onSubmit:function(e){return alert(e.name)}},r.createElement(i(),{name:"name",label:"Enter your name",margin:"normal"}),r.createElement(c.Z,{fullWidth:!0},"Submit"))},p=function(){return r.createElement(l.Z,null,r.createElement(i(),{name:"demo",label:"I'm an input"}))},s=n(9635),d=function(){return r.createElement(l.Z,null,r.createElement(s.Z,{name:"demo",options:["foo","bar","baz"],textFieldProps:{label:"I'm an autocomplete field"}}))},f=n(720),b=n(7087),h=n(1738),k=function(){return r.createElement(l.Z,null,r.createElement(f._,{dateAdapter:b.Z},"date: ",r.createElement(h.Z,{name:"date",type:"date"}),"time: ",r.createElement(h.Z,{name:"time",type:"time"}),"datetime: ",r.createElement(h.Z,{name:"datetime",type:"datetime"})))},v=n(78),g=function(){return r.createElement(l.Z,null,r.createElement(v.Z,{name:"demo"}))},N=n(4984),E=function(){return r.createElement(l.Z,null,"Single select :",r.createElement(N.Z,{name:"select1",options:["foo","bar","baz","biz"]}),"Multiple select :",r.createElement(N.Z,{name:"select2",options:["foo","bar","baz","biz"],multiple:!0}),"Native select :",r.createElement(N.Z,{name:"select3",native:!0,options:[{label:"First option",value:"foo"},"bar",{label:"Third option",value:"baz",props:{disabled:!0}}]}),"Groups (allowEmpty) :",r.createElement(N.Z,{name:"select4",allowEmpty:!0,options:["foo",{group:"Group 1",options:["bar","baz"]}]}),"Childrens (native + allowEmpty) :",r.createElement(N.Z,{name:"select5",native:!0,allowEmpty:!0},r.createElement("option",{value:"foo"},"Foo"),r.createElement("option",{value:"bar"},"Bar"),r.createElement("option",{value:"baz"},"Baz")))},C=n(5202),F=function(){return r.createElement(l.Z,null,r.createElement(C.Z,{name:"demo",label:r.createElement(r.Fragment,null,"I accept the ",r.createElement("a",{href:"#void"},"terms and conditions"),".")}))},Z=n(4546),x=function(){return r.createElement(l.Z,null,r.createElement(Z.Z,{name:"demo",min:10,max:90,label:"Label of the slider"}))},y=n(5495),z=function(){return r.createElement(l.Z,null,r.createElement(y.Z,{name:"demo",label:"I'm a textarea"}))},L=n(8627),S=function(){return r.createElement(l.Z,null,r.createElement(L.Z,{name:"demo",label:"I'm a toggle switch"}))},D=n(2651),I=function(){return r.createElement(l.Z,null,"Vertical :",r.createElement(D.Z,{name:"demo-vertical",options:["foo","bar","baz"]}),r.createElement("br",null)," Horizontal :",r.createElement(D.Z,{name:"demo-horizontal",orientation:"horizontal",options:[{label:r.createElement("span",{style:{color:"deeppink"}},"Foo"),value:"foo"},"bar",{label:"baz",value:"baz",props:{disabled:!0}}]}))},w=n(2024),G=function(){return r.createElement(l.Z,null,"Vertical :",r.createElement(w.Z,{name:"demo-vertical",options:["foo","bar","baz"]}),r.createElement("br",null)," Horizontal :",r.createElement(w.Z,{name:"demo-horizontal",orientation:"horizontal",options:[{label:r.createElement("span",{style:{color:"deeppink"}},"Foo"),value:"foo"},"bar",{label:"baz",value:"baz",props:{disabled:!0}}]}))},R=function(){return r.createElement(l.Z,{onSubmit:function(){return e=3e3,new Promise((function(t){return setTimeout(t,e)}));var e}},r.createElement(c.Z,null,"Submit"))},_=n(9092),T=function(){return r.createElement(l.Z,null,r.createElement(_.Z,{label:"Label linked to the control"},r.createElement(i(),{name:"demo-single"})),r.createElement(_.Z,{label:"Label NOT linked to the controls group"},r.createElement(w.Z,{name:"demo-group",options:["foo","bar","baz"]})),r.createElement(_.Z,{label:"Label NOT linked to boolean controls"},r.createElement(C.Z,{name:"demo-bool",label:"THIS is the real label"})))},M=n(7536),A=n(6396),B=n(847),P=n(785),H=n(476),U=n(8263),j=function(e){e.name;var t=e.control,n=e.errors;return r.createElement(A.Z,{fullWidth:!0,error:!!n,className:"custom-mui-control"},r.createElement("div",{className:"custom-mui-control-control-wrapper"},t),n&&r.createElement("div",{className:"custom-mui-control-errors-wrapper"},n))},V=function(e){var t=e.errors;return r.createElement("div",{className:"custom-mui-errors"},t.join(","))},W=function(e){var t=e.label,n=e.control;e.labelPosition;return r.createElement(B.Z,{control:n,label:t,className:"custom-mui-item-label"})},O=function(e){var t=e.items;return r.createElement(P.Z,{className:"custom-mui-items-group"},t)},X=function(e){var t=e.label,n=e.htmlFor;return r.createElement(H.Z,{className:"custom-mui-label",htmlFor:n},t)},q=function(e){var t=e.control,n=e.label;return r.createElement(U.ZP,{container:!0,className:"custom-mui-labelled-control"},r.createElement(U.ZP,{item:!0,xs:12,sm:6},n),r.createElement(U.ZP,{item:!0,xs:12,sm:6},t))},Q=function(){var e=(0,M.cI)();return(0,r.useEffect)((function(){["demo1","demo2"].forEach((function(t){e.setError(t,{type:"custom",message:"Error  message"},{shouldFocus:!1})}))})),r.createElement(l.Z,{form:e,onSubmit:function(){},layout:{control:j,errors:V,itemLabel:W,itemsGroup:O,label:X,labelledControl:q}},r.createElement(_.Z,{label:"Label"},r.createElement(i(),{name:"demo1"})),r.createElement(_.Z,{label:"Label"},r.createElement(D.Z,{name:"demo2",options:["Foo","bar",{label:"Baz",value:"Baz",props:{disabled:!0}}]})))},J=function(){return r.createElement(l.Z,null,r.createElement(w.Z,{name:"demo",options:["foo","bar","baz"]}))},K=function(){return r.createElement(l.Z,null,r.createElement(D.Z,{name:"demo",options:[{label:"Displayed label",value:"actual-value"},{label:r.createElement("strong",null,"I am bold"),value:"123"},{label:"I am disabled",value:"abc",props:{disabled:!0}}]}))},Y=function(){return r.createElement(l.Z,null,r.createElement(N.Z,{name:"demo",options:["first",{group:"My group",options:["foo",{label:"bar",value:"Bar!"}]},"not-part-of-any-group",{group:"Primary group",options:["first","second"],props:{color:"primary"}}]}))},$=function(e){return r.createElement(a.Z,(0,o.Z)({Component:u,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Input from '@concrete-form/mui/Input'\nimport SubmitButton from '@concrete-form/mui/SubmitButton'\n\nconst Demo = () => (\n  <Form onSubmit={data => alert(data.name)}>\n    <Input name=\"name\" label=\"Enter your name\" margin=\"normal\" />\n    <SubmitButton fullWidth>Submit</SubmitButton>\n  </Form>\n)\n\nexport default Demo\n"},e))},ee=function(e){return r.createElement(a.Z,(0,o.Z)({Component:p,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Input from '@concrete-form/mui/Input'\n\nconst Demo = () => (\n  <Form>\n    <Input name=\"demo\" label=\"I'm an input\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},te=function(e){return r.createElement(a.Z,(0,o.Z)({Component:d,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Autocomplete from '@concrete-form/mui/Autocomplete'\n\nconst Demo = () => (\n  <Form>\n    <Autocomplete\n      name=\"demo\"\n      options={[ 'foo', 'bar', 'baz' ]}\n      textFieldProps={{ label: 'I\\'m an autocomplete field' }}\n    />\n  </Form>\n)\n\nexport default Demo\n"},e))},ne=function(e){return r.createElement(a.Z,(0,o.Z)({Component:k,source:'/*exclude-start*/\nimport React from \'react\'\nimport { LocalizationProvider } from \'@mui/lab/\'\nimport AdapterDateFns from \'@mui/lab/AdapterDateFns\'\n/*exclude-end*/\nimport Form from \'@concrete-form/react-hook-form\'\nimport DateTime from \'@concrete-form/mui/DateTime\'\n\nconst Demo = () => (\n  <Form>{ /*exclude-start*/ }<LocalizationProvider dateAdapter={AdapterDateFns}>{ /*exclude-end*/ }\n    date: <DateTime name="date" type="date" />\n    time: <DateTime name="time" type="time" />\n    datetime: <DateTime name="datetime" type="datetime" />\n  { /*exclude-start*/ }</LocalizationProvider>{ /*exclude-end*/ }</Form>\n)\n\nexport default Demo\n'},e))},oe=function(e){return r.createElement(a.Z,(0,o.Z)({Component:g,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport FileInput from '@concrete-form/mui/FileInput'\n\nconst Demo = () => (\n  <Form>\n    <FileInput name=\"demo\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},re=function(e){return r.createElement(a.Z,(0,o.Z)({Component:E,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Select from '@concrete-form/mui/Select'\n\nconst Demo = () => (\n  <Form>\n    Single select :\n    <Select name=\"select1\" options={['foo', 'bar', 'baz', 'biz']} />\n\n    Multiple select :\n    <Select name=\"select2\" options={['foo', 'bar', 'baz', 'biz']} multiple />\n\n    Native select :\n    <Select name=\"select3\" native options={[\n      { label: 'First option', value: 'foo' },\n      'bar',\n      { label: 'Third option', value: 'baz', props: { disabled: true } },\n    ]} />\n\n    Groups (allowEmpty) :\n    <Select name=\"select4\" allowEmpty options={[\n      'foo',\n      { group: 'Group 1', options: ['bar', 'baz'] }\n    ]} />\n\n    Childrens (native + allowEmpty) :\n    <Select name=\"select5\" native allowEmpty>\n      <option value=\"foo\">Foo</option>\n      <option value=\"bar\">Bar</option>\n      <option value=\"baz\">Baz</option>\n    </Select>\n  </Form>\n)\n\nexport default Demo\n"},e))},ae=function(e){return r.createElement(a.Z,(0,o.Z)({Component:F,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport SingleCheckbox from '@concrete-form/mui/SingleCheckbox'\n\nconst Demo = () => (\n  <Form>\n    <SingleCheckbox name=\"demo\" label={(\n      <>I accept the <a href=\"#void\">terms and conditions</a>.</>\n    )} />\n  </Form>\n)\n\nexport default Demo\n"},e))},le=function(e){return r.createElement(a.Z,(0,o.Z)({Component:x,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Slider from '@concrete-form/mui/Slider'\n\nconst Demo = () => (\n  <Form>\n    <Slider name=\"demo\" min={10} max={90} label=\"Label of the slider\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},me=function(e){return r.createElement(a.Z,(0,o.Z)({Component:z,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Textarea from '@concrete-form/mui/Textarea'\n\nconst Demo = () => (\n  <Form>\n    <Textarea name=\"demo\" label=\"I'm a textarea\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},ie=function(e){return r.createElement(a.Z,(0,o.Z)({Component:S,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport ToggleSwitch from '@concrete-form/mui/ToggleSwitch'\n\nconst Demo = () => (\n  <Form>\n    <ToggleSwitch name=\"demo\" label=\"I'm a toggle switch\" />\n  </Form>\n)\n\nexport default Demo\n"},e))},ce=function(e){return r.createElement(a.Z,(0,o.Z)({Component:I,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport CheckboxesGroup from '@concrete-form/mui/CheckboxesGroup'\n\nconst Demo = () => (\n  <Form>\n    Vertical :\n    <CheckboxesGroup name=\"demo-vertical\" options={['foo', 'bar', 'baz']} />\n\n    <br /> Horizontal :\n    <CheckboxesGroup name=\"demo-horizontal\" orientation=\"horizontal\" options={[\n      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },\n      'bar',\n      { label: 'baz', value: 'baz', props: { disabled: true } },\n    ]} />\n  </Form>\n)\n\nexport default Demo\n"},e))},ue=function(e){return r.createElement(a.Z,(0,o.Z)({Component:G,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport RadiosGroup from '@concrete-form/mui/RadiosGroup'\n\nconst Demo = () => (\n  <Form>\n    Vertical :\n    <RadiosGroup name=\"demo-vertical\" options={['foo', 'bar', 'baz']} />\n\n    <br /> Horizontal :\n    <RadiosGroup name=\"demo-horizontal\" orientation=\"horizontal\" options={[\n      { label: <span style={{ color: 'deeppink' }}>Foo</span>, value: 'foo' },\n      'bar',\n      { label: 'baz', value: 'baz', props: { disabled: true } },\n    ]} />\n  </Form>\n)\n\nexport default Demo\n"},e))},pe=function(e){return r.createElement(a.Z,(0,o.Z)({Component:R,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport SubmitButton from '@concrete-form/mui/SubmitButton'\n\nconst wait = delay => new Promise(resolve => setTimeout(resolve, delay))\n\nconst Demo = () => (\n  <Form onSubmit={() => wait(3000)}>\n    <SubmitButton>Submit</SubmitButton>\n  </Form>\n)\n\nexport default Demo\n"},e))},se=function(e){return r.createElement(a.Z,(0,o.Z)({Component:T,source:"import React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport LabelledControl from '@concrete-form/mui/LabelledControl'\nimport Input from '@concrete-form/mui/Input'\nimport RadiosGroup from '@concrete-form/mui/RadiosGroup'\nimport SingleCheckbox from '@concrete-form/mui/SingleCheckbox'\n\nconst Demo = () => (\n  <Form>\n    <LabelledControl label=\"Label linked to the control\">\n      <Input name=\"demo-single\" />\n    </LabelledControl>\n\n    <LabelledControl label=\"Label NOT linked to the controls group\">\n      <RadiosGroup name=\"demo-group\" options={['foo', 'bar', 'baz']} />\n    </LabelledControl>\n\n    <LabelledControl label=\"Label NOT linked to boolean controls\">\n      <SingleCheckbox name=\"demo-bool\" label=\"THIS is the real label\" />\n    </LabelledControl>\n  </Form>\n)\n\nexport default Demo\n"},e))},de=function(e){return r.createElement(a.Z,(0,o.Z)({Component:Q,source:"import React, { useEffect } from 'react'\nimport { useForm } from 'react-hook-form'\nimport Form from '@concrete-form/react-hook-form'\nimport LabelledControl from '@concrete-form/mui/LabelledControl'\nimport Input from '@concrete-form/mui/Input'\nimport CheckboxesGroup from '@concrete-form/mui/CheckboxesGroup'\n\nimport FormControl from '@mui/material/FormControl'\nimport FormControlLabel from '@mui/material/FormControlLabel'\nimport FormGroup from '@mui/material/FormGroup'\nimport FormLabel from '@mui/material/FormLabel'\nimport Grid from '@mui/material/Grid'\n\nimport './customLayout.css'\n\nconst ControlLayout = ({ name, control, errors }) => (\n  <FormControl fullWidth error={!!errors} className=\"custom-mui-control\">\n    <div className=\"custom-mui-control-control-wrapper\">\n      { control }\n    </div>\n    {errors && <div className=\"custom-mui-control-errors-wrapper\">\n      { errors }\n    </div>}\n  </FormControl>\n)\n\nconst ErrorLayout = ({ errors }) => {\n  return (\n    <div className=\"custom-mui-errors\">\n      { errors.join(',') }\n    </div>\n  )\n}\n\nconst ItemLabelLayout = ({\n  label,\n  control,\n  labelPosition = 'left', /* ignored for this demo */\n}) => {\n  return (\n    <FormControlLabel control={control} label={label} className=\"custom-mui-item-label\" />\n  )\n}\n\nconst ItemsGroupLayout = ({\n  items,\n}) => {\n  return (\n    <FormGroup className=\"custom-mui-items-group\">\n      { items }\n    </FormGroup>\n  )\n}\n\nconst LabelLayout = ({\n  label,\n  htmlFor,\n}) => {\n  return (\n    <FormLabel className=\"custom-mui-label\" htmlFor={htmlFor}>\n      { label }\n    </FormLabel>\n  )\n}\n\nconst LabelledControlLayout = ({\n  control,\n  label,\n}) => {\n  return (\n    <Grid container className=\"custom-mui-labelled-control\">\n      <Grid item xs={12} sm={6}>\n      { label }\n      </Grid>\n      <Grid item xs={12} sm={6}>\n      { control }\n      </Grid>\n    </Grid>\n  )\n}\n\nconst Demo = () => {\n  const form = useForm()\n\n  useEffect(() => {\n    ['demo1', 'demo2'].forEach(field => {\n      form.setError(field, { type: 'custom', message: 'Error  message' }, { shouldFocus: false })\n    })    \n  })\n\n  return (\n    <Form\n      form={form}\n      onSubmit={() => {}}\n      layout={{\n        control: ControlLayout,\n        errors: ErrorLayout,\n        itemLabel: ItemLabelLayout,\n        itemsGroup: ItemsGroupLayout,\n        label: LabelLayout,\n        labelledControl: LabelledControlLayout,\n      }}\n    >\n      <LabelledControl label=\"Label\">\n        <Input name=\"demo1\" />\n        </LabelledControl>\n  \n        <LabelledControl label=\"Label\">\n          <CheckboxesGroup name=\"demo2\" options={['Foo', 'bar', { label: 'Baz', value: 'Baz', props: { disabled: true } }]} />\n        </LabelledControl>\n      </Form>\n  )\n}\n\nexport default Demo\n"},e))},fe=function(e){return r.createElement(a.Z,(0,o.Z)({Component:J,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport RadiosGroup from '@concrete-form/mui/RadiosGroup'\n\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n    <RadiosGroup name=\"demo\" options={['foo', 'bar', 'baz']} />\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e))},be=function(e){return r.createElement(a.Z,(0,o.Z)({Component:K,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport CheckboxesGroup from '@concrete-form/mui/CheckboxesGroup'\n\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n<CheckboxesGroup name=\"demo\" options={[\n  { label: 'Displayed label', value: 'actual-value' },\n  { label: <strong>I am bold</strong>, value: '123'},\n  { label: 'I am disabled', value: 'abc', props: { disabled: true } },\n]} />\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e))},he=function(e){return r.createElement(a.Z,(0,o.Z)({Component:Y,source:"/*exclude-start*/\nimport React from 'react'\nimport Form from '@concrete-form/react-hook-form'\nimport Select from '@concrete-form/mui/Select'\nconst Demo = () => (\n  <Form>\n    {/* exclude-end */}\n\n<Select name=\"demo\" options={[\n  'first',\n  { group: 'My group', options: ['foo', { label: 'bar', value: 'Bar!' }] },\n  'not-part-of-any-group',\n  { group: 'Primary group', options: ['first', 'second'], props: { color: 'primary' } },\n]} />\n\n    {/* exclude-start */}\n  </Form>\n)\n\nexport default Demo\n/*exclude-end*/\n"},e))}},6658:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),l=n(3695),m=["components"],i={title:"Controls options",hide_title:!0,description:"Control with multiple choices such as Select, Checkbox and Radio in Material-UI"},c="Material-UI Controls options",u={unversionedId:"controls/mui/controls-options",id:"controls/mui/controls-options",title:"Controls options",description:"Control with multiple choices such as Select, Checkbox and Radio in Material-UI",source:"@site/docs/controls/mui/controls-options.mdx",sourceDirName:"controls/mui",slug:"/controls/mui/controls-options",permalink:"/docs/controls/mui/controls-options",editUrl:"https://github.com/concrete-form/concrete-form-docs/docs/controls/mui/controls-options.mdx",tags:[],version:"current",frontMatter:{title:"Controls options",hide_title:!0,description:"Control with multiple choices such as Select, Checkbox and Radio in Material-UI"},sidebar:"docs",previous:{title:"API",permalink:"/docs/controls/mui/api"},next:{title:"Advanced layout customization",permalink:"/docs/controls/mui/advanced-layout-customization"}},p=[{value:"Multiple choices controls",id:"multiple-choices-controls",children:[],level:2},{value:"Autocomplete",id:"autocomplete",children:[],level:2},{value:"<code>options</code> prop",id:"options-prop",children:[{value:"String",id:"string",children:[],level:3},{value:"Labelled option",id:"labelled-option",children:[],level:3},{value:"Group",id:"group",children:[],level:3}],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,m);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"material-ui-controls-options"},"Material-UI Controls options"),(0,a.kt)("h2",{id:"multiple-choices-controls"},"Multiple choices controls"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./api#autocomplete-"},(0,a.kt)("inlineCode",{parentName:"a"},"<Autocomplete />"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./api#select-"},(0,a.kt)("inlineCode",{parentName:"a"},"<Select />"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./api#checkboxesgroup-"},(0,a.kt)("inlineCode",{parentName:"a"},"<CheckboxesGroup />"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./api#radiosgroup-"},(0,a.kt)("inlineCode",{parentName:"a"},"<RadiosGroup />")))),(0,a.kt)("h2",{id:"autocomplete"},"Autocomplete"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"<Autocomplete />")," ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," prop is handled by Material-UI. This documentation doesn't apply for that component.",(0,a.kt)("br",null),"\n",(0,a.kt)("a",{parentName:"p",href:"https://mui.com/api/autocomplete/#props"},"Check Material-UI documentation"),"."))),(0,a.kt)("h2",{id:"options-prop"},(0,a.kt)("inlineCode",{parentName:"h2"},"options")," prop"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"options"))," is expected to be an ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," containing items defined below :"),(0,a.kt)("h3",{id:"string"},"String"),(0,a.kt)("p",null,"the ",(0,a.kt)("strong",{parentName:"p"},"key")," and the ",(0,a.kt)("strong",{parentName:"p"},"value")," will share the same ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," value provided."),(0,a.kt)(l.FX,{dense:!0}),(0,a.kt)("p",null,"Will produce :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input name="demo" type="radio" value="foo"> foo\n<input name="demo" type="radio" value="bar"> bar\n<input name="demo" type="radio" value="baz"> baz\n')),(0,a.kt)("h3",{id:"labelled-option"},"Labelled option"),(0,a.kt)("p",null,"Labelled options are defined as object. They can set their value, their label and some props to forward to the control."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"label"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"node")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Any React node such as string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"value"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The value of the option")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"props"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forwarded to the rendered form control")))),(0,a.kt)(l.mE,{dense:!0}),(0,a.kt)("p",null,"Will produce :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<input name="demo" type="checkbox" value="actual-value"> Displayed label\n<input name="demo" type="checkbox" value="123"> <strong>I am bold</strong>\n<input name="demo" type="checkbox" value="abc" disabled=""> I am disabled\n')),(0,a.kt)("h3",{id:"group"},"Group"),(0,a.kt)("p",null,"A group has a label, holds other options and cannot be selected."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Groups are only supported by ",(0,a.kt)("a",{parentName:"p",href:"./api#select-"},(0,a.kt)("inlineCode",{parentName:"a"},"<Select />")),".",(0,a.kt)("br",null),"\nGroups cannot be nested."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"group"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forwarded to ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup"},(0,a.kt)("inlineCode",{parentName:"a"},"<optgroup>")),"'s ",(0,a.kt)("strong",{parentName:"td"},"label")," prop or ",(0,a.kt)("a",{parentName:"td",href:"https://mui.com/api/list-subheader/"},(0,a.kt)("inlineCode",{parentName:"a"},"<ListSubheader />")),"'s ",(0,a.kt)("strong",{parentName:"td"},"children"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"depending on ",(0,a.kt)("inlineCode",{parentName:"em"},"native")," value"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"mixed")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Mix of strings and labelled options")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"props"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forwarded to ",(0,a.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup"},(0,a.kt)("inlineCode",{parentName:"a"},"<optgroup>"))," or ",(0,a.kt)("a",{parentName:"td",href:"https://mui.com/api/list-subheader/"},(0,a.kt)("inlineCode",{parentName:"a"},"<ListSubheader />")),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"td"},"depending on ",(0,a.kt)("inlineCode",{parentName:"em"},"native")," value"))))),(0,a.kt)(l.DV,{dense:!0}))}d.isMDXComponent=!0}}]);