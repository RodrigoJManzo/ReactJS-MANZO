

import ItemCounter from "../itemCount/itemCount";
import Titulo from "../Titulo/titulo";
import { ItemList } from "../items/itemList";


function ItemListContainer (){

    let title = 'SUPERTEC'
    let subTitle = 'Encuentra todo lo que buscas'
    

    return(
        <>
        <Titulo tituloApp={title} subTituloApp={subTitle}/>
        <ItemCounter stock='5' initial = '1' />
        <ItemList/>
        </>


    )
}

export default ItemListContainer