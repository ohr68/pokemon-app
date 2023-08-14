import { defaultNumberSize } from "@/constants/constants";

export function pad(num: number, size: number): string {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

export function getFormattedNumber(num: number | null): string {
    if (!num)
        return '';

    return `#${pad(num, defaultNumberSize)}`;
}

export function camelCase(str) {
    //capitalize the first letter - as an example. Note the space in " $1".
    const result = str.replace(/([A-Z])/g, " $1");

    return result.charAt(0).toUpperCase() + result.slice(1);
}