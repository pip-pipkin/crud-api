import db from '../db'

export const findAllFilms = async () => {
  return await db.query(`SELECT * FROM public.film
  ORDER BY film_id ASC LIMIT 100`)
}