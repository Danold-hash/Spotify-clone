import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbums = () => {
    const {id} = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext)
  return (
    <div>
        <Navbar/>
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img className='w-48 rounded' src={albumData.image} alt=''/>
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl '>{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className='mt-1 flex flex-wrap items-center gap-2'>
                    <img className='inline-block w-5' src={assets.spotify_logo}/>
                    <b>Spotify</b>
                    • 1.323.154 likes
                    • <b>50 songs,</b>
                    about 2hr 30 min
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-4'>#</b> Title</p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img className='m-auto w-4' src={assets.clock_icon}/>
        </div>
        <hr/>
        {songsData.map((song, index) => (
            <div onClick={()=>playWithId(song.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#fff] hover:text-neutral-800 cursor-pointer'>
                <p className='text-white'>
                    <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                    <img className='inline w-10 mr-5 rounded-sm' src={song.image} alt={song.name}/>
                </p>
                <p className='list-album-item-text'>{albumData.name}</p>
                <p className='list-album-item-text hidden sm:block'>5 days ago</p>
                <p className='list-album-item-text text-center'>{song.duration}</p>
            </div>
        ))}
    </div>
  )
}

export default DisplayAlbums