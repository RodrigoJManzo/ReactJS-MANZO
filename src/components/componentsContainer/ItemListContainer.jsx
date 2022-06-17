

import ItemCounter from "../itemCount/itemCount";
import Titulo from "../Titulo/titulo";
import { ItemList } from "../items/itemList";
import {useParams} from 'react-router-dom'


function ItemListContainer (){

    let title = 'SUPERTEC'
    let subTitle = 'Encuentra todo lo que buscas'


    



    return(
        <>
        <Titulo tituloApp={title} subTituloApp={subTitle}/>
        <ItemList/>
        </>
    )
}

export default ItemListContainer