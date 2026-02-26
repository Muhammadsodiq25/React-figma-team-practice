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
import supportImg from "../assets/support-img.png"
export const logo = sidebarLogo
export const support_img = supportImg

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
        to: 'myprofile'
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

// Dashboard
import dashboardCalendarImg from "../assets/dashboard-calendar-img.png"
import dashboardWorkLoadCartImg1 from "../assets/dashboard-workload-cart-img1.png"
import dashboardWorkLoadCartImg2 from "../assets/dashboard-workload-cart-img2.png"
import dashboardWorkLoadCartImg3 from "../assets/dashboard-workload-cart-img3.png"
import dashboardWorkLoadCartImg4 from "../assets/dashboard-workload-cart-img4.png"
import dashboardWorkLoadCartImg5 from "../assets/dashboard-workload-cart-img5.png"
import dashboardWorkLoadCartImg6 from "../assets/dashboard-workload-cart-img6.png"
import projectCartImg from "../assets/dashboard-projects-cart-img.png"
import projectCartImg2 from "../assets/dashboard-projects-cart-img2.png"
import projectCartImg3 from "../assets/dashboard-projects-cart-img3.png"
import projectsCartAssigneesImg from "../assets/dashboard-projects-cart-assignees-img.png"
import dashboardStreamUserimg1 from "../assets/dashboard-workload-cart-img8.png"
import streamUserIcon1 from "../assets/dashboard-stream-icon1.png"
import streamUserIcon2 from "../assets/dashboard-stream-icon2.png"

export const dashboard__title = 'Dashboard'
export const calendarImg = dashboardCalendarImg

export const dashboardWorkload = [
    {
        img: dashboardWorkLoadCartImg1,
        title: 'Shawn Stone',
        work: 'UI/UX Designer',
        level: 'Middle'
    },
    {
        img: dashboardWorkLoadCartImg2,
        title: 'Randy Delgado',
        work: 'UI/UX Designer',
        level: 'Junior'
    },
    {
        img: dashboardWorkLoadCartImg3,
        title: 'Emily Tyler',
        work: 'Copywriter',
        level: 'Middle'
    },
    {
        img: dashboardWorkLoadCartImg4,
        title: 'Louis Castro',
        work: 'Copywriter',
        level: 'Senior'
    },
    {
        img: dashboardWorkLoadCartImg5,
        title: 'Blake Silva',
        work: 'IOS Developer',
        level: 'Senior'
    },
    {
        img: dashboardWorkLoadCartImg6,
        title: 'Joel Phillips',
        work: 'UI/UX Designer',
        level: 'Middle'
    },
]

export const dashboardWorkloadTopTitle = {
    title: 'Workload',
    btn: 'View all >'
}

export const projectsTop = {
    title: 'Projects',
    btn: 'View all >'
}

export const projectsCont = [
    {
        img: projectCartImg,
        title1: 'Medical App (iOS native)',
        id: 'PN0001265',
        created: 'Created Sep 12, 2020',
        difficulty: 'Medium',
        difficultyCol: '#FFBD21',
        title2: 'Project Data',
        tasks: '34',
        activeTasks: '13',
        assignees: projectsCartAssigneesImg,
    },
    {
        img: projectCartImg2,
        title1: 'Food Delivery Service',
        id: 'PN0001221',
        created: 'Created Sep 10, 2020',
        difficultyCol: '#FFBD21',
        difficulty: 'Medium',
        title2: 'Project Data',
        tasks: '50',
        activeTasks: '24',
        assignees: projectsCartAssigneesImg,
    },
    {
        img: projectCartImg3,
        title1: 'Food Delivery Service',
        id: 'PN0001290',
        created: 'Created May 28, 2020',
        difficultyCol: '#0AC947',
        difficulty: 'Low',
        title2: 'Project Data',
        tasks: '23',
        activeTasks: '20',
        assignees: projectsCartAssigneesImg,
    },
]

export const dashboardEvents = {
    title: 'Nearest Events',
    btn: 'View all >',
}

export const events__cont = [
    {
        title: 'Presentation of the new department',
        date: 'Today | 5:00 PM',
        time: '4h',
        lineCol: '#3F8CFF'
    },
    {
        title: 'Anna’s Birthday',
        date: 'Today | 6:00 PM',
        time: '4h',
        lineCol: '#DE92EB'
    },
    {
        title: 'Ray’s Birthday',
        date: 'Tomorrow | 2:00 PM',
        time: '4h',
        lineCol: '#DE92EB'
    },
]

export const streamTitle = 'Activity Stream'

export const streamCont = [
    {
        user: 'Oscar Holloway',
        job: 'UI/UX Designer',
        userImg: dashboardStreamUserimg1,
        works: [
            {
                icon: streamUserIcon1,
                text: ' Updated the status of Mind Map task to In Progress',
                iconWidth: 40
            },
            {
                icon: streamUserIcon2,
                text: ' Attached files to the task',
            },
        ]
    },
    {
        user: 'Oscar Holloway',
        job: 'UI/UX Designer',
        userImg: dashboardWorkLoadCartImg3,
        works: [
            {
                icon: streamUserIcon1,
                text: ' Updated the status of Mind Map task to In Progress',
                iconWidth: 40
            },
        ]
    },
]

// Nearest Events
import nearestCartIcon1 from "../assets/nearest-events-cart-icon1.png"

export const backto_btn = {
    text: '← Back to Dashboard'
}

export const nearestTop = {
    title: 'Nearest Events',
    btn: '+ Add Event'
}

export const nearestCont = [
    {
        icon: nearestCartIcon1,
        title: 'Presentation of the new department',
        date: 'Today | 6:00 PM',
        time: '4h'
    },
    {
        icon: nearestCartIcon1,
        title: 'Anna’s Birthday',
        date: 'Today | 5:00 PM',
        time: '2h'
    },
    {
        icon: nearestCartIcon1,
        title: 'Meeting with Development Team',
        date: 'Tomorrow | 5:00 PM',
        time: '4h'
    },
    {
        icon: nearestCartIcon1,
        title: 'Ray’s Birthday',
        date: 'Tomorrow | 2:00 PM',
        time: '1h 30m'
    },
    {
        icon: nearestCartIcon1,
        title: 'Meeting with CEO',
        date: 'Sep 14 | 5:00 PM',
        time: '1h'
    },
    {
        icon: nearestCartIcon1,
        title: 'Movie night (Tenet)',
        date: 'Sep 15 | 5:00 PM',
        time: '3h'
    },
    {
        icon: nearestCartIcon1,
        title: 'Lucas’s Birthday',
        date: 'Sep 29 | 5:30 PM',
        time: '2h'
    },
    {
        icon: nearestCartIcon1,
        title: 'Meeting with CTO',
        date: 'Sep 30 | 12:00',
        time: '1h'
    },
]