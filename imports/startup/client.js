import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { renderRoutes } from '../ui/routes/routes'

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('root'));
});