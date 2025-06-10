
import React, { ClassAttributes, InputHTMLAttributes, JSX, useState } from 'react'
import { setState } from '@/shared/layouts-components/services/switcherServices';
import { MENUITEMS } from '@/shared/layouts-components/sidebar/nav';

const switcherSelector = (selector: string) => {

    if (typeof selector !== 'string' || selector.trim() === '') {
        return null;
    }
    return document?.querySelector<HTMLElement>(selector);
};

const switcherDoucmentIdSelector = (selector: string): HTMLElement | null => {
    return document.getElementById(selector);
};

const getDocumentElement = (): HTMLElement => {
    return document.documentElement;
};

export const updateTheme = (themeType: string, clicked: string | boolean) => {
    const newState = {
        dataThemeMode: themeType === "dark" ? "dark" : "light",
        dataHeaderStyles: themeType === "dark" ? "dark" : "light",
        dataMenuStyles: themeType === "dark" ? "dark" : "dark",
        bodyBg: "",
        bodyBg2: "",
        inputBorder: "",
        formControlBg: '',
        lightRgb: "",
        gray: ""
    }
    setState(newState)
    localStorage.setItem(`rixzo${themeType}Theme`, themeType);
    localStorage.removeItem(`rixzo${themeType === "dark" ? "light" : "dark"}Theme`);

    if (clicked === 'clicked') {
        localStorage.removeItem("bodyBg");
        localStorage.removeItem("bodyBg2");
        localStorage.removeItem("bgImg");
        localStorage.removeItem("rixzoheader");
        localStorage.removeItem("rixzomenu");
    }

};

export const setDirection = (direction: 'ltr' | 'rtl') => {
    const newState = {
        dir: direction
    };

    setState(newState);
    if (direction === 'rtl') {
        localStorage.setItem("rixzortl", 'rtl');
        localStorage.removeItem("rixzoltr");
    } else {
        localStorage.removeItem("rixzortl");
    }
};

export function closeMenu() {
    const closeMenudata = (items: any[]) => {
        items?.forEach((item: { active: boolean; children: any; }) => {
            item.active = false;
            closeMenudata(item.children);
        });
    };
    closeMenudata(MENUITEMS);
}

export const updateLayout = (layoutType: string) => {
    setTimeout(() => {
        switcherSelector('')?.click();
    }, 100);

    const newState = {
        dataNavLayout: layoutType === "horizontal" ? "horizontal" : "vertical",
        dataVerticalStyle: layoutType === "vertical" ? "overlay" : "",
        dataNavStyle: localStorage.rixzonavstyles ? localStorage.rixzonavstyles : "menu-click",
        toggled: layoutType === "vertical" ? "" : undefined
    };

    setState(newState);
    localStorage.setItem('rixzoLayout', layoutType);

    if (layoutType === "vertical") {
        localStorage.removeItem('rixzonavstyles');
    } else {
        localStorage.removeItem("rixzoverticalstyles");
    }

    const Sidebar: HTMLElement | null = switcherSelector('.main-menu');
    if (Sidebar) {
        Sidebar.style.marginInline = '0px';
    }

    closeMenu();

};

export const updateNavStyle = (actionType: string, toggledState: string) => {

    const newState = {
        dataNavStyle: actionType,
        toggled: toggledState,
        dataVerticalStyle: "",
    }

    setState(newState);
    localStorage.setItem('rixzonavstyles', actionType);
    localStorage.removeItem('rixzoverticalstyles')

    if (actionType === "icon-click" || actionType === "icon-hover") {
        const Sidebar: HTMLElement | null = switcherSelector('.main-menu');
        if (Sidebar) {
            Sidebar.style.marginInline = '0px';
        }
    }
};

export const DefaultMenu = () => {
    const newState = {
        dataVerticalStyle: "overlay",
        dataNavLayout: "vertical",
        toggled: "",
        dataNavStyle: "",
    }
    setState(newState);
    localStorage.setItem('rixzoverticalstyles', 'default');
    localStorage.removeItem('rixzoverticalstyles');
};

