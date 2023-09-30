import { FormEvent, useState } from 'react';
import { useHttpPost } from '../../hooks/useFetch';
import * as S from './styles';

const AddUser = () => {
  const [name, setName] = useState("")
  const [occupation, setOccupation] = useState("")
  const [newsletter, setNewsletter] = useState(false)

  const { postData, loading: postLoading } = useHttpPost();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    postData('http://localhost:4000/users', { name, occupation, newsletter })

  };

  return (
    <S.Container>
      <h1>Adicionar um usuario:</h1>

      <S.Form onSubmit={handleSubmit}>
        <S.FormControl>
          <label htmlFor="name">Nome:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
        </S.FormControl>
        <S.FormControl>
          <label htmlFor="occupation">Ocupação:
            <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
          </label>
        </S.FormControl>
        <S.FormControlCheck>
          <label htmlFor="newsletter">
            <input type="checkbox" onChange={() => setNewsletter(!newsletter)} />
            Enviar promoções:</label>
        </S.FormControlCheck>
        <input type="submit" value={postLoading ? "Carregando..." : "Enviar"} disabled={postLoading ? true : false} />
      </S.Form></S.Container>
  )
}

export default AddUser