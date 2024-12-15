# MemesBeMemes

A Next.js web application for displaying memes with a modern, responsive interface. The application currently features a full-screen meme display with a minimalist design.

## Tech Stack

- Next.js 15.1.0
- React 19.0.0
- TypeScript
- Tailwind CSS

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/memesBeMemes.git
cd memesBeMemes
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Features

- Full-screen meme display
- Responsive image handling
- Modern UI with Tailwind CSS
- TypeScript support for type safety

## Project Structure

```
memesBeMemes/
├── public/          # Static files
├── src/
│   └── app/        # Next.js app directory
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── package.json
└── tailwind.config.ts
```

## License

ISC 