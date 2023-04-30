import React, {useEffect, useState} from 'react';
import BotCollection from './BotCollection';

function BotsPage() {
    const[bots, setBots] = useState([]);

    //use the useEffect Hooks to run fetch whenever page loads
    useEffect(() => {
        fetch("http://localhost:3000/bots")
            .then(r => r.json())
            .then((data) => {
                setBots(data)
            });
    })

    //function to enlist a bot
    function enlistBot(bot) {
        setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
   }

   function deleteBot(bot) {
        const deletedBot = bots.filter((b) => b.id !== bot.id);
       setBots((bots) => deletedBot);
   }
  return (
    <div>
      <BotCollection bots={bots} enlistBot={enlistBot} deleteBot={deleteBot}/>
    </div>
  )
}

export default BotsPage
