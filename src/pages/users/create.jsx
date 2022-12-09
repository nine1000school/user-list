import Page from "@/components/Page.jsx"
import UserForm from "@/components/UserForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

const CreateUserPage = (props) => {
  const { addUser } = props
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      addUser(values)
      router.push("/")
    },
    [router, addUser]
  )

  return (
    <Page>
      <UserForm onSubmit={handleSubmit} />
    </Page>
  )
}

export default CreateUserPage
