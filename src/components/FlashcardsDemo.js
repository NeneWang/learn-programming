import React, { Component } from 'react'

import { FlashcardComponent } from 'react-flashcard'

const cardData = [
    {
        front: {
            text: "living outside, often in a tent",
            image: "https://o.quizlet.com/RWRdgDus.uuqNDUrJ0ernA.jpg",
        },
        back: {
            text: "Camping",
        }
    }
]

export default function FlashcardsDemo({ }) {
    return (
    <>
        < FlashcardComponent dataSource={cardData} />
    </>
    )
}