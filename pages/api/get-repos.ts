import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const GITHUB_API_URL = 'https://api.github.com';
  const username = '0x4E43';
  const repoEndpoint = `${GITHUB_API_URL}/users/${username}/repos`;

  try {
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
