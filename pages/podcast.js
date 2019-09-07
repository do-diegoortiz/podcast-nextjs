import css from './podcast.scss'
import Link from 'next/link'

class Podcast extends React.Component {
    static async getInitialProps({ query }) {
        const idPodcast = query.id;
        const req = await fetch(`https://api.audioboom.com/audio_clips/${idPodcast}.mp3`)
        const { body: { audio_clip } } = await req.json();

        return { audio_clip };
    }

    render() {
        const { audio_clip } = this.props;

        return <>
            <div className={css.podcast}>
                <Link>
                    <a className={css.back} href="/index">
                        ← volver
                    </a>
                </Link>
                <h1 className={css.podcastTitle}>{audio_clip.title}</h1>
                <h1 className={css.channelTitle}>
                    {audio_clip.channel.title}
                    <img className={css.waveImg} src={audio_clip.urls.wave_img} />
                </h1>
                <img className={css.channelImg} src={audio_clip.channel.urls.logo_image.original} />

            </div>
            <div className={css.controls}>
                <audio controls src={audio_clip.urls.high_mp3}>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
                <p className={css.description}>{audio_clip.description}</p>
            </div>
        </>
    }
}

export default Podcast