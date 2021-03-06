import * as React from "react"
import BookingDialog from "./BookingDialog"

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
const blockedDates = [
  { year: 2022, month: 0, day: 11 },
  { year: 2022, month: 0, day: 12 },
  { year: 2022, month: 0, day: 13 },
  { year: 2022, month: 0, day: 14 },
  { year: 2022, month: 0, day: 15 },
  { year: 2022, month: 0, day: 16 },
  { year: 2022, month: 0, day: 17 },
  { year: 2022, month: 0, day: 18 },
  { year: 2022, month: 0, day: 19 },
  { year: 2022, month: 0, day: 20 },
  { year: 2022, month: 0, day: 21 },
  { year: 2022, month: 0, day: 22 },
  { year: 2022, month: 0, day: 23 },
  { year: 2022, month: 0, day: 24 },
  { year: 2022, month: 0, day: 25 },
  { year: 2022, month: 0, day: 26 },
  { year: 2022, month: 0, day: 27 },
  { year: 2022, month: 0, day: 28 },
  { year: 2022, month: 0, day: 29 },
  { year: 2022, month: 0, day: 30 },
  { year: 2022, month: 0, day: 31 },
]

export default class AvailabilityCalendar extends React.Component {
  constructor(props) {
    super(props)
    this.bookingDialog = React.createRef()

    this.previousMonth = this.previousMonth.bind(this)
    this.nextMonth = this.nextMonth.bind(this)
    this.removeParticipant = this.removeParticipant.bind(this)
    this.addParticipant = this.addParticipant.bind(this)

    let d = { year: 2022, month: 0, day: dateToday.getDate() }
    let flag = true
    while (flag) {
      if (
        blockedDates.some(
          e => e.year === d.year && e.month === d.month && e.day === d.day
        )
      ) {
        console.log("blocked")
        if (d.day + 1 > new Date(d.year, d.month, 0).getDate()) {
          if (d.month + 1 > 11) {
            d.year++
            d.month = 0
            d.day = 1
          } else {
            d.month++
            d.day = 1
          }
        } else d.day++
      } else {
        console.log("safe")
        flag = false
      }
    }

    this.state = {
      selectedDate: d,
      displayMonth: Math.max(dateToday.getMonth(), d.month),
      displayYear: Math.max(dateToday.getFullYear(), d.year),
      participantCount: 1,
      experience: this.props.experience,
    }
  }

  previousMonth() {
    if (this.state.displayMonth === 0)
      this.setState({
        displayYear: this.state.displayYear - 1,
        displayMonth: 11,
      })
    else this.setState({ displayMonth: this.state.displayMonth - 1 })
  }

  removeParticipant() {
    if (this.state.participantCount > 1)
      this.setState({
        participantCount: this.state.participantCount - 1,
      })
  }

  addParticipant() {
    this.setState({
      participantCount: this.state.participantCount + 1,
    })
  }

  nextMonth() {
    if (this.state.displayMonth === 11)
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
        <li
          key={"o" + i}
          className="flex items-center justify-center bg-stone-400 p-3 sm:p-6 "
        >
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
      let clickable = true
      let flag = "bg-stone-200 hover:bg-stone-300 cursor-pointer available"
      if (
        blockedDates.some(
          e =>
            e.year === this.state.displayYear &&
            e.month === this.state.displayMonth &&
            e.day === i
        )
      ) {
        flag = "bg-red-700 hover:bg-red-700 text-white cursor-default"
        clickable = false
      }

      if (
        (this.state.displayYear === dateToday.getFullYear() &&
          this.state.displayMonth === dateToday.getMonth() &&
          i < dateToday.getDate()) ||
        this.state.displayYear < dateToday.getFullYear() ||
        (this.state.displayYear === dateToday.getFullYear() &&
          this.state.displayMonth < dateToday.getMonth())
      ) {
        flag = "bg-stone-400 hover:bg-stone-400 cursor-default"
        clickable = false
      }
      if (
        this.state.displayYear === this.state.selectedDate.year &&
        this.state.displayMonth === this.state.selectedDate.month &&
        i === this.state.selectedDate.day
      ) {
        flag = "bg-green-700 hover:bg-green-700 text-white cursor-default"
        clickable = false
      }
      days.push(
        <li
          key={"n" + i}
          className={"flex items-center justify-center p-3 sm:p-6 " + flag}
          onClick={
            clickable
              ? () =>
                  flag.includes("available")
                    ? this.setState({
                        selectedDate: {
                          year: this.state.displayYear,
                          month: this.state.displayMonth,
                          day: i,
                        },
                      })
                    : ""
              : null
          }
          onKeyDown={
            clickable
              ? () =>
                  flag.includes("available")
                    ? this.setState({
                        selectedDate: {
                          year: this.state.displayYear,
                          month: this.state.displayMonth,
                          day: i,
                        },
                      })
                    : ""
              : null
          }
          role={clickable ? "button" : "presentation"}
        >
          <span>{i}</span>
        </li>
      )
    }

