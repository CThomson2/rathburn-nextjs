
//Default alerts 

interface defaultalerts1 {
    id:number;
    color:string;
    text:string;
}
export const defaultalerts:defaultalerts1[] = [
    {id:1, color:"primary", text:"primary"},
    {id:2, color:"secondary",text:"secondary"},
    {id:3, color:"success",text:"success"},
    {id:4, color:"danger",text:"danger"},
    {id:5, color:"warning",text:"warning"},
    {id:6, color:"info",text:"info"},
    {id:7, color:"light",text:"light"},
    {id:8, color:"dark",text:"dark"},
]

//Solid Colored Alerts

interface solidalert1 {
    id:number;
    color:string;
    dismiss:string;
}

export const solidalert:solidalert1[] = [
    {id:1, color:"primary", dismiss:"solidalert1"},
    {id:2, color:"secondary", dismiss:"solidalert2"},
    {id:3, color:"success", dismiss:"solidalert3"},
    {id:4, color:"danger", dismiss:"solidalert4"},
    {id:5, color:"warning", dismiss:"solidalert5"},
    {id:6, color:"info", dismiss:"solidalert6"},
    {id:7, color:"light", dismiss:"solidalert7"},
    {id:8, color:"dark", dismiss:"solidalert8"},
]

//Outline Colored Alerts

interface solidalert2 {
    id:number;
    color:string;
    dismiss:string;
}

export const solidalert1:solidalert2[] = [
    {id:1, color:"primary", dismiss:'alert1'},
    {id:2, color:"secondary", dismiss:'alert2'},
    {id:3, color:"success", dismiss:'alert3'},
    {id:4, color:"danger", dismiss:'alert4'},
    {id:5, color:"warning", dismiss:'alert5'},
    {id:6, color:"info", dismiss:'alert6'},
    {id:7, color:"light", dismiss:'alert7'},
    {id:8, color:"dark", dismiss:'alert8'},
]

//Solid Alerts With Different shadows

interface shadows1 {
    id:number;
    color:string;
    text:string;
    dismiss:string;
}

export const shadows:shadows1[] = [
    {id:1, color:"primary", text:'small', dismiss:'shadow1'},
    {id:2, color:"primary", text:'normal', dismiss:'shadow2'},
    {id:3, color:"primary", text:'large', dismiss:'shadow3'},
    {id:4, color:"secondary", text:'small', dismiss:'shadow4'},
    {id:5, color:"secondary", text:'normal', dismiss:'shadow5'},
    {id:6, color:"secondary", text:'large', dismiss:'shadow6'},
]

//Rounded Solid Alerts

interface roundedalerts1 {
    id:number;
    color:string;
    dismiss:string;
}

export const roundedalerts:roundedalerts1[] = [
    {id:1, color:"primary", dismiss:"roundedalert1"},
    {id:2, color:"secondary", dismiss:"roundedalert2"},
    {id:3, color:"warning", dismiss:"roundedalert3"},
    {id:4, color:"danger", dismiss:"roundedalert4"},
]

//Alerts with icons 



const svg1 =  <svg className="sm:flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg"
height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
<path d="M0 0h24v24H0V0z" fill="none" />
<path
    d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
</svg>

const svg2 =<svg className="sm:flex-shrink-0 me-2 fill-success" xmlns="http://www.w3.org/2000/svg"
height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
<path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
<path
    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
</svg>

const svg3 = <svg className="sm:flex-shrink-0 me-2 fill-warning" xmlns="http://www.w3.org/2000/svg"
enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24"
width="1.5rem" fill="#000000">
<g>
    <rect fill="none" height="24" width="24" />
</g>
<g>
    <g>
        <g>
            <path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
            <polygon points="13,16 11,16 11,18 13,18" />
            <polygon points="13,10 11,10 11,15 13,15" />
        </g>
    </g>
</g>
</svg>

const svg4 =  <svg className="sm:flex-shrink-0 me-2 fill-danger" xmlns="http://www.w3.org/2000/svg"
                                    enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24"
                                    width="1.5rem" fill="#000000">
                                    <g>
                                        <rect fill="none" height="24" width="24" />
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                                <rect height="6" width="2" x="11" y="7" />
                                                <rect height="2" width="2" x="11" y="15" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>

export const iconalerts = [
    {id:1, icon:svg1, color:"primary"},
    {id:2, icon:svg2, color:"success"},
    {id:3, icon:svg3, color:"warning"},
    {id:4, icon:svg4, color:"danger"},
]