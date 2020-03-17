import Realm from 'realm';
import CategorySchema from './CategorySchema'
import QuizSchema from './QuizSchema'
import AlternativeSchema from './AlternativeSchema';

export default function getRealm(){
    return Realm.open({
        schema:[CategorySchema,QuizSchema,AlternativeSchema],
        schemaVersion:6
    })
}