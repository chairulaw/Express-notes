import dayjs from "dayjs";

export const date = () => {
    return dayjs().format("YYYY-MM-DD");
}