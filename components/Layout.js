import React from 'react';
import Head from 'next/head';

function Layout({ title, description, children }) {
  return (
    <>
        <Head>
            <meta charset="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />

            <meta property="og:title" content={title ? `${title} - Mobilies Pay` : 'Mobilies Pay'} />
            <meta content="" name="description" />
            <meta content="" name="keywords" />
            {description && <meta property="og:description" content={description} />}

            <title>{title ? `${title} - Mobilies Pay` : 'Mobilies Pay'}</title>
        </Head>

        {children}
    </>
    
  )
}

export default Layout