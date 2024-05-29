// Types
import { SwitchButtonProps } from "../../types/components/SwitchButtonProps";
// SCSS
import style from "./SwitchButton.module.scss";

const SwitchButton = ({
    ctrCls = "",
    icon,
    label,
    isChecked,
    onChange
}: SwitchButtonProps) => {

    const renderSlider = () => {
        return (
            <label className={style.sliderContainer}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={onChange} />
                <span className={style.slider}></span>
            </label>
        )
    }

    const renderLabelAndIcon = () => {
        return (
            <span className={style.switchLabel}>
                {icon && (
                    <img src={icon} alt="icon" />
                )}
                {label}
            </span>
        )
    }

    return (
        <div className={`${style.container} ${ctrCls}`}>
            {renderLabelAndIcon()}
            {renderSlider()}
        </div>
    )
}

export default SwitchButton;