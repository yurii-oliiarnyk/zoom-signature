# Zoom Meeting SDK Sample Signature Node.js

This is a Node.js / Express server that generates a [Web or Native Meeting SDK signature](https://marketplace.zoom.us/docs/sdk/native-sdks/web/signature) via an http request from your frontend for use in the Web or Native Meeting SDKs.

## Installation

In terminal, run the following command to clone the repo:

`$ git clone https://github.com/yurii-oliiarnyk/zoom-signature.git`

## Setup

1. In terminal, cd into the cloned repo:

   `$ cd zoom-signature`

1. Then install the dependencies:

   `$ yarn`

1. Create an environment file to store your SDK Key and Secret:

   `$ touch .env`

1. Add the following code to the `.env` file, and insert your Zoom SDK App's Key and Secret found on the App Credentials page in the Zoom App Marketplace:

   ```
   ZOOM_SDK_KEY=SDK_KEY_HERE
   ZOOM_SDK_SECRET=SDK_SECRET_HERE
   ```

1. Save and close `.env`.

1. Start the server:

   `$ yarn start`

## Usage

Make a POST request to `http://localhost:4000` (or your deployed url) with the following request body:

| Key                   | Value Description |
| -----------------------|-------------|
| meetingNumber          | Required, the Zoom Meeting or Webinar Number. |
| role                   | Required, `0` to specify participant, `1` to specify host.  |

### Example Request

POST `http://localhost:4000`

Request Body:

```json
{
  "meetingNumber": "123456789",
  "role": 0
}
```

If successful, the response body will be a JSON representation of your signature:

```json
{
  "signature": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJhYmMxMjMiLCJtbiI6IjEyMzQ1Njc4OSIsInJvbGUiOjAsImlhdCI6MTY0NjkzNzU1MywiZXhwIjoxNjQ2OTQ0NzUzLCJhcHBLZXkiOiJhYmMxMjMiLCJ0b2tlbkV4cCI6MTY0Njk0NDc1M30.UcWxbWY-y22wFarBBc9i3lGQuZAsuUpl8GRR8wUah2M"
}
```

In the [Web or Native Meeting SDK](https://marketplace.zoom.us/docs/sdk/native-sdks/web), pass in the `signature` to the `join()` function:

```js
// 1. Make http request to your server to get the signature

// 2. Pass in the signature to the join function

// Web Meeting SDK Client View example
ZoomMtg.join({
  signature: signature,
  sdkKey: sdkKey,
  userName: userName,
  meetingNumber: meetingNumber,
  passWord: password
})

// Web Meeting SDK Component View example
client.join({
  signature: signature,
  sdkKey: sdkKey,
  userName: userName,
  meetingNumber: meetingNumber,
  password: password
})
```
