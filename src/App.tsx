import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import Layout from './components/Layout/Layout'
import CardTest from './components/UICards/CardTest'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/card-test' element={<CardTest />} />
            {/* <Route path='/*' element={<PageNotFound />} />
            <Route path='/testing' element={<Testing />} /> */}
          </Routes>
        </Layout>
      </ChakraProvider>
    </QueryClientProvider>
     
  ) 
}

export default App
