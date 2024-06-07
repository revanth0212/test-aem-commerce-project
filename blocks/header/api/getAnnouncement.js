import { getConfigValue } from '../../../scripts/configs.js';

const getAnnouncement = async () => {
  const query = `
  {
    storeConfig {
      announcement
    }
  }
`;

  try {
    const response = await fetch(await getConfigValue('commerce-core-endpoint'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();

    let annoucement = '';

    try {
      annoucement = data.data.storeConfig.announcement;
    } catch (error) {
      // Do nothing
    }

    return annoucement;
  } catch (error) {
    return null;
  }
};

export default getAnnouncement;
