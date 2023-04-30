import React from 'react';
import BotCard from './BotCard';

function BotCollection({bots}) {
  const botItem = bots.map((bot) => {
    return(
      <BotCard
        key={bot.id}
        bot={bot}
      />
    )
  })
  return (
    <div className="ui four column grid">
      <div className="row">
        {botItem}
      </div>
    </div>
  )
}

export default BotCollection
