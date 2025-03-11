export const input1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="grid grid-cols-12 sm:gap-6">
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <p className="mb-2 text-muted"></p>
    <label htmlFor="input-label" className="form-label">Basic Input:</label>
    <input type="text" className="form-control" id="input"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-label" className="form-label">Form Input With Label</label>
    <input type="text" className="form-control" id="input-label"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-placeholder" className="form-label">Form Input With
        Placeholder</label>
    <input type="text" className="form-control" id="input-placeholder"
        placeholder="Placeholder"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-text" className="form-label">Type Text</label>
    <input type="text" className="form-control" id="input-text" placeholder="Text"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-number" className="form-label">Type Number</label>
    <input type="number" className="form-control" id="input-number"
        placeholder="Number"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-password" className="form-label">Type Password</label>
    <input type="password" className="form-control" id="input-password"
        placeholder="Password"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-email" className="form-label">Type Email</label>
    <input type="email" className="form-control" id="input-email"
        placeholder="Email@xyz.com"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-tel" className="form-label">Type Tel</label>
    <input type="tel" className="form-control" id="input-tel"
        placeholder="+1100-2031-1233"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-date" className="form-label">Type Date</label>
    <input type="date" className="form-control" id="input-date"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-week" className="form-label">Type Week</label>
    <input type="week" className="form-control" id="input-week"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-month" className="form-label">Type Month</label>
    <input type="month" className="form-control" id="input-month"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-time" className="form-label">Type Time</label>
    <input type="time" className="form-control" id="input-time"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-datetime-local" className="form-label">Type datetime-local</label>
    <input type="datetime-local" className="form-control" id="input-datetime-local"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-search" className="form-label">Type Search</label>
    <input type="search" className="form-control" id="input-search"
        placeholder="Search"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-submit" className="form-label">Type Submit</label>
    <input type="submit" className="form-control ti-btn" id="input-submit"
        value="Submit"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-reset" className="form-label">Type Reset</label>
    <input type="reset" className="form-control ti-btn" id="input-reset"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-button" className="form-label">Type Button</label>
    <input type="button" className="form-control ti-btn !text-white !bg-primary"
        id="input-button" value="Button"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-3 col-span-12 flex flex-col ">
            <label className="form-label">Type Color</label>
            <input className="form-control form-input-color !rounded-md" type="color"
                value="#136bd0"/>
        </div>
        <div className="xl:col-span-5 col-span-12">
            <div className="form-check">
                <p className="mb-3 px-0 text-muted">Type Checkbox</p>
                <input className="form-check-input ms-2" type="checkbox" value=""
                    checked/>
            </div>
        </div>
        <div className="xl:col-span-4 col-span-12">
            <div className="form-check">
                <p className="mb-4 px-0 text-muted">Type Radio</p>
                <input className="form-check-input ms-2" type="radio" defaultChecked/>
            </div>
        </div>
    </div>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <div>
        <label htmlFor="file-input" className="sr-only">Type file</label>
        <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10
             file:border-0
            file:bg-gray-200 file:me-4
            file:py-3 file:px-4
            dark:file:bg-black/20 dark:file:text-white/50"/>
    </div>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label className="form-label">Type Url</label>
    <input className="form-control" type="url" name="website"
        placeholder="http://example.com"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-disabled" className="form-label">Type Disabled</label>
    <input type="text" id="input-disabled" className="form-control"
        placeholder="Disabled input" disabled/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-readonlytext" className="form-label">Input Readonly Text</label>
    <input type="text" readOnly className="form-control-plaintext"
        id="input-readonlytext" value="email@example.com"/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="disabled-readonlytext" className="form-label">Disabled Readonly
        Input</label>
    <input className="form-control" type="text" value="Disabled readonly input"
        id="disabled-readonlytext" aria-label="Disabled input example" disabled
        readOnly/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label className="form-label">Type Readonly Input</label>
    <input className="form-control" type="text" value="Readonly input here..."
        aria-label="readonly input example" readOnly/>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="text-area" className="form-label">Textarea</label>
    <textarea className="form-control" id="text-area" rows={1}></textarea>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-DataList" className="form-label">Datalist example</label>
    <input className="form-control" type="text" list="datalistOptions"
        id="input-DataList" placeholder="Type to search..."/>
    <datalist id="datalistOptions">
        <option value="San Francisco">
        </option>
        <option value="New York">
        </option>
        <option value="Seattle">
        </option>
        <option value="Los Angeles">
        </option>
        <option value="Chicago">
        </option>
    </datalist>
</div>
</div>
// End Prism Code//`;

export const input2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="grid grid-cols-12 gap-y-3">
<div className="xl:col-span-12 col-span-12">
    <label htmlFor="input-noradius" className="form-label">Input With No Radius</label>
    <input type="text" className="form-control !rounded-none" id="input-noradius"
        placeholder="No Radius"/>
</div>
<div className="xl:col-span-12 col-span-12">
    <label htmlFor="input-rounded" className="form-label">Input With Radius</label>
    <input type="text" className="form-control" id="input-rounded"
        placeholder="Default Radius"/>
</div>
<div className="xl:col-span-12 col-span-12">
    <label htmlFor="input-rounded-pill" className="form-label">Rounded Input</label>
    <input type="text" className="form-control !rounded-full" id="input-rounded-pill"
        placeholder="Rounded"/>
</div>
</div>
// End Prism Code//`;

export const input3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="grid grid-cols-12 gap-y-3">
<div className="xl:col-span-12 col-span-12">
    <label htmlFor="input-rounded1" className="form-label">Default</label>
    <input type="text" className="form-control" id="input-rounded1"
        placeholder="Default"/>
</div>
<div className="xl:col-span-12 col-span-12">
    <label htmlFor="input-rounded2" className="form-label">Dotted Input</label>
    <input type="text" className="form-control border-dotted" id="input-rounded2"
        placeholder="Dotted"/>
</div>
<div className="xl:col-span-12 col-span-12">
    <label htmlFor="input-rounded3" className="form-label">Dashed Input</label>
    <input type="text" className="form-control border-dashed" id="input-rounded3"
        placeholder="Dashed"/>
</div>
</div>
// End Prism Code//`;

export const input4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input className="form-control form-control-sm mb-3" type="text"
placeholder=".form-control-sm" aria-label=".form-control-sm example"/>
<input className="form-control mb-3" type="text" placeholder="Default input"
aria-label="default input example"/>
<input className="form-control form-control-lg" type="text" placeholder=".form-control-lg"
aria-label=".form-control-lg example"/>

// End Prism Code//`;

export const input5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="max-w-sm space-y-3">
<input type="text" className="ti-form-input"/>
<textarea className="ti-form-input" rows={3}></textarea>
</div>
// End Prism Code//`

export const input6 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="max-w-sm space-y-3">
<input type="text" className="ti-form-input" placeholder="This is placeholder"/>
<textarea className="ti-form-input" rows={2} placeholder="This is a textarea placeholder"></textarea>
<input type="text" className="ti-form-input" placeholder="Readonly input" readOnly/>
<textarea className="py-3 px-4 ti-form-input" rows={2} placeholder="Readonly" readOnly></textarea>
</div>
// End Prism Code//`

export const input7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="max-w-sm space-y-3">
<input type="text" className="opacity-70 pointer-events-none ti-form-input" placeholder="Disabled input" disabled/>
<input type="text" className="opacity-70 pointer-events-none ti-form-input" placeholder="Disabled readonly input" disabled readOnly/>
<textarea className="py-3 px-4 ti-form-input disabled:opacity-50 disabled:pointer-events-none" rows={2} placeholder="Disabled textarea" disabled></textarea>
<textarea className="py-3 px-4 ti-form-input disabled:opacity-50 disabled:pointer-events-none" rows={2} placeholder="Disabled readonly textarea" disabled readOnly></textarea>
</div>
// End Prism Code//`


export const input8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="relative">
<input type="email" className="peer py-3 px-4 ps-11 ti-form-input bg-gray-100 border-transparent disabled:opacity-50 disabled:pointer-events-none rounded dark:bg-bodybg2 dark:border-transparent" placeholder="Enter name"/>
<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
  <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
</div>
</div>

<div className="relative">
<input type="password" className="peer py-3 px-4 ps-11 ti-form-input bg-gray-100 border-transparent disabled:opacity-50 disabled:pointer-events-none rounded dark:bg-bodybg2 dark:border-transparent" placeholder="Enter password"/>
<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
  <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg>
</div>
</div>
<textarea className="py-3 px-4 ti-form-input bg-gray-100 border-transparent disabled:opacity-50 disabled:pointer-events-none rounded dark:bg-bodybg2 dark:border-transparent" rows={3} placeholder="This is a textarea placeholder"></textarea>

// End Prism Code//`


//Checks & Radios

export const radio1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault">
<label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked"
    defaultChecked>
<label className="form-check-label" htmlFor="flexCheckChecked">
    Checked checkbox
</label>
</div>
// End Prism Code//`

export const radio2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDisabled"
    disabled>
<label className="form-check-label" htmlFor="flexCheckDisabled">
    Disabled checkbox
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue=""
    id="flexCheckCheckedDisabled" defaultChecked disabled>
<label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
    Disabled checked checkbox
</label>
</div>
// End Prism Code//`

export const radio3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="form-check">
<input className="form-check-input" type="radio" name="flexRadioDefault"
    id="flexRadioDefault1">
<label className="form-check-label" htmlFor="flexRadioDefault1">
    Default radio
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="flexRadioDefault"
    id="flexRadioDefault2" defaultChecked>
<label className="form-check-label" htmlFor="flexRadioDefault2">
    Default checked radio
</label>
</div>
// End Prism Code//`

export const radio4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="form-check">
<input className="form-check-input" type="radio" name="flexRadioDisabled"
    id="flexRadioDisabled" disabled>
<label className="form-check-label" htmlFor="flexRadioDisabled">
    Disabled radio
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="flexRadioDisabled"
    id="flexRadioCheckedDisabled" defaultChecked disabled>
<label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
    Disabled checked radio
</label>
</div>
// End Prism Code//`

export const radio5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1">
<label className="form-check-label" htmlFor="defaultCheck1">
    Default checkbox
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck2"
    disabled>
<label className="form-check-label" htmlFor="defaultCheck2">
    Disabled checkbox
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="exampleRadios"
    id="exampleRadios1" defaultValue="option1" defaultChecked>
<label className="form-check-label" htmlFor="exampleRadios1">
    Default radio
</label>
</div>
<div className="form-check mb-0">
<input className="form-check-input" type="radio" name="exampleRadios"
    id="exampleRadios3" defaultValue="option3" disabled>
<label className="form-check-label" htmlFor="exampleRadios3">
    Disabled radio
</label>
</div>
// End Prism Code//`

export const radio6 =`<div className="form-check form-switch">
<input className="form-check-input" type="checkbox" role="switch"
    id="flexSwitchCheckDefault">
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch
    checkbox input</label>
</div>
<div className="form-check form-switch">
<input className="form-check-input" type="checkbox" role="switch"
    id="flexSwitchCheckChecked" defaultChecked>
<label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch
    checkbox input</label>
</div>
<div className="form-check form-switch">
<input className="form-check-input" type="checkbox" role="switch"
    id="flexSwitchCheckDisabled" disabled>
<label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled
    switch
    checkbox input</label>
</div>
<div className="form-check form-switch mb-0">
<input className="form-check-input" type="checkbox" role="switch"
    id="flexSwitchCheckCheckedDisabled" defaultChecked disabled>
<label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled
defaultChecked switch checkbox input</label>
</div>
// End Prism Code//`;

export const radio7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue="" id="checkebox-sm" defaultChecked>
<label className="form-check-label" htmlFor="checkebox-sm">
    Default
</label>
</div>
<div className="form-check form-check-md flex items-center">
<input className="form-check-input" type="checkbox" defaultValue="" id="checkebox-md" defaultChecked>
<label className="form-check-label" htmlFor="checkebox-md">
    Medium
</label>
</div>
<div className="form-check form-check-lg flex items-center">
<input className="form-check-input" type="checkbox" defaultValue="" id="checkebox-lg" defaultChecked>
<label className="form-check-label" htmlFor="checkebox-lg">
    Large
</label>
</div>
// End Prism Code//`

export const radio8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="form-check">
<input className="form-check-input" type="radio" name="Radio" id="Radio-sm">
<label className="form-check-label" htmlFor="Radio-sm">
    default
</label>
</div>
<div className="form-check form-check-md">
<input className="form-check-input" type="radio" name="Radio" id="Radio-md">
<label className="form-check-label" htmlFor="Radio-md">
    Medium
</label>
</div>
<div className="form-check form-check-lg">
<input className="form-check-input" type="radio" name="Radio" id="Radio-lg" defaultChecked>
<label className="form-check-label" htmlFor="Radio-lg">
    Large
</label>
</div>
// End Prism Code//`

export const radio9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="form-check form-check-inline">
<input className="form-check-input" type="checkbox" id="inlineCheckbox1"
    defaultValue="option1">
