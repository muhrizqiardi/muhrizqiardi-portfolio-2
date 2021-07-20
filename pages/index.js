import Head from 'next/head';

function IndexRedirect(props) {
  return (
    <>
      <Head>
        <title>Redirecting...</title>
        <meta httpEquiv="refresh" content="2;url=https://muhrizqiardi.github.io/en" />
        <link rel="canonical" href="https://muhrizqiardi.github.io/en" />
      </Head>
    </>
  );
}
export default IndexRedirect;
