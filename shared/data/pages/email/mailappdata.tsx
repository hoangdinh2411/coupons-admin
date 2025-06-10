
interface Countryoptions1 {
    value: string;
    label: string;
}
export const Maildata: Countryoptions1[] = [
    { value: 'jay@gmail.com', label: 'jay@gmail.com' },
    { value: 'kia@gmail.com', label: 'kia@gmail.com' },
    { value: 'don@gmail.com', label: 'don@gmail.com' },
    { value: 'kimo@gmail.com', label: 'kimo@gmail.com' },
]

interface mail {
    id: number;
    icon: string;
    text1: string;
    text2: string;
    class: string;
    class1: string;
}
export const Mails: mail[] = [
    { id: 1, icon: 'mail', text1: 'All Mails', text2: '2,142', class: 'badge bg-warning rounded-pill', class1: 'active' },
    { id: 2, icon: 'inbox', text1: 'Inbox', text2: '12', class: 'badge bg-success rounded-pill', class1: '' },
    { id: 3, icon: 'send', text1: 'Sent', text2: '', class: '', class1: '' },
    { id: 4, icon: 'notes', text1: 'Drafts', text2: '', class: '', class1: '' },
    { id: 5, icon: 'alert-circle', text1: 'Spam', text2: '6', class: 'badge bg-info rounded-pill', class1: '' },
    { id: 6, icon: 'archive', text1: 'Archive', text2: '', class: '', class1: '' },
    { id: 7, icon: 'bookmark', text1: 'Important', text2: '', class: '', class1: '' },
    { id: 8, icon: 'trash', text1: 'Trash', text2: '', class: '', class1: '' },
    { id: 9, icon: 'star', text1: 'Starred', text2: '05', class: 'badge bg-warning rounded-pill', class1: '' }
]

interface mail1 {
    id: number;
    checked: boolean;
    img: string;
    active: string;
    name: string;
    title: string;
    text: string;
    time: string;
    icon: string;
    star: string;
    badge: string;
    badgetxt?: string;
    bordercls: string;
    attachements: string;
    docs: string;
    color: string;
}
export const Mailsapp: mail1[] = [
    { id: 1, checked: false, img: "../../../assets/images/faces/8.jpg", active: 'online', name: 'Jonathan Carter', title: 'Project Update', text: " Here's the latest update on the project. We have completed the initial phase and are moving into development. Please review the attached documents for details. ", time: ' 9:45 PM, Yesterday ', icon: 'ri-attachment-2 align-middle fs-12', star: 'true', badge: '', badgetxt: '', bordercls: '', attachements: '2', docs: '0', color: 'danger' },
    { id: 2, checked: false, img: "../../../assets/images/faces/7.jpg", active: 'online', name: 'Emily Green', title: 'Budget Approval', text: " We need your approval on the updated budget proposal. Please find the details in the attached files and let us know if everything looks good. ", time: '03:15PM Today', icon: '', star: '', badge: '', badgetxt: '', bordercls: 'active ', attachements: '4', docs: '1', color: 'warning' },
    { id: 3, checked: true, img: "../../../assets/images/faces/9.jpg", active: 'offline', name: ' Michael Stone ', title: 'Sales Report Review', text: " Please review the attached sales report for the last quarter. Let me know if you need any additional details or adjustments. ", time: '04:20PM, Today', icon: '', star: '', badge: 'badge bg-warning ms-2', bordercls: '', attachements: '3', docs: '1', color: 'danger' },
    { id: 4, checked: false, img: "../../../assets/images/faces/11.jpg", active: 'offline', name: 'Daniel Clark', title: 'Team Meeting Notes', text: " Here are the meeting notes from today's team session. Please review them and let me know if I missed anything important. ", time: '06:30PM, Yesterday', icon: '', star: '', badge: 'badge bg-primary1 ms-2', bordercls: '', attachements: '2', docs: '1', color: 'danger' },
    { id: 5, checked: true, img: "../../../assets/images/faces/12.jpg", active: 'offline', name: ' Laura Davis ', title: 'Team Meeting Notes', text: ' Here are the meeting notes from todays team session. Please review them and let me know if I missed anything important. ', time: '06:30PM, Yesterday', icon: '', star: 'true', badge: '', badgetxt: '', bordercls: '', attachements: '1', docs: '1', color: 'danger' },
    { id: 6, checked: false, img: "../../../assets/images/faces/13.jpg", active: 'offline', name: ' Alex Turner ', title: 'Product Launch Details', text: ' Please review the final details for the product launch next week. Let me know if there are any last-minute changes we should address. ', time: '08:45AM, Today', icon: '', star: 'true', badge: 'badge bg-primary3 ms-2', bordercls: '', attachements: '3', docs: '2', color: 'danger' },
    { id: 7, checked: true, img: "../../../assets/images/faces/14.jpg", active: 'offline', name: ' Rachel Adams ', title: 'Client Contract Renewal', text: ' The client has sent over the revised contract for renewal. Please review and provide feedback before we proceed with the final approval. ', time: '02:30PM, Yesterday', icon: '', star: '', badge: '', badgetxt: '', bordercls: '', attachements: '1', docs: '1', color: 'danger' }
]


