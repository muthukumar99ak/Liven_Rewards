// Pre-defined
import { useState } from "react";
// Assets
import { GiftIcon } from "../../assets";
// Components
import SwitchButton from "../../components/switchButton/SwitchButton";
import GiftCard from "../../components/ui/giftCard/GiftCard";
// Mock data
import { MOCK_GIFT_CARDS } from "../../mock/mockGiftCards";
// Scss
import style from "./Rewards.module.scss";

const Rewards = () => {
    const [isPurchaseAsGiftChecked, setIsPurchaseAsGiftChecked] = useState(false);

    const renderGiftCardList = () => {
        return MOCK_GIFT_CARDS.map(gift => {
            if (isPurchaseAsGiftChecked && gift.isExclusive) {
                return "";
            }
            return (
                <GiftCard
                    key={gift.id}
                    giftInfo={gift} />
            )
        })
    }

    return (
        <div className={style.rewardContainer}>
            <div className={style.rewardHeader}>
                <h2 className={style.rewardHeading}>
                    San Dollars
                </h2>
                <p className={style.rewardParagraph}>
                    Pay now, eat more later! Earn a bonus when you buy food upfront. Tap now to purchase.
                </p>
                <div className={style.purchaseGiftSwitchContainer}>
                    <SwitchButton
                        ctrCls={style.purchaseGiftSwitch}
                        label="Purchase as gift"
                        icon={GiftIcon}
                        isChecked={isPurchaseAsGiftChecked}
                        onChange={(e) => setIsPurchaseAsGiftChecked(e.target.checked)} />
                </div>
            </div>
            <div className={style.rewardList}>
                {renderGiftCardList()}
            </div>
        </div>
    )
}

export default Rewards;