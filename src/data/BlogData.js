import Image from "next/image";
import blog1 from '../images/blog1.webp'
import blog2 from '../images/blog2.webp'
import blog3 from '../images/blog3.webp'

const BlogData = [
    {
        img: <Image src={blog1}/>,
        calendar: <input type="date"/>,
        header: 'Bitcoin and Economic Freedom',
        link: 'Read more'
    },
    {
        img: <Image src={blog2}/>,
        calendar: <input type="date"/>,
        header: 'Permalink to New World Wide Payment',
        link: 'Read more'
    },
    {
        img: <Image src={blog3}/>,
        calendar: <input type="date"/>,
        header: 'Exchange Rate ofBitcoin system',
        link: 'Read more'
    },
    {
        img: <Image src={blog1}/>,
        calendar: <input type="date"/>,
        header: 'Bitcoin and Economic Freedom',
        link: 'Read more'
    },
    {
        img: <Image src={blog2}/>,
        calendar: <input type="date"/>,
        header: 'Bitcoin and Economic Freedom',
        link: 'Read more'
    },
]

export default BlogData