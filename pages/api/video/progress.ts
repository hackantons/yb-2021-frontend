import { checkCookieLogin } from '@pwp/utils';
import { getRenderProgress } from '@remotion/lambda';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  overallProgress: number;
  outputFile: string | null;
};

type RequestData = {
  renderId: string;
  bucketName: string;
};

const functionName = 'remotion-render-fq3p205z2t';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!checkCookieLogin(req)) {
    res.status(401).end();
    return;
  }
  const body = JSON.parse(req.body) as RequestData;

  const progress = await getRenderProgress({
    renderId: body.renderId,
    bucketName: body.bucketName,
    functionName,
    region: 'eu-central-1',
  });
  res.status(200).json({
    overallProgress: progress.overallProgress,
    outputFile: progress.outputFile,
  });
}
