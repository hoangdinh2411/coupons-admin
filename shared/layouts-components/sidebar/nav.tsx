
const Dashboardicon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"></path><path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3"></path></svg>

const Erroricon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-4h-2V7h2v6z" opacity=".3"></path><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"></path></svg>

const NestedmenuIcon = <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" height="24px" viewBox="0 0 24 24" width="24px" fill="#5f6368"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".3"></path><path d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z"></path></svg>

export const MENUITEMS: any = [

    {
        menutitle: "main",
    },

    {
        title: "Dashboards", icon: Dashboardicon, type: "sub", active: false, dirchange: false, children: [
            { path: "/dashboards/sales", type: "link", active: false, selected: false, dirchange: false, title: "Sales" },

        ]
    },
    {
        icon: Erroricon, title: "Error", type: "sub", active: false, selected: false, dirchange: false, children: [

            { path: "/authentication/error/404-error", type: "link", active: false, selected: false, dirchange: false, title: "404-Error" },
        ]
    },

    {
        icon: NestedmenuIcon, title: "Nested Menu", selected: false, active: false, dirchange: false, type: "sub", children: [
            { path: "", title: "Nested-1", type: "empty", active: false, selected: false, dirchange: false },

            {
                title: "Nested-2", type: "sub", active: false, selected: false, dirchange: false, children: [
                    { path: "", type: "empty", active: false, selected: false, dirchange: false, title: "Nested-2-1" },
                    { path: "", type: "empty", ctive: false, selected: false, dirchange: false, title: "Nested-2-2" },
                    { path: "", type: "empty", active: false, selected: false, dirchange: false, title: "Nested-2-3" },
                ],
            },
        ],
    },
]