
// Basic Progress

interface basicprogress1 {
    id:number;
    width:string;
    valuenow:string;
    class:string;
}
export const basicprogress:basicprogress1[] = [
    {id:1, width:"w-0", valuenow:"0", class:"mb-4"},
    {id:2, width:"w-1/4", valuenow:"25", class:"mb-4"},
    {id:3, width:"w-1/2", valuenow:"50", class:"mb-4"},
    {id:4, width:"w-3/4", valuenow:"75", class:"mb-4"},
    {id:5, width:"w-full", valuenow:"100", class:""},
]

//Different Colored Progress

interface colorprogress1 {
    id:number;
    color:string;
    valuenow:string;
    width:string;
    class:string;
}
export const colorprogress:colorprogress1[] = [
    {id:1, color:"secondary", valuenow:"20", width:"w-1/5", class:"mb-4"},
    {id:2, color:"warning", valuenow:"40", width:"w-2/5", class:"mb-4"},
    {id:3, color:"info",  valuenow:"60", width:"w-3/5", class:"mb-4"},
    {id:4, color:"success",  valuenow:"80", width:"w-4/5", class:"mb-4"},
    {id:5, color:"danger", valuenow:"100", width:"w-full", class:""},
]

//Striped Progress
interface stripe {
    id:number;
    valuenow:string;
    color:string;
    width:string;
    class:string;
}
export const stripped:stripe[] = [
{id:1, valuenow:"10", color:"", width:"w-[10%]", class:'mb-4'},
{id:2, valuenow:"25", color:"!bg-secondary", width:"w-1/4", class:'mb-4'},
{id:3, valuenow:"50", color:"!bg-success", width:"w-2/4", class:'mb-4'},
{id:4, valuenow:"75", color:"!bg-info", width:"w-3/4", class:'mb-4'},
{id:5, valuenow:"100", color:"!bg-warning", width:"w-full", class:''},
]

//Progress With Labels
interface Table {
    id:number;
    valuenow:string;
    color:string;
    width:string;
    class:string;
    class1:string;
}
export const lables:Table[] = [
    {id:1, valuenow:"10", color:"", width:"w-[10%]", class:"10%", class1:'mb-4'},
    {id:2, valuenow:"20", color:"!bg-secondary", width:"w-1/5", class:"20%", class1:'mb-4'},
    {id:3, valuenow:"40", color:"!bg-success", width:"w-2/5", class:"40%", class1:'mb-4'},
    {id:4, valuenow:"60", color:"!bg-info", width:"w-3/5", class:"60%", class1:'mb-4'},
    {id:5, valuenow:"80", color:"!bg-warning", width:"w-4/5", class:"80%", class1:''},
]

//Animated Stripped Progress
interface animate {
    id:number;
    class:string;
    valuenow:string;
    class1:string;
}
export const animated:animate[] = [
    {id:1, class:"progress-bar-striped progress-bar-animated w-[10%]", valuenow:"10", class1:'mb-4'},
    {id:2, class:"bg-secondary progress-bar-striped progress-bar-animated w-1/5", valuenow:"20", class1:'mb-4'},
    {id:3, class:"bg-success progress-bar-striped progress-bar-animated w-2/5", valuenow:"40", class1:'mb-4'},
    {id:4, class:"bg-info progress-bar-striped progress-bar-animated w-3/5", valuenow:"60", class1:'mb-4'},
    {id:5, class:"bg-warning progress-bar-striped progress-bar-animated w-4/5", valuenow:"80", class1:''},
]

//Gradient Progress
interface gradient {
    id:number;
    valuenow:string;
    color:string;
    width:string;
    class:string;
}
export const Gradient:gradient[] = [
    {id:1, valuenow:"10", color:"primary", width:"w-[10%]", class:'mb-4'},
    {id:2, valuenow:"20", color:"secondary", width:"w-1/5", class:'mb-4'},
    {id:3, valuenow:"40", color:"success", width:"w-2/5", class:'mb-4'},
    {id:4, valuenow:"60", color:"info", width:"w-3/5", class:'mb-4'},
    {id:5, valuenow:"80", color:"warning", width:"w-4/5", class:''},
]

//Custom Progress-4
interface custom {
    id:number;
    valuenow:string;
    color:string;
    width:string;
    class:string;
}
export const Custom:custom[] = [
    {id:1, valuenow:"10", color:"", width:"w-[10%]",  class:"mb-4"},
    {id:2, valuenow:"20", color:"secondary", width:"w-1/5",  class:"mb-4"},
    {id:3, valuenow:"40", color:"success", width:"w-2/5",  class:"mb-4"},
    {id:4, valuenow:"60", color:"info", width:"w-3/5",  class:"mb-4"},
    {id:5, valuenow:"80", color:"warning", width:"w-4/5",  class:"mb-4"},
    {id:6, valuenow:"90", color:"danger", width:"w-[90%]",  class:""},

]