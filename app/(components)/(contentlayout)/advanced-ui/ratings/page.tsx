"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import StarsIcon from '@mui/icons-material/Stars';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material';

const Ratings = () => {

	const [ratingValue, setRatingValue] = useState<number | null>(null);
	const handleRatingChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
		setRatingValue(newValue); // Update the rating value when the user clicks
	};

	const handleResetRating = () => {
		setRatingValue(null); // Clear the rating when the button is clicked
	};

	const [value, setValue] = useState<number | null>(2);
	const [hover, setHover] = useState<any>(-1);

	const labels = ["Poor", "Fair", "Good", "Excellent", "Perfect"];
	function getLabelText(value:number) {
		return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
	}


    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#ff6d75',
        },
        '& .MuiRating-iconHover': {
          color: '#ff3d47',
        },
      });
    return (
        <Fragment>
            <Seo title={"Ratings"} />
            <Pageheader currentpage="Ratings" activepage=" Advanced Ui" mainpage="Ratings" />
          
                <div className="grid grid-cols-12 gap-x-5">
                    <div className="sm:col-span-12 lg:col-span-6 xl:col-span-4 xxl:col-span-4">
                        <div className="box">
                            <div className="box-header">
                                <h5 className="box-title"> Basic usage</h5>
                            </div>
                            <div className="box-body">
                                <div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-sm">
                                   
                                    <div className="flex flex-row-reverse justify-end items-center">
                                            <Rating name=""  />
                                             </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-12 lg:col-span-6 xl:col-span-4 xxl:col-span-4">
                        <div className="box">
                            <div className="box-header">
                                <h5 className="box-title"> Button with star shapes.</h5>
                            </div>
                            <div className="box-body">
                                <div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-sm">
                                  
                                    <div className="flex items-center">
                                    <Rating name="" defaultValue={4}  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-12 lg:col-span-6 xl:col-span-4 xxl:col-span-4">
                        <div className="box">
                            <div className="box-header">
                                <h5 className="box-title"> Button with heart shapes.</h5>
                            </div>
                            <div className="box-body">
                                <div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-sm">
                                    
                                    <div className="flex items-center">
                                    <StyledRating
                                        name="customized-color"
                                        defaultValue={4}
                                        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        precision={0.5}
                                        icon={<FavoriteIcon fontSize="inherit" />}
                                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-12 lg:col-span-6 xl:col-span-4 xxl:col-span-4">
                        <div className="box">
                            <div className="box-header">
                                <h5 className="box-title"> Static Ratings.</h5>
                            </div>
                            <div className="box-body">
                                <div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-sm">
                                   
                                    <div className="flex items-center">
                                    <Rating name="read-only" defaultValue={3} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-12 lg:col-span-6 xl:col-span-4 xxl:col-span-4">
                        <div className="box">
                            <div className="box-header">
                                <h5 className="box-title"> Emoji's Ratings.</h5>
                            </div>
                            <div className="box-body">
                                <div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-sm">
                                    
                                    <div className="sm:flex items-center justify-between space-y-2 sm:space-y-0">
                                        <p className="text-sm mb-0 font-semibold"> Did this answer your question?</p>
                                        
                                        <div className="flex justify-center items-center">
                                            <button type="button"
                                                className="size-8 inline-flex justify-center items-center text-xl rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                &#128532;
                                            </button>
                                            <button type="button"
                                                className="size-8 inline-flex justify-center items-center text-xl rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                &#128528;
                                            </button>
                                            <button type="button"
                                                className="size-8 inline-flex justify-center items-center text-xl rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                &#129321;
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-12 lg:col-span-6 xl:col-span-4 xxl:col-span-4">
                        <div className="box">
                            <div className="box-header">
                                <h5 className="box-title"> Rate with thumb buttons.</h5>
                            </div>
                            <div className="box-body">
                                <div className="p-5 border border-dashed border-gray-200 dark:border-white/10 rounded-sm">
                                   
                                    <div className="mt-2 flex justify-center items-center gap-x-2">
                                        <h6 className="text-gray-800 dark:text-white">
                                            Was this page helpful?
                                        </h6>
                                        <button type="button"
                                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-sm border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:light  dark:focus:outline-none dark:focus:ring-1 dark:focus:light">
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M7 10v12" />
                                                <path
                                                    d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                                            </svg>
                                            Yes
                                        </button>
                                        <button type="button"
                                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-sm border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-bodybg dark:border-white/10 dark:text-white dark:hover:light  dark:focus:outline-none dark:focus:ring-1 dark:focus:light">
                                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M17 14V2" />
                                                <path
                                                    d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                                            </svg>
                                            No
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Basic Rater
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex flex-wrap items-center justify-between">
                                    <p className="text-[.875rem] mb-0 font-semibold">Show Some <span
                                            className="text-danger">❤</span> with rating :</p>
                                    <Rating name=""  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    5 star rater with steps
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex flex-wrap items-center justify-between">
                                    <p className="text-[.875rem] mb-0 font-semibold">Dont forget to rate the product :</p>
                                    <Rating name=""  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 xl:col-span-12 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Custom messages
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex flex-wrap items-center justify-between">
                                    <p className="text-[.875rem] mb-0 font-semibold">Your rating is much
                                        appreciated&#128079; :</p>
                                        <Rating name="" defaultValue={4}  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Unlimited number of stars readOnly
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex flex-wrap items-center justify-between">
                                    <p className="text-[.875rem] mb-0 font-semibold">Thanks for rating :</p>
                                    <Stack spacing={1} className="rating-stars block my-rating-7">
									<Rating id="stars-unlimited" name="half-rating-read" value={6} max={10} size="large" readOnly />
								</Stack>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    5 Star rater with custom isBusyText and simulated backend
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex flex-wrap items-center justify-between">
                                    <p className="text-[.875rem] mb-0 font-semibold">Thanks for rating :</p>
                                    <Box sx={{ "& > legend": { mt: 2 } }} >
									<Rating name="no-value" size="large"  max={5} />
								</Box>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    On hover event
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex flex-wrap items-center justify-between">
                                    <p className="text-[.875rem] mb-0 font-semibold">Please give your valuable rating :</p>
                                    <div className="flex flex-wrap items-center">
                                    <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
										<Rating
											name="hover-feedback"
											value={value}
											precision={0.5}
											getLabelText={getLabelText}
											onChange={(_event, newValue) => {
												setValue(newValue);
											}}
											onChangeActive={(_event, newHover) => {
												setHover(newHover);
											}}
											emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
										/>
										{value !== null && (
											<Box className="rating-stars my-rating-9 rating-9" sx={{ ml: 2 }}>
												<span className="live-rating badge bg-success-transparent ms-3">
													{labels[hover !== -1 ? hover : value]}
												</span>
											</Box>
										)}
									</Box>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Clear/reset rater
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex flex-wrap items-center justify-between">
                                    <p className="text-[.875rem] mb-0 font-semibold">Thank You so much for your support :
                                    </p>
                                    <div className="flex flex-wrap items-center">
                                    <Rating
										name="clickable-rating"
										value={ratingValue}
										onChange={handleRatingChange} // Handle rating change when the user clicks
									/>
									<button
										className="ti-btn ti-btn-icon ti-btn-sm ti-btn-danger !ms-4"
										id="rater-reset-button"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										data-bs-title="Reset"
										onClick={handleResetRating}
									>
										<i className="ri-restart-line"></i>
									</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}
export default Ratings