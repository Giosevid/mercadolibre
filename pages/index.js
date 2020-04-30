import Router from 'next/router';
import Layout from "../components/Layout"

const Index = () => {
  const handleSubmit = text => {
    text !== '' && Router.push(`/items?search=${text}`)
  }
  return (
    <Layout title="Home Page" handleSubmit={handleSubmit} />
  )
}

export default Index