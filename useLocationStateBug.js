In React Router Dom v6, attempting to access the `useLocation` hook's `state` property within a component that's not directly rendered by a route, or that is rendered after a redirect can lead to unexpected behavior.  The `state` property might be undefined or null, even if it was correctly set during navigation.