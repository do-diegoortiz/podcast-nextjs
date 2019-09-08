import css from './channelGrid.scss'
import Link from 'next/link'

const ChannelGrid = (props) => {
    const channels = props.channels

    const channelsList = channels.map(channel => (
        <Link href={`/channel?id=${channel.id}`} key={channel.id}>
            <a className={css.channelContainer}>
                <img className={css.channelImg} src={channel.urls.logo_image.original} />
                <h2 className={css.channelTitle}> {channel.title} </h2>
            </a>
        </Link>
    ))

    return <div className={css.channels}>
        {channelsList}
    </div>
}

export default ChannelGrid