import React, { Fragment, useState } from 'react';
import styles from './Download.module.css';
import ProgressBar from "@ramonak/react-progress-bar";

type RenderResponse = {
  renderId: string
  bucketName: string
}

type ProgressResponse = {
  overallProgress: number
  outputFile: string | null
}

const Download = () => {
  const [downloading, setDownloading] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)
  const renderVideo = async () => {
    const inputProps = {
      firstName: 'Jonas',
      lastName: 'Niestroj',
      seasonGoal: 5
    }
    const body = {
      composition: 'Goal',
      inputProps
    }
    setDownloading(true)
    const response = await fetch('/api/video/render', { method: 'POST', body: JSON.stringify(body) })
    const responseBody = await response.json() as RenderResponse
    const intervalId = setInterval(async () => {
      const progress = await fetch('/api/video/progress', { method: 'POST', body: JSON.stringify(responseBody) })
      const progressJson = await progress.json() as ProgressResponse
      setDownloadProgress(Math.ceil(progressJson.overallProgress * 100))
      if (progressJson.overallProgress === 1) {
        window.clearInterval(intervalId)
        window.location.assign(progressJson.outputFile);
      }
    }, 1000)
  }

  return (
    <div className={styles.downloadWrapper}>
      <button onClick={renderVideo}>Download</button>
      { downloading && <ProgressBar completed={ downloadProgress }     bgColor="#289a1b"
    labelColor="#ffffff" /> }
    </div>
  );
};

export default Download;