<label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="checkbox" id="inlineCheckbox2"
    defaultValue="option2">
<label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="checkbox" id="inlineCheckbox3"
    defaultValue="option3" disabled>
<label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="radio" name="inlineRadioOptions"
    id="inlineRadio1" defaultValue="option1">
<label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="radio" name="inlineRadioOptions"
    id="inlineRadio2" defaultValue="option2">
<label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="radio" name="inlineRadioOptions"
    id="inlineRadio3" defaultValue="option3" disabled>
<label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
</div>
// End Prism Code//`

export const radio10 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="form-check form-check-reverse mb-4">
<input className="form-check-input" type="checkbox" defaultValue=""
    id="reverseCheck1">
<label className="form-check-label" htmlFor="reverseCheck1">
    Reverse checkbox
</label>
</div>
<div className="form-check form-check-reverse mb-4">
<input className="form-check-input" type="checkbox" defaultValue=""
    id="reverseCheck2" disabled>
<label className="form-check-label" htmlFor="reverseCheck2">
    Disabled reverse checkbox
</label>
</div>

<div className="form-check form-switch form-check-reverse">
<input className="form-check-input" type="checkbox"
    id="flexSwitchCheckReverse">
<label className="form-check-label" htmlFor="flexSwitchCheckReverse">Reverse
    switch
    checkbox input</label>
</div>
// End Prism Code//`

export const radio11 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="grid grid-cols-12 gap-y-1">
<div className="xl:col-span-4 col-span-12">
    <div className="toggle on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-secondary on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-warning on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-info on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-success on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-danger on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-light on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-dark on mb-4">
        <span></span>
    </div>
</div>
</div>
// End Prism Code//`

export const radio12 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="grid grid-cols-12 gap-y-1">
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchPrimary" className="label-primary"></label><span className="ms-3">Primary</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchSecondary" name="toggleswitch002" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchSecondary" className="label-secondary"></label><span className="ms-3">Secondary</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchWarning" name="toggleswitch003" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchWarning" className="label-warning"></label><span className="ms-3">Warning</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchInfo" name="toggleswitch004" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchInfo" className="label-info"></label><span className="ms-3">Info</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchSuccess" name="toggleswitch005" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchSuccess" className="label-success"></label><span className="ms-3">Success</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchDanger" name="toggleswitch006" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchDanger" className="label-danger"></label><span className="ms-3">Danger</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchLight" name="toggleswitch007" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchLight" className="label-light"></label><span className="ms-3">Light</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchDark" name="toggleswitch008" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchDark" className="label-dark"></label><span className="ms-3">Dark</span>
    </div>
</div>
</div>
// End Prism Code//`

export const radio13 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex items-center flex-wrap mb-4">
<div className=""> <p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
<div className="toggle toggle-sm on mb-0">
    <span></span>
</div>
</div>
<div className="flex items-center flex-wrap mb-4">
<div className=""> <p className="text-muted m-0">Default toggle switch <code></code></p></div>
<div className="toggle toggle-secondary on mb-0">
    <span></span>
</div>
</div>
<div className="flex items-center flex-wrap">
<div className=""> <p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
<div className="toggle toggle-lg toggle-success on mb-0">
    <span></span>
</div>
</div>
// End Prism Code//`

export const radio14 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex items-center flex-wrap mb-4">
<div className=""><p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
<div className="custom-toggle-switch toggle-sm ms-2">
    <input id="size-sm" name="toggleswitchsize" type="checkbox" defaultChecked>
    <label htmlFor="size-sm" className="label-primary"></label>
</div>
</div>
<div className="flex items-center flex-wrap mb-4">
<div className=""><p className="text-muted m-0">Default toggle switch</p></div>
<div className="custom-toggle-switch ms-2">
    <input id="size-default" name="toggleswitchsize" type="checkbox" defaultChecked>
    <label htmlFor="size-default" className="label-secondary mb-1"></label>
</div>
</div>
<div className="flex items-center flex-wrap">
<div className=""><p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
<div className="custom-toggle-switch toggle-lg ms-2">
    <input id="size-lg" name="toggleswitchsize" type="checkbox" defaultChecked>
    <label htmlFor="size-lg" className="label-success mb-2"></label>
</div>
</div>
// End Prism Code//`

//Range Sliders

export const range1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input type="range" className="form-range" id="customRange1">
// End Prism Code//`

export const range2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input type="range" className="form-range" id="disabledRange" disabled>
// End Prism Code//`

export const range3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <input type="range" className="form-range" min="0" max="5" id="customRange2">
// End Prism Code//`

export const range4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3">
// End Prism Code//`;

//Color Picker

export const color1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input type="color" className="form-control form-control-color border-0"
id="exampleColorInput" defaultValue="#136ad0" title="Choose your color">
// End Prism Code//`

export const color2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input type="color"
className="p-1 h-10 w-10 block bg-white dark:bg-bodybg border border-gray-200 cursor-pointer rounded-sm 
disabled:opacity-50 disabled:pointer-events-none dark:bg-bgdark dark:border-white/10"
id="hs-color-input" value="#5a66f1" title="Choose your color"/>
// End Prism Code//`

// Form-Layouts

export const layout1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="mb-4">
<label htmlFor="form-text" className="form-label !text-[.875rem] text-black">Enter name</label>
<input type="text" className="form-control" id="form-text" placeholder="">
</div>
<div className="mb-4">
<label htmlFor="form-password" className="form-label text-[.875rem] text-black">Enter
    Password</label>
<input type="password" className="form-control" id="form-password" placeholder="">
</div>
<div className="form-check mb-4">
<input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck"
    required>
<label className="form-check-label" htmlFor="invalidCheck">
    Accept Policy
</label>
</div>
<button className="ti-btn ti-btn-primary-full" type="submit">Submit</button>
// End Prism Code//`

export const layout2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <form>
<div className="grid grid-cols-12 mb-4">
    <label htmlFor="inputEmail3"
        className="sm:col-span-2 col-span-12 col-form-label">Email</label>
    <div className="sm:col-span-10 col-span-12">
        <input type="email" className="form-control" id="inputEmail3">
    </div>
</div>
<div className="grid grid-cols-12 mb-4">
    <label htmlFor="inputPassword3"
        className="sm:col-span-2 col-span-12 col-form-label">Password</label>
    <div className="sm:col-span-10 col-span-12">
        <input type="password" className="form-control" id="inputPassword3">
    </div>
</div>
<div className="grid grid-cols-12 mb-4">
    <div className=" sm:col-span-2 col-span-12 col-form-label pt-0">Qualified</div>
    <div className="sm:col-span-10 col-span-12 ">
        <div className="form-check">
            <input className="form-check-input" type="radio"
                name="gridRadios" id="gridRadios1" defaultValue="option1"
                defaultChecked>
            <label className="form-check-label" htmlFor="gridRadios1">
                Prelims
            </label>
        </div>
        <div className="form-check disabled">
            <input className="form-check-input" type="radio"
                name="gridRadios" id="gridRadios2" defaultValue="option3"
                disabled>
            <label className="form-check-label" htmlFor="gridRadios2">
                Mains
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox"
                id="gridCheck1">
            <label className="form-check-label" htmlFor="gridCheck1">
                Certified
            </label>
        </div>
    </div>
</div>
<button type="submit" className="ti-btn ti-btn-primary-full">Sign in</button>
</form>
// End Prism Code//`

export const layout3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="mb-4">
<label htmlFor="form-text1" className="form-label text-[.875rem] text-black">Enter name</label>
<div className="input-group">
    <div className="input-group-text"><i className="ri-user-line"></i></div>
    <input type="text" className="form-control" id="form-text1" placeholder="">
</div>
</div>
<div className="mb-4">
<label htmlFor="form-password1" className="form-label text-[.875rem] text-black">Enter
    Password</label>
<div className="input-group">
    <div className="input-group-text"><i className="ri-lock-line"></i></div>
    <input type="password" className="form-control" id="form-password1" placeholder="">
</div>
</div>
<div className="form-check mb-4">
<input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck1"
    required>
<label className="form-check-label" htmlFor="invalidCheck1">
    Accept Policy
</label>
</div>
<button className="ti-btn ti-btn-primary-full !mb-0 mt-4" type="submit">Submit</button>
// End Prism Code//`

export const layout4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<form>
<div className="grid grid-cols-12 mb-4">
    <label htmlFor="inputEmail1"
        className="sm:col-span-2 col-span-12 col-form-label">Email</label>
    <div className="sm:col-span-10 col-span-12">
        <div className="input-group">
            <input type="email" className="form-control" id="inputEmail1">
            <div className="input-group-text">
                <i className="ri-mail-line"></i>
            </div>
        </div>
    </div>
</div>
<div className="grid grid-cols-12 mb-4">
    <label htmlFor="inputPassword1"
        className="sm:col-span-2 col-span-12 col-form-label">Password</label>
    <div className="sm:col-span-10 col-span-12">
        <div className="input-group">
            <input type="password" className="form-control" id="inputPassword1">
            <div className="input-group-text">
                <i className="ri-lock-line"></i>
            </div>
        </div>
    </div>
</div>
<div className="grid grid-cols-12 mb-4">
    <div className="col-form-label sm:col-span-2 col-span-12 pt-0">Qualified</div>
    <div className="sm:col-span-10 col-span-12">
        <div className="form-check">
            <input className="form-check-input" type="radio"
                name="gridRadios" id="gridRadios4" defaultValue="option1"
                defaultChecked>
            <label className="form-check-label" htmlFor="gridRadios4">
                Prelims
            </label>
        </div>
        <div className="form-check disabled">
            <input className="form-check-input" type="radio"
                name="gridRadios" id="gridRadios3" defaultValue="option3"
                disabled>
            <label className="form-check-label" htmlFor="gridRadios3">
                Mains
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox"
                id="gridCheck2">
            <label className="form-check-label" htmlFor="gridCheck2">
                Certified
            </label>
            <form>
                <div className="grid grid-cols-12 mb-4">
                    <label htmlFor="inputEmail1"
                        className="sm:col-span-2 col-span-12 col-form-label">Email</label>
                    <div className="sm:col-span-10 col-span-12">
                        <div className="input-group">
                            <input type="email" className="form-control" id="inputEmail1">
                            <div className="input-group-text">
                                <i className="ri-mail-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mb-4">
                    <label htmlFor="inputPassword1"
                        className="sm:col-span-2 col-span-12 col-form-label">Password</label>
                    <div className="sm:col-span-10 col-span-12">
                        <div className="input-group">
                            <input type="password" className="form-control" id="inputPassword1">
                            <div className="input-group-text">
                                <i className="ri-lock-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mb-4">
                    <div className="col-form-label sm:col-span-2 col-span-12 pt-0">Qualified</div>
                    <div className="sm:col-span-10 col-span-12">
                        <div className="form-check">
                            <input className="form-check-input" type="radio"
                                name="gridRadios" id="gridRadios4" defaultValue="option1"
                                defaultChecked>
                            <label className="form-check-label" htmlFor="gridRadios4">
                                Prelims
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio"
                                name="gridRadios" id="gridRadios3" defaultValue="option3"
                                disabled>
                            <label className="form-check-label" htmlFor="gridRadios3">
                                Mains
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                                id="gridCheck2">
                            <label className="form-check-label" htmlFor="gridCheck2">
                                Certified
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="ti-btn ti-btn-primary-full">Sign in</button>
</form>
// End Prism Code//`

export const layout5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <form className="sm:grid grid-cols-4 gap-4 items-center">
<div className="mb-4 sm:mb-0 input-group">
    <div className="input-group-text">@</div>
    <input type="text" className="form-control"
        id="inlineFormInputGroupUsername" placeholder="Username">
</div>
<select className="mb-4 sm:mb-0 form-select !py-3" id="inlineFormSelectPref">
    <option selected>Choose...</option>
    <option defaultValue="1">One</option>
    <option defaultValue="2">Two</option>
    <option defaultValue="3">Three</option>
</select>
<div className=" form-check !my-auto">
    <input className="form-check-input" type="checkbox"
        id="inlineFormCheck">
    <label className="form-check-label" htmlFor="inlineFormCheck">
        Remember me
    </label>
</div>
<button type="submit" className="ti-btn ti-btn-primary-full !mb-0 mt-4">Submit</button>
</form>
// End Prism Code//`

export const layout6 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="grid grid-cols-12 gap-4">
<div className="sm:col-span-7 col-span-12">
    <input type="text" className="form-control" placeholder="City"
        aria-label="City">
</div>
<div className="sm:col-span-3 col-span-12">
    <input type="text" className="form-control" placeholder="State"
        aria-label="State">
</div>
<div className="sm:col-span-2 col-span-12">
    <input type="text" className="form-control" placeholder="Zip"
        aria-label="Zip">
</div>
</div>
// End Prism Code//`

export const layout7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="mb-4">
<label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
<input type="text" className="form-control" id="formGroupExampleInput"
    placeholder="Example input placeholder">
</div>
<div className="mb-1">
<label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
<input type="text" className="form-control" id="formGroupExampleInput2"
    placeholder="Another input placeholder">
