import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
    image: {
        src: string,
        alt: string
    }
}

export default function Header(props: Props) {
    return (
        <header>
            <img {...props.image} />
            {props.children}
        </header>
    )
}