export const ClosedMenu = () => {
    const newState = {
        dataNavLayout: "vertical",
        dataVerticalStyle: "closed",
        toggled: "close-menu-close",
    }
    setState(newState);
    localStorage.setItem('rixzoverticalstyles', 'closed');
};

export const IconTextOpenFn = () => {
    let html = getDocumentElement();
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.setAttribute('data-icon-text', 'open');
    }
}

export const IconTextCloseFn = () => {
    let html = getDocumentElement();
    if (html.getAttribute('data-toggled') === 'icon-text-close') {
        html.removeAttribute('data-icon-text');
    }
}

export const IconText = () => {
    const newState = {
        dataNavLayout: "vertical",
        dataVerticalStyle: "icontext",
        toggled: "icon-text-close",
        dataNavStyle: "",
    }
    setState(newState);
    localStorage.setItem('rixzoverticalstyles', 'icontext');
    const MainContent = switcherSelector('.main-content');
    const appSidebar = switcherSelector('.app-sidebar');

    appSidebar?.addEventListener('click', () => {
        IconTextOpenFn();
    });

    MainContent?.addEventListener('click', () => {
        IconTextCloseFn();
    });
};

export const iconOverlayFn = () => {
    const newState = {
        dataNavLayout: "vertical",
        dataVerticalStyle: "overlay",
        toggled: "icon-overlay-close",
        dataNavStyle: ''
    };
    setState(newState);
    localStorage.setItem('rixzoverticalstyles', 'overlay');
    const icon = switcherDoucmentIdSelector('switcher-icon-overlay') as HTMLInputElement;
    if (icon) {
        icon.checked = true;
    }

    const MainContent = switcherSelector('.main-content');
    const appSidebar = switcherSelector('.app-sidebar');


    if (appSidebar) {
        appSidebar.addEventListener("mouseenter", DetachedOpenFn);
        appSidebar.removeEventListener("mouseenter", DetachedOpenFn);
    }

    if (MainContent) {
        MainContent.addEventListener("mouseleave", DetachedCloseFn);
        MainContent.removeEventListener("mouseleave", DetachedCloseFn);
    }
};

function DetachedOpenFn() {
    let html = getDocumentElement();
    if (window.innerWidth > 992) {
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.setAttribute('data-icon-overlay', 'open');
        }
    }
}

function DetachedCloseFn() {
    let html = getDocumentElement();
    if (window.innerWidth > 992) {
        if (html.getAttribute('data-toggled') === 'detached-close' || html.getAttribute('data-toggled') === 'icon-overlay-close') {
            html.removeAttribute('data-icon-overlay');
        }
    }
}

export const DetachedFn = () => {

    const newState = {
        dataNavLayout: "vertical",
        dataVerticalStyle: "detached",
        toggled: "detached-close",
        dataNavStyle: "",
    }
    setState(newState);
    localStorage.setItem('rixzoverticalstyles', 'detached');
    const MainContent = switcherSelector('.main-content');
    const appSidebar = switcherSelector('.app-sidebar');

    appSidebar?.addEventListener("click", () => {
        DetachedOpenFn();
    });
    MainContent?.addEventListener("click", () => {
        DetachedCloseFn();
    });
}

export const DoubletFn = () => {
    const newState = {
        dataNavLayout: "vertical",
        dataVerticalStyle: "doublemenu",
        toggled: "double-menu-open",
        dataNavStyle: "",
    }
    setState(newState);
    localStorage.setItem('rixzoverticalstyles', 'doublemenu');
    setTimeout(() => {
        if (!switcherSelector('.main-menu .slide.active ul')) {

            const newState = {
                toggled: 'double-menu-close'
            }
            setState(newState);
        }
    }, 100);

    // closeMenu1();
};

