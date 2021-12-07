---
sidebar_position: 1
title: Introduction
slug: /
---

# Introduction

## Forms and React
- There are already good form libraries for React. ([`React Hook Form`](https://react-hook-form.com/), [`Formik`](https://formik.org/), ...)
- There are already good UI kits for React ([`Material-UI`](https://mui.com/), [`Semantic UI`](https://semantic-ui.com/), ...)

**Using them together always mean a lot of boiler plate before you're ready to start coding your forms.**
## Here comes Concrete Form

**Concrete-Form** render the most common form controls that you need no matter what **UI kit** you are using, registers them automatically on the **form library of your choice**. 

- We **render** the controls
- We **register** the controls on the form that you selected
- We **display the errors**
- We help you to **translate** validation errors
- We help you to **test** your forms

### Example
> **`React Hook Form`** with **`Material-UI`**

```jsx
import Form from '@concrete-form/react-hook-form'
import { Input, SubmitButton } from '@concrete-form/mui'

const App = () => (
  <Form onSubmit={...}>
    <Input name="name" placeholder="Enter your name" />
    <SubmitButton>Send</SubmitButton>
  </Form>
)
```

#### `<Form>`
- Render an HTML `<form>` element
- Can accept an existing form created with [`useForm()`](https://react-hook-form.com/api/useform) or we'll create it for you 🍺
- Exposes `React Hook Form` context so you can use [`useFormContext()`](https://react-hook-form.com/api/useformcontext)

#### `<Input>` + `<SubmitButton>`
- Render a `MUI TextField` and a `MUI Button`
- Since it's inside `<Form>`, "**name**" input is registered automatically on `React Hook Form`.
- Errors are displayed automatically

## Available implementations
### Form libraries
- [React Hook Form](https://github.com/concrete-form/react-hook-form)  [![](https://img.shields.io/appveyor/build/kegi/react-hook-form?style=flat-square)](https://ci.appveyor.com/project/kegi/react-hook-form/history) [![](https://img.shields.io/coveralls/github/concrete-form/react-hook-form?style=flat-square)](https://coveralls.io/github/concrete-form/react-hook-form)
- [Formik](https://github.com/concrete-form/formik)  [![](https://img.shields.io/appveyor/build/kegi/formik?style=flat-square)](https://ci.appveyor.com/project/kegi/formik/history) [![](https://img.shields.io/coveralls/github/concrete-form/formik?style=flat-square)](https://coveralls.io/github/concrete-form/formik)

### UI Kits
- [HTML5](https://github.com/concrete-form/html5)  [![](https://img.shields.io/appveyor/build/kegi/html5?style=flat-square)](https://ci.appveyor.com/project/kegi/html5/history) [![](https://img.shields.io/coveralls/github/concrete-form/html5?style=flat-square)](https://coveralls.io/github/concrete-form/html5)
- [Material UI](https://github.com/concrete-form/mui)  [![](https://img.shields.io/appveyor/build/kegi/mui?style=flat-square)](https://ci.appveyor.com/project/kegi/mui/history) [![](https://img.shields.io/coveralls/github/concrete-form/mui?style=flat-square)](https://coveralls.io/github/concrete-form/mui)

## Can I customize my form ?

**Sure!**

By choosing Concrete Form controls, you'll be saving time as they're working out of the box but it's still possible to create your own control. **You have full freedom.**

- You can instanciate the form yourself and use any settings that you want
- You can provide parameters when registering the field on the form
- We make no design decision and you can customize 100% of the UI
