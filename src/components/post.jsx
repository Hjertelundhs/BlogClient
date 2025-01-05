import React from 'react'

function Post() {
  return (
    <div className='post'>
      <div className='image'>
        <img
          src='https://wpcom.files.wordpress.com/2022/12/create-blog-window-camera.jpg'
          alt=''
        />
      </div>
      <div className='texts'>
        <h2>Kom och köp!</h2>
        <p className='info'>
          <a
            href='/'
            className='author'
          >
            Tobias H
          </a>
          <time>2024-12-17 12:20</time>
        </p>
        <p className='summary'>
          Oavsett vad du publicerar. Oavsett vilken din publik är. WordPress.com
          gör det enkelt att komma igång. Och enkelt att utöka din webbplats
          allteftersom din publik växer.
        </p>
      </div>
    </div>
  )
}

export default Post
