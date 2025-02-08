import queryString from 'query-string';


export const getAccessToken = async () => {
  // const clientID = process.env.REACT_APP_REDDIT_USER_ID;  
  // const clientSecret = process.env.REACT_APP_REDDIT_SECRET_ID;  

  const clientID = 'dV4UXTcxq6q1dPQOCTYdvA';  
  const clientSecret = '7AEf8gpQnLaf_rg46iJ3mUAijnc85A';

  // Ensure both clientID and clientSecret are available
  if (!clientID || !clientSecret) {
    throw new Error('Client ID or Secret is missing');
  }

  // Build the query string parameters
  const params = {
    grant_type: 'client_credentials',  // Needed for Reddit API OAuth2
  };

  // Create a base64 encoded string for Basic Authentication
  const authHeader = btoa(`${clientID}:${clientSecret}`);

  try {
    const response = await fetch(`https://www.reddit.com/api/v1/access_token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${authHeader}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: queryString.stringify(params), // Query string sent as the body
    });

    if (!response.ok) {
      throw new Error('Failed to fetch access token');
    }

    const data = await response.json();
    // console.log('Access Token Data:', data);
    return data.access_token;  // Return the access token from the response

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};