import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ExamplePage } from '~/pages';

export default function routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={ExamplePage} exact />
    </BrowserRouter>
  );
}
