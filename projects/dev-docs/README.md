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
  4.  `yarn`

  To keep up-to-date with changes to the root nteract/nteract branch:

  5.  Set the root as a remote: `git remote add upstream https://github.com/nteract/nteract.git`

  When changes are made, they can then be pulled from the master branch:

  6.  `git pull upstream master`
  7.  `yarn`

- Run a local docs server with `npm run docs`. Note the `Local:` IP provided. Use that to get to your local auto-building docs server!

🎉 You now have the component docs running!

#### Documenting a new component

We are using [React Stylist](https://react-styleguidist.js.org/) for documenting
component examples. There is a top-level `styleguide.config.js` configuration
file in the nteract repo that determines which components are included in the
docs and under what heading (see the "sections" portion), which you may need to
amend if the thing you're documenting isn't being included yet.

All files without documentation that are being included by our configuration
will have a placeholder "Add examples to this component" instructions, which are
paraphrased here:

To document a new component, create a `Readme.md` or `SomeComponent.md` file in
the component's folder like this:

    Here's an example some component example:

    ```js
    <SomeComponent specialProperty="coolValue" _someStateSetting />
    ```

Additionally, inline comment blocks in `.js` files...

    /**
     * That look like this
     */

...when sprinkled above of Flow type annotations and anything that is `export`ed
will also get included in the rendered docs (markdown formatting is supported
within those, so, *mark* my words, it will be *up* to you to have fun with it).


#### Documenting exported functions and other objects

TODO: Confirm if this will be a focus and which tools we will use. Will we build package docs individually or can we build the whole monorepo together? Can we incorporate styleguide docs together or do we keep components separate?

Topics to cover:

- Link to and/or comment on how to write JSDoc style comments

- Building docs with [documentation.js](https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md), for example:

  ```
  cd packages/core
  documentation serve src/index.js
  ```

- [Adding a docstring above flow type annotations](https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md#flow-type-annotations)


### Resources

* [A Design Doc for Design Docs](https://medium.com/@cramforce/design-docs-a-design-doc-a152f4484c6b)
