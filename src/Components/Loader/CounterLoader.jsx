import { ThreeDots } from 'react-loader-spinner';
import { LoaderCalc } from './Loader.styled';

function CounterLoader() {
  return (
    <LoaderCalc>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderCalc>
  );
}

export default CounterLoader;