</div>
// End Prism Code//`

export const layout8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="grid grid-cols-12 mb-4">
<label htmlFor="colFormLabelSm"
    className="sm:col-span-2 col-span-12 col-form-label col-form-label-sm">Email</label>
<div className="sm:col-span-10 col-span-12">
    <input type="email" className="form-control form-control-sm"
        id="colFormLabelSm" placeholder="col-form-label-sm">
</div>
</div>
<div className="grid grid-cols-12 mb-4">
<label htmlFor="colFormLabel" className="sm:col-span-2 col-span-12 col-form-label">Email</label>
<div className="sm:col-span-10 col-span-12">
    <input type="email" className="form-control" id="colFormLabel"
        placeholder="col-form-label">
</div>
</div>
<div className="grid grid-cols-12">
<label htmlFor="colFormLabelLg"
    className="sm:col-span-2 col-span-12 col-form-label col-form-label-lg text-[1.25rem]">Email</label>
<div className="sm:col-span-10 col-span-12">
    <input type="email" className="form-control form-control-lg"
        id="colFormLabelLg" placeholder="col-form-label-lg">
</div>
</div>
Auto sizing
Show Code
Jane Doe
// End Prism Code//`

export const layout9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <form className="sm:grid grid-cols-12 block gap-y-2 gap-x-4 items-center mb-4">
<div className="col-span-12 mb-4 sm:mb-0">
    <label className="hidden" htmlFor="autoSizingInput">Name</label>
    <input type="text" className="form-control" id="autoSizingInput"
        placeholder="Jane Doe">
</div>
<div className="col-span-12 mb-4 sm:mb-0">
    <label className="hidden"
        htmlFor="autoSizingInputGroup">Username</label>
    <div className="input-group">
        <div className="input-group-text">@</div>
        <input type="text" className="form-control"
            id="autoSizingInputGroup" placeholder="Username">
    </div>
</div>
<div className="col-span-12 mb-4 sm:mb-0">
    <label className="hidden"
        htmlFor="autoSizingSelect">Preference</label>
    <select className="form-select" id="autoSizingSelect">
        <option selected>Choose...</option>
        <option defaultValue="1">One</option>
        <option defaultValue="2">Two</option>
        <option defaultValue="3">Three</option>
    </select>
</div>
<div className="col-span-12">
    <div className="form-check">
        <input className="form-check-input" type="checkbox"
            id="autoSizingCheck">
        <label className="form-check-label" htmlFor="autoSizingCheck">
            Remember me
        </label>
    </div>
</div>
<div className="col-span-12">
    <button type="submit" className="ti-btn ti-btn-primary-full !mb-0 mt-4">Submit</button>
</div>
</form>
<span className="font-semibold text-[#8c9097] dark:text-white/50">You can then remix that once again with size-specific column
classes.</span>
<form className="grid grid-cols-12  gap-x-4 gap-y-2 items-center mt-2">
<div className="sm:col-span-3 col-span-12">
    <label className="hidden"
        htmlFor="specificSizeInputName">Name</label>
    <input type="text" className="form-control" id="specificSizeInputName"
        placeholder="Jane Doe">
</div>
<div className="sm:col-span-3 col-span-12">
    <label className="hidden"
        htmlFor="specificSizeInputGroupUsername">Username</label>
    <div className="input-group">
        <div className="input-group-text">@</div>
        <input type="text" className="form-control"
            id="specificSizeInputGroupUsername" placeholder="Username">
    </div>
</div>
<div className="sm:col-span-3 col-span-12">
    <label className="hidden"
        htmlFor="specificSizeSelect">Preference</label>
    <select className="form-select !py-[0.59rem]" id="specificSizeSelect">
        <option selected>Choose...</option>
        <option defaultValue="1">One</option>
        <option defaultValue="2">Two</option>
        <option defaultValue="3">Three</option>
    </select>
</div>
<div className="sm:col-span-3 col-span-12">
    <div className="form-check !my-auto">
        <input className="form-check-input" type="checkbox"
            id="autoSizingCheck2">
        <label className="form-check-label" htmlFor="autoSizingCheck2">
            Remember me
        </label>
    </div>
</div>
<div className="sm:col-span-3 col-span-12">
    <button type="submit" className="ti-btn ti-btn-primary-full">Submit</button>
</div>
</form>
// End Prism Code//`

export const layout10 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
<div className="md:col-span-6 col-span-12 mb-4">
    <label className="form-label">First Name</label>
    <input type="text" className="form-control" placeholder="First name"
        aria-label="First name">
</div>
<div className="md:col-span-6 col-span-12 mb-4">
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" placeholder="Last name"
        aria-label="Last name">
</div>
<div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
    <label className="form-label">Address</label>
    <div className="grid grid-cols-12 sm:gap-x-4">
        <div className="xl:col-span-12 col-span-12 mb-4">
            <input type="text" className="form-control" placeholder="Street"
            aria-label="Street">
        </div>
        <div className="xl:col-span-12 col-span-12 mb-4">
            <input type="text" className="form-control" placeholder="Landmark"
            aria-label="Landmark">
        </div>
        <div className="xxl:col-span-6 xl:col-span-12 col-span-12 mb-4">
            <input type="text" className="form-control" placeholder="City"
            aria-label="City">
        </div>
        <div className="xxl:col-span-6 xl:col-span-12 col-span-12 mb-4">
            <select id="inputState1" className="form-select !py-[0.59rem]">
                <option selected>State</option>
                <option>...</option>
            </select>
        </div>
        <div className="xxl:col-span-6 xl:col-span-12 col-span-12 xxl:mb-0 mb-4">
            <input type="text" className="form-control" placeholder="Postal/Zip code"
            aria-label="Postal/Zip code">
        </div>
        <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
            <select id="inputCountry" className="form-select !py-[0.59rem]">
                <option selected>Country</option>
                <option>...</option>
            </select>
        </div>
    </div>
</div>
<div className="md:col-span-6  col-span-12">
    <div className="grid grid-cols-12">
        <div className="xl:col-span-12 col-span-12 mb-4">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Email"
            aria-label="email">
        </div>
        <div className="xl:col-span-12 col-span-12 mb-4">
            <label className="form-label">D.O.B</label>
            <input type="date" className="form-control"
            aria-label="dateofbirth">
        </div>
        <div className="xl:col-span-12 col-span-12 mb-4">
            <div className="grid grid-cols-12 gap-3">
                <label className="form-label mb-1 xl:col-span-12 col-span-12">Maritial Status</label>
                <div className="xl:col-span-6 col-span-12">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue="" id="status-married" name="status-married">
                        <label className="form-check-label" htmlFor="status-married">
                            Married
                        </label>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue="" id="status-unmarried" name="status-married" defaultChecked>
                        <label className="form-check-label" htmlFor="status-unmarried">
                            Single
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div className="xl:col-span-12 col-span-12">

        </div>
    </div>
</div>
<div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
    <label className="form-label">Contact Number</label>
    <input type="number" className="form-control" placeholder="Phone number"
        aria-label="Phone number">
</div>
<div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
    <label className="form-label">Alternative Contact</label>
    <input type="number" className="form-control" placeholder="Phone number"
        aria-label="Phone number">
</div>
<div className="md:col-span-12 col-span-12 mb-4 sm:mb-0">
    <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" id="gridCheck">
        <label className="form-check-label" htmlFor="gridCheck">
            Check me out
        </label>
    </div>
</div>
<div className="md:col-span-12 col-span-12">
    <button type="submit" className="ti-btn ti-btn-primary-full !mb-0">Sign in</button>
</div>
</div>
// End Prism Code//`

export const layout11 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<form className="grid grid-cols-12 gap-4 mt-0">
<div className="md:col-span-6 col-span-12">
    <label className="form-label">First Name</label>
    <input type="text" className="form-control" placeholder="First name"
        aria-label="First name">
</div>
<div className="md:col-span-6 col-span-12">
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" placeholder="Last name"
        aria-label="Last name">
</div>
<div className="md:col-span-6 col-span-12">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4">
</div>
<div className="md:col-span-6 col-span-12">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4">
</div>
<div className="col-span-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress"
        placeholder="1234 Main St">
</div>
<div className="col-span-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2"
        placeholder="Apartment, studio, or floor">
</div>
<div className="md:col-span-6 col-span-12">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity">
</div>
<div className="md:col-span-4 col-span-12">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select !py-[0.59rem]">
        <option selected>Choose...</option>
        <option>...</option>
    </select>
</div>
<div className="md:col-span-2 col-span-12">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip">
</div>
<div className="col-span-12 ">
    <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck3">
        <label className="form-check-label" htmlFor="gridCheck3">
            Check me out
        </label>
    </div>
</div>
<div className="col-span-12">
    <button type="submit" className="ti-btn ti-btn-primary-full">Sign in</button>
</div>
</form>
// End Prism Code//`
export const input9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<input type="email" className="peer py-3 pe-0 ps-8 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10" placeholder="Enter name"/>
<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
  <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
</div>
</div>

<div className="relative">
<input type="password" className="peer py-3 pe-0 ps-8 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10" placeholder="Enter password"/>
<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
  <svg className="flex-shrink-0 size-4 text-gray-500 dark:text-white/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg>
</div>
</div>
<textarea className="py-3 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 text-sm focus:!border-t-transparent focus:!border-x-transparent  focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10" rows={3} placeholder="This is a textarea placeholder"></textarea>
// End Prism Code//`
export const input10 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<input type="email" id="hs-floating-input-email" className="peer p-4 ti-form-input placeholder:!text-transparent focus:!border-primary focus:!ring-primary disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2" placeholder="you@email.com"/>
<label htmlFor="hs-floating-input-email" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500 dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Email</label>
</div>
<div className="relative">
<input type="password" id="hs-floating-input-passowrd" className="peer p-4 ti-form-input placeholder:!text-transparent focus:!border-primary focus:!ring-primary disabled:opacity-50 disabled:pointer-events-none
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="********"/>
<label htmlFor="hs-floating-input-passowrd" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-xs
    peer-focus:-translate-y-1.5
    peer-focus:text-gray-500 dark:peer-focus:text-white/70
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-1.5
    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Password</label>
</div>
<div className="relative">
<textarea id="hs-floating-textarea" className="peer p-4 ti-form-input placeholder:!text-transparent focus:!border-primary focus:!ring-primary disabled:opacity-50 disabled:pointer-events-non
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
<label htmlFor="hs-floating-textarea" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500 dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Comment</label>
</div>
// End Prism Code//`

export const input11 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="relative">
<input type="email" id="hs-floating-gray-input-email" className="peer p-4 ti-form-input bg-gray-100 border-transparent placeholder:!text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 rounded-md dark:border-transparent
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="you@email.com"/>
<label htmlFor="hs-floating-gray-input-email" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500 dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Email</label>
</div>
<div className="relative">
<input type="password" id="hs-floating-gray-input-passowrd" className="peer p-4 ti-form-input bg-gray-100 border-transparent placeholder:!text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 rounded-lg dark:border-transparent
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="********"/>
<label htmlFor="hs-floating-gray-input-passowrd" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-xs
    peer-focus:-translate-y-1.5
    peer-focus:text-gray-500  dark:peer-focus:text-white/70
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-1.5
    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Password</label>
</div>
<div className="relative">
<textarea id="hs-floating-textarea-gray" className="peer p-4 ti-form-input bg-gray-100 border-transparent placeholder:!text-transparent focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 rounded-lg dark:border-transparent
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
<label htmlFor="hs-floating-textarea-gray" className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500  dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Comment</label>
</div>
// End Prism Code//`

export const input12 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<input type="email" id="hs-floating-underline-input-email" className="peer py-4 px-0 ti-form-input rounded-none bg-transparent 
!border-t-transparent border-b !border-x-transparent border-b-gray-200 placeholder:!text-transparent focus:!border-t-transparent 
focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none
 dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="you@email.com"/>
<label htmlFor="hs-floating-underline-input-email" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500  dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-white/70">Email</label>
</div>
<div className="relative">
<input type="password" id="hs-floating-underline-input-passowrd" className="peer py-4 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 placeholder:!text-transparent focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="********"/>
<label htmlFor="hs-floating-underline-input-passowrd" className="absolute top-0 start-0 py-4 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500  dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Password</label>
</div>
<div className="relative">
<textarea id="hs-floating-textarea-underline" className="peer py-4 px-0 ti-form-input rounded-none bg-transparent !border-t-transparent border-b !border-x-transparent border-b-gray-200 placeholder:!text-transparent focus:!border-t-transparent focus:!border-x-transparent focus:!border-b-primary focus:!ring-0 focus:!ring-offset-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:focus:!ring-transparent !shadow-none dark:focus:border-b-white/10
focus:pt-6
focus:pb-2
[&:not(:placeholder-shown)]:pt-6
[&:not(:placeholder-shown)]:pb-2
autofill:pt-6
autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
<label htmlFor="hs-floating-textarea-underline" className="absolute top-0 start-0 py-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-gray-500  dark:peer-focus:text-white/70
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500  dark:peer-[:not(:placeholder-shown)]:text-white/70">Comment</label>
</div>
// End Prism Code//`

