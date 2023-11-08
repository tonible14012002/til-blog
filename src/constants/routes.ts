
export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    BLOG: '/blog',
    TAG: '/tag',
    PROJECT: '/project',
    TIL: '/til',
    COMPONENTS: '/components',
    BLOG_POST: (slug: string) => `/blog/${slug}`,
    TIL_POST: (slug: string) => `/til/${slug}`
}