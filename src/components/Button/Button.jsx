import { ButtonStyled, ButtonCont } from './Button.styled';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};
