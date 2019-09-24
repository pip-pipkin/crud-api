import { getFilms } from './films.service'

export const getFilmsController =  async (req, res) => {
  const films = await getFilms({bookId: 1, author: 2})
  return res.status(200).send(films)
}

export default getFilmsController;