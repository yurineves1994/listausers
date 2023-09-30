import { useParams } from 'react-router-dom';
import { useHttpGet } from '../../hooks/useFetch';
import * as S from './styles'

const UserView = () => {
  const { id } = useParams();

  const { data: user } = useHttpGet(`http://localhost:4000/users/edit/${id}`);

  return (
    <S.Container>
      <S.Button href="/">Voltar</S.Button>
      <S.Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ocupação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.occupation}</td>
          </tr>
        </tbody>
      </S.Table>
    </S.Container>
  )
}

export default UserView