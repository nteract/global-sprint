# Controlling Nteract's Immutable JS Models With Python

Presently there's an [open discussion](https://github.com/nteract/models) about how to give Python control of nteract's Immutable JS models via `setIn`.

# Project Leads

Ryan Morshead (@rmorshea on Slack and GitHub) Grant Nestor (@gnestor on Slack and GitHub).

**Availability**

+ @rmorshea: July 28-30
+ @gnestor: ???

# Objectives

1. Attempting to create a React-like experience in Python.
2. Solidify the model specification. There are two proposals:
   + The `vdom` specification: https://github.com/nteract/vdom/blob/master/docs/spec.md
   + And a flattened version of it: https://github.com/rmorshea/purly#model-specification

# A React-Like Python Experience

On its face this may seem like a relatively simple task, however Python and Javascript are very different languages. Perhaps the greatest barrier to this is Python's prohibitive requirements around white-space and placement of function definitions. Javascript on the other hand has very few requirements around how, and where one can define nested structures and functions. In short, we need to find a nice balance between the freedom of Javascript and the boundaries of Python's syntax.

Consider this javascript structure:

```javascript

let spec = {
  tag: 'div',
  children: [
    "Enter some text here:",
    {
      tag: 'input',
      type: 'text',
      onChange(event) {
        console.log(this.value);
      }
    },
  ]
}
```

That might look something like this <div>Enter some text here: <input type='text'></input></div>

While this is very cleanly expressed in Javascript. How would we do this in Python?

```python
spec = {
  'tag': 'div',
  'children': [
    "Enter some text here:",
    {
      'tag': 'input',
      'type': 'text',
      'onChange': <???????????>
      }
    },
    {
      'tag': 'div'
      'children': ['waiting...']
      'attributes': {
        'id': 'output'
      }
    }

  ]
  'attributes': {
    'backgroundColor': 'blue'
  }
}
```

We could use a `lambda` function for `onChange`, but those are limited to a single expression. We could define the function outside the `spec`, but that avoids the fact that we don't have access to the `this` keyword. We could try and do this with classes, but that opens a whole other can of worms.

> I'm no Javascript wizard, but I hope this get's the point across about the language barrier here.

There easy way out of this dilemma is to make an imperative API for Python which is what [`purly`](https://github.com/rmorshea/purly) does. The more challenging task is to make a declarative API. Plotly [`dash`](https://github.com/plotly/dash) is a library that has attempted to leverage decorators into making things more imperative. I (@rmorshea) personally have one other idea which I can describe during the sprints, but it's pretty out there.

# Creating A General Purpose DOM Specification

Just to put it out there the `vdom` spec, and the general concept of `vdom` are great!

However in my opinion the spec sacrifices usability for readability. While it's pretty to look at, whenever you want to update a value that's deeply nested in the `vdom` you'll need to either replace the whole dang thing, or enumerate the long path to that value. Since in a networked environment re-sending the whole model isn't viable, developers for this specification would need to keep track of every path they intend to update, and well... that's hard.

A flattened version of the spec sacrifices readability for usability. However the advantage here is that there are no more paths - only unique identifiers that refer to element definitions.

Compare these two representations:

```javascript
{
  tag: 'div',
  children: [
    {
      tag: 'div',
      children: [
        "Here's some text"
      ]
    }
  ]
}
```

```javascript
{
  uuid_1: {
    'tag': 'div',
    children: [
      {'ref': 'uuid_2'}
    ]
  }
  uuid_2: {
    'tag': 'div',
    'children': [
      "Here's some text"
    ]
  }
}
```
