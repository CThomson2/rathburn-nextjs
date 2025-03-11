"use client"
import { typography1, typography2, typography3, typography4, typography5, typography6, typography7, typography8 } from '@/shared/data/prism/uielementsprism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React from 'react'

const Typography = () => {
  return (
    <>
                <Seo title={"Typography"} />
            <Pageheader currentpage="Typography" activepage="Utilities" mainpage="Typography" />
      <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-6">
              <Showcode title="Heading tags" code={typography1} customCardBodyClass="space-y-3">
                <h1 className="font-semibold text-gray-800 dark:text-white text-4xl">h1. Tailwind heading</h1>
                <h2 className="font-semibold text-gray-800 dark:text-white text-3xl">h2. Tailwind heading</h2>
                <h3 className="font-semibold text-gray-800 dark:text-white text-2xl">h3. Tailwind heading</h3>
                <h4 className="font-semibold text-gray-800 dark:text-white text-xl">h4. Tailwind heading</h4>
                <h5 className="font-semibold text-gray-800 dark:text-white text-lg">h5. Tailwind heading</h5>
                <h6 className="font-semibold text-gray-800 dark:text-white text-base">h6. Tailwind heading</h6>
                </Showcode>
          </div>
          <div className="col-span-12 lg:col-span-6">
              <Showcode title=" Inline text elements" code={typography2} customCardBodyClass="space-y-3">
                <p className="text-gray-800 dark:text-white">You can use the mark tag to <mark>highlight</mark> text.</p>
                <p className="text-gray-800 dark:text-white"><del>This line of text is meant to be treated as deleted text.</del></p>
                <p className="text-gray-800 dark:text-white"><s>This line of text is meant to be treated as no longer accurate.</s></p>
                <p className="text-gray-800 dark:text-white"><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                <p className="text-gray-800 dark:text-white"><u>This line of text will render as underlined.</u></p>
                <p className="text-gray-800 dark:text-white"><small>This line of text is meant to be treated as fine print.</small></p>
                <p className="text-gray-800 dark:text-white"><strong>This line rendered as bold text.</strong></p>
                <p className="text-gray-800 dark:text-white"><em>This line rendered as italicized text.</em></p>
                </Showcode>
          </div>
          <div className="col-span-12 lg:col-span-6">
              <Showcode title="Description list alignment" code={typography3} customCardBodyClass="space-y-3">
                <dl className="grid sm:grid-cols-3 gap-1 sm:gap-3">
                    <dt className="sm:col-span-1 font-semibold dark:text-white">Description lists</dt>
                    <dd className="sm:col-span-2 mb-3 sm:mb-0 dark:text-white">A description list is perfect for defining terms.</dd>

                    <dt className="sm:col-span-1 font-semibold dark:text-white">Term</dt>
                    <dd className="sm:col-span-2 mb-3 sm:mb-0 dark:text-white">
                      <p>Definition for the term.</p>
                      <p>And some more placeholder definition text.</p>
                    </dd>

                    <dt className="sm:col-span-1 font-semibold dark:text-white">Another term</dt>
                    <dd className="sm:col-span-2 mb-3 sm:mb-0 dark:text-white">This definition is short, so no extra paragraphs or anything.</dd>

                    <dt className="sm:col-span-1 font-semibold truncate dark:text-white">Truncated term is truncated</dt>
                    <dd className="sm:col-span-2 mb-3 sm:mb-0 dark:text-white">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

                    <dt className="sm:col-span-1 font-semibold dark:text-white">Nesting</dt>
                    <dd className="sm:col-span-2 mb-3 sm:mb-0 dark:text-white">
                      <dl className="grid sm:grid-cols-5 gap-1 sm:gap-3 dark:text-white">
                        <dt className="sm:col-span-2 font-semibold dark:text-white">Nested definition list</dt>
                        <dd className="sm:col-span-3 mb-3 sm:mb-0 dark:text-white">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
                      </dl>
                    </dd>
                  </dl>
                  </Showcode>
          </div>
          <div className="col-span-12 lg:col-span-6">
              <Showcode title="First-line and first-letter" code={typography4} customCardBodyClass="space-y-8">
                <p className="first-line:uppercase first-line:tracking-widest first-letter:text-slate-900 first-letter:text-7xl first-letter:leading-none first-letter:float-start first-letter:font-bold first-letter:me-3 dark:first-letter:text-white">
                    Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.
                </p>
                <p className="">
                    Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.
                </p>
              </Showcode>
          </div>
          <div className="col-span-12 lg:col-span-6">
              <Showcode title="Font Sizes" code={typography5} customCardBodyClass="space-y-3">
                <p className="text-gray-800 dark:text-white text-xs">text-xs</p>
                <p className="text-gray-800 dark:text-white text-sm">text-sm</p>
                <p className="text-gray-800 dark:text-white text-base">text-base</p>
                <p className="text-gray-800 dark:text-white text-lg">text-lg</p>
                <p className="text-gray-800 dark:text-white text-xl">text-xl</p>
                <p className="text-gray-800 dark:text-white text-2xl">text-2xl</p>
                <p className="text-gray-800 dark:text-white text-3xl">text-3xl</p>
                <p className="text-gray-800 dark:text-white text-4xl">text-4xl</p>
                <p className="text-gray-800 dark:text-white text-5xl">text-5xl</p>
                <p className="text-gray-800 dark:text-white text-6xl">text-6xl</p>
                <p className="text-gray-800 dark:text-white text-7xl">text-7xl</p>
                <p className="text-gray-800 dark:text-white text-8xl">text-8xl</p>
                <p className="text-gray-800 dark:text-white text-[6.5rem] leading-none sm:text-9xl">text-9xl</p>
                </Showcode>
          </div>
          <div className="col-span-12 lg:col-span-6">
              <Showcode title="Open/closed state" code={typography6} customCardBodyClass="space-y-8">
                <div className="">
                  <details className="open:bg-white dark:open:bg-bodybg open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
                    <summary className="text-sm leading-6 text-gray-800 dark:text-white font-semibold select-none">
                      Why do they call it Ovaltine?
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-gray-800 dark:text-gray-300">
                      <p>The mug is round. The jar is round. They should call it Roundtine.</p>
                    </div>
                  </details>
                </div>
                </Showcode>
              <Showcode title="Text Decoration" code={typography7} customCardBodyClass="space-y-3">
                <p className="text-gray-800 dark:text-white underline ">This line of text will render as underlined. </p>
                <p className="text-gray-800 dark:text-white no-underline ">This line of text will render as Not underlined.. </p>
                <p className="text-gray-800 dark:text-white overline">This line of text will render as overline..</p>
                <p className="text-gray-800 dark:text-white line-through">This line of text will render as line through.</p>
                </Showcode>
              <Showcode title="Text Transform" code={typography8} customCardBodyClass="space-y-3">
                <p className="text-gray-800 dark:text-white lowercase ">Lowercased text. </p>
                <p className="text-gray-800 dark:text-white uppercase ">Uppercased text</p>
                <p className="text-gray-800 dark:text-white capitalize">Captalized text</p>
                <p className="text-gray-800 dark:text-white normal-case">Normal Text</p>
                </Showcode>
          </div>
        </div>  
    </>
  )
}

export default Typography