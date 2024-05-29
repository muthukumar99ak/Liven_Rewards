export type SwitchButtonProps = {
    ctrCls?: string,
    label: string,
    isChecked: boolean,
    icon?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}