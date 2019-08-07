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