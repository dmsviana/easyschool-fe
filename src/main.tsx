import { DevSupport } from '@react-buddy/ide-toolbox'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { ComponentPreviews, useInitial } from '@/dev'

import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <App />
    </DevSupport>
  </React.StrictMode>,
)
