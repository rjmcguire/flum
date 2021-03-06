import { Component, createElement as $ } from 'react'
import { render } from 'react-dom'

import { Form, Input } from '../src/index'

class App extends Component {

    onSubmit = fields => {
        console.log(fields)
    }

    onChange = state => {
        console.log(state)
    }

    render() {
        return (
            $('div', {},
                $(Form, {onSubmit: this.onSubmit, getContext: context => this.formContext = context, onChange: this.onChange},
                    $('div', {},
                        $(Input, {id: 'user.firstName', validation: 'numeric|required|max:25', placeholder: "First Name"}),
                        $(Input, {id: 'user.lastName', validation: 'numeric|required|max:25', placeholder: "Last Name"}),

                        $('button', {type: 'submit'}, "submit")
                    )
                )
            )
        )
    }
}

window.onload = () => {
    render($(App), document.getElementById('root'))
}