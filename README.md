# MCPKAYERSMODULE
use axios ,mcstatus api and return online players 

## Usage:
```typescript
// index.ts
import { checkServerStatus } from './minecraftStatusChecker';

async function main() {
  const host = 'your_minecraft_server_ip';
  const port = 25565; // Minecraft server port

  try {
    const onlinePlayers = await checkServerStatus(host, port);
    
    if (onlinePlayers !== null) {
      console.log(`Online players: ${onlinePlayers}`);
    } else {
      console.log('Server is offline or failed to retrieve status.');
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

main();
```
