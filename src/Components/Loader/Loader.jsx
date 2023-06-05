import { BallTriangle } from 'react-loader-spinner';
import { LoaderCalc } from './Loader.styled';

function Loader() {
  return (
    <LoaderCalc>
      <BallTriangle
        height={80}
        width={80}
        radius={5}
        color="#433dc4"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </LoaderCalc>
  );
}

export default Loader;
