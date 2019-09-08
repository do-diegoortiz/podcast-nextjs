import Layout from "../components/layout";
import Link from "next/link"
import css from "./_error.scss"

export default class extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render() {
        const { statusCode } = this.props
        return <Layout title="Oh no :(" >
            {
                statusCode === 404 ?
                    <div className={css.message}>
                        <h1>Esta página no existe</h1>
                        <p>
                            <Link>
                                <a href="/">Volver al inicio</a>
                            </Link>
                        </p>
                    </div>
                    :
                    <div className="message">
                        <h1>Hubo un problema</h1>
                        <p>Intenta nuevamente más tarde</p>
                    </div>
            }
        </Layout >
    }
}