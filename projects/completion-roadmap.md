# Pushing Kernel Completion.

Write a roadmap, and trying to list potential funding sources to push Completion
and Jedi in the IPython kernel. So mostly writing non-code, and pushing a
white-paper (already started) that we could show to companies to say "hey would
you be willing to fund part of this ?". Here is part of the whitepaper draft. 


## Beginning of the white paper.

The majority of Jupyter users coding in Python are Using IPython. IPython provide most of the code-related features from directory navigation, to tab completions, to error handling. The quality and performance of the IPython kernel during code execution and interactive code edition directly impact the quality and speed in which analysis are developed by users. 

One the the key components in user productivity is code completion. Code completion is an well established way of boosting productivity by suggesting a number of completions to the user, among which to choose, leading to a decrease of cognitive load, reduction in typos, and providing an efficient input method encouraging better practices like descriptive method names.

While many completer source exists for traditional IDEs, the Jupyter project with the IPython kernel find itself in a specific and unique position. Unlike other IDEs, and code editor where code is written to be executed later on, typical usage of the jupyter notebook include a live kernel currently holding data. Thus where usual IDE typically make use of static analysis of the program, Jupyter, via the IPython kernel must use a different approach that mix reflexion and introspection intermingle with type inference and static analysis.

The current completion machinery in IPython is a list of number of heuristics and ad-hoc solutions providing completion to  the user. IPython recently added experimental support for the Jedi completion machinery which already highly improved the result of completion which now also inform user of completion’s type.

Still the IPython completion capability are not on par with what is achievable by proprietary solution for classical IDEs. IPython lacks on the following points:

Completion Performance : The time between a completion query and it’s response often average close to the second which can interrupt the flow of the analyst. This slow performance also prevent “as you type” completer forcing the user to request completion explicitly.
Completion requests are not asynchronous. In a notebook, while the Kernel is performing computation it is not possible for the user to ask for completion. It is thus common for Jupyter users to wait dataset loading, or metrics computation instead of focusing on the next task at hand.
Completion Precision. The quality and relevance of current completions could be highly improved. This is often referred to as “Intelligent” code completion or “Context aware” code completions.
Completions Completeness. IPython does not provides completions for all the structures in Python. It notably misses capacity to instrospect newer Python features and among other: Dataclasses, Enums, Dictionary keys…