export const input13 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input type="text" className="ti-form-input px-5 rounded-full" placeholder="Input text"/>
<textarea className="ti-form-input px-5 rounded-md" rows={3} placeholder="This is a textarea placeholder"></textarea>
// End Prism Code//`


export const input14 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="">
<label htmlFor="input-email-label" className="sr-only">Email</label>
<input type="email" id="input-email-label" className="ti-form-input" placeholder="you@site.com"/>
</div>
<div className="">
<label htmlFor="textarea-email-label" className="sr-only">Comment</label>
<textarea id="textarea-email-label" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
</div>
// End Prism Code//`

export const input15 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="">
<label htmlFor="input-label" className="ti-form-label">Email</label>
<input type="email" id="input-label1" className="ti-form-input" placeholder="you@site.com"/>
</div>
<div>
<label htmlFor="textarea-label" className="ti-form-label">Comment</label>
<textarea id="textarea-label" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
</div>
// End Prism Code//`


export const input16 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div>
<label htmlFor="input-label-with-helper-text" className="ti-form-label">Email</label>
<input type="email" id="input-label-with-helper-text" className="ti-form-input" placeholder="you@site.com" aria-describedby="hs-input-helper-text"/>
<p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-input-helper-text">We'll never share your details.</p>
</div>
<div>
<label htmlFor="textarea-label-with-helper-text" className="ti-form-label">Leave your question</label>
<textarea id="textarea-label-with-helper-text" className="ti-form-input" rows={2} placeholder="Say hi, we'll be happy to chat with you." aria-describedby="hs-textarea-helper-text"></textarea>
<p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-textarea-helper-text">We'll get back to you soon.</p>
</div>
// End Prism Code//`


export const input17 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full rtl:space-x-reverse">
<label htmlFor="inline-input-label-with-helper-text" className="ti-form-label">Email</label>
<input type="email" id="inline-input-label-with-helper-text" className="ti-form-input" placeholder="you@site.com" aria-describedby="hs-inline-input-helper-text"/>
<p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-inline-input-helper-text">We'll never share your details.</p>
</div>
<div className="sm:inline-flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full rtl:space-x-reverse">
<label htmlFor="inline-textarea-label-with-helper-text" className="ti-form-label">Leave your question</label>
<textarea id="inline-textarea-label-with-helper-text" className="ti-form-input" rows={3} placeholder="Say hi, we'll be happy to chat with you." aria-describedby="hs-textarea-helper-text"></textarea>
<p className="text-xs text-gray-500 mt-2 dark:text-white/70" id="hs-inline-textarea-helper-text">We'll get back to you soon.</p>
</div>
// End Prism Code//`



export const input18 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div>
<div className="flex justify-between items-center">
    <label htmlFor="with-corner-hint" className="ti-form-label">Email</label>
    <span className="block text-xs text-gray-500 mb-2 dark:text-white/70">Optional</span>
</div>
<input type="email" id="with-corner-hint" className="ti-form-input" placeholder="you@site.com"/>
</div>
<div>
<div className="flex justify-between items-center">
    <label htmlFor="hs-textarea-with-corner-hint" className="ti-form-label">Contact us</label>
    <span className="block text-xs text-gray-500 mb-2 dark:text-white/70">100 characters</span>
</div>
<textarea id="hs-textarea-with-corner-hint" className="ti-form-input" rows={3} placeholder="Say hi..."></textarea>
</div>
// End Prism Code//`


export const input19 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="space-y-3">
<div>
    <label htmlFor="hs-validation-name-error" className="ti-form-label">Email</label>
    <div className="relative">
      <input type="text" id="hs-validation-name-error" name="hs-validation-name-error" className="ti-form-input !border-danger focus:border-danger focus:ring-danger" required aria-describedby="hs-validation-name-error-helper"/>
      <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
        <svg className="h-5 w-5 text-danger" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      </div>
    </div>
    <p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">Please enter a valid email address.</p>
  </div>

  <div>
    <label htmlFor="hs-validation-name-success" className="ti-form-label">Email</label>
    <div className="relative">
      <input type="text" id="hs-validation-name-success" name="hs-validation-name-success" className="ti-form-input !border-success focus:border-success focus:ring-success" required aria-describedby="hs-validation-name-success-helper"/>
      <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
        <svg className="h-5 w-5 text-success" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
        </svg>
      </div>
    </div>
    <p className="text-sm text-green-600 mt-2" id="hs-validation-name-success-helper">Looks good!</p>
  </div>
</div>
// End Prism Code//`


export const input20 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-y-3">
<input type="text" className="py-2 px-3 ti-form-input" placeholder="Small size"/>
<input type="text" className="ti-form-input" placeholder="Default size"/>
<input type="text" className="ti-form-input sm:p-5" placeholder="Large size"/>
</div>
// End Prism Code//`


export const input21 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-y-3">
<textarea className="py-2 px-3 ti-form-input" rows={2}
    placeholder="Small size"></textarea>
<textarea className="py-3 px-4 ti-form-input" rows={2}
    placeholder="Default size"></textarea>
<textarea className="sm:p-5 py-3 px-4 ti-form-input" rows={2}
    placeholder="Large size"></textarea>
</div>
// End Prism Code//`


export const input22 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="relative">
<textarea id="hs-textarea-ex-1" className="p-4 pb-12 ti-form-input focus:!ring-primary"
    placeholder="Ask me anything..."></textarea>

<div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-bodybg">
    <div className="flex justify-between items-center">
        
        <div className="flex items-center">
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <line x1="9" x2="15" y1="15" y2="9"></line>
                </svg>
            </button>
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path
                        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48">
                    </path>
                </svg>
            </button>
        </div>
        <div className="flex items-center gap-x-1">
           
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z">
                    </path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
            </button>
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-sm text-white bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path
                        d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</div>
</div>
<div className="relative">
<textarea id="hs-textarea-ex-2"
    className="p-4 pb-12 ti-form-input focus:!ring-primary bg-gray-100 dark:bg-bodybg"
    placeholder="Ask me anything..."></textarea>

<div
    className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-gray-100 dark:bg-bodybg">
    <div className="flex justify-between items-center">
       
        <div className="flex items-center">
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <line x1="9" x2="15" y1="15" y2="9"></line>
                </svg>
            </button>
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path
                        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48">
                    </path>
                </svg>
            </button>
        </div>
        <div className="flex items-center gap-x-1">
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 dark:text-white/70 hover:text-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:hover:text-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z">
                    </path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
            </button>
            <button type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-sm text-white bg-primary hover:bg-primary focus:z-10 focus:outline-none focus:ring-0 shadow-none focus:ring-primary dark:focus:outline-none dark:focus:ring-0 dark:focus:ring-gray-600">
                <svg className="flex-shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path
                        d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z">
                    </path>
                </svg>
            </button>
        </div>
    </div>
</div>
</div>
// End Prism Code//`


export const input23 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<label htmlFor="hs-autoheight-textarea" className="ti-form-label">Contact us</label>
<textarea id="hs-autoheight-textarea" className="ti-form-input" rows={3}
    placeholder="Say hi..."></textarea>
// End Prism Code//`


export const input24 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <form>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email
        address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"
        aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll
        never share your email
        with
        anyone else.</div>
</div>
<div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
</div>
<div className="mb-3 form-check !ps-0">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label ps-2" htmlFor="exampleCheck1">Check
        me out</label>
</div>
<button type="submit" className="ti-btn ti-btn-primary-full">Submit</button>
</form>
// End Prism Code//`


export const input25 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <label htmlFor="inputPassword5" className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control"
    aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" className="form-text">
    Your password must be 8-20 characters long, contain letters and
    numbers,
    and
    must not contain spaces, special characters, or emoji.
</div>
// End Prism Code//`


export const input26 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex flex-wrap gap-4 items-center">
<div className="">
    <label htmlFor="inputPassword6" className="col-form-label">Password</label>
</div>
<div className="">
    <input type="password" id="inputPassword6" className="form-control"
        aria-describedby="passwordHelpInline"/>
</div>
<div className="">
    <span id="passwordHelpInline" className="form-text">
        Must be 8-20 characters long.
    </span>
</div>
</div>
// End Prism Code//`

export const input27 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <form>
<fieldset disabled>
    <legend className="text-2xl">Disabled fieldset example</legend>
    <div className="mb-3">
        <label htmlFor="disabledTextInput" className="form-label">Disabled
            input</label>
        <input type="text" id="disabledTextInput" className="form-control"
            placeholder="Disabled input"/>
    </div>
    <div className="mb-3">
        <label htmlFor="disabledSelect" className="form-label">Disabled select
            menu</label>
        <select id="disabledSelect" className="form-select">
            <option>Disabled select</option>
        </select>
    </div>
    <div className="mb-3">
        <div className="form-check !ps-0">
            <input className="form-check-input" type="checkbox"
                id="disabledFieldsetCheck" disabled/>
            <label className="form-check-label ps-2" htmlFor="disabledFieldsetCheck">
                Can't check this
            </label>
        </div>
    </div>
    <button type="submit"
        className="ti-btn ti-btn-primary-full opacity-[0.6]">Submit</button>
</fieldset>
</form>
// End Prism Code//`



//
export const switch1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<input type="checkbox" id="hs-basic-usage" className="ti-switch"/>
<label htmlFor="hs-basic-usage" className="sr-only">Toggle switch</label>
// End Prism Code//`

export const switch2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="hs-tooltip flex items-center">
<input type="checkbox" id="hs-tooltip-example" className="hs-tooltip-toggle ti-switch shrink-0"/>
<label htmlFor="hs-tooltip-example" className="text-sm text-gray-500 ms-3 dark:text-white/70">Allow push
  notifications</label>
<div
  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-sm shadow-sm dark:bg-slate-700"
  role="tooltip">
  Enable push notifications
</div>
</div>
// End Prism Code//`

export const switch3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="space-y-4">
<div className="flex items-center">
  <input type="checkbox" id="hs-basic-with-description-unchecked" className="ti-switch"/>
  <label htmlFor="hs-basic-with-description-unchecked"
    className="text-sm text-gray-500 ms-3 dark:text-white/70">Unchecked</label>
</div>

<div className="flex items-center">
  <input type="checkbox" id="hs-basic-with-description-checked" className="ti-switch" checked/>
  <label htmlFor="hs-basic-with-description-checked"
    className="text-sm text-gray-500 ms-3 dark:text-white/70">Checked</label>
</div>

<div className="flex items-center">
  <label className="text-sm text-gray-500 me-3 dark:text-white/70">On</label>
  <input type="checkbox" id="hs-basic-with-description" className="ti-switch"/>
  <label className="text-sm text-gray-500 ms-3 dark:text-white/70">Off</label>
</div>
</div>
// End Prism Code//`


export const switch4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-y-4">
<div className="flex items-center opacity-70">
  <input type="checkbox" id="hs-basic-disabled-with-description-unchecked"
    className="ti-switch shrink-0 pointer-events-none" disabled/>
  <label htmlFor="hs-basic-disabled-with-description-unchecked"
    className="text-sm text-gray-500 ms-3 dark:text-white/70">Unchecked</label>
</div>

<div className="flex items-center opacity-70">
  <input type="checkbox" id="hs-basic-disabled-with-description-checked"
    className="ti-switch shrink-0 pointer-events-none" checked disabled/>
  <label htmlFor="hs-basic-disabled-with-description-checked"
    className="text-sm text-gray-500 ms-3 dark:text-white/70">Checked</label>
</div>

<div className="flex items-center opacity-70">
  <label className="text-sm text-gray-500 me-3 dark:text-white/70">On</label>
  <input type="checkbox" id="hs-basic-disabled-with-description"
    className="ti-switch shrink-0 pointer-events-none" disabled/>
  <label className="text-sm text-gray-500 ms-3 dark:text-white/70">Off</label>
</div>
</div>
// End Prism Code//`

export const switch5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-y-4">
<div className="flex items-center">
  <input type="checkbox" id="hs-xs-switch"
    className="ti-switch shrink-0 !w-[35px] !h-[21px] before:size-4"/>
  <label htmlFor="hs-xs-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Extra small</label>
</div>

<div className="flex items-center">
  <input type="checkbox" id="hs-small-switch" className="ti-switch shrink-0 !w-11 !h-6 before:size-5"/>
  <label htmlFor="hs-small-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Small</label>
</div>


<div className="flex items-center">
  <input type="checkbox" id="hs-medium-switch" className="ti-switch shrink-0"/>
  <label htmlFor="hs-medium-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Medium</label>
</div>

<div className="flex items-center">
  <input type="checkbox" id="hs-large-switch"
    className="ti-switch shrink-0 !w-[4.25rem] !h-9 before:w-8 before:h-8"/>
  <label htmlFor="hs-large-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Large</label>
</div>
</div>
// End Prism Code//`

