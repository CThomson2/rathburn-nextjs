export const border1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body">
<span className="border dark:border-defaultborder/10 border-container"></span>
<span className="border-t dark:border-defaultborder/10 border-container"></span>
<span className="border-e dark:border-defaultborder/10 border-container"></span>
<span className="border-b dark:border-defaultborder/10 border-container"></span>
<span className="border-s dark:border-defaultborder/10 border-container"></span>
</div>
// End Prism Code//`;

export const border2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body">
<span className="border-0 border-container"></span>
<span className="border dark:border-defaultborder/10 border-t-0 border-container"></span>
<span className="border dark:border-defaultborder/10 border-e-0 border-container"></span>
<span className="border dark:border-defaultborder/10 border-b-0 border-container"></span>
<span className="border dark:border-defaultborder/10 border-s-0 border-container"></span>
</div>
// End Prism Code//`;

export const border3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body">
<span className="border-1 dark:border-defaultborder/10 border-container"></span>
<span className="border-container dark:border-defaultborder/10 border-2"></span>
<span className="border-container dark:border-defaultborder/10 border-4"></span>
<span className="border-container dark:border-defaultborder/10 border-8"></span>
</div>
// End Prism Code//`;

export const border4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body">
<span className="border border-container !border-primary"></span>
<span className="border border-container !border-secondary"></span>
<span className="border border-container !border-success"></span>
<span className="border border-container !border-danger"></span>
<span className="border border-container !border-warning"></span>
<span className="border border-container !border-info"></span>
<span className="border border-container !border-light"></span>
<span className="border border-container !border-black"></span>
<span className="border border-container !border-white"></span>
</div>
// End Prism Code//`;

export const border5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body">
<div className="mb-4">
<label htmlFor="exampleFormControlInput1"className="form-label">
Email address</label>
<input type="email" className="form-control w-full !rounded-md
 !border-success" id="exampleFormControlInput1" placeholder="name@example.com" />
 </div><div className="h4 pb-4 mb-4 text-danger border-b !border-danger">
  Below Shows Danger Border
  </div>
  <div className="p-4 bg-info/10 border !border-info 
   !border-s-0 rounded-e-md mb-1"> Customizing borders with backgrounud colors</div>
</div>
// End Prism Code//`;

export const border6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body">
<div className="border border-black dark:border-white p-2 mb-2">
This is default success border
</div>
<div className="border border-black/75 dark:border-white/75 p-2 mb-2">
This is 75%opacity success border</div>
<div className="border border-black/50 dark:border-white/50 p-2 mb-2">
This is 50% opacity success border</div>
<div className="border border-black/25 dark:border-white/25 p-2 mb-2">
This is 25% opacity success border</div>
<div className="border border-black/10 dark:border-white/10 p-2">
This is 10% opacity success border</div>
</div>
// End Prism Code//`;

export const border7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body flex flex-wrap gap-2">
<img src="../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-md" alt="..." />
<img src="../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-t-md" alt="..." />
<img src="../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-e-md" alt="..." />
<img src="../../assets/images/media/media-58.jpg"
className="bd-placeholder-img rounded-b-md" alt="..." />
<img src="../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-s-md" alt="..." />
<img src="../../assets/images/media/media-58.jpg"
className="bd-placeholder-img rounded-full" alt="..." />
<img src="../../assets/images/media/media-58.jpg"
className="bd-placeholder-img  rounded-full" alt="..." />
</div>
// End Prism Code//`;

export const border8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body flex flex-wrap gap-2">
<img src="../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-none" alt="..." />
<img src="../../assets/images/media/media-58.jpg"
 className="bd-placeholder-img rounded-sm" alt="..." />
 <img src="../../assets/images/media/media-58.jpg"
  className="bd-placeholder-img rounded-md" alt="..." />
<img src="../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-lg" alt="..." />
<img src="../../assets/images/media/media-58.jpg" 
className="bd-placeholder-img rounded-xl" alt="..." />
</div>
// End Prism Code//`;

//Avatars

