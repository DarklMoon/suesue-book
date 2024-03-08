import * as React from "react"
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

export default function DatePicker() {
    return (
        <>
        <div className="border-2">
            <Datetime value={new Date()}/>
        </div>
        </>
    )
}