export const switch6 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="space-y-4">
<div className="flex items-center">
  <input type="checkbox" id="hs-valid-toggle-switch" className="ti-switch shrink-0 checked:bg-none checked:bg-green-600 checked:hover:bg-green-600 checked:focus:bg-green-600 focus:border-green-600 focus:ring-green-600 dark:checked:bg-green-600

                checked:before:bg-green-200 dark:checked:before:bg-green-200" checked/>
  <label htmlFor="hs-valid-toggle-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Valid
    toggle switch</label>
</div>

<div className="flex items-center">
  <input type="checkbox" id="hs-invalid-toggle-switch" className="ti-switch shrink-0 checked:bg-none checked:bg-red-600 checked:hover:bg-red-600 
  checked:focus:bg-red-600 focus:border-red-600 focus:ring-red-600 dark:checked:bg-red-600

                checked:before:bg-red-200 dark:checked:before:bg-red-200" checked/>
  <label htmlFor="hs-invalid-toggle-switch" className="text-sm text-gray-500 ms-3 dark:text-white/70">Invalid
    toggle switch</label>
</div>
</div>
// End Prism Code//`

export const switch7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-x-4 rtl:space-x-reverse">
<div className="relative inline-block">
  <input type="checkbox" id="hs-xs-solid-switch"
    className="ti-switch shrink-0 !w-[35px] !h-[21px] before:size-4"/>
  <label htmlFor="hs-xs-solid-switch" className="sr-only">Extra small</label>
</div>

<div className="relative inline-block">
  <input type="checkbox" id="hs-small-solid-switch"
    className="ti-switch shrink-0 !w-11 !h-6 before:size-5"/>
  <label htmlFor="hs-small-solid-switch" className="sr-only">Small</label>
</div>


<div className="relative inline-block">
  <input type="checkbox" id="hs-medium-solid-switch" className="ti-switch shrink-0"/>
  <label htmlFor="hs-medium-solid-switch" className="sr-only">Medium</label>
</div>

<div className="relative inline-block">
  <input type="checkbox" id="hs-large-solid-switch"
    className="ti-switch shrink-0 !w-[4.25rem] !h-9 before:w-8 before:h-8"/>
  <label htmlFor="hs-large-solid-switch" className="sr-only">Large</label>
</div>
</div>
// End Prism Code//`

export const switch8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="space-x-4 rtl:space-x-reverse">
<div className="relative inline-block">
  <input type="checkbox" id="hs-small-solid-switch-with-icons" className="peer relative shrink-0 w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary checked:border-primary focus:checked:border-primary dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-600

  before:inline-block before:size-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-white"
  />
  <label htmlFor="hs-small-solid-switch-with-icons" className="sr-only">switch</label>
  <span className="peer-checked:text-white text-gray-500 dark:text-white/70 size-5 absolute top-[3px] start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
  <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-5 absolute top-[3px] end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
</div>
<div className="relative inline-block">
  <input type="checkbox" id="hs-default-solid-switch-with-icons" className="peer relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary checked:border-primary focus:checked:border-primary dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-600

  before:inline-block before:size-6 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-white" />
  <label htmlFor="hs-default-solid-switch-with-icons" className="sr-only">switch</label>
  <span className="peer-checked:text-white text-gray-500 dark:text-white/70 size-6 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
  <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-6 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
</div>
<div className="relative inline-block">
  <input type="checkbox" id="hs-large-solid-switch-with-icons" className="peer relative shrink-0 w-[4.25rem] h-9 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary checked:border-primary focus:checked:border-primary dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-600

  before:inline-block before:w-8 before:h-8 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-white" />
  <label htmlFor="hs-large-solid-switch-with-icons" className="sr-only">switch</label>
  <span className="peer-checked:text-white text-gray-500 dark:text-white/70 size-8 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
  <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-8 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
</div>
</div>
// End Prism Code//`

export const switch9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-x-4 rtl:space-x-reverse">
<div className="relative inline-block">
  <input type="checkbox" id="hs-xs-soft-switch"
    className="ti-switch checked:!bg-primary/10 checked:!text-primary/10 checked:!border-primary/20 focus:checked:!border-primary/10 checked:before:!bg-primary dark:checked:before:bg-primary shrink-0 !w-[35px] !h-[21px] before:size-4"/>
  <label htmlFor="hs-xs-soft-switch" className="sr-only">Extra small</label>
</div>

<div className="relative inline-block">
  <input type="checkbox" id="hs-small-soft-switch"
    className="ti-switch checked:!bg-primary/10 checked:!text-primary/10 checked:!border-primary/20 focus:checked:!border-primary/10 checked:before:!bg-primary dark:checked:before:bg-primary shrink-0 !w-11 !h-6 before:size-5"/>
  <label htmlFor="hs-small-soft-switch" className="sr-only">Small</label>
</div>


<div className="relative inline-block">
  <input type="checkbox" id="hs-medium-soft-switch"
    className="ti-switch checked:!bg-primary/10 checked:!text-primary/10 checked:!border-primary/20 focus:checked:!border-primary/10 checked:before:!bg-primary dark:checked:before:bg-primary shrink-0"/>
  <label htmlFor="hs-medium-soft-switch" className="sr-only">Medium</label>
</div>

<div className="relative inline-block">
  <input type="checkbox" id="hs-large-soft-switch"
    className="ti-switch checked:!bg-primary/10 checked:!text-primary/10 checked:!border-primary/20 focus:checked:!border-primary/10 checked:before:!bg-primary dark:checked:before:bg-primary shrink-0 !w-[4.25rem] !h-9 before:w-8 before:h-8"/>
  <label htmlFor="hs-large-soft-switch" className="sr-only">Large</label>
</div>
</div>
// End Prism Code//`

export const switch10 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-x-4 rtl:space-x-reverse">
<div className="relative inline-block">
  <input type="checkbox" id="hs-small-switch-soft-with-icons" className="peer relative shrink-0 w-11 h-6 p-px bg-gray-100 border border-gray-200 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary/30 checked:border-primary/50 checked:hover:!bg-primary/10 checked:hover:!text-primary/10 checked:hover:!border-primary/30 checked:focus:!border-primary/30 checked:focus:!bg-primary/10 checked:focus:!text-primary/10 focus:checked:border-primary/50 dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary/30 dark:checked:border-primary dark:focus:ring-offset-gray-600
  before:inline-block before:size-5 before:bg-white checked:before:bg-primary before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-primary"/>
  <label htmlFor="hs-small-switch-soft-with-icons" className="sr-only">switch</label>
  <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-5 absolute top-[3px] start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
  <span className="peer-checked:text-white  size-5 absolute top-[3px] end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
</div>
<div className="relative inline-block">
  <input type="checkbox" id="hs-default-switch-soft-with-icons" className="peer relative w-[3.25rem] h-7 p-px bg-gray-100 border border-gray-200 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary/30 checked:border-primary/50 checked:hover:!bg-primary/10 checked:hover:!text-primary/10 checked:hover:!border-primary/30 checked:focus:!border-primary/30 checked:focus:!bg-primary/10 checked:focus:!text-primary/10  focus:checked:border-primary/50 dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary/30 dark:checked:border-primary dark:focus:ring-offset-gray-600
  before:inline-block before:size-6 before:bg-white checked:before:bg-primary before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-primary"/>
  <label htmlFor="hs-default-switch-soft-with-icons" className="sr-only">switch</label>
  <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-6 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
  <span className="peer-checked:text-white size-6 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
</div>
<div className="relative inline-block">
  <input type="checkbox" id="hs-large-switch-soft-with-icons" className="peer relative shrink-0 w-[4.25rem] h-9 p-px bg-gray-100 border border-gray-200 text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-primary/30 checked:hover:!bg-primary/10 checked:hover:!text-primary/10 checked:hover:!border-primary/30 checked:focus:!border-primary/30 checked:focus:!bg-primary/10 checked:focus:!text-primary/10  checked:border-primary/50 focus:checked:border-primary/50 dark:bg-bodybg dark:border-white/10 dark:checked:bg-primary/30 dark:checked:border-primary dark:focus:ring-offset-gray-600

  before:inline-block before:w-8 before:h-8 before:bg-white checked:before:bg-primary before:translate-x-0 checked:before:translate-x-full rtl:checked:before:-translate-x-full before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-black/20 dark:checked:before:bg-primary"/>
  <label htmlFor="hs-large-switch-soft-with-icons" className="sr-only">switch</label>
  <span className="peer-checked:text-primary text-gray-500 dark:text-white/70 size-8 absolute top-0.5 start-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  </span>
  <span className="peer-checked:text-white size-8 absolute top-0.5 end-0.5 flex justify-center items-center pointer-events-none transition-colors ease-in-out duration-200">
    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
</div>
</div>
// End Prism Code//`


//InputNumber


export const inputnumber1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="py-2 px-3 bg-gray-100 rounded-sm dark:bg-bodybg2" data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-5">
    <div className="grow">
        <input
            className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
            type="text" value="1" data-hs-input-number-input/>
    </div>
    <div className="flex justify-end items-center gap-x-1.5">
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <i className="ri-subtract-line"></i>
        </button>
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <i className="ri-add-line"></i>
        </button>
    </div>
</div>
</div>
// End Prism Code//`


export const inputnumber2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10"
data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-1 overflow-hidden">
    <div className="grow py-2 px-3">
        <span className="block text-xs text-gray-500 dark:text-white/70">
            Select quantity
        </span>
        <input
            className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
            type="text" value="1" data-hs-input-number-input/>
    </div>
    <div
        className="flex flex-col -gap-y-px divide-y divide-gray-200 border-s border-gray-200 dark:divide-white/10 dark:border-white/10">
        <button type="button"
            className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-se-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:text-white dark:hover:bg-bgdark/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
            </svg>
        </button>
        <button type="button"
            className="size-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-lg bg-gray-50 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:text-white dark:hover:bg-bgdark/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
            </svg>
        </button>
    </div>
</div>
</div>
// End Prism Code//`

export const inputnumber3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10"
data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-1 overflow-hidden">
    <div className="grow py-2 px-3">
        <input
            className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
            type="text" value="1" data-hs-input-number-input/>
    </div>
    <div
        className="flex items-center -gap-y-px divide-x divide-gray-200 border-s border-gray-200 dark:divide-white/10 dark:border-white/10">
        <button type="button"
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-sm bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:text-white dark:hover:bg-bgdark/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
            </svg>
        </button>
        <button type="button"
            className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-sm bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:text-white dark:hover:bg-bgdark/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
            </svg>
        </button>
    </div>
</div>
</div>
// End Prism Code//`


export const inputnumber4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10"
data-hs-input-number>
<div className="flex items-center gap-x-1.5">
    <button type="button"
        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
        data-hs-input-number-decrement>
        <i className="ri-subtract-line"></i>
    </button>
    <input
        className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
        type="text" value="0" data-hs-input-number-input/>
    <button type="button"
        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
        data-hs-input-number-increment>
        <i className="ri-add-line"></i>
    </button>
</div>
</div>
// End Prism Code//`

export const inputnumber5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="py-2 px-3 bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10"
data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-3">
    <div>
        <span className="block font-medium text-sm text-gray-800 dark:text-white">
            Additional seats
        </span>
        <span className="block text-xs text-gray-500 dark:text-white/70">
            $39 monthly
        </span>
    </div>
    <div className="flex items-center gap-x-1.5">
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
            </svg>
        </button>
        <input
            className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
            type="text" value="0" data-hs-input-number-input/>
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
            </svg>
        </button>
    </div>
</div>
</div>
// End Prism Code//`


export const inputnumber6 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="py-2 px-3 bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10"
data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-3">
    <input
        className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
        type="text" value="10" data-hs-input-number-input disabled/>
    <div className="flex justify-end items-center gap-x-1.5">
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
            </svg>
        </button>
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
            </svg>
        </button>
    </div>
</div>
</div>
// End Prism Code//`

export const inputnumber7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="py-2 px-3 bg-white border border-gray-200 rounded-sm dark:bg-bodybg dark:border-white/10"
data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-3">
    <input
        className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
        type="text" value="10" data-hs-input-number-input disabled/>
    <div className="flex justify-end items-center gap-x-1.5">
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement disabled>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
            </svg>
        </button>
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
            </svg>
        </button>
    </div>
</div>
</div>
// End Prism Code//`


export const inputnumber8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="py-2 px-3 bg-white border border-danger rounded-sm dark:bg-bodybg"
data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-3">
    <div className="relative w-full">
        <input id="hs-validation-name-error"
            className="w-full p-0 pe-7 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
            type="text" value="10" data-hs-input-number-input
            aria-describedby="hs-validation-name-error-helper"/>
        <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none">
            <svg className="flex-shrink-0 size-4 text-danger"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
        </div>
    </div>
    <div className="flex justify-end items-center gap-x-1.5">
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
            </svg>
        </button>
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
            </svg>
        </button>
    </div>
</div>
</div>

<p className="text-sm text-danger mt-2" id="hs-validation-name-error-helper">Out of limit
</p>
// End Prism Code//`

