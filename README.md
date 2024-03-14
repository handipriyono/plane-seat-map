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
  <img width="386" alt="popup" src="https://github.com/handipriyono/plane-seat-map/assets/35618196/54f8a83c-6be8-46b8-9128-a3b219ac0511">
- A button for booking the seat appears if the original seat-box color is green.
- If a user clicks the "Book this Seat" button on that popup/modal, an API call (PUT) will be made to update the "occupied" value of that seat number to true. Consequently, the UI will refresh to display a red box (which was previously green).
- On the right sidebar, there is additional information about the user, consisting of seat data that has been **chosen and submitted by the user**. This information will ONLY be updated after the user clicks the "Book this Seat" popup and successfully submits the **PUT API request**. The submitted data will then be displayed on the right sidebar.
- If the user does not click the "Book this seat" button on the popup, the user's information ( right sidebar menu) remains the same as before. It will only be updated upon successfully clicking the "Book this seat" button.
  <img width="325" alt="Screenshot 2024-03-14 at 8 51 13 AM" src="https://github.com/handipriyono/plane-seat-map/assets/35618196/026b1a66-2702-4fd1-89a1-bf12b7c095f6">

- There will be additional info on that page, including explanation of symbol too.

###

domain: https://plane-seat-map.vercel.app/
