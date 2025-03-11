"use client";
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Showcode from "@/shared/layout-components/showcode/showcode";
import React, { Fragment } from "react";
import {
  accordion1,
  accordion10,
  accordion11,
  accordion12,
  accordion13,
  accordion14,
  accordion15,
  accordion16,
  accordion17,
  accordion18,
  accordion19,
  accordion2,
  accordion3,
  accordion4,
  accordion5,
  accordion6,
  accordion7,
  accordion8,
  accordion9,
} from "@/shared/data/prism/advance-uiprism";

const Accordionscollapse = () => {
  return (
    <Fragment>
      <Seo title={"Accordions"} />
      <Pageheader
        currentpage="Accordions"
        activepage=" Advanced Ui"
        mainpage="Accordions"
      />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Basic Accordion"
            customCardClass="custom-box"
            code={accordion1}
          >
            <div className="hs-accordion-group">
              <div className="hs-accordion active" id="hs-basic-heading-one">
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-collapse-one"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #1
                </button>
                <div
                  id="hs-basic-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-heading-one"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div className="hs-accordion" id="hs-basic-heading-two">
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-collapse-two"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #2
                </button>
                <div
                  id="hs-basic-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-heading-two"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div className="hs-accordion" id="hs-basic-heading-three">
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-collapse-three"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #3
                </button>
                <div
                  id="hs-basic-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-heading-three"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Always Open"
            customCardClass="custom-box"
            code={accordion2}
          >
            <div className="hs-accordion-group" data-hs-accordion-always-open>
              <div
                className="hs-accordion active"
                id="hs-basic-always-open-heading-one"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-always-open-collapse-one"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #1
                </button>
                <div
                  id="hs-basic-always-open-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-always-open-heading-one"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion"
                id="hs-basic-always-open-heading-two"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-always-open-collapse-two"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #2
                </button>
                <div
                  id="hs-basic-always-open-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-always-open-heading-two"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the second item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion"
                id="hs-basic-always-open-heading-three"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-always-open-collapse-three"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #3
                </button>
                <div
                  id="hs-basic-always-open-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-always-open-heading-three"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the first item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Nested"
            customCardClass="custom-box"
            code={accordion3}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion active"
                id="hs-basic-nested-heading-one"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-nested-collapse-one"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #1
                </button>
                <div
                  id="hs-basic-nested-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-heading-one"
                >
                  <div className="hs-accordion-group ps-6">
                    <div
                      className="hs-accordion active"
                      id="hs-basic-nested-sub-heading-one"
                    >
                      <button
                        className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                        aria-controls="hs-basic-nested-sub-collapse-one"
                      >
                        <svg
                          className="hs-accordion-active:hidden block size-3"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8.12421 13.36V2.35999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hidden size-3"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sub accordion #1
                      </button>
                      <div
                        id="hs-basic-nested-sub-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-nested-sub-heading-one"
                      >
                        <p className="text-gray-800 dark:text-gray-200">
                          <em>This is the third item's accordion body.</em> It
                          is hidden by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                        </p>
                      </div>
                    </div>

                    <div
                      className="hs-accordion"
                      id="hs-basic-nested-sub-heading-two"
                    >
                      <button
                        className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                        aria-controls="hs-basic-nested-sub-collapse-two"
                      >
                        <svg
                          className="hs-accordion-active:hidden block size-3"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8.12421 13.36V2.35999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hidden size-3"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sub accordion #2
                      </button>
                      <div
                        id="hs-basic-nested-sub-collapse-two"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-nested-sub-heading-two"
                      >
                        <p className="text-gray-800 dark:text-gray-200">
                          <em>This is the second item's accordion body.</em> It
                          is hidden by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                        </p>
                      </div>
                    </div>

                    <div
                      className="hs-accordion"
                      id="hs-basic-nested-sub-heading-three"
                    >
                      <button
                        className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                        aria-controls="hs-basic-nested-sub-collapse-three"
                      >
                        <svg
                          className="hs-accordion-active:hidden block size-3"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8.12421 13.36V2.35999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hidden size-3"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.62421 7.86L13.6242 7.85999"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sub accordion #3
                      </button>
                      <div
                        id="hs-basic-nested-sub-collapse-three"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-nested-sub-heading-three"
                      >
                        <p className="text-gray-800 dark:text-gray-200">
                          <em>This is the first item's accordion body.</em> It
                          is hidden by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hs-accordion" id="hs-basic-nested-heading-two">
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-nested-collapse-two"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #2
                </button>
                <div
                  id="hs-basic-nested-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-heading-two"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the second item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div className="hs-accordion" id="hs-basic-nested-heading-three">
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-nested-collapse-three"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #3
                </button>
                <div
                  id="hs-basic-nested-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-nested-heading-three"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the first item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="No arrow"
            customCardClass="custom-box"
            code={accordion4}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion active"
                id="hs-basic-no-arrow-heading-one"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-no-arrow-collapse-one"
                >
                  Accordion #1
                </button>
                <div
                  id="hs-basic-no-arrow-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-no-arrow-heading-one"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div className="hs-accordion" id="hs-basic-no-arrow-heading-two">
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-no-arrow-collapse-two"
                >
                  Accordion #2
                </button>
                <div
                  id="hs-basic-no-arrow-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-no-arrow-heading-two"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion"
                id="hs-basic-no-arrow-heading-three"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-no-arrow-collapse-three"
                >
                  Accordion #3
                </button>
                <div
                  id="hs-basic-no-arrow-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-no-arrow-heading-three"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div className="hs-accordion" id="hs-basic-no-arrow-heading-four">
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-no-arrow-collapse-three"
                >
                  Accordion #4
                </button>
                <div
                  id="hs-basic-no-arrow-collapse-four"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-no-arrow-heading-three"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div className="hs-accordion" id="hs-basic-no-arrow-heading-five">
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-no-arrow-collapse-three"
                >
                  Accordion #5
                </button>
                <div
                  id="hs-basic-no-arrow-collapse-five"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-no-arrow-heading-three"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div className="hs-accordion" id="hs-basic-no-arrow-heading-six">
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-no-arrow-collapse-three"
                >
                  Accordion #6
                </button>
                <div
                  id="hs-basic-no-arrow-collapse-six"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-no-arrow-heading-three"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="With arrow"
            customCardClass="custom-box"
            code={accordion5}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion active"
                id="hs-basic-with-arrow-heading-one"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-with-arrow-collapse-one"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  Accordion #1
                </button>
                <div
                  id="hs-basic-with-arrow-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-arrow-heading-one"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion"
                id="hs-basic-with-arrow-heading-two"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-with-arrow-collapse-two"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  Accordion #2
                </button>
                <div
                  id="hs-basic-with-arrow-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-arrow-heading-two"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion"
                id="hs-basic-with-arrow-heading-three"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-with-arrow-collapse-three"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  Accordion #3
                </button>
                <div
                  id="hs-basic-with-arrow-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-arrow-heading-three"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="With title and arrow stretched"
            customCardClass="custom-box"
            code={accordion6}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion active"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                >
                  Accordion #1
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion"
                id="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                >
                  Accordion #2
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div
                className="hs-accordion"
                id="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                >
                  Accordion #3
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Bordered"
            customCardClass="custom-box"
            code={accordion7}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion active bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-bodybg dark:border-white/10"
                id="hs-bordered-heading-one"
              >
                <button
                  className="hs-accordion-toggle dark:bg-bodybg dark:border-white/10 hs-accordion-active:!text-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-bordered-collapse-one"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #1
                </button>
                <div
                  id="hs-basic-bordered-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-bordered-heading-one"
                >
                  <div className="pb-4 px-5 dark:bg-bodybg">
                    <p className="text-gray-800 dark:text-gray-200">
                      <em>This is the third item's accordion body.</em> It is
                      hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-bodybg dark:border-white/10"
                id="hs-bordered-heading-two"
              >
                <button
                  className="hs-accordion-toggle dark:bg-bodybg hs-accordion-active:!text-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-bordered-collapse-two"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #2
                </button>
                <div
                  id="hs-basic-bordered-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-bordered-heading-two"
                >
                  <div className="pb-4 px-5 dark:bg-bodybg">
                    <p className="text-gray-800 dark:text-gray-200">
                      <em>This is the second item's accordion body.</em> It is
                      hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-bodybg dark:border-white/10"
                id="hs-bordered-heading-three"
              >
                <button
                  className="hs-accordion-toggle dark:bg-bodybg hs-accordion-active:!text-primary inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-bordered-collapse-three"
                >
                  <svg
                    className="hs-accordion-active:hidden block size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                  Accordion #3
                </button>
                <div
                  id="hs-basic-bordered-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-bordered-heading-three"
                >
                  <div className="pb-4 px-5 dark:bg-bodybg">
                    <p className="text-gray-800 dark:text-gray-200">
                      <em>This is the first item's accordion body.</em> It is
                      hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Active Content Bordered"
            customCardClass="custom-box"
            code={accordion8}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-white/10 dark:bg-bodybg dark:border-transparent"
                id="hs-active-bordered-heading-one"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-one"
                >
                  Accordion #1
                  <svg
                    className="hs-accordion-active:hidden block size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-one"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-one"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      <em>This is the third item's accordion body.</em> It is
                      hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion hs-accordion-active:border-gray-200 active bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-white/10 dark:bg-bodybg dark:border-transparent"
                id="hs-active-bordered-heading-two"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-two"
                >
                  Accordion #2
                  <svg
                    className="hs-accordion-active:hidden block size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-two"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-two"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      <em>This is the second item's accordion body.</em> It is
                      hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-white/10 dark:bg-bodybg dark:border-transparent"
                id="hs-active-bordered-heading-three"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                  aria-controls="hs-basic-active-bordered-collapse-three"
                >
                  Accordion #3
                  <svg
                    className="hs-accordion-active:hidden block size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <div
                  id="hs-basic-active-bordered-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-active-bordered-heading-three"
                >
                  <div className="pb-4 px-5">
                    <p className="text-gray-800 dark:text-gray-200">
                      <em>This is the first item's accordion body.</em> It is
                      hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Basic Custom Accordion"
            customCardClass="custom-box"
            code={accordion9}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion accordion-item overflow-hidden !border-b-0"
                id="hs-basic-heading-custom-one"
              >
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:!text-primary hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-collapse-custom-one"
                  type="button"
                >
                  Accordion #1
                </button>

                <div
                  id="hs-basic-collapse-custom-one"
                  className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-heading-custom-one"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion accordion-item !border-b-0"
                id="hs-basic-heading-custom-two"
              >
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:!text-primary hs-accordion-active:pb-3 group pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-collapse-custom-two"
                  type="button"
                >
                  Accordion #2
                </button>
                <div
                  id="hs-basic-collapse-custom-two"
                  className="hs-accordion-content hidden overflow-hidden w-full transition-[height] duration-300"
                  aria-labelledby="hs-basic-heading-custom-two"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>

              <div
                className="hs-accordion accordion-item overflow-hidden"
                id="hs-basic-heading-custom-three"
              >
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:!text-primary hs-accordion-active:pb-3 group pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-collapse-custom-three"
                  type="button"
                >
                  Accordion #3
                </button>
                <div
                  id="hs-basic-collapse-custom-three"
                  className="hs-accordion-content  overflow-hidden  w-full hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-heading-custom-three"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Basic Accordion With Icon"
            customCardClass="custom-box"
            code={accordion10}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion accordion-item  overflow-hidden !border-b-0"
                id="hs-basic-with-arrow1-heading-one"
              >
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:!text-primary hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-with-arrow1-collapse-one"
                  type="button"
                >
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Accordion #1
                </button>
                <div
                  id="hs-basic-with-arrow1-collapse-one"
                  className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-arrow1-heading-one"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div
                className="hs-accordion accordion-item !border-b-0"
                id="hs-basic-with-arrow2-heading-two"
              >
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:!text-primary hs-accordion-active:pb-3 group pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-with-arrow1-collapse-two"
                  type="button"
                >
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Accordion #2
                </button>
                <div
                  id="hs-basic-with-arrow1-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-arrow2-heading-two"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div
                className="hs-accordion accordion-item  overflow-hidden"
                id="hs-basic-with-arrow3-heading-three"
              >
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:!text-primary hs-accordion-active:pb-3 group pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-with-arrow1-collapse-three"
                  type="button"
                >
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Accordion #3
                </button>
                <div
                  id="hs-basic-with-arrow1-collapse-three"
                  className="hs-accordion-content hidden overflow-hidden w-full transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-arrow3-heading-three"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12 col-span-12">
          <Showcode
            title="Accordin Arrow Streched"
            customCardClass="custom-box"
            code={accordion11}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion accordion-item  overflow-hidden !border-b-0"
                id="hs-basic-with-title-and-arrow1-stretched-heading-one"
              >
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:!text-primary hs-accordion-active:pb-3 group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-with-title-and-arrow1-stretched-collapse-one"
                  type="button"
                >
                  Accordion #1
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow1-stretched-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow1-stretched-heading-one"
                >
                  <p className="text-gray-800 !py-3 !px-4 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion accordion-item !border-b-0"
                id="hs-basic-with-title-and-arrow1-stretched-heading-two"
              >
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:!text-primary hs-accordion-active:pb-3 group pt-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-with-title-and-arrow1-stretched-collapse-two"
                  type="button"
                >
                  Accordion #2
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow1-stretched-collapse-two"
                  className="hs-accordion-content accordion-body hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow1-stretched-heading-two"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion accordion-item  overflow-hidden"
                id="hs-basic-with-title-and-arrow1-stretched-heading-three"
              >
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:!text-primary hs-accordion-active:pb-3 group pt-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-with-title-and-arrow1-stretched-collapse-three"
                  type="button"
                >
                  Accordion #3
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow1-stretched-collapse-three"
                  className="hs-accordion-content accordion-body hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow1-stretched-heading-three"
                >
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <h6 className="mb-3 !text-defaulttextcolor">Light Colors:</h6>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Primary Soft Color"
            customCardClass="custom-box"
            code={accordion12}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10"
                id="hs-accordion-heading-1"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-1"
                  type="button"
                >
                  Accordion #1
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-accordion-collapse-1"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-1"
                >
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10"
                id="hs-accordion-heading-2"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-2"
                  type="button"
                >
                  Accordion #2
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-accordion-collapse-2"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-2"
                >
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10"
                id="hs-accordion-heading-3"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:!text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:!text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-3"
                  type="button"
                >
                  Accordion #3
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-accordion-collapse-3"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-3"
                >
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Secondary Soft Color"
            customCardClass="custom-box"
            code={accordion13}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10"
                id="hs-accordion-heading-1-primary"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-1-primary"
                  type="button"
                >
                  Accordion #1
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-accordion-collapse-1-primary"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-1-primary"
                >
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10"
                id="hs-accordion-heading-2-primary"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-1-primary"
                  type="button"
                >
                  Accordion #2
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-accordion-collapse-2-primary"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-2-primary"
                >
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10"
                id="hs-accordion-heading-3-primary"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-1-primary"
                  type="button"
                >
                  Accordion #3
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-accordion-collapse-3-primary"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-3-primary"
                >
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <h6 className="mb-3 !text-defaulttextcolor">Solid Colors:</h6>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Primary"
            customCardClass="custom-box"
            code={accordion14}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10"
                id="hs-primary-heading-1"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-primary-collapse-1"
                  type="button"
                >
                  Accordion #1
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-primary-collapse-1"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-primary-heading-1"
                >
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10"
                id="hs-primary-heading-2"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-primary-collapse-2"
                  type="button"
                >
                  Accordion #2
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-primary-collapse-2"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-primary-heading-2"
                >
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10"
                id="hs-primary-heading-3"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-primary-collapse-3"
                  type="button"
                >
                  Accordion #3
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-primary-collapse-3"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-primary-heading-3"
                >
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Secondary"
            customCardClass="custom-box"
            code={accordion15}
          >
            <div className="hs-accordion-group">
              <div
                className="hs-accordion active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10"
                id="hs-secondary-heading-1"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-secondary-collapse-1"
                  type="button"
                >
                  Accordion #1
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-secondary-collapse-1"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-secondary-heading-1"
                >
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10"
                id="hs-secondary-heading-2"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-secondary-collapse-2"
                  type="button"
                >
                  Accordion #2
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-secondary-collapse-2"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-secondary-heading-2"
                >
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div
                className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10"
                id="hs-secondary-heading-3"
              >
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-secondary-collapse-3"
                  type="button"
                >
                  Accordion #3
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  id="hs-secondary-collapse-3"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-secondary-heading-3"
                >
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is
                    hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <h6 className="mb-3 !text-defaulttextcolor">Colored Borders:</h6>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Primary"
            customCardClass="custom-box"
            code={accordion16}
          >
            <div
              className="accordion accordion-border-primary accordions-items-seperate"
              id="accordionprimaryborderExample"
            >
              <div className="hs-accordion-group">
                <div
                  className="hs-accordion  accordion-item active"
                  id="hs-basic-heading1"
                >
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between  gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse1"
                    type="button"
                  >
                    Accordion Item #1
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-primary group-hover:text-primary dark:text-primary"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-primary group-hover:text-primary dark:text-primary"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-collapse1"
                    className="hs-accordion-content accordion-collapse w-full hidde transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading1"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div
                  className="hs-accordion  accordion-item"
                  id="hs-basic-heading2"
                >
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group  inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse2"
                    type="button"
                  >
                    Accordion Item #2
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-primary group-hover:text-primary dark:text-primary"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-primary group-hover:text-primary dark:text-primary"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-collapse2"
                    className="hs-accordion-content accordion-collapse w-full hidde transition-[height] duration-300 hidden"
                    aria-labelledby="hs-basic-heading2"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div
                  className="hs-accordion  accordion-item"
                  id="hs-basic-heading-tree"
                >
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group  inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse-tree"
                    type="button"
                  >
                    Accordion Item #3
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-primary group-hover:text-primary dark:text-primary"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:!text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-primary group-hover:text-primary dark:text-primary"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-collapse-tree"
                    className="hs-accordion-content accordion-collapse w-full hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading-two"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Success"
            customCardClass="custom-box"
            code={accordion17}
          >
            <div
              className="accordion accordion-border-success accordions-items-seperate"
              id="accordionsuccessborderExample"
            >
              <div className="hs-accordion-group">
                <div
                  className="hs-accordion  accordion-item active"
                  id="hs-basic-heading11"
                >
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse11"
                    type="button"
                  >
                    Accordion Item #1
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-success block w-3 h-3 text-success group-hover:text-success dark:text-success"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-success hs-accordion-active:group-hover:text-success hidden w-3 h-3 text-success group-hover:text-success dark:text-success"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-collapse11"
                    className="hs-accordion-content accordion-collapse w-full hidde transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading11"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div
                  className="hs-accordion  accordion-item"
                  id="hs-basic-heading12"
                >
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group  inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse12"
                    type="button"
                  >
                    Accordion Item #2
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-success block w-3 h-3 text-success group-hover:text-success dark:text-success"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-success hs-accordion-active:group-hover:text-success hidden w-3 h-3 text-success group-hover:text-success dark:text-success"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-collapse12"
                    className="hs-accordion-content accordion-collapse w-full hidde transition-[height] duration-300 hidden"
                    aria-labelledby="hs-basic-heading12"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div
                  className="hs-accordion accordion-item"
                  id="hs-basic-heading13"
                >
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group  inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse13"
                    type="button"
                  >
                    Accordion Item #3
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-success block w-3 h-3 text-success group-hover:text-success dark:text-success"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-success hs-accordion-active:group-hover:text-success hidden w-3 h-3 text-success group-hover:text-success dark:text-success"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-collapse13"
                    className="hs-accordion-content accordion-collapse w-full hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading13"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Left Aligned Icons"
            customCardClass="custom-box"
            code={accordion18}
          >
            <div
              className="accordion accordionicon-left accordions-items-seperate"
              id="accordioniconLeftExample"
            >
              <div className="hs-accordion-group">
                <div
                  className="hs-accordion  accordion-item"
                  id="hs-basic-heading21"
                >
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse21"
                    type="button"
                  >
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Accordion Item #1
                  </button>
                  <div
                    id="hs-basic-collapse21"
                    className="hs-accordion-content accordion-collapse w-full hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading21"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div
                  className="hs-accordion  accordion-item"
                  id="hs-basic-heading22"
                >
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse22"
                    type="button"
                  >
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Accordion Item #2
                  </button>
                  <div
                    id="hs-basic-collapse22"
                    className="hs-accordion-content accordion-collapse w-full hidde transition-[height] duration-300 hidden"
                    aria-labelledby="hs-basic-heading22"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div
                  className="hs-accordion  accordion-item"
                  id="hs-basic-heading23"
                >
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse23"
                    type="button"
                  >
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Accordion Item #3
                  </button>
                  <div
                    id="hs-basic-collapse23"
                    className="hs-accordion-content accordion-collapse w-full hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading23"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode
            title="Custom Accordion"
            customCardClass="custom-box"
            code={accordion19}
          >
            <div
              className="accordion customized-accordion accordions-items-seperate"
              id="customizedAccordion"
            >
              <div className="hs-accordion-group">
                <div
                  className="hs-accordion  accordion-item custom-accordion-primary"
                  id="hs-basic-heading31"
                >
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse31"
                    type="button"
                  >
                    Accordion Item #1
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-collapse31"
                    className="hs-accordion-content accordion-collapse w-full hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading31"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div
                  className="hs-accordion  accordion-item custom-accordion-secondary"
                  id="hs-basic-heading32"
                >
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse32"
                    type="button"
                  >
                    Accordion Item #2
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-collapse32"
                    className="hs-accordion-content accordion-collapse w-full hidde transition-[height] duration-300 hidden"
                    aria-labelledby="hs-basic-heading32"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div
                  className="hs-accordion  accordion-item custom-accordion-danger"
                  id="hs-basic-heading33"
                >
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse33"
                    type="button"
                  >
                    Accordion Item #3
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-collapse33"
                    className="hs-accordion-content accordion-collapse w-full hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading33"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
    </Fragment>
  );
};
export default Accordionscollapse;
