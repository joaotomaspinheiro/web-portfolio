import { ChangeEventHandler } from "react"
import styles from "@styles/Input.module.scss"

interface Props {
    value: string | number | undefined,
    type?: "text" | "email" | "multiline",
    placeholder?: string,
    icon?: Object,
    required?: boolean,
    onChange?: ChangeEventHandler,
}

export default function Input(props: Props) {
    return (
        <div style={props.type === "multiline" ? { borderRadius: "10px" } : { borderRadius: "25px" }} className={styles.inputContainer}>
            <div className={styles.icon}>
                {props.icon}
            </div>
            {
                props.type === "multiline" ? (
                    <textarea placeholder={props.placeholder} value={props.value} onChange={props.onChange} required={props.required} />
                ) : (
                    <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} required={props.required} />
                )
            }
        </div>
    )
}