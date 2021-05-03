import { HttpDownloadProgressEvent } from "@angular/common/http";

export class Pedido
{
    id?: number;
    Fecha: Date;
    Email: string;
    CodClie: string;
    Valor: number;
    Impuesto: number;
    Observaciones: string;
    Pais: number;
    Estado: number;
    Ciudad: number;
    Direccion: string;
    Telefono: string;
    EstadoPedido: number;
}

export class Detalle
{
    Pedido?: number;
    CodProd: string;
    Descripcion: string;
    Cantidad: number;
    Valor: number;
    Impuesto: number;
    Imagen?: string;
}