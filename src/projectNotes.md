Resources used in project:
- React
- Sass



- Destructuring
Instead of passing section.id, section.title, we destructure id and title
  this.state.sections.map(section => (
    <MenuItem key = {section.id} title = {section.title}></ MenuItem>
  ));

  VS (destructured)

  this.state.serctions.map()


  - Adding React Router:
  /*
<Route> takes several arguements... for now, focus is on exact, path and component.
Component: Is the component we want the route to render
Path: the web-address; '/' would be your base, your homepage. 
Exact: is a true or false condition based on the path. It will always start as it's a truth statement.  
    - '/' would return the homepage as well .com/about, etc
      - but if you did false, only .com/ would show and nothing following it would render. 

Switch will return the very first route it matches no matter how many it matches. 
*/