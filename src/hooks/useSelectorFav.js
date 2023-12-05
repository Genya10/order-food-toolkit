import { useSelector } from "react-redux";

export const useSelectorFav = ()=>{
    const {favorites} = useSelector(state=>state)

    return {favorites}
}
