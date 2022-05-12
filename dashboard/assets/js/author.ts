class Author{
    private foto:string;
    private nombre:string;
    private correo:string;
    private puesto:string;
    private puesto2:string;
    private status:string;
    private employed:string;

    constructor(foto:string, nombre:string, correo:string, puesto:string, puesto2:string, status:string, employed:string){
        this.foto=foto;
        this.nombre=nombre;
        this.correo=correo;
        this.puesto=puesto;
        this.puesto2=puesto2;
        this.status=status;
        this.employed=employed;
    }

    getFoto(){
        return this.foto;
    }
    getNombre(){
        return this.nombre;
    }
    getCorreo(){
        return this.correo;
    }
    getPuesto(){
        return this.puesto;
    }
    getPuesto2(){
        return this.puesto2;
    }
    getStatus(){
        return this.status;
    }
    getEmployed(){
        return this.employed;
    }

}