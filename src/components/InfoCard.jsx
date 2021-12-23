import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            <strong>Try saying:</strong> <br />
            Add {isIncome ? 'Income ' : 'Expense '}
            for ₹{isIncome ? '1000 ' : '500 '}
            in category {isIncome ? 'Investment ' : 'Clothes '}
            for next {isIncome ? 'Sunday' : 'Wednesday'}.
        </div>
    )
}

export default InfoCard
