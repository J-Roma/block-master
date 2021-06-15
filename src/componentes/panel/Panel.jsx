import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadedMoviesList } from '../../actions/crud'

const Panel = () => {

    //Subir info Video a Firebase
    const [uploadedMovies, setUploadedMovies] = useState({
        idTMDB: '',
        name: '',
        src: '',
        img: '',
        description: '',
        date: '',
        overRate: '',
    })
    const [url, seturl] = useState('')
    const [files, setFiles] = useState("")
    const dispatch = useDispatch()
    const movieList = useSelector(state => state.movies.movies)
    // Upload Api Cloudinary
    const CLOUDINARY_API = 'https://api.cloudinary.com/v1_1/romajs/auto/upload'
    const CLOUDINARY_UPLOAD_PRESET = 'htam81et'

    const handleSetData = (e) => {
        const movie = e.target.value.split('|')
        //console.log(movie);
        const data = [];
        movie.forEach(el => {
            let temp = el.replace(' ', '')
            data.push(temp)
        })
        const temporal = movieList.find(movie => movie.id == data[0])
        //temporal = temporal.find(movie => movie.id === '423108')
        if (temporal){

            setUploadedMovies({
                ...uploadedMovies,
                idTMDB: temporal.id,
                name: temporal.title,
                img: `https://image.tmdb.org/t/p/w185${temporal.poster_path}`,
                description: temporal.overview,
                date: temporal.release_date,
                overRate: temporal.vote_average,
            })

        }
    }

    const handleSubmitUploadVideos = async () => {
        console.log(files);
        const formData = new FormData();
        formData.append('file', files);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        await axios({
            url: CLOUDINARY_API,
            method: 'POST',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin',
                'Access-Control-Allow-Credentials': true,
            },
            data: formData
        })
        .then(res => {
             console.log(res.data.secure_url)
            setUploadedMovies({
                ...uploadedMovies,
                src: `${res.data.secure_url}`
            })
            seturl(res.data.secure_url)
        }).catch(err => {
               console.log(err);
        })
    }

    const handleName = (e) => {
        console.log(e.target.value );
        setUploadedMovies({
            ...uploadedMovies,
            name: e.target.value
        })
    }
    const handleImg = (e) => {
        console.log(e.target.value);
        setUploadedMovies({
            ...uploadedMovies,
            img: e.target.value
        })
    }
    const handleDate= (e) => {
        console.log(e.target.value);
        setUploadedMovies({
            ...uploadedMovies,
            date: e.target.value
        })
    }
    const handleOverRate = (e) => {
        console.log(e.target.value);
        setUploadedMovies({
            ...uploadedMovies,
            overRate: e.target.value
        })
    }
    const handleDescription = (e) => {
        console.log(e.target.value);
        setUploadedMovies({
            ...uploadedMovies,
            description: e.target.value
        })
    }

    useEffect(() => {
        url && dispatch(uploadedMoviesList(uploadedMovies))
    }, [url])

    return (
        <div>
            <h3 className="text-center p-3 text-warning fs-1">Añadir Peliculas</h3>
            <label for="exampleDataList" className="form-label text-white fs-5">Que Pelicula quieres Añadir:</label>
            <input onChange={handleSetData} className="form-control form-control-sm" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
            <datalist id="datalistOptions">
                {
                    movieList.map(movie => <option value={`${movie.id} | ${movie.title}`} />)
                }
            </datalist>
            <div className="mb-3">
                <label for="formFileMultiple" class="form-label text-white fs-5 mt-3">Subir archivo...</label>
                <input onChange={(e) => setFiles(e.target.files[0])} class="form-control form-control-sm" type="file" id="formFileMultiple" multiple />
            </div>
            <div className="bg-white rounded table-responsive mb-3">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="col-3">Campo</th>
                            <th scope="col">Informacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">ID</th>
                            <td colSpan="1">{uploadedMovies.idTMDB}</td>
                        </tr>
                        <tr>
                            <th scope="row">Nombre</th>
                            <td colSpan="1">
                                <input onChange={handleName} class="form-control form-control-sm" type="text" defaultValue={uploadedMovies.name} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">imgUrl</th>
                            <td colSpan="1">
                                <input onChange={handleImg} class="form-control form-control-sm" type="text" defaultValue={uploadedMovies.img} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Fecha de Estreno</th>
                            <td colSpan="1">
                                <input onChange={handleDate} class="form-control form-control-sm" type="text" defaultValue={uploadedMovies.date}/>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Puntaje</th>
                            <td colSpan="1">
                                <input onChange={handleOverRate} class="form-control form-control-sm" type="text" defaultValue={uploadedMovies.overRate} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Descripcion</th>
                            <td colSpan="1">
                                <textarea onChange={handleDescription} type="text" class="form-control" id="description" rows="3" defaultValue={uploadedMovies.description}></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="text-center">
                <button onClick={handleSubmitUploadVideos} className="btn btn-warning " type="button">Subir Pelicula</button>
            </div>
        </div>
    )
}

export default Panel
