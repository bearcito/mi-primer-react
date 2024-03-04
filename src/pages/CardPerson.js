import React, { Component } from 'react';

class CardPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    age: 45,
                    hairColor: "black",
                    firstName: "Jane Doe"
                },
                {
                    age: 88,
                    hairColor: "Brown",
                    firstName: "Smith Jhon"
                }
            ]

            // ageperson1: 45,
            // haircolorperson1: "black",
            // firstnameperson1: "Jane doe",
            // ageperson2: 88,
            // haircolorperson2: "brown",
            // firstnameperson2: "smith jhon"

        };
    }
    //  changeAgePerson1 = () => {
    //      this.setState({
    //          ageperson1: this.state.ageperson1 + 1
    //      })

    //  }
    //  changeAgePerson2 = () => {
    //      this.setState({
    //          ageperson2: this.state.ageperson2 + 1
    //      })
    //  }
    changeAge = (index) => {
        // this.setState({
        //     persons[index].age + 1
        // })
        console.log(this.state.persons[index]);
        const updatepersons = [...this.state.persons]
        updatepersons[index].age++
        this.setState({
            persons: updatepersons
        })

    }
    render() {
        return (
            <div>
                {this.state.persons.map((person, index) => (
                    <div key={index}>
                        <h1>
                            {person.firstName}
                        </h1>
                        <p>Age: {person.age}</p>
                        <p>Hair color: {person.hairColor}</p>
                        <button onClick={() =>
                            this.changeAge(index)
                        }>
                            Birthday Button for {person.firstName}
                        </button >
                    </div>
                ))}
                {/* <h1>
                    {this.state.firstnameperson1}
                </h1>
                <p>
                    Age: {this.state.ageperson1}
                </p>
                <p>

                    Hair color: {this.state.haircolorperson1}
                </p>
                <button onClick={() => this.changeAgePerson1()}>birthday Button for Jane Doe</button>

                <h1>
                    {this.state.firstnameperson2}
                </h1>
                <p>
                    Age: {this.state.ageperson2}
                </p>
                <p>

                    Hair color: {this.state.haircolorperson2}
                </p>
                <button onClick={() => this.changeAgePerson2()}>birthday Button for Jane Doe</button> */}
            </div>


        )
    }
}
export default CardPerson;