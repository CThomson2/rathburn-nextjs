"use client"
import { ChangeEvent } from "react";

interface Mailsettingslist1 {
    id:number;
    class:string;
    text1:string;
    text2:string;
}
export const Mailsettingslist:Mailsettingslist1[] =[
    {id:1, class:'bi bi-phone me-2 fs-16 align-middle text-base', text1:'Mobile-LG-1023', text2:'Manchester, UK-Nov 30, 04:45PM'},
    {id:2, class:'bi bi-laptop me-2 fs-16 align-middle text-base', text1:'Lenovo-1291203', text2:'England, UK-Aug 12, 12:25PM'},
    {id:3, class:'bi bi-laptop me-2 fs-16 align-middle text-base', text1:'Macbook-Suzika', text2:'Brightoon, UK-Jul 18, 8:34AM'},
    {id:4, class:'bi bi-pc-display-horizontal me-2 fs-16 align-middle text-base', text1:'Apple-Desktop', text2:'Darlington, UK-Jan 14, 11:14AM'}
];

//selectdata
interface Languageoptions1 {
    value:string;
    label:string;
}
export const Languageoptions:Languageoptions1[]=[
    {value:'English', label:'English'},
    {value:'French', label:'French'},
    {value:'Arabic', label:'Arabic'},
    {value:'Hindi', label:'Hindi'},
  
];

interface Countryoptions1 {
    value:string;
    label:string;
}

export const Countryoptions:Countryoptions1[]=[
    {value:'Usa', label:'Usa'},
    {value:'Australia', label:'Australia'},
    {value:'Dubai', label:'Dubai'},
  
];

interface Maximumoptions1 {
    value:string;
    label:string;
}

export const Maximumoptions:Maximumoptions1[]=[
    {value:'10', label:'10'},
    {value:'50', label:'50'},
    {value:'100', label:'100'},
    {value:'200', label:'200'},
  
];

interface MaxLimitoptions1 {
    value:string;
    label:string;
}

export const MaxLimitoptions:MaxLimitoptions1[]=[
    {value:'3 Attemps', label:'3 Attemps'},
    {value:'5 Attemps', label:'5 Attemps'},
    {value:'10 Attemps', label:'10 Attemps'},
    {value:'20 Attemps', label:'20 Attemps'},
  
];

interface Accountoptions1 {
    value:string;
    label:string;
}

export const Accountoptions:Accountoptions1[]=[
    {value:'1 Day', label:'1 Day'},
    {value:'1 Hour', label:'1 Hour'},
    {value:'1 Month', label:'1 Month'},
    {value:'1 Year', label:'1 Year'},
  
];

export class ProfileService {

    image = "../../assets/img/png-images/2.png";

    static image :any = null;
    
    static handleChange(ele: ChangeEvent<HTMLInputElement>) {
        const [file]:any = ele.target.files;

        if (file) {
            this.image = URL.createObjectURL(file);
            this.returnImage();
        }
    }

    static returnImage() {
        return this.image;
    }

    static handleChangeUrl(link: string | null) {
        this.image = link;
        this.returnImage();
    }

}