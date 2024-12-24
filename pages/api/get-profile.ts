import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  try {
    const GITHUB_API_URL = process.env.GITHUB_API_URL;
    const username = process.env.GITHUB_PROFILE;
    const repoEndpoint = `${GITHUB_API_URL}/user`;
    const accessToken = process.env.APP_TOKEN;
    const headers = {
      Authorization: `token ${accessToken}`,
    };

    const response = await fetch(repoEndpoint, { headers });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    res.status(500).json({ error: 'Failed to fetch repositories' });
  }
}
