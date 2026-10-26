# Lately

> *when did I last...?*

Lately is a small full-stack web app for tracking how often you do the everyday things that are easy to lose track of: laundry, buying tissue paper, restocking cleaning solutions, and so on. Log an activity when you do it, and Lately shows you when you last did it and how often it happens.

## Features

- **Categories**: group what you track (for example, *Household chores* or *Household items*) and manage them from a settings page
- **Activities**: add things to track inside a category, such as "Laundry" or "Tissue paper"
- **Quick logging**: record that you did or bought something with a single action
- **History**: a "when did I last...?" feed of your latest entries with relative times ("2 days ago")
- **Frequency insights**: see how often each activity happens (average interval between entries)
- **Light and dark themes**: a calm Sage color palette

## Tech Stack

**Frontend**
- [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/) for components and theming
- [Sass](https://sass-lang.com/) for custom styles
- [TanStack Query](https://tanstack.com/query) for server state (fetching, caching, mutations)

**Backend**
- [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)