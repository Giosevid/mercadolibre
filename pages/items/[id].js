import { withRouter } from 'next/router';
import Link from 'next/link'
import fetch from 'isomorphic-fetch';
import Layout from '../../components/Layout';

const Id = ({ news, newsOne }) => {
  return (
    <Layout title="Detail">
      <div className="wrapper-card-detail">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <img src={newsOne.pictures[0].url} alt="image"/>
              </div>
              <div className="col-lg-5 col-md-12">
                <h5 className="title">{newsOne.title}</h5>
                <h4>$ {Intl.NumberFormat().format(newsOne.price)}</h4>
                <Link href={newsOne.permalink}><a className="btn btn-primary button">Comprar</a></Link>
              </div>
            </div>
            <h4 className="card-title subtitle">Descripción del producto</h4>
            <p className="card-text">{news.plain_text}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

Id.getInitialProps = async ({ query }) => {
  let news;
  let newsOne;
    try {
      const res = await fetch(`https://api.mercadolibre.com/items/${query?.id}/description`);
      const resOne = await fetch(`https://api.mercadolibre.com/items/${query?.id}`);
      news = await res.json();
      newsOne = await resOne.json();
    } catch (error) {
      console.log('error', error)
    }
  return {
    news, newsOne
  }
}

export default withRouter(Id)
