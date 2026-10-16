# VY Clothing Store — merged into Nuxt Dev

This folder contains the VY Clothing Store frontend merged into the existing `nuxt-dev` project structure.

## Stack
- Nuxt 4
- Vue 3 Composition API and TypeScript
- Nuxt UI 4
- Tailwind CSS 4
- Browser `localStorage` demo persistence

## Install and run
Use Node.js 22 LTS or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:3000`).

Useful checks:

```bash
npm run typecheck
npm run build
```

## Included pages and demo behavior
- Product browsing, search, categories, product details, new arrivals and best sellers
- Cart, wishlist, demo checkout and order history
- Demo account/login/register pages
- Admin product, category, inventory, customer and order pages
- Contact, FAQ, policies, newsletter and other store pages

## Important
This is a frontend-only demo. Data is stored in the current browser's `localStorage`; there is no database, secure authentication, backend API, real payment, or email integration. Do not use the demo admin or checkout for real customer data.

The generated Nuxt build/cache directories and installed dependencies are intentionally excluded. Run `npm install` to create a fresh dependency tree for this project.
