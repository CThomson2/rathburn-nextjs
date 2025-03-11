// This file defines a centralized configuration object for generating consistent URL paths across the application.
export const paths = {
  home: {
    getHref: () => "/",
  },

  auth: {
    register: {
      getHref: (redirectTo?: string | null | undefined) =>
        `/register${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
        }`,
    },
    login: {
      getHref: (redirectTo?: string | null | undefined) =>
        `/login${
          redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""
        }`,
    },
  },

  // dashboard: {
  //   root: {
  //     getHref: () => "/dashboard",
  //   },
  //   drumStock: {
  //     getHref: () => "/dashboard/drum-stock",
  //   },
  //   production: {
  //     getHref: () => "/dashboard/production",
  //   },
  //   finishedGoods: {
  //     getHref: () => "/dashboard/finished-goods",
  //   },
  // },

  inventory: {
    root: {
      getHref: () => "/inventory",
    },
    dashboard: {
      getHref: () => "/inventory/dashboard",
    },
    drumStock: {
      getHref: () => "/inventory/drum-stock",
    },
    orders: {
      getHref: () => "/inventory/orders",
    },
    newOrder: {
      getHref: () => "/inventory/orders/new",
    },
    activity: {
      getHref: () => "/inventory/activity",
    },
  },

  public: {
    discussion: {
      getHref: (id: string) => `/public/discussions/${id}`,
    },
  },
} as const;
