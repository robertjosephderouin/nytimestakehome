import React from 'react'
import Card from './Card'

const Articles = ({articles}) => {
    const articleCards = articles.map(article => {
      return(
          <Card
            key={article.short_url}
            abstract={article.abstract}
            byline={article.byline}
            image={article.multimedia[0]}
          />
        )
      })
    return (<div className='article-container'>{articleCards}</div>)
  }
export default Articles
