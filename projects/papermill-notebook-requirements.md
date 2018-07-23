# Explore requirements tied to notebooks
Notebooks store code you want to execute, why not specify package requirements too? Could be handy to store requirements in metadata, or maybe with a new magics expression?

# Project Lead
Matthew Seal (`mseal` on slack)

## Storing requirements:
Come up with creative options for how we should best store and express notebook package requirements. Maybe amagics moves the requirements spec into metadata on the json doc?

## Papermill interpreting requirements:
Given a first-class representation of requirements, give papermill options for respection, skipping, or managing requirements. Add a command to list if requirements are currently met for a notebook to execute? Ideas welcome!
