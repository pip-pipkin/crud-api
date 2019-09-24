import * as filmsService from './films.service'
import * as filmsData from './films.data'

//Mocking the findAllFilms function so I don't have to use the real DB service
filmsData.findAllFilms = jest.fn()

// ALTERNATIVE: Mocking the entire DB module
// jest.mock('./films.data')

test('the database service should be called', () => {
    filmsService.getFilms()
    expect(filmsData.findAllFilms).toHaveBeenCalledWith()
    expect(filmsData.findAllFilms).toHaveBeenCalledTimes(1)
})