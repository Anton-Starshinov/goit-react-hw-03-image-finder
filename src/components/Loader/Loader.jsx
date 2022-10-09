import { Dna } from 'react-loader-spinner';
import { LoaderDiv } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderDiv>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </LoaderDiv>
  );
};

export default Loader;
