
# Findings
This file contains some bugs or improvements after my exploratory tests.

## List below


### Bugs

1 - The computer gives the creation message, but the filter does not find the added model.
[video](<filter doesnt find computer .mov>)
- Expected: It should return the model created.

2- When deleting a model from the list, after the deletion confirmation message, we still finding the item in the search list
[video](<delete but we can find the computer.mov>)
- Expected: It shouldn't be visible anymore.

3 - When scrolling through the list of companies on the computer model add screen, the list leaks off the screen, and the layout crashes.
[video](<list overlap.mov>)
- Expected: It should be improved. I guess it's regarding responsiveness stuff.

4 - When I update a register, their changes doesn't update effectively.

5 - Fields Introduced and Discontinued are accepting string, but when I save it shows a generical error. It should be treated or block the field to be able receive only numbers.

### Improvements

1 - When deleting or adding a computer model, the success message modal cannot close and remains on the screen until the next reload.

![Alt text](image.png)

2 - The field could be the year of manufacture, and the discontinue field could have an applicable checkbox so that it is not counted, in some situations, the model is still selling.

![Alt text](image-1.png)

3 - Place a filter by Company and filter from the list when one is applied, the other is automatically deactivated, making it impossible for the user to use more than one filter from the list in the search.

![Alt text](image-2.png)

4 - Create a filter fields, such as filter by date or company itself.

5 - Create a button to clear filters. Nowadays when I filter by something, I'm not able to clear it and go to the home screen. It's a must click on "Computer database" h1 link.