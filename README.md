# Qodex Software Website

![App Preview](https://imgix.cosmicjs.com/e51558c0-51e8-11f1-8305-f921d082af6c-autopilot-photo-1620712943543-bcc4688e7485-1779019614267.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, professional company website for Qodex Software built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🎨 Modern, responsive design with gradient accents
- ⚡ Server-side rendering for fast performance
- 📱 Mobile-first responsive layout
- 🔍 SEO-optimized pages
- 🎯 Dynamic content from Cosmic CMS
- 💼 Services, team, case studies, and testimonials pages

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a09aee9a6022ba8889073b7&clone_repository=6a09b019a6022ba8889073f5)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> Build a Next.js application for a company website called "My Company". Qodex Software helps growing businesses digitize and automate their daily operations through custom software and AI-powered platforms. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure.

## Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites
- Bun installed
- Cosmic account with bucket configured

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all services
const { objects } = await cosmic.objects
  .find({ type: 'services' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

The app uses four object types: services, team-members, case-studies, and testimonials.

## Deployment

Deploy to Vercel or Netlify with environment variables configured.

<!-- README_END -->