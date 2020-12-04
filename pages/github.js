function gitHub(props) {
    return (<div>
        <h1>GitHub</h1>
        <p>{props.login}</p>
    </div>)
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/users/victorbetini');
    const data = await res.json();
    // const staticDate = new Date();
    // const staticDateString = staticDate.toUTCString();

    return {
        props: {
            login: data.login
        },
        revalidate: 10
    }
}

export default gitHub