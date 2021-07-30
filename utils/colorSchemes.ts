export type ColorScheme = {
    text: string,
    background: string,
    accent: string
}

export const LightScheme : ColorScheme = {
    text: "black",
    background: "white",
    accent: "hsl(28, 100%, 90%)"
}

export const DarkScheme : ColorScheme = {
    text: "white",
    background: "#252525",
    accent: "hsl(28, 50%, 50%)"
}
