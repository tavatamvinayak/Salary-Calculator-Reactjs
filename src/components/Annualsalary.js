import React, { useState } from 'react'

function Annualsalary() {
    const [AnualSalary, setAnualSalary] = useState()    // name input
    const [Workingdays, setWorkingdays] = useState()    // name input
    const [WorkingHours, setWorkingHours] = useState()  // name input
    const [MonthlySalary, setMonthlySalary] = useState()  // name input
      
    // showing value
    const [AnualSalary2, setAnualSalary2] = useState()
    const [Monthly, setMonthly] = useState(0);
    const [Daily, setDaily] = useState(0);
    const [Hour, setHour] = useState(0);
    const [Minute, setMinute] = useState(0);
    const [Second, setSecond] = useState(0);

    //onChange input
    const handleInput1 = (e) => {
        setAnualSalary(e.target.value)

    }
    const handleInput2 = (e) => {
        setWorkingdays(e.target.value)
    }
    const handleInput3 = (e) => {
        setWorkingHours(e.target.value)
    }
    const handleInput4 = (e) => {
        setMonthlySalary(e.target.value)
    }


    // click
    const calculator1 = () => {
        setMonthly(
            Number(AnualSalary) / Number(12)
        )
        setDaily(
            Number(Number(AnualSalary) / Number(12)) / Number(Workingdays)
        )
        setHour(
            Number(Number(Number(AnualSalary) / Number(12)) / Number(Workingdays)) / Number(WorkingHours)
        )
        setMinute(
            Number(Number(Number(Number(AnualSalary) / Number(12)) / Number(Workingdays)) / Number(WorkingHours)) / Number(60)
        )
        setSecond(
            Number(Number(Number(Number(Number(AnualSalary) / Number(12)) / Number(Workingdays)) / Number(WorkingHours)) / Number(60)) / Number(60)
        )
        //console.log
        console.log(Number(AnualSalary) / Number(12))
        console.log(Number(Number(AnualSalary) / Number(12)) / Number(Workingdays))
        console.log(Number(Number(Number(AnualSalary) / Number(12)) / Number(Workingdays)) / Number(WorkingHours))
        console.log(Number(Number(Number(Number(AnualSalary) / Number(12)) / Number(Workingdays)) / Number(WorkingHours)) / Number(60))
        console.log(Number(Number(Number(Number(Number(AnualSalary) / Number(12)) / Number(Workingdays)) / Number(WorkingHours)) / Number(60)) / Number(60))

    }
const calculator2 =()=>{
    setAnualSalary2(Number(MonthlySalary) * Number(12))
    console.log(Number(MonthlySalary) * Number(12))
}
const clear =()=>{
    setAnualSalary2(0)
    setMonthly(0)
    setDaily(0)
    setHour(0)
    setMinute(0)
    setSecond(0)
}
    // css
    const inptstyle = {
        width: '100%'
    }
    return (
        <div>
            <div className="container bg-dark-subtle ">
                <div className="row justify-content-start">
                    <div class="row justify-content-center">
                        <div class="col-4 bg-white rounded-4 text-black p-5 m-1">
                           
                                <h1 >Anual Salary</h1>

                                <input type="number " style={inptstyle} placeholder="enter Anual Salary" name='AnualSalary' onChange={handleInput1} /><br />
                                <input type="number" style={inptstyle} placeholder="how many days you work" name='Workingdays' onChange={handleInput2} /><br />
                                <input type="number" style={inptstyle} placeholder="how many hours you work" name='WorkingHours' onChange={handleInput3} />
                                <br /><button onClick={calculator1} className='bg-warning'>calculator</button>
                                <p>monthly salary</p>
                                <h1 > {Monthly} </h1>

                                <p>daily salary</p>
                                <h1 > {Daily} </h1>

                                <p>1 hour salary</p>
                                <h1 > {Hour} </h1>

                                <p>1 minite salary</p>
                                <h1 > {Minute} </h1>

                                <p>1 Second salary</p>
                                <h1 > {Second} </h1>
                            
                        </div>
                        <div class="col-4 bg-white rounded-4 text-black p-5 m-1">
                            <h1>monthly salary</h1>
                        <input type="number" style={inptstyle} placeholder="Monthly Salary" name='MonthlySalary' onChange={handleInput4} /><br />
                        <button onClick={calculator2} className='bg-warning'>calculator</button>
                        <p>Anual Salary</p>
                        <h1> {AnualSalary2} </h1>

                        <br /><br /> <button onClick={clear}> All Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Annualsalary
