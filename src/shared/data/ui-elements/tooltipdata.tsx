
//Tooltip Directions
interface tooltipdirection1 {
    id:number;
    class:string;
    text:string;

}
export const tooltipdirection:tooltipdirection1[] = [
    {id:1, class:"", text:" Tooltip on top"},
    {id:2, class:"[--placement:right]", text:" Tooltip on right"},
    {id:3, class:"[--placement:bottom]", text:" Tooltip on bottom"},
    {id:4, class:"[--placement:left]", text:" Tooltip on left"},
]

//Colored Tooltips
interface colortooltip2 {
    id:number;
    color:string;
    text:string;
    class:string;
    class1:string;
    class2:string;
}
export const colortooltip:colortooltip2[] = [
    {id:1, color:"primary-full", text:"Primary Tooltip", class:"[--placement:top]", class1:"primary", class2:"white"},
    {id:2, color:"secondary-full", text:"Secondary Tooltip", class:"[--placement:right]", class1:"secondary", class2:"white"},
    {id:3, color:"warning-full", text:"Warning Tooltip", class:"[--placement:bottom]", class1:"warning", class2:"white"},
    {id:4, color:"info-full", text:"Info Tooltip", class:"[--placement:left]", class1:"info", class2:"white"},
    {id:5, color:"success-full", text:"Success Tooltip", class:"[--placement:top]", class1:"success", class2:"white"},
    {id:6, color:"danger-full", text:"Danger Tooltip", class:"[--placement:bottom]", class1:"danger", class2:"white"},
    {id:7, color:"light", text:"Light Tooltip", class:"[--placement:bottom]", class1:"light", class2:"black"},
    {id:8, color:"dark", text:"Dark Tooltip", class:"[--placement:bottom]", class1:"black", class2:"white"},
]