    return (
      <>
        <ul
          className="grid grid-cols-7 w-full sm:w-auto"
          data-selectedyear={this.state.selectedDate.year}
          data-selectedmonth={this.state.selectedDate.month}
          data-selectedday={this.state.selectedDate.day}
        >
          <li
            key="head-col"
            className="col-span-7 flex items-center justify-center bg-sky-700 p-3 sm:p-6"
          >
            <div
              role="button"
              className="mr-auto p-6 cursor-pointer text-white hover:text-stone-300"
              onClick={this.previousMonth}
              onKeyDown={e => (e.key === "Enter" ? this.previousMonth() : null)}
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
              <span className="text-2xl text-white">
                {MonthNames[this.state.displayMonth]}
              </span>
              <span className="text-2xl text-white">
                {this.state.displayYear}
              </span>
            </div>
            <div
              role="button"
              className="ml-auto p-6 cursor-pointer text-white hover:text-stone-300"
              onClick={this.nextMonth}
              onKeyDown={e => (e.key === "Enter" ? this.nextMonth() : null)}
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>

          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(weekDay => (
            <li
              key={weekDay}
              className="flex items-center justify-center bg-stone-100 p-3 sm:p-6"
            >
              <span>{weekDay}</span>
            </li>
          ))}

          {days}
        </ul>
        <div className="flex items-center justify-end px-6 sm:px-0 mt-6">
          <div className="flex items-center py-3 sm:py-6">
            <span className="text-lg sm:text-2xl">Participants</span>
          </div>
          <div className="flex items-center justify-center">
            <div
              className="p-3 sm:p-6 cursor-pointer hover:text-red-700"
              onClick={this.removeParticipant}
              onKeyDown={e =>
                e.key === "Enter" ? this.removeParticipant() : null
              }
              role="button"
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-lg sm:text-2xl px-3 sm:px-6">
              {this.state.participantCount}
            </span>
            <div
              className="p-3 sm:p-6 -mr-3 sm:-mr-6 cursor-pointer hover:text-green-700"
              onClick={this.addParticipant}
              onKeyDown={e =>
                e.key === "Enter" ? this.addParticipant() : null
              }
              role="button"
              tabIndex={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="px-6 sm:px-0 flex flex-col text-right items-end">
          <span className="text-xl sm:text-2xl">
            {new Date(
              this.state.selectedDate.year,
              this.state.selectedDate.month,
              this.state.selectedDate.day
            ).toDateString()}
          </span>
          <span className="text-xl sm:text-2xl">
            {this.state.participantCount} x{" "}
            {String(this.state.experience.priceIsk).replace(
              /(.)(?=(\d{3})+$)/g,
              "$1."
            )}{" "}
            ISK
          </span>
          <span className="text-xl sm:text-2xl">
            TOTAL{" "}
            <strong className="font-medium">
              {String(
                this.state.participantCount * this.state.experience.priceIsk
              ).replace(/(.)(?=(\d{3})+$)/g, "$1.")}{" "}
              ISK
            </strong>
          </span>
          <button
            onClick={() => this.bookingDialog.current.openModal()}
            className="mt-3 bg-sky-700 hover:bg-sky-800 text-white cursor-pointer inline-flex justify-center w-full sm:w-auto px-6 sm:px-12 py-3 rounded-md"
          >
            <span className="text-xl sm:text-2xl">Book now</span>
          </button>
        </div>
        <BookingDialog calendar={this} ref={this.bookingDialog} />
      </>
    )
  }
}
