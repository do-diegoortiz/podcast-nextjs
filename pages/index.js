import css from './index.scss'
import 'isomorphic-fetch'

class Index extends React.Component {

    static async getInitialProps() {
        const req = await fetch('https://api.audioboom.com/channels/recommended')
        const { body: channels } = await req.json();
        return { channels };
    }

    render() {
        const { channels } = this.props
        // short for: const channels = this.props.channels

        const channelsList = channels.map(channel => (
            <div className={css.channelContainer}>
                <img className={css.channelImg} src={channel.urls.logo_image.original} />
                <h2 className={css.channelTitle}> {channel.title} </h2>
            </div>
        ))

        return <>
            <header className={css.title}>Podcasts</header>
            <div className={css.channels}>
                {channelsList}
            </div>
        </>
    }
}

export default Index