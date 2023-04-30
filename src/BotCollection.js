import React from 'react'

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
    <div>
      {botItem}
    </div>
  )
}

export default BotCollection
