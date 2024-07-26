import axios from 'axios';

const API_BASE_URL = 'http://52.35.66.255:8000/calendar_app/api';

export const getCalendarDetails = async (fromDate, toDate) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/calendar`, {
      params: { from_date: fromDate, to_date: toDate },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching calendar details:', error);
    throw error;
  }
};

export const getMeetingDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/calendar_meeting`, {
      params: { id },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching meeting details:', error);
    throw error;
  }
};
