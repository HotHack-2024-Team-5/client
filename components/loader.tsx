import ClipLoader from 'react-spinners/ClipLoader';
import { CSSProperties} from 'react';

const Loader = () =>{
    
   const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    color: "#d67436",
  };
  
return (
    <ClipLoader
  loading={true}
  cssOverride={override}
  speedMultiplier={1}
  color="#3e5e56"
  />

)};
export default Loader;