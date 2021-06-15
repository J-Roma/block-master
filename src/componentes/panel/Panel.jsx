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

    const handleIdName = (e) => {
        const movie = e.target.value.split('|')
        console.log(movie);
        const data = [];
        movie.forEach(el => {
            let temp = el.replace(' ', '')
            data.push(temp)
        })
        console.log(data);
        setUploadedMovies({
            ...uploadedMovies,
            idTMDB: data[0],
            name: data[1]
        })
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
    }
    const handleImg = (e) => {
        console.log(e.target.value);
    }
    const handleDate= (e) => {
        console.log(e.target.value);
    }
    const handleOverRate = (e) => {
        console.log(e.target.value);
    }
    const handleDescription = (e) => {
        console.log(e.target.value);
    }

    useEffect(() => {
        url && dispatch(uploadedMoviesList(uploadedMovies))
    }, [url])

    return (
        <div>
            <h3 className="text-center p-3 text-warning fs-1">Añadir Peliculas</h3>
            <label for="exampleDataList" className="form-label text-white fs-5">Que Pelicula quieres Añadir:</label>
            <input className="form-control form-control-sm" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
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
                            <td colspan="1"></td>
                        </tr>
                        <tr>
                            <th scope="row">Nombre</th>
                            <td colspan="1">
                                <input onClick={handleName} class="form-control form-control-sm" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">imgUrl</th>
                            <td colspan="1">
                                <input onClick={handleImg} class="form-control form-control-sm" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Fecha de Estreno</th>
                            <td colspan="1">
                                <input onClick={handleDate} class="form-control form-control-sm" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Puntaje</th>
                            <td colspan="1">
                                <input onClick={handleOverRate} class="form-control form-control-sm" type="text" />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Descripcion</th>
                            <td colspan="1">
                                <textarea onClick={handleDescription} class="form-control" id="description" rows="3"></textarea>
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
