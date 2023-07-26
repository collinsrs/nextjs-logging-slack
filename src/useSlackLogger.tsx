import React, {useEffect} from 'react';
interface SlackLogger {
    slug: string,
}

export default function useSlackLogger({slug}: SlackLogger) {
    useEffect(() => {
        fetch (`api/metrics/slack?ref=${slug}`, {
            method: 'POST',
          })

    }, [])

}