import { useState, Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import "../styles/styles.scss";

const Layout = ({ title, children, handleSubmit }) => {
  const [dataInput, setDataInput] = useState('')
  return (
    <Fragment>
    <div className="header">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <Link href="/"><img src="/static/images/logo.png" alt="logo" height="30"/></Link>
          </div>
          <div className="col-sm-8">
            <div className="input-group mb-1">
              <input value={dataInput} onChange={event => setDataInput(event.target.value)} type="text" className="form-control" placeholder="Nunca dejes de buscar" aria-label="Nunca dejes de buscar" aria-describedby="button-addon4"/>
              <div className="input-group-append">
              <button onClick={() => handleSubmit(dataInput)} className="btn btn-light" type="button" id="button-addon2">
                <svg className="bi bi-search" width="1em"  height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    { children }
    </Fragment>
  )
}

export default Layout;