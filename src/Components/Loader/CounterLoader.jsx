import { ThreeDots } from 'react-loader-spinner';
import { CountLoader } from './Loader.styled';

function CounterLoader() {
  return (
    <CountLoader>
      <ThreeDots
        height="40"
        width="40"
        radius="4"
        color=" #433dc4"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </CountLoader>
  );
}

export default CounterLoader;
