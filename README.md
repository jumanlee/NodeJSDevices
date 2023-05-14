# MySmartHome
## Demo on Youtube
You can watch the demo of this app at https://www.youtube.com/watch?v=x8iqbe_MoKY

## Introduction
This a new dynamic web application which allows users to monitor and control devices in their smart home. The app is just a prototype so it doesn’t need interface with actual hardware. Its front end is kept to the minimum to only showcase the backend business logic and functionalities.

- Users can add a range of smart home devices to their dashboard. For example:
-  cooling and heating systems,
-  curtains and blinds,
-  lighting, security,
-  audio- visual systems such as TV, radio, music players,
-  kitchen appliances such as fridge-freezer, hob, oven, microwave
-  Users can organise their devices by giving them custom names
-  Users can monitor the status for each device (Eg. heating - room temperature, on/off,
lighting on or off, curtains open/closed)
-  Users can control each of these devices (Eg. turn lighting on or off, increase or
decrease heating temperature etc)

# Requirements
## Base features:

### Home & About pages:
-  Name and branding for the web application
-  Provide brief information about the web application including your name as the
developer.
-  A menu with links to all other relevant pages in the application

### Add Device page:
-  Form to add a new device to the database with the following fields: ○ Name of device
-  Type of device - to be selected from a predefined list ■ Include at least 10 types
-  Other input fields such as on/off, open/close, temperature, volume, etc.
-  Submit button
-  Implement client-side form validation.
-  Make sure all form data required from the user is filled and valid.
-  If required fields are empty or data is not valid, re-display the form to the user
with appropriate message to fill it again.
-  For example, entering a string or a value of 400 is not valid for the
temperature of a ‘heating’ device.

### Add Device server-side functionality:
-  Add a POST action to the form which collects the form data and passes it to the server
-  Add a corresponding POST endpoint which stores the device name, type and its corresponding initial status data (eg. on/off, open/close, temperature, volume, etc) in the database.

### Device Status page:
-  A device selector input which allows the user to select a device from a list of created devices
-  A status viewer which, for the selected device, will display the status data found in the database (eg. on/off, temperature, etc).
Device Status page server-side functionality:
-  A GET action which collects the form data and passes it to the server
-  A GET endpoint which uses the device name to find and retrieve the relevant device
information from the database and serve it to the client
Control device page:
-  A device selector input which allows the user to select a device from a list of created devices
-  A form with inputs to control the chosen device’s settings (eg. on/off, temperature, etc).
-  A submit button to change the settings
Control device server-side functionality:
-  A POST action which collects the form data and passes it to the server
-  A POST endpoint which uses the device name to update the device with the new
settings

### Delete device page
-  A device selector input which allows the user to select a device from a list of created devices
-  A delete button

### Delete device - server-side functionality
-  A POST action which collects the form data and passes it to the server
-  A POST endpoint which uses the device name to delete the device and related data
from the database

### Navigation:
-  The site should be fully navigable.
-  The home page should have a menu leading to all other pages
- Each other page should display at the very least a home button