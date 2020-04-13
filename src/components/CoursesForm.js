import React from 'react';
import {getRandomElement} from "../util/random";
import {getErrorMessage, getInputElement, getSelectElement} from "../util/input_elements";

export class CoursesForm extends React.Component {
   //конструктор который делает состояние
    constructor(props) {
        super(props);
        this.minCost = 5000;
        this.maxCost = 15000;
        this.nameMinLength = 4;
        this.digitsId = 5;
        this.titles = ['React', 'HTML CSS', 'JavaScript', 'Java', 'Spring', 'Microservices Architecture'];
        this.state = {
            //то что строится
            courses: {
                id: 0,
                emailAddress: '',
                name: '',
                salary: 0,
                title: this.titles[0]
            },
            //пустой объект
            error: {}
        };
        this.submit = this.submit.bind(this);
        this.handlerId = this.handlerId.bind(this);
        this.handlerName = this.handlerName.bind(this);
        this.handlerCost = this.handlerCost.bind(this);
        this.handlerNonValidated = this.handlerNonValidated.bind(this);
    }
  //у сабмита нет проверок, есть liftingStateUp, -employee подымает в addEmployeeFn, если возвращает false -! то errorId
    submit(event) {
        event.preventDefault();
        if (!this.props.addCoursesFn(this.state.courses)) {
            this.state.error.errorId = `Courses ${this.state.courses.id} already exists`;
            this.setState({
                error: this.state.error
            })
        }
    }
    handlerId(event) {
        const id = event.target.value;
        const error = this.state.error;
        error.errorId = ''; //обнуление ошибки
        const courses = this.state.courses;
        if (id.length != this.digitsId) {//если длинна меньше той которая должна быть, то
            error.errorId = 'Number of ID digits should be ' + this.digitsId;
        } else if(+id < 0) {
            error.errorId = 'id can\'t be negative number';
        } else if(id.indexOf(".") >= 0) {
            error.errorId = 'id can\'t be fraction number';
        } else {
            courses.id = id;
        }
        this.setState({
            error, courses: courses
        })
    }
    handlerName(event) {
        const name = event.target.value;
        const error = this.state.error;
        error.errorName = '';
        const courses = this.state.courses;
        if (name.length < this.nameMinLength) {
            error.errorName = 'Minimal name length should be ' + this.nameMinLength
        } else {
            courses.name = name;
            this.fillCoursesAddress();
        }
        this.setState({
            error, courses: courses
        })
    }
    fillCoursesAddress() {
        if (this.state.courses.id && this.state.courses.name) {
            if (!this.state.courses.emailAddress) {
                this.state.courses.emailAddress = '@';
            }
            const emailAddressFirstPart = this.state.courses.name + this.state.courses.id.substr(0, 3);
            const index = this.state.courses.emailAddress.indexOf("@");
            const emailAddressSecondPart = this.state.courses.emailAddress.substr(index);
            this.state.courses.emailAddress = emailAddressFirstPart + emailAddressSecondPart;
            this.setState({
                courses: this.state.courses
            })
        }
    }
    handlerCost(event) {
        const salary = +event.target.value;
        this.state.error.errorSalary = '';
        if (salary < this.minCost || salary > this.maxCost) {
            this.state.error.errorSalary = `salary should be in rang ${this.minCost}-${this.maxCost}`;
        } else {
            this.state.courses.salary = salary;
        }
        this.setState({
            error: this.state.error,
            courses: this.state.courses
        })
    }
    handlerNonValidated(event) {
        this.state.courses[event.target.name] = event.target.value;
        this.setState({
            courses: this.state.courses
        })
    }
    validate() {
        const res =  this.notErrors() && this.allFields();
        console.log(this.state);
        return res;
    }
    
    render() {

        return <div className="card">
            <div className="card-header">
                <h2>Courses Data Form</h2>
            </div>
            <div className="card-body">
                <form onSubmit={this.submit}>
                    {getInputElement('number', 'id', 'Enter Courses ID', this.handlerId)}
                    {getErrorMessage(this.state.error.errorId)}
                    {getInputElement('text', 'name', 'Enter Courses Name', this.handlerName)}
                    {getErrorMessage(this.state.error.errorName)}
                    {getInputElement('email', 'emailAddress', 'Enter email address', this.handlerNonValidated,
                        this.state.courses.emailAddress)}
                    {getInputElement('number', 'cost', 'Enter Cost', this.handlerCost)}
                    {getErrorMessage(this.state.error.errorSalary)}
                    {getSelectElement('title', this.handlerNonValidated, 'Select Title', this.titles)}
           
                    <button type="submit" disabled={!this.validate()}>Add Courses</button>
                </form>
            </div>
        </div>
    }

    notErrors() {
        return Object.values(this.state.error).reduce((res, field) => {
                return res && !field
        }, true)
    }

    allFields() {
        return Object.values(this.state.courses).reduce((res, field) => {
                return res && field
        }, true)
    }
}
