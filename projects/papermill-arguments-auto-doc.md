# Express papermill arguments more concretely
Today we mark a cell as the parameter cell and execute against it. Usually we put parameter defaults there, but could we parse the cell to define a contract?

### Project Lead
M Pacer (`mpacer` on slack) && Matthew Seal (`mseal` on slack)

## Parameter cell docs:
Ideas welcome! A few to start:

- We want type information, Python 3 type assignment translations?
- Parse docstrings above variables (make those the exposed contract?)
-- What docstring format to use?
-- Informing developer when the docstring is not parsable?
-- Parameter descriptions?

## CLI --help upgrade
Given we express notebook arguments programatically, let's make a nice help section if you only list the input notebook.

    papermill my_input_notebook.ipynb --help
    
Could spit out the expected parameter arguments, maybe with an example string to make their assignments?
