'use client';
import moment from 'moment';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

export function Age(props: { birthday: Date }): any {
  const startDate = moment(props.birthday);
  const today = moment();
  const duration = moment.duration(today.diff(startDate));
  return <span>{Math.floor(duration.asWeeks())}</span>;
}

export default function Home() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const birthday = new Date(parseInt(searchParams.get('birthday') ?? ""));


  if (birthday && name) {
    return (
      <div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl dark:text-white dark:text-white/80">{name} is <Age birthday={birthday} /> weeks old</h1>
            <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8 dark:text-white dark:text-white/80">{name} was born on {birthday.toDateString()}.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link className="text-sm/6 font-semibold dark:text-white" href="/new">Calculate your baby's age<span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link className="text-sm/6 font-semibold dark:text-white" href="/new">Calculate your baby's age<span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    )
  }


}
