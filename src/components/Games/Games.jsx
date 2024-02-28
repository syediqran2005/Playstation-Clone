import React, { useState } from 'react';
import { Button, Flex, ConfigProvider } from 'antd';
import { games, upcomingGames } from '../Games/Games.js'

import './Games.css'


function Games() {
  const [isHovoured, setIsHovoured] = useState(null)
  const [isNavigateTab, setIsNavigateTab] = useState(false)

  const handleMouseEnter = (index) => {
    setIsHovoured(index)
  }

  const handleMouseLeave = () => {
    setIsHovoured(null)
  }

  return (
    <>
      <div className='games'>
        <h1 className='title'>Great PS4 & PS5 games out now or coming soon</h1>

        <ConfigProvider theme={{
          components: {
            Button: {
              defaultBg: '#252829',
              defaultColor: 'white',
              defaultBorderColor: 'none',
              defaultHoverBg: 'none',
              defaultActiveBg: 'white',
              defaultActiveColor: '#252829',
            }
          }
        }}>

          <Flex wrap='wrap'>
            <Button
              shape='round'
              size='large'
              className={`newreleasesBtn ${isNavigateTab === false && 'active'}`}
              style={{
                fontWeight: 'bold'
              }}
              onClick={() => setIsNavigateTab(false)}>New Releases
            </Button>

            <Button
              shape='round'
              size='large'
              className={`comingsoonBtn ${isNavigateTab === true && 'active'}`}
              style={{
                fontWeight: 'bold'
              }}
              onClick={() => setIsNavigateTab(true)}>Coming Soon
            </Button>
          </Flex>
        </ConfigProvider>

        {
          isNavigateTab === false &&
          games.map((element, index) => (
            <div
              key={index}
              className={`gameContainer ${isHovoured !== null && index !== isHovoured ? 'selected' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img className={element.imgclass} src={element.image} alt={`image ${index}`} />
              <h3 className={element.titleclass}>{element.title}</h3>
            </div>

          ))
        }

        {
          isNavigateTab === true &&
          upcomingGames.map((element, index) => (
            <div
              key={index}
              className={`gameContainer ${isHovoured !== null && index !== isHovoured ? 'selected' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={element.image} className={element.imgclass} alt={`image ${index}`} />
              <h3 className={element.titleclass}>{element.title}</h3>
            </div>

          ))
        }

      </div>
    </>
  )
}

export default Games