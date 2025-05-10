import { OAuth2Client } from 'google-auth-library';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the credentials file
const credentials = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'Google Auth.json'), 'utf-8')
);

// Create OAuth2 client
const oauth2Client = new OAuth2Client(
  credentials.web.client_id,
  credentials.web.client_secret,
  credentials.web.redirect_uris[0]
);

export default oauth2Client; 