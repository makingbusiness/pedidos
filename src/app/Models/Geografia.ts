export class Pais {

    constructor(
        public IDPais: string,
        public Descrip: string
    )  {}
}

export class Estado {

    constructor(
        public IDPais: string,
        public IDEstado: string,
        public Descrip: string
    ) {}
}

export class Ciudad {

    constructor(
        public IDPais: string,
        public IDEstado: string,
        public IDCiudad: string,
        public Descrip: string
    ) {}
}