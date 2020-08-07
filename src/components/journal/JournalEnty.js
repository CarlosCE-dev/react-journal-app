import React from 'react'

export const JournalEnty = () => {
    return (
        <div className="journal__entry">
            <div className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.imgur.com/oSD0kKm.jpg)'
                }}></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal_entry-content">
                    Lorem aslasd kasda sdkasdka sdasd k kasdkasdk askldas
                </p> 
            </div>

            <div className="journal_entry-date-box">
                <span>Monday </span>
                <h4>28</h4>
            </div>
        </div>
        
    )
}
