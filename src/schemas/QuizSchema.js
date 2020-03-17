export default class QuizSchema{
    static schema = {
        name:'Quiz',
        properties:{
            alternativas:'Alternative[]',
            indicio:'string',
            puntuacion:'int',
            pregunta:'string',
            completed:{type:'bool',default:false}
        }
    }
}