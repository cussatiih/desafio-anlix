export default class DateParser {
  static parse(date: string): string {
    const parsedDate = date.split("/").reverse().join("-");

    return parsedDate;
  }
}
