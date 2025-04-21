# Approach and Explanation

## Question

Build an Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet. It's up to you to decide how the data structure should look like.

## Requirements

- By default, all sections are collapsed and are hidden from view.
- Clicking on a section title toggles the contents.
  - If the section is collapsed, the section will be expanded and the contents will be displayed.
  - If the section is expanded, the section will be collapsed and the contents will be hidden.
- The sections are independent of each other.

## Approach

1. This component at a base level should take in an array of objects each object should have an identifier, title, and content.
2. Our initial state should be empty because we only care about opened/seen tabs. The component should be re-usable so all we need to think about is how to display the contents.
3. Since this is an accordion we need to handle multiple opened sections but only care if the user has opened it. One data structure that handles this is a set. Sets can have one unique item and no more at a high level this is a boolean for multiple items.
4. Our set can be initialized by using `new Set()` and making that our initial state.
5. We can `map()` over the data and create a helper variable called `isExpanded` that checks if our state has this value.
6. To be semantic our title should be a button and the content should be hidden as a `p` tag unless `isExpanded` is true.
7. How do we handle the toggle? add an `onClick` to the button this callback function should take the id of the clicked title.
8. The function should create a copy of state and we can check if the set has the identifier that means it's opened and we need to close it/remove it from state. Otherwise add it to state and update the entire state.

## Improvements

This is just a base level component that can be improved a lot. One major improvement that will be handled in the hard section will be allowing for keyboard operations and better a11y.
