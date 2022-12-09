import Button from "@/components/Button.jsx"
import FormField from "@/components/FormField.jsx"
import {
  emailValidator,
  favoriteColorValidator,
  usernameValidator,
} from "@/validators.js"
import classNames from "classnames"
import { Form, Formik } from "formik"
import * as yup from "yup"

const defaultValidationSchema = yup.object().shape({
  username: usernameValidator.required(),
  email: emailValidator.required(),
  favoriteColor: favoriteColorValidator.required(),
})

const defaultInitialValues = {
  username: "",
  email: "",
  favoriteColor: "",
}

const UserForm = (props) => {
  const {
    className,
    onSubmit,
    initialValues = defaultInitialValues,
    validationSchema = defaultValidationSchema,
  } = props

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form className={classNames("flex flex-col gap-4 p-4", className)}>
        <FormField name="username" label="Username" />
        <FormField name="email" type="email" label="E-mail" />
        <FormField name="favoriteColor" type="color" label="Favorite Color" />
        <Button type="submit" className="mt-8">
          SAVE
        </Button>
      </Form>
    </Formik>
  )
}

export default UserForm
