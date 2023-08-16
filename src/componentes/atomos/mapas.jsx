import "../../assets/styles/mapas.css";
import pichi from "../../assets/images/pichi.png";
import icon1 from "../../assets/images/img32.png";
import { BiLogoWhatsapp } from "react-icons/bi";

function Mapas() {
  return (
    <>
      <div className="contanainer21">
        <h1>MAPAS</h1>

        <hr>
          {/* <iframe src="" 
   ></iframe> */}
        </hr>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477.56704516356245!2d-93.1370686390688!3d16.749969956468902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8fe2d0ef393%3A0xc380dfcee3a35b64!2sUniversidad%20Maya%20Campus%20Tuxtla!5e0!3m2!1ses!2smx!4v1692199618939!5m2!1ses!2smx"
          frameborder="0"
          width="900"
          height="450"
        ></iframe>

        <div className="container12">
         <h1 className="ENCU1">ENCUENTRANOS EN </h1>

          <a href="https://web.whatsapp.com/">IR WHATSAPP</a>
        </div>
      </div>

      <div>
        <div className="villo">
          <h1 className="ENCU2">
            FRESH FOOD EVERYDAY Our Cafetary is a family-owned restaurant that
            has been proudly serving around the 1940s located on the corner of
            Broadway and West 112th Street in New York,
          </h1>
          <BiLogoWhatsapp></BiLogoWhatsapp>

        
        </div>
      </div>

      <></>
    </>
  );
}

export default Mapas;
