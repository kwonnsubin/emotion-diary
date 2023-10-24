import { useContext, useEffect, useState } from "react";
import MyHeader from './../components/MyHeader';
import MyButton from './../components/MyButton';
import DiaryList from "../components/DiaryList";
import { DiaryStateContext } from "../App";

const Home = () => {
    const diaryList = useContext(DiaryStateContext);

    const [data, setData] = useState([]); // data 가공
    const [curDate, setCurDate] = useState(new Date());
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `감정 일기장`; // 배열로 반환
    }, [])

    useEffect(() => {
        if (diaryList.length >= 1) {
            const firstDay = new Date( // 오늘 월의 첫번째 날짜
                curDate.getFullYear(),
                curDate.getMonth(),
                1 // 1일
            ).getTime();

            const lastDay = new Date( // 오늘 월의 마지막 날짜
                curDate.getFullYear(),
                curDate.getMonth() + 1,
                0, // 1일
                23,
                59,
                59
            ).getTime();

            setData(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay))
        }
    }, [diaryList, curDate]) // diaryList, curDate가 바뀌면 콜백 함수가 수행된다. 바뀐 월에 따른 일기 리스트를 불러옴.

    const increaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate()));
    }

    const decreaseMonth = () => {
        setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()));
    }

    return (
        <div>
            <MyHeader headText={headText} leftChild={<MyButton text={"<"} onClick={decreaseMonth} />} rightChild={<MyButton text={">"} onClick={increaseMonth} />} />
            <DiaryList diaryList={data} />
        </div>
    )
}

export default Home;