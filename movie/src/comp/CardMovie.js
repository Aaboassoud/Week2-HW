import React from 'react'

export default function CardMovie(props) {
  return (
    <div class="card">
      <img src={props.cards.img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.cards.title}
        </h5>
        <p class="card-text">{props.cards.story}
        </p>
        <div class="card-footer">
          <small class="text-muted">{props.cards.year}
          </small>
        </div>
      </div>
    </div>
  )
}