export const setPageStyle = (style: 'regular' | 'classic' | 'modern') => {
    const newState = {
        dataPageStyle: style
    };

    setState(newState);
    localStorage.setItem(`rixzo${style}`, style.charAt(0).toUpperCase() + style.slice(1));
    const styles = ['regular', 'classic', 'modern'];
    styles.forEach(item => {
        if (item !== style) {
            localStorage.removeItem(`rixzo${item}`);
        }
    });
};

export const setLayout = (layout: 'fullwidth' | 'boxed') => {
    const newState = {
        dataWidth: layout
    };

    setState(newState);

    localStorage.setItem(`rixzo${layout}`, layout.charAt(0).toUpperCase() + layout.slice(1));

    const layouts = ['fullwidth', 'boxed'];
    layouts.forEach(item => {
        if (item !== layout) {
            localStorage.removeItem(`rixzo${item}`);
        }
    });
};

export const setMenuPosition = (position: 'fixed' | 'scrollable') => {
    const newState = {
        dataMenuPosition: position
    };
    setState(newState);
    localStorage.setItem(`rixzomenu${position}`, `Menu${position.charAt(0).toUpperCase() + position.slice(1)}`);
    const otherPosition = position === 'fixed' ? 'scrollable' : 'fixed';
    localStorage.removeItem(`rixzomenu${otherPosition}`);
};

export const setHeaderPosition = (position: 'fixed' | 'scrollable') => {
    const newState = {
        dataHeaderPosition: position
    };
    setState(newState);
    localStorage.setItem(`rixzoheader${position}`, `Header${position.charAt(0).toUpperCase() + position.slice(1)}`);
    const otherPosition = position === 'fixed' ? 'scrollable' : 'fixed';
    localStorage.removeItem(`rixzoheader${otherPosition}`);
};

export const setMenuStyle = (style: string) => {

    localStorage.setItem('rixzomenu', style);

    const currentColor = localStorage.getItem('rixzomenu') || style
    const newState = {
        dataMenuStyles: currentColor
    };
    setState(newState);
    localStorage.setItem('rixzomenu', style);
};

export const setHeaderStyle = (style: 'light' | 'dark' | 'color' | 'gradient' | 'transparent') => {
    const newState = {
        dataHeaderStyles: style
    };

    setState(newState);
    localStorage.setItem('rixzoheader', style);
};

export const setPrimaryColor = (rgb: string) => {
    const newState = {
        colorPrimaryRgb: rgb
    };

    setState(newState);
    localStorage.setItem('primaryRGB', rgb);
};

export const updateBackgroundColor = (bgColor1: string, bgColor2: string) => {
    const newState = {
        bodyBg: bgColor1,
        bodyBg2: bgColor2,
        inputBorder: 'rgba(255,255,255,0.1)',
        lightRgb: bgColor2,
        formControlBg: `rgb(${bgColor2})`,
        dataThemeMode: 'dark',
        dataMenuStyles: localStorage.getItem('rixzomenu') ? localStorage.getItem('rixzomenu') : 'dark',
        dataHeaderStyles: localStorage.getItem('rixzoheader') ? localStorage.getItem('rixzoheader') : 'dark',
        gray: 'rgba(255,255,255,0.1)',
    };

    setState(newState);
    console.log(newState.dataMenuStyles)
    localStorage.setItem('bodyBg', bgColor1);
    localStorage.setItem('bodyBg2', bgColor2);
    localStorage.setItem('lightRgb', bgColor2);
    localStorage.setItem('formControlBg', ` rgb(${bgColor2}`);
    localStorage.setItem('inputBorder', `rgba(255,255,255,0.1)`);
    localStorage.setItem('gray', `rgba(255,255,255,0.1)`);
    // localStorage.removeItem('rixzoheader');
    // localStorage.setItem('rixzomenu', newState.dataMenuStyles);
    // localStorage.getItem("rixzomenu") ? localStorage.getItem("rixzomenu") : localStorage.setItem('rixzomenu', newState.dataMenuStyles);
    // localStorage.getItem("rixzoheader") ? localStorage.getItem("rixzoheader") : localStorage.setItem('rixzoheader', newState.dataHeaderStyles);
    localStorage.removeItem("rixzolightTheme");
    localStorage.removeItem("rixzodarkTheme");

};

