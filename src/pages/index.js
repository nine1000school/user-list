import Button from "@/components/Button.jsx"
import Link from "@/components/Link.jsx"
import Page from "@/components/Page.jsx"
import { TrashIcon } from "@heroicons/react/24/solid"
import { useCallback } from "react"

const IndexPage = (props) => {
  const { users, deleteUser } = props
  const handleClickDelete = useCallback(
    (event) => {
      const userId = Number.parseInt(
        event.target.getAttribute("data-user-id"),
        10
      )

      deleteUser(userId)
    },
    [deleteUser]
  )

  return (
    <Page title="User list">
      <table className="w-full mt-8">
        <thead>
          <tr>
            <th className="border-2 p-4">ID</th>
            <th className="border-2 p-4">Username</th>
            <th className="border-2 p-4">Email</th>
            <th className="border-2 p-4">Favorite Color</th>
            <th className="border-2 p-4" colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.favoriteColor}</td>
              <td className="border px-4 py-2">
                <Link href={`/users/${user.id}/edit`}>Edit</Link>
              </td>
              <td className="border px-4 py-2">
                <Button data-user-id={user.id} onClick={handleClickDelete}>
                  <TrashIcon className="w-6" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Page>
  )
}

export default IndexPage
