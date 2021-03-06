// 3rd parties
import Head from 'next/head';

// styles
import Simulator from '@/components/Simulator/';

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Calculadora de Investimentos</title>
        <meta name="descrição" content="simulador de investimentos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Simulador de Investimentos</h1>
      <Simulator />
    </div>
  );
}
