import Image from 'next/image'

const featuredImage = ({ data }) => {
    const { node } = data 
    const { sourceUrl, mediaDetails, altText } = node
    const { width, height } = mediaDetails

    return <Image 
        src={sourceUrl}
        width={width}
        height={height}
        alt={altText}
    />
}

export default featuredImage