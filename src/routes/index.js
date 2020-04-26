import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Start } from 'pages';

export default function routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Start} />
    </BrowserRouter>
  );
}
