import Link from 'next/link';
import { GetStaticProps } from 'next';

function Home(props) {
    return (<div>
        <h1>Home</h1>
        <Link href="/sobre">
            <a>Acessar Sobre</a>
        </Link>
        <p>{props.login}</p>
    </div>);
}

export default Home
