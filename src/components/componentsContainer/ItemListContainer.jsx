

import ItemCounter from "../itemCount/itemCount";
import Titulo from "../Titulo/titulo";



function ItemListContainer (){

    let title = 'SUPERTEC'
    let subTitle = 'Encuentra todo lo que buscas'
    

    return(
        <>
        <Titulo tituloApp={title} subTituloApp={subTitle}/>
        <ItemCounter stock='5' initial = '1' />
        </>


    )
}

export default ItemListContainer