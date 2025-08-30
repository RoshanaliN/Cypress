Notes:
Cypress only supports CSS selectors
for id - #id -> tagname#id
for className - .className -> tagname.classname
for attribute - tagname[attribute='value']
for traversing - parent child

Cypress is Asynchronus in nature and there is no guarntee of secquence of execution, but cypress take care of this, by adding all steps in queue and executing them
Promise in cypress comes in three different stages: rejections(step failed), resolved(step executed) and pending. Promises are wrapped and hidden form us.
Non cypress commands cannot resolve promise by themselves, we need to manually resolve them by using then{}