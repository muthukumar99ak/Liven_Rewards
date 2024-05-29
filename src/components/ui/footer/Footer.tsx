// Assets
import { livenLogo } from "../../../assets";
import { navigateToUrl } from "../../../utils/utils";
// SCSS
import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={style.footerContainer}>
            <img 
                src={livenLogo} 
                onClick={() => navigateToUrl("https://liven.love/")} 
                alt='logo' />
        </footer>
    )
}

export default Footer;