import { withRouter } from 'next/router';
import Router from 'next/router';
import fetch from 'isomorphic-fetch';
import Layout from '../../components/Layout';
import "../../styles/styles.scss";

const Items = ({ news }) => {
  const arrayItems = news?.results.slice(0,4);

  const handleSubmit = value => {
    value !== '' && Router.push(`/items?search=${value}`)
  }

  const navigateToId = id => {
    Router.push(`/items/${id}`)
  }

  const renderCard = (item, idx) => (
    <div key={idx} className="wrapper-card" onClick={() => navigateToId(item.id)}>
      <div key={idx} className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-3">
              <div className="mage-card">
                <img className="image-card" src={item.thumbnail} />
              </div>
            </div>
            <div className="col-lg-7 title">
              <p className="price">$ {Intl.NumberFormat().format(item.price)}</p>
              <p>{item.title}</p>
            </div>
            <div className="location">
              <p>{item?.location?.city?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return(
    <Layout title='Items Page' handleSubmit={handleSubmit}>
      {arrayItems.map((item, idx) => renderCard(item, idx))}
    </Layout>
  )
}

Items.getInitialProps = async ({ query }) => {
  let news;
  try {
    const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=:${query?.search}`);
    news = await res.json();
  } catch (error) {
    console.log(error)
  }
  return {
    news
  }
}

export default withRouter(Items)