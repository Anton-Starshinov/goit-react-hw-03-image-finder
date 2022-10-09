import { ButtonStyled, ButtonCont } from './Button.styled';

const Button = ({ onClickLoadMore }) => {
  return (
    <ButtonCont>
      <ButtonStyled
        type="button"
        onClick={() => {
          onClickLoadMore();
        }}
      >
        Load more
      </ButtonStyled>
    </ButtonCont>
  );
};

export default Button;
