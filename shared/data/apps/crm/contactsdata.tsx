
//Contacts

interface loopingdata {
    id: number;
    src1: string;
    src2: string;
    name: string;
    mail: string;
    cell: string;
    text1: string;
    text2: string;
    text3: string;
    score: string;
    time: string;
    text4: string;
    color1: string;
    color2: string;
    class1: string;
    class2: string;
}

export const Loopingdata: loopingdata[] = [
    { id: 1, src1: "../../../assets/images/faces/4.jpg", src2: "../../../assets/images/company-logos/1.png", name: 'Lisa Convay', time: '24, Jul 2023 - 4:45PM', score: '258', mail: 'lisaconvay2981@gmail.com', cell: '1678-28993-223 ', text1: 'Spruko Technologies', text2: 'Social Media', text3: 'New Lead', text4: 'Prospect', color1: 'primary/10', color2: 'primary/10', class1: 'primary', class2: 'primary' },
    { id: 2, src1: "../../../assets/images/faces/12.jpg", src2: "../../../assets/images/company-logos/3.png", name: 'Jacob Smith', time: '15, Jul 2023 - 11:45AM', score: '335', mail: 'jacobsmith289@gmail.com', cell: ' 8122-2342-4453', text1: 'Spice Infotech', text2: 'Direct mail', text3: 'Customer', text4: 'Hot Lead', color1: 'primary/10', color2: 'danger/10', class1: 'primary', class2: 'danger' },
    { id: 3, src1: "../../../assets/images/faces/14.jpg", src2: "../../../assets/images/company-logos/4.png", name: 'Jake Sully', time: '10, Aug 2023 - 3:25PM', score: '685', mail: 'jakesully789@gmail.com', cell: ' 1902-2001-3023', text1: 'Logitech ecostics', text2: 'Blog Articles', text3: 'Partner', text4: '', color1: 'success/10', color2: '', class1: 'success', class2: '' },
    { id: 4, src1: "../../../assets/images/faces/6.jpg", src2: "../../../assets/images/company-logos/5.png", name: 'Kiara Advain', time: '18, Aug 2023 - 10:10AM', score: '425', mail: 'kiaraadvain290@gmail.com', cell: ' 1603-2032-1123', text1: 'Initech Info', text2: 'Affiliates', text3: 'LostCustomer', text4: 'Influencer', color1: 'light', color2: 'secondary/10', class1: 'defaulttextcolor', class2: 'secondary' },
    { id: 5, src1: "../../../assets/images/faces/8.jpg", src2: "../../../assets/images/company-logos/6.png", name: 'Brenda Simpson', time: '19, Jul 2023 - 12:41PM', score: '516', mail: 'brendasimpson1993@gmail.com', cell: '1129-2302-1092 ', text1: 'Massive Dynamic', text2: 'Organic search', text3: 'Subscriber', text4: 'Partner', color1: 'pinkmain/10', color2: 'success/10', class1: 'pinkmain', class2: 'success' },
    { id: 6, src1: "../../../assets/images/faces/9.jpg", src2: "../../../assets/images/company-logos/7.png", name: 'Json Taylor', time: '14, Aug 2023 - 5:18PM', score: '127', mail: 'jsontaylor345@gmail.com', cell: ' 9923-2344-2003', text1: 'Globex Corporation', text2: 'Social media', text3: 'Hot Lead', text4: 'Referral', color1: 'danger/10', color2: 'info/10', class1: 'danger', class2: 'info' },
    { id: 7, src1: "../../../assets/images/faces/15.jpg", src2: "../../../assets/images/company-logos/8.png", name: 'Dwayne Jhonson', time: '12, Jun 2023 - 11:38AM', score: '368', mail: 'dwayenejhonson78@gmail.com', cell: '7891-2093-1994 ', text1: 'Acme Corporation', text2: 'Blog Articles', text3: 'Trial User', text4: 'Cold Lead', color1: 'warning/10', color2: 'purplemain/10', class1: 'warning', class2: 'purplemain' },
    { id: 8, src1: "../../../assets/images/faces/1.jpg", src2: "../../../assets/images/company-logos/9.png", name: 'Emiley Jackson', time: '19, May 2023 - 1:57PM', score: '563', mail: 'emileyjackson678@gmail.com', cell: '	1899-2993-1923 ', text1: 'Soylent Corp', text2: 'Organic search', text3: 'Influencer', text4: 'Partner', color1: 'success/10', color2: 'info/10', class1: 'success', class2: 'info' },
    { id: 9, src1: "../../../assets/images/faces/3.jpg", src2: "../../../assets/images/company-logos/10.png", name: 'Jessica Morris', time: '28, Jul 2023 - 9:31AM', score: '185', mail: 'jessicamorris289@gmail.com', cell: ' 1768-2332-4934 ', text1: 'Umbrella Corporation', text2: 'Affiliates', text3: 'New Lead', text4: 'Lost Customer', color1: 'primary/10', color2: 'light', class1: 'primary', class2: 'defaulttextcolor' },
    { id: 10, src1: "../../../assets/images/faces/9.jpg", src2: "../../../assets/images/company-logos/2.png", name: 'Michael Jeremy', time: '28, Jul 2023 - 9:31AM', score: '240', mail: 'michaeljeremy186@gmail.com', cell: '4788-7822-4786 ', text1: 'Hooli Technologies', text2: 'Direct mail', text3: 'New Lead', text4: 'Subscriber', color1: 'primary/10', color2: 'pinkmain/10', class1: 'primary', class2: 'pinkmain' }
];

interface data {
    value: string;
    label: string;
}
export const Data: data[] = [
    { value: 'Select Tag', label: 'Select Tag' },
    { value: 'New Lead', label: 'New Lead' },
    { value: 'Prospect', label: 'Prospect' },
    { value: 'Customer', label: 'Customer' },
    { value: 'Hot Lead', label: 'Hot Lead' },
    { value: 'Partner', label: 'Partner' },
    { value: 'LostCustomer', label: 'LostCustomer' },
    { value: 'Influencer', label: 'Influencer' },
    { value: 'Subscriber', label: 'Subscriber' }
];
interface data1 {
    value: string;
    label: string;
}
export const Data1: data1[] = [
    { value: 'Social Media', label: 'Social Media' },
    { value: 'Direct mail', label: 'Direct mail' },
    { value: 'Blog Articles', label: 'Blog Articles' },
    { value: 'Affiliates', label: 'Affiliates' },
    { value: 'Organic search', label: 'Organic search' }
];