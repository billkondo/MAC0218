import React from 'react';
import { IconButton } from '@material-ui/core';
import { HomeOutlined } from '@material-ui/icons';

import { routes } from '../../config';

const mapNameToLabel = {
  '': (
    <div style={{ display: 'grid', alignItems: 'center' }}>
      <IconButton>
        <HomeOutlined />
      </IconButton>
    </div>
  ),
  create_problem: <div> Criar problema </div>,
  write_form: <div> Problema dissertativo </div>,
  multiple_choice_form: <div> Múltipla escolha </div>,
  problems: <div> Problemas </div>,
  profile: <div>Perfil</div>,
  'sign-in': <div> Entrar </div>,
  'sign-up': <div> Registrar </div>,
  groups: <div> Grupos </div>,
  create_group: <div> Criar Grupo </div>,
  mocks: <div> Simulados </div>,
  create_mock: <div> Criar simulado </div>,
  edit_profile: <div> Editar perfil </div>
};

const mapNameToRoute = {
  '': routes.home,
  create_problem: routes.problems.create_select_type,
  write_form: routes.write_form,
  multiple_choice_form: routes.multiple_choice_form,
  problems: routes.problems.main,
  profile: routes.user_profile,
  'sign-in': routes.sign_in,
  'sign-up': routes.sign_up,
  groups: routes.groups.main,
  create_group: routes.groups.create,
  mocks: routes.mocks.main,
  create_mock: routes.mocks.create,
  edit_profile: routes.profile.edit
};

const getLabels = pathname => {
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
