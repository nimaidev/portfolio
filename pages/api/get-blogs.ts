import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'isomorphic-unfetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch("https://dev.to/api/articles?username=nimaidev");
  const data = await response.json();
  res.status(200).json(data);
}