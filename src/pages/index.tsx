import * as React from "react"
import "../styles/index.scss"
import type {HeadFC} from "gatsby"
import {links} from "../data/linktree"
import Header from "./header";

export default function Component() {

    // window is not available during server-side rendering
    const isBrowser = () => typeof window !== "undefined"
    // Set vh for css trick for phone devices
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    isBrowser() && document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);

    return (
        <div id="wrapper">
            <Header>@antonynotfound</Header>
            <main>
                <div id="links">
                    {links.map(link => (
                        <a href={link.url} className={"link"}>{link.name}</a>
                    ))}
                </div>
            </main>
        </div>
    )
}

export const Head: HeadFC = () => <title>Tony 404 LinkTree</title>
