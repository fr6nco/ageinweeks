"use client";

import { useTranslations } from 'next-intl';
import Form from 'next/form'
import { SetStateAction, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker'

export default function Page() {
    const tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

    const [birthday, setBirthday] = useState({
        startDate: tenYearsAgo,
        endDate: tenYearsAgo
    });
    
    const t = useTranslations('NewPage');

    return (
        <Form action="/">
            <div className="sm:col-span-4">
                <label htmlFor="name" className="block text-sm/6 font-medium">{t('name')}</label>
                <div className="mt-2">
                    <input id="name" name="name" type="text" className="block w-full rounded-md bg-white px-3 py-2.5 text-base outline-1 outline-gray-300 border border-5 border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6 relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full dark:text-gray-950 border-gray-300 dark:bg-gray-300 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20" />
                </div>
            </div>

            <div className="sm:col-span-4">
                <label htmlFor="birthday" className="pt-4 block text-sm/6 font-medium">{t('birthday')}</label>
                <div className="mt-2">
                    <Datepicker
                        placeholder="Pick birthday"
                        asSingle={true}
                        useRange={false}
                        value={birthday}
                        containerClassName='rounded-md outline-1 outline-gray-300 border border-5 border-gray-300 dark:bg-gray-100'
                        inputClassName="block w-full rounded-md bg-white px-3 py-2.5 text-base outline-1 outline-gray-300 border border-5 border-gray-300 placeholder:text-gray-900 focus:outline-2  focus:outline-indigo-600 sm:text-sm/6 relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-gray-300 dark:text-gray-950 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20"
                        toggleClassName="hidden"
                        popoverDirection='down'
                        onChange={newValue => setBirthday(newValue as SetStateAction<{ startDate: Date, endDate: Date }>)}
                    />
                    <input id="birthday" name="birthday" type="hidden" value={birthday.startDate.getTime()} />
                </div>
            </div>

            <div className="sm:col-span-4 pt-4">
                <button type="submit" className="rounded-md bg-gray-600  px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                    {t('submit')}
                </button>
            </div>
        </Form>
    )
}

