import React from 'react'

function Banner() {
    return (
        <div className='h-[30vh] md:h-[80vh] bg-center bg-cover bg-no-repeat flex items-end' style={{ backgroundImage: 'url(https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe)' , width: '100%' }}>
            <div className='w-full text-2xl text-white text-center p-4 bg-gray-900/60'>
                One Piece
            </div>
        </div>
    )
}

export default Banner
