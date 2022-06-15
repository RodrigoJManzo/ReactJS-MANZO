let productos = [
    {
        id:"1",
        nombre: "Tarjeta de Video",
        modelo: "RTX3060",
        precio: "US$800",
        picureURL:"https://images.nvidia.com/aem-dam/Solutions/geforce/ampere/rtx-3060-ti/geforce-rtx-3060-ti-product-gallery-full-screen-3840-2-bl.jpg"
    },
    {
        id:"2",
        nombre: "Monitor",
        modelo: "MSI Optix 27",
        precio: "US$500",
        picureURL:"https://asset.msi.com/resize/image/global/product/product_16073221819eda271d0012e9dafad761ec039b1fdd.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
    },
    {
        id:"3",
        nombre: "MotherBoard",
        modelo: "MSI Plus",
        precio: "US$400",
        picureURL:"https://asset.msi.com/resize/image/global/product/product_3_20190716132640_5d2d601054421.png62405b38c58fe0f07fcef2367d8a9ba1/600.png"
    },
    {
        id:"4",
        nombre: "Combo Teclado y Mouse Razer",
        modelo: "Rzer Viper y Razer Chroma",
        precio: "US$120",
        picureURL:"https://febo.com.uy/wp-content/uploads/2019/12/674715-MLU40076653944_122019-O-277x217.jpg"
    },
    {
        id:"5",
        nombre: "Procesador Ryzen",
        modelo: "Ryzen 9",
        precio: "US$700",
        picureURL: "https://www.amd.com/system/files/styles/600px/private/2019-11/238593-ryzen-9-pib-left-facing-1260x709_0.png?itok=EKzdDkTN"
    }
]


export const Item = () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}
