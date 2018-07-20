## Documentation!

**Lead**: Kyle Kelley ([@rgbkrk](https://github.com/rgbkrk))

**Project**: Create documentation to help _us_ build nteract and enable even more people to join us!

**Site**: `devdocs.nteract.io`

### Overview

Developer focused documentation to help us build nteract and enable more people to join us.

- Guides
  - Getting started with the monorepo
  - Software Design
  - React performance tips
- Tutorials
- Raw API docs

### How do I get started?

- [Install Node.js >= 8.x](https://docs.npmjs.com/getting-started/installing-node)
- [Set up the nteract monorepo](https://github.com/nteract/nteract#getting-started)

  1.  Fork [the nteract monorepo](https://github.com/nteract/nteract)
  2.  Clone your fork or the nteract monorepo `git clone https://github.com/nteract/nteract`
  3.  `cd` to the directory where you `clone`d it
  4.  `npm install`

  To keep up-to-date with changes to the root nteract/nteract branch:

  5.  Set the root as a remote: `git remote add upstream https://github.com/nteract/nteract.git`

  When changes are made, they can then be pulled from the master branch:

  6.  `git pull upstream master`
  7.  `npm install`

- Run a local docs server with `npm run docs`. Note the `Local:` IP provided. Use that to get to your local auto-building docs server!

🎉 You now have the component docs running!

#### Documenting a new component

TODO: Outline how to start documenting a new component

TODO: Outline how to change / update a new component doc
