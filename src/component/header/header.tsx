import HeaderBottom from "./headerbottom";
import HeaderMiddle from "./headermiddle";
import HeaderTop from "./headertop";

export default function Header() {
  return (
    <header className="header header-2 header-intro-clearance">
        <HeaderTop/>

        <HeaderMiddle/>

        <HeaderBottom/>
        
    </header>
  )
}