// color pickers 
const ColorPicker = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className='color-picker-input'>
            <input type="color" {...props} />
        </div>
    )
}

const hexToRgb = (hex: string) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    } : null
}

export const ThemePrimaryColor = () => {
    const [color, updateColor] = useState("#FFFFFF");
    const [rgb, setRgb] = useState<{ colorPrimaryRgb: string }>({ colorPrimaryRgb: "" });

    const handleInput = (e: { target: { value: any; }; }) => {
        const color = e.target.value;
        let { r, g, b }:any = hexToRgb(color);

        if (color !== updateColor) {
            updateColor(color);
        }

        if (rgb.colorPrimaryRgb !== `${r}, ${g}, ${b}`) {
            const newState = {
                colorPrimaryRgb: `${r}, ${g}, ${b}`,
            };
            setState(newState);
            localStorage.setItem("dynamiccolor", `${r}, ${g}, ${b}`);
        }
    };

    return (
        <div className='Themeprimarycolor theme-container-primary pickr-container-primary'>
            <ColorPicker onChange={handleInput} value={color} />
        </div>
    );
};

// color picker for background colors 
export const ThemeBackgroundColor = () => {
    const [state, updateState] = useState('#FFFFFF');

    const handleInput = (e:any) => {
        let { r, g, b }:any = hexToRgb(e.target.value);
        updateState(e.target.value);
        const newState = {
            bodyBg: `${r + 14}, ${g + 14}, ${b + 14}`,
            bodyBg2: `${r}, ${g}, ${b}`,
            inputBorder: "rgba(255,255,255,0.1)",
            lightRgb: `${r + 5}, ${g + 5}, ${b + 5}`,
            formControlBg: `rgb(${r}, ${g}, ${b})`,
            dataThemeMode: "dark",
            dataHeaderStyles: "dark",
            dataMenuStyles: "dark",
            gray: `rgb(${r}, ${g}, ${b})`
        }
        setState(newState);

        localStorage.setItem("bodyBg", `${r}, ${g}, ${b}`);
        localStorage.setItem("bodyBg2", `${r + 14}, ${g + 14}, ${b + 14}`);
        localStorage.setItem("lightRgb", `${r + 5}, ${g + 5}, ${b + 5}`);
        localStorage.setItem("formControlBg", `rgb(${r}, ${g}, ${b})`);
        localStorage.removeItem("rixzomenu");
        localStorage.removeItem("rixzoheader");
        localStorage.removeItem("rixzolightTheme");
        localStorage.removeItem("rixzodarkTheme");
    }

    return (
        <div className="Themebackgroundcolor">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    )

}

export const setBgImage = (bgImageNumber: number) => {
    const bgImgKey = `bgimg${bgImageNumber}`;

    const newState = {
        bgImg: bgImgKey
    };

    setState(newState);

    for (let i = 1; i <= 5; i++) {
        if (i === bgImageNumber) {
            localStorage.setItem(`bgimage${i}`, bgImgKey);
        } else {
            localStorage.removeItem(`bgimage${i}`);
        }
    }
};

export const Reset = () => {
    const newState = {
        lang: "en",
        dir: "ltr",
        dataThemeMode: "light",
        dataMenuStyles: "dark",
        dataNavLayout: "vertical",
        dataHeaderStyles: "light",
        dataVerticalStyle: "overlay",
        toggled: "",
        dataNavStyle: "",
        horStyle: "",
        dataPageStyle: "regular",
        dataWidth: "fullwidth",
        dataMenuPosition: "fixed",
        dataHeaderPosition: "fixed",
        iconOverlay: "",
        colorPrimaryRgb: "",
        bodyBg: "",
        bodyBg2: "",
        inputBorder: "",
        lightRgb: "",
        formControlBg: "",
        gray: "",
        bgImg: "",
        loader: "disable",
        iconText: "",
        body: {
            class: ""
        }
    };

    setState(newState);
    localStorage.clear()

    const icon = switcherDoucmentIdSelector('switcher-default-menu') as HTMLInputElement;
    if (icon) {
        icon.checked = true;
    }
};

