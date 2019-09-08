import 'isomorphic-fetch'
import Layout from '../components/layout'
import ChannelGrid from '../components/channelGrid'
import Error from 'next/error'

class Index extends React.Component {

    static async getInitialProps({ res }) {
        try {
            const req = await fetch('https://api.audioboom.com/channels/recommended')
            const { body: channels } = await req.json();
            return { channels, status: 200 };
        } catch (e) {
            res.statusCode = 503
            return { channels: null, status: 503 }
        }
    }

    render() {
        const { channels, status } = this.props
        // short for: const channels = this.props.channels

        if (status !== 200) {
            return <Error statusCode={status}></Error>
        }

        return <Layout title="Podcasts">
            <ChannelGrid channels={channels} />
        </Layout>
    }
}

export default Index