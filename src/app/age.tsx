'use client';
import moment from "moment";

export default function Age(props: { birthday: Date }) {
  const startDate = moment(props.birthday);
  const today = moment();
  const duration = moment.duration(today.diff(startDate));
  return <span>{Math.floor(duration.asWeeks())}</span>;
}