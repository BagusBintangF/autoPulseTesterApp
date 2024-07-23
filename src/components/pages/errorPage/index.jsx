import React from 'react'
import { useRouteError } from 'react-router-dom'
import errorIcon from '../../../assets/img/532740_browser_error_internet page_preferences_settings_icon.svg'

const ErrorPage = (props) => {
    const error=useRouteError();
    console.error(error);
    return (
    <div className="flex h-full w-full justify-center gap-6 text-gray-900" id="error-page ">
        <div className="p-10 ">
            <img src={errorIcon} className="w-[400px] h-[400px]"></img>
            <h1 className="text-3xl font-bold p-4">Oops ! Something went wrong</h1>
            <p className="text-center">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    </div>
  )
}

export default ErrorPage