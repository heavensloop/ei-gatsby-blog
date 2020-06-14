import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://reactwebsite.cdn.prismic.io/api/v2'
const accessToken = 'MC5YaGJ4WlJVQUFDVUFFd0I3.77-9Bu-_vVsM77-977-977-977-977-9Ju-_vWnvv73vv73vv70577-977-9JFcDHO-_ve-_vTQhLu-_ve-_vXlT' // This is where you would add your access token for a Private repository

const Client = Prismic.client(apiEndpoint, { accessToken })

async function querySingleDoc(docName) {
    const { results } = await Client.query(Prismic.Predicates.at('document.type', docName))
    const data = results.length ? results[0].data : {}
    return data
}

export {querySingleDoc};