export const inputnumber9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="py-2 px-3 bg-gray-100 rounded-sm dark:bg-bodybg2" data-hs-input-number>
<div className="w-full flex justify-between items-center gap-x-5">
    <div className="grow">
        <span className="block text-xs text-gray-500 dark:text-white/70">
            Select quantity
        </span>
        <input
            className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
            type="text" defaultValue="1" data-hs-input-number-input/>
    </div>
    <div className="flex justify-end items-center gap-x-1.5">
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-decrement>
            <i className="ri-subtract-line"></i>
        </button>
        <button type="button"
            className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white dark:bg-bodybg text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none  dark:border-white/10 dark:text-white dark:hover:bg-bgdark/80 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white/10"
            data-hs-input-number-increment>
            <i className="ri-add-line"></i>
        </button>
    </div>
</div>
</div>
// End Prism Code//`

//Form Passwords

export const password1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex">
<div className="flex-1">
    <input type="password" id="hs-strong-password-base"
        className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
        placeholder="Enter password"/>
    <div data-hs-strong-password='{
    "target": "#hs-strong-password-base",
    "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1"
    }' className="flex mt-3 -mx-1"></div>
</div>
</div>
// End Prism Code//`

export const password2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex">
<div className="relative flex-1">
    <input type="password"
        id="hs-strong-password-api-with-indicator-and-hint-in-popover"
        className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
        placeholder="Enter password"/>
    <div id="hs-strong-password-api"
        className="hidden absolute z-10 w-full bg-white shadow-md rounded-sm p-4 dark:bg-bodybg dark:border dark:border-white/10 dark:divide-white/10">
        <div id="hs-strong-password-api-in-popover" data-hs-strong-password='{
            "target": "#hs-strong-password-api-with-indicator-and-hint-in-popover",
            "hints": "#hs-strong-password-api",
            "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1",
            "mode": "popover",
            "checksExclude": ["lowercase", "min-length"],
            "specialCharactersSet": "&!@"
        }' className="flex mt-2 -mx-1">
        </div>
        <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
            Your password must contain:
        </h4>
        <ul className="space-y-1 text-sm text-gray-500 dark:text-white/70">
            <li data-hs-strong-password-hints-rule-text="uppercase"
                className="hs-strong-password-active:text-success flex items-center gap-x-2">
                <span className="hidden" data-check>
                    <svg className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </span>
                <span data-uncheck>
                    <svg className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </span>
                Should contain uppercase.
            </li>
            <li data-hs-strong-password-hints-rule-text="numbers"
                className="hs-strong-password-active:text-success flex items-center gap-x-2">
                <span className="hidden" data-check>
                    <svg className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </span>
                <span data-uncheck>
                    <svg className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </span>
                Should contain numbers.
            </li>
            <li data-hs-strong-password-hints-rule-text="special-characters"
                className="hs-strong-password-active:text-success flex items-center gap-x-2">
                <span className="hidden" data-check>
                    <svg className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </span>
                <span data-uncheck>
                    <svg className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </span>
                Should contain special characters (available chars: &!@).
            </li>
        </ul>
    </div>
</div>
</div>
// End Prism Code//`

 export const password3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="flex-1">
 <input type="password" id="hs-strong-password-with-minLength"
     className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
     placeholder="Enter password"/>
 <div id="hs-strong-password-minLength" data-hs-strong-password='{
     "target": "#hs-strong-password-with-minLength",
     "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1",
     "minLength": "8"
     }' className="flex mt-3 -mx-1">
 </div>
</div>
// End Prism Code//`

 export const password4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="flex">
 <div className="relative flex-1">
     <input type="password"
         id="hs-strong-password-with-indicator-and-hint-in-popover"
         className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
         placeholder="Enter password"/>
     <div id="hs-strong-password-popover"
         className="hidden absolute z-10 w-full bg-white shadow-md rounded-sm p-4 dark:bg-bodybg dark:border dark:border-white/10 dark:divide-white/10">
         <div id="hs-strong-password-in-popover" data-hs-strong-password='{
         "target": "#hs-strong-password-with-indicator-and-hint-in-popover",
         "hints": "#hs-strong-password-popover",
         "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1",
         "mode": "popover"
     }' className="flex mt-2 -mx-1">
         </div>

         <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
             Your password must contain:
         </h4>

         <ul className="space-y-1 text-sm text-gray-500 dark:text-white/70">
             <li data-hs-strong-password-hints-rule-text="min-length"
                 className="hs-strong-password-active:text-success flex items-center gap-x-2">
                 <span className="hidden" data-check>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                     </svg>
                 </span>
                 <span data-uncheck>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <path d="M18 6 6 18" />
                         <path d="m6 6 12 12" />
                     </svg>
                 </span>
                 Minimum number of characters is 6.
             </li>
             <li data-hs-strong-password-hints-rule-text="lowercase"
                 className="hs-strong-password-active:text-success flex items-center gap-x-2">
                 <span className="hidden" data-check>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                     </svg>
                 </span>
                 <span data-uncheck>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <path d="M18 6 6 18" />
                         <path d="m6 6 12 12" />
                     </svg>
                 </span>
                 Should contain lowercase.
             </li>
             <li data-hs-strong-password-hints-rule-text="uppercase"
                 className="hs-strong-password-active:text-success flex items-center gap-x-2">
                 <span className="hidden" data-check>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                     </svg>
                 </span>
                 <span data-uncheck>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <path d="M18 6 6 18" />
                         <path d="m6 6 12 12" />
                     </svg>
                 </span>
                 Should contain uppercase.
             </li>
             <li data-hs-strong-password-hints-rule-text="numbers"
                 className="hs-strong-password-active:text-success flex items-center gap-x-2">
                 <span className="hidden" data-check>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                     </svg>
                 </span>
                 <span data-uncheck>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <path d="M18 6 6 18" />
                         <path d="m6 6 12 12" />
                     </svg>
                 </span>
                 Should contain numbers.
             </li>
             <li data-hs-strong-password-hints-rule-text="special-characters"
                 className="hs-strong-password-active:text-success flex items-center gap-x-2">
                 <span className="hidden" data-check>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <polyline points="20 6 9 17 4 12" />
                     </svg>
                 </span>
                 <span data-uncheck>
                     <svg className="flex-shrink-0 size-4"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                         <path d="M18 6 6 18" />
                         <path d="m6 6 12 12" />
                     </svg>
                 </span>
                 Should contain special characters.
             </li>
         </ul>
     </div>
 </div>
</div>
// End Prism Code//`


 export const password5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="flex mb-2">
 <div className="flex-1">
     <input type="password" id="hs-strong-password-with-indicator-and-hint"
         className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-white/10"
         placeholder="Enter password"/>
     <div id="hs-strong-password" data-hs-strong-password='{
         "target": "#hs-strong-password-with-indicator-and-hint",
         "hints": "#hs-strong-password-hints",
         "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-success h-2 flex-auto rounded-full bg-primary/70 opacity-50 mx-1"
     }' className="flex mt-3 -mx-1"></div>
 </div>
</div>
<div id="hs-strong-password-hints" className="">
 <div>
     <span className="text-sm text-gray-800 dark:text-gray-200">Level:</span>
     <span
         data-hs-strong-password-hints-weakness-text='["Empty", "Weak", "Medium", "Strong", "Very Strong", "Super Strong"]'
         className="text-sm font-semibold text-gray-800 dark:text-gray-200"></span>
 </div>

 <h4 className="my-2 text-sm font-semibold text-gray-800 dark:text-white">
     Your password must contain:
 </h4>

 <ul className="space-y-1 text-sm text-gray-500 dark:text-white/70">
     <li data-hs-strong-password-hints-rule-text="min-length"
         className="hs-strong-password-active:text-success flex items-center gap-x-2">
         <span className="hidden" data-check>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12" />
             </svg>
         </span>
         <span data-uncheck>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <path d="M18 6 6 18" />
                 <path d="m6 6 12 12" />
             </svg>
         </span>
         Minimum number of characters is 6.
     </li>
     <li data-hs-strong-password-hints-rule-text="lowercase"
         className="hs-strong-password-active:text-success flex items-center gap-x-2">
         <span className="hidden" data-check>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12" />
             </svg>
         </span>
         <span data-uncheck>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <path d="M18 6 6 18" />
                 <path d="m6 6 12 12" />
             </svg>
         </span>
         Should contain lowercase.
     </li>
     <li data-hs-strong-password-hints-rule-text="uppercase"
         className="hs-strong-password-active:text-success flex items-center gap-x-2">
         <span className="hidden" data-check>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12" />
             </svg>
         </span>
         <span data-uncheck>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <path d="M18 6 6 18" />
                 <path d="m6 6 12 12" />
             </svg>
         </span>
         Should contain uppercase.
     </li>
     <li data-hs-strong-password-hints-rule-text="numbers"
         className="hs-strong-password-active:text-success flex items-center gap-x-2">
         <span className="hidden" data-check>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12" />
             </svg>
         </span>
         <span data-uncheck>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <path d="M18 6 6 18" />
                 <path d="m6 6 12 12" />
             </svg>
         </span>
         Should contain numbers.
     </li>
     <li data-hs-strong-password-hints-rule-text="special-characters"
         className="hs-strong-password-active:text-success flex items-center gap-x-2">
         <span className="hidden" data-check>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <polyline points="20 6 9 17 4 12" />
             </svg>
         </span>
         <span data-uncheck>
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                 strokeLinejoin="round">
                 <path d="M18 6 6 18" />
                 <path d="m6 6 12 12" />
             </svg>
         </span>
         Should contain special characters.
     </li>
 </ul>
</div>
// End Prism Code//`

export const password6 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<label className="block text-sm mb-2 dark:text-white">Password</label>
<div className="relative">
    <input id="hs-toggle-password" type="password"
        className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary"
        placeholder="Enter password" value="12345qwerty"/>
    <button type="button" data-hs-toggle-password='{
    "target": "#hs-toggle-password"
    }'
        className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-transparent">
        <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-white" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path className="hs-password-active:hidden"
                d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path className="hs-password-active:hidden"
                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path className="hs-password-active:hidden"
                d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22" />
            <path className="hidden hs-password-active:block"
                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3" />
        </svg>
    </button>
</div>
// End Prism Code//`


export const password7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="mb-5">
<label htmlFor="hs-toggle-password-with-checkbox" className="block text-sm mb-2 dark:text-white">Current password</label>
<input id="hs-toggle-password-with-checkbox" type="text" className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200
 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2
  dark:border-white/10 dark:text-white/70 dark:focus:ring-primary" placeholder="Enter current password" value="12345qwerty"/>

<div className="flex mt-4">
    <input data-hs-toggle-password="{
        &quot;target&quot;: &quot;#hs-toggle-password-with-checkbox&quot;
    }" id="hs-toggle-password-checkbox" type="checkbox" className="ti-form-checkbox mt-0.5 pointer-events-none active"/>
    <label htmlFor="hs-toggle-password-checkbox" className="text-sm text-gray-500 ms-2 dark:text-white/70">Show password</label>
</div>
</div>
// End Prism Code//`

export const password8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="space-y-5" data-hs-toggle-password-group>
                                    
<label htmlFor="hs-toggle-password-multi-toggle-np"
    className="block text-sm mb-2 dark:text-white">New password</label>
<div className="relative">
    <input id="hs-toggle-password-multi-toggle-np" type="password"
        className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary"
        placeholder="Enter new password"/>
    <button type="button" data-hs-toggle-password='{
        "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
    }'
        className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-transparent">
        <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-white" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path className="hs-password-active:hidden"
                d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path className="hs-password-active:hidden"
                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path className="hs-password-active:hidden"
                d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22" />
            <path className="hidden hs-password-active:block"
                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3" />
        </svg>
    </button>
</div>
<label htmlFor="hs-toggle-password-multi-toggle"
    className="block text-sm mb-2 dark:text-white">Current password</label>
<div className="relative">
    <input id="hs-toggle-password-multi-toggle" type="password"
        className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary"
        placeholder="Enter current password" value="12345qwerty"/>
    <button type="button" data-hs-toggle-password='{
        "target": ["#hs-toggle-password-multi-toggle", "#hs-toggle-password-multi-toggle-np"]
    }'
        className="absolute top-0 end-0 p-3.5 rounded-e-md dark:focus:outline-none dark:focus:ring-0 dark:shadow-none dark:focus:ring-transparent">
        <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-white" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path className="hs-password-active:hidden"
                d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path className="hs-password-active:hidden"
                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path className="hs-password-active:hidden"
                d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22" />
            <path className="hidden hs-password-active:block"
                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3" />
        </svg>
    </button>
</div>
</div>
// End Prism Code//`

export const password9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    data-hs-pin-input-item autoFocus/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    data-hs-pin-input-item/>
</div>
// End Prism Code//`


export const password10 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
</div>
// End Prism Code//`

export const password11 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-gray-100 border-transparent rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 dark:border-transparent dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-gray-100 border-transparent rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 dark:border-transparent dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-gray-100 border-transparent rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 dark:border-transparent dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-gray-100 border-transparent rounded-md text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg2 dark:border-transparent dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
</div>
// End Prism Code//`

