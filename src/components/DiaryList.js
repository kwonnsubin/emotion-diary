import { useState } from "react";

const sortOptionList = [
    { value: "latest", name: "최신순" },
    { value: "oldest", name: "오래된순" },
]

const filterOptionList = [
    { value: "all", name: "전부다" },
    { value: "good", name: "좋은 감정만" },
    { value: "bad", name: "안좋은 감정만" },
]

const ControlMenu = ({ value, onChange, optionList }) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            {optionList.map((it, idx) => <option key={idx} value={it.value}>{it.name}</option>)}
        </select>
    )
}

const DiaryList = ({ diaryList }) => {
    // 정렬 기준 state - 최신순, 오래된순
    const [sortType, setSortType] = useState('latest');
    const [filter, setFilter] = useState("all");

    const getProcessedDiaryList = () => {
        // 비교 함수
        const compare = (a, b) => {
            if (sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        };
        // 깊은 복사
        const copyList = JSON.parse(JSON.stringify(diaryList)); // 문자열로만든후 다시 배열로



        const sortedList = copyList.sort(compare);
        return sortedList;
    };

    return (
        <div className="DiaryList">
            <ControlMenu value={sortType} onChange={setSortType} optionList={sortOptionList} />
            <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />
            {getProcessedDiaryList().map((it) => <div key={it.id}>{it.content} {it.emotion}</div>)}
        </div>
    )
};

DiaryList.defaultProps = {
    diaryList: [],
}

export default DiaryList;