import Loader from 'react-loader-spinner';

const LoaderSpinner = () => {
  return (
    <div className="containerLoader">
      <Loader
        type="Bars"
        color="#3f51b5"
        height={200}
        width={200}
        timeout={1000}
      />
    </div>
  );
};

export default LoaderSpinner;
