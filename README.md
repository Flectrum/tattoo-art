# Tattoo Art

A multilingual tattoo artist booking and portfolio web application built with React, TypeScript and Tailwind CSS.

## Overview

Tattoo Art is a responsive website for a tattoo artist. The application provides:

* Artist portfolio
* Tattoo information
* Consultation / booking form
* Multilingual interface
* Responsive desktop and mobile navigation
* Background video
* Social media links
* Client-side form validation
* Planned backend integration for booking requests
* Planned Telegram notifications for new consultation requests

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS

### Backend

The backend is currently under development.

Planned technologies:

* Java
* Spring Boot
* REST API
* Database
* Telegram Bot API

### Planned integrations

* Telegram Bot
* Google Calendar
* Google Reviews

## Languages

The application supports four languages:

* English — `en`
* Estonian — `et`
* Russian — `ru`
* Spanish — `es`

The language is part of the URL.

Examples:

```text
/en
/en/portfolio

/et
/et/portfolio

/ru
/ru/portfolio

/es
/es/portfolio
```

English is used as the default language.

Unsupported language codes should result in the application's `PageNotFound` page.


## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd tattoo-art
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Routing

The application uses React Router.

The root route redirects to English:

```text
/
↓
/en
```

Language routes are structured as:

```text
/:lang
```

Pages are nested under the selected language:

```text
/:lang
/:lang/portfolio
/:lang/about
/:lang/booking
```

For example:

```text
/en
/en/portfolio
/en/about
/en/booking
```

## Language System

Translations are stored separately for each supported language.

The application uses a `LanguageProvider` to make the current language and translations available to components.

Example:

```tsx
const { lang, t } = useLanguage();
```

Translations can then be accessed through:

```tsx
t.navItems.home
t.navItems.portfolio
t.navItems.about
t.navItems.booking
```

The translation helper falls back to English when necessary:

```tsx
getTranslations(lang)
```

Navigation items are generated using the current language:

```tsx
const navItems = getNavItems(lang);
```

Components should not contain hardcoded navigation labels when a translation is available.

## Navigation

Navigation items are shared between the desktop navigation and other components such as the footer.

The navigation configuration is generated from the current language:

```tsx
getNavItems(lang)
```

Each navigation item contains:

```ts
export type NavItem = {
  label: string;
  href: string;
};
```

The active navigation item should be visually highlighted.

## Responsive Design

The application is designed for:

* Desktop
* Tablet
* Mobile

Tailwind CSS responsive utilities are used throughout the application.

Special attention should be paid to:

* Horizontal overflow on mobile
* Full-width background video
* Mobile navigation
* Footer positioning
* Viewport height on mobile browsers

Avoid using unnecessary `100vw` / `w-screen` elements inside containers because they can create horizontal scrolling on mobile devices.

## Background Video

The homepage uses a background video.

The video is positioned behind the page content and an overlay is used to improve text readability.

Conceptually:

```text
Background video
       ↓
Dark overlay
       ↓
Page content
```

The video should not affect document layout or create horizontal scrolling.

## Mobile Navigation

The mobile navigation uses component state to control whether the menu is open.

The application also uses a custom `useClickOutside` hook to close the navigation when the user clicks outside the menu.

The mobile menu should:

* Open from the navigation button
* Close when clicking outside
* Close when selecting a navigation item
* Display an overlay behind the menu
* Remain above page content using an appropriate z-index

## Booking

The booking page contains a consultation form.

The form collects information required to contact the client.

The frontend is responsible for:

* Input handling
* Validation
* Required fields
* Contact method selection
* User feedback

The planned backend will receive booking requests through a REST API.

Example future endpoint:

```text
POST /api/bookings
```

## Backend Integration

The backend will be responsible for:

* Receiving booking requests
* Validating requests
* Processing booking information
* Sending notifications
* Integrating with external services
* Protecting administrative endpoints

The frontend should not contain secrets such as:

* Telegram bot tokens
* API keys
* Database credentials
* Private OAuth credentials

These values belong on the backend.

## Telegram Integration

The planned backend will use a Telegram bot to notify the administrator when a new consultation request is submitted.

The Telegram bot should be implemented on the backend rather than directly in React.

Planned flow:

```text
Client
  ↓
Booking form
  ↓
React
  ↓
Spring Boot REST API
  ↓
Booking service
  ↓
Telegram Bot
  ↓
Administrator
```

## Code Style

The project uses TypeScript.

Prefer:

* Functional React components
* TypeScript types/interfaces
* Reusable components
* Small focused functions
* Custom hooks for reusable logic
* Translation keys instead of hardcoded UI text

Avoid:

* `any` unless there is a strong reason
* Duplicated components
* Hardcoded translated text
* Business logic directly inside large JSX blocks
* Secrets in frontend code

## Adding a New Language

To add a new language:

1. Add the language code to the `Language` type.
2. Create a new translation file.
3. Add the translation object to the translations collection.
4. Add the language to the language selector.
5. Verify routing.
6. Test navigation and all pages.

Example:

```text
/fr
/fr/portfolio
/fr/about
/fr/booking
```

## Troubleshooting

### Language does not change

Check that:

```tsx
const { lang } = useLanguage();
```

is used by the component that generates navigation.

Also verify that:

```tsx
getNavItems(lang)
```

is called again when `lang` changes.

Do not create navigation labels once outside the React component if they depend on the current language.

### `/en/en/portfolio`

Do not include the language twice when using React Router.

If the current route is already:

```text
/en
```

use:

```tsx
to="portfolio"
```

instead of:

```tsx
to={`${lang}/portfolio`}
```

### `/about/booking` instead of `/booking`

Check whether the route is relative.

For a top-level language route, use:

```tsx
to={`/${lang}/booking`}
```

or structure the route appropriately.

### Horizontal scrolling on mobile

Check for elements using:

```css
width: 100vw;
```

or Tailwind:

```text
w-screen
```

inside containers.

Prefer:

```text
w-full
```

when the element should simply occupy its parent's width.

### Footer overlaps content

The main layout should use a flex column structure:

```tsx
<div className="flex min-h-dvh flex-col">
  <Navbar />

  <main className="flex-1">
    <Outlet />
  </main>

  <Footer />
</div>
```

The footer should normally remain outside the page content rather than being absolutely positioned.

## Future Development

Planned improvements:

* Spring Boot backend
* Database integration
* Telegram booking notifications
* Google Calendar integration
* Google Reviews
* Admin authentication
* Portfolio image management
* Image upload
* Secure admin API
* Production deployment
* Docker
* Nginx
* HTTPS
* Automated deployment


