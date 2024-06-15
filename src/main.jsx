import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import { store } from './store'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </QueryClientProvider>
)
