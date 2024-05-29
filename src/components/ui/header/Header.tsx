// Assets
import { livenLogo } from "../../../assets";
// Utils
import { navigateToUrl } from "../../../utils/utils";
// Components
import Button from "../../button/Button";
// SCSS
import style from "./Header.module.scss";

const Header = () => {
    return (
        <header className={style.headerContainer}>
            <a
                href="https://liven.love/"
                className={style.logoContainer}
                target="_blank"
                rel="noreferrer">
                <img src={livenLogo} alt="logo" />
            </a>
            <div>
                <Button onClick={() => navigateToUrl("https://app.liven.com.au/")}>
                    Get app
                </Button>
            </div>
        </header>
    )
}

export default Header;