import css from './layout.scss'
import Link from 'next/link'
import Head from 'next/head'

export default class Layout extends React.Component {
    render() {
        const { children, title } = this.props;
        return <>
            <Head>
                <title>{title}</title>
            </Head>
            <header className={css.header}>
                <Link>
                    <a href="/" className={css.title}>
                        Podcasts
                    </a>
                </Link>
            </header>

            {children}
        </>
    }
}