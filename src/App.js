import './App.css';
import Profilecomp from './profile/Profilecomp';
import  Image  from './profile/Image.png';
function App() {
  const handleName = (e, fullName) => {e.preventDefault();alert(fullName);};
  return (
    <div  style={{
      display: "flex",
      margin: "30px",
      marginTop:"10%",
      justifyContent:"center"}}>
    
      <Profilecomp
      img={Image}
      fullName={"Wael ltifi"}
      profession = {"Chemistry engineer"}
      bio={`i don't wanna write anything `}
      onHandleName={handleName}
      ></Profilecomp>
    </div>
  );
}

export default App;