export type ColorScheme = {
    primary: string,
    text: string,
    background: string,
    accent: string
}

export const LightScheme : ColorScheme = {
    primary: "hsl(28, 100%, 60%)",
    text: "black",
    background: "white",
    accent: "hsl(28, 100%, 90%)"
}

export const LightScheme2 : ColorScheme = {
    primary: "hsl(28, 100%, 60%)",
    text: "black",
    background: "hsl(28, 100%, 96%)",
    accent: "hsl(28, 100%, 90%)"
}

export const DarkScheme : ColorScheme = {
    primary: "hsl(28, 100%, 60%)",
    text: "white",
    background: "#252525",
    accent: "hsl(28, 50%, 50%)"
}
