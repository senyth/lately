# Lately API

This is the backend for [Lately](../README.md), an app for tracking when you last did everyday household tasks and purchases. It's a REST API built with Express and MongoDB that handles user accounts and authentication, and will serve categories, activities, and log entries.

## Tech Stack

- [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/), run in development with [tsx](https://github.com/privatenumber/tsx)
- [MongoDB](https://www.mongodb.com/) (hosted on [Atlas](https://www.mongodb.com/atlas)) with [Mongoose](https://mongoosejs.com/)
- [Zod](https://zod.dev/) for environment and request validation
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) and [bcryptjs](https://github.com/dcodeIO/bcrypt.js) for authentication
- [cookie-parser](https://github.com/expressjs/cookie-parser) and [cors](https://github.com/expressjs/cors)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- [pnpm](https://pnpm.io/)
- A MongoDB database: a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster, or a local MongoDB instance

### Installation

```bash
cd server
pnpm install
```
