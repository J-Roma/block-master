import React from 'react'
import styled from 'styled-components'


const Profile = styled.div`
    
`

const Img = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto;
`
const Account = () => {
    return (
        <Profile className="px-5">
            <Img className="rounded rounded-circle " src="https://www.seekpng.com/png/small/3-39236_anime-boy-png-transparent-picture-anime-boy-png.png" alt="afx" />
            <div class="mb-3 row bg-white rounded mt-3 border border-warning border-3">
                <label for="name" class="col-sm-2 col-form-label border border-warning">Nombre</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext " id="name" value="Londres" />
                </div>
            </div>
            <div class="mb-3 row bg-white rounded mt-3 border border-warning border-3">
                <label for="name" class="col-sm-2 col-form-label border border-warning">Fecha de Nacimiento</label>
                <div class="col-sm-10">
                    <input type="date" readonly class="form-control-plaintext" id="name"/>
                </div>
            </div>
            <div class="mb-3 row bg-white rounded mt-3 border border-warning border-3">
                <label for="name" class="col-sm-2 col-form-label border border-warning">Nombre</label>
                <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext " id="name" value="Londres" />
                </div>
            </div>
        </Profile>
    )
}

export default Account
