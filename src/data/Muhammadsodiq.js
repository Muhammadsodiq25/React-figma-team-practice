import sidebarLogo from "../assets/sidebar-logo.png"
import sidebarLinkImg1 from "../assets/sidebar-link-img1.png"
import sidebarLinkImg2 from "../assets/sidebar-link-img2.png"
import sidebarLinkImg3 from "../assets/sidebar-link-img3.png"
import sidebarLinkImg4 from "../assets/sidebar-link-img4.png"
import sidebarLinkImg5 from "../assets/sidebar-link-img5.png"
import sidebarLinkImg6 from "../assets/sidebar-link-img6.png"
import sidebarLinkImg7 from "../assets/sidebar-link-img7.png"
import supportLogo from "../assets/sidebar-support-img.png"
import supportBtnLogo from "../assets/sidebar-support-btn-img.png"
import logoutImg from "../assets/sidebar-logout-img.png"
export const logo = sidebarLogo

export const link = [
    {
        img: sidebarLinkImg1,
        text: 'Dashboard',
        to: '/'
    },
    {
        img: sidebarLinkImg2,
        text: 'Projects',
        to: 'projects'
    },
    {
        img: sidebarLinkImg3,
        text: 'Calendar',
        to: 'calendar'
    },
    {
        img: sidebarLinkImg4,
        text: 'Vacations',
        to: 'vacations'
    },
    {
        img: sidebarLinkImg5,
        text: 'Employees',
        to: 'employees'
    },
    {
        img: sidebarLinkImg6,
        text: 'Messenger',
        to: 'messenger'
    },
    {
        img: sidebarLinkImg7,
        text: 'Info Portal',
        to: 'info'
    },
]

export const support = {
    img: supportLogo,
    btn: 'Support',
    btnImg: supportBtnLogo
}

export const logout = {
    img: logoutImg,
    text: 'Logout'
}