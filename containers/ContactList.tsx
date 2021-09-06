import { ReactNode } from "react";

interface Props {
    children: ReactNode
}
export default function ContactList(props: Props) {
    return (
        <ul>
            {props.children}
        </ul>
    )
}