export const password12 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:text-white dark:focus:ring-primary dark:focus:border-b-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:text-white dark:focus:ring-primary dark:focus:border-b-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:text-white dark:focus:ring-primary dark:focus:border-b-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-primary focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-white/10 dark:text-white dark:focus:ring-primary dark:focus:border-b-primary"
    placeholder="⚬" data-hs-pin-input-item/>
</div>
// End Prism Code//`

export const password13 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm focus:scale-110 focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
</div>
// End Prism Code//`

export const password14 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input='{"availableCharsRE": "^[0-9]+$"}'>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
</div>
// End Prism Code//`

export const password15 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input='{"availableCharsRE": "^[0-3]+$"}'>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
</div>
// End Prism Code//`

export const password16 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input='{"availableCharsRE": "^[0-3]+$"}'>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item />
</div>
// End Prism Code//`

export const password17 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    type="tel" placeholder="⚬" data-hs-pin-input-item/>
<input
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    type="tel" placeholder="⚬" data-hs-pin-input-item/>
<input
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    type="tel" placeholder="⚬" data-hs-pin-input-item/>
<input
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    type="tel" placeholder="⚬" data-hs-pin-input-item/>
</div>
// End Prism Code//`

export const password18 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item disabled/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item disabled/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item disabled/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item disabled/>
</div>
// End Prism Code//`

export const password19 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
</div>
<div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
</div>
<div className="flex space-x-3 rtl:space-x-reverse" data-hs-pin-input>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
<input type="text"
    className="dark:placeholder:text-white/50 block w-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary"
    placeholder="⚬" data-hs-pin-input-item/>
</div>
// End Prism Code//`

export const password20 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex space-x-3 rtl:space-x-reverse " data-hs-pin-input>
<input type="text" className="dark:placeholder:text-white/50 block size-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block size-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block size-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block size-[38px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
</div>

<div className="flex space-x-3  rtl:space-x-reverse" data-hs-pin-input>
<input type="text" className="dark:placeholder:text-white/50 block size-[46px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block size-[46px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block size-[46px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block size-[46px] text-center border-gray-200 rounded-md text-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
</div>

<div className="flex space-x-3 rtl:space-x-reverse " data-hs-pin-input>
<input type="text" className="dark:placeholder:text-white/50 block sm:size-[62px] size-[50px] text-center border-gray-200 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block sm:size-[62px] size-[50px] text-center border-gray-200 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block sm:size-[62px] size-[50px] text-center border-gray-200 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
<input type="text" className="dark:placeholder:text-white/50 block sm:size-[62px] size-[50px] text-center border-gray-200 rounded-md text-lg [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:focus:ring-primary" placeholder="⚬" data-hs-pin-input-item/>
</div>
// End Prism Code//`

//Form Counter

export const counter1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="flex justify-end mb-3">
<div id="toggle-count" className="p-0.5 inline-block bg-gray-100 rounded-sm dark:bg-bodybg2">
<label htmlFor="toggle-count-monthly" className="relative inline-block py-2 px-3">
    <span className="inline-block relative z-10 text-sm font-medium text-gray-800 cursor-pointer dark:text-gray-200">
    Monthly
    </span>
    <input id="toggle-count-monthly" name="toggle-count" type="radio" className="absolute top-0 end-0 size-full border-transparent bg-transparent dark:bg-bodybg bg-none text-transparent rounded-sm cursor-pointer before:absolute before:inset-0 before:size-full before:rounded-sm focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-bodybg dark:focus:ring-offset-transparent"/>
</label>
<label htmlFor="toggle-count-annual" className="relative inline-block py-2 px-3 dark:bg-bodybg2">
    <span className="inline-block relative z-10 text-sm font-medium text-gray-800 cursor-pointer dark:text-gray-200">
    Annual
    </span>
    <input id="toggle-count-annual" name="toggle-count" type="radio" className="absolute top-0 end-0 size-full border-transparent bg-transparent bg-none text-transparent rounded-sm cursor-pointer before:absolute before:inset-0 before:size-full before:rounded-sm focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-bodybg2 dark:focus:ring-offset-transparent" checked/>
</label>
</div>
</div>

<div className="grid sm:grid-cols-3 lg:items-center border border-gray-200 rounded-sm dark:border-white/10">

<div className="flex flex-col p-4">
<h4 className="text-gray-800 mb-1 dark:text-white">Startup</h4>
<div className="flex gap-x-1">
    <span className="text-xl font-normal text-gray-800 dark:text-white">$</span>
    <p data-hs-toggle-count='{
        "target": "#toggle-count",
        "min": 19,
        "max": 29
    }' className="text-gray-800 font-semibold text-3xl dark:text-white">
    19
    </p>
</div>
</div>
<div className="flex flex-col p-4">
<div className="flex justify-between">
    <h4 className="text-gray-800 mb-1 dark:text-gray-200">Team</h4>
</div>
<div className="flex gap-x-1">
    <span className="text-xl font-normal text-gray-800 dark:text-gray-200">$</span>
    <p data-hs-toggle-count='{
        "target": "#toggle-count",
        "min": 89,
        "max": 99
    }' className="text-gray-800 font-semibold text-3xl dark:text-gray-200">
    89
    </p>
</div>
</div>
<div className="flex flex-col p-4">
<h4 className="text-gray-800 mb-1 dark:text-gray-200">Enterprise</h4>
<div className="flex gap-x-1">
    <span className="text-xl font-normal text-gray-800 dark:text-gray-200">$</span>
    <p data-hs-toggle-count='{
        "target": "#toggle-count",
        "min": 129,
        "max": 149
    }' className="text-gray-800 font-semibold text-3xl dark:text-gray-200">
    129
    </p>
</div>
</div>
</div>
// End Prism Code//`
export const counter2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="flex justify-center mb-4">
<div>
    <label htmlFor="toggle-count-switch" className="inline-block p-2">
        <span className="inline-block text-sm text-gray-800 cursor-pointer dark:text-white">
            Monthly
        </span>
    </label>
    <input id="toggle-count-switch" name="toggle-count-switch" type="checkbox" className="ti-switch"/>
    <label htmlFor="toggle-count-switch" className="inline-block p-2">
        <span className="inline-block text-sm text-gray-800 cursor-pointer dark:text-white">
            Annual
        </span>
    </label>
</div>
</div>
<div className="grid sm:grid-cols-3 lg:items-center border border-gray-200 rounded-sm dark:border-white/10">

<div className="flex flex-col p-4">
    <h4 className="text-gray-800 mb-1 dark:text-white">Startup</h4>
    <div className="flex gap-x-1">
    <span className="text-xl font-normal text-gray-800 dark:text-white">$</span>
    <p data-hs-toggle-count='{
        "target": "#toggle-count-switch",
        "min": 19,
        "max": 29
        }' className="text-gray-800 font-semibold text-3xl dark:text-white">
        19
    </p>
    </div>
</div>
<div className="flex flex-col p-4">
    <div className="flex justify-between">
    <h4 className="text-gray-800 mb-1 dark:text-white">Team</h4>
    </div>
    <div className="flex gap-x-1">
    <span className="text-xl font-normal text-gray-800 dark:text-white">$</span>
    <p data-hs-toggle-count='{
        "target": "#toggle-count-switch",
        "min": 89,
        "max": 99
        }' className="text-gray-800 font-semibold text-3xl dark:text-white">
        89
    </p>
    </div>
</div>
<div className="flex flex-col p-4">
    <h4 className="text-gray-800 mb-1 dark:text-white">Enterprise</h4>
    <div className="flex gap-x-1">
    <span className="text-xl font-normal text-gray-800 dark:text-white">$</span>
    <p data-hs-toggle-count='{
        "target": "#toggle-count-switch",
        "min": 129,
        "max": 149
        }' className="text-gray-800 font-semibold text-3xl dark:text-white">
        129
    </p>
    </div>
</div>
</div>
// End Prism Code//`

export const counter3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div id="hs-wrapper-for-copy" className="space-y-3">
<input id="hs-content-for-copy" type="text" className="dark:placeholder:text-white/50 py-3 px-4 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:ring-primary" placeholder="Enter Name"/>
</div>

<p className="mt-3 text-end">
<button type="button" data-hs-copy-markup='{
    "targetSelector": "#hs-content-for-copy",
    "wrapperSelector": "#hs-wrapper-for-copy",
    "limit": 10
}' id="hs-copy-content" className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-bgdark dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary">
<svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
Add Name
</button>
</p>
// End Prism Code//`
export const counter4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div id="hs-wrapper-select-for-copy" className="space-y-3">
<div id="hs-content-select-for-copy" className="relative">
<select data-hs-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-primary\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div>"
    }'>
    <option value="">Select Option ...</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
</div>
</div>
</div>
<p className="mt-3 text-end">
<button type="button" data-hs-copy-markup='{
        "targetSelector": "#hs-content-select-for-copy",
        "wrapperSelector": "#hs-wrapper-select-for-copy",
        "limit": 3
    }' id="hs-copy-select-content" className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:hover:bg-bgdark dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary">
    <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
    Add Option
</button>
</p>
// End Prism Code//`

// Form Advanvced select



export const advanvcedselect1 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<select data-hs-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
</select>
<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`

export const advanvcedselect2 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<select data-hs-select='{
    "placeholder": "<span class=\"inline-flex items-center\"><svg class=\"flex-shrink-0 size-3.5 me-2\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/></svg> Filter</span>",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
</select>
<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`


export const advanvcedselect3 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="relative">
<select multiple data-hs-select='{
    "placeholder": "Select multiple options...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`


export const advanvcedselect4 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<select multiple data-hs-select='{
    "placeholder": "Select multiple options...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "toggleCountText": "selected",
    "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`


export const advanvcedselect5 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="relative">
<select data-hs-select='{
  "hasSearch": true,
  "searchPlaceholder": "Search...",
  "searchClasses": "block w-full text-sm border-gray-200 rounded-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary py-2 px-3 dark:placeholder:text-white/50",
  "searchWrapperClasses": "bg-white p-2 -mx-1 sticky top-0 dark:bg-bodybg",
  "placeholder": "Select country...",
  "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-gray-200\" data-title></span></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
  "dropdownClasses": "mt-2 max-h-72 pb-1 px-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
  "optionTemplate": "<div><div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div class=\"text-gray-800 dark:text-gray-200\" data-title></div></div></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option value="Us"
        data-hs-select-option='{
  "icon": "<img class=\"inline-block size-4 rounded-full\" src=\"../../assets/images/flags/us_flag.jpg\" alt=\"USA\" />"}'>
        USA
    </option>
    <option value="ar"
        data-hs-select-option='{
  "icon": "<img class=\"inline-block size-4 rounded-full\" src=\"../../assets/images/flags/argentina_flag.jpg\" alt=\"Argentina\" />"}'>
        Argentina
    </option>
    <option value="ca"
        data-hs-select-option='{
  "icon": "<img class=\"inline-block size-4 rounded-full\" src=\"../../assets/images/flags/canada_flag.jpg\" alt=\"Canada\" />"}'>
        Canada
    </option>
    <option value="fr"
        data-hs-select-option='{
  "icon": "<img class=\"inline-block size-4 rounded-full\" src=\"../../assets/images/flags/india_flag.jpg\" alt=\"India\" />"}'>
        France
    </option>
    <option value="gr"
        data-hs-select-option='{
  "icon": "<img class=\"inline-block size-4 rounded-full\" src=\"../../assets/images/flags/germany_flag.jpg\" alt=\"Germany\" />"}'>
        Germany
    </option>
    <option value="it"
        data-hs-select-option='{
  "icon": "<img class=\"inline-block size-4 rounded-full\" src=\"../../assets/images/flags/italy_flag.jpg\" alt=\"Italy\" />"}'>
        Italy
    </option>
</select>
<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`

export const advanvcedselect6 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="relative">
<select multiple data-hs-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\"></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
  "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
  "mode": "tags",
  "tagsClasses": "relative ps-0.5 pe-9 min-h-[46px] flex items-center flex-wrap text-nowrap w-full border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
  "tagsItemTemplate": "<div class=\"flex flex-nowrap items-center relative z-10 bg-white border border-gray-200 rounded-full p-1 m-1 dark:bg-bodybg dark:border-white/10\"><div class=\"size-6 me-1\" data-icon></div><div class=\"whitespace-nowrap\" data-title></div><div class=\"inline-flex flex-shrink-0 justify-center items-center size-5 ms-2 rounded-full text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-white/70 text-sm dark:bg-bodybg/50 dark:hover:bg-bodybg dark:text-white/70 cursor-pointer\" data-remove><svg class=\"flex-shrink-0 size-3\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/></svg></div></div>",
  "tagsInputClasses": "absolute inset-0 w-full py-3 px-4 pe-9 flex-1 text-sm rounded-sm focus-visible:ring-0 !border-0 dark:bg-bodybg dark:text-white/70 dark:placeholder:text-white/50",
  "optionTemplate": "<div class=\"flex items-center\"><div class=\"size-8 me-2\" data-icon></div><div><div class=\"text-sm font-semibold text-gray-800 dark:text-gray-200\" data-title></div><div class=\"text-xs text-gray-500 dark:text-white/70\" data-description></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-primary\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option selected value="1" data-hs-select-option='{
    "description": "chris",
    "icon": "<img class=\"inline-block rounded-full\" src=\"../../assets/images/faces/1.jpg\" />"
  }'>Christina</option>
    <option value="2" data-hs-select-option='{
    "description": "david",
    "icon": "<img class=\"inline-block rounded-full\" src=\"../../assets/images/faces/9.jpg\" />"
  }'>David</option>
    <option value="3" data-hs-select-option='{
    "description": "alex27",
    "icon": "<img class=\"inline-block rounded-full\" src=\"../../assets/images/faces/10.jpg\" />"
  }'>Alex</option>
    <option value="4" data-hs-select-option='{
    "description": "samia_samia",
    "icon": "<img class=\"inline-block rounded-full\" src=\"../../assets/images/faces/2.jpg\" />"
  }'>Samia</option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`
