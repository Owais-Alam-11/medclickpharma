import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Scroll";
import Homepage from "./Footer/HomePage";
import Avanifil from "./Mens_Health/Avanifil";
import Dapoxetine from "./Mens_Health/Dapoxetine";
import Contraceptives from "./WomensHealth/Contraceptives";
import BlogMainPage from "./Footer/BlogMainPage"
import BlogFirstPage from "./Footer/BlogFirstPage"
import BlogSecondPage from "./Footer/BlogSecondPage"
import BlogThirdPage from "./Footer/BlogThirdPage"
import BlogFourthPage from "./Footer/BlogFourthPage"
import FAQ from "./Footer/Faq";
import ContactUs from "./Footer/ContactUs";
import About from "./Footer/About";
import Sildenafil from "./Mens_Health/Sildenafil";
import Tadalafil from "./Mens_Health/Tadalafil";
import Vardenafil from "./Mens_Health/Vardenafil";
import Painkiller from "./Nav/PainKiller";
import Weightloss from "./Nav/WeightLoss";
import Steroid from "./Nav/Steroid";
import SleepingPills from "./Nav/SleepingPills";
import Modafinil_Armodafinil from "./Nav/Modafinil&Armodafinil";
import Antiviral_Antibiotic from "./Nav/Antiviral _Antibiotic";
import HairLossTreatment from "./OtherCategories/Hairlosstreatement";
import SkinCreame from "./OtherCategories/SkinCream";
import EyeEarDrops from "./OtherCategories/EyeDrop";
import KamagraAllRange from "./OtherCategories/KamagraAllRange";
import BestSeller from "./OtherCategories/BestSeller";
import OtherProducts from "./OtherCategories/OtherProducts";
import DropShipping from "./OtherCategories/DropShipping";

function App (){
return(
  <>
<BrowserRouter>
<ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Avanafil" element={<Avanifil/>} />
        <Route path="/Dapoxetine" element={<Dapoxetine/>} />
        <Route path="/Sildenafil" element={<Sildenafil/>} />
        <Route path="/Tadalafil" element={<Tadalafil/>} />
        <Route path="/Vardenafil" element={<Vardenafil/>} />
        <Route path="/Pain Killer" element={<Painkiller/>} />
        <Route path="/Contraceptives" element={<Contraceptives/>} />
        <Route path="/Weightloss" element={<Weightloss/>} />
        <Route path="/Steroid" element={<Steroid/>} />
        <Route path="/SleepingPills" element={<SleepingPills/>} />
        <Route path="/Modafinil_Armodafinil" element={<Modafinil_Armodafinil/>} />
        <Route path="/Antiviral_Antibiotic" element={<Antiviral_Antibiotic/>}/>
        <Route path="/HairLossTreatment" element={<HairLossTreatment/>}/>
        <Route path="/SkinCreame" element={<SkinCreame/>}/>
        <Route path="/EyeEarDrops" element={<EyeEarDrops/>}/>
        <Route path="/KamagraAllRange" element={<KamagraAllRange/>}/>
        <Route path="/BestSeller" element={<BestSeller/>}/>
        <Route path="/OtherProducts" element={<OtherProducts/>}/>
        <Route path="/DropShipping" element={<DropShipping/>}/>

        <Route path="/BlogMainPage" element={<BlogMainPage/>}/>
        <Route path="/BlogFirstPage" element={<BlogFirstPage/>}/>
        <Route path="/BlogSecondPage" element={<BlogSecondPage/>}/>
        <Route path="/BlogThirdPage" element={<BlogThirdPage/>}/>
        <Route path="/BlogFourthPage" element={<BlogFourthPage/>}/>
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About Us" element={<About/>} />
        
      </Routes>
</BrowserRouter> 
  </>
) 
}
export default App