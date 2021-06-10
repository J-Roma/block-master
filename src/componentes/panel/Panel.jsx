import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Panel = () => {

    const movieList = useSelector(state => state.movies.movies)
    const [isLoading, setIsLoading] = useState(true);
    const observer = useRef(new IntersectionObserver((entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
            // loader.current();
            console.log('Hey!');
        }
        

    }, { threshold: 1 }));
    const [element, setElement] = useState(null)
    // const loader = useRef(loadMoreMovies)
    // useEffect(() => {
    //     loader.current = loadMoreMovies;
    // }, [loadMoreMovies]);

    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {

            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        }
    }, [element])

    return (
        <div>
            <h3 className="text-center p-3">Añadir Peliculas</h3>
            <label for="exampleDataList" className="form-label">Que Pelicula quieres Añadir:</label>
            <input className="form-control form-control-sm" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
            <datalist id="datalistOptions">
                {
                    movieList.map( movie => <option value={`${movie.id} | ${movie.title}`} />)
                }
                <option ref={setElement} value="Loading..." />
                {/* <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" /> */}
            </datalist>
            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                <input class="form-control form-control-sm" type="file" id="formFileMultiple" multiple />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Descripcion:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="text-center">
                <button className="btn btn-warning">Subir Pelicula</button>
            </div>
        </div>
    )
}

export default Panel
