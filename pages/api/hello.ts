import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { isReturnStatement } from "typescript";

export default function test(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ name: 'John Doe' })
  }
