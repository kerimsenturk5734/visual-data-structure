import React from 'react'

export default function ProfileCard({resultCount, totalStar, fiveStarCount}) {

    var avg = (resultCount === 0) ? 0 : totalStar/resultCount;
    return (
        <div className='profile'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" alt="" width={100}
                style={{marginBottom:"2rem"}} />
            <div className='name'><b>{localStorage.getItem("name")} {localStorage.getItem("surname")}</b></div>
            <div style={{marginBottom:"3rem"}}><i>{localStorage.getItem("mail")}</i>
                <hr />
            </div>
            <div className='statistic'>
                <div>
                    <div>Ortalama
                        <hr />
                    </div>
                    <div>
                        <center><span className="fa fa-star fa-spin fa-xl"></span>{avg}</center>
                    </div>
                </div>
                <div>
                    <div>Bitirilen Kurs
                        <hr />
                    </div>
                    <div>
                        <center><i className="fa-brands fa-stack-overflow"></i>{resultCount}/5</center>
                    </div>
                </div>
                <div>
                    <div>5 Yıldızlı
                        <hr />
                    </div>
                    <div>
                        <center>{fiveStarCount}</center>
                    </div>
                </div>
            </div>

        </div>
    )
}