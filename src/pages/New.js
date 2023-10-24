import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `감정 일기장 - 새 일기`; // 배열로 반환
    }, [])

    return (
        <div>
            <DiaryEditor />
        </div>
    )
}

export default New;