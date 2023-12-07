import { useTypedSelector } from "./useTypedSelector";

export const useSelectorFav = ()=>{
    const {favorites} = useTypedSelector(state=>state)

    return {favorites}
}
