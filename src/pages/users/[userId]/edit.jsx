import Page from "@/components/Page.jsx"
import UserForm from "@/components/UserForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      userId: Number.parseInt(params.userId, 10),
    },
  },
})

const UserEditPage = (props) => {
  const {
    params: { userId },
    users,
  } = props
  const { updateUser } = props
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      updateUser(values)
      router.push("/")
    },
    [router, updateUser]
  )

  return (
    <Page>
      <UserForm
        onSubmit={handleSubmit}
        initialValues={users.find(({ id }) => id === userId)}
      />
    </Page>
  )
}

export default UserEditPage
