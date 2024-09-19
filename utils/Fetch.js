import axios from "@/utils/axios";

// Function to fetch upcoming events
export const fetchUpcomingEvents = async () => {
  const response = await axios.get("/events/upcoming-events");
  return response.data.doc;
};


// Function to fetch past events
export const fetchPastEvents = async () => {
  const response = await axios.get("/events/past-events");
  return response.data.doc;
};


// Function to fetch Individual event
export const fetchIndividualEvent = (eventId) => {
  return async () => {
    const response = await axios.get(`/events/${eventId}`);
    return response.data.doc;
  };
};
