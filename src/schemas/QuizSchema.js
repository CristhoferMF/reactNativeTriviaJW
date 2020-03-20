export default class QuizSchema{
    static schema = {
        name:'Quiz',
        primaryKey:'id',
        properties:{
            id:'int',
            alternativas:'Alternative[]',
            indicio:'string',
            puntuacion:'int',
            pregunta:'string',
            completed:{type:'bool',default:false}
        }
    }
}