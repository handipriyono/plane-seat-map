# Plane Seat Mapping

### Requirement & Setup Local

- use node version: V20
- Create a .env file sourced from .env.local to obtain the example.

### How to Run

`yarn install && yarn dev`

## Flow Explanation / test case

- Users visit the site and see the plane seat mapping UI.

Explanation of Box (for seats):

- A red box indicates occupied.
- A green box indicates available.
- A yellow box indicates clicked/selected by the user.

**Click Flow: expectation**

- A green box, when clicked, becomes a yellow box.
- A red box, when clicked, remains a red box.
- Users can see a modal/popup after clicking the numbered seat box. Information about price, seat number, and class is displayed.
- A button for booking the seat appears if the original seat-box color is green.
- If a user clicks the "Book this Seat" button on that popup/modal, an API call (PUT) will be made to update the "occupied" value of that seat number to true. Consequently, the UI will refresh to display a red box (which was previously green).
