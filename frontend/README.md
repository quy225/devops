# DevOps Frontend

Frontend React application cho DevOps Mini Project.

## Features
- React 19 with TypeScript
- React Router for page navigation
- Task management interface
- Student info page (/about)
- Vite for fast development

## Development

```bash
npm install
npm run dev

# Run with --host to expose on network
npm run dev -- --host
```

Frontend chạy trên port 5173

## Pages

- `/` - Task management (Home)
- `/about` - Student information

## Build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
