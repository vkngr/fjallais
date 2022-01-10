import * as React from "react"

const MonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const dateToday = new Date()
const daysInMonth = new Date(
  dateToday.getMonth(),
  dateToday.getFullYear(),
  0
).getDate()
const blockedDates = [{ year: 2022, month: 0, day: 11 }]

export default class AvailabilityCalendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDate: { year: 2022, month: 0, day: dateToday.getDate() },
      displayMonth: dateToday.getMonth(),
      displayYear: dateToday.getFullYear(),
    }

    this.previousMonth = this.previousMonth.bind(this)
    this.nextMonth = this.nextMonth.bind(this)
  }

  previousMonth() {
    if (this.state.displayMonth == 0)
      this.setState({
        displayYear: this.state.displayYear - 1,
        displayMonth: 11,
      })
    else this.setState({ displayMonth: this.state.displayMonth - 1 })
  }

  nextMonth() {
    if (this.state.displayMonth == 11)
      this.setState({
        displayYear: this.state.displayYear + 1,
        displayMonth: 0,
      })
    else this.setState({ displayMonth: this.state.displayMonth + 1 })
  }

  render() {
    let days = []
    for (
      let i = 0;
      i < new Date(this.state.displayYear, this.state.displayMonth, 0).getDay();
      i++
    ) {
      days.push(
        <li className="flex items-center justify-center bg-stone-400 p-6 ">
          <span></span>
        </li>
      )
    }
    for (
      let i = 1;
      i <=
      new Date(
        this.state.displayYear,
        this.state.displayMonth + 1,
        0
      ).getDate();
      i++
    ) {
      let flag = "available"
      if (
        blockedDates.some(
          e =>
            e.year == this.state.displayYear &&
            e.month == this.state.displayMonth &&
            e.day == i
        )
      )
        flag = "bg-red-700 hover:bg-red-700 text-white cursor-default"
      if (
        (this.state.displayYear == dateToday.getFullYear() &&
          this.state.displayMonth == dateToday.getMonth() &&
          i < dateToday.getDate()) ||
        this.state.displayYear < dateToday.getFullYear() ||
        (this.state.displayYear == dateToday.getFullYear() &&
          this.state.displayMonth < dateToday.getMonth())
      )
        flag = "bg-stone-400 hover:bg-stone-400 cursor-default"
      if (
        this.state.displayYear == this.state.selectedDate.year &&
        this.state.displayMonth == this.state.selectedDate.month &&
        i == this.state.selectedDate.day
      )
        flag = "bg-green-700 hover:bg-green-700 text-white cursor-default"
      days.push(
        <li
          className={
            "flex items-center justify-center bg-stone-200 hover:bg-stone-300 cursor-pointer p-6 " +
            flag
          }
          onClick={() =>
            flag == "available"
              ? this.setState({
                  selectedDate: {
                    year: this.state.displayYear,
                    month: this.state.displayMonth,
                    day: i,
                  },
                })
              : ""
          }
        >
          <span>{i}</span>
        </li>
      )
    }

    return (
      <ul
        className="grid grid-cols-7"
        data-selectedyear={this.state.selectedDate.year}
        data-selectedmonth={this.state.selectedDate.month}
        data-selectedday={this.state.selectedDate.day}
      >
        <li className="col-span-7 flex items-center justify-center bg-sky-700 p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 mr-auto text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={this.previousMonth}
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <div className="flex flex-col gap-3 items-center justify-center">
            <span className="text-2xl text-white">
              {MonthNames[this.state.displayMonth]}
            </span>
            <span className="text-2xl text-white">
              {this.state.displayYear}
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 ml-auto text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={this.nextMonth}
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </li>

        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(weekDay => (
          <li className="flex items-center justify-center bg-stone-100 p-6">
            {weekDay}
          </li>
        ))}

        {days}
      </ul>
    )
  }
}
