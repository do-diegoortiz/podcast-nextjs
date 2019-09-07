import css from './channel.scss'

// In the query params we have one called id, we're goint to catch it with the initialProps parameter
class Channel extends React.Component {
    static async getInitialProps({ query }) {
        // If I use as parameter (data) instead of ({ query }) I would have to say in the next line:
        // let query = data.query

        const idChannel = query.id;

        const reqChannel = await fetch(`https://api.audioboom.com/channels/${idChannel}`)
        const { body: { channel } } = await reqChannel.json();

        const reqAudio = await fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
        const { body: { audio_clips } } = await reqAudio.json();

        const reqSeries = await fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
        const response = await reqSeries.json();
        const series = response.body.channels;

        return { channel, audio_clips, series };
    }

    render() {
        const { channel, audio_clips, series } = this.props;

        const channelClips = audio_clips.map(clip => (
            <div className={css.clip} key={clip.id}>
                <h2>{clip.title}</h2>
                <img className={css.channelImg} src={clip.urls.wave_img} />
                <p className={css.channelDescription}>{clip.description}</p>
            </div>
        ))

        const childChannels = series.map(serie => (
            <div className={css.clip} key={serie.id}>
                <h2>{serie.title}</h2>
                <p className={css.channelDescription}>{serie.description}</p>
            </div>
        ))

        return <>
            <header className={css.title}>Podcasts</header>
            <div className={css.channel}>
                <h1 className={css.channelTitle}>{channel.title}</h1>
                <img className={css.channelImg} src={channel.urls.logo_image.original} />
                <p className={css.channelDescription}>{channel.description}</p>
            </div>

            <h1 className={css.clipTitle}>Últimos Podcasts</h1>
            <div className={css.clips}>
                {channelClips}
            </div>

            <h1 className={css.clipTitle}>Series</h1>
            <div className={css.clips}>
                {childChannels}
            </div>

        </>
    }
}

export default Channel