import { QueryClient, QueryClientProvider } from 'react-query'
import AppLayout from './component/layout/AppLayout'
import MainContent from './component/module/MainContent'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <Switch>
            <AppLayout>
              <Route path="/:bookingNumber" component={MainContent} />
            </AppLayout>
          </Switch>
        </ToastProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Router>
  )
}
export default App
