// pages/_app.js
import Head from 'next/head';
import '../src/app/globals.css'; // Подключите здесь ваши глобальные стили

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="../src/app/favicon.ico" />
                {/* Другие мета-теги */}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
