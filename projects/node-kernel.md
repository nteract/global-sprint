### The high level problem

We'd like to explore another way of handling a node.js kernel that is more closely aligned with how the chrome repl works.

Examples:
  - Console.log() seems to spurriously fail to enter output
  - Rerunning cells with let/const causes errors that break execution when they really shouldn't
  - async / await at a top level
  - No bundling of nice to have libraries

### What could we do?

- We could work to fix these problems with the maintainers of ijavascript. 
- We could fork and work to submit upstream patches
- We could fork and break from fundamental design principle of ijavascript.

### Proposal

- Fork and offer upstream patches while recognizing they might not be accepted

### Roadmap for sprint

- Fork and include nodeteract in the monorepo
- Fix critical errors (console.logging / variable declaration issue)
- ... and thats probably it
