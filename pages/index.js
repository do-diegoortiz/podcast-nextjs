import 'isomorphic-fetch'
import Layout from '../components/layout'
import ChannelGrid from '../components/channelGrid'

class Index extends React.Component {

    static async getInitialProps() {
        const req = await fetch('https://api.audioboom.com/channels/recommended')
        const { body: channels } = await req.json();
        return { channels };
    }

    render() {
        const { channels } = this.props
        // short for: const channels = this.props.channels

        return <Layout title="Podcasts">
            <ChannelGrid channels={channels} />
        </Layout>
    }
}

export default Index