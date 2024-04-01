const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekDay: string[] = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
export const getCurrentTime = (): string => {
    const now: Date = new Date();
    const day: string = weekDay[now.getDay()];
    const month: string = months[now.getMonth()];
    const date: number = now.getDate();
    let hours: number | string = now.getHours();
    let min: number | string = now.getMinutes();
    const sec: number = now.getSeconds()
    let format: string = "AM";

    if (hours > 11) {
        format = "PM";
        if (hours > 12) hours -= 12;
    }
    if (min < 10) min = "0" + min;

    return `${month} ${date} | ${day} | ${hours}:${min} ${format}`;
}