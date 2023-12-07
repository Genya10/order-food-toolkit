import React,{ useState } from "react";
import cl from "./CreateRecipe.module.css";
import {useCreateRecipeMutation} from "../api/recipeApi";
import { IRecipeData } from "../types/recipe-types";
import { FormEvent } from "react";

const defaultValue:IRecipeData = {
    name:'',
    image:''
}

export const CreateRecipe =()=>{

    const[newRecipe,setNewRecipe] = useState<IRecipeData>(defaultValue);
 
    const [createRecipe] = useCreateRecipeMutation()

    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        createRecipe(newRecipe).then(()=>{
        setNewRecipe(defaultValue);
        })
    }

    return (
      <div>
        <form onSubmit={handleSubmit} className={cl.form}>
            <p>Create new recipe</p>
          <label >
            <input
              onChange={(e) => setNewRecipe({...newRecipe,name:e.target.value})}
              type="text"
              placeholder="name recipe"
              value={newRecipe.name}
            />
          </label>
          <label >
            <input
              onChange={(e)=> setNewRecipe({...newRecipe,image:e.target.value || ""})}
              type="text"
              placeholder="img recipe"
              value={newRecipe.image}
            />
          </label>
          <button
             type="submit"
            >Add</button>
        </form>

      </div>
    );
}