Just a reference to help navigate this mess of components I made
things in parenthesis aren't components we need to build...

(Page) <- aka, App
  |
  |__ Header
  |
  |__ Sidebar
  |     |
  |     |__ UserModal (when area of Sidebar is clicked)
  |           |
  |           |__ AboutMe
  |           |
  |           |__ Messages
  |           |
  |           |__ Matches
  |
  |__ (grid)
  |     |
  |     |__ Card (repeated for each relevant entry)
  |           |
  |           |__ MatchModal (when "match" button on card is clicked)
  |
  |__ Footer