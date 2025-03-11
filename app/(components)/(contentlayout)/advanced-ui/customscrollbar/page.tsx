import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react'

const Customscrollbar = () => {
  return (
    <>
                <Seo title={"Custom scrollbar"} />
            <Pageheader currentpage="Custom scrollbar" activepage=" Advanced Ui" mainpage="Custom scrollbar" />
            <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-6">
              <div className="box">
                  <div className="box-header">
                      <h5 className="box-title">Basic Custom Scrollbar</h5>
                  </div>
                <div className="box-body">
                  <div className="max-h-[400px] space-y-4 pe-8 overflow-y-auto [&amp;::-webkit-scrollbar]:w-2 [&amp;::-webkit-scrollbar-track]:bg-gray-100 [&amp;::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&amp;::-webkit-scrollbar-track]:bg-slate-700 dark:[&amp;::-webkit-scrollbar-thumb]:bg-slate-500">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 1</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
  
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 1-1</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
  
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 1-2</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
  
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 2</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
  
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 3</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
  
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 3-1</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
  
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 3-2</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="box">
                  <div className="box-header">
                      <h5 className="box-title">Rounded Custom Scrollbar</h5>
                  </div>
                <div className="box-body">
                  <div className="max-h-[400px] space-y-4 pe-8 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                      <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 1</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
  
                      <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 1-1</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
  
                      <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 1-2</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
  
                      <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 2</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
  
                      <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 3</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
  
                      <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 3-1</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
  
                      <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Item 3-2</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/70">This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </>
  )
}

export default Customscrollbar