import * as React from "react"
import "../styles/header.scss"
import {StaticImage} from "gatsby-plugin-image";

export default function Header({children}: { children: React.ReactNode }) {
    return (
        <div id="header">
            <StaticImage
                className="header-picture-wrapper"
                imgClassName="header-picture"
                src="../images/headshot.jpg"
                alt="headshot"
                placeholder="blurred"
            />
            <span>{children}</span>
        </div>
    )
}