export const advanvcedselect7 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="relative">
<select data-hs-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-gray-200\" data-title></span></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex items-center text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
  "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
  "optionTemplate": "<div><div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div class=\"font-semibold text-gray-800 dark:text-gray-200\" data-title></div></div><div class=\"mt-1.5 text-sm text-gray-500 dark:text-white/70\" data-description></div></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option value="1" selected data-hs-select-option='{
    "description": "Visible to anyone who van view your content.",
    "icon": "<svg class=\"flex-shrink-0 size-4 text-gray-800 dark:text-gray-200\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-globe-2\"><path d=\"M21.54 15H17a2 2 0 0 0-2 2v4.54\"/><path d=\"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17\"/><path d=\"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/></svg>"
  }'>Anyone</option>

    <option value="2" data-hs-select-option='{
    "description": "Only visible to you.",
    "icon": "<svg class=\"flex-shrink-0 size-4 text-gray-800 dark:text-gray-200\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-lock\"><rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/></svg>"
  }'>Only you</option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`
export const advanvcedselect8 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="relative">
<select data-hs-select='{
  "placeholder": "Select assignee",
  "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-gray-200\" data-title></span></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none items-center hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
  "dropdownClasses": "mt-2 max-h-72 p-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
  "optionClasses": "py-2 px-3 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
  "optionTemplate": "<div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div><div class=\"hs-selected:font-semibold text-sm text-gray-800 dark:text-gray-200\" data-title></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-primary\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>"
}' className="hidden">
    <option value="">Choose</option>
    <option selected value="1"
        data-hs-select-option='{
    "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/10.jpg\" alt=\"James Collins\" />"}'>
        James Collins
    </option>

    <option value="2"
        data-hs-select-option='{
    "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/1.jpg\" alt=\"Amanda Harvey\" />"}'>
        Amanda Harvey
    </option>

    <option value="3"
        data-hs-select-option='{
    "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/11.jpg\" alt=\"Costa Quinn\" />"}'>
        Costa Quinn
    </option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`
export const advanvcedselect9 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-y-3">
                                    
<div className="relative">
    <select data-hs-select='{
        "placeholder": "Select option...",
        "toggleTag": "<button type=\"button\"></button>",
        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 px-3 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
        "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
        "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
    }' className="hidden">
        <option value="">Choose</option>
        <option>Name</option>
        <option>Email address</option>
        <option>Description</option>
        <option>User ID</option>
    </select>
    <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>



<div className="relative">
    <select data-hs-select='{
        "placeholder": "Select option...",
        "toggleTag": "<button type=\"button\"></button>",
        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
        "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
        "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
        }' className="hidden">
        <option value="">Choose</option>
        <option>Name</option>
        <option>Email address</option>
        <option>Description</option>
        <option>User ID</option>
    </select>
    <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>



<div className="relative">
    <select data-hs-select='{
        "placeholder": "Select option...",
        "toggleTag": "<button type=\"button\"></button>",
        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative sm:p-5 p-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
        "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
        "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
        }' className="hidden">
        <option value="">Choose</option>
        <option>Name</option>
        <option>Email address</option>
        <option>Description</option>
        <option>User ID</option>
    </select>
    <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>

</div>
// End Prism Code//`
export const advanvcedselect10 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="relative">
<select data-hs-select='{
  "placeholder": "Select option...",
  "toggleTag": "<button type=\"button\"></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
  "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
}' className="hidden" disabled>
    <option value="">Choose</option>
    <option>Name</option>
    <option>Email address</option>
    <option>Description</option>
    <option>User ID</option>
</select>

<div className="absolute top-1/2 end-3 -translate-y-1/2">
    <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="m7 15 5 5 5-5" />
        <path d="m7 9 5-5 5 5" />
    </svg>
</div>
</div>
// End Prism Code//`
export const advanvcedselect11 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div>
                                    
<div className="relative">
    <select data-hs-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-danger rounded-sm text-start text-sm focus:border-danger focus:ring-danger before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
    }' className="hidden">
        <option value="">Choose</option>
        <option>Name</option>
        <option>Email address</option>
        <option>Description</option>
        <option>User ID</option>
    </select>

    <div className="absolute top-1/2 end-8 -translate-y-1/2">
        <svg className="flex-shrink-0 size-4 text-danger"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
    </div>

    <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>

<p className="text-xs text-danger mt-2">Please select a valid state.</p>
</div>

<div>

<div className="relative">
    <select data-hs-select='{
    "placeholder": "Select option...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-success rounded-sm text-start text-sm focus:border-success focus:ring-success before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
    "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
    }' className="hidden">
        <option value="">Choose</option>
        <option>Name</option>
        <option>Email address</option>
        <option>Description</option>
        <option>User ID</option>
    </select>

    <div className="absolute inset-y-0 end-8 flex items-center pointer-events-none">
        <svg className="flex-shrink-0 size-4 text-success"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    </div>

    <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>

<p className="text-xs text-success mt-2">Looks good!</p>
</div>
// End Prism Code//`
export const advanvcedselect12 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="space-y-3">
<div id="validation-target" className="mb-4">
    
    <div className="relative">
        <select data-hs-select='{
        "placeholder": "Select option...",
        "toggleTag": "<button type=\"button\"></button>",
        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border hs-error:border-danger hs-success:border-success rounded-sm text-start text-sm hs-error:focus:border-danger hs-success:focus:border-success hs-error:focus:ring-danger hs-success:focus:ring-success before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:text-white/70 dark:focus:outline-none dark:focus:ring-1 dark:border-white/10 dark:focus:ring-primary",
        "dropdownClasses": "mt-2 z-40 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
        "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
        "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-primary dark:text-primary\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
        }' className="hidden">
            <option value="">Choose</option>
            <option>Name</option>
            <option>Email address</option>
            <option>Description</option>
            <option>User ID</option>
        </select>
        <div className="hidden hs-error:block absolute top-1/2 end-8 -translate-y-1/2">
            <svg className="flex-shrink-0 size-4 text-danger"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
        </div>
        <div
            className="hidden hs-success:flex absolute inset-y-0 end-8 items-center pointer-events-none">
            <svg className="flex-shrink-0 size-4 text-success"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </div>
        <div className="absolute top-1/2 end-3 -translate-y-1/2">
            <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m7 15 5 5 5-5" />
                <path d="m7 9 5-5 5 5" />
            </svg>
        </div>
    </div>
    
    <p className="hidden hs-error:block text-sm text-danger mt-2">Please select a valid
        state.</p>
    <p className="hidden hs-success:flex text-sm text-success mt-2">Looks good!</p>
</div>
<div className="flex flex-wrap gap-2">
    <button type="button" id="trigger-success"
        className="py-1 px-2 text-sm font-medium rounded-md border border-success/30 bg-success/10 dark:bg-success/25 text-success dark:text-success hover:bg-success/20 dark:hover:bg-success/50">
        Success
    </button>
    <button type="button" id="trigger-error"
        className="py-1 px-2 text-sm font-medium rounded-md border border-danger/30 bg-danger/10 dark:bg-danger/25 text-danger dark:text-danger hover:bg-danger/20 dark:hover:bg-danger/50">
        Error
    </button>
    <button type="button" id="trigger-clear"
        className="py-1 px-2 text-sm font-medium rounded-md border dark:border-white/10 bg-gray-100 dark:bg-gray-800/25 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-bodybg/50">
        Clear
    </button>
</div>
</div>
// End Prism Code//`
export const advanvcedselect13 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="max-w-sm space-y-3">
                                    
<div className="relative">
    <select id="hs-select-with-dynamic-options" data-hs-select='{
        "placeholder": "Select assignee",
        "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-gray-200\" data-title></span></button>",
        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
        "dropdownClasses": "mt-2 max-h-72 p-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
        "optionClasses": "py-2 px-3 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
        "optionTemplate": "<div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div><div class=\"hs-selected:font-semibold text-sm text-gray-800 dark:text-gray-200\" data-title></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-primary\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>"
        }' className="hidden">
        <option value="">Choose</option>
        <option value="1"
            data-hs-select-option='{
        "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/1.jpg\" alt=\"James Collins\" />"}'>
            James Collins
        </option>
        <option value="2"
            data-hs-select-option='{
        "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/2.jpg\" alt=\"Amanda Harvey\" />"}'>
            Amanda Harvey
        </option>
        <option value="3"
            data-hs-select-option='{
        "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/10.jpg\" alt=\"Costa Quinn\" />"}'>
            Costa Quinn
        </option>
    </select>
    <div className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>


<div className="flex flex-wrap gap-2">
    <button type="button" id="add-option"
        className="py-1 px-2 text-sm font-medium rounded-md border border-success/30 bg-success/10 dark:bg-success/25 text-success dark:text-success hover:bg-success/20 dark:hover:bg-success/50">
        Add Option
    </button>
    <button type="button" id="add-options"
        className="py-1 px-2 text-sm font-medium rounded-md border border-success/30 bg-success/10 dark:bg-success/25 text-success dark:text-success hover:bg-success/20 dark:hover:bg-success/50">
        Add three Options
    </button>
    <button type="button" id="remove-option"
        className="py-1 px-2 text-sm font-medium rounded-md border dark:border-white/10 bg-gray-100 dark:bg-gray-800/25 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-bodybg/50">
        Remove Option with value 4
    </button>
    <button type="button" id="remove-options"
        className="py-1 px-2 text-sm font-medium rounded-md border dark:border-white/10 bg-gray-100 dark:bg-gray-800/25 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-bodybg/50">
        Remove Options with values 5, 6, 7
    </button>
</div>
</div>
// End Prism Code//`

export const advanvcedselect14 =`//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="max-w-sm space-y-3">
                                    
<div className="relative">
    <select id="hs-select-temporary" data-hs-select='{
        "placeholder": "Select assignee",
        "toggleTag": "<button type=\"button\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-gray-200\" data-title></span></button>",
        "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-sm text-start text-sm focus:border-primary focus:ring-primary before:absolute before:inset-0 before:z-[1] dark:bg-bodybg dark:border-white/10 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-primary",
        "dropdownClasses": "mt-2 max-h-72 p-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-sm overflow-hidden overflow-y-auto dark:bg-bodybg dark:border-white/10",
        "optionClasses": "py-2 px-3 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-sm focus:outline-none focus:bg-gray-100 dark:bg-bodybg dark:hover:bg-bodybg dark:text-gray-200 dark:focus:bg-bodybg",
        "optionTemplate": "<div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div><div class=\"hs-selected:font-semibold text-sm text-gray-800 dark:text-gray-200\" data-title></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-4 text-primary\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>"
        }' className="hidden">
        <option value="">Choose</option>
        <option value="1"
            data-hs-select-option='{
        "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/1.jpg\" alt=\"James Collins\" />"}'>
            James Collins
        </option>
        <option value="2"
            data-hs-select-option='{
        "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/2.jpg\" alt=\"Amanda Harvey\" />"}'>
            Amanda Harvey
        </option>
        <option value="3"
            data-hs-select-option='{
        "icon": "<img class=\"inline-block size-6 rounded-full\" src=\"../../assets/images/faces/10.jpg\" alt=\"Costa Quinn\" />"}'>
            Costa Quinn
        </option>
    </select>
    <div id="hs-select-temporary-toggle-icon"
        className="absolute top-1/2 end-3 -translate-y-1/2">
        <svg className="flex-shrink-0 size-3.5 text-gray-500 dark:text-white/70"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
        </svg>
    </div>
</div>

<div className="flex flex-wrap gap-2">
    <button type="button" id="destroy"
        className="py-1 px-2 text-sm font-medium rounded-md border border-danger/30 bg-danger/10 dark:bg-danger/25 text-danger dark:text-danger hover:bg-danger/20 dark:hover:bg-danger/50">
        Destroy Select
    </button>
    <button type="button" id="reinit"
        className="py-1 px-2 text-sm font-medium rounded-md border dark:border-white/10 bg-gray-100 dark:bg-gray-800/25 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-bodybg/50">
        Reinitialize Select
    </button>
</div>
</div>
// End Prism Code//`

