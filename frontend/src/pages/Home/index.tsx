import { useHttpGet, useHttpPost } from '../../hooks/useFetch'
import * as S from './styles'

type User = {
  id: number
  name: string
  newletter: boolean
  occupation: string
}

const Home = () => {
  const { data: users, loading, refetch } = useHttpGet('http://localhost:4000/users')

  const { postData, loading: postLoading } = useHttpPost();

  const deleteUser = async (id: number) => {
    await postData('http://localhost:4000/users/delete', { id })
    await refetch()
  }

  console.log(users)
  return (
    <S.Container>
      {loading ? "Carregando..." : 
        <S.Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Profissão</th>
              <th>Receber newsletter?</th>
              <th>Acessar usuarios</th>
              <th colSpan={2}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user: User) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.occupation}</td>
                <td>{user.newletter ? 'Sim' : 'Não'}</td>
                <td><a href={`/users/${user.id}`}>ver detalhes</a></td>
                <td><a href={`/users/edit/${user.id}`}>Editar</a></td>
                <td><a onClick={() => deleteUser(user.id)}>{postLoading ? "Deletando..." : "Deletar"}</a></td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      }
    </S.Container>
  )
}

export default Home