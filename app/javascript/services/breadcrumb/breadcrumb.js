import React from 'react';
import { IconButton } from '@material-ui/core';
import { Home } from '@material-ui/icons';

import { routes } from '../../config';

const mapNameToLabel = {
  '': (
    <div style={{ display: 'grid', alignItems: 'center' }}>
      <IconButton>
        <Home />
      </IconButton>
    </div>
  ),
  create_problem: <div> Criar problema </div>,
  write_form: <div> Problema dissertativo </div>,
  multiple_choice_form: <div> Múltipla escolha </div>,
  problems: <div> Problemas </div>,
  profile: <div>Perfil</div>,
  'sign-in': <div> Entrar </div>,
  'sign-up': <div> Registrar </div>
};

const mapNameToRoute = {
  '': routes.home,
  create_problem: routes.create_problem,
  write_form: routes.write_form,
  multiple_choice_form: routes.multiple_choice_form,
  problems: routes.problems,
  profile: routes.user_profile,
  'sign-in': routes.sign_in,
  'sign-up': routes.sign_up
};

const getLabels = pathname => {
  console.log(pathname);

  if (pathname.substr(-1) === '/') pathname = pathname.slice(0, -1);

  const labels = pathname.split('/');
  return labels.map(l => ({
    name: mapNameToLabel[l],
    route: mapNameToRoute[l]
  }));
};

export const breadcrumb = {
  getLabels
};
