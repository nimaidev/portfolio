import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const username = req.query.username as string;
  console.log(username)
  const response = await fetch(`https://dev.to/api/articles?username=${username}`);
  const data = await response.json();
  res.status(200).json(data);
}