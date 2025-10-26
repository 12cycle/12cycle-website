# 12Cycle Site

12Cycle Site is a marketing and product presence built with React, TypeScript, and Vite. The project embraces a component-driven architecture and ships with Tailwind CSS, motion effects, routing, and testing utilities ready for customization.

## Tech Stack
- React 18 with Vite for rapid development
- TypeScript with strict configuration
- Tailwind CSS and shadcn/ui for styling
- React Router and React Helmet for routing and metadata
- Vitest and Testing Library for unit tests

## Getting Started
1. Install dependencies: `npm install`
2. Run the development server with hot reloading: `npm run dev`
3. Build the production bundle: `npm run build`

Keep the development terminal visible to monitor warnings from Vite and TypeScript.

## Available Scripts
- `npm run dev`: Start the Vite development server.
- `npm run build`: Type-check and build the production bundle into `dist/`.
- `npm run preview`: Serve the production bundle locally for smoke testing.
- `npm run lint`: Run ESLint using the project configuration.
- `npm run lint:fix`: Apply auto-fixes for lint warnings.
- `npm run test`: Execute the Vitest suite in watch mode.
- `npm run test:run`: Run the Vitest suite once in CI mode.
- `npm run format` / `npm run format:check`: Format the codebase with Prettier or verify formatting.

## Project Structure
- `src/`: Application source organized by feature domains.
- `public/`: Static assets served as-is by Vite.
- `src/assets/`: Images and icons imported through the module graph.
- `index.html`: SPA bootstrap file.
- `docs/`: Additional design and reference materials.

`main.tsx` connects React to the DOM, while `App.tsx` stays lightweight and delegates features to domain modules. Prefer functional components, extract reusable UI, and follow the linting guidance described in `eslint.config.js`.

## License
This project is licensed under an All Rights Reserved license. See `LICENSE` for details.
