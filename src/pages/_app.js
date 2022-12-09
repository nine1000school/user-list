import "@/styles.css"
import { useCallback, useState } from "react"

const initialUsers = [
  {
    id: 1,
    username: "avetisk",
    email: "avetis@kazarian.fr",
    favoriteColor: "#00ffff",
  },
]

const App = ({ Component, pageProps }) => {
  const [nextId, setNextId] = useState(2)
  const [users, setUsers] = useState(initialUsers)
  const getNextId = useCallback(() => {
    setNextId(nextId + 1)

    return nextId
  }, [nextId])
  const addUser = useCallback(
    (user) => {
      setUsers((users) => [
        ...users,
        {
          id: getNextId(),
          ...user,
        },
      ])
    },
    [getNextId]
  )
  const deleteUser = useCallback(
    (userId) => setUsers((users) => users.filter(({ id }) => id !== userId)),
    []
  )
  const updateUser = useCallback((updatedUser) => {
    setUsers((users) =>
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    )
  }, [])

  return (
    <Component
      {...pageProps}
      users={users}
      addUser={addUser}
      deleteUser={deleteUser}
      updateUser={updateUser}
    />
  )
}

export default App
