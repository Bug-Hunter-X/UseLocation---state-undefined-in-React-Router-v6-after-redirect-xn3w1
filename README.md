# React Router v6 useLocation().state Undefined Bug

This repository demonstrates a common issue encountered when using the `useLocation().state` property in React Router v6.  The problem arises when trying to access the navigation state from a component that isn't directly rendered by a route or when a redirect has occurred.  The solution showcases how to reliably access and maintain the navigation state even after redirects or in components outside the main route structure.

## Problem
The `useLocation().state` property can unexpectedly be undefined when used in these scenarios: 

1. **Component not directly rendered by a route:** If a component is rendered conditionally or deeply nested within another component that's not a route component, then `useLocation().state` may not be available.
2. **After a redirect:** After a redirect, the state from the previous location may be lost. 

## Solution
The solution uses the `useEffect` hook and a state variable to persist the location state across redirects and component renders.