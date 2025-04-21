# Approach and Explanation

## Question

Build an Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet. Some HTML is provided for you as example contents along with a chevron icon.

## Requirements

- By default, all sections are collapsed and are hidden from view.
- Clicking on a section title toggles the contents.
  - If the section is collapsed, the section will be expanded and the contents will be displayed.
  - If the section is expanded, the section will be collapsed and the contents will be hidden.
- The sections are independent of each other.

## Approach

1. This component at a base level should take in an array of objects each object should have a identifier, title, content.
2. Our initial state should be empty because we only care about opened/seen tabs.
3. Since this is an accordion we need to handle multiple opened sections but only care if the user has opened it so one data structure that handles this is a set.
4. Our set can be initialized by using new `Set()`.
5. Create an onClick function called `handleToggle` this will take the identifier we need to check if the set has the id then delete it otherwise add it. Then update the state.
6. We can `map()` over the data and create a helper variable called `isExpanded` that checks if our state has this value.
7. Rendering should be handled by the check of `isExpanded`.
