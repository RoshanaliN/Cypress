Notes:
Cypress only supports CSS selectors
for id - #id -> tagname#id
for className - .className -> tagname.classname
for attribute - tagname[attribute='value']
for traversing - parent child

Cypress is Asynchronus in nature and there is no guarntee of secquence of execution, but cypress take care of this, by adding all steps in queue and executing them
Promise in cypress comes in three different stages: rejections(step failed), resolved(step executed) and pending. Promises are wrapped and hidden form us.
Non cypress commands cannot resolve promise by themselves, we need to manually resolve them by using then{}
Cypress auto accepts alerts
Cypress has capability to listening to browser events like window:alert
We can travers to next sibing elements using next() but it only works on cy.get()
No direct support ofmouse hover in cypress, we use jquery method show to show the hidden values. jquery commands are used using invoke()
we can directly click on hidden elements using click({force:true})
for IFRAME you need to install cypress-iframe package using npm install -D cypress-iframe command
use `` to evaluate variables at runtime in cypress
example: const productName = Nokia
if($el.find("h4 a").text().includes(`${productName}`)){}
fixtures folder contains data that we can use in our scenarios in json files which are loaded at start of cypress
Cypress default timeout is 4 sec, it can be changes globally by adding changes to cypress.config.js file or just for one test cases by using following command Cypress.config('defaultCommandTimeout',7000)