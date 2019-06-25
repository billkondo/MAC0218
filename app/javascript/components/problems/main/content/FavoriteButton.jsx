import React from 'react';
import { IconButton, colors } from '@material-ui/core';
import { FavoriteBorder, Favorite } from '@material-ui/icons';

import { Services } from '../../../../services';

export const FavoriteButton = ({ problem, toggleFavorite }) => {
  const getTextColor = type =>
    type === 'write' ? colors.indigo[800] : colors.red[800];

  const handleClick = () => {
    Services.Api.Write.update_favorite(problem.id, !isFavorite)
      .then(res => {
        toggleFavorite(!isFavorite);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const isFavorite = !!problem.favorite;

  return (
    <div>
      <IconButton
        style={{ color: getTextColor(problem.type) }}
        onClick={handleClick}
      >
        {!isFavorite && <FavoriteBorder />}
        {isFavorite && <Favorite />}
      </IconButton>
    </div>
  );
};
