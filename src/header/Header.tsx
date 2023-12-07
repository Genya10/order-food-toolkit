import React from 'react'
import cl from './Header.module.css';
import { FaHeartPulse } from "react-icons/fa6";
import { useSelectorFav } from '../hooks/useSelectorFav';

export const Header=()=>{

    const {favorites} = useSelectorFav();
    return (
      <div className={cl.header}>
        <FaHeartPulse fontSize={22} />
        <span>{favorites.length}</span>
      </div>
    );
}