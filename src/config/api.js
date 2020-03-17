import settings from './settings'
import {fetchWithTimeout} from '../helpers'

const getApiCategories = async () => {
    const response = await fetchWithTimeout(settings.API_URL + 'categorias.json')
    if (response.ok) return await response.json()
    throw new Error(response.status)
}

const getApiCategoryPreguntas = async (id) => {
    const response = await fetchWithTimeout(settings.API_URL + 'contenido/'+id+'.json')
    if (response.ok) return await response.json()
    throw new Error(response.status)
}

export {getApiCategories,getApiCategoryPreguntas}