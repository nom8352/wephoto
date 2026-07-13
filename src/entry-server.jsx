import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { getRouteMeta, indexableRoutes } from './seo/siteRoutes';

export function render(url) {
  const html = renderToString(
    <StrictMode>
      <MemoryRouter initialEntries={[url]}>
        <App />
      </MemoryRouter>
    </StrictMode>,
  );

  return {
    html,
    meta: getRouteMeta(url),
  };
}

export { indexableRoutes };
