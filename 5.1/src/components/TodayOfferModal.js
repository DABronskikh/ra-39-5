import React from 'react'

export default function TodayOfferModal() {
    return (
        <div className="card">
            <div className="modal-body">
                <h2 className="modal-title">Только сегодня и только сейчас!</h2>
                <a href="/today/">Узнать подробнее</a>
            </div>
            <button className="btn btn-primary">закрыть</button>
        </div>
    )
}
