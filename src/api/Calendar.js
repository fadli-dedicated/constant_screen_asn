import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId:
    "336792294941-li10i557nokodsd9uhomg4n99vg8c2po.apps.googleusercontent.com",
  apiKey: "AIzaSyDnt0OXMJiC6XQWUY5xrMXOq5PL5p7JoQA",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);

export default apiCalendar;
