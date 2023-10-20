import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const [searchParams, setSerchParams] = useSearchParams();

    const id = searchParams.get('id');
    console.log("id : ", id);

    const mode = searchParams.get('mode');
    console.log("mode : ", mode);

    return (
        <div>
            <h1>Edit</h1>
            <p>이곳은 일기 수정 페이지 입니다.</p>
            <button onClick={() => setSerchParams({ who: 'kwonsubin' })}>Query String 바꾸기</button>
            <button onClick={() => { navigate("/home"); }}>HOME으로 가기</button>
        </div>
    )
}

export default Edit;