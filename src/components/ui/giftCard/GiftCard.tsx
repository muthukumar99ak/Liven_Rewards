// Assets
import { DollarIcon, livenLogoSecondary } from "../../../assets";
// Types
import { GiftCardProps } from "../../../types/components/GiftCardProps";
// Utils
import { navigateToUrl } from "../../../utils/utils";
// Components
import Card from "../../card/Card";
// SCSS
import style from "./GiftCard.module.scss";

const GiftCard = ({ giftInfo }: GiftCardProps) => {
    const {
        isExclusive,
        rewardBonus,
        rewardCost
    } = giftInfo;

    return (
        <Card 
            ctrCls={style.cardContainer} 
            onClick={() => navigateToUrl("https://liven.love/")}
        >
            <div className={style.reward}>
                {isExclusive && (
                    <div className={style.appExclusive}>
                        <img src={livenLogoSecondary} alt="logo" />
                        App exclusive
                    </div>
                )}
                <div className={style.cost}>
                    <span>Buy</span>
                    <p>${rewardCost}</p>
                </div>
                <div className={style.dollarIcon}>
                    <img src={DollarIcon} alt="dollar" />
                </div>
                <div className={`${style.cost} ${style.bonusCost}`}>
                    <span>Bonus</span>
                    <p>${rewardBonus}</p>
                </div>
            </div>
        </Card>
    )
}

export default GiftCard;