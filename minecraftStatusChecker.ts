
import axios from 'axios';

export async function checkServerStatus(ip: string, port: number): Promise<number | null> {
  const url = `https://api.mcsrvstat.us/2/${ip}:${port}`;

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const serverInfo = response.data;
      
      if (serverInfo.online) {
        return serverInfo.players.online;
      } else {
        console.log('Server is offline.');
        return null;
      }
    } else {
      throw new Error(`Failed to retrieve server status. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Failed to retrieve server status: ${error.message}`);
  }
}
