export class Producto
{
    constructor(
        public CodProd: string,
        public Descrip: string,
        public CodInst: number,
        public Precio: number,
        public Impuesto: number,
        public DescAmpliada: string,
        public ListaProductos: string,
        public ImgPrincipal: string,
        public ImgAdicionales: string
    ){}
}