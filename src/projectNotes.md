Resources used in project:
- React
- Sass

___________________________________________________________________________________________________________


- Destructuring
Instead of passing section.id, section.title, we destructure id and title
  { this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
    <MenuItem title = {title} imageUrl = {imageUrl}  key = {id} size = {size} linkUrl = {linkUrl} />

  VS (destructured)

  this.state.serctions.map()
OTHER: Destructuring: by using ({title}), we're simply taking title from props; same as 'props.title'

___________________________________________________________________________________________________________


___________________________________________________________________________________________________________
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

___________________________________________________________________________________________________________
2 ways for passing in the linkUrl:

adding linkUrl from withRouter()
{ this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
    <MenuItem title = {title} imageUrl = {imageUrl}  key = {id} size = {size} linkUrl = {linkUrl} />
))}
ORRRRR
{this.state.sections.map(({ title, ...restOfSectionProps }) => (
          <MenuItem title = {title} {...restOfSectionProps} />

___________________________________________________________________________________________________________

COLLECTION ITEM (card)
- The menu item component will consist of an image, title, price and a button to add it to the cart.
- 