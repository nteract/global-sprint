# Let's be better tracebacks. 

This will likely be focused on IPython first (to figure out what's possible),
and then move to a more jupyter-wide implementation. 

Errors in IPython are ugly, it's a mess were ansi-code and formatting is
generated and intermixed with traceback inspection. I've started to separate the
formatting from the inspection and would like to push that forward without much
changes in appearance.

Once we have a better idea of the datastructure and information we need, I'd
like to push for an HTML repr of errors, and maybe a error mimetype to be
rendered in the frontend. 