export const avatar1 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<span className="avatar me-2 avatar-radius-0">
<img src="../../assets/images/faces/1.jpg" alt="img"/>
</span>
<span className="avatar me-2">
<img src="../../assets/images/faces/2.jpg" alt="img"/>
</span>
<span className="avatar me-2 avatar-rounded">
<img src="../../assets/images/faces/3.jpg" alt="img"/>
</span>

// End Prism Code//`;

export const avatar2 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body">
{Avatarsize.map((idx)=>
    (<span className={&#96;avatar avatar-&#36;{idx.class} me-2&#96;} 
        key={Math.random()}><img src={idx.src} /></span>))}
</div>
// End Prism Code//`;

export const avatar3 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body">
{AvatarIcon.map((idx) => 
    (<span className={&#96;avatar avatar-&#36;{idx.class}
me-2 avatar-rounded&#96;} key={Math.random()}> 
<img src={idx.src} alt="img" />
<Link aria-label="anchor" href="#" 
className={&#96;badge bg-&#36;{idx.color} 
rounded-full avatar-badge&#96;}>
<i className={&#96;fe &#36;{idx.icon} 
text-[.5rem]&#96;}></i>
</Link></span>))}
</div>
// End Prism Code//`;

export const avatar4 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body">
{AvatarOnline.map((idx) =>
     (<span className={&#96;avatar avatar-&#36;{idx.class}
me-2 online avatar-rounded&#96;} key={Math.random()}>
<img src={idx.src} alt="img" /></span>))}
</div>
// End Prism Code//`;

export const avatar5 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body">
{AvatarOffline.map((idx) => 
    (<span className={&#96;avatar avatar-&#36;{idx.class} 
        me-2 offline avatar-rounded&#96;} key={Math.random()}>
        <img src={idx.src} alt="img" /></span>))}
</div>`;

export const avatar6 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<div className="box-body">
{AvatarNumber.map((idx) => (<span className={&#96;avatar avatar-&#36;{idx.class}
     me-2 avatar-rounded&#96;} key={Math.random()}>
     <img src={idx.src} alt="img" />
     <span className={&#96;badge rounded-full bg-&#36;{idx.color} 
     avatar-badge&#96;}>{idx.number}</span></span>))}
</div>
// End Prism Code//`;

export const avatar7 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <div className="space-x-3 rtl:space-x-reverse">
<div className="relative inline-block">
    <img className="inline-block avatar avatar-lg" src="../../assets/images/faces/2.jpg"
        alt="img"/>
    <span
        className="absolute bottom-[-7px] end-[-15px] block p-1 rounded-full bg-white dark:bg-slate-900 dark:ring-slate-900">
        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            id="TailwindCss">
            <path
                d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"
                fill="#87ddfd" className="color000000 svgShape"></path>
        </svg>
    </span>
</div>
<div className="relative inline-block">
    <img className="inline-block avatar avatar-lg avatar-rounded"
        src="../../assets/images/faces/3.jpg" alt="img"/>
    <span
        className="absolute bottom-[-7px] end-[-15px] block p-1 rounded-full bg-white dark:bg-slate-900 dark:ring-slate-900">
        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"
            id="slack">
            <g fill="none" fillRule="evenodd">
                <path fill="#36C5F0"
                    d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386">
                </path>
                <path fill="#2EB67D"
                    d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387">
                </path>
                <path fill="#ECB22E"
                    d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386">
                </path>
                <path fill="#E01E5A"
                    d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387">
                </path>
            </g>
        </svg>
    </span>
</div>
</div>
// End Prism Code//`;

export const avatar8 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
 <span className="avatar avatar-sm  avatar-rounded me-2">
<img src="../../assets/images/faces/22.jpg" alt="img"/>
</span>

<span className="avatar avatar-md  avatar-rounded me-2">
<img src="../../assets/images/faces/22.jpg" alt="img"/>
</span>

<span className="avatar avatar-lg  avatar-rounded me-2">
<img src="../../assets/images/faces/22.jpg" alt="img"/>
</span>

<span className="avatar avatar-xl  avatar-rounded me-2">
<img src="../../assets/images/faces/22.jpg" alt="img"/>
</span>

// End Prism Code//`;

export const avatar9 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
<span className="avatar avatar-md avatar-rounded text-white bg-primary">YX</span>
<span className="avatar avatar-md avatar-rounded text-white bg-secondary">YX</span>
<span className="avatar avatar-md avatar-rounded text-white bg-warning">YX</span>
<span className="avatar avatar-md avatar-rounded text-white bg-danger">YX</span>
<span className="avatar avatar-md avatar-rounded text-white bg-success">YX</span>
<span className="avatar avatar-md avatar-rounded text-white bg-info">YX</span>
<span className="avatar avatar-md avatar-rounded text-white bg-light text-defaulttextcolor">YX</span>

// End Prism Code//`;

export const avatar10 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <span className="avatar avatar-md avatar-rounded bg-primary/10 text-primary/80">YX</span>
  <span
      className="avatar avatar-md avatar-rounded bg-secondary/10 text-secondary/80">YX</span>
  <span className="avatar avatar-md avatar-rounded bg-success/10 text-success/80">YX</span>
  <span className="avatar avatar-md avatar-rounded bg-info/10 text-info/80">YX</span>
  <span className="avatar avatar-md avatar-rounded bg-danger/10 text-danger/80">YX</span>
  <span className="avatar avatar-md avatar-rounded bg-warning/10 text-warning/80">YX</span>
  <span
      className="avatar avatar-md avatar-rounded bg-light/50 text-defaulttextcolor">YX</span>

// End Prism Code//      `;

export const avatar11 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <span
  className="avatar avatar-md avatar-rounded border border-primary/80 text-primary">YX</span>
<span
  className="avatar avatar-md avatar-rounded border border-secondary/80 text-secondary">YX</span>
<span
  className="avatar avatar-md avatar-rounded border border-success/80 text-success">YX</span>
<span
  className="avatar avatar-md avatar-rounded border border-danger/80 text-danger">YX</span>
<span className="avatar avatar-md avatar-rounded border border-info/80 text-info">YX</span>
<span
  className="avatar avatar-md avatar-rounded border border-warning/80 text-warning">YX</span>
<span
  className="avatar avatar-md avatar-rounded border border-gray-500 dark:text-white text-defaulttextcolor">YX</span

// End Prism Code//  `;

export const avatar12 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <span
  className="avatar avatar-sm avatar-rounded me-2 border border-defaultborder bg-white text-defaulttextcolor dark:bg-bodybg dark:border-white/10 dark:text-white">
  YX
</span>
<span
  className="avatar avatar-md avatar-rounded me-2 border border-defaultborder bg-white text-defaulttextcolor dark:bg-bodybg dark:border-white/10 dark:text-white">
  YX
</span>
<span
  className="avatar avatar-lg avatar-rounded me-2 border border-defaultborder bg-white text-defaulttextcolor dark:bg-bodybg dark:border-white/10 dark:text-white">
  YX
</span>
<span
  className="avatar avatar-xl avatar-rounded me-2 border border-defaultborder bg-white text-defaulttextcolor dark:bg-bodybg dark:border-white/10 dark:text-white">
  YX
</span>
// End Prism Code//`;

export const avatar13 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="hs-tooltip inline-block">
  <a className="hs-tooltip-toggle relative inline-block avatar online avatar-rounded"
      href="#">
      <img className="inline-block size-[46px]" src="../../assets/images/faces/4.jpg"
          alt="img"/>
      <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-slate-700"
          role="tooltip">
          Stella is online
      </div>
  </a>
</div>
// End Prism Code//`;

export const avatar14 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="flex-shrink-0 group block">
  <div className="flex items-center">
      <img className="avatar avatar-md avatar-rounded"
          src="../../assets/images/faces/5.jpg" alt="Image Description"/>
      <div className="ms-3">
          <h6 className="">Michael</h6>
          <p className="text-sm font-medium">mic@gmail.com</p>
      </div>
  </div>
</div>
// End Prism Code//`;

export const avatar15 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="flex -space-x-2">
  <img className="avatar avatar-rounded border-2 border-primary" src="../../assets/images/faces/5.jpg" alt="Image Description"/>
  <img className="avatar avatar-rounded border-2 border-primary" src="../../assets/images/faces/6.jpg" alt="Image Description"/>
  <img className="avatar avatar-rounded border-2 border-primary" src="../../assets/images/faces/7.jpg" alt="Image Description"/>
  <img className="avatar avatar-rounded border-2 border-primary" src="../../assets/images/faces/8.jpg" alt="Image Description"/>
</div>
// End Prism Code//`;

export const avatar16 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="grid gap-10 sm:flex sm:items-end justify-between">
  <div className="avatar-list-stacked">
      <span className="avatar avatar-sm avatar-rounded">
          <img src="../../assets/images/faces/2.jpg" alt="img"/>
      </span>
      <span className="avatar avatar-sm avatar-rounded">
          <img src="../../assets/images/faces/8.jpg" alt="img"/>
      </span>
      <span className="avatar avatar-sm avatar-rounded">
          <img src="../../assets/images/faces/2.jpg" alt="img"/>
      </span>
  </div>
  <div className="avatar-list-stacked">
      <span className="avatar avatar-md avatar-rounded">
          <img src="../../assets/images/faces/2.jpg" alt="img"/>
      </span>
      <span className="avatar avatar-md avatar-rounded">
          <img src="../../assets/images/faces/8.jpg" alt="img"/>
      </span>
      <span className="avatar avatar-md avatar-rounded">
          <img src="../../assets/images/faces/2.jpg" alt="img" />
      </span>
  </div>
  <div className="avatar-list-stacked">
      <span className="avatar avatar-lg avatar-rounded">
          <img src="../../assets/images/faces/2.jpg" alt="img" />
      </span>
      <span className="avatar avatar-lg avatar-rounded">
          <img src="../../assets/images/faces/8.jpg" alt="img" />
      </span>
      <span className="avatar avatar-lg avatar-rounded">
          <img src="../../assets/images/faces/2.jpg" alt="img" />
      </span>
  </div>
  <div className="avatar-list-stacked">
      <span className="avatar avatar-xl avatar-rounded">
          <img src="../../assets/images/faces/2.jpg" alt="img" />
      </span>
      <span className="avatar avatar-xl avatar-rounded">
          <img src="../../assets/images/faces/8.jpg" alt="img" />
      </span>
      <span className="avatar avatar-xl avatar-rounded">
          <img src="../../assets/images/faces/2.jpg" alt="img" />
      </span>
  </div>
</div>
// End Prism Code//`;

export const avatar17 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="grid gap-10 sm:items-end">
  <div className="grid xxl:!grid-cols-8 md:!grid-cols-11 sm:grid-cols-7 grid-cols-4 gap-4"> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/2.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/4.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/6.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/5.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/7.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/2.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/9.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/1.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/4.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/6.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/5.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/7.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/2.jpg" alt="Image Description"/> 
      <img className="avatar avatar-rounded" src="../../assets/images/faces/9.jpg" alt="Image Description"/> 
      <span className="inline-flex items-center justify-center h-[2.875rem] w-[2.875rem] avatar-rounded bg-gray-100 border-2 border-gray-200 dark:bg-black/20 dark:border-white/10">
          <span className="font-medium text-gray-500 leading-none dark:text-white/70">9+</span> 
      </span> 
  </div>
</div>
// End Prism Code//`;

export const avatar18 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="flex -space-x-2 rtl:space-x-reverse">
  <div className="hs-tooltip inline-block">
    <a className="hs-tooltip-toggle relative inline-block" href="#!" scroll={false}>
      <img className="avatar rounded-full" src="../../assets/images/faces/1.jpg" alt="Image Description"/>
      <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-sm shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" 
      // style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(1096px, -301px);"
      >
        James bond
      </div>
    </a>
  </div>
  <div className="hs-tooltip inline-block show">
    <a className="hs-tooltip-toggle relative inline-block" href="#!" scroll={false}>
      <img className="avatar rounded-full" src="../../assets/images/faces/4.jpg" alt="Image Description"/>
      <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-sm shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" 
      // style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(1126px, -301px);"
      >
        James bond
      </div>
    </a>
  </div>
  <div className="hs-tooltip inline-block show">
    <a className="hs-tooltip-toggle relative inline-block" href="#!" scroll={false}>
      <img className="avatar rounded-full" src="../../assets/images/faces/2.jpg" alt="Image Description"/>
      <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-sm shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top" 
      // style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(1156px, -301px);"
      >
        James bond
      </div>
    </a>
  </div>
  <div className="hs-tooltip inline-block show">
    <a className="hs-tooltip-toggle relative inline-block" href="#!" scroll={false}>
      <img className="avatar rounded-full" src="../../assets/images/faces/3.jpg" alt="Image Description"/>
      <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-sm shadow-sm dark:bg-slate-700" role="tooltip" data-popper-placement="top"
      //  style="position: fixed; inset: auto auto 0px 0px; margin: 0px; transform: translate(1186px, -301px);"
       >
        James bond
      </div>
    </a>
  </div>
</div>
// End Prism Code//`;

export const avatar19 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
   <div className="flex -space-x-2 rtl:space-x-reverse">
  <img className="inline-block avatar avatar-rounded" src="../../assets/images/faces/8.jpg" alt="Image Description"/>
  <img className="inline-block avatar avatar-rounded" src="../../assets/images/faces/4.jpg" alt="Image Description"/>
  <img className="inline-block avatar avatar-rounded" src="../../assets/images/faces/6.jpg" alt="Image Description"/>
  <img className="inline-block avatar avatar-rounded" src="../../assets/images/faces/7.jpg" alt="Image Description"/>
  <div className="hs-dropdown relative inline-flex" data-hs-dropdown-placement="top-left">
    <button type="button" id="hs-dropdown-avatar-more" className="inline-block avatar avatar-rounded hs-dropdown-toggle  items-center justify-center avatar 
    avatar-rounded bg-gray-200 border-2 border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-300 
    focus:outline-none focus:bg-primary focus:text-white focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary 
    transition-all text-sm dark:bg-bodybg2 dark:hover:bg-black/30 dark:border-white/10 dark:text-white/70 dark:hover:text-white 
    dark:focus:bg-primary dark:focus:text-white dark:focus:ring-offset-white/10">
      <span className="font-medium leading-none">9+</span>
    </button>
    <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-72 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 min-w-[15rem]
     bg-white shadow-md rounded-sm p-2 dark:bg-bodybg2 dark:border dark:border-white/10 dark:divide-white/10">
      <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-defaulttextcolor hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false}>
        Chris Lynch
      </a>
      <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-defaulttextcolor hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false}>
        Maria Guan
      </a>
      <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-defaulttextcolor hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false}>
        Amil Evara
      </a>
      <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-defaulttextcolor hover:bg-gray-100 dark:text-white/70 dark:hover:bg-black/20 dark:hover:text-gray-300" href="#!" scroll={false}>
        Ebele Egbuna
      </a>
    </div>
  </div>
</div>
// End Prism Code//`;

export const avatar20 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="box-body">
  {AvatarInitial.map((idx)=>(<span className={&#96;avatar
       avatar-&#36;{idx.class} m-2 bg-&#36;{idx.color}&#96;} 
       key={Math.random()}> {idx.class}<span>))}
</div>
// End Prism Code//`;

export const avatar21 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="box-body">
  <div className="avatar-list-stacked">{StackedAvatars.map((idx)=>
      (<span className="avatar" key={Math.random()}> 
      <img src={idx.src} alt="img" /> </span> ))}
      <Link className="avatar bg-primary text-white" href="#">
       +8</Link></div>
</div>
// End Prism Code//`;

export const avatar22 = `//<!-- Prism Code: This code is only used for showcode purpose -->//
  <div className="box-body">
  <div className="avatar-list-stacked">
  {StackedAvatars.map((idx)=>(<span className="avatar avatar-rounded"
   key={Math.random()}> <img src={idx.src} alt="img" />
   </span>))}
   <Link className="avatar bg-primary avatar-rounded
    text-white" href="#"> +8</Link>
    </div>
</div>
// End Prism Code//`;
