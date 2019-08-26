# SiFive React challenge

### How to run the project

- `$ npm install`
- `$ npm start`

### Provided

- [Original Sketch file](provided/FE-Developer-Task.sketch)
- [Sketch file exported as JPG](provided/graphic.jpg)
- [data](provided/fe-developer.json)

### Original task description
Please create React/WebComponents application by attached design. Application needs to be responsive (desktop + mobile). Please try to spend not more than 2 hours on the whole task and be true to yourself trying to achieve as much as you can to fulfil the functionality, styling and beauty of the code (in exactly this order of importance).

Data for application needs to be loaded from following file:
https://sifivelearn-production.s3-us-west-1.amazonaws.com/samples/fe-developer.json
Data consists of modules and nested lessons.

Please make sure to implement following functionalities, in listed order of priorities:
- [x] Load data and store in Redux store.
- [x] User reducer(s) to populate the data into components (including original order property, ascending).
- Display data on the screen as presented in design.
- Enable sorting of lessons by drag and drop by the icon on the right hand side. Drag and drop has to work between the modules.
- Enable collapse/expand of a module by using icon on the right hand side. When expanded module “box” get’s highlighted to light green.
- Implement reload content functionality that reloads data from original JSON file (original order).
- Implement responsiveness (use common sense for scaling, sizing on mobile etc).
- Make sure that design is reflected 100% on desktop and centered in browser. If you have problems with fonts, please just use Helvetica or Arial.
