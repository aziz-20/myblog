export default function GetFormatedDate(date) {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return `${month} ${day}, ${year}`;
}
 