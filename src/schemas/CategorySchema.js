export default class Category {
    static schema  = {
        name:'Category',
        primaryKey:'id',
        properties:{
            id:'int',
            nombre:'string',
            autor:'string',
            preguntas:'Quiz[]',
            created_at:'date',
            updated_at:'date',
        }
    }
    getNombre(){
        return this.nombre;
    }
    getPuntaje(){
        return this.puntaje
    }
}