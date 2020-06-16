import React, {Fragment} from 'react';
import ChartListItem from './ChartListItem.js'

const MusicChartList = ({tracks}) => {
  if(!tracks) return null

  const chartNodes = tracks.map((track, index) => {
    return <ChartListItem track={track} position={index} key={index}/>
  })

  return (
    <Fragment>
      {chartNodes}
    </Fragment>
  )
}

export default MusicChartList;
