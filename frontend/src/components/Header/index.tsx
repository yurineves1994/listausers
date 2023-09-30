import * as S from './styles'

const Header = () => {
  return (
    <S.NavBarWrapper>
      <S.NavList>
        <S.NavItem>
          <S.NavLink to="/users" aria-label="Cadastrar Usuário">
            Cadastrar Usuário
          </S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink to="/" aria-label="Listar Usuários">
            Listar Usuários
          </S.NavLink>
        </S.NavItem>
      </S.NavList>
    </S.NavBarWrapper>
  )
}

export default Header