## Feature-Based Architecture

### Overview

Feature-Sliced Design (FSD) is an architectural methodology that focuses on organizing code by business features and technical concerns across standardized layers and segments. Each feature/entity represents a specific functionality or domain within the application. FSD promotes a clear separation of concerns and promotes code maintainability, scalability, and testability.

### Core Principles

- **Explicit Business Logic**: Clear separation of features and their business logic.
- **Uniform Organization**: Consistent organization of code across layers and segments.
- **Controlled Reuse** Dependency flow in one direction.
- **Scalability**: Architecture remains maintainable as project grows.

### Layer Structure

The FSD architecture consists of several layers and segments:

1. **App Layer**: Presentation layer for user interfaces, Routes and Page Composition.
2. **Widgets Layer**: Compositional layer combining multiple features.
3. **Features Layer**: Business features with their business logic and User Interactions.
4. **Entities Layer**: Business Domain entities/models and operations.
5. **Shared Layer**: Reusable Infrastructure Shared code and utilities.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
