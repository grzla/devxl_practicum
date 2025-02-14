# react coding challenges

## 1. counter application
create a simple counter component that includes:
- display for current count
- increment button (+1)
- decrement button (-1) 
- reset button to set count back to 0
- count should not go below 0

## 2. todo list
create a basic todo list component with:
- input field to add new todos
- add button to submit new todos
- list display of all todos
- checkbox to mark todos as complete
- completed todos should have strikethrough style
- delete button for each todo
- empty state when no todos exist

## 3. form validation
create a signup form component with:
- name field (required, min 2 chars)
- email field (required, valid email format)
- password field (required, min 8 chars)
- submit button
- display validation errors under each field
- disable submit button if form invalid
- success message on valid submission

## 4. api data fetching
create a user list component that:
- fetches users from https://jsonplaceholder.typicode.com/users
- shows loading state while fetching
- displays error if fetch fails
- renders user list with name, email, and company name
- implements error boundary
- bonus: add retry button for failed fetches

## 5. search filter
create a searchable product list that:
- displays list of products (min 10 items)
- each product has name, category, price
- search input filters products by name
- filter updates as user types
- show "no results found" when filter returns empty
- bonus: add category dropdown filter

## tips
- use functional components and hooks
- handle all edge cases
- add comments explaining complex logic
- keep code clean and well-organized
- test your solutions thoroughly 