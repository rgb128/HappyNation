export const CONFIG = {
    screen: {
        get width(): number { return document.documentElement.clientWidth },
        get height(): number { return document.documentElement.clientHeight },
    },
    viewBox: {
        get perspectiveOriginX(): number { return CONFIG.screen.width / 2; },
        get perspectiveOriginY(): number { return CONFIG.screen.height / 2; },
        get perspective(): number { return CONFIG.screen.width; },
    },
    scene: {
        sky: {
            color: '#00f',
        },
        road: {
            get width(): number { return CONFIG.screen.height },
            get length(): number { return CONFIG.screen.width * 2 },
            get shiftX(): number { return CONFIG.screen.width * -.5 },
            color: '#000',
        }
    }
}