export const Reset1 = () => {
    const newState = {
        lang: "en",
        dir: "ltr",
        dataThemeMode: "light",
        dataMenuStyles: "",
        dataNavLayout: "horizontal",
        toggled: "",
        dataNavStyle: "menu-click",
        horStyle: "",
        dataMenuPosition: "fixed",
        iconOverlay: "",
        colorPrimaryRgb: "",
        bodyBg: "",
        bodyBg2: "",
        inputBorder: "",
        lightRgb: "",
        formControlBg: "",
        gray: "",
        bgImg: "",
        loader: "disable",
        iconText: "",
        body: {
            class: ""
        }
    };

    setState(newState);
    localStorage.clear()

    const icon = switcherDoucmentIdSelector("switcher-default-menu") as HTMLInputElement;
    if (icon) {
        icon.checked = true;
    }
};

export const LocalStorageBackup = (setpageloading: (arg0: boolean) => void) => {
    (localStorage.rixzodarkTheme) ? updateTheme('dark', true) : '';
    (localStorage.rixzolightTheme) ? updateTheme('light', true) : '';
    (localStorage.rixzortl) ? setDirection('rtl') : '';
    (localStorage.rixzoregular) ? setPageStyle('regular') : '';
    (localStorage.rixzoclassic) ? setPageStyle('classic') : '';
    (localStorage.rixzomodern) ? setPageStyle('modern') : '';
    (localStorage.rixzofullwidth) ? setLayout('fullwidth') : '';
    (localStorage.rixzoboxed) ? setLayout('boxed') : '';
    (localStorage.rixzomenufixed) ? setMenuPosition('fixed') : '';
    (localStorage.rixzomenuscrollable) ? setMenuPosition('scrollable') : '';
    (localStorage.rixzoheaderfixed) ? setHeaderPosition('fixed') : '';
    (localStorage.rixzoheaderscrollable) ? setHeaderPosition('scrollable') : '';
    (localStorage.bgimage1) ? setBgImage(1) : '';
    (localStorage.bgimage2) ? setBgImage(2) : '';
    (localStorage.bgimage3) ? setBgImage(3) : '';
    (localStorage.bgimage4) ? setBgImage(4) : '';
    (localStorage.bgimage5) ? setBgImage(5) : '';
    (localStorage.rixzonavstyles === "menu-click") ? updateNavStyle('menu-click', 'menu-click-closed') : '';
    (localStorage.rixzonavstyles === "menu-hover") ? updateNavStyle('menu-hover', 'menu-hover-closed') : '';
    (localStorage.rixzonavstyles === "icon-click") ? updateNavStyle('icon-click', 'icon-click-closed') : '';
    (localStorage.rixzonavstyles === "icon-hover") ? updateNavStyle('icon-hover', 'icon-hover-closed') : '';
    (localStorage.rixzoLayout == 'horizontal') && updateLayout('horizontal');

    switch (localStorage.rixzomenu) {
        case 'light':
            setMenuStyle('light');
            break;
        case 'dark':
            localStorage.getItem('rixzomenu') ? localStorage.getItem('rixzomenu') : setMenuStyle('dark');
            break;
        case 'color':
            setMenuStyle('color');
            break;
        case 'gradient':
            setMenuStyle('gradient');
            break;
        case 'transparent':
            setMenuStyle('transparent');
            break;
        default:
            break;
    }

    switch (localStorage.rixzoheader) {
        case 'light':
            setHeaderStyle('light');
            break;
        case 'dark':
            setHeaderStyle('dark');
            break;
        case 'color':
            setHeaderStyle('color');
            break;
        case 'gradient':
            setHeaderStyle('gradient');
            break;
        case 'transparent':
            setHeaderStyle('transparent');
            break;
        default:
            break;
    }

    switch (localStorage.primaryRGB) {
        case '171, 125, 241':
            setPrimaryColor('171, 125, 241');
            break;
        case '69, 184, 224':
            setPrimaryColor('69, 184, 224');
            break;
        case '231, 105, 182':
            setPrimaryColor('231, 105, 182');
            break;
        case '26, 139, 114':
            setPrimaryColor('26, 139, 114');
            break;
        case '10, 106, 169':
            setPrimaryColor('10, 106, 169');
            break;
        default:
            break;
    }

    switch (localStorage.bodyBg) {
        case '70, 40, 115':
            updateBackgroundColor('70, 40, 115', '84, 54, 129');
            break;
        case '32, 87, 105':
            updateBackgroundColor('32, 87, 105', '46, 101, 119');
            break;
        case '105, 40, 83':
            updateBackgroundColor('105, 40, 83', '119, 54, 97');
            break;
        case '0, 56, 51':
            updateBackgroundColor('0, 56, 51', '14, 70, 65');
            break;
        case '5, 53, 100':
            updateBackgroundColor('5, 53, 100', '19, 67, 114');
            break;
        default:
            break;
    }

    if (localStorage.dynamiccolor) {
        const dynamiccolor = localStorage.getItem('dynamiccolor')
        const newState = {
            colorPrimaryRgb: dynamiccolor,
        }
        setState(newState);
    }
    if (localStorage.bodyBg) {

        const newState = {
            bodyBg: localStorage.bodyBg,
            bodyBg2: localStorage.bodyBg2,
            dataThemeMode: "dark",
            dataHeaderStyles: localStorage.rixzoheader ? localStorage.rixzoheader : localStorage.rixzodarkTheme ? "dark" : "dark",
            lightRgb: localStorage.lightRgb,
            formControlBg: localStorage.formControlBg,
            inputBorder: localStorage.inputBorder,
            gray: localStorage.gray,
            dataMenuStyles: localStorage.rixzomenu ? localStorage.rixzomenu : localStorage.rixzodarkTheme ? "dark" : "dark"
        }
        setState(newState)

    }

    if (localStorage.rixzoverticalstyles) {
        let verticalstyles = localStorage.getItem('rixzoverticalstyles');

        switch (verticalstyles) {
            case 'default':
                let defaultId = switcherDoucmentIdSelector('switcher-default-menu') as HTMLInputElement;
                if (defaultId) {
                    defaultId.checked = true;
                }
                DefaultMenu();
                break;

            case 'closed':
                let closedId = switcherDoucmentIdSelector('switcher-icontext-menu') as HTMLInputElement;
                if (closedId) {
                    closedId.checked = true;
                };
                ClosedMenu();
                break;

            case 'icontext':
                let icontextId = switcherDoucmentIdSelector('switcher-icontext-menu') as HTMLInputElement;
                if (icontextId) {
                    icontextId.checked = true;
                };
                IconText();
                break;

            case 'overlay':
                let overlayId = switcherDoucmentIdSelector('switcher-detached') as HTMLInputElement;
                if (overlayId) {
                    overlayId.checked = true;
                };
                iconOverlayFn();
                break;

            case 'detached':
                let detachedId = switcherDoucmentIdSelector('switcher-detached') as HTMLInputElement;
                if (detachedId) {
                    detachedId.checked = true;
                };
                DetachedFn();
                break;

            case 'doublemenu':
                let doubleId = switcherDoucmentIdSelector('switcher-double-menu') as HTMLInputElement;
                if (doubleId) {
                    doubleId.checked = true;
                };
                DoubletFn();
                break;

            default:
                let defaultbutton = switcherDoucmentIdSelector('switcher-default-menu') as HTMLInputElement;
                if (defaultbutton) {
                    defaultbutton.checked = true;
                }
                break;
        }

    }

    setpageloading(true)
};

