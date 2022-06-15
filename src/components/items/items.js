let productos = [
    {
        id:"1",
        nombre: "Tarjeta de Video",
        modelo: "RTX3060",
        precio: "US$800",
        picureURL:"https://images.app.goo.gl/ECueg48BuxFPtq9n9"
    },
    {
        id:"2",
        nombre: "Monitor",
        modelo: "MSI Optix 27",
        precio: "US$500",
        picureURL:"https://images.app.goo.gl/8gRJ1ywAmybdb3SL7"
    },
    {
        id:"3",
        nombre: "MotherBoard",
        modelo: "MSI Plus",
        precio: "US$400",
        picureURL:"https://images.app.goo.gl/t2mfA6VokrnQmiBx5"
    },
    {
        id:"4",
        nombre: "Combo Teclado y Mouse Razer",
        modelo: "Rzer Viper y Razer Chroma",
        precio: "US$120",
        picureURL:"https://images.app.goo.gl/bTy7LWJk9mENSNn79"
    },
    {
        id:"5",
        nombre: "Procesador Ryzen",
        modelo: "Ryzen 9",
        precio: "US$700",
        picureURL: "https://images.app.goo.gl/XU1qAsDzG69Nw2hj7"
    }
]


export const Item = () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}
