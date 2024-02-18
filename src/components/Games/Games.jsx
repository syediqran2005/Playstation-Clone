import React from 'react';
import { Button, Flex, ConfigProvider } from 'antd';
import hogwartsGame from '../../assets/Images/games/hogwartsGame.webp';
import spiderman2Game from '../../assets/Images/games/spiderman2Game.webp';
import tekken8Game from '../../assets/Images/games/tekken8Game.webp';
import footballGame from '../../assets/Images/games/footballGame.webp';
import suicidesquadGame from '../../assets/Images/games/suicidesquadGame.webp';
import helldiversGame from '../../assets/Images/games/helldiversGame.webp';
import godofwarGame from '../../assets/Images/games/godofwarGame.webp';
import thelastofusGame from '../../assets/Images/games/thelastofusGame.webp';
import dragonGame from '../../assets/Images/games/dragonGame.avif';
import finalfantasyGame from '../../assets/Images/games/finalfantasyGame.webp';
import callofdutyGame from '../../assets/Images/games/callofdutyGame.webp';
import fortniteGame from '../../assets/Images/games/fortniteGame.webp';

import './Games.css'


function Games() {

  const games = [
    {
      image : hogwartsGame,
      title : 'Hogwarts Legacy',
      imgclass : 'hogwartsGame',
      titleclass : 'hogwartstitle'
    },
    {
      image : spiderman2Game,
      title : `Marvel's Spider-Man 2`,
      imgclass : 'spiderman2Game',
      titleclass : 'spiderman2title'
    },
    {
      image : tekken8Game,
      title : 'Tekken 8',
      imgclass : 'tekken8Game',
      titleclass : 'tekken8title'
    },
    {
      image : footballGame,
      title : 'EA SPORTS™ FC 24',
      imgclass : 'footballGame',
      titleclass : 'footballtitle'
    },
    {
      image : suicidesquadGame,
      title : 'Suicide Squad: Kill the Genocide',
      imgclass : 'suicidesquadGame',
      titleclass : 'suicidesquadtitle'
    },
    {
      image : helldiversGame,
      title : 'Helldivers™ 2',
      imgclass : 'helldiversGame',
      titleclass : 'helldiverstitle'
    },
    {
      image : godofwarGame,
      title : 'God of War Ragnarök',
      imgclass : 'godofwarGame',
      titleclass : 'godofwartitle'
    },
    {
      image : thelastofusGame,
      title : 'The Last of Us™ Part I',
      imgclass : 'thelastofusGame',
      titleclass : 'thelastofustitle'
    },
    {
      image : dragonGame,
      title : 'Like a Dragon: Infinite Wealth ',
      imgclass : 'dragonGame',
      titleclass : 'dragontitle'
    },
    {
      image : finalfantasyGame,
      title : 'Final Fantasy XVI',
      imgclass : 'finalfantasyGame',
      titleclass : 'finalfantasytitle'
    },
    {
      image : callofdutyGame,
      title : 'Call of Duty: Modern Warfare III',
      imgclass : 'callofdutyGame',
      titleclass : 'callofdutytitle'
    },
    {
      image : fortniteGame,
      title : 'LEGO Fortnite',
      imgclass : 'fortniteGame',
      titleclass : 'fortnitetitle'
    }
  ]

  return (
    <>
    <div className='games'>
    <h1 className='title'>Great PS4 & PS5 games out now or coming soon</h1>

    <ConfigProvider theme={{
      components : {
        Button : {
          defaultBg : '#252829',
          defaultColor: 'white',
          defaultBorderColor: 'none',
          defaultHoverBg: 'none',
          defaultActiveBg : 'white',
          defaultActiveColor: '#252829',
        }
      }
    }}>

    <Flex wrap='wrap'>
      <Button 
      shape='round'
      size='large'
      className='newreleasesBtn' 
      style={{
        fontWeight: 'bold'
      }}
      onClick={()=> console.log("new Releases")} >New Releases
      </Button>

      <Button 
      shape='round' 
      size='large' 
      className="comingsoonBtn"
      style={{
        fontWeight: 'bold'
      }}
      onClick={()=> console.log("coming soon")}>Coming Soon
      </Button>
    </Flex>
    </ConfigProvider>

      {
        games.map((element, index) => (
      <div key={index} className="gameContainer">
        <img className={element.imgclass === index && element.imgclass } src={element.image} alt={`image ${index}`} />
        <h3 className={element.titleclass}>{element.title}</h3>
      </div>

        ))
        
      }

    </div>
    </>
  )
}

export default Games