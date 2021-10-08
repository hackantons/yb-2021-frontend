interface RenderResponse {
  renderId: string;
  bucketName: string;
}

interface ProgressResponse {
  overallProgress: number;
  outputFile: string | null;
}

export const fetchVideo = (body, setVideoProgress): Promise<string> =>
  new Promise(async (resolve, reject) => {
    const response = await fetch('/api/video/render', {
      method: 'POST',
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as RenderResponse;
    const intervalId = setInterval(async () => {
      const progress = await fetch('/api/video/progress', {
        method: 'POST',
        body: JSON.stringify(responseBody),
      });
      const progressJson = (await progress.json()) as ProgressResponse;
      setVideoProgress(Math.ceil(progressJson.overallProgress * 100));

      if (progressJson.overallProgress === 1) {
        window.clearInterval(intervalId);
        resolve(progressJson.outputFile);
      }
    }, 1000);
  });
