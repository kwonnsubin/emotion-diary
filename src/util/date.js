export const getStringdate = (date) => {
    return date.toISOString().slice(0, 10); // ISO 형식의 문자열을 반환
};