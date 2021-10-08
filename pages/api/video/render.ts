import type { NextApiRequest, NextApiResponse } from 'next'
import { renderVideoOnLambda } from '@remotion/lambda';

type Data = {
  renderId: string
  bucketName: string
}

const functionName = "remotion-render-fq3p205z2t"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const { renderId, bucketName } = await renderVideoOnLambda({
    region: 'eu-central-1',
    functionName,
    serveUrl: "https://remotionlambda-p3q5ff594r.s3.eu-central-1.amazonaws.com/sites/hackantons",
    composition: 'HelloWorld',
    inputProps: {},
    codec: 'h264-mkv',
    imageFormat: 'jpeg',
    maxRetries: 3,
    privacy: 'public'
  })
  res.status(200).json({ renderId, bucketName })
}
