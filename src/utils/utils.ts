export const navigateToUrl = (url: string, newTab: boolean = true) => {
    window.open(url, newTab ? "_blank" : "")
}