import React from 'react'
import cl from './Header.module.css';
import { FaHeartPulse } from "react-icons/fa6";
import { useSelectorFav } from '../hooks/useSelectorFav';

export const Header=()=>{

    const {favorites} = useSelectorFav();
    return (
      <div className={cl.header}>
        <h2>Favorites</h2>
        <FaHeartPulse fontSize={28} />
        <span>{favorites.length}</span>
      </div>
    );
}