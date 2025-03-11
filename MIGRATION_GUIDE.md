# Rathburn App Migration Guide

This document provides detailed instructions for migrating your original Rathburn Chemicals app to the new template.

## 1. Migration Overview

The migration process involves:

1. Setting up project configuration
2. Database configuration
3. Migrating core functionality (routes, API endpoints, components)
4. Testing and validation

## 2. Directory Structure Migration Map

| Original Structure          | New Structure           |
| --------------------------- | ----------------------- |
| `/src/app/`                 | `/app/`                 |
| `/src/app/(routes)/`        | `/app/(routes)/`        |
| `/src/app/(mobile-routes)/` | `/app/(mobile-routes)/` |
| `/src/app/(auth)/`          | `/app/(auth)/`          |
| `/src/app/api/`             | `/app/api/`             |
| `/src/database/`            | `/src/database/`        |
| `/src/lib/`                 | `/src/lib/`             |
| `/src/hooks/`               | `/src/hooks/`           |
| `/src/features/`            | `/src/features/`        |
| `/src/components/`          | `/app/(components)/`    |
| `/prisma/`                  | `/prisma/`              |

## 3. Database Migration

1. Copy your Prisma schema from the original project to the new one
2. Run the following commands to set up your database:

```bash
npm run prisma:generate
npm run prisma:push
```

## 4. Component Migration

Follow these steps for each component you need to migrate:

1. Copy the component code from the original project
2. Update imports if paths have changed
3. Adapt to the new styling system if necessary
4. Test the component in isolation

## 5. API Routes Migration

For each API route:

1. Copy the route handler from `/src/app/api/` to `/app/api/`
2. Update database imports and utility functions
3. Test the endpoint using a tool like Postman or Thunder Client

## 6. Authentication Migration

1. Copy authentication files from `/src/app/(auth)/` to `/app/(auth)/`
2. Update environment variables
3. Test login and registration flows

## 7. Feature Migration

For each feature module:

1. Copy the feature code from `/src/features/` to `/src/features/`
2. Update imports and paths
3. Test feature functionality

## 8. AWS Deployment Configuration

1. Copy your GitHub Actions workflow from `.github/workflows/deploy.yml` to the new project
2. Update any environment variables or steps as needed

## 9. Testing and Validation

After migrating:

1. Test all critical paths and workflows
2. Verify data persistence and retrieval
3. Test mobile views and responsive behavior
4. Test user authentication flows

## 10. Troubleshooting

Common issues and solutions:

- **Database Connection Issues**: Verify your `.env` file contains the correct DATABASE_URL
- **Component Styling Issues**: Check for conflicts between the template's styling and your component styles
- **API Route Errors**: Verify imports and database connection in API routes

## Recommended Migration Order

1. Database and Prisma setup
2. Core utilities and helpers
3. Authentication system
4. API routes
5. UI components
6. Page routes
7. Deployment configuration
