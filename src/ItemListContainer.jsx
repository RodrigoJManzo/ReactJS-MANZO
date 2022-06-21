

import ItemCounter from "./itemCount";
import Titulo from "./titulo";
import { ItemList } from "./itemList";
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