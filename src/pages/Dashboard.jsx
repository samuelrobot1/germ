import Header from "../componentes/atomos/Header";
import Mapas from "../componentes/atomos/mapas";
import DescripcionGeneral from "../componentes/moleculas/DescripcionGeneral";
import Carousel from "../componentes/moleculas/Carousel";
import Footer from "../componentes/atomos/footer";
import PEKO from "../componentes/moleculas/PEKO";
function Dashboard() {
    return (
        <div>
            <Header></Header>
            <DescripcionGeneral></DescripcionGeneral>
         <PEKO></PEKO>
            <Carousel></Carousel>
            <Mapas></Mapas>
        
            <Footer></Footer>
        </div>
    );
}

export default Dashboard;