Goal: create very flat objects for core data types used in nteract applications as well as the ways we update them

Project Leads: Ben Russert, Kyle Kelley, Alex Booth

> Wait, what about commutable?

Commutable has been _awesome_ and should be borrowed from to build this up. However, commutable relied heavily on
Immutable.Map()'s. These lose all the benefits of flow typing, defaults, and direct property access that records have.

> Could we add these directly to commutable?

We'd love to. However, we don't want to make a refactor that required refactoring
all the apps that use them, as well as any external usage (Hydrogen included) that would have to adapt to new interfaces.


## Pile of links

* The output records work: https://github.com/nteract/nteract/blob/master/packages/records/README.md
* commutable
* [immer](https://github.com/mweststrate/immer)

