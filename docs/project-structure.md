<div class="text-2xl font-bold">app/</div>
<div class="text-xl">├── (routes)/ # Route definitions and pages</div>
<div class="text-xl">├── (components)/ # UI components organized by layout type</div>
<div class="text-xl">│ ├── (authenticationlayout)/ # Authentication-related pages</div>
<div class="text-xl">│ ├── (contentlayout)/ # Main content pages and components</div>
<div class="text-xl">│ │ ├── (authenticationlayout)/authentication/</div>
<div class="text-xl">│ │ │ ├── coming-soon/ # Coming soon page</div>
<div class="text-xl">│ │ │ ├── create-password/ # Create password pages</div>
<div class="text-xl">│ │ │ │ ├── create-basic/ # Basic layout variant</div>
<div class="text-xl">│ │ │ │ └── create-cover/ # Cover layout variant with image</div>
<div class="text-xl">│ │ │ │ ├── lock-screen/ # Lock screen pages</div>
<div class="text-xl">│ │ │ │ │ ├── screen-basic/ # Basic layout variant</div>
<div class="text-xl">│ │ │ │ │ └── screen-cover/ # Cover layout variant with image</div>
<div class="text-xl">│ │ │ │ │ ├── reset-password/ # Reset password pages</div>
<div class="text-xl">│ │ │ │ │ │ ├── reset-basic/ # Basic layout variant</div>
<div class="text-xl">│ │ │ │ │ │ └── reset-cover/ # Cover layout variant with image</div>
<div class="text-xl">│ │ │ │ │ │ ├── sign-in/ # Sign in pages</div>
<div class="text-xl">│ │ │ │ │ │ │ ├── signin-basic/ # Basic layout variant</div>
<div class="text-xl">│ │ │ │ │ │ │ └── signin-cover/ # Cover layout variant with image</div>
<div class="text-xl">│ │ │ │ │ │ │ ├── sign-up/ # Sign up pages</div>
<div class="text-xl">│ │ │ │ │ │ │ │ ├── signup-basic/ # Basic layout variant</div>
<div class="text-xl">│ │ │ │ │ │ │ │ └── signup-cover/ # Cover layout variant with image</div>
<div class="text-xl">│ │ │ │ │ │ │ │ ├── two-step-verification/ # Two-step verification pages</div>
<div class="text-xl">│ │ │ │ │ │ │ │ │ ├── two-basic/ # Basic layout variant</div>
<div class="text-xl">│ │ │ │ │ │ │ │ │ └── two-cover/ # Cover layout variant with image</div>
<div class="text-xl">│ │ │ │ │ │ │ │ └── under-maintanance/ # Under maintenance page</div>
<div class="text-xl">│ │ │ │ │ │ │ └── (contentlayout)/advanced-ui/</div>
<div class="text-xl">│ │ │ │ │ │ └── (contentlayout)/apps/</div>
<div class="text-xl">│ │ │ │ └── gallery/ # Gallery application</div>
<div class="text-xl">│ │ └── (contentlayout)/</div>
<div class="text-xl">│ ├── api/ # API routes</div>
<div class="text-xl">│ ├── layout.tsx # Root layout component</div>
<div class="text-xl">│ ├── page.tsx # Root page</div>
<div class="text-xl">│ ├── globals.scss # Global styles</div>
<div class="text-xl">│ ├── PrelineScript.tsx # Script for Preline UI library</div>
<div class="text-xl">│ ├── favicon.ico # Favicon</div>
<div class="text-xl">│ └── not-found.tsx # 404 page</div>

<div class="text-xl">(components)/(authenticationlayout)/error/</div>
<div class="text-xl">├── error-401/ # Unauthorized error page</div>
<div class="text-xl">├── error-404/ # Not found error page</div>
<div class="text-xl">└── error-500/ # Server error page</div>

<div class="text-xl">(components)/(contentlayout)/advanced-ui/</div>
<div class="text-xl">├── accordions&collapse/ # Accordion and collapse components</div>
<div class="text-xl">├── customscrollbar/ # Custom scrollbar implementations</div>
<div class="text-xl">├── draggable-cards/ # Draggable card components</div>
<div class="text-xl">├── ratings/ # Rating components</div>
<div class="text-xl">├── scrollspy/ # Scrollspy implementation</div>
<div class="text-xl">└── swiper-js/ # Swiper carousel components</div>

<div class="text-xl">(components)/(contentlayout)/apps/</div>
<div class="text-xl">└── gallery/ # Gallery application</div>

<style>
    .text-xl {
        margin-left: 2rem;
    }
</style>
