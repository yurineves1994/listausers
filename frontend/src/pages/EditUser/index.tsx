import * as S from './styles';

import { useParams } from "react-router-dom";
import { useHttpGet, useHttpPost } from "../../hooks/useFetch";
import { useEffect, useState } from 'react';

const EditUser = () => {
  const { id } = useParams();

  const { data: user, refetch } = useHttpGet(`http://localhost:4000/users/edit/${id}`);

  const { postData, loading: postLoading } = useHttpPost();

  const [name, setName] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [newsletter, setNewsletter] = useState<boolean>(false);

  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setOccupation(user.occupation);
      setNewsletter(user.newsletter);
    }
  }, [user]);

  console.log(user)

  const editUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await postData('http://localhost:4000/users/update', { id, name, occupation, newsletter })
    await refetch()
  }

  const addAdress = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await postData('http://localhost:4000/addresses', { id, street, number, city })
    await refetch()
  }

  const deleteAdress = async (id: number) => {
    await postData('http://localhost:4000/addresses/delete', { id })
    await refetch()
  }

  return <S.Container>
    <h1>Editar um usuario:</h1>

    <S.Form onSubmit={editUser}>
      <S.FormControl>
        <label>Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
      </S.FormControl>
      <S.FormControl>
        <label>Ocupação:
          <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        </label>
      </S.FormControl>
      <S.FormControlCheck>
        <label>
          <input type="checkbox" onChange={() => setNewsletter(!newsletter)} />
          Enviar promoções:</label>
      </S.FormControlCheck>
      <S.ButtonSubmit type="submit" value={postLoading ? "Editando..." : "Editar"} />
    </S.Form>

    <S.AdressContainer>
      <h2>Adicionar endereço</h2>
      <S.Form onSubmit={addAdress}>
        <S.FormControl>
          <label >Rua
            <input type="text" name="street" value={street} onChange={(e) => setStreet(e.target.value)} /></label>
        </S.FormControl>
        <S.FormControl>
          <label >Numero
            <input type="text" name="number" value={number} onChange={(e) => setNumber(e.target.value)} /></label>
        </S.FormControl>
        <S.FormControl>
          <label >Cidade
            <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} /></label>
        </S.FormControl>
        <S.ButtonSubmit type="submit" value={postLoading ? "Adicionando..." : "Adicionar"} />
      </S.Form>
    </S.AdressContainer>
    <S.ListAdressWrapper>
      <h2>Lista de Endereços</h2>
      <table>
        <thead>
          <tr>
            <th>Rua</th>
            <th>Número</th>
            <th>Cidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {user.Adresses && user.Adresses.map((adress) => (
            <tr key={adress.id}>
              <td>{adress.street}</td>
              <td>{adress.number}</td>
              <td>{adress.city}</td>
              <td>
                <a onClick={() => deleteAdress(adress.id)}>{postLoading ? "Deletando..." : "Deletar Endereço"}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.ListAdressWrapper>
  </S.Container>

}

export default EditUser