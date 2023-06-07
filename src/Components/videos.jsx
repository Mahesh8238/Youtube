import '../styles/videos.css'
import { useState } from "react";
const Videos = () => {
    let [video, setVideo] = useState([
        {
            thumnail: "https://i.ytimg.com/vi/Hq7a4qvYQqI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLABeUWvhNcUr9oExN7FAp3BgLC8mA",
            title: "ENGLISH SPEECH | AAMIR KHAN: For a Better India (English Subtitles)",
            channel: " English",
            views: "40M views",
            id: 1
        },
        {
            thumnail: "	https://i.ytimg.com/vi/pO-b3u3DCCs/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCFSmwQh3ztAn63Rm_2qoctMk1o5Q",
            title: "Mix - Kheech Meri Photo Full Video Song | Sanam Teri Kasam",
            channel: " Tseries",
            views: "200M views",
            id: 2
        },
        {
            thumnail: "https://i.ytimg.com/vi/OWCao3Ul6n4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLC8FBCojjjRxTM7gnDLLBFXdYcUTA",
            title: "Data Structure and Algorithms in JAVA",
            channel: " Corsera",
            views: "76M views",
            id: 3
        },
        {
            thumnail: "	https://i.ytimg.com/vi/87sIUadVrfo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBfnMa1gdt2JPL24NtqZN4y2pQhpg",
            title: "Odisha train tragedy: Vande Bharat Express crosses from Balasore where deadly accident",
            channel: "News 18",
            views: "5M views",
            id: 4
        },
        {
            thumnail: "https://i.ytimg.com/vi/mSaAhUcher4/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCUqkOWXgvBlVEwcWVutnT0MuAE_w",
            title: "Mathu Nannavalu-Video Song | Darshan | Navya Nair | Gaja |Sonu Nigam |Shreya Ghoshal | V.Harikrishna by ARC Musicq Kannada",
            channel: "ARC Musicq Kannada",
            views: "5.8M views",
            id: 5
        },
        {
            thumnail: "	https://i.ytimg.com/vi/DWlolZnR9Ws/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBOKtUZHrtNOdQFR1m7mXwW7tVYxg",
            title: "ನಾನು ಓದಿದ ಪುಸ್ತಕ ಪಟ್ಟಿ | UPSC 2022 | ಸಾಧಕಿ ದಾಮಿನಿ ದಾಸ್ ಸಂದರ್ಶನ",
            channel: "Media mild",
            views: "38M views",
            id: 6
        },
        {
            thumnail: "	https://i.ytimg.com/vi/zDYdpmXMEgM/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCBGEGYFIyfM3Jp4Vz-JqaYOnDKvA",
            title: "Mandara Mandara - HD Video Song - Anthu Inthu Preethi Banthu - Adithya Babu",
            channel: "Sandalwood songs",
            views: "5.4M views",
            id: 7
        },
        {
            thumnail: "	https://i.ytimg.com/vi/hih6Zmzt7XA/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDHf-IoNF96Gu4NHMsPcim8nowabg",
            title: "Sanam Re - Instrumental by International Violinist by Soundspiritevents",
            channel: "Sound sprot",
            views: "6M views",
            id: 8
        },
        {
            thumnail: "	https://i.ytimg.com/vi/cJLJrLlZ8no/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBlfQtKjy3AXNyWkNVWrhYi_ek3Rg",
            title: "AWS Course | AWS Training- Learn AWS In 11 Hours | AWS Tutorial | Intellipaat by Intellipaat",
            channel: "intallpatt",
            views: "78M views",
            id: 9
        },
        {
            thumnail: "	https://i.ytimg.com/vi/-feg6NViRic/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLD2bCyZTuheMz6470_AlYOxONnrNg",
            title: "Avanalli Ivalilli | Hrudayada Paadu | Vasuki Vaibhav |Prabhu Mundkur |Duniya Rashmi",
            channel: " kannada songs",
            views: "50M views",
            id: 10
        },
        {
            thumnail: "https://i.ytimg.com/vi/7OGSeZP0sc8/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLD8xlWcfIcBaW0jilX_B8-vQrausg",
            title: "Ishq De Fanniyar | Fukrey Returns | Pulkit Samrat & Priya Anand | Jyotica Tangri",
            channel: "Hindi songs",
            views: "98 views",
            id: 11
        },
        {
            thumnail: "	https://i.ytimg.com/vi/ECL0CvhZulw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBQ2JG5Qr57DoallwvS1LCTdtTJ6A",
            title: "Jhossh |  Thanthane Thananthane  | Kannada Video Song | Rakesh Adiga | Nithya Menen | Kannada by Anand Audio Kannada (ಕನ್ನಡ)",
            channel: " kannada ",
            views: "89M views",
            id: 12
        },
    ])
    let [shorts, setVideos] = useState([
        {
            thumnail: "	https://i.ytimg.com/vi/WWc87NuRW34/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLAWwXiuT-RFYacfQT0zzuvAy6jhUw",
            title: "success of patidar| success of rajat patidar",
            channel: " Kannada",
            views: "40M views"
        },
        {
            thumnail: "	https://i.ytimg.com/vi/KV3icYknlfA/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLCqZeIx58qI54tHj0PpCS8s2GdQDA",
            title: "Too young to join civil services !! | UPSC interview",
            channel: "Hindi",
            views: "40M views"
        },
        {
            thumnail: "	https://i.ytimg.com/vi/bGz2HtNdl1A/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLA7XmBGCbSVA0LhNEd1rN-0w47N-A",
            title: "Vaathi Dhanush",
            channel: "Tamil songs",
            views: "40M views"
        },
        {
            thumnail: "https://i.ytimg.com/vi/PrwHu4Rv66U/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLA_nXhoaJx4KQhGgQbub9LE1jp_hQ",
            title: "Full Song: KHAIRIYAT (BONUS TRACK) | CHHICHHORE | Sushant, Shraddha | Pritam, Amitabh B|Arijit Singh",
            channel: " Tamil Talvays",
            views: "120M views"
        },
        {
            thumnail: "	https://i.ytimg.com/vi/T4fAwnxXO-E/hq720.jpg?sqp=-…AHAAQbQAQE=&rs=AOn4CLCkE2qPoMpqWBWpka3bDPw5NRIiow",
            title: "Mr. Ratan Tata 's respect ll Pm modi to Elon musk 🙏🙏❤ #tata #inspiration",
            channel: " hindi ",
            views: "100M views"
        },
        {
            thumnail: "	https://i.ytimg.com/vi/2PtXMw0ZX_E/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLBIfS9LT5NV5wNy1wtPgA9Hd56I_g",
            title: "Epression queen",
            channel: " Telgu UMusic",
            views: "200M views"
        }
    ])
    let removeVideo = (id, name) => {
        let result = video.filter((x) => x.id !== id)
        setVideo(result)
        alert(`${name} video got removed`)
    }
    return (
        <div className="videos">
            <h1>Featured Videos</h1>
            <div className="main">
                {
                    video.map((data) => {
                        return (
                            <div className="video">
                                <img src={data.thumnail} alt="" />
                                <div className="videoDetails">
                                    <h3>{data.title}</h3>
                                    <p>{data.channel}</p>
                                    <p>{data.views}</p>
                                    <p>{data.id}</p>
                                    <a onClick={() => removeVideo(data.id, data.channel)}>Remove</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="shorts">
                <h1>Shorts</h1>
                <div className="main1">

                {
                    shorts.map((data) => {
                        return (
                            <div className="video1">
                                <img src={data.thumnail} alt="" />
                                <div className="videoDetails1">
                                    <h3>{data.title}</h3>
                                    <p>{data.channel}</p>
                                    <p>{data.views}</p>

                                </div>
                            </div>
                        )
                    })
            
            }
            </div>
            </div>
        </div>
    );
}

export default Videos;


