import imagenpeko from "../../assets/images/PEKOIMG1.png"
import imgpeko02 from "../../assets/images/peko02.png"
import '../../assets/styles/PEKO.css'

 

function PEKO (){
return(
    <>

        <div className="container"><h1>PEKO?</h1>
        <img src={imagenpeko}></img>

        </div>
       <div className="Cntainer2">
       <img src={imgpeko02}></img>

       </div>
       


    </>
);

}

export default PEKO;