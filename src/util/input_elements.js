import React from "react";

export function getInputElement(label, type, handler, name, value) {
    return <div className="form-group">
        <label>{label}</label>
        <input type={type} name={name} value={value} className="form-control" onChange={handler}/>
    </div>
}
//1ый return передается из функции в map в котором
// есть массив строк, а на выходе массив элементов options
export function getOptions(options) {
    return options.map(option => {
        return <option key={option} value={option}> {option} </option>
    })
}
//type есть в самом Select
export function getSelectElement(label, handler, name, options) {
    return <div className="form-group">
        <label>{label}</label>
        <select name={name} className="form-control" onChange={handler}>
            {getOptions(options)}
        </select>
    </div>
}
//если есть ошибка то выдает
export function getErrorMessage(error) {
    return error ? <label className="alert alert-danger">{error}
    </label> : <null> </null>
}
/*
function getRadioButtonElement(name, handler, value) {
    return <div className="form-check" key={value}>
        <label className="form-check-label">
            <input className="form-check-input" type="radio" value={value} name={name} onChange={handler} required/>
            {value}
        </label>
    </div>